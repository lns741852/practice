<!--
  動態綁定流程:
    1. template -> data -> if(:class) -> css
    2. template -> if(:class ="computed") -> css
-->
<template>
  <div id="Base">
    {{ message }}
    <!--動態綁定class-->
    <p :[attr]="pColor">動態綁定class</p>
    <!--動態綁定事件-->
    <button @[event]="changeEvent">動態綁定事件</button>
    <!--綁定computed物件-->
    <p>{{ reverseMsg }}</p>
    <!--綁定methods是方法，頁面選染時會執行-->
    <p>{{ changeEvent() }}</p>
    <!--
      綁定css，並設置開關
      會將屬性計算放computed結果等於: 
      <p :class="{pSize:true, pSize2:true}" class="pSize3">改變樣式</p>
    -->
    <p :class="classObj" class="pSize3">class改變樣式</p>
    <!--綁定style-->
    <div :style="styleObj">style改變樣式</div>

    <!--
      template不會顯示在頁面上
      if 與 show 差別在if=false時不會渲染，show=false時是display:none
    -->
    <template v-if="ifAndShow">
      <p>使用在固定不變的資料</p>
    </template>
    <p v-show="ifAndShow">使用在需一直改變的資料</p>


    <!-- 可遍歷陣列或物件-->
    <ul>
      <li v-for="(item, key) of style" :key="item">{{ key }}->{{ item }}</li>
    </ul>

    <!-- 事件修飾符-->
    <div @click="parentClick">
      <!-- 阻止冒泡-->
      <button @click.stop="sonClick">修飾符(子)</button>
      <!-- 只能執行一次-->
      <button @click.once="sonClick">修飾符(一次)</button>

      <form action="">
        <!-- 阻止默認submit行為-->
        <input type="submit" value="自訂提交" @click.prevent="changeEvent" />
      </form>
    </div>
    <!-- 
      按鍵修飾符
      enter,tab,delete,esc,space,up,down,left,right
    -->
    <input value="" name="baseEnter" @keyup.enter="changeEvent($event)" />

    <!--等於 v-bind 加 v-on 雙向綁定-->
    <div>
      <!--lazy 失去焦點後改變-->
      <input type="text" v-model.lazy="modelMessage" />
      {{ modelMessage }}
      <!--number 輸入數字後改變類型-->
      <input type="text" v-model.number="modelMessage" />
      {{ typeof modelMessage }}
      <!--trim 去除首尾空白-->
      <input type="text" v-model.trim="modelMessage" />
      {{ modelMessage }}
    </div>
  </div>
</template>
  
<script>
//vue2語法
export default {
  name: "Base",
  data() {
    return {
      message: "基本狀態",
      attr: "class",
      pColor: "css-color",
      event: "click",
      num: 1,
      user: {
        name: "Jay",
      },
      isActive: true,
      error: null,
      style: {
        color: "black",
        background: "red",
      },
      ifAndShow: true,
      modelMessage: "",
    };
  },
  methods: {
    changeEvent(event) {
      if (event) {
        console.log(event);
      }
      return "方法回傳";
    },

    parentClick() {
      console.log("父");
    },

    sonClick() {
      console.log("子");
    },
  },

  /*當回傳值 this.message 發生改變才會調用，並刷新緩存*/
  computed: {
    /* computed生成下列物件屬性
       reverseMsg :{
       set:function(newValue){this.message = newValue},
       get:function(){ return this.message.split("").reverse().join("");}
    */
    reverseMsg() {
      return "計算狀態"
    },
    classObj() {
      return {
        //pSize在中:class指向css
        pSize: this.isActive && !this.error,
        pSize2: this.isActive && !this.error,
      };
    },
    styleObj() {
      return {
        color: this.style.color,
        //連接號-需要用字串框起來
        "background-color": this.style.background,
      };
    },
  },
  watch: {
    message: function (newValue, oldValue) {},
    "user.name": function (newValue, oldValue) {},
  },
};
</script>

<style>
.css-color {
  color: red;
}

.pSize {
  font-size: 20px;
}
.pSize2 {
  color: yellow;
}
.pSize3 {
  font-weight: bold;
}
</style>
  