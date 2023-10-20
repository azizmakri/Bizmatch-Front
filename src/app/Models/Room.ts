import { User } from "../Services/User/auth/model";
import { CommentRoom } from "./CommentRoom";
import { ServiceFournisseur } from "./ServiceFournisseur";

export class Room {
    idRoom!: number;
    roomName!: string;
    users!: User[];
    commentRoomList!: CommentRoom[];
    serviceF!: ServiceFournisseur;
  }