<!-- Composition Api -->
<template>
  <div>
    <h1>Name: {{ name }}</h1>
    <h1>Age: {{ age }}</h1>
    <button @click="showTel">查看联系方式</button>
    <button @click="changeName">修改名称</button>
    <button @click="changeAge">修改年龄</button>

    <h2>数量：{{ car.num }}</h2>
    <h2>总价：{{ car.num * car.price }}</h2>
    <button @click="buyCar">购买汽车</button>
    <hr>
    <h2>游戏列表:</h2>
    <ul>
      <li v-for="i in games" :key="i.id">{{ i.name }}</li>
      <button @click="addGames">addGames</button>
    </ul>
  </div>
</template>


<script lang="ts" setup name="Person">
import { reactive, ref } from 'vue'
// 声明响应式数据,ref(初始值),基本类型的数据
let name = ref("zhangsan")
let age = ref(18)
let tel = "11011011011"
let car = reactive({ // reactive(初始值)，只能定义对象类型响应式数据
  brand: "benci",
  price: 100,
  num: 1
})
let games = reactive([
  { "id": "id01", name: "三国" },
  { "id": "id02", name: "原神" },
  { "id": "id03", name: "剑侠" },
])

function addGames() {
  games.push({ id: "id" + games.length, name: "custom0" + games.length })
}

function buyCar() {
  car.num += 1
  console.log(car.num)
}
function changeAge() {
  age.value += 1 // js中操作ref数据，必须+.value,修改响应式数据，页面也会发生变化
}

function changeName() {
  name.value = "lisi" // 修改响应式数据，页面也会发生变化
}

function showTel() {
  alert(tel)
}
</script>

<style></style>