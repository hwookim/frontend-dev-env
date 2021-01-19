module.exports = function webpackLoader(content) {
  return content.replace("console.log", "alert");
};
