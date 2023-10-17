import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CampagneMarketing } from 'src/app/Model/CampagneMarketing';
import { CampagneMarketingService } from 'src/app/Services/campagne-marketing.service';

@Component({
  selector: 'app-campagne',
  templateUrl: './campagne.component.html',
  styleUrls: ['./campagne.component.css']
})
export class CampagneComponent {

  CampagnesMarketing!: CampagneMarketing[];
  campagne!:CampagneMarketing;
  public contentHeader!: object;
  constructor(private cms:CampagneMarketingService, private route:Router) {
    
   }
  
    ngOnInit(): void {
      this.getCampagneMarketing(); 
      this.contentHeader = {
        headerTitle: '  Campagnes',
        actionButton: true,
        breadcrumb: {
          type: '',
          links: [
            {
              name: 'List of Campagnes Marketing',
              isLink: false
            }
          ]
        }
      };
      this.campagne = new CampagneMarketing();
     
      this.cms.GetAllCampagneMarketing().subscribe((data: CampagneMarketing[]) => {
        this.CampagnesMarketing = data;
      });
    }
    delete(id: number): void  {
      this.cms.deleteCampagneMarketing(id).subscribe((data) => {
        console.log('Campagne supprimé !');
        
        //location.reload();
        this.getCampagneMarketing();
        location.reload();
    })
  }
    public getCampagneMarketing(): void {
      this.cms.GetAllCampagneMarketing().subscribe((data )=> {
        this.cms.CAMPAGNESMARKETING = data 
    
      });
      
    }
    save() : void {
      this.cms.addCampagneMarketing(this.campagne).subscribe ((res) => {
      console.log('Campagne ajoutée !');
      this.route.navigateByUrl('/campagne');})
          ;
          location.reload();
    }
    goToUpdateCampagneMarketing(id: number): void {
      const url = `/update-Campagne/${id}`;
    console.log(url);
    this.route.navigate([url]);
    }
}
