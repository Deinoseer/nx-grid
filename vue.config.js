module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/common.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: require("./aliases.config").webpack
    }
  }
};
