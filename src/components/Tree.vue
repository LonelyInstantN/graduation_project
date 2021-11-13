<template>
  <el-input v-model="filterText" placeholder="Filter keyword" />
  <el-scrollbar class="tree_scroll">
    <el-tree
      ref="tree"
      class="filter-tree"
      :data="treeData"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      @node-click="handleNodeClick"
    />
  </el-scrollbar>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    return {
      getTreeData: (source) => {
        source = source == "wordList" ? "wordList/getTree" : "fullList/getTree";
        return computed(() => store.getters[source]);
      },
      updateCurrent: (data, source) => {
        let ctype = source == "all" ? 1 : 2;
        store.commit({
          type: "updateCurrentIndex",
          ctype: ctype,
          ckey: data.label,
        });
      },
    };
  },
  props: ["source"],
  data() {
    return {
      filterText: "",
      treeData: this.getTreeData(this.source),
      defaultProps: {
        label: "label",
      },
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    handleNodeClick(data) {
      this.updateCurrent(data, this.source);
    },
  },
};
</script>

<style scoped>
.filter-tree {
  height: calc(100vh - 30px);
}
</style>

