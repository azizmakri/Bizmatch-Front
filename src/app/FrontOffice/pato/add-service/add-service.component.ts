import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceFournisseur } from 'src/app/Models/ServiceFournisseur';
import { PrestationServiceService } from 'src/app/prestation-service.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {

  public service: ServiceFournisseur = new ServiceFournisseur();
  userName!: string;

  constructor(private serviceService: PrestationServiceService,private router: Router) {
    this.getUserNameFromLocalStorage();  // Invoke the method to set the userName

  } // Update 'yourServiceName' with the actual service name
  getUserNameFromLocalStorage(): void {
    const userJSON = localStorage.getItem('user');
    if (userJSON) {
      const userObj = JSON.parse(userJSON);
      this.userName = userObj.userName;
    }
  }

  onSubmit() {
    this.serviceService.addService(this.service, this.userName).subscribe(response => {
      console.log('Service added successfully', response);
      // Do something after successful service addition, e.g., navigate to another page
    }, error => {
      console.error('Error adding service', error);
      // Handle errors, maybe show a user-friendly message
    });
    this.router.navigate(['/listeservices']);
  }
}