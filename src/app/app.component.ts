import { Component, OnInit } from '@angular/core';

import { CharacterService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  throttle = 0;
  distance = 3;
  page = 2;
  li: any;
  lis: any = [];

  constructor(private characterService: CharacterService) {}
  ngOnInit(): void {
    this.characterService.getCharacters(this.page).subscribe((Response) => {
      console.log(Response);
      console.log('Fetching data');
      this.li = Response;
      this.lis = this.li.results;
    });
  }
  onScrollDown(): void {
    this.page++;
    this.ngOnInit();
  }
}
