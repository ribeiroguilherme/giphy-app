import Vue from 'vue';
import Vuex from 'vuex';
import { state, getters, mutations } from '@/store/user';

Vue.use(Vuex);

export default new Vuex.Store({ state, getters, mutations });
