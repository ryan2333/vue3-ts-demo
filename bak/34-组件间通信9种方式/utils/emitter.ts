import mitt from "mitt";

const emitter = mitt()

// 绑定事件
// emitter.on('test1', () => {
//   console.log("test1被调用了");
// })

// // 触发事件
// emitter.emit('test1')

// // 解绑事件
// emitter.off('test1')

// // 解绑所有事件
// emitter.all.clear()

export default emitter;