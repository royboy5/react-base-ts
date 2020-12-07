module.exports = function(api) {
  api.cache(true);

  const presets = ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"];
  const plugins = [
    [
      "module-resolver",
      {
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".css"],
        "alias": {
          "@Components": "./src/components",
          "@Pages": "./src/pages",
          "@Styles": "./src/styles"
        }
      }
    ]
  ];

  return {
    presets,
    plugins,
  };
};
