import { db } from "./db";

export class UserController {
  static async getAll() {
    const users = await db.user.findMany();
    db.disconnect();
    return users;
  }

  static async findById(params: { [key in string]: string }) {
    const user = await db.user.findOne({ where: { id: Number(params.id) } });
    db.disconnect();
    return user;
  }
}
