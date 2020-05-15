import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rowData: [],
    columnDefs: []
  },
  getters: {
    getColumnDefs: state => state.columnDefs,
    getRowData: state => state.rowData
  },
  mutations: {
    setColumnDefs(state, columns) {
      state.columnDefs = columns;
    },
    setRowData(state, rows) {
      state.rowData = rows;
    }
  },
  actions: {
    setColumnDefs(context, columns) {
      context.commit("setColumnDefs", columns);
    },
    setRowData(context, rows) {
      context.commit("setRowData", rows);
    }
  }
});
