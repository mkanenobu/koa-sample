import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient(
  process.env.DEBUG ? { log: ["query", "info", "warn"] } : undefined
);
