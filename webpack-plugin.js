class WebpackPlugin {
  apply(compiler) {
    compiler.hooks.done.tap("My Plugin", stats => {
      console.log("WebpackPlugin: done")
    })
  }
}

module.exports = WebpackPlugin;
