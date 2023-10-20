import { Component } from '@angular/core';
import { Evenement } from 'src/app/Model/Evenement';
import { EvenementServiceService } from 'src/app/Services/EvenementService/evenement-service.service';

@Component({
  selector: 'app-list-evenements',
  templateUrl: './list-evenements.component.html',
  styleUrls: ['./list-evenements.component.css']
})
export class ListEvenementsComponent {
  evenements: Evenement[] = [];

  constructor(private evenementService: EvenementServiceService) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.evenementService.getAllEvents().subscribe((data) => {
      this.evenements = data;
    });
  }

  getImageFileName(path: string): string {
  // Sépare le chemin en utilisant le séparateur de dossier '/'
  const pathParts = path.split('/');
  // Récupère le dernier élément du tableau, qui est le nom de fichier
  const fileName = pathParts[pathParts.length - 1];
  console.log('Chemin de l\'image :', fileName);
  return fileName;
}


deleteProduct(evenement: any): void {
  const idUser="adminBizmatch";
  if (confirm('Are you sure you want to delete this post?')) {
    this.evenementService.deleteProduct(evenement.id, idUser).subscribe(() => {
      this.evenements = this.evenements.filter(e => e !== evenement);
    });
  }
}
}
