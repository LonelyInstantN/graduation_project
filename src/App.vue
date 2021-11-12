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
    window.ipcRenderer.on("file-content-income", (event,data) => {
      // console.log("File Income");
      // console.log(data,event);
      let list = JSON.parse(data)
      store.dispatch("fullList/importFromFile", list);
      store.dispatch("wordList/importFromFullList");
      console.log("dispatched");
    });
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
