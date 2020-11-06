import Vuex from 'vuex'
import Vue from 'vue'
import news from '@/store/modules/news'
import artists from '@/store/modules/artists'
import genres from '@/store/modules/genres'
import albums from '@/store/modules/albums'
import concerts from '@/store/modules/concerts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    news,
    artists,
    genres,
    albums,
    concerts
  }
})
