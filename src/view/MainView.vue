<template>
  <splitpanes vertical>
    <pane size="20%" min-size="20%">
      <span>1</span>
      <!-- treeView -->
    </pane>
    <pane min-size="40%">
      <span>2</span>
      <!-- editAreaView -->
    </pane>
  </splitpanes>
</template>

<script>
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

export default {
  name: "MainView",
  components: { Splitpanes, Pane },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.splitpanes {
  background-color: #f8f8f8;
  height: calc(100vh - 30px);
  width: 100vw;
}

.splitpanes__splitter {
  background-color: #ccc;
  position: relative;
}
.splitpanes__splitter:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity 0.4s;
  background-color: rgba(21, 21, 21, 0.05);
  opacity: 0;
  z-index: 1;
}
.splitpanes__splitter:hover:before {
  opacity: 1;
}
.splitpanes--vertical > .splitpanes__splitter:before {
  left: -4px;
  right: -4px;
  height: 100%;
}
.splitpanes--horizontal > .splitpanes__splitter:before {
  top: -4px;
  bottom: -4px;
  width: 100%;
}
</style>
