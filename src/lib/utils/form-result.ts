import { currentPage } from "$lib/utils/page-store.js";
import { saveLocalData, removeLocalData } from "$lib/utils/local-storage.js";
import { invalidateAll } from "$app/navigation";
import type { SubmitFunction } from "@sveltejs/kit";

type UpdateFunctions = {
  setPopupModal: (value: boolean) => void;
  setOpenKeyboard: (value: boolean) => void;
  setSelectedScoreId: (value: string | null) => void;
  setSelectedChipId: (value: string | null) => void;
};

export const createFormSubmitResult = (
  updateFunctions: UpdateFunctions
): SubmitFunction => {
  return () => {
    return async ({ result, update }) => {
      await update({ reset: false });

      if (result.type === "success" && result.data) {
        const data = result.data;
        if ("type" in data) {
          if (
            ["create-user", "update-user", "delete-user"].includes(data.type)
          ) {
            removeLocalData("userId");
            currentPage.set("member");
          } else if (data.type === "create-room") {
            if ("roomId" in data && data.roomId) {
              saveLocalData("roomId", data.roomId);
              currentPage.set("roomDetail");
            }
          } else if (["update-room", "update-room-user"].includes(data.type)) {
            currentPage.set("roomDetail");
          } else if (["create-score", "create-chip"].includes(data.type)) {
            updateFunctions.setPopupModal(false);
          } else if (["update-score", "update-chip"].includes(data.type)) {
            updateFunctions.setOpenKeyboard(false);
            updateFunctions.setSelectedScoreId(null);
            updateFunctions.setSelectedChipId(null);
          } else if (data.type === "tie-score") {
            currentPage.set("roomTie");
          } else if (data.type === "delete-room") {
            removeLocalData("roomId");
            currentPage.set("room");
          }
        }
        await invalidateAll(); // ページデータを再取得
      }
    };
  };
};
