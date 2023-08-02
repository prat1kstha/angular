import { Component } from '@angular/core';
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

  credList: any[] = [];

  passwordForm = this.formBuilder.group({
    domain: "",
    username: "",
    password: "",
    expiryDate: ""
  })

  onSubmit(): void {
    console.log('Password added', this.passwordForm.value);
    this.credList.push(this.passwordForm.value);
    this.passwordForm.reset();

    this.credList.forEach(element => {
      console.log(element);
    });
  }
}
