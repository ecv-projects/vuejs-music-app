import Vuex from 'vuex'
import Vue from 'vue'
import news from '@/store/modules/news'
import artists from '@/store/modules/artists'
import genres from '@/store/modules/genres'
import albums from '@/store/modules/albums'
import concerts from '@/store/modules/concerts'
import profile from '@/store/modules/profile'
import jwt_decode from "jwt-decode";
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    news,
    artists,
    genres,
    albums,
    concerts,
    profile,
  }
})

export const state = () => ({
  profile: {}
})

export const mutations = {
  SET_PROFILE(state, val) {
      state.profile = val
  }
}
