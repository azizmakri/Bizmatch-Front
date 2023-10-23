import { Component } from '@angular/core';
import { Reunion } from 'src/app/Models/Reunion';
import { ReunionService } from 'src/app/Services/ReunionService/reunion-service.service';

@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.component.html',
  styleUrls: ['./reunion.component.css']
})
export class AjouterReunionComponent {
  reunion: Reunion = new Reunion();
  userName!: string;
  urlReunion: string = ''; // Variable pour stocker l'URL généré automatiquement
  successMessage: string | null = null;
  sujetError: string | null = null;
  dateReunionError: string | null = null;
  lieuError: string | null = null;
  typeReunionError: string | null = null;
  urlReunionError: string | null = null;
  
  constructor(private reunionService: ReunionService) {
    this.getUserNameFromLocalStorage();  // Invoke the method to set the userName
  }
  getUserNameFromLocalStorage(): void {
    const userJSON = localStorage.getItem('user');
    if (userJSON) {
      const userObj = JSON.parse(userJSON);
      this.userName = userObj.userName;
    }
  }

  ajouterReunion() {
    // Récupérez les valeurs du formulaire
    const sujet = this.reunion.sujet;
    const dateReunion = this.reunion.dateReunion;
    const lieu = this.reunion.lieu;
    const typeReunion = this.reunion.typeReunion;
    const urlReunion = this.urlReunion; // Utilisez l'URL généré

    // Créez un objet Reunion avec les valeurs du formulaire
    const nouvelleReunion: Reunion = {
      id: 0, // L'ID sera généré côté serveur
      sujet: sujet,
      dateReunion: dateReunion,
      lieu: lieu,
      typeReunion: typeReunion,
      urlReunion: urlReunion
    };

    this.reunionService.ajouterReunion(this.userName, nouvelleReunion).subscribe(
      (result) => {
        // Traitez la réponse du serveur ici (par exemple, affichez un message de succès)
        console.log('Réunion ajoutée avec succès', result);
        this.successMessage = 'Réunion ajoutée avec succès'; // Définissez le message de succès immédiatement
      },
      (error) => {
        // Gérez les erreurs ici
        console.error('Erreur lors de l\'ajout de la réunion', error);
      }
    );
    
    
  }

  
  
  
  
  
}