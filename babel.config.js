module.exports = {
  plugins: [
    "@babel/plugin-transform-block-scoping", // const, let => var
    "@babel/plugin-transform-arrow-functions", // 화살표 함수 변경 '() =>' => 'function()'
  ],
}
