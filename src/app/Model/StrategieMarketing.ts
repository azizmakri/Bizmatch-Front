
export class StrategieMarketing {
    id!: number;
    titre!: string;
    description!: string;
    dateLancement!: Date;
    type!: TypeStrategie;
 }

enum TypeStrategie {
    DIGITAL = "DIGITAL",
    TRADITIONNEL = "TRADITIONNEL",
    MIXTE = "MIXTE"
}
