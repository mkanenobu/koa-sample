import Router from "koa-router";
import { UserController } from "../controllers/users.controller";

export const UserRouter = new Router({ prefix: "/users" });

UserRouter.get("/", async (ctx) => {
  ctx.body = await UserController.getAll();
});

UserRouter.get("/:id", async (ctx) => {
  const user = await UserController.findById(ctx.params);
  if (!user) {
    ctx.status = 404;
  } else {
    ctx.body = user;
  }
});
