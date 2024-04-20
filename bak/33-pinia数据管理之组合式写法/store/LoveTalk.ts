import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";
import { reactive } from "vue";

export const useTalkStore = defineStore('talk', () => {
  const talkList = reactive([
    { id: 'asd001', title: "今天你有点怪，哪里怪？怪好看的" },
    { id: 'asd002', title: "草莓、蓝莓、蔓越莓，今天你想我了没？" },
    { id: 'asd003', title: "心里给你留了一块地，我的死心踏地" }
  ])
  async function getATalk() {
    let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    talkList.unshift({
      id: nanoid(),
      title: title
    })
  }
  return {
    talkList,
    getATalk
  }
})
