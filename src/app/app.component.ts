import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() backgroundColor: ThemePalette;

  navLinks = [
    {
      path: 'about',
      label: 'about us'
    },
    {
      path: 'skicams',
      label: 'skicams'
    },
    {
      path: 'contact',
      label: 'contact'
    }
  ];

}
