module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ['.'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            // This needs to be mirrored in tsconfig.json
            '@components': './components',
            '@screens': './screens',
            '@constants': './constants',
            '@models': './models',
            '@helpers': './helpers',
            '@hooks': './hooks',
            '@store': './store', 
          }
        }
      ]
    ]
  };
};
