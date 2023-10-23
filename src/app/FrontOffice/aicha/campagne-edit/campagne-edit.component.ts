import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CampagneMarketingService } from 'src/app/Services/aicha/campagne-marketing.service';
import { ChartDataset, ChartOptions } from 'chart.js';

type Color = any;
type Label = string;


@Component({
  selector: 'app-campagne-edit',
  templateUrl: './campagne-edit.component.html',
  styleUrls: ['./campagne-edit.component.css']
})


export class CampagneEditComponent {
  
 
  constructor(private campagneMarketingService: CampagneMarketingService, private route: ActivatedRoute) {}
 
  public roiChartData: ChartDataset[] = [{ data: [], label: 'ROI' }];
  public roiChartLabels: Label[] = ['ROI'];
  public roiChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,  // Moved up one level from the ticks
      }
    }
  };
  
  public roiChartColors: Color[] = [{
    borderColor: 'black',
    backgroundColor: 'rgba(255,0,0,0.3)',
  }];

  // ... other component properties and methods

  fetchRoiForCampaign(campagneId: number) {
    this.campagneMarketingService.getROIForCampaign(campagneId).subscribe(roi => {
      this.roiChartData[0].data = [roi];
    });
  }
}