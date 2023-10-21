import { Component } from '@angular/core';
import { User, UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-homepagefront',
  templateUrl: './homepagefront.component.html',
  styleUrls: ['./homepagefront.component.css']
})
export class HomepagefrontComponent {

  users: User[] = [];
  user!: User;

 
  // Define a state variable to track sent requests
  sentRequests: { [key: string]: boolean } = {};
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userService.getUsers().subscribe(data => {
      this.users = data.filter(user => user.userName !== 'adminBizmatch' && user.userName !== this.user.userName );
      
      console.log(this.users);


    });
  }

  getImageFileName(path: string): string {
    const pathParts = path.split('/');
    const fileName = pathParts[pathParts.length - 1];
    console.log('Chemin de l\'image :', fileName);
    console.log('Image Path:', this.getImageFileName(this.user.image)); // Adjusted from this.contenu.image
    return fileName;
}
  addPartnershipRequest(desiredPartnerUserName: string) {
    const jwtToken = localStorage.getItem('jwtToken');
  this.user = JSON.parse(localStorage.getItem('user') || '{}');
  if (jwtToken) {
    this.userService.addPartnershipRequest(this.user.userName, desiredPartnerUserName).subscribe(
      () => {
        console.log('Partnership request added successfully', this.user.userName , desiredPartnerUserName);
        this.sentRequests[desiredPartnerUserName] = true;
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
