import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  // add three properties
  messageForm: FormGroup; // Represents entire form
  submitted = false; // These two below indicate if form has been sent & if validation was successful
  success = false;

  // inject a variable of type FormBuilder in the constructor
  constructor(private formBuilder: FormBuilder) {
    // Use this property to define the properties of our form
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  // method that will be executed when the form is sent
  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    this.success = true;
  }
}
