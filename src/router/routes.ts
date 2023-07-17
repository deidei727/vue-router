 const routes=[
  {
    path: "/home",
    name: "Home",
    component: () => import("../components/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/login.vue"),
  },  
  {
    path: "/details/:id",
    name: "Details",
    component: () => import("../components/Details.vue"),
  },
  {
    path: "/list",
    name: "List",
    component: () => import("../components/List.vue"),
  },
];
export default routes;