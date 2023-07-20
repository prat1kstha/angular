import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length: number = 0;
  includeNumbers: boolean = false;
  includeLetters: boolean = false;
  includeSpecialChars: boolean = false;
  password: string = "12ab!@";

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

  generatePassword(length: number, useNumbers: boolean, useLetters: boolean, useSpecialChars: boolean) {

    console.log(length, useNumbers, useLetters, useSpecialChars);
    const numberSet: string = "0123456789"
    const letterSet: string = "abcdefghijklmnopqrstuvwxyz"
    const specialCharSet: string = "!@#$%^&*()"

    let generatedPassword = "";

    // // Option1
    // for (var i = 0; i < length; ++i) {
    //   if (useNumbers) {
    //     generatedPassword += numberSet.charAt(Math.floor(Math.random() * numberSet.length));
    //   }

    //   if (useLetters) {
    //     generatedPassword += letterSet.charAt(Math.floor(Math.random() * letterSet.length));
    //   }

    //   if (useSpecialChars) {
    //     generatedPassword += specialCharSet.charAt(Math.floor(Math.random() * specialCharSet.length));
    //   }

    // }

    // Option2
    let passwordSet: string = String.prototype.concat(useNumbers ? numberSet : "", useLetters ? letterSet : "", useSpecialChars ? specialCharSet : "");

    for (var i = 0; i < length; ++i) {
      generatedPassword += passwordSet.charAt(Math.floor(Math.random() * passwordSet.length));
    }
    this.password = generatedPassword;
  }
}
