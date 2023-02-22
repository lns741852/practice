import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Router from '../views/Router.vue'

const routes = [
  {
    path: '/',
    //別名
    alias:['/index','/index.html'],
    name:'home',
    component: Home,
    beforeEach:(to,from,next)=>{
      if('token'=='token'){
        next()
      }
    }

  },
  {
    //動態路由
    //path: '/router/:id(\\d+)',  一定要是數字
    //path: '/router/:id+',      有多個參數
    //path: '/router/:id*',      參數可有可無
    path: '/router/:id',
    //使用使再加載，提升效能
    component: () => import('../views/Router.vue'),
    //可使用props取得參數
    props:true
  },
  {
    //重定向
    path: '/redirect',
    redirect:(to)=>{
      console.log(to)
      return {path:"/"}
    }
  },

  {
    //多視圖，用components
    path: '/views',
    components:{
      Home,
      Router
    },
    //可以透過props傳參數
    props:{Home:true,Router:true}
  },
  {
    //多層級
    path: '/parent',
    component: () => import('../views/RouterParent.vue'),
    children:[
      {
        path: 'one',
        name:'one',
        component: () => import('../views/RouterOne.vue')
      }

    ]

  },
  {
    path: '/vuex',
    //使用使再加載，提升效能
    component: () => import('../views/Vuex.vue'),
  },
  {
    //404頁面
    path: '/:pathMatch(.*)',
    component: () => import('../views/Error.vue')
  },

]

const router = createRouter({
  //有#號，效能好，SEO差
  //history:createWebHashHistory(),

  history: createWebHistory(),
  routes
})

//全局守衛
router.beforeEach((to,from,next)=>{
  console.log(to)
  console.log(from)
  next()  //放行
})

export default router
