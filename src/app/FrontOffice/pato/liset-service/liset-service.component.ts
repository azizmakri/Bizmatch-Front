import { Component, OnInit } from '@angular/core';
import { ServiceFournisseur } from 'src/app/Models/ServiceFournisseur';
import { AuthServiceService } from 'src/app/Services/User/auth/auth-service.service';
import { PrestationServiceService } from 'src/app/prestation-service.service';

@Component({
  selector: 'app-liset-service',
  templateUrl: './liset-service.component.html',
  styleUrls: ['./liset-service.component.css']
})
export class LisetServiceComponent implements OnInit {
  services: ServiceFournisseur[] = [];
  

  constructor(private serviceService: PrestationServiceService) { }

  ngOnInit(): void {
    this.serviceService.getServices().subscribe(data => {
      this.services = data;
      console.log(this.services);
    });
  }

}
