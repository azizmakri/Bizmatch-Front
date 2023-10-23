import { Component } from '@angular/core';
import { User } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent {
  user!: User;
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
     
    }

  logout() {
    // Implement your logout logic here, like clearing localStorage and navigating to login page
    localStorage.clear();
    window.location.reload(); // or navigate to login page
  }

}