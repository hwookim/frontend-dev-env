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
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          'css-loader',
        ], // 적용되는 순서는 맨 뒤에서부터 앞으로 (css -> style)
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        loader: "url-loader",
        options: {
          publicPath: "./dist/", // 파일 호출하는 쪽에 파일 위치를 알림
          name: "[name].[ext]?[hash]", // 이미지 명을 해쉬값을 포함해서 찾도록 함. 해쉬값은 캐쉬 무력화를 할 수 있게 한다.
          limit: 20000, // 20kb 이하의 파일만 처리, 그 이상은 file-loader를 통해 처리함 => file-loader도 설치되어 있어야 함!
        },
      },
    ],
  },
}

