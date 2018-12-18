import Vue from "vue";
import Vuex from "vuex";
import UserInfo from "./stores/UserInfo";

Vue.use(Vuex);

// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  modules: {
    userInfo: UserInfo
  }
});
export default store;
