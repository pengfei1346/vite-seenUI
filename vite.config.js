//  解析md文件
import vitePluginVuedoc from "vite-plugin-vuedoc";
// import vue from '@vitejs/plugin-vue'

// const resolve = dir => path.resolve(__dirname, dir);

const config = {
  base: "./",
  // 静态资源服务的文件夹, 默认"public"
  publicDir: 'public',
  // can read default _assets at Github pages
  assetsDir: "website/assets",
  css: {
    // postcss: {
    //   plugins: [
    //     require('autoprefixer')
    //   ]
    // }
  },
  plugins: [
    vitePluginVuedoc({
      prism: {
        theme: "okaidia",
      },
    }),
    // vue()
  ],
  server: {
    // // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
    // host: '0.0.0.0',
    // // 服务器端口号
    // port: 3000,
    // // boolean | string 启动项目时自动在浏览器打开应用程序；如果为string，比如"/index.html"，会打开http://localhost:3000/index.html
    // open: false,
    // // 自定义代理规则
    // proxy: {
    //   '/api': {
    //     target: 'http://jsonplaceholder.typicode.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  },
  build: {
    // 指定输出路径，默认'dist'
    outDir: 'dist',
    // 指定生成静态资源的存放路径(相对于build.outDir)
    assetsDir: 'assets',
    // 小于此阈值的导入或引用资源将内联为base64编码，设置为0可禁用此项。默认4096（4kb）
    assetsInlineLimit: '4096',
    // 启用/禁用CSS代码拆分，如果禁用，整个项目的所有CSS将被提取到一个CSS文件中,默认true
    cssCodeSplit: true,
    // 构建后是否生成source map文件，默认false
    sourcemap: false,
    // 为true时，会生成manifest.json文件，用于后端集成
    manifest: false
  }
  // alias: {
  //   '@': resolve('./src'),
  //   '@components': resolve('./src/components'),
  //   '@views': resolve('./src/views'),
  //   '@assets': resolve('./src/assets')
  // }
};

export default config;
