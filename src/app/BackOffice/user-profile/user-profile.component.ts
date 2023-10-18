import { Component, OnInit } from '@angular/core';
import { User, UserService } from 'src/app/Services/User/user.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userName: string = '';
  user: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  // Retrieve the JWT token from local storage
  const jwtToken = localStorage.getItem('jwtToken');
  this.user = JSON.parse(localStorage.getItem('user') || '{}');
  console.log('JWT Token:', jwtToken);
  // Check if jwtToken is null or undefined before making the request
  if (jwtToken) {
    // Call the getUserDetails method to fetch the user's details using JWT token
    this.userService.getUserDetails(this.user.userName).subscribe((data) => {
      console.log('Complete User Data:', data);
      this.user = data;
      console.log('User Data:', this.user);
    });
  } else {
    console.log('JWT Token is missing in local storage');
    // Handle the case where jwtToken is not found in local storage
    // You can redirect to a login page or take appropriate action here
  }
}

}