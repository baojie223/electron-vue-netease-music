import { Module, ActionTree, MutationTree, GetterTree } from 'vuex'
import { RootState } from '..'
import { login, logout } from '@/api/user'

export interface UserState {
  profile: Profile
}

export interface Profile {
  name?: string
  id?: number
  token?: string
}

const state: UserState = {
  profile: {}
}

const mutations: MutationTree<UserState> = {
  SET_PROFILE(state, profile: Profile): void {
    state.profile = profile
  }
}

const actions: ActionTree<UserState, RootState> = {
  login({ commit }, user) {
    return login(user)
      .then(res => {
        commit('SET_PROFILE', res)
        return res
      })
      .catch(err => {
        return err
      })
  },
  logout({ commit }) {
    return logout()
      .then(() => {
        commit('SET_PROFILE', {})
      })
      .catch(err => {
        return err
      })
  }
}

const getters: GetterTree<UserState, RootState> = {
  isLogin: state => Object.keys(state.profile).length,
  profile(state): Profile {
    return state.profile
  },
  token: state => state.profile.token
}

export const user: Module<UserState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
