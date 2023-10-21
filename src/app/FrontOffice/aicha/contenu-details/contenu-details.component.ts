import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contenu } from 'src/app/Model/Contenu';
import { ContenuService } from 'src/app/Services/aicha/contenu.service';

@Component({
  selector: 'app-contenu-details',
  templateUrl: './contenu-details.component.html',
  styleUrls: ['./contenu-details.component.css']
})
export class ContenuDetailsComponent {
 
  contenuId!: number;
  contenu!: Contenu| undefined;
  contenuList : Contenu[] = [];
  constructor(
    private route: ActivatedRoute, 
    private contenuService: ContenuService , 
    private http: HttpClient, private router: Router) {
}

ngOnInit(): void {
  // Extract the contenuId from the URL
  this.contenuId = this.route.snapshot.params['id'];
    this.getContenuDetails(this.contenuId);
  
}

getContenuDetails(contenuId: number): void {
  this.contenuService.getContenuById(contenuId).subscribe(
    (data) => {
      this.contenu = data;
      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  );
}

getImageFileName(path: string): string {
  // Sépare le chemin en utilisant le séparateur de dossier '/'
  const pathParts = path.split('/');
  // Récupère le dernier élément du tableau, qui est le nom de fichier
  const fileName = pathParts[pathParts.length - 1];
  console.log('Chemin de l\'image :', fileName);

  return fileName;
}
 
}
