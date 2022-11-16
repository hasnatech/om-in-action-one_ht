import { Component } from '@angular/core';
import { security } from 'ht-security';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    security({
      mode: "development"
    })
  }
  title = 'om-in-action-one';

}
