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
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    meta: { 
      title: "Bruno Venâncio | Software Developer Full Stack",
      description: "Portfólio profissional de Bruno Venâncio, desenvolvedor Full Stack especializado em Vue.js, React, Node.js, C# e .NET. Confira meus projetos e entre em contato."
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
  const defaultTitle = "Bruno Venâncio | Software Developer";
  const defaultDescription = "Portfólio profissional de desenvolvedor Full Stack";
  
  document.title = (to.meta.title as string) || defaultTitle;
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', (to.meta.description as string) || defaultDescription);
  }
  
  next();
});

export default router;
