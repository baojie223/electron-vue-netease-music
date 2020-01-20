import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { user } from './modules/user'
import getters from './getters'

Vue.use(Vuex)

export interface RootState {
  version: string
}

const state: RootState = {
  version: '1.0.0'
}

const store: StoreOptions<RootState> = {
  state,
  // getters,
  modules: {
    user
  }
}

export default new Vuex.Store(store)
