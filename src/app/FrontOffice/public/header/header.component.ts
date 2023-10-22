import { Component } from '@angular/core';
import { User } from 'src/app/Services/User/auth/model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  user!: User;
  selectedImage?: File;  // Storing the selected image
  previewImage: string = ''; // Image preview for the UI
 
  imageInvalid!: boolean;
  ngOnInit(): void {
    this.isLoggedIn = !!localStorage.getItem('jwtToken'); // Adjust this based on how you check for logged-in status
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.previewImage = this.user.image;
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
  logout() {
    // Implement your logout logic here, like clearing localStorage and navigating to login page
    localStorage.clear();
    window.location.reload(); // or navigate to login page
  }

}
