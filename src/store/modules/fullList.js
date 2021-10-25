const STATUS = {
    Untranlated: -1,
    Unapproved: 0,
    Approved: 1

}

//state
const state = {
    fullList: [{ key: "json.key", original: "Original Text", status: STATUS.Unapproved, tranlated: "Translated Text" },{ key: "json.key1", original: "Original Text", status: STATUS.Unapproved, tranlated: "Translated Text" }]
}

//getters
const getters = {
    getFullListTree: (state) => {
        let tree=[]
        for(let i in state.fullList){
            let item = state.fullList[i]
            console.log("item"+item);
            tree.push({id:tree.length,label:item.key})
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
        for (let i in state.fullList){
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
    state
}