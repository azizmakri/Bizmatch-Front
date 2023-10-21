import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Services/User/auth/model';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  selectedImage?: File;  // Storing the selected image
  previewImage: string = ''; // Image preview for the UI
 
  imageInvalid!: boolean;
  user!: User;
  showPasswordConfirmation: boolean = false;


  constructor(private userService: UserService) { }

  displayPasswordConfirmation(): void {
    this.showPasswordConfirmation = true;
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    if (this.user && this.user.image) {
      this.previewImage = 'assets/images/' + this.getImageFileName(this.user.image);
  }
  }

  updateUser(): void {
    // Call the service method to update the user
    this.userService.updateUser(this.user.userName, this.user).subscribe(
      updatedUser => {
        console.log('User updated successfully:', updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
        window.location.reload();

      },
      error => {
        console.error('Error updating user:', error);
        window.alert('update error. Please try again.');

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

updateUserWithImage(): void {
    if (this.selectedImage) {
        this.userService.updateUserImage(this.user.userName, this.user, this.selectedImage).subscribe(
            updatedUser => {
                console.log('User updated successfully with image:', updatedUser);
                localStorage.setItem('user', JSON.stringify(updatedUser));
                window.location.reload();
            },
            error => {
                console.error('Error updating user:', error);
                window.alert('update error. Please try again.');
            }
        );
    } else {
        this.updateUser();  // If no image is selected, proceed with regular update
    }
}
}