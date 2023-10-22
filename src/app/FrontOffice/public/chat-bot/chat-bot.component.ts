import { Component, AfterViewInit, ElementRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements AfterViewInit {

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit() {
    $(this.elRef.nativeElement).find('.chat-button').on('click', () => {
      $('.chat-button').css({ "display": "none" });
      $('.chat-box').css({ "visibility": "visible" });
    });

    $(this.elRef.nativeElement).find('.chat-box .chat-box-header p').on('click', () => {
      $('.chat-button').css({ "display": "block" });
      $('.chat-box').css({ "visibility": "hidden" });
    });

    $(this.elRef.nativeElement).find("#addExtra").on("click", () => {
      $(".modal").toggleClass("show-modal");
    });

    $(this.elRef.nativeElement).find(".modal-close-button").on("click", () => {
      $(".modal").toggleClass("show-modal");
    });
  }

  sendMessage() {
    const message = (document.getElementById('messageInput') as HTMLInputElement).value;
    if (message.trim() !== "") {
      console.log("Sent Message:", message);
      (document.getElementById('messageInput') as HTMLInputElement).value = "";
    }
  }
}
