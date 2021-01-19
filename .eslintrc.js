module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "eslint-config-prettier", // eslint와 prettier의 충돌을 방지
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    semi: "error",
    "prettier/prettier": "error", // prettier 규칙에 어긋나는 문법을 eslint를 통해 오류 표시
  },
};
