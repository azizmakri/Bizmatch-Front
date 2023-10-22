import { StrategieMarketing } from "./StrategieMarketing"; // Assuming you will have a corresponding StrategieMarketing class in TypeScript

export class ObjectifCommercial {
    id!: number;
    titre!: string;
    description!: string;
    cibleFinanciere!: number;
    dateDebut!: Date;
    dateFin!: Date;
    etat!: String;
    strategies!: StrategieMarketing[];
    bgColor?: string;

}

enum EtatObjectif {
    EN_COURS = "EN_COURS",
    ATTEINT = "ATTEINT",
    NON_ATTEINT = "NON_ATTEINT"
}

// You may also need a User and StrategieMarketing class based on your Java entity. 
// Ensure you create these, or replace with appropriate types if already present in your TypeScript code.
