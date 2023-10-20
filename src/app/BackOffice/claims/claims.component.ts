// src/app/claims/claims.component.ts

import { Component, OnInit } from '@angular/core';
import { CrmService } from 'src/app/Services/crm.service';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent implements OnInit {
  formulaires: any[] = [];

  constructor(private crmService: CrmService) { }

  ngOnInit(): void {
    this.crmService.getAllFormulaires().subscribe(
      data => {
        this.formulaires = data;
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  }
}
