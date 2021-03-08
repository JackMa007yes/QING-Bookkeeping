import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recordList:[]
  },
  mutations: {
    addrecord(state, payload){
      state.recordList.push(payload as never)
    },
    fetchRecords(state){
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]')
    }
  },
  actions: {
  },
  modules: {
  }
})
