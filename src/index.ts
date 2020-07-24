import Koa from "koa";
import Router from "koa-router";

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.body = "Hello, World!";
});

app.use(router.routes()).use(router.allowedMethods());

const port = 3000;

app.listen(port);
