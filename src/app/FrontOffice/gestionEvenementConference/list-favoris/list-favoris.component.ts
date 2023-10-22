import { Component } from '@angular/core';
import { Evenement } from 'src/app/Models/Evenement';
import { EvenementServiceService } from 'src/app/Services/EvenementService/evenement-service.service';

@Component({
  selector: 'app-list-favoris',
  templateUrl: './list-favoris.component.html',
  styleUrls: ['./list-favoris.component.css']
})
export class ListFavorisComponent {
  evenements: Evenement[] = [];
  evenement !: Evenement;
  userName!: string;  
  
  constructor(private evenementService: EvenementServiceService) {  
this.getUserNameFromLocalStorage();  
}

getUserNameFromLocalStorage(): void {
 const userJSON = localStorage.getItem('user');
 if (userJSON) {
   const userObj = JSON.parse(userJSON);
   this.userName = userObj.userName;
 }
}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {

    this.evenementService.getProductsFavoris(this.userName).subscribe((data) => {
      this.evenements = data;
    });
  }

  getImageFileName(path: string): string {
    // Séparez le chemin en utilisant le séparateur de dossier '/'
    const pathParts = path.split('/');
    // Récupérez le dernier élément du tableau, qui est le nom de fichier
    const fileName = pathParts[pathParts.length - 1];
    console.log('Chemin de l\'image :', fileName);
    return fileName;
  }

  participateInEvent(eventId: number) {
    // Appelez le service pour participer à l'événement en utilisant eventId et userName
    this.evenementService.participateInEvent(eventId, this.userName).subscribe(
      (response) => {
        // Traitez la réponse du service ici
        console.log('Réponse de participation :', response);
  
        // Vérifiez si la réponse est une chaîne de texte indiquant le succès
        if (typeof response === 'string' && response.includes('Participation registered successfully')) {
          // La participation a réussi, affichez un message de succès ou effectuez d'autres actions
          console.log('Participation réussie');
        } else {
          // La réponse n'indique pas une participation réussie, affichez ou traitez le message d'erreur
          console.error('Erreur de participation :', response);
        }
      },
      (error) => {
        // Gérez les erreurs ici (par exemple, affichez un message d'erreur)
        console.error('Erreur de participation :', error);
      }
    );
  }

  ajouterProduitFavori(event: Evenement) {
    this.evenementService.addFavori(this.userName, event.id).subscribe(
      () => {
        // Mettre à jour la propriété estDansFavoris de l'événement
        event.estDansFavoris = !event.estDansFavoris;
      },
      (error) => console.log(error)
    );
  }
}
