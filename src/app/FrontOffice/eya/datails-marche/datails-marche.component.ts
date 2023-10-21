import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marche } from 'src/app/Models/Marche';
import { CompagneMarketingService } from 'src/app/Services/eya/compagne-marketing.service';

@Component({
  selector: 'app-datails-marche',
  templateUrl: './datails-marche.component.html',
  styleUrls: ['./datails-marche.component.css']
})
export class DatailsMarcheComponent implements OnInit{
  constructor(private route: ActivatedRoute, private campagneService: CompagneMarketingService , private http: HttpClient, private router: Router) {}
  marcheId!: number;
  marcheF!: Marche;
  ngOnInit(): void {
    this.marcheId = this.route.snapshot.params['id'];
    this.getMarchById(this.marcheId);
  }

  getMarchById(marcheId: number): void {
    this.campagneService.getMarcheById(marcheId)
      .subscribe(
        (data) => {
          this.marcheF = data;
        },
        (error) => {
          console.log(error);
        }
      );




    }
  }