import { Component, Injectable, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private formBuilder: FormBuilder
  ) { }

  title = 'password-manager';

  @Input() pwd: string = "";
  @Output() credentials: any[] = [];

  passwordForm = this.formBuilder.group({
    domain: "",
    username: "",
    password: "",
    expiryDate: ""
  })

  onSubmit(): void {
    this.credentials.push(this.passwordForm.value);
    this.passwordForm.reset();
  }

  onPasswordGenerated(password: string) {
    (<HTMLInputElement>document.querySelector('#password')).value = password;
  }

  openPwdGenerator() {
    document.querySelector('#pwd-gen')?.classList.add('is-active');
  }

  removePassword(i: number) {
    this.credentials.splice(i);
  }
}