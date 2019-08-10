import { auth } from '@/services/firebase'
import Cookie from 'js-cookie'

export const state = () => ({
  user: null
})

export const mutations = {
  SET_USER: (state, account) => {
    state.user = account
  }
}

export const getters = {
  isAdmin(state) {
    return state.user ? state.user.email === 'admin@gmail.com' : false
  }
}

export const actions = {
  async login({ commit }, account) {
    try {
      await auth.signInWithEmailAndPassword(account.email, account.password)
      const token = await auth.currentUser.getIdToken()
      const { email, uid } = auth.currentUser

      Cookie.set('access_token', token)
      commit('SET_USER', { email, uid })
    } catch (e) {
      console.log(e)
      throw e
    }
  }
}
