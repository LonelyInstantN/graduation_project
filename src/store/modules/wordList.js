const STATUS = {
    Untranlated: -1,
    Unapproved: 0,
    Approved: 1

}
//state
const state = {
    wordList: []
}

//mutations
const mutations = {
    updateWordList: (state, list) => {
        state.wordList = list
    },
    updateItem: (state,item) => {
        let index = state.wordList.findIndex((i) => i.key == item.key)
        state.wordList[index].status = item.status
        state.wordList[index].translated = item.translated
    }
}

//actions
const actions = {
    importFromFullList: ({ commit, rootGetters }) => {
        let wl = rootGetters['fullList/getWords']
        let list = []
        for (var item in wl) {
            list.push({ key: item, status: STATUS.Untranlated, tranlated: "" })
        }
        // console.log(list);
        commit('updateWordList', list)
    },
    importFromFile:({commit},wl) => {
        let list = []
        for (var item in wl) {
            list.push({ key: item, status: STATUS.Untranlated, tranlated: "" })
        }
        // console.log(list);
        commit('updateWordList', list)
    }
}

//getters
const getters = {
    getItem: (state) => (key) => {
        console.log(state.wordList.find(item => item.key == key));
        return state.wordList.find(item => item.key == key)
    },
    getTree: (state) => {
        let tree = []
        for (let i in state.wordList) {
            let item = state.wordList[i]
            // console.log("item" + item);
            tree.push({ id: tree.length, label: item.key })
        }
        return tree
    },
    getExportTranslatedJSON: (state) => {
        let target = {}
        for (let i in state.wordList) {
            let item = state.wordList[i]
            target[item.key] = item.tranlated
        }
        const result = JSON.stringify(target)
        // console.log(result); 
        return result
    },
}

export default {
    namespaced: true,
    getters,
    mutations,
    actions,
    state
}