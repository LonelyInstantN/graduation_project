/* eslint-disable no-unused-vars */
import { createStore,createLogger } from 'vuex'
import wordList from './modules/wordList'
import fullList from './modules/fullList'

const TYPE = {
  Full : 1,
  Word : 2
}


const state = {
  currentIndex: {}
  //currentIndex:{type:TYPE.1,key:"",}
}


const mutations = {
  updateCurrentIndex: (state, payload) => {
    state.currentIndex = {type:payload.ctype,key:payload.ckey};
    console.log(state.currentIndex);
  }, 
  clearCurrentIndex:(state) => {
    state.currentIndex = {}
  }
}


const actions = {
  get1: () => {console.log(1);},
  getNext: ({commit, state, getters}) => {
    console.log("actions");
    let isFullList = state.currentIndex.type == TYPE.Full ? true : false
    let listLength = isFullList ? fullList.state.fullList.length : wordList.state.wordList.length
    let currentItem = getters['getCurrent']
    let index = state.currentIndex.type == isFullList ? fullList.state.fullList.indexOf(currentItem) + 1 
                                                      : wordList.state.wordList.indexOf(currentItem) + 1;
    console.log(index);
    

    index = index > listLength - 1 ? listLength - 1
                                    : index;

    let nextItem = {ctype:isFullList? TYPE.Full
                                    : TYPE.Word,
                    ckey:isFullList ? fullList.state.fullList[index].key 
                                    : wordList.state.wordList[index].key};

    commit('updateCurrentIndex',nextItem)
  },
  updateItem: ({commit,state},item) => {
    let isFullList = state.currentIndex.type == TYPE.Full ? true : false
    console.log(item);
    if (isFullList){
      commit('fullList/updateItem',{key:state.currentIndex.key,status:item.status,translated:item.translated})
    }else{
      commit('wordList/updateItem',{key:state.currentIndex.key,status:item.status,translated:item.translated})
    }
  }
}


const getters = {
  getCurrent: (state) => {
    if (Object.keys(state.currentIndex).length === 0) return {key:"词条ID显示在这里",status:-1,origin:"原文显示在这里",translated:"输入翻译"}
    if (state.currentIndex.type == TYPE.Full){
      return fullList.getters.getItem(fullList.state)(state.currentIndex.key)
    }
    if (state.currentIndex.type == TYPE.Word){
      return wordList.getters.getItem(wordList.state)(state.currentIndex.key)
    }
  }
}


const debug = process.env.NODE_ENV !== 'production'

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