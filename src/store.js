/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: localStorage.city || '上海',
  },
  mutations: {
    change(state, city) {
      state.city = city;
    },
  },
  actions: {
    changeCity(ctx, city) {
      ctx.commit('change', city);
      localStorage.city = city;
      console.log(localStorage.city);
    },
  },
});
