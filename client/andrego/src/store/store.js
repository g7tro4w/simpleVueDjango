import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as types from '@/store/types.js'
import * as urls from '@/store/urls.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      token: '',
      refresh: ''
    }
  },
  mutations: {

  },
  actions: {
    [types.GET_POST] (state, postIndex) {
      axios.get([urls.POST_URL])
        .then(response => {

        })
        .catch(error => {

        })
    }
  }
})
