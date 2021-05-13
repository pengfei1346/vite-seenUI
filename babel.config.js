module.exports = {
  presets: [ // babel解析的预设，是反着执行的
    // '@babel/preset-env',
    // '@babel/preset-typescript'
    [
      '@babel/env',
      {
        loose: true,
        modules: false,
      },
    ],
    '@babel/typescript',
  ],
  overrides: [{ // .vue文件中使用了ts，对ts代码进行转化
    test: /\.vue$/,
    plugins: [
      '@babel/transform-typescript',
    ]
  }]
}


// module.exports = {
//   // ATTENTION!!
//   // Preset ordering is reversed, so `@babel/typescript` will called first
//   // Do not put `@babel/typescript` before `@babel/env`, otherwise will cause a compile error
//   // See https://github.com/babel/babel/issues/12066
//   presets: [
//     [
//       '@babel/env',
//       {
//         loose: true,
//         modules: false,
//       },
//     ],
//     '@babel/typescript',
//   ],
//   plugins: [
//     '@vue/babel-plugin-jsx',
//     '@babel/proposal-class-properties',
//     '@babel/transform-runtime',
//     'lodash',
//   ],
//   overrides: [
//     {
//       test: /\.vue$/,
//       plugins: [
//         '@babel/transform-typescript',
//       ],
//     },
//   ],
//   env: {
//     utils: {
//       ignore: [
//         '**/*.test.ts',
//         '**/*.spec.ts',
//       ],
//       presets: [
//         [
//           '@babel/env',
//           {
//             loose: true,
//             modules: false,
//           },
//         ],
//       ],
//       plugins: [
//         [
//           'babel-plugin-module-resolver',
//           {
//             root: ['element-plus'],
//             alias: {
//               '@element-plus': 'element-plus/lib',
//             },
//           },
//         ],
//       ],
//     },
//   },
// }
