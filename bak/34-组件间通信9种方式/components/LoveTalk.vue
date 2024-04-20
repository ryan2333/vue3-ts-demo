<template>
  <div class="talk">
    <button @click="getTalk">获取一句土味情话</button>
    <ul>
      <li v-for="t in talkStore.talkList" :key="t.id">{{ t.title }}</li>
    </ul>
  </div>
</template>


<script lang="ts" setup name="LoveTalk">
import { useTalkStore } from "@/store/LoveTalk";

const talkStore = useTalkStore()

// 用于监视store中的数据变化
talkStore.$subscribe((mutate, state) => {
  console.log("talkstore里面保存的数据变化了", mutate, state)
})

async function getTalk() {
  // 调用store中的方法
  talkStore.getATalk()
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