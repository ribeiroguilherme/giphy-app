/* eslint-disable no-shadow */
import { GetterTree, MutationTree } from 'vuex';
import { IState, IUser } from '@/store/types';

type UserGetter = GetterTree<IState, any>;

const initialState = Object.freeze({
  name: undefined,
  isAuthenticated: false,
});

export const state: IState = {
  user: initialState,
};

export const getters: UserGetter = {
  isUserAuthenticated: (state) => state.user.isAuthenticated,
};

export const mutations: MutationTree<IState> = {
  setAuthenticatedUser(state, user?: IUser) {
    if (!user) {
      state.user = initialState;
    } else {
      state.user = { ...user };
    }
  },
};
