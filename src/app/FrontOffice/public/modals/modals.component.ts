import { Component } from '@angular/core';
import { CrmService } from 'src/app/Services/crm.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent {
  formulaire: any = {
    titre: '',
    description: '',
    service: ''
  };

  constructor(private formulaireService: CrmService) { }


 
  
}
