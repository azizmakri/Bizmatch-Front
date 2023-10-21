import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Besoin } from 'src/app/Models/Besoin';
import { CompagneMarketingService } from 'src/app/Services/eya/compagne-marketing.service';

@Component({
  selector: 'app-add-besoin',
  templateUrl: './add-besoin.component.html',
  styleUrls: ['./add-besoin.component.css']
})
export class AddBesoinComponent {

  public besoin: Besoin=new Besoin();

  constructor(private campagneService: CompagneMarketingService,private router: Router) {} // Update 'yourServiceName' with the actual service name


  onSubmit() {
    this.campagneService.addBesoin(this.besoin).subscribe(response => {
      console.log('Service added successfully', response);
      // Do something after successful service addition, e.g., navigate to another page
    }, error => {
      console.error('Error adding service', error);
      // Handle errors, maybe show a user-friendly message
    });
    this.router.navigate(['/community']);
  }
}
