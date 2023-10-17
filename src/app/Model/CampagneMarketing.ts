export class CampagneMarketing 
{
    id!: number
    nom!: string
    description!: string
    dateDebut!: Date
    dateFin!: Date
    budget!: number
    devise!: string  // I'm using string for Enum here. You might want to replace this with the exact Enum values if needed.
    statut?: string  // Same comment as for devise. Replace with exact Enum values if needed.
    }
