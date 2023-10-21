import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CampagneMarketing } from 'src/app/Model/CampagneMarketing';
import { Contenu } from 'src/app/Model/Contenu';
import { ObjectifCommercial } from 'src/app/Model/ObjectifCommercial';
import { CampagneMarketingService } from 'src/app/Services/aicha/campagne-marketing.service';
import { ContenuService } from 'src/app/Services/aicha/contenu.service';
import { ObjectifService } from 'src/app/Services/aicha/objectif.service';
import { Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contenu-add',
  templateUrl: './contenu-add.component.html',
  styleUrls: ['./contenu-add.component.css']
})
export class ContenuAddComponent {
  Contenus!: Contenu[];
  contenu !: Contenu;
  
  previewImage!: string;
   selectedImage!: File ; 
  imageInvalid!: boolean;
  campagnesMarketing!: CampagneMarketing[];

  constructor(
    private cs: ContenuService,
    private cms:CampagneMarketingService,
    private route: Router,
      ) {
   
  }

 
  ngOnInit(): void {
    this.getContenu();
   
    this.contenu = new Contenu();
    this.cms.GetAllCampagneMarketing().subscribe((data: CampagneMarketing[]) => {
      this.campagnesMarketing = data;
    });
    
    this.cs.GetAllContenu().subscribe((data: Contenu[]) => {
      this.Contenus = data;
    });
  }

 

  public getContenu(): void {
    this.cs.GetAllContenu().subscribe((data) => {
      this.cs.CONTENUS = data
    });
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

  save() {
    if (!this.selectedImage) {
      this.imageInvalid = true;
      return; // Do not proceed if there's no selected image.
  }
    this.contenu.dateCreation = new Date();
    this.cs.addContenu(this.contenu, this.selectedImage).subscribe(
        response => {
          console.log('contenu ajouté !');
        },
        error => {
            console.error('Error adding content:', error);
        }
    );
}


  onFileSelected(event:Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (file) {
      this.imageInvalid = false;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.previewImage = reader.result as string;
        this.contenu.image = this.previewImage;
        this.selectedImage = file; 
      };
    }
  }
}

