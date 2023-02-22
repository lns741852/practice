<template>
  <!--顯示超連結-->
  <router-link to="/">Home目錄</router-link>
  <br>
  <router-link to="/router/1">動態路由</router-link>
  <br>
  <router-link to="/parent">父組件</router-link>
  <br>
  <router-link to="/vuex">Vuex</router-link>
  <br>
  <!--顯示視圖組件-->
  <router-view></router-view>

    <!--name在多視圖時使用，對應組件名稱-->
  <!-- <router-view name="Home"></router-view>
  <router-view name="Router"></router-view> -->
</template>

<script>
export default{
  data(){
    return{

    }
  },
  components:{
    
  }
}
</script>

<style>

</style>
