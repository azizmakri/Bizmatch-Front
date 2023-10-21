import { Role } from './role';

export class User {
  userName!: string;
  userFirstName!: string;
  userLastName!: string;
  userPassword!: string;
  facebook!: string;
  linkedIn!: string;
  siteWeb!: string;
  aboutMe!: string;
  location!: string;
  Domaines!: Domaines;
  userEmail!: string;
  image!: string;
  roleDemander!: string;
  role!: Role[];
}

enum Domaines {
  InformatiqueEtTechnologie = "InformatiqueEtTechnologie",
  FinanceEtInvestissement = "FinanceEtInvestissement",
  MarketingEtCommunication = "MarketingEtCommunication",
  Sante = "Sante",
  EnergieEtEnvironnement = "EnergieEtEnvironnement",
  IndustrieEtManufacture = "IndustrieEtManufacture",
  EducationEtFormation = "EducationEtFormation",
  LoisirsEtTourisme = "LoisirsEtTourisme",
  Immobilier = "Immobilier",
  ServicesJuridiques = "ServicesJuridiques",
  ArtEtCulture = "ArtEtCulture",
  Autre = "Autre"
}

