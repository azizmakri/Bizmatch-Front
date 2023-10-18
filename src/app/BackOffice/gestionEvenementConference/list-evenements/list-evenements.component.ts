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
  ngOnInit() {
    // Au chargement du composant, récupérez la liste des événements depuis le service
    this.evenementService.getAllEvents().subscribe((data) => {
      this.evenements = data;
      console.log(this.evenements);

    });
  }
}
