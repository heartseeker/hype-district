import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../messaging.service';


@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  constructor(private msgService: MessagingService) { }

  ngOnInit() {
    this.msgService.init();
  }
}
