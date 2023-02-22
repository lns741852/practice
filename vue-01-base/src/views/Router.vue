<template>
    <div>
        {{ id }}
        <button @click="changeRouter">js路由跳轉</button>
        <router-link to="/">Go Home</router-link>
        <br>
        <router-link :to="{name:'home'}">Go Home for name</router-link>
    </div>
</template>

<script setup>
import { useRoute,useRouter } from 'vue-router';

//props獲取路由參數
const props = defineProps({
    id:String
})
console.log(props.id)

//獲取路由參數
const id = useRoute().params.id

const router = useRouter()

const name ="jay"

function changeRouter(){
    //router.push('/a')

    //?name=jay
    router.push({path:'/parent/one',query:{name}})

    //使用路由名稱
    //router.push({name:'one',query:{name}})

    //取代當前頁面
    //router.replace({path:'/parent/one',query:{name}})

    //指定返回頁數
    //router.go(-2)

    //前進、後退
    //router.back()
    //router.forward()
    
}

</script>