import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pwd-generator',
  templateUrl: './pwd-generator.component.html',
  styleUrls: ['./pwd-generator.component.css']
})
export class PwdGeneratorComponent {
  length: number = 0;
  includeNumbers: boolean = false;
  includeLetters: boolean = false;
  includeSpecialChars: boolean = false;

  @Output() pwdGenerateEvent: EventEmitter<string> = new EventEmitter<string>();


  changeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  changeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  changeUseSpecialChars() {
    this.includeSpecialChars = !this.includeSpecialChars;
  }

  onChangeLength(len: number) {
    this.length = len;
  }

  generatePassword() {
    console.log(this.length, this.includeNumbers, this.includeLetters, this.includeSpecialChars);
    const numberSet: string = "0123456789"
    const letterSet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const specialCharSet: string = "!@#$%^&*()"

    let generatedPassword = "";

    let passwordSet: string = String.prototype.concat(this.includeNumbers ? numberSet : "", this.includeLetters ? letterSet : "", this.includeSpecialChars ? specialCharSet : "");

    for (var i = 0; i < this.length; ++i) {
      generatedPassword += passwordSet.charAt(Math.floor(Math.random() * passwordSet.length));
    }
    console.log(generatedPassword);
    this.pwdGenerateEvent.emit(generatedPassword);
    this.closePwdGenerator();
  }

  closePwdGenerator() {
    document.querySelector('#pwd-gen')?.classList.remove('is-active');
  }
}
