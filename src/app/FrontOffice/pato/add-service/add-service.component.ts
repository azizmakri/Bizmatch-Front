import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceFournisseur } from 'src/app/Models/ServiceFournisseur';
import { PrestationServiceService } from 'src/app/Services/aziz/prestation-service.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {

  public service: ServiceFournisseur = new ServiceFournisseur();
  public username: string = 'amir1999'; // You need to set this, perhaps through a login system or some other method

  constructor(private serviceService: PrestationServiceService,private router: Router) {} // Update 'yourServiceName' with the actual service name

  onSubmit() {
    this.serviceService.addService(this.service, this.username).subscribe(response => {
      console.log('Service added successfully', response);
      // Do something after successful service addition, e.g., navigate to another page
    }, error => {
      console.error('Error adding service', error);
      // Handle errors, maybe show a user-friendly message
    });
    this.router.navigate(['/listeservices']);
  }
}
