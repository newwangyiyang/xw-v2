> 技术栈：vue-cli4 + webpack4 + vant + axios + scss + postcss-px2rem

#### rem + vw

采用 rem + vw 结合的方式进行移动端适配，通过 `postcss` 中的 `px2rem-loader`,将我们项目中的 `px` 按一定比例转化 `rem`;

- 给根元素大小设置随着视口变化而变化的 vw 单位，这样就可以实现动态改变其大小。
- 限制根元素字体大小的最大最小值，配合 body 加上最大宽度和最小宽度
- 如无最大最小宽度需求，可直接采用`vw`方案: [viewport 适配参考地址](https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md)

```js
// 配置参考，其中rootValue为转换比例，可根据项目实际情况进行配置

// postcss.config.js
module.exports = {
  plugins: {
    autoprefixer: {},
    // tailwindcss: {},
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};
```

```bash
├── build                      # 构建相关
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体 scss样式等静态资源
│   ├── components             # 全局公用组件
│   ├── config             		 # 项目配置
│       └── filters            # 全局 filter
│   ├── icons                  # 项目所有 svg icons
│   ├── lang                   # 国际化 language
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── utils                  # 全局公用方法
├──     └── permission.js      # 权限管理，登录鉴权
│   ├── vendor                 # 公用vendor
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint 配置项
├── .babelrc                   # babel-loader 配置
├── vue.config.js              # vue-cli 配置
├── postcss.config.js          # postcss 配置
├── tailwind.config.js         # tailwind 配置
└── package.json               # package.json
```

#### vant

- [文档地址](https://youzan.github.io/vant/#/zh-CN/quickstart)

- 已配置好`按需加载`

  - 使用示例

  ```js
  // 全局注册
  import Vue from 'vue';
  import { Button } from 'vant';

  Vue.use(Button);
  ```

  ```js
  // 局部注册
  import { Swipe, SwipeItem } from 'vant';
  export default {
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
    },
  };
  ```

#### API 请求

- 对请求封装，设置请求拦截和响应拦截
- 封装了前后端鉴权逻辑，及`refreshToken`相关逻辑
- 统一异常处理
- useAxiosCancel 用于请求当前请求
- 依赖 env 环境

#### Vue-router

- 路由懒加载配置

  Vue 项目中实现路由按需加载（路由懒加载）的 3 中方式：

  ```js
  // 1、Vue异步组件技术：
  {
    path: '/home',
    name: 'Home',
    component: resolve => reqire(['../views/Home.vue'], resolve)
  }

  // 2、es6提案的import()
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  }

  // 3、webpack提供的require.ensure()
  {
    path: '/home',
    name: 'Home',
    component: r => require.ensure([],() =>  r(require('../views/Home.vue')), 'home')
  }
  ```

- 改变单页面应用的 titlea 及登录权限校验

  在路由守卫中判断。当`to.meta.auth`为`true`(需要登录)，且不存在登录信息缓存时，需要重定向去登录页面

  ```js
  meta: { title: '列表页', keepAlive: true, auth: false }
  ```

- 页面缓存配置

  通过配置路由的 meta 对象的 keepAlive 属性值来区分页面是否需要缓存

  > 注意:**路由中定义的 name 必须跟组件中的 name 一致**

  ```js
  meta: { title: '列表页', keepAlive: true, auth: false }
  ```

#### vue.config.js 配置

- proxy 开发环境反向代理
- Js、css 压缩混淆
- 去除 console.log 、debugger
- gzip，服务端也需相应配置
- 打包分析
- 骨架屏
  - 采用`vue-skeleton-webpack-plugin`插件对骨架屏进行插入，详见源码

#### 优雅使用 svg

推荐项目 icon 使用 svg，其优势不言而喻，多彩，矢量保真，可设置 font-size，color，动画；当然最重要的是其能够减少 http 请求，节省带宽

- **svg-sprite-loader 将多个 svg 文件最终打包成一个 svg-sprite**

- [svgo](https://github.com/svg/svgo/)

```bash
# 执行svgo命令，可以压缩svg文件
npm run svgo
```

```js
  // 获取穴位视频跟图片
  api.jiudaifu.com/v2/data/jlxw/extra?xwname=%E8%BF%8E%E9%A6%99

```
