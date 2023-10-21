import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentRoom } from 'src/app/Models/CommentRoom';
import { Room } from 'src/app/Models/Room';
import { PrestationServiceService } from 'src/app/Services/aziz/prestation-service.service';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent  implements OnInit {

constructor(private route: ActivatedRoute, private serviceService: PrestationServiceService , private http: HttpClient, private router: Router) {}

  roomId!: number;
  room!: Room;
  comment!:CommentRoom;
  commentList !: CommentRoom[];
  descriptionComment!:string;
  userconnecte!:string;
  friend!:string;

  ngOnInit(): void {
    // Extract the campagneId from the URL
    this.userconnecte="azizmk";
    this.friend="azizmk2";
    this.roomId = this.route.snapshot.params['id'];
    this.serviceService.getRoomById(this.roomId)
      .subscribe(
        (data) => {
          this.room = data;
          // Once you have the CampagneMarketing object, you can access its contenuList
          this.commentList = data.commentRoomList;
          console.log(data);
          console.log(this.room.commentRoomList);
        },
        (error) => {
          console.log(error);
        }
      );
    
  }



  addComment(): void {
    console.log('111111');
    if (!this.descriptionComment) {
      console.log('No comment provided');
      return;
    }

    // Populate the comment object
    this.comment = new CommentRoom();
    this.comment.descriptionComment = this.descriptionComment;

    this.serviceService.addComment(this.comment, this.userconnecte, this.roomId)
      .subscribe(
        () => {
          console.log('comment added successfully');
          console.log(this.comment.descriptionComment);
          this.descriptionComment = '';
          location.reload();
        },
        error => console.log(error)
      );
}

// Added to prevent the default form submission behavior
onFormSubmit(): false {
    return false;
}
  
}

