import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CampagneMarketing } from 'src/app/Model/CampagneMarketing';
import { Contenu } from 'src/app/Model/Contenu';
import { ObjectifCommercial } from 'src/app/Model/ObjectifCommercial';
import { CampagneMarketingService } from 'src/app/Services/aicha/campagne-marketing.service';
import { ContenuService } from 'src/app/Services/aicha/contenu.service';
import { ObjectifService } from 'src/app/Services/aicha/objectif.service';
import { Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contenu',
  templateUrl: './contenu.component.html',
  styleUrls: ['./contenu.component.css']
})
export class ContenuComponent {
  campagneId!: number;
  campagne!: CampagneMarketing;
  contenu!:Contenu;
  contenuList !: Contenu[];
  ObjectifsCommercials!: ObjectifCommercial[];
  objectif!:ObjectifCommercial;

  constructor(
    private oc: ObjectifService,
    private route: ActivatedRoute, 
    private cs: ContenuService,
    private campagneService: CampagneMarketingService , 
    private http: HttpClient, 
    private router: Router,
    private el: ElementRef, 
    private renderer: Renderer2) {
}
ngOnInit(): void {
  // Extract the campagneId from the URL
  this.route.params.subscribe((params) => {
    this.campagneId = +params['id']; // Assuming the route parameter is named 'id'
    // Fetch the CampagneMarketing by campagneId
    this.getCampagneById(this.campagneId);
  });
  this.objectif = new ObjectifCommercial();
  this.getAllObjectifsCommercial();

}

ngAfterViewInit() {
  let items = this.el.nativeElement.querySelectorAll('.my-game-item__letter');
  items.forEach((item: HTMLElement) => {
      this.renderer.setStyle(item, 'background', this.randomColor());
  });
}
randomColor(): string {
  // Generate random numbers between 0 and 60 for a deeper blue color
  let red = Math.floor(Math.random() * 61).toString(16);
  let green = Math.floor(Math.random() * 61).toString(16);
  
  // Let blue vary fully to get various shades
  let blue = Math.floor(Math.random() * 256).toString(16);
  
  if (red.length === 1) red = "0" + red;
  if (green.length === 1) green = "0" + green;
  if (blue.length === 1) blue = "0" + blue;

  return `#${red}${green}${blue}`;
}



public getAllObjectifsCommercial(): void {
  this.oc.GetAllObjectifCommercial().subscribe((data: ObjectifCommercial[]) => {
    this.ObjectifsCommercials = data;

    // Assign a random color to each ObjectifCommercial
    this.ObjectifsCommercials.forEach(objectif => {
      objectif.bgColor = this.randomColor();
    });

    console.log('ObjectifsCommercials:', this.ObjectifsCommercials);
  }, error => {
    console.error('Error fetching ObjectifsCommercials:', error);
  });
}


getCampagneById(campagneId: number): void {
  this.campagneService.getCampagneMarketingById(campagneId)
    .subscribe(
      (data) => {
        this.campagne = data;
        // Once you have the CampagneMarketing object, you can access its contenuList
        this.contenuList = data.contenus;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
}
delete(id: number): void {
  this.cs.deleteContenu(id).subscribe((data) => {
    console.log('contenu supprimé !');
    location.reload();
  })
}

getImageFileName(path: string): string {
  // Sépare le chemin en utilisant le séparateur de dossier '/'
  const pathParts = path.split('/');
  // Récupère le dernier élément du tableau, qui est le nom de fichier
  const fileName = pathParts[pathParts.length - 1];
  console.log('Chemin de l\'image :', fileName);
  console.log('Image Path:', this.getImageFileName(this.contenu.image));

  return fileName;
}




}
