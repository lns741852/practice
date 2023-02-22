import { createStore } from 'vuex'
import user from './user'

export default createStore({
  //狀態
  state: {
    count:1,
    msg:"Hello"
  },
  //改變狀態方法(同步)
  mutations: {
    //state固定參數，value為動態參數
    increment(state,value){
      state.count += value
    }
  },
  //調用API(異步)
  actions: {
    getApi:function(context){  //context等於整個store對象實例
      axios.get('/test').then(res=>{
        context.commit('increment',res.num)
      })
    }
  },
  //引入模塊
  modules: {
    user
  },
  //計算屬性，狀態過濾
  getters:{
    changeMsg:function(state){
      return state.msg+" Jay"
    }
  }
})
