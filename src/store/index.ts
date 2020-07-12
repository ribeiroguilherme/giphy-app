import Vue from 'vue';
import Vuex from 'vuex';
import { state as initalAccoutnState, account } from '@/store/account.module';
import { state as initialGifsState, gifs } from '@/store/gifs.module';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkModeEnabled: false,
    account: initalAccoutnState,
    gifs: initialGifsState,
  },
  mutations: {
    toggleTheme(state) {
      state.darkModeEnabled = !state.darkModeEnabled;
    },
  },
  modules: {
    account,
    gifs,
  },
});
