
<!-- 
組件傳遞
    1.父傳子，父類自定義屬性 -> 子類用props:[]或{}接收屬性
    2.子傳父，子類使用$emit('事件名稱','傳遞參數')  ->父類使用@觸發事件來接收參數
-->

<template>
  <div id="Components">
    <h2>{{ toSon }}</h2>

    <!-- 子傳父 -->
    <button @click="toParent">子傳父</button>

    {{ancestorMsgShow}}
  </div>
</template>


    
  <script>
export default {
  name: "Components",
  data() {
    return {
      msg: "hello parent",
    };
  },
  //接收父類屬性
  //props:['toSon','toSonStatic'],
  props:{
    toSon:{
        type:String,
        default:"",
        require:true
    }
  },
  //接收祖先組件傳入ref，並透過計算轉為屬性
  inject:{
    ancestorMsg:{
      from: 'ancestorMsg', 
      default: '請使用provide傳入ancestorMsg'
    }
  },
  computed:{
    ancestorMsgShow:function(){
      return this.ancestorMsg.value
    }
  },
  methods: {
    toParent() {
      //觸發自定義事件injectMsg，並傳送參數msg
      this.$emit("injectMsg", this.msg);
    },
  },
  //組件守衛
  beforeRouteEnter(to,from,next){
    //獲取Data
    next((vm)=>{
      console.log(vm)
    })
  },
  beforeRouteUpdate(){},
  beforeRouteLeave(){},
};
</script>
  
  <style>
</style>
    