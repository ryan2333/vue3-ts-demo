import { defineStore } from "pinia";

export const useCountStore = defineStore('count', {
  // 真正存储数据的地方
  state() {
    return {
      sum: 6,
      str: "hahaha",
      addr: "Beijing"
    }
  },
  // actions里放置的是一个个动作函数
  actions: {
    increment(val: number) {
      // console.log(val)
      // this表示当前的store对象
      this.sum += val
    },
    decrement(val: number) {
      if (this.sum > 0) {
        this.sum -= val
      }
    }
  },
  getters: {
    // getters的三种写法
    bigSum(state) {
      return state.sum * 10
    },
    upStr: state => state.str.toUpperCase(),
    addrExtra(): string {
      return this.addr + "ChangPin"
    }
  }
})