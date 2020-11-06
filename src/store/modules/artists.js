import axios from 'axios'

const state = {
  allArtists: [],
  artist: null,
}

const getters = {
  getAllArtists: state => state.allArtists,
  getArtist: state => state.artist
}

const mutations = {
  setAllArtists (state, allArtists) {
    state.allArtists = allArtists
  },
  setArtist (state, artist) {
    state.artist = artist
  }
}

const actions = {
  async fetchAllArtists ({ commit }) {
    const { data } = await axios.get('http://localhost:3000/artists')
    commit('setAllArtists', data)
  },
  async fetchArtist ({ commit }, id) {
    const { data } = await axios.get(`http://localhost:3000/artists/${id}`)
    commit('setArtist', data)
  },
  async createArtist ({ commit }, data) {
    await axios.post(`http://localhost:3000/artists`, {
      ...data
    })
  },
  async editArtist ({ commit }, data) {
    await axios.patch(`http://localhost:3000/artists/${data.id}`, {
      ...data
    })
  },
  async deleteArtist ({ commit }, id) {
    await axios.delete(`http://localhost:3000/artists/${id}`)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
