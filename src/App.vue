<template>
  <main-view> </main-view>
</template>

<script>
import { ref } from "vue";
import MainView from "./view/MainView.vue";

export default {
  name: "App",
  components: {
    MainView,
  },
  setup() {
    const msg = ref(
      "Welcome to Element Plus, a Vue 3.0 based component library"
    );
    const startHacking = () => {
      msg.value = "Start coding with Element Plus with 💖";
    };
    return {
      msg,
      startHacking,
    };
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
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
