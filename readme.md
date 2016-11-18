#### react+redux重写CNode社区



###安装

项目地址：（`git clone`）

```shell
git clone https://github.com/wanzhichao/cnode.git
```

通过`npm`安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/))

```
npm install
```

启动服务(http://localhost:3007)

```
npm run dev
```

发布代码
```
webpack -p然后 gulp build
```

###项目地址

   ![http://1.motherday11.sinaapp.com/cnode/html/index.html#/home/main/](https://github.com/wanzhichao/cnode/blob/master/images/share.png)

###目录结构
<pre>
.
├── README.md
├── css                // 样式文件
├── images             // 图片资源
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── webpack.config.js  // webpack配置文件
├── src                // 生产目录
│   ├── action         //
│   ├── reducer        //
│   ├── store          //
│   ├── util           // 工具方法
│   ├── components     // 组件
│   ├── index.js       // 页面入口
│   ├── route.js       // 路由配置
│   └── page           // 页面
</pre>
