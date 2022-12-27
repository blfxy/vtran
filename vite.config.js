import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
const mdPlugin = require("vite-plugin-markdown");

// https://vitejs.dev/config/
export default defineConfig({
    devServer: {},
    css: {
        //css预处理
        preprocessorOptions: {
            scss: {
                //引入variable.scss全局预定义变量
                // additionalData: '@import "./src/assets/style/variable.scss";',
            },
        },
    },
    plugins: [vue(), vueJsx(), mdPlugin.plugin({ mode: ["html"] })],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
