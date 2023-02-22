<template>
  <div class="home">
    <img src="images/logo.png" alt="">

    <br>=====================================Base=====================================
    <Base></Base>

    <!-- 父傳子，分動態及靜態 -->
    <br>=====================================父傳子=====================================
    <Components :toSon='toSon' toSonStatic='Hi'></Components>
    <!-- 子傳父 -->
    <br>=====================================子傳父=====================================
    <Components @injectMsg="responseSon"></Components>
    {{ sonMsg }}

    <!-- 父訪問子，透過this.$refs顯示所有訪問結果 -->
    <p ref="p"></p>

    <!--將標籤傳入子組件的插槽-->
    <br>===============================父傳子_Slot===========================================
    <Slot>
      <template v-slot:slotOne>
        <button>Slot</button>
      </template>
    </Slot>

    <br>==============================傳子孫===========================================
    <div>
      <button @click="toEveryone='Hello descendant'">to descendant</button>
    </div>

    <br>=====================================Vue3組件傳遞，ref監聽組件內容=====================================
    <Setup  :toSon='toSon' @injectMsg="responseSon" ref="setupContext"></Setup>
    
    <br>=====================================SFC=====================================
    <SFC ref="setupContext"></SFC>
  
  </div>
</template>

<script>
//導入外部組件
import Base from "@/components/Base.vue";
import Components from "@/components/Components.vue";
import Slot from "@/components/Slot.vue";
import Setup from "@/components/Setup.vue";
import SFC from '@/components/SFC.vue'
import { computed } from '@vue/runtime-core';
import { ref,provide } from 'vue'
export default {
  components: { Base,Components,Slot,Setup,SFC },
  data(){
    return{
      toSon:"hi son",
      sonMsg:"",
      toEveryone:"hi Everyone"
    }
  },
  //vue3
  setup(){
    const name = ref('測試')
    //傳子孫組件
    provide('name',name)
    return {}
  },
  //傳子孫組件
  provide(){
    return {
      //ancestorMsg:() =>this.toEveryone

      //computed返回 ref對象
      ancestorMsg:computed(()=>this.toEveryone)
    }
  },
  methods:{
    responseSon(value){
      this.sonMsg=value    
    }
  },
  mounted(){
    console.log(this.$refs)
  }

};
</script>
