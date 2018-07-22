import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contact = {} as Contact;

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.contact);
  }
}
