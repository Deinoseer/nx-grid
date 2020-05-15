<template>
  <div id="app">
    <section class="grid-data">
      <div class="grid-data__btns">
        <baseBtn
          v-for="(btn, i) in 3"
          :key="++i"
          :active="currentN === i"
          @click="fetchData(i)"
        >
          response-{{ i }}.json
        </baseBtn>
      </div>
      <grid :rows="getRowData" :cols="getColumnDefs" />
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import grid from "Components/grid";
import baseBtn from "Components/common/baseBtn";

export default {
  name: "App",
  components: { grid, baseBtn },
  data: () => ({
    currentN: null,
    startFromN: 1,
    columnDefs: [
      { headerName: "age", field: "age", width: 50, sortable: true },
      { headerName: "balance", field: "balance", sortable: true, width: 100 },
      { headerName: "guid", field: "guid" }
    ],
    rowData: []
  }),
  computed: {
    ...mapGetters(["getRowData", "getColumnDefs"])
  },
  beforeMount() {
    this.fetchData(this.startFromN);
    this.setColumnDefs(this.columnDefs);
    this.setRowData(this.rowData);
  },
  methods: {
    ...mapActions(["setRowData", "setColumnDefs"]),
    fetchData(n) {
      if (this.currentN === n) {
        return;
      }
      axios
        .get(`data/response-${n}.json`)
        .then(reponse => {
          this.currentN = n;
          this.setRowData(reponse.data);
        })
        .catch(e => {
          throw new Error(e);
        });
    }
  }
};
</script>

<style lang="scss">
.grid-data {
  height: 600px;
  width: 800px;
  margin: 50px auto;
  &__btns {
    margin-bottom: 8px;
  }
}
</style>
