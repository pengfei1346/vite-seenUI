//  解析md文件
import vitePluginVuedoc from "vite-plugin-vuedoc";
// import vue from '@vitejs/plugin-vue'

// const resolve = dir => path.resolve(__dirname, dir);

const config = {
  base: "./",
  // can read default _assets at Github pages
  assetsDir: "website/assets",
  plugins: [
    vitePluginVuedoc({
      prism: {
        theme: "okaidia",
      },
    }),
    // vue()
  ],
  // alias: {
  //   '@': resolve('./src'),
  //   '@components': resolve('./src/components'),
  //   '@views': resolve('./src/views'),
  //   '@assets': resolve('./src/assets')
  // }
};

export default config;
