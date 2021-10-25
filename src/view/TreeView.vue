<template>
  <el-tabs type="border-card">
    <el-tab-pane label="词条">
        <tree source="all"> </tree>
        <!-- FullTreeView -->
    </el-tab-pane>
    <el-tab-pane label="单词本">
      <tree source="wordList"></tree>
        <!-- WordListTreeView -->
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Tree from '../components/Tree.vue'


export default {
  name: "TreeView",
  components: { Tree },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-tabs{
    height: 100%;
}

</style>
