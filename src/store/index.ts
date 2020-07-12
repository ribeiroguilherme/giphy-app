import Vue from 'vue';
import Vuex from 'vuex';
import { account } from '@/store/account.module';
import { gifs } from '@/store/gifs.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    account,
    gifs,
  },
});
