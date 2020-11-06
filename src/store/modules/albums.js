import axios from 'axios'

const state = {
  allAlbums: [],
  album: null,
}

const getters = {
  getAllAlbums: state => state.allAlbums,
  getAlbum: state => state.album
}

const mutations = {
  setAllAlbums (state, allAlbums) {
    state.allAlbums = allAlbums
  },
  setAlbum (state, album) {
    state.album = album
  }
}

const actions = {
  async fetchAllAlbums ({ commit }) {
    const { data } = await axios.get('http://localhost:3000/albums')
    commit('setAllAlbums', data)
  },
  async fetchAlbum ({ commit }, id) {
    const { data } = await axios.get(`http://localhost:3000/albums/${id}`)
    commit('setAlbum', data)
  },
  async createAlbum ({ commit }, data) {
    await axios.post(`http://localhost:3000/albums`, {
      ...data
    })
  },
  async editAlbum ({ commit }, data) {
    await axios.patch(`http://localhost:3000/albums/${data.id}`, {
      ...data
    })
  },
  async deleteAlbum ({ commit }, id) {
    await axios.delete(`http://localhost:3000/albums/${id}`)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
