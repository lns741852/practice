<template>
    <div>
        <br>===================基礎===========================
        {{ $store.state.count }}
        <button @click="addCount(2)">++</button>
        {{ $store.getters.changeMsg }}
        <br>===================模塊狀態===========================
        <!-- 將模塊依類別細分 -->
        {{ $store.state.user.name }}
        <button @click="getNickname()">別名</button>
        {{ $store.getters.changeName }}
        <br>
        <br>===================輔助函數===========================
        <!-- 方便使用 -->
        {{ count }}
        {{ user.name }}
        {{changeMsg }}
        <button @click="testMap()">輔助函數</button>
        <br>===================模塊化===========================
        <!-- 模塊化，因方法全都存在根模塊，防止方法混淆: -->
        {{ $store.getters['user/changeName'] }}
    </div>
</template>
<script>
//透過映射導入全局store
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'

export default{
    methods:{
        addCount(num){
            this.$store.commit('increment',num) //調用mutations中方法increment
        },
        getApi(){
            this.$store.dispatch('getApi')//調用actions中方法getApi
        },
        getNickname(){
            this.$store.commit('getNickname') //調用模塊mutations中方法getNickname

            //模塊化方式，路徑+方法
            //this.$store.commit('user/getNickname')
        },

        //輔助函數
        ...mapMutations(['increment']),
        ...mapActions(['getApi']),

        //模塊化方式，模塊路徑+方法名稱
        ...mapMutations('user',['getNickname']),


        testMap(){
            this.increment(2)
            this.getNickname()
            this.getApi()

        }

    },
    computed:{
        addCount:function(){
            return 1;
        },
        //輔助函數
        //擴展運算符套用再返回值，將List中實例套用在同名屬性中
        ...mapState(['count','user']),
        ...mapGetters(['changeMsg'])
    },
    mounted(){
        console.log(this.user)
    }

}

</script>