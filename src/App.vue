<template>
  <main-view> </main-view>
</template>

<script>
import MainView from "./view/MainView.vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: {
    MainView,
  },
  setup() {
    const store = useStore();
    //Open file process
    window.ipcRenderer.on("open-file", (event,data) => {
      let list = JSON.parse(data)
      store.dispatch("fullList/importFromFile", list);
    });

    //Open project file process
    window.ipcRenderer.on("open-project-file", (event,data) => {
      let list = JSON.parse(data)
      store.commit('fullList/updateFullList',list)
    });

    //Open wordlist file process
    window.ipcRenderer.on("open-wordlist-file", (event,data) => {
      let list = JSON.parse(data)
      store.dispatch('wordList/importFromFile',list)
    });

    //Parse words process
    window.ipcRenderer.on("parse-words",(event) => {
      store.dispatch("wordList/importFromFullList");
      console.log(event);
    });

    //Export translated file process
    window.ipcRenderer.on("export-translated-file",(event) => {
      console.log(event);
      let data = store.getters['fullList/getExportTranslatedJSON']
      window.ipcRenderer.send('save-file',data)
    });

    //Export project file process
    window.ipcRenderer.on("export-project-file",(event) => {
      console.log(event);
      let data = store.getters['fullList/getExportProjectJSON']
      window.ipcRenderer.send('save-file',data)
    });

    //Export wordlist file process
    window.ipcRenderer.on("export-wordlist-file",(event) => {
      console.log(event);
      let data = store.getters['wordList/getExportTranslatedJSON']
      window.ipcRenderer.send('save-file',data)
    });

    //Close file
    window.ipcRenderer.on("close-file",(event) => {
      console.log(event);
      store.dispatch("fullList/importFromFile", []);
      store.dispatch('wordList/importFromFile',[]);
      store.commit('clearCurrentIndex')
    })
    return {};
  },
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  text-align: center;
  color: #2c3e50;
  height: calc(100vh - 30px);
  user-select: none;
}
</style>
