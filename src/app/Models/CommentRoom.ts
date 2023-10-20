import { User } from "../Services/User/auth/model";
import { Room } from "./Room";

export class CommentRoom {
  idComment!: number;
  descriptionComment!: string;
  dateCreationComment!: Date;
  commentUserId!: string;
  user!:User;
  room!:Room;
  isYours!:Boolean;
  }