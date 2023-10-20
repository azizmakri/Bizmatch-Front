export class Contenu {
    id!: number;
    type!: TypeContenu;  // I'm using string for the Enum. Replace with the exact Enum values if needed.
    titre!: string;
    description!: string;
    lien!: string; 
    image!: string; // It's not marked with @NotBlank, so it can be optional.
    dateCreation!: Date;
    campagneMarketingId!: number;

   }
  
   enum TypeContenu {
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    TEXTE = "TEXTE"
}