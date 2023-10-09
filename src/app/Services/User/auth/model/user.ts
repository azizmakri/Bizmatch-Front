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
  Domaines!: string;
  userEmail!: string;
  roleDemander!: string;
  role!: Role[];
}
