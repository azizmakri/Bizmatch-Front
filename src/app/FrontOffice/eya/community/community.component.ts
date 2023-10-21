import { Component } from '@angular/core';
import { Besoin } from 'src/app/Models/Besoin';
import { Marche } from 'src/app/Models/Marche';
import { CompagneMarketingService } from 'src/app/Services/eya/compagne-marketing.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent {
  marches: Marche[] = [];

  besoins: Besoin[] = [];

  constructor(private compagneMarketingService: CompagneMarketingService) { }


  ngOnInit(): void {
    this.compagneMarketingService.getMarches().subscribe(data => {
      this.marches = data;
      console.log(this.marches);
    });

    this.compagneMarketingService.getBesoins().subscribe(data => {
      this.besoins = data;
      console.log(this.marches);
    });
    
  }


}
