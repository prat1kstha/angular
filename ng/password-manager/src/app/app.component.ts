import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PwdGeneratorComponent } from './pwd-generator/pwd-generator.component';

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

  onPasswordGenerated(password: string) {
    (<HTMLInputElement>document.querySelector('#password')).value = password;
  }

  openPwdGenerator() {
    document.querySelector('#pwd-gen')?.classList.add('is-active');
  }
}
