import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contenu } from 'src/app/Model/Contenu';
import { ContenuService } from 'src/app/Services/aicha/contenu.service';

@Component({
  selector: 'app-contenu-details',
  templateUrl: './contenu-details.component.html',
  styleUrls: ['./contenu-details.component.css']
})
export class ContenuDetailsComponent {
  contenuId!: number;
  contenu!: Contenu;
  contenuList !: Contenu[];
  constructor(
    private route: ActivatedRoute, 
    private contenuService: ContenuService , 
    private http: HttpClient, private router: Router) {
}

ngOnInit(): void {
  // Extract the campagneId from the URL
  this.route.params.subscribe((params) => {
    this.contenuId = +params['id']; // Assuming the route parameter is named 'id'
    // Fetch the CampagneMarketing by campagneId
    this.getContenuById(this.contenuId);
   
  });
}

getContenuById(contenuId: number): void {
  this.contenuService.getContenuById(contenuId)
    .subscribe(
      (data) => {
        this.contenu = data;
       
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
}
 
}
