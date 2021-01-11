const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 로더 적용 대상
        use: [
          path.resolve('./webpack-loader.js'),
        ], // 사용할 로더 목록
      }
    ]
  }
}
