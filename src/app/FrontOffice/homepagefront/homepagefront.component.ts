import { Component } from '@angular/core';
import { User, UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-homepagefront',
  templateUrl: './homepagefront.component.html',
  styleUrls: ['./homepagefront.component.css']
})
export class HomepagefrontComponent {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data.filter(user => user.userName !== 'adminBizmatch');
      console.log(this.users);
    });
  }

}
