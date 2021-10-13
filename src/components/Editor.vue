<template>
  <splitpanes horizontal>
    <pane min-size="60%" id="edit">
      <div style="border-radius: 1px">
        Place a sideways funnel on top of a belt or depot to create a special type.
      </div>
      <el-row justify="center" :gutter="20">
        <el-col :span="16">
          <el-input
            v-model="textarea2"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
            placeholder="Please input"
          >
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-checkbox
            v-model="checked3"
            label="审核"
            border
            size="medium"
          ></el-checkbox>
          <div style="margin:5px"></div>
          <el-button type="primary" size="medium" icon="el-icon-magic-stick">
          </el-button>
        </el-col>
      </el-row>
    </pane>
    <pane size="20%" min-size="20%" id="suggets">
      <p>abc</p>
    </pane>
  </splitpanes>
</template>

<script>
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

export default {
  neme: "Editor",
  components: { Splitpanes, Pane },
  setup() {},
};
</script>

<style scoped>
.el-col {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
