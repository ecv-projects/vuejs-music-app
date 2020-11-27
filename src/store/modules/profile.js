import axios from 'axios'

const state = {
    profile: {}
}

const mutations = {
    SET_PROFILE(state, val) {
        state.profile = val
    }
}
/* const actions = {
    async fetchProfile({
      commit
    }, token) {
      const {
        data
      } = await axios.get('https://api.crc-ophta.vmedamplify.fr/api/v1/auth/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      commit('SET_PROFILE', data)
    }
  } */


export default {
    namespaced: true,
    state,
    mutations,
/*     actions
 */
}
