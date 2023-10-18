import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceFournisseur } from 'src/app/Models/ServiceFournisseur';
import { PrestationServiceService } from 'src/app/prestation-service.service';

@Component({
  selector: 'app-detail-service',
  templateUrl: './detail-service.component.html',
  styleUrls: ['./detail-service.component.css']
})
export class DetailServiceComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private serviceService: PrestationServiceService) { }
  serviceId!: number;
  serviceF!: ServiceFournisseur;

  ngOnInit(): void {
    this.serviceId = this.route.snapshot.params['id'];
    this.getServiceById(this.serviceId);
  }



  getServiceById(serviceId: number): void {
    this.serviceService.getServiceById(serviceId)
      .subscribe(
        (data) => {
          this.serviceF = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
