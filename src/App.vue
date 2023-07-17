<template>
  <div>
    <h1>路由学习</h1>

    <h2>命名式</h2>
    <!-- 不想在浏览器中留下历史记录，使用replace的方式 -->
    <router-link replace :to="{ name: 'Home' }">跳转首页</router-link>
    <router-link replace to="/login">跳转登陆页</router-link>
    <br />
    <h2>编程式</h2>
    <button @click="goRoute('/home')">跳转的首页</button>
    <button @click="goRoute('/login')" >跳转的登陆页</button>
    <button @click="goRoute('/list')" >跳转到菜单</button>
    <button @click="goRoute('/details')" >跳转到详情页</button>
    <h2>前进后退</h2>
    <button @click="next()" >前进</button>
    <button @click="pre()" >后退</button>

    <hr />
    <h2>路由命名 类似slot</h2>
    <button @click="goRoute('/menu')" >跳转到菜单</button>
    <button @click="goRoute('/content')" >跳转到内容</button>
    <!-- <router-view name="b"></router-view> -->
    <router-view name="a"></router-view>
    <router-view></router-view>
    <hr>

  </div>
</template> 

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
const goRoute=(url:string)=>{
  router.push(url)

  // 在编程式导航中使用router.replace()的方式进行清除历史记录
  // 使用router.replace(url) 也会跳转到url路径中，和push的区别是，replace不留下历史记录
  // router.replace(url)

}
const next=()=>{
  // 前进 前进一步（这里传入的数字是几，就前进几步）
  router.go(1)

}
const pre=()=>{
  router.back()
}
</script>

<style scoped></style>
