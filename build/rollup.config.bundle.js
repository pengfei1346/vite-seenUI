// 全量打包
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path';
import vue from 'rollup-plugin-vue'

import pkg from '../package.json'
const deps = Object.keys(pkg.dependencies)

export default {
    input: path.resolve(__dirname, `../packages/seen-ui/index.ts`),
    output: {
        format: 'es',
        file: `lib/index.esm.js`,
    },
    plugins: [
        terser(),
        nodeResolve(), // 支持第三方模块，vue，typescript
        vue({
            target: 'browser',
            css: false,
            exposeFilename: false,
        }),
        typescript({ // 默认调用tsconfig.json  帮我们生成声明文件
            tsconfigOverride: {
                'include': [
                    'packages/**/*',
                    'typings/vue-shim.d.ts',
                ],
                'exclude': [
                    'node_modules',
                    'packages/**/__tests__/*',
                    'website'
                ]
            },
            abortOnError: false,
        })
    ],
    external(id) { // 排除vue本身
        return /^vue/.test(id)
            // || deps.some(k => new RegExp('^' + k).test(id))
    }
}