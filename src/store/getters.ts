import { GetterTree } from 'vuex'
import { RootState } from '.'
import { Profile, UserState } from './modules/user'

const getters: GetterTree<RootState, RootState> = {
  profile(state): string {
    return state.version
  }
}

export default getters