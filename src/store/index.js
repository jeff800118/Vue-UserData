import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  state: {
    ac_name:sessionStorage.getItem('ac_name'),
    ac_num:sessionStorage.getItem('ac_num')
  },
  getters: {
  },
  mutations: {
    updateUser(state,user){
      state.ac_name = user
      sessionStorage.setItem('ac_name',user)
    },
    logout(){
      sessionStorage.clear()
    },
    getac_num(state,ac_num){
      state.ac_num = ac_num
      sessionStorage.setItem('ac_num',ac_num)
    }
  },
  actions: {
  },
  modules: {
  }
})
