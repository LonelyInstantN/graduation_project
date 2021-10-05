<template>
  <splitpanes horizontal>
    <pane min-size="60%">
      <p>edit</p>
    </pane>
    <pane size="20%" min-size="20%">
      <p>
        In this example the splitters are thin lines but the reactive touch zone
        is spread to 30 pixels all around!
      </p>
    </pane>
  </splitpanes>
</template>

<script>
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

export default ({
    neme: "Editor",
components: { Splitpanes, Pane },
    setup() {
        
    },
})
</script>

<style scoped>


</style>
