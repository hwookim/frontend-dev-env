const path = require("path");

module.exports = {
  mode: "development", // 실행 모드, production, development, none
  entry: {
    main: "./src/index.js", // 최상위 스크립트 파일
  },
  output: {
    path: path.resolve("./dist"), // 빌드 파일 생성 위치
    filename: "[name].js", // 빌드 파일명
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
