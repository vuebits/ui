module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import '~@/docs/assets/styles/config.scss';
          @import '~@/assets/styles/config.scss';
        `
      }
    }
  }
};
