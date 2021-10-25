//state
const state = {
    wordList:{"label1":"test","label2":"test2"}
}

//getters
const getters = {
    getWordListTree: (state) => {
        let tree = []
        
        for (var key in state.wordList){
            tree.push({id:tree.length+1,label:key})
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
    state
}