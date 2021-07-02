import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  {
    path: "/osnovaniya-polucheniya-rvp",
    name: "RVP1",
    component: () => import("../components/pages/RVP1.vue"),
  },
  {
    path: "/rvp-po-kvote",
    name: "RVP2",
    component: () => import("../components/pages/RVP2.vue"),
  },
  {
    path: "/rvp-bez-kvoti",
    name: "RVP3",
    component: () => import("../components/pages/RVP3.vue"),
  },
  {
    path: "/osnovaniya-polucheniya-vnj",
    name: "VNJ1",
    component: () => import("../components/pages/VNJ1.vue"),
  },
  {
    path: "/vnj-v-uproshennom-poryadke",
    name: "VNJ2",
    component: () => import("../components/pages/VNJ2.vue"),
  },
  {
    path: "/osnovaniya-polucheniya-nrya",
    name: "NRYA1",
    component: () => import("../components/pages/NRYA1.vue"),
  },
  {
    path: "/osnovaniya-dlya-polucheniya-grajdanstva-rf",
    name: "C1",
    component: () => import("../components/pages/C1.vue"),
  },
  {
    path: "/poluchenie-grajdanstva-rf-v-uproshennom-poryadke",
    name: "C2",
    component: () => import("../components/pages/C2.vue"),
  },
  {
    path: "/grajdanstvo-po-nrya",
    name: "C3",
    component: () => import("../components/pages/C3.vue"),
  },
  {
    path: "/grajdanstvo-rf-dlya-detei",
    name: "C4",
    component: () => import("../components/pages/C4.vue"),
  },
  {
    path: "/grajdanstvo-rf-po-braku",
    name: "C5",
    component: () => import("../components/pages/C5.vue"),
  },
  {
    path: "/o-nas",
    name: "Us",
    component: () => import("../components/pages/Us.vue"),
  },
  {
    path: "/kontakti",
    name: "Contacts",
    component: () => import("../components/pages/Contacts.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
