import { Component } from '@angular/core';
import { CrmService } from 'src/app/Services/crm.service';

@Component({
  selector: 'app-formulaire-crm',
  templateUrl: './formulaire-crm.component.html',
  styleUrls: ['./formulaire-crm.component.css']
})
export class FormulaireCrmComponent {
  formulaire: any = {
    titre: '',
    description: '',
    service: ''
  };
  userName!: string;  // Modified this line to use the value from local storage

  constructor(private formulaireService: CrmService) { 
    this.getUserNameFromLocalStorage();  // Invoke the method to set the userName

  }
  getUserNameFromLocalStorage(): void {
    const userJSON = localStorage.getItem('user');
    if (userJSON) {
      const userObj = JSON.parse(userJSON);
      this.userName = userObj.userName;
    }
  }

   onSubmit(): void {
    this.formulaireService.createFormulaire(this.formulaire, this.userName).subscribe(
      response => {
        console.log(response);
        alert('Formulaire created successfully!');
      },
      error => {
        console.error('Error!', error);
      }
    );
  }


  clearForm(): void {
    this.formulaire = {
      titre: '',
      description: '',
      service: ''
    };
  }
  
}