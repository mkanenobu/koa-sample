import { db } from "./index";

export const insertUserSeeds = async (): Promise<void> => {
  const names = ["John", "Lisa", "Aria", "Kim"];
  for (const name of names) {
    const created = await db.user.create({ data: { name } });
    console.log("User: ", created);
  }
};
