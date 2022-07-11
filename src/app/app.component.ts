import { Component, OnInit } from '@angular/core';
import { CharacterService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'tet';
  throttle = 0;
  distance = 2;
  page = 1;
  li: any;
  lis: any = [];

  constructor(private characterService: CharacterService) {}
  ngOnInit(): void {
    this.characterService.getCharacters(this.page).subscribe((Response) => {
      this.li = Response;
      this.lis = this.lis.concat(this.li.results);
      //Another way to do this
      //this.lis = this.li.results = [...this.lis, ...this.li.results];
    });
  }

  onScrollDown(): void {
    this.page++;
    this.ngOnInit();
  }
}
