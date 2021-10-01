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
}
body {
    width: 100vw;
    height: 100vh;
}
</style>
