import { User } from "../Services/User/auth/model";

export class ServiceFournisseur {
    idService!: number;
    nomService!: string;
    description!: string;
    nbLiked!: number;
    nbDisliked!: number;
    prixService!: number;
    dateCreation!: Date;
    fournisseur!:User;
  }