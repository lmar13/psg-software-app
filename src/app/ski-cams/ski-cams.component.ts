import { Component, OnInit } from '@angular/core';
import { SkiCams, SkiCamsService, Cams } from './shared';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-ski-cams',
  templateUrl: './ski-cams.component.html',
  styleUrls: ['./ski-cams.component.css']
})
export class SkiCamsComponent implements OnInit {
  skiCams: SkiCams[] = [];
  cams: Cams[] = [];

  constructor(private skiCamsService: SkiCamsService) { }

  ngOnInit() {
    this.fetchSkiCams();
  }

  fetchSkiCams() {
    this.skiCamsService.get()
    .pipe(
      map(x => {
        const values = Object.values(x);
        return values.filter(val => {
          if (val.name === 'Balme' || val.name === 'Piani di Bobbio') {
            val.cams = Object.values(val.cams);
            return true;
          }
        });
      })
    )
    .subscribe(skiCams => {
      this.skiCams = skiCams;
    });
  }
}
