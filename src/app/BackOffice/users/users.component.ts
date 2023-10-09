import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/User/auth/auth-service.service';
import { User, UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService,private authService : AuthServiceService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  addRoleToSelectedUser(roleName: string, userName: string): void {
    this.authService.addRoleToUser(roleName, userName).subscribe(response => {
      console.log('Role added successfully:', response);
      window.alert('Role added successfully');
      window.location.reload();
      
      // You might want to refresh the users list or navigate to another page here
    }, error => {
      console.error('Error adding role:', error);
      window.alert('Error adding role');
    });
  }
}