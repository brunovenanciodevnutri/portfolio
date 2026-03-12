import { toast as sonner } from "vue-sonner";

class ToastUtils {
  success(message: string) {
    sonner.success(message);
  }

  error(message: string) {
    sonner.error(message);
  }

  warning(message: string) {
    sonner.warning(message);
  }

  info(message: string) {
    sonner(message);
  }
}

export default new ToastUtils();
