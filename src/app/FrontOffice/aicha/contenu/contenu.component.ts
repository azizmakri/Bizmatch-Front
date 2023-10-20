import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CampagneMarketing } from 'src/app/Model/CampagneMarketing';
import { Contenu } from 'src/app/Model/Contenu';
import { CampagneMarketingService } from 'src/app/Services/aicha/campagne-marketing.service';
import { ContenuService } from 'src/app/Services/aicha/contenu.service';

@Component({
  selector: 'app-contenu',
  templateUrl: './contenu.component.html',
  styleUrls: ['./contenu.component.css']
})
export class ContenuComponent {
  campagneId!: number;
  campagne!: CampagneMarketing;
  contenu!:Contenu;
  contenuList !: Contenu[];
  constructor(
    private route: ActivatedRoute, 
    private cs: ContenuService,
    private campagneService: CampagneMarketingService , 
    private http: HttpClient, private router: Router) {
}
ngOnInit(): void {
  // Extract the campagneId from the URL
  this.route.params.subscribe((params) => {
    this.campagneId = +params['id']; // Assuming the route parameter is named 'id'
    // Fetch the CampagneMarketing by campagneId
    this.getCampagneById(this.campagneId);
   
  });
}

getCampagneById(campagneId: number): void {
  this.campagneService.getCampagneMarketingById(campagneId)
    .subscribe(
      (data) => {
        this.campagne = data;
        // Once you have the CampagneMarketing object, you can access its contenuList
        this.contenuList = data.contenus;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
}
delete(id: number): void {
  this.cs.deleteContenu(id).subscribe((data) => {
    console.log('contenu supprimé !');
    location.reload();
  })
}

getImageFileName(path: string): string {
  // Sépare le chemin en utilisant le séparateur de dossier '/'
  const pathParts = path.split('/');
  // Récupère le dernier élément du tableau, qui est le nom de fichier
  const fileName = pathParts[pathParts.length - 1];
  console.log('Chemin de l\'image :', fileName);
  console.log('Image Path:', this.getImageFileName(this.contenu.image));

  return fileName;
}
}
