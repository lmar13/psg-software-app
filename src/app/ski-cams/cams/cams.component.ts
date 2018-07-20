import { Component, OnInit, Input } from '@angular/core';
import { Cams } from '../shared';

@Component({
  selector: 'app-cams',
  templateUrl: './cams.component.html',
  styleUrls: ['./cams.component.css']
})
export class CamsComponent implements OnInit {
  @Input() cams: Cams;

  constructor() { }

  ngOnInit() {
  }

}
