import { PrivateMessagesService } from './../services/privateMessages.service';
import { Component, OnInit } from '@angular/core';
import { IPerson } from '../models/User.model';

@Component({
  selector: 'app-private-message',
  templateUrl: './private-message.page.html',
  styleUrls: ['./private-message.page.scss'],
})
export class PrivateMessagePage implements OnInit {

  message: IPerson;

  constructor(public privateMessageService: PrivateMessagesService) { }

  ngOnInit() {
    this.message = this.privateMessageService.pegarDados('id');
    console.log(this.message);

  }

}
