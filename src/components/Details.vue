<template>
    <div>
<h1>
    我是详情页
</h1>
<div>
    品牌：{{ findData?.name }}
</div>
<div>
    价格：{{ findData?.price }}
</div>
<div> 
    ID:{{ route.params.id }}
</div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { data } from './list.json'
let route = useRoute()
const findData =data.find((item)=>{
   return  item.id===Number(route.params.id)
})
console.log(findData)

console.log(route.params.id)
</script>

<style scoped>

</style>