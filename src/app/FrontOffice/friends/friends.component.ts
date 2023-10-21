import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/Services/User/user.service';
import { User } from 'src/app/Services/User/user.service';
import { ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {

  partners: User[] = [];
  partnerRequests: User[] = [];
  userName: string = '';
  user: any;
  constructor(private userService: UserService , private changeDetectorRef: ChangeDetectorRef) { }
  isHovered = false;

  ngOnInit(): void {
    this.getPartners();
    this.getPartnerRequests();
  }


  onButtonHover(hovered: boolean) {
    this.isHovered = hovered;
  }

  getPartners() {
    // Retrieve the JWT token from local storage
const jwtToken = localStorage.getItem('jwtToken');
this.user = JSON.parse(localStorage.getItem('user') || '{}');
console.log('JWT Token:', jwtToken);
// Check if jwtToken is null or undefined before making the request
if (jwtToken) {
    this.userService.getPartners(this.user.userName).subscribe(
      (response) => {
        this.partners = response.filter(partner => partner.userName !== this.user.userName);      },
      (error) => {
        console.error('Error:', error);
      }
    );} else {
      console.log('JWT Token is missing in local storage');
      // Handle the case where jwtToken is not found in local storage
      // You can redirect to a login page or take appropriate action here
    }
  }


getPartnerRequests() {
    // Retrieve the JWT token from local storage
const jwtToken = localStorage.getItem('jwtToken');
this.user = JSON.parse(localStorage.getItem('user') || '{}');
console.log('JWT Token:', jwtToken);
// Check if jwtToken is null or undefined before making the request
if (jwtToken) {
    this.userService.getPartnerRequests(this.user.userName).subscribe(
      (response) => {
        this.partnerRequests = response.filter(partner => partner.userName !== this.user.userName);
      },
      (error) => {
        console.error('Error:', error);
      }
    );} else {
      console.log('JWT Token is missing in local storage');
      // Handle the case where jwtToken is not found in local storage
      // You can redirect to a login page or take appropriate action here
    }
  }

  
// Remove a partner request
removePartnerRequest(partnerRequestToRemoveUserName: string) {
  const jwtToken = localStorage.getItem('jwtToken');
this.user = JSON.parse(localStorage.getItem('user') || '{}');
// Check if jwtToken is null or undefined before making the request
if (jwtToken) {
  this.userService.removePartnerRequest(this.user.userName, partnerRequestToRemoveUserName).subscribe(
    () => {
      this.getPartnerRequests();
      // Handle success, e.g., update the UI
    },
    (error) => {
      console.error('Error:', error);
      // Handle error
    }
  );} else {
    console.log('JWT Token is missing in local storage');
    // Handle the case where jwtToken is not found in local storage
    // You can redirect to a login page or take appropriate action here
  }
}


// Remove a partner 
removePartner(partnerToRemoveUserName: string) {
  const jwtToken = localStorage.getItem('jwtToken');
this.user = JSON.parse(localStorage.getItem('user') || '{}');

if (jwtToken) {
  this.userService.removePartner(this.user.userName, partnerToRemoveUserName).subscribe(
    () => {
      this.getPartners();

    },
    (error) => {
      console.error('Error:', error);
      // Handle error
    }
  );
} else {
  // Handle the case where jwtToken is not found in local storage
}
}


// Accept a partnership
acceptPartnership(partnerRequestToAcceptUserName: string) {
  const jwtToken = localStorage.getItem('jwtToken');
this.user = JSON.parse(localStorage.getItem('user') || '{}');
if (jwtToken) {
  this.userService.acceptPartnership(this.user.userName, partnerRequestToAcceptUserName).subscribe(
    () => {
      this.getPartners();
      this.getPartnerRequests();
    },
    (error) => {
      console.error('Error:', error);
      // Handle error
    }
  );} else {
    console.log('JWT Token is missing in local storage');
    // Handle the case where jwtToken is not found in local storage
    // You can redirect to a login page or take appropriate action here
  }
}



}
