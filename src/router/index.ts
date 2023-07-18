import { createRouter, createWebHashHistory } from "vue-router";
import { ElMessage } from "element-plus";

import routes from "./routes";
let router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  scrollBehavior: (to, from, savePosition) => {
    // 这个功能只在支持 history.pushState 的浏览器中可用。
    // 这个savePosition 在浏览器的popstate 导航时才可用（由浏览器的后退/前进按钮触发）。
    if (to.hash) {
      // 滚动到指定的锚点
      return { selector: to.hash };
    } else if (savePosition) {
      return savePosition;
    } else {
      return {
        bottom: 0,
      };
    }
  },
});
const whiteList = ["/"];
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("Token");
  console.log(whiteList.includes(to.path));
  console.log(to.path);
  if (token || whiteList.includes(to.path)) {
    next();
  } else if (to.path == "/succeed") {
    ElMessage({
      message: "Warning, this is a warning message.",
      type: "warning",
    });
    next("/login");
  } else {
    next();
  }
});

export default router;
