import axios from 'axios' 

const state = {
    allGenres: [],
    genre: null,
}

const getters = {
    getAllGenres: state => state.allGenres,
    getGenre: state => state.genre
}

const mutations = {
    setAllGenres (state, allGenres) {
      state.allGenres = allGenres
    },
    setGenre (state, genre) {
      state.genre = genre
    }
}

const actions = {
    async fetchAllGenres ({ commit }) {
      const { data } = await axios.get('http://localhost:3000/genres')
      commit('setAllGenres', data)
    },
    async fetchGenre ({ commit }, id) {
      const { data } = await axios.get(`http://localhost:3000/genres/${id}`)
      commit('setGenre', data)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  }
  