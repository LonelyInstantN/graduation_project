<template>
  <el-tabs type="border-card">
    <el-tab-pane label="User">
        <tree> </tree>
        <!-- FullTreeView -->
    </el-tab-pane>
    <el-tab-pane label="Co">Co
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
