import { Component, OnInit } from '@angular/core';
import { MessagingService } from './messaging.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Hello Angular';
  url;


  constructor(private msgService: MessagingService, public router: Router) {
  }

  ngOnInit() {
  }

  subscribe() {
  }

}
