const STATUS = {
    Untranlated: -1,
    Unapproved: 0,
    Approved: 1

}

function unifyWords(str){
    return str.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"")
}

//state
const state = {
    fullList: [],
}

//mutations
const mutations = {
    updateFullList(state, list) {
        // console.log("===mutations===");
        // console.log(list);
        state.fullList = list

    },
}

//actions
const actions = {
    importFromFile({ commit }, fl) {
        let list = []
        // console.log("===actions===");
        for (var item in fl) {
            list.push({ key: item, origin: fl[item], status: STATUS.Untranlated, tranlated: "" })
        }
        // console.log(list);
        commit('updateFullList', list)
    },
}

//getters
const getters = {
    getFullListTree: (state) => {
        let tree = []
        for (let i in state.fullList) {
            let item = state.fullList[i]
            // console.log("item" + item);
            tree.push({ id: tree.length, label: item.key })
        }
        // console.log(tree);
        return tree
    },
    getExportProjectJSON: (state) => {
        let result = JSON.stringify(state.fullList)
        // console.log(result);
        return result
    },
    getExportTranslatedJSON: (state) => {
        let target = {}
        for (let i in state.fullList) {
            let item = state.fullList[i]
            target[item.key] = item.tranlated
        }
        const result = JSON.stringify(target)
        // console.log(result); 
        return result
    },
    getWords: (state) => {
        let map = {}
        for (let i in state.fullList){
            let item = state.fullList[i]
            let wordList = item.origin.split(' ')
            for (let word in wordList){
                let w = unifyWords(wordList[word])
                // console.log(w);
                if (map[w]){
                    map[w]++
                }else{
                    map[w] = 1
                }
            }
        }
        return map
    }
}



export default {
    namespaced: true,
    STATUS,
    getters,
    mutations,
    actions,
    state
}