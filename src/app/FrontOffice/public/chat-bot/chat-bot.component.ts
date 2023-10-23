import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { User } from 'src/app/Services/User/auth/model';
import { ChatBotService } from 'src/app/Services/chat-bot.service';

declare var $: any;

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent {
  user!: User;
  selectedImage?: File;  // Storing the selected image
  previewImage: string = ''; // Image preview for the UI
 
  imageInvalid!: boolean;
  public messages: Array<{ text: string, sender: string, timestamp: Date }> = [];

  public message!: string; // the user's input

  constructor(private elRef: ElementRef,
    private chatbotService: ChatBotService) { }
    ngOnInit(): void {
      this.user = JSON.parse(localStorage.getItem('user') || '{}');
      this.previewImage = this.user.image;
    }
    ngAfterViewInit() {
      $(this.elRef.nativeElement).find('.chat-button').on('click', () => {
        $('.chat-button').css({ "display": "none" });
        $('.chat-box').css({ "visibility": "visible" });
      });
  
      $(this.elRef.nativeElement).find('.chat-box .chat-box-header p').on('click', () => {
        $('.chat-button').css({ "display": "block" });
        $('.chat-box').css({ "visibility": "hidden" });
      });
      
    }
  
    onFileSelected(event: any) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.previewImage = reader.result as string;
          this.user.image = this.previewImage;
        };
        this.selectedImage = file; // Mettre à jour selectedFile ici
      }
    }
  
    getImageFileName(path: string): string {
      const pathParts = path.split('/');
      const fileName = pathParts[pathParts.length - 1];
      console.log('Chemin de l\'image :', fileName);
      console.log('Image Path:', this.getImageFileName(this.user.image)); // Adjusted from this.contenu.image
      return fileName;
  }

 
  sendMessage() {
    const timestamp = new Date();
    this.messages.push({ text: this.message, sender: 'user', timestamp: timestamp });

    this.chatbotService.sendMessage(this.message).subscribe(response => {
      const botResponse = response.msg;
      this.messages.push({ text: botResponse, sender: 'bot', timestamp: new Date() });
    });
    this.message = '';

  }
}