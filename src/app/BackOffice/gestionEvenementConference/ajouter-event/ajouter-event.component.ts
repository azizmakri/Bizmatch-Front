import { Component } from '@angular/core';
import { Evenement } from 'src/app/Model/Evenement';
import { EvenementServiceService } from 'src/app/Services/EvenementService/evenement-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajouter-event',
  templateUrl: './ajouter-event.component.html',
  styleUrls: ['./ajouter-event.component.css']
})
export class AjouterEventComponent {
  evenement: Evenement = new Evenement();
  userName = 'adminBizmatch';
  selectedFile: File | null = null;

  constructor(private evenementService: EvenementServiceService) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const {
        nom,
        description,
        dateDebut,
        dateFin,
        lieu,
        nombreParticipants,
      } = form.value;

      if (dateDebut && dateFin && this.selectedFile) {
        this.evenementService
          .addEvenement(
            nom,
            description,
            dateDebut,
            dateFin,
            this.selectedFile,
            lieu,
            nombreParticipants,
            this.userName
          )
          .subscribe(
            (evenement) => {
              console.log('Événement ajouté avec succès :', evenement);
              form.reset();
            },
            (error) => {
              console.error("Erreur lors de l'ajout de l'événement :", error);
            }
          );
      }
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
