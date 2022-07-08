import { Component, OnInit } from '@angular/core';

import { BreweryService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  throttle = 0;
  distance = 2;
  page = 2;
  li: any;
  lis: any = [];

  constructor(private breweryService: BreweryService) {}
  ngOnInit(): void {
    this.breweryService.getBreweries(this.page).subscribe((Response) => {
      console.log(Response);
      this.li = Response;
      this.lis = this.li.results;
    });
  }
  onScroll(): void {
    this.breweryService.getBreweries(++this.page).subscribe((Response) => {
      console.log('New fetch');
      this.li = Response;
      this.lis = this.li.results;
    });
  }
}
