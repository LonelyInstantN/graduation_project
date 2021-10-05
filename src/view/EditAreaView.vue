<template>

    <edit-title> </edit-title>

    <editor> </editor>


</template>

<script>
import Editor from '../components/Editor.vue';
import EditTitle from '../components/EditTitle.vue';


export default {
  components: { EditTitle, Editor },
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
