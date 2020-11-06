import axios from 'axios'

const state = {
  allConcerts: [],
  concert: null,
}

const getters = {
  getAllConcerts: state => state.allConcerts,
  getConcert: state => state.concert
}

const mutations = {
  setAllConcerts (state, allConcerts) {
    state.allConcerts = allConcerts
  },
  setConcert (state, concert) {
    state.concert = concert
  }
}

const actions = {
  async fetchAllConcerts ({ commit }) {
    const { data } = await axios.get('http://localhost:3000/concerts')
    commit('setAllConcerts', data)
  },
  async fetchconcert ({ commit }, id) {
    const { data } = await axios.get(`http://localhost:3000/concerts/${id}`)
    commit('setConcert', data)
  },
  async createConcert ({ commit }, data) {
    await axios.post(`http://localhost:3000/concerts`, {
      ...data
    })
  },
  async editConcert ({ commit }, data) {
    await axios.patch(`http://localhost:3000/concerts/${data.id}`, {
      ...data
    })
  },
  async deleteConcert ({ commit }, id) {
    await axios.delete(`http://localhost:3000/concerts/${id}`)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
