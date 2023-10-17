import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/User/auth/auth-service.service';

@Component({
  selector: 'app-checkmail',
  templateUrl: './checkmail.component.html',
  styleUrls: ['./checkmail.component.css']
})
export class CheckmailComponent {
  constructor(private authservise: AuthServiceService, private router: Router) { }
  userEmail: string = '';

  onCheckEmail(email: string): void {
    this.authservise.checkEmail(email).subscribe(
      response => {
        console.log(response); // handle the response here
        window.alert('Check your email! You should receive a code to reset your password.');
        this.router.navigate(['/resetpassword']).then(() => {
          window.location.reload();
        });
      },
      error => {
        console.error(error); // handle the error here
        window.alert('Error occurred while sending reset code. Please try again.');
      }
    );
  }
  

}
