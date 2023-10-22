import { Component } from '@angular/core';
import { User } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  user!: User;

  ngOnInit(): void {
    this.isLoggedIn = !!localStorage.getItem('jwtToken'); // Adjust this based on how you check for logged-in status
    this.user = JSON.parse(localStorage.getItem('user') || '{}');

  }

  logout() {
    // Implement your logout logic here, like clearing localStorage and navigating to login page
    localStorage.clear();
    window.location.reload(); // or navigate to login page
  }

}
