<template>
  <ag-grid-vue
    class="ag-grid ag-theme-alpine-dark"
    :columnDefs="cols"
    :rowData="rows"
    @grid-ready="onGridReady"
  >
  </ag-grid-vue>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "Grid",
  components: {
    AgGridVue
  },
  props: {
    rows: {
      type: Array,
      default: () => []
    },
    cols: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onGridReady(grid) {
      grid.api.sizeColumnsToFit();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~ag-grid-community/dist/styles/ag-grid.min.css";
@import "~ag-grid-community/dist/styles/ag-theme-alpine-dark.min.css";

.ag-grid {
  width: 100%;
  height: 100%;
}
</style>
