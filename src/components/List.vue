<template>
  <div>嘿嘿哽! 我是列表页面</div>
  <table cellspacing="0" class="table" border="1">
    <thead>
      <tr>
        <th>品牌</th>
        <th>价格</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="item.id" v-for="item in data">
        <th>{{ item.name }}</th>
        <th>{{ item.price }}</th>
        <th>
          <button @click="goDetail(item)">详情</button>
        </th>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { data } from './list.json'
import { useRouter } from 'vue-router'
let router = useRouter()
type Datum = {
  name: string
  price: number
  id: number
}
const goDetail = (item: Datum) => {
  //传递参数有两种方式，params方式已经被弃用了，可以使用pinia方法进行使用
  // query
//   router.push({
//     path: '/details',
//     query: item
//   })
// params 动态路由
router.push({
    name: 'Details',
    params: {
        id:item.id
    }
  })


}
</script>

<style scoped></style>
