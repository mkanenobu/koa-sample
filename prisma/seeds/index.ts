import { PrismaClient } from "@prisma/client";
import { insertUserSeeds } from "./users.seed";

export const db = new PrismaClient();

const tasks = [insertUserSeeds()];

Promise.all(tasks).finally(() => {
  db.disconnect();
});
