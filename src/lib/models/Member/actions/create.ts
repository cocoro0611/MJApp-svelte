import { v4 } from "uuid";
import db from "$lib/models/db.js";
import type { Action } from "@sveltejs/kit";

export const createUser: Action = async ({ request }) => {
  const data = await request.formData();
  const selectedUsersCount = await db
    .selectFrom("User")
    .where("isSelected", "=", true)
    .select(db.fn.count("id").as("count"))
    .executeTakeFirst();

  const count = Number(selectedUsersCount?.count ?? 0);

  const userForm = {
    id: v4(),
    name: data.get("name"),
    icon: data.get("icon"),
    isSelected: count < 4,
  };

  await db.insertInto("User").values(userForm).execute();

  return { success: true, type: "create-user" };
};
