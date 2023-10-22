import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marche } from 'src/app/Models/Marche';
import { CompagneMarketingService } from 'src/app/Services/eya/compagne-marketing.service';

@Component({
  selector: 'app-details-besion',
  templateUrl: './details-besion.component.html',
  styleUrls: ['./details-besion.component.css']
})
export class DetailsBesionComponent {
  besoinId!: number;
  besoins: Marche[] = [];

  constructor(private route: ActivatedRoute, private besoinService: CompagneMarketingService , private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    this.besoinId = this.route.snapshot.params['id'];
    this.findBestMatch(this.besoinId);

  }


  findBestMatch(besoinId: number): void {
    this.besoinService.findBestMatch(besoinId).subscribe(data => {
      this.besoins = data;
      console.log(this.besoins);
    });
  }

}