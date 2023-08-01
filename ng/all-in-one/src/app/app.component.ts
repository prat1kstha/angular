import { Component } from '@angular/core';
import { AppserviceService } from './appservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'all-in-one';
  constructor(private dogservice: AppserviceService) {

  }
  data: any;

  getData() {
    let request = this.dogservice.getDog();
    request.subscribe(response => this.data = response);
    return this.data;
  }
}
