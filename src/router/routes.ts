const routes = [
  {
    path: "/",
    component: () => import("../components/Home.vue"),
    // redirect:'/login',
  },
  {
    path: "/succeed",
    component: () => import("../components/succeed.vue"),
    meta: {
      title: "成功登陆页",
      transition: "animate__bounceIn",
    },
  },

  {
    path: "/home",
    name: "Home",
    component: () => import("../components/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/login.vue"),
    // 路由元信息,可以添加自定义的数据，可以使用route.meta方法进行获取元信息，或者导航路由中国使用route.matched数组
    meta: {
      title: "登陆",
      requiresAuth: false,
      transition: "animate__bounceIn",
    },
  },

  {
    path: "/details",
    name: "Details",
    component: () => import("../components/Details.vue"),
    // 重定向有三种写法
    // 方法一：传入路径字符串
    // redirect:'/home'

    // 方法二：传入对象
    // redirect:{
    //     path: "/home",
    // }

    // 方法三：传入回调函数 可以传参数
    redirect: (to) => {
      return {
        path: "/home",
        query: to.query,
      };
    },
  },
  {
    path: "/list",
    name: "List",
    component: () => import("../components/List.vue"),
  },
  {
    path: "/root",
    component: () => import("../components/root.vue"),
    // 使用alias进行定义别名，访问/root，/root1 ，/root2，/root3都是访问root.vue这个文件
    alias: ["/root", "/root2", "/root3"],
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
  {
    path: "/menu",
    components: {
      default: () => import("../components/menu.vue"),
    },
  },
  {
    path: "/content",
    components: {
      a: () => import("../components/a.vue"),
      b: () => import("../components/b.vue"),
    },
  },
];
export default routes;
