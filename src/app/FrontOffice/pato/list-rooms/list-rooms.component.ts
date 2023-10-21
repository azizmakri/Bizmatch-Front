import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/Models/Room';
import { PrestationServiceService } from 'src/app/prestation-service.service';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.css']
})
export class ListRoomsComponent implements OnInit {
  rooms: Room[] = [];
  userName!: string;

  constructor(private serviceService: PrestationServiceService) { 
    this.getUserNameFromLocalStorage();  // Invoke the method to set the userName

  }
  getUserNameFromLocalStorage(): void {
    const userJSON = localStorage.getItem('user');
    if (userJSON) {
      const userObj = JSON.parse(userJSON);
      this.userName = userObj.userName;
    }
  }

  ngOnInit(): void {
    this.getRoomsByUser(this.userName);
  }


  getRoomsByUser(userId: string): void {
    this.serviceService.getRoomsByUser(userId)
      .subscribe(
        (data) => {
          this.rooms = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }

}