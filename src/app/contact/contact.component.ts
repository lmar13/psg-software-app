import { Component, OnInit } from '@angular/core';
import { Contact } from './shared';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact = {} as Contact;

  constructor() { }

  ngOnInit() {
  }

}
