<template>
  <splitpanes vertical>
    <pane size="20%" min-size="20%">
      <tree-view></tree-view>
      <!-- treeView -->
    </pane>
    <pane min-size="40%">
      <!-- editAreaView -->
      <edit-area-view> </edit-area-view>
    </pane>
  </splitpanes>
</template>

<script>
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
import TreeView from './TreeView.vue';
import EditAreaView from './EditAreaView.vue';

export default {
  name: "MainView",
  components: { Splitpanes, Pane,TreeView, EditAreaView },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.splitpanes {
  background-color: #ffffff;
  /* height: calc(100vh - 30px); */
  height: calc(100% - 1px);
  width: 100%;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #dcdfe6;
}

.el-tabs--border-card{
  border:0px
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
#edit-area{
  height: 100%;
}
</style>
