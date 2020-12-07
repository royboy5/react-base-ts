module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ];
  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    // [
    //   'module-resolver',
    //   {
    //     extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    //     alias: {
    //       '@Components': './src/components',
    //       '@Pages': './src/pages',
    //       '@Styles': './src/styles',
    //     },
    //   },
    // ],
  ];

  return {
    presets,
    plugins,
  };
};
