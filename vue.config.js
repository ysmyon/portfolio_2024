const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  
})

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
  filenameHashing: true,
  css: {
    loaderOptions: {
      sass: {
		// 이 옵션에 변수를 모아둔 파일을 연결한다.
		additionalData: `
          @import "@/assets/scss/_common.scss";
        `,
      },
    },
  },
  
};

