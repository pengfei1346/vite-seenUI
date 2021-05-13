module.exports = {
  presets: [ // babel解析的预设，是反着执行的
    [
      '@babel/env',
      {
        loose: true,
        modules: false,
      },
    ],
    '@babel/typescript',
  ],
  // plugins: [
  //   '@vue/babel-plugin-jsx',
  //   '@babel/proposal-class-properties',
  //   '@babel/transform-runtime',
  //   'lodash',
  // ],
  overrides: [
    {// .vue文件中使用了ts，对ts代码进行转化
      test: /\.vue$/,
      plugins: [
        '@babel/transform-typescript',
      ],
    },
  ],
  // env: {
  //   utils: {
  //     ignore: [
  //       '**/*.test.ts',
  //       '**/*.spec.ts',
  //     ],
  //     presets: [
  //       [
  //         '@babel/env',
  //         {
  //           loose: true,
  //           modules: false,
  //         },
  //       ],
  //     ],
  //     plugins: [
  //       [
  //         'babel-plugin-module-resolver',
  //         {
  //           root: ['seen-ui'],
  //           alias: {
  //             '@seen-ui': 'seen-ui/lib',
  //           }
  //         }
  //       ]
  //     ]
  //   }
  // }
}
