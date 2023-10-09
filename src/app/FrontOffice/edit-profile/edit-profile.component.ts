import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Services/User/auth/model';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user!: User;
  showPasswordConfirmation: boolean = false;


  constructor(private userService: UserService) { }

  displayPasswordConfirmation(): void {
    this.showPasswordConfirmation = true;
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
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
}