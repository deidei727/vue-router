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
  {
    path: "/root",
    component: () => import("../components/root.vue"),
    children: [
        // 在 Vue 路由中，如果您在子路由的路径中以斜杠 / 开头，子路由将被视为绝对路径，而不是相对于父路由的路径。
        // 因此，在您的路由配置中，您的子路由路径应该是相对于父路由的路径，而不是绝对路径。
        {
            path: "nihao",
            component: () => import("../components/Home.vue"),
          },
          {
            path: "zaijian",
            component: () => import("../components/login.vue"),
          },  
    ],
  },
];
export default routes;