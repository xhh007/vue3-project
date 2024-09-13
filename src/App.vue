<script setup>
// export default {
//   setup() {
//     const msg = '这是一条消息'
//     const logMsg = () => {
//       console.log(msg)
//     }
//     return {
//       msg,
//       logMsg
//     }
//   },
// }


// reactive
import {ref, watch} from 'vue'
import {useCounterStore} from '@/stores/counter'
const counter = useCounterStore()
console.log('counter', counter)
const state = ref({
  count: 0,
  name: '人'
})
const setCount = () => {
  state.value.count++
}
const setName = () => {
  state.value.name+=" 哈"
}
watch([() => state.value.name], (n,o) => {
  console.log('watch', n, o)
})
</script>
<template>
  <!-- <div>{{msg}}</div>
  <button @click="logMsg">log</button> -->

  <button @click="setCount">{{state.count}}</button>
  <button @click="setName">{{state.name}}</button>
  <div></div>
  <button @click="counter.addCount()">pinia- {{counter.count}} - {{counter.doubleCount}}</button>
</template>
