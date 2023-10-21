import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CampagneMarketing } from 'src/app/Model/CampagneMarketing';
import { CampagneMarketingService } from 'src/app/Services/aicha/campagne-marketing.service';
import { CampagneEditComponent } from '../campagne-edit/campagne-edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-campagne',
  templateUrl: './campagne.component.html',
  styleUrls: ['./campagne.component.css']
})
export class CampagneComponent {

  CampagnesMarketing!: CampagneMarketing[];
  campagne!:CampagneMarketing;

  public contentHeader!: object;
  constructor(
    private cms:CampagneMarketingService, 
    private route:Router,
    private router: ActivatedRoute,
    public dialog: MatDialog ) {
     
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
        console.log(data);
      });
      this.updateAllStatuses();
    }

   
    delete(id: number): void  {
      this.cms.deleteCampagneMarketing(id).subscribe((data) => {
        console.log('Campagne supprimé !');
        
        //location.reload();
        this.getCampagneMarketing();
        this.updateAllStatuses();
        location.reload();
    })
  }
  
    public getCampagneMarketing(): void {
      this.cms.GetAllCampagneMarketing().subscribe((data )=> {
        this.cms.CAMPAGNESMARKETING = data 
        this.updateAllStatuses();
      });
      
    }
    save() : void {
      this.cms.updateStatusBasedOnDate(this.campagne);
      this.cms.addCampagneMarketing(this.campagne).subscribe ((res) => {
      console.log('Campagne ajoutée !');
      this.route.navigateByUrl('/campagne');})
          ;
          location.reload();
          this.updateAllStatuses();
    }

    updateAllStatuses() {
      this.CampagnesMarketing.forEach(campagne => {
          this.cms.updateStatusBasedOnDate(campagne);
      });
  }
   /*goToUpdateCampagneMarketing(id: number): void {
     this.route.navigate(['/update-Campagne', id]);
 }*/


}
