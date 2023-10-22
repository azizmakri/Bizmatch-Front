import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjectifCommercial } from 'src/app/Model/ObjectifCommercial';
import { User } from 'src/app/Services/User/auth/model';
import { ObjectifService } from 'src/app/Services/aicha/objectif.service';

@Component({
  selector: 'app-objectifdetails',
  templateUrl: './objectifdetails.component.html',
  styleUrls: ['./objectifdetails.component.css']
})
export class ObjectifdetailsComponent {
  user!: User;
  selectedImage?: File;  // Storing the selected image
  previewImage: string = ''; // Image preview for the UI
  imageInvalid!: boolean;
  objectifId!: number;
  objectif!: ObjectifCommercial| undefined;
  objectifList : ObjectifCommercial[] = [];

  constructor(
    private route: ActivatedRoute, 
    private objectifService: ObjectifService , 
    private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.previewImage = this.user.image;

      // Extract the contenuId from the URL
  this.objectifId = this.route.snapshot.params['id'];
  this.getObjectif(this.objectifId);

  }

  getObjectif(contenuId: number): void {
    this.objectifService.getObjectifCommercial(contenuId).subscribe(
      (data) => {
        this.objectif = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.previewImage = reader.result as string;
        this.user.image = this.previewImage;
      };
      this.selectedImage = file; // Mettre à jour selectedFile ici
    }
  }

getImageFileName(path: string): string {
    const pathParts = path.split('/');
    const fileName = pathParts[pathParts.length - 1];
    console.log('Chemin de l\'image :', fileName);
    console.log('Image Path:', this.getImageFileName(this.user.image)); // Adjusted from this.contenu.image
    return fileName;
}

}
