/*
 * @Author: liangpeiqiang qiang@innben_qiang.com
 * @Date: 2023-07-04 11:08:28
 * @LastEditors: liangpeiqiang qiang@innben_qiang.com
 * @LastEditTime: 2023-09-14 18:21:39
 * @FilePath: \rpa_sdk\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { resolve } from "path";
import { obfuscator } from 'rollup-obfuscator';
const { uglify } = require('rollup-plugin-uglify');
import { defineConfig } from "vite";

export default () => {
  return defineConfig({
    plugins: [obfuscator()],
    resolve: {
      alias: [
        {
          find: "@",
          replacement: resolve(__dirname, "src"),
        },
      ],
    },
    build:{
      outDir:"",
      target: "es2015",
      // minify: "esbuild",
      // chunkSizeWarningLimit: 2000,
      // sourcemap: false,
      lib:{
        entry:resolve(__dirname,'./src/index.ts'),
        name:"office-print",
        fileName:"index"
      },
      minify: false,
      rollupOptions:{
        external: ['vue'],
        output:{
          globals: {
            vue:"Vue"
          }
        }
      }
      // rollupOptions:{
      //   input:'./src/index.js',
      //   output:{
      //     entryFileNames: 'index.js',
      //   }
      // }
    }
  });
};
