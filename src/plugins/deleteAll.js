class RemoveConsoleLogsPlugin {
    apply(compiler) {
      compiler.hooks.emit.tap('RemoveConsoleLogsPlugin', (compilation) => {
        for (const name in compilation.assets) {
          if (name.endsWith('.js')) {
            const originalSource = compilation.assets[name].source();
            const updatedSource = originalSource.replace(/console\.(log|warn|error)\(.*\);?/g, '');
            compilation.assets[name] = {
              source: () => updatedSource,
              size: () => updatedSource.length,
            };
          }
        }
      });
    }
  }
  
  module.exports = RemoveConsoleLogsPlugin;