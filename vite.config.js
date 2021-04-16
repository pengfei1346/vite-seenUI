//  解析md文件
import vitePluginVuedoc from "vite-plugin-vuedoc";

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
  ],
};

export default config;
