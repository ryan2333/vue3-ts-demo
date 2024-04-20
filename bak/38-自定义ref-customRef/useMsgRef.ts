import { customRef } from 'vue'

export default function (initValue: string, delay: number) {
  let timer: number
  // track(跟踪) trigger(触发)
  let msg = customRef((track, trigger) => {
    return {
      // msg被读取时调用 
      get() {
        track() // 告诉vue，msg很重要，需要对msg进行持续关注，一旦msg变化就更新
        return initValue
      },
      // msg被修改时调用
      set(value) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          initValue = value
          trigger() // 通知vue，msg变化了
        }, 1000)
      }
    }
  })
  return {
    msg
  }
}
