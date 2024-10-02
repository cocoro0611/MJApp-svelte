import db from "$lib/models/db.js";
import type { UserData } from "$lib/models/Member/type.js";

export async function readUsers(): Promise<UserData[]> {
  const users = await db
    .selectFrom("User")
    .select(["id", "name", "icon", "isDefault"])
    .orderBy("User.isDefault", "desc")
    .orderBy("User.updatedAt", "asc")
    .execute();

  return users.map(
    (user): UserData => ({
      id: user.id,
      name: user.name,
      icon: user.icon,
      isDefault: user.isDefault,
    })
  );
}
