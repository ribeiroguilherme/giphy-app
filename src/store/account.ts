/* eslint-disable no-shadow */
import { GetterTree, MutationTree, ActionTree } from 'vuex';
import { IState, IUser } from '@/store/types';
import { ILoginForm } from '@/models/ILogin';

type UserGetter = GetterTree<IState, any>;

export const state: IState = {
  status: { loggingIn: false, loggedIn: false },
  user: null,
};

export const getters: UserGetter = {
  isUserLoggedIn: (state) => state.status.loggedIn,
  isUserLoggingIn: (state) => state.status.loggingIn,
};

export const mutations: MutationTree<IState> = {
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

export const actions: ActionTree<IState, any> = {
  loginAsync(context, credentials: ILoginForm) {
    console.log('Authenticating with credentials', credentials);

    context.commit('loginRequest');

    return new Promise((resolve) => {
      setTimeout(() => {
        const user: IUser = { name: 'Guilherme', email: 'guilhermemrr@gmail.com' };
        context.commit('loginSuccess', user);
        console.log('User authenticated', user);
        resolve();
      }, 5000);
    });
  },
};
