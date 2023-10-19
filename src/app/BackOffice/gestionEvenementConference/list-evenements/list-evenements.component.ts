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

}
