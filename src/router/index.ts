import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title?: string;
    description?: string;
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    meta: { 
      title: "Bruno Venâncio | Software Developer Front-end",
      description: "Portfólio profissional de Bruno Venâncio, desenvolvedor Front-end especializado em Vue.js e TypeScript. Confira meus projetos e entre em contato."
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  const defaultTitle = "Bruno Venâncio | Software Developer Front-end";
  const defaultDescription = "Portfólio profissional de desenvolvedor Front-end especializado em Vue.js e TypeScript";
  
  document.title = (to.meta.title as string) || defaultTitle;
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', (to.meta.description as string) || defaultDescription);
  }
  
  next();
});

export default router;
