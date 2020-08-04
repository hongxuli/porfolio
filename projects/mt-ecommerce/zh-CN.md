采用nuxt 和 koa 对[美团官网](https://am.meituan.com/)的模仿

<hr class="read-more" />

1. 使用了[element UI](https://element.eleme.io/#/en-US) 作为 css 框架.
2. 采用了[nuxt.js](https://zh.nuxtjs.org/) ssr加快了页面加载速度. 同时便于优化 SEO.
3. 后端采用[koa](https://koajs.com/), 设计了多个接口, 例如城市定位服务, 登录注册, 邮箱验证, 服务端缓存, 推荐搜索服务.
4. 数据库采用了[MongoDB](https://www.mongodb.com/), 使用了 mongoose 作为 对象模型工具.
5. 部署时使用了[docker](https://www.docker.com/)制作了镜像部署在[digitalocean](https://www.digitalocean.com/)上



