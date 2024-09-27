import db from "$lib/models/db.js";
import type { UserData } from "$lib/models/Member/type.js";

export async function readUsers(): Promise<UserData[]> {
  const users = await db
    .selectFrom("User")
    .select(["id", "name", "icon"])
    .orderBy("User.updatedAt", "desc")
    .execute();

  return users.map(
    (user): UserData => ({
      id: user.id,
      name: user.name,
      icon: user.icon,
    })
  );
}
