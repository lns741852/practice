<!--單文件式組件-->
<template>
  <div>
    <Setup :toSon="toSon" @injectMsg="responseSon" ref="setupContext"></Setup>
    {{ a }}
    {{ b }}
  </div>
</template>
      
<script setup>
//導入組件後可以直接使用
import Setup from "@/components/Setup.vue";
import { ref } from "vue";

const a = "fixed";
const b = ref("dynamic");

const setupContext = ref();


console.log("=====vue3-ref======")
console.log(setupContext)

</script>
    
<style>
</style>
      