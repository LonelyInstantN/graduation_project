<template>
  <editor> </editor>
  <el-button type="primary">下一个</el-button>
</template>

<script>
import Editor from '../components/Editor.vue';



export default {
  components: { Editor },
  name: "EditAreaView",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
el-container{
  height: 100%;
}
</style>
