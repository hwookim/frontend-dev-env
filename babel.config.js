/*
babel은 브라우저마다 js 환경이 다른 문제를 해결하기 위해 일부 코드를 변환한다.
 */

module.exports = {
  plugins: [
    //   "@babel/plugin-transform-block-scoping", // const, let => var
    //   "@babel/plugin-transform-arrow-functions", // 화살표 함수 변경 '() =>' => 'function()'
    //   "@babel/plugin-transform-strict-mode", // use strict => 엄격한 문 확인
  ],
  presets: [
    [
      "@babel/preset-env", // 프리셋을 통한 바벨 플러그인 통합 관리
      {
        targets: {
          // 호환 가능한 브라우저 타입 지정
          chrome: "79",
          ie: "11",
        },
        useBuiltIns: "usage", // promise와 같은 IE에서 사용불가한 함수를 core-js의 폴리필을 통해 사용 가능하도록 함
        // 폴리필 - 브라우저에서 지원하지 않는 기능을 다른 함수를 통해 구현해둔 코드 조각
        corejs: {
          version: 2, // core-js 버전 지정
        },
      },
    ],
  ],
};
