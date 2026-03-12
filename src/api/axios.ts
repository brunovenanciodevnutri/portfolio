import { ref } from "vue";
import axios from "axios";
import toastUtils from "@/utils/toast.utils";

export const isLoading = ref(false);

export const axiosInstance = axios.create();
export const axiosRaw = axios.create();

export function attachAuthHeader(request: any) {
  const token = localStorage.getItem("token");

  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }

  return request;
}

axiosInstance.interceptors.request.use((request) => {
  isLoading.value = true;
  return attachAuthHeader(request);
});

axiosRaw.interceptors.request.use(attachAuthHeader);

axiosInstance.interceptors.response.use(
  (response) => {
    isLoading.value = false;
    return response;
  },
  (error) => {
    isLoading.value = false;

    if (error.response) {
      if (error.response.status === 403) {
        toastUtils.error(error.response.data.errors?.[0] || "Acesso negado");
      } else if (error.response.status === 401) {
        localStorage.removeItem("token");

        delete axiosInstance.defaults.headers.common["Authorization"];
        toastUtils.error(
          "Sua sessão expirou. Por favor, faça login novamente."
        );
        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }
      } else {
        toastUtils.error(
          error.response.data.errors?.[0] ||
            `Ocorreu um erro ao processar sua solicitação`
        );
      }
    } else {
      toastUtils.error(`Erro de conexão com o servidor`);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
