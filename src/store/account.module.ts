/* eslint-disable no-shadow */
import {
  GetterTree, MutationTree, ActionTree, Module,
} from 'vuex';
import { IRootState, IAccountState, IUser } from '@/store/types';
import { ILoginForm } from '@/models/ILogin';

type UserGetter = GetterTree<IAccountState, IRootState>;

export const state: IAccountState = {
  status: { loggingIn: false, loggedIn: false },
  user: null,
};

export const getters: UserGetter = {
  isUserLoggedIn: (state) => state.status.loggedIn,
  isUserLoggingIn: (state) => state.status.loggingIn,
};

export const mutations: MutationTree<IAccountState> = {
  loginRequest(state) {
    state.status.loggingIn = true;
  },
  loginFailed(state) {
    state.status.loggingIn = false;
    state.user = null;
  },
  loginSuccess(state, user: IUser) {
    state.status = { loggedIn: true, loggingIn: false };
    state.user = user;
  },
  logout(state) {
    state.status = { loggedIn: false, loggingIn: false };
    state.user = null;
  },
};

export const actions: ActionTree<IAccountState, IRootState> = {
  loginAsync({ commit, rootState }, credentials: ILoginForm) {
    console.log('Authenticating with credentials', credentials);

    commit('loginRequest');

    return new Promise((resolve) => {
      setTimeout(() => {
        const user: IUser = { name: 'Guilherme', email: 'guilhermemrr@gmail.com' };
        commit('loginSuccess', user);
        console.log('User authenticated', user);
        resolve();
      }, 3000);
    });
  },
};

export const account: Module<IAccountState, IRootState> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
