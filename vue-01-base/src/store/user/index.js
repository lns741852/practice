//模塊化實例
const user={
  namespaced:true,
  state: {
    name:"Jay",
    age:28
  },
  mutations: {
    getNickname(state){
      state.name = "JJ"
    }
  },
  actions: {
    //從context實例提取，下列屬性
    getNickname2({state,commit,rootState}){
    }
  },
  //可查詢根狀態
  getters:{
    changeName:function(state,getters,rootState){
      return state.name+"C"
    }

  },
  module:{

  }
}

export default user