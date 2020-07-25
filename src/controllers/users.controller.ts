import { db } from "./db";

export class UserController {
  static getAll() {
    return db.user.findMany();
  }

  static findById({ id }: { id: string }) {
    // return MockDB.find((user) => user.id === Number(id));
  }
}
