//state
const state = {
    wordList:{}
}

//mutations
const mutations = {
    updateWordList: (state,list) => {
        state.wordList = list
    }
}

//actions
const actions = {
    importFromFullList: ({commit, rootGetters}) => {
        let wl = rootGetters['fullList/getWords']
        let list = []
        for (var item in wl) {
            list.push({ key: item,tranlated: "" })
        }
        console.log(list);
        commit('updateWordList',list)
    }
}

//getters
const getters = {
    // getWordListTree: (state) => {
    //     let tree = []
        
    //     for (var key in state.wordList){
    //         tree.push({id:tree.length+1,label:key})
    //     }
    //     return tree
    // },
    getWordListTree: (state) => {
        let tree = []
        for (let i in state.wordList) {
            let item = state.wordList[i]
            // console.log("item" + item);
            tree.push({ id: tree.length, label: item.key })
        }
        return tree
    },
    getFileExportJson: (state) => {
        return state.wordList
    }
}

export default{
    namespaced: true,
    getters,
    mutations,
    actions,
    state
}