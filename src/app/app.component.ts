import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jokes';

  update: boolean = false;
  joke: any;
  constructor(updates: SwUpdate, private data: DataService) {
    updates.available.subscribe(event => {
      console.log(event);
      updates.activateUpdate().then(() => document.location.reload());
    })
  }

  ngOnInit(): void {
    this.data.jokes().subscribe(res => {
      this.joke = res['value'];
      console.log(this.joke);
    })
  }


}
