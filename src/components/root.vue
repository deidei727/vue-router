<template>
    <div>
        <h1>
        我是根组件
        </h1>
        <hr>
       <h2>
        我是子路由
       
       </h2>

       <router-link to="/root/nihao">回家</router-link>&nbsp
       <router-link to="/root/zaijian">去登陆</router-link>


        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>