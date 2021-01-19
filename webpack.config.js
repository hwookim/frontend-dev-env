const path = require("path");
const WebpackPlugin = require("./webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development", // 실행 모드, production, development, none
  entry: {
    main: "./src/index.js", // 최상위 스크립트 파일, key => [name]
  },
  output: {
    path: path.resolve("./dist"), // 빌드 파일 생성 위치
    filename: "[name].js", // 빌드 파일명
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 로더 적용 대상
        use: [path.resolve("./webpack-loader.js")], // 사용할 로더 목록
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(c|sc|sa)ss$/, // scss, sass 대응
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader // 프로덕션 환경 => MiniCssExtractPlugin은 기본 로더 사용해야함
            : "style-loader", // 개발 환경
          "css-loader",
          "sass-loader",
        ], // 적용되는 순서는 맨 뒤에서부터 앞으로 (css -> style)
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        loader: "url-loader",
        options: {
          // publicPath: "./dist/", // 파일 호출하는 쪽에 파일 위치를 알림 -> HtmlWebpackPlugin을 통해 스크립트 자동 생성
          name: "[name].[ext]?[hash]", // 이미지 명을 해쉬값을 포함해서 찾도록 함. 해쉬값은 캐쉬 무력화를 할 수 있게 한다.
          limit: 20000, // 20kb 이하의 파일만 처리, 그 이상은 file-loader를 통해 처리함 => file-loader도 설치되어 있어야 함!
        },
      },
    ],
  },
  plugins: [
    new WebpackPlugin(),
    new HtmlWebpackPlugin({
      // HML 파일 후처리 플러그인
      template: "./index.html", // 템플릿 경로
      templateParameters: {
        // 템플릿에 주입할 파라매터 변수 지정, <%= %> 안에 있는 변수를 읽는다.
        env: process.env.NODE_ENV === "development" ? "(개발용)" : "", // NODE_ENV=development webpack 를 통해 지정 가능
      },
      minify:
        process.env.NODE_ENV === "production"
          ? {
              // 빌드된 html 파일의 경량화
              collapseWhitespace: true, // 빈칸 제거
              removeComments: true, // 주석 제거
            }
          : false,
      hash: true, // 정적 파일을 불러올때 쿼리문자열에 웹팩 해쉬값을 추가한다
    }),
    new CleanWebpackPlugin(), // 이전 빌드 파일 제거 후 새로 빌드
    ...(process.env.NODE_ENV === "production"
      ? [new MiniCssExtractPlugin({ filename: "[name].css" })] // style을 js에 귀속시키지 않고 별도의 css 파일로 분리
      : // 하나의 큰 파일을 다운받는 것 보다 여러 파일을 동시적으로 받는 것이 효율적임
        []), // 개발 환경에서는 굳이 안해도 되나..?
  ],
};
