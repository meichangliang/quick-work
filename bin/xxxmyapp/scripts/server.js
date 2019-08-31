'use strict';

const static_serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const path = require('path');
const fs = require('fs');

const staticPath = '../dist';

app.use(static_serve(path.join(__dirname, staticPath)));

app.use(async (ctx, next) => {
  const html = fs.readFileSync(
    path.join(__dirname, staticPath, 'index.html'),
    'utf-8'
  );
  ctx.body = html;
  await next();
});

const port = 3380;
app.listen(port, '0.0.0.0', () => {
  console.info(`server is starting at port ${port}`);
  console.info(`服务已经启动,请在浏览器中输入 http://localhost:${port} `);
});
