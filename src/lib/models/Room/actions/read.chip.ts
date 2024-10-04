import db from "$lib/models/db.js";
import type { ChipData } from "../type.js";

export async function readChips(): Promise<ChipData[]> {
  const chips = await db
    .selectFrom("Chip")
    .innerJoin("RoomUser", (join) =>
      join
        .onRef("Chip.roomId", "=", "RoomUser.roomId")
        .onRef("Chip.userId", "=", "RoomUser.userId")
    )
    .select([
      "Chip.id",
      "Chip.input",
      "Chip.chip",
      "Chip.chipCount",
      "Chip.userId",
      "Chip.roomId",
      "RoomUser.order as order",
    ])
    .orderBy("Chip.chipCount", "asc")
    .orderBy("RoomUser.order", "asc")
    .execute();

  const groupedChips: { [key: string]: ChipData } = {};
  chips.forEach((chip) => {
    const key = `${chip.roomId}-${chip.chipCount}`;
    if (!groupedChips[key]) {
      groupedChips[key] = {
        roomId: chip.roomId,
        chipCount: chip.chipCount,
        userChips: [],
      };
    }
    groupedChips[key].userChips.push({
      id: chip.id,
      input: chip.input,
      chip: chip.chip,
      order: chip.order,
      userId: chip.userId,
    });
  });
  return Object.values(groupedChips);
}
