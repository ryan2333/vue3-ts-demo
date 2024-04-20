<template>
  <div class="talk">
    <button @click="getTalk">获取一句土味情话</button>
    <ul>
      <li v-for="t in talkStore.talkList" :key="t.id">{{ t.title }}</li>
    </ul>
  </div>
</template>


<script lang="ts" setup name="LoveTalk">
import { reactive } from "vue";
import axios from "axios";
import { nanoid } from 'nanoid'
import { useTalkStore } from "@/store/LoveTalk";

const talkStore = useTalkStore()

async function getTalk() {
  // 从ret中解构data，再从data中解构content并重命名为title
  // let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
  // talkList.unshift({
  //   id: nanoid(), title: title
  // })
}
</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>