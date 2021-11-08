/* eslint-disable no-unused-vars */
import { createStore,createLogger } from 'vuex'
import wordList from './modules/wordList'
import fullList from './modules/fullList'

const TYPE = {
  Full : 1,
  Word : 2
}
// root state object.
// each Vuex instance is just a single state tree.
const state = {
  currentIndex: {}
  //currentIndex:{type:TYPE.1,key:"",}
}

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  updateCurrentIndex: (state, payload) => {
    state.currentIndex = {type:payload.ctype,key:payload.ckey};
  } 
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
}

// getters are functions.
const getters = {
  getCurrent: (state) => {
    if (Object.keys(state.currentIndex).length === 0) return
    if (state.currentIndex.type == TYPE.Full){
      return fullList.getters.getItem(fullList.state)(state.currentIndex.key)
    }
    if (state.currentIndex.type == TYPE.Word){
      return wordList.getters.getItem(wordList.state)(state.currentIndex.key)
    }
  }
}


const debug = process.env.NODE_ENV !== 'production'
// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default createStore({
  modules:{
    wordList,
    fullList
  },
  state,
  getters,
  actions,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})