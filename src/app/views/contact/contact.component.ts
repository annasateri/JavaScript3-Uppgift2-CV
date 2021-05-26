import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public regForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(2)]],
      message: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  get firstName() { return this.regForm.get('firstName') as FormControl; }
  get lastName() { return this.regForm.get('lastName') as FormControl; }
  get email() { return this.regForm.get('email') as FormControl; }
  get subject() { return this.regForm.get('subject') as FormControl }
  get message() { return this.regForm.get('message') as FormControl; }

  onSubmit() {

  }

}
