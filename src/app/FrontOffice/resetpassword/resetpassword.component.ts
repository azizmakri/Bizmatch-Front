import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/User/auth/auth-service.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {
  constructor(private authservice: AuthServiceService,private router: Router) { }

userEmail: string = '';
userCode: string = '';
newPassword: string = '';


onResetPassword(): void {
  this.authservice.resetPassword(this.userEmail, this.userCode, this.newPassword).subscribe(
    response => {
      console.log(response); // Handle the response here
      if (response.result === 1) {
        // Password reset successful
        console.log('Password reset successful');
        window.alert('Password reset successful! You can now log in with your new password.');
        this.router.navigate(['/login']).then(() => {
          window.location.reload();
        });
      } else {
        // Password reset failed
        console.log('Password reset failed');
        window.alert('Password reset failed. Please try again.');
      }
    },
    error => {
      console.error('There was an error during the request', error);
      window.alert('Error occurred while resetting password. Please try again.');
    }
  );
}




}