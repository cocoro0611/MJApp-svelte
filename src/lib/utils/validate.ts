import type { User, Room } from "$lib/models/type.js";
let user: User;
let room: Room;

let nameError: string = "";
let userNameMinLength = 1;
let userNameMaxLength = 5;
let roomNameMinLength = 1;
let roomNameMaxLength = 10;

export const validateUser = () => {
  nameError = "";
  if (user.name.length < 1) {
    nameError = `名前は${userNameMinLength}文字以上で入力してください`;
  } else if (user.name.length > userNameMaxLength) {
    nameError = `名前は${userNameMaxLength}文字以内で入力してください`;
  }
  return nameError === "";
};

export const validateRoom = () => {
  nameError = "";
  if (room.name.length < 1) {
    nameError = `名前は${roomNameMinLength}文字以上で入力してください`;
  } else if (room.name.length > roomNameMaxLength) {
    nameError = `名前は${roomNameMaxLength}文字以内で入力してください`;
  }
  return nameError === "";
};
