### 1.介绍
```
主要配置vite服务器的打包地址，打包分解，端口号，是否浏览器自动打开，远程请求地址代理目标，目录别名，全局样式配置等。
```

### 2.目录别名配置
```
在vite.config.ts中配置
import { build, defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {loadEnv} from 'vite'
import {resolve} from 'path';

// https://vitejs.dev/config/
export default ({command, mode}) => {
  return defineConfig({
    plugins: [vue()],
    // 设置项目文件导入路径
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
  })
}
```

### 3.全局样式配置
*在assets文件夹下创建style文件夹，并在里边创建文件global.css文件, 在里边定义全局的样式内容*
#### 安装sass
```
cnpm install sass-loader node-sass sass -D
```
#### 编写全局样式
```
/globle.scss 文件

$color-primary: #007aff; 
```
#### 在vite.config.ts中配置
```
import { build, defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {loadEnv} from 'vite'
import {resolve} from 'path';

// https://vitejs.dev/config/
export default ({command, mode}) => {
  return defineConfig({
    plugins: [vue()],
    // css预处理器配置
    css: {
    preprocessorOptions: {
      // 导入global.scss, 这样就可以在vue全局中使用global.scss中定义的变量了
      scss: {
        additionalData: '@import "@/assets/styles/global.scss";'
      }
    }
  },
  })
}
```
#### .vue文件中使用
```
<style lang="scss" scoped>
.text-color {
  color: $color-primary;
}
</style>
```

### 4.环境变量的配置
*在vite.config.ts和vue的其他文件都都可以读取*
#### 配置文件
##### *【注】:变量一定要以VITE_开头，才能暴露给其他文件使用*
```
1. 在项目跟目录下创建以下文件
  .env.development  // 配置开发环境
  .env.production   // 配置生成环境
2. 定义变量
  # 开发环境
  VITE_APP_TITLE = 'VUE前端技术'
  VITE_APP_PORT = 8088

  # 请求接口
  VITE_APP_BASE_URL = 'http://xxxxx'
```

#### 智能提示配置(在vue文件中读取时提示自己定义的变量)
```
在src下创建文件env.d.ts, 申明在配置文件中变量的数据类型
  // 环境变量智能提示配置
  interface ImportMetaEnv {
    VITE_APP_TITLE: string,
    VITE_APP_PORT: number,
    VITE_APP_BASE_URL: string
  }
```


#### 在vite.config.ts中读取配置文件
```
import { build, defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {loadEnv} from 'vite'

// https://vitejs.dev/config/
export default ({command, mode}) => {
  return defineConfig({
    plugins: [vue()],
    // 服务器配置
    server: {
      host: '127.0.0.1',
      // port: 8089,
      port: Number(loadEnv(mode, process.cwd()).VITE_APP_PORT),  // 从配置文件中读取
      strictPort: true, // 检查端口是否被占用，占用直接退出
      https: false, // 是否使用https
      open: true, // 在浏览器中自动打开
      proxy: {  // 代理 (有很多种方式定义，具体看官网)
        // 选项写法
        '/api': {
          // target: 'http://jsonplaceholder.typicode.com',
          target: loadEnv(mode, process.cwd()).VITE_APP_BASE_URL,  // 从配置文件中读取
          changeOrigin: true, // 跨域配置
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        // 正则表达式写法
        // '^/fallback/.*': {
        //   target: 'http://jsonplaceholder.typicode.com',
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/fallback/, '')
        // },
      },
      hmr: {
        overlay: false,  // 是否频闭服务器报错
      }
    },
  })
}
```
#### 在其他.vue文件中读取配置参数
```
<script setup lang="ts">
  const title = import.meta.env.VITE_APP_TITLE
</script>
```

### 5.服务器及代理配置
```
import { build, defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {loadEnv} from 'vite'

// https://vitejs.dev/config/
export default ({command, mode}) => {
  return defineConfig({
    plugins: [vue()],
    // 服务器配置
    server: {
      host: '127.0.0.1',
      // port: 8089,
      port: Number(loadEnv(mode, process.cwd()).VITE_APP_PORT),  // 从配置文件中读取
      strictPort: true, // 检查端口是否被占用，占用直接退出
      https: false, // 是否使用https
      open: true, // 在浏览器中自动打开
      proxy: {  // 代理 (有很多种方式定义，具体看官网)
        // 选项写法
        '/api': {
          // target: 'http://jsonplaceholder.typicode.com',
          target: loadEnv(mode, process.cwd()).VITE_APP_BASE_URL,  // 从配置文件中读取
          changeOrigin: true, // 跨域配置
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        // 正则表达式写法
        // '^/fallback/.*': {
        //   target: 'http://jsonplaceholder.typicode.com',
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/fallback/, '')
        // },
      },
      hmr: {
        overlay: false,  // 是否频闭服务器报错
      }
    },
  })
}
```

### 6.分块打包配置
```
import { build, defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {loadEnv} from 'vite'
import {resolve} from 'path';

// https://vitejs.dev/config/
export default ({command, mode}) => {
  return defineConfig({
    plugins: [vue()],

    // 分块打包配置
    build: {
      chunkSizeWarningLimit: 1500, // 分块打包，将大包分解成更小的块
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_moudles')) {
              return id.toString().split('node_moudles/')[1].split('/')[0].toString();
            }
          }
        }
      }
    }
  },
  })
}
```

### 7.完整配置文件
```
import { build, defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {loadEnv} from 'vite'
import {resolve} from 'path';

// https://vitejs.dev/config/
export default ({command, mode}) => {
  return defineConfig({
    plugins: [vue()],
    // 服务器配置
    server: {
      host: '127.0.0.1',
      // port: 8089,
      port: Number(loadEnv(mode, process.cwd()).VITE_APP_PORT),  // 从配置文件中读取
      strictPort: true, // 检查端口是否被占用，占用直接退出
      https: false, // 是否使用https
      open: true, // 在浏览器中自动打开
      proxy: {  // 代理 (有很多种方式定义，具体看官网)
        // 选项写法
        '/api': {
          // target: 'http://jsonplaceholder.typicode.com',
          target: loadEnv(mode, process.cwd()).VITE_APP_BASE_URL,  // 从配置文件中读取
          changeOrigin: true, // 跨域配置
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        // 正则表达式写法
        // '^/fallback/.*': {
        //   target: 'http://jsonplaceholder.typicode.com',
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/fallback/, '')
        // },
      },
      hmr: {
        overlay: false,  // 是否频闭服务器报错
      }
    },

    // 设置项目文件导入路径
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },

    // css 预处理器设置
    css: {
      preprocessorOptions: {
        // 导入global.scss, 这样就可以在vue全局中使用global.scss中定义的变量了
        scss: {
          additionalData: '@import "@/assets/styles/global.scss";'
        }
      }
    },

    // 分块打包配置
    build: {
      chunkSizeWarningLimit: 1500, // 分块打包，将大包分解成更小的块
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_moudles')) {
              return id.toString().split('node_moudles/')[1].split('/')[0].toString();
            }
          }
        }
      }
    }

  })
}

```