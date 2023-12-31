import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceFournisseur } from 'src/app/Models/ServiceFournisseur';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
import { Room } from 'src/app/Models/Room';
import { PrestationServiceService } from 'src/app/prestation-service.service';

@Component({
  selector: 'app-detail-service',
  templateUrl: './detail-service.component.html',
  styleUrls: ['./detail-service.component.css']
})
export class DetailServiceComponent implements OnInit {
  room:Room=new Room();
  stripePromise = loadStripe(environment.stripe);
  userName!: string;
  CreatedRoomId!: number;
  userConnecte!: string;  // Modified this line to use the value from local storage
  constructor(private route: ActivatedRoute, private serviceService: PrestationServiceService , private http: HttpClient, private router: Router) {
    this.getUserNameFromLocalStorage();  // Invoke the method to set the userName

  }
  serviceId!: number;
  serviceF!: ServiceFournisseur;

  ngOnInit(): void {
    this.serviceId = this.route.snapshot.params['id'];
    this.getServiceById(this.serviceId);
    this.userConnecte = "azizmk2";
    console.log('userConnecte:', this.userName);
  }

  getServiceById(serviceId: number): void {
    this.serviceService.getServiceById(serviceId)
      .subscribe(
        (data) => {
          this.serviceF = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  async pay(): Promise<void> {
    if (!this.userName) {
      this.router.navigate(['/login']).then(() => {
        window.location.reload();
      });
      return;
    }


    const payment = {
      name: this.serviceF.nomService,
      currency: 'usd',
      amount: this.serviceF.prixService,  // Convert to cents for Stripe
      quantity: '1',
      cancelUrl: 'http://localhost:4200/cancel',
      successUrl: 'http://localhost:4200/success',
    };

    const stripe = await this.stripePromise;
    if (!stripe) {
      console.error('Stripe failed to initialize');
      return;
    }

    this.http.post(`${environment.apiUrl}/payment?userName=${this.userName}&idServiceFournisseur=${this.serviceF.idService}`, payment)
      .subscribe((data: any) => {
        stripe.redirectToCheckout({
          sessionId: data.id,
        }).then((result) => {
          if (result.error) {
            console.error(result.error.message);
          }
        });
      });
  }

  getUserNameFromLocalStorage(): void {
    const userJSON = localStorage.getItem('user');
    if (userJSON) {
      const userObj = JSON.parse(userJSON);
      this.userName = userObj.userName;
    }
  }




  addRoom(): void {
    this.serviceService.addRoom(this.room, this.userName, this.serviceF.fournisseur.userName, this.serviceId)
      .subscribe(
        (createdRoom: any) => {
          console.log('Room added successfully with ID:', createdRoom.idRoom); 
          this.CreatedRoomId = createdRoom.idRoom;

          // Redirect to /listeservices route after successfully adding a room
          this.router.navigate(['/comments', this.CreatedRoomId]);
        },
        error => console.log(error)
      );
  }
}