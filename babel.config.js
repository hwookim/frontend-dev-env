/*
babel은 브라우저마다 js 환경이 다른 문제를 해결하기 위해 일부 코드를 변환한다.
 */

module.exports = {
  // plugins: [
  //   "@babel/plugin-transform-block-scoping", // const, let => var
  //   "@babel/plugin-transform-arrow-functions", // 화살표 함수 변경 '() =>' => 'function()'
  // ],
  presets: [
    "@babel/preset-env", // 프리셋을 통한 바벨 플러그인 통합 관리
  ]
}
