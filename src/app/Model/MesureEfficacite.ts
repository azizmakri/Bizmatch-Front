export class MesureEfficacite 
{
    id!: number;
    typeMesure!: string;  // Use string for Enum. If you have a TypeScript Enum for TypeMesure, use that instead.
    valeur!: number;
    dateMesure!: Date;
}
