import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Services/User/auth/model';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user!: User;
  userForm!: FormGroup;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.initForm();
  }

  initForm(): void {
    this.userForm = new FormGroup({
      'userName': new FormControl(this.user.userName, Validators.required),
      'userFirstName': new FormControl(this.user.userFirstName, Validators.required),
      'userLastName': new FormControl(this.user.userLastName, Validators.required),
      'userPassword': new FormControl(this.user.userPassword, Validators.required),
      'facebook': new FormControl(this.user.facebook, Validators.required),
      'linkedIn': new FormControl(this.user.linkedIn, Validators.required),
      'siteWeb': new FormControl(this.user.siteWeb, Validators.required),
      'aboutMe': new FormControl(this.user.aboutMe, Validators.required),
      'location': new FormControl(this.user.location, Validators.required),
      'Domaines': new FormControl(this.user.Domaines, Validators.required)
    });
  }


  onSubmit(): void {
    if (this.userForm.valid) {
      const updatedUser = { ...this.user, ...this.userForm.value };
      this.userService.updateUser(updatedUser.userName, updatedUser).subscribe(
        response => {
          console.log('User updated successfully:', response);
          localStorage.setItem('user', JSON.stringify(updatedUser));
        },
        error => {
          console.error('Error updating user:', error);
        }
      );
    }
  }
  
  updateUser(): void {
    // Collect the updated user details from the form
    // For example, if you have a form control for the user's first name:
    // this.user.userFirstName = this.firstNameFormControl.value;

    // After collecting all the updated details, call the service method
    this.userService.updateUser(this.user.userName, this.user).subscribe(
      updatedUser => {
        console.log('User updated successfully:', updatedUser);
        // You might want to update the local storage with the updated user details
        localStorage.setItem('user', JSON.stringify(updatedUser));
      },
      error => {
        console.error('Error updating user:', error);
        console.log(this.user.userPassword);
      }
    );
  }
}
