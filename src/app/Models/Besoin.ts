export class Besoin {
    id!: number;  // L'ID est optionnel car lors de la création d'un nouveau besoin, il n'existe pas encore
    description!: string;
    type!: string;
}

export enum TypeBesoin {
    PARTENARIAT,  // Ces valeurs doivent correspondre exactement aux énumérations Java
    FOURNISSEUR,
    CLIENT
    // Ajoutez d'autres types si nécessaire
  }