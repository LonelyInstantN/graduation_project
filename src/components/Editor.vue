<template>
  <splitpanes horizontal>
    <pane min-size="60%">
      <p>edit</p>
    </pane>
    <pane size="20%" min-size="20%">
      <p>
        {{count}}
      </p>
    </pane>
  </splitpanes>
</template>

<script>
import { computed } from "@vue/reactivity";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

import {useStore} from 'vuex'

export default ({
    neme: "Editor",
    components: { Splitpanes, Pane },
    setup() {
        const store = useStore()
        return{
          count: computed(() => store.state.count)
        }
    },
})
</script>

<style scoped>


</style>
