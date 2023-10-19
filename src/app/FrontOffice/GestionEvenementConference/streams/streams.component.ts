import { Component, OnInit } from '@angular/core';
import { Evenement } from 'src/app/Model/Evenement';
import {  EvenementServiceService } from 'src/app/Services/EvenementService/evenement-service.service';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {
  evenements: Evenement[] = [];

  constructor(private evenementService: EvenementServiceService) { }

  ngOnInit() {
    // Au chargement du composant, récupérez la liste des événements depuis le service
    this.evenementService.getAllEvents().subscribe((data) => {
      this.evenements = data;
      console.log(this.evenements);

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