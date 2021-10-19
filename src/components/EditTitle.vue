<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span id="key-header">Card name</span>
      <div id="btn-container">
        <el-checkbox
            v-model="checked3"
            label="审核"
            border
            size="medium"
          ></el-checkbox>
          <div id="btn-spacer"></div>
          <el-button type="primary" size="medium" icon="el-icon-magic-stick">
          </el-button>
      </div>
      </div>
    </template>
    <el-input
      v-model="original"
      disabled
      :autosize="{ minRows: 2, maxRows: 4}"
      type="textarea"
      placeholder="Please input"
    >
    </el-input>
    <div id="input-spacer"></div>
    <el-input
      v-model="translation"
      :autosize="{ minRows: 2, maxRows: 4}"
      type="textarea"
      placeholder="Please input"
    >
    </el-input>
  </el-card>
</template>

<script>
export default {
  name: "EditTitle",
  props: {},
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
#key-header{
  font-weight: bold;
  font-size: 20px;
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
