import { Module, ActionTree, MutationTree, GetterTree } from 'vuex'
import { RootState } from '..'

interface MusicState {
  currentMusic: string
}

const state: MusicState = {
  currentMusic: ''
}

const mutations: MutationTree<MusicState> = {
  SET_MUSIC(state, id: string): void {
    state.currentMusic = id
  }
}

const actions: ActionTree<MusicState, RootState> = {
  
}

const getters: GetterTree<MusicState, RootState> = {
  currentMusic: state => state.currentMusic
}

export const music: Module<MusicState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
