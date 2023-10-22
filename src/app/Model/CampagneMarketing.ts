import { Contenu } from "./Contenu"


export class CampagneMarketing 
{
    id!: number
    nom!: string
    description!: string
    dateDebut!: Date
    dateFin!: Date
    budget!: number
    devise!: Devise  // I'm using string for Enum here. You might want to replace this with the exact Enum values if needed.
    statut!: string  // Same comment as for devise. Replace with exact Enum values if needed.
    contenus!: Contenu[];
}

    enum Devise {
        TND = "TND",
        EUR = "EUR",
        USD = "USD"
    }

     enum StatusCampagne {
        PLANIFIEE ="PLANIFIEE",
        EN_COURS="EN_COURS",
        TERMINEE="TERMINEE"
    }