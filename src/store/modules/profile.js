import axios from 'axios'

const state = {
  profile: null
}


const mutations = {
    SET_PROFILE(state, val) {
        state.profile = val
    },
    RESET_PROFILE(state) {
       state.profile = null
    }
}
const actions = {
  resetProfile ({ commit }) {
    commit('RESET_PROFILE')
  },
    async fetchProfile({
      commit
    }, datas) {
      console.log(datas);
      const { data } = await axios.get(`http://localhost:3000/users/${datas.sub}`, {
        headers: {
          Authorization : `Bearer ${datas.token}`
        }
      })
      commit('SET_PROFILE', data)
    }
  }


export default {
    namespaced: true,
    state,
    mutations,
    actions
}
