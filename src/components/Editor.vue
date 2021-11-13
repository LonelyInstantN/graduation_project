<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span id="key-header">{{ currentItem.key }}</span>
        <div id="btn-container">
          <el-checkbox
            v-model="status"
            label="审核"
            border
            size="medium"
            @change="updateItem"
          ></el-checkbox>
          <div id="btn-spacer"></div>
          <el-button type="primary" size="medium" icon="el-icon-magic-stick" @click="quickTranslate">
          </el-button>
        </div>
      </div>
    </template>
    <div id="input-spacer"></div>
    <div id="original">
      {{ currentItem.origin }}
    </div>
    <div id="input-spacer"></div>
    <el-input
      v-model="translation"
      :autosize="{ minRows: 2, maxRows: 4 }"
      type="textarea"
      placeholder="在这里输入翻译"
      @change="updateItem"
    >
    </el-input>
  </el-card>
  <el-button type="primary" @click="nextItem">下一个</el-button>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import translator from '../scripts/translator'
// const TYPE = {
//   Full : 1,
//   Word : 2
// }
export default {
  name: "Editor",
  props: {},
  setup() {
    const store = useStore();
    let currentItem = computed(() => store.getters["getCurrent"]);

    return {
      currentItem,
      store,
    };
  },
  data() {
    return{
      status: false,
      translation:""
    }
  },
  watch:{
    currentItem(val){
      this.status = val.status == 1 ? true : false
      this.translation = val.translated
    }
  },
  methods:{
    nextItem() {
      this.updateItem();
      this.store.dispatch("getNext");
      this.translation = this.currentItem.translted == undefined ? "" : this.currentItem.translted
    },
    updateItem() {
      let newItem = {status:this.status == true ? 1 : 0,translated:this.translation}
      console.log(newItem);
      this.store.dispatch('updateItem',newItem)
    },
    quickTranslate() {
      if (this.currentItem.origin !== undefined){
        translator.translate(this.currentItem.origin,(data) => {
          this.translation = data
          this.updateItem()
        })
      }else{
        translator.translate(this.currentItem.key, (data) => {
          this.translation = data
          this.updateItem()
        })
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
#input-spacer {
  margin-top: 10px;
  margin-bottom: 10px;
}
#btn-spacer {
  margin-right: 5px;
  margin-left: 5px;
}
#key-header {
  font-weight: bold;
  font-size: 20px;
}
#original {
  border-style: solid;
  border-color: #dee1e7;
  border-width: 1px;
  border-radius: 4px;
  line-height: 24px;
  min-height: 48px;
  padding: 5px 15px 5px 15px;
  text-align: start;
  background: #f5f7fa;
  user-select: text;
  font-size: 18px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box-card {
  margin: 10px;
}
.el-textarea {
  font-size: 16px;
}
</style>
