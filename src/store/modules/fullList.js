const STATUS = {
    Untranlated: -1,
    Unapproved: 0,
    Approved: 1

}

//state
const state = {
    fullList: [],
    count: 0
}

//mutations
const mutations = {
    updateFullList(state, list) {
        console.log("===mutations===");
        console.log(list);
        // state.fullList = list
        for (let item in list) {
            state.fullList.push(list[item])
        }
        console.log(state.fullList);
    },
    increment(state) {
        state.count++
        console.log(state.count);
        console.log("fl");
    }
}

//actions
const actions = {
    importFromFile({ commit }, fl) {
        let list = []
        console.log("===actions===");
        for (var item in fl) {
            list.push({ key: item, origin: fl[item], status: STATUS.Untranlated, tranlated: "" })
        }
        console.log(list);
        commit('updateFullList', list)
    },
}

//getters
const getters = {
    getFullListTree: (state) => {
        let tree = []
        for (let i in state.fullList) {
            let item = state.fullList[i]
            console.log("item" + item);
            tree.push({ id: tree.length, label: item.key })
        }
        console.log(tree);
        return tree
    },
    getExportProjectJSON: (state) => {
        let result = JSON.stringify(state.fullList)
        console.log(result);
        return result
    },
    getExportTranslatedJSON: (state) => {
        let target = {}
        for (let i in state.fullList) {
            let item = state.fullList[i]
            target[item.key] = item.tranlated
        }
        const result = JSON.stringify(target)
        console.log(result);
        return result
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