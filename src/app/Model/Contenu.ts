export class Contenu {
    id!: number;
    type!: string;  // I'm using string for the Enum. Replace with the exact Enum values if needed.
    titre!: string;
    description!: string;
    lien?: string;  // It's not marked with @NotBlank, so it can be optional.
    dateCreation!: Date;
   }
