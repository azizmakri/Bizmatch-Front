
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Evenement } from 'src/app/Models/Evenement';
import { EvenementServiceService } from 'src/app/Services/EvenementService/evenement-service.service';


@Component({
  selector: 'app-modifier-event',
  templateUrl: './modifier-event.component.html',
  styleUrls: ['./modifier-event.component.css']
})
export class ModifierEventComponent {
  evenementForm!: FormGroup;
  userName!: string;  
  eventId!: number;
  previewImage!: string;
  evenement!: Evenement;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private evenementService: EvenementServiceService
  ) {
    this.getUserNameFromLocalStorage();  // Invoke the method to set the userName

  }
  getUserNameFromLocalStorage(): void {
   const userJSON = localStorage.getItem('user');
   if (userJSON) {
     const userObj = JSON.parse(userJSON);
     this.userName = userObj.userName;
   }
 }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.evenementService.getEvenementById(id).subscribe((evenement) => {
      this.evenement = evenement;
      this.eventId = evenement.id;
  
      this.evenementForm = this.formBuilder.group({
        nom: [this.evenement.nom, Validators.required],
        description: [this.evenement.description],
        dateDebut: [this.evenement.dateDebut, Validators.required],
        dateFin: [this.evenement.dateFin, Validators.required],
        image: [this.evenement.imagePath], // Champ image
        lieu: [this.evenement.lieu], // Champ lieu
        nombreParticipants: [this.evenement.nombreParticipants] // Champ nombreParticipants
      });
    });
  }
  

  updateEvent(): void {
    const formData = this.evenementForm.value;
    this.evenementService
      .updateEvenement(this.eventId, formData, this.userName)
      .subscribe(
        () => {
          console.log('Evenement updated successfully');
          this.router.navigate(['/Evenements']);
        },
        (error) => console.log(error)
      );
  }

  getImageFileName(path: string): string {
    const pathParts = path.split('/');
    const fileName = pathParts[pathParts.length - 1];
    console.log('Chemin de l\'image :', fileName);
    return fileName;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.previewImage = reader.result as string;
        this.evenementForm.patchValue({ image: this.previewImage });
      };
    }
  }
}
