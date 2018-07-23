import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contact = {} as Contact;
  isSubmited = false;

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    // alert("This alert is open only to show form data. Form is not sending anything. Contact: " + JSON.stringify(this.contact));
    // alert("This alert is open only to show form data. Form is not sending anything. Contact: " + JSON.stringify(this.contact));
    
    this.isSubmited = true;
  }
}
