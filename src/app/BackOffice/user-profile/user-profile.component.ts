import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UserService } from 'src/app/Services/User/user.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']

})
export class UserProfileComponent {

  user!: User; // Define the user object

  constructor(
    private route: ActivatedRoute,
    private userService: UserService // Inject your user service
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const username = params['userName']; // Get the username parameter from the URL
      console.log(username)
      
      if (username) {
        // Fetch user details based on the username
        this.userService.getUserByUsername(username).subscribe(user => {
          this.user = user;
          console.log(user.userName);
        });
      }
    });
  }
}