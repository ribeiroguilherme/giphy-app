import { Module, MutationTree } from 'vuex';
import { IGifsState, IRootState } from './types';

export const state: IGifsState = {
  starredGifs: [],
};

export const mutations: MutationTree<IGifsState> = {
  addGif(s, payload: string) {
    s.starredGifs.push(payload);
  },
};

export const gifs: Module<IGifsState, IRootState> = {
  state,
  mutations,
  namespaced: true,
};
