import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CampagneMarketing } from 'src/app/Model/CampagneMarketing';
import { CampagneMarketingService } from 'src/app/Services/campagne-marketing.service';


@Component({
  selector: 'app-campagne-edit',
  templateUrl: './campagne-edit.component.html',
  styleUrls: ['./campagne-edit.component.css']
})


export class CampagneEditComponent {
  constructor(private campagneMarketingService: CampagneMarketingService, private route: ActivatedRoute) {}
  campagneMarketing: CampagneMarketing = new CampagneMarketing();
  ngOnInit() {
    this.route.params.subscribe(params => {
        const campaignId = +params['id'];  // The '+' converts the string to a number
        this.loadCampaignDetails(campaignId);
    });
}
loadCampaignDetails(campaignId: number) {
  this.campagneMarketingService.getCampagneMarketing(campaignId)
      .subscribe(data => {
          this.campagneMarketing = data;
      }, error => {
          console.error('Error fetching campaign details:', error);
          // Handle the error accordingly.
      });
}
openEditModal(campaignId: number) {
  // Maybe some code to open the modal first
  this.loadCampaignDetails(campaignId);
}


  editCampaign() {
    this.campagneMarketingService.updateCampagneMarketing(this.campagneMarketing.id, this.campagneMarketing)
        .subscribe(response => {
            console.log('Campaign updated:', response);
            // Handle successful response
        }, error => {
            console.error('Error updating campaign:', error);
            // Handle error
        });
}

}
