// import Vue from 'vue'
import Vuex from 'vuex'
// Vue.use(Vuex)
// 全局状态
const state = {
  params: {}
}
const getters = {
  getParam (state) {
    return state.params
  }
}
const actions = {
  changeParam (ctx, params) {
    ctx.commit('SetParam', params)
  }
}
const mutations = {
  SetParam (state, params) {
    state.params = params
  }

}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
