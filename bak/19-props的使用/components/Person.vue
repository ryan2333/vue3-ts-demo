<!-- Composition Api -->

<template>
  <div>
    <h2>a: {{ a }}</h2>
    <ul>
      <li v-for="p in persons" :key="p.id">
        {{ p.id }}--{{ p.name }}---{{ p.age }}</li>
    </ul>
  </div>
</template>


<script lang="ts" setup name="Person">
import { withDefaults } from "vue";
import { type PersonInterface } from '@/types'

// define开头的函数为宏函数，无需引用可直接使用
// 接收props参数
// defineProps(['a', 'persons'])

// 接收props参数,并将props保存
// let props = defineProps(['a', 'persons'])

// 接收props，并限制类型
// defineProps<{ persons: PersonInterface[], a: string }>()

// 接收props，并限制类型 + 限制必要性 + 指定默认值
withDefaults(
  defineProps<{ persons: PersonInterface[], a?: string }>(), {
  a: "hehe",
  persons: () => [{ id: 'asd130', name: "zz", age: 18 }]
})
</script>

<style scoped></style>