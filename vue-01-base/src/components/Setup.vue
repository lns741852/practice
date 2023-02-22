<template>
  <div id="Setup">
    {{ refMsg }}
    {{ refObj.name }}
    {{ name }}
    {{ reverseName }}
    {{name}}
    <button @click="changeObj">tuch</button>

    <button @click="sendParent">context</button>

    
  </div>
</template>
      
<script>

import {ref,reactive,toRefs,watch,watchEffect,computed,onMounted,h,inject} from 'vue';
export default {
  name: "Setup",
  props:{
    toSon:{
        type:String,
        default:"",
        require:true
    },
  },
  //組合式API，在create階段創建下列對象及方法
  setup(props,context) {

    /*----------------------接收父------------------------*/ 
    //接收父類屬性
    // toRefs解構後重新組合為響應式對象
    const {toSon} = toRefs(props,'toSon')
    console.log(toSon.value)
    /*--------------------傳父--------------------------*/ 
    const msg =ref("Hi setup")
    //子傳父
    function sendParent(){
        context.emit('injectMsg',msg.value)
    }
    /*--------------------接收祖先--------------------------*/ 
    const name =inject('name')


    /*-----------------字串-----------------------------*/ 

    //屬性透過ref轉成響應式對象 
    const refMsg =ref("hello")  

    function changeMsg(){
        refMsg.value="test"
    }
    watch(refMsg,(newVal,oldVal)=>{})
    //計算屬性
    const reverseMsg = computed(()=>{
        return refMsg.value.split('').reverse().join('')
    })
    /*--------------------對象--------------------------*/ 

    //對象透過reactive轉成響應式對象
    const refObj =reactive({
        name:"Jay",
        age:28,
        //計算屬性
        reverseName : computed(()=>{
        return refObj.name.split('').reverse().join('')})
    })
    function changeObj(){
        refObj.name="Cola"
    }
    //自動監聽依賴，像computed
    watchEffect(()=>{
        console.log(refObj.name)
    })

    /*----------------------------------------------*/ 
    //初始化
    onMounted(()=>{
        changeMsg(),
        changeObj()
    })
    /*
    暴露所有對象及方法
    toRefs將reactive解構ref再組合成List，透過ES6的擴展運算符符值給屬性
    */
    return {refMsg,changeMsg,reverseMsg,refObj,changeObj,...toRefs(refObj),sendParent,name}


    //返回渲染函數，直接取代整個template
    //可搭配expose暴露對象及方法，在父類透過ref獲取
    context.expose({
        sendParent,toSon
    })
    //return ()=> h('div',toSon.value)
  },



};
</script>
    
<style>
</style>
      