import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    // You should implement your role checking logic here
    // For example, you might have a service that provides the user's role
    //const userRole = 'admin'; // Replace with your actual user role check
    const userRole = localStorage.getItem('userRole');

    if (userRole === 'admin') {
      return true; // Allow access to the route
    } else {
      // Redirect to a different route or show an error message
      this.router.navigate(['/home']); // Redirect to the home route in this example
      return false; // Prevent access to the route
    }
  }
}