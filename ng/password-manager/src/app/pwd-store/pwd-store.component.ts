import { Component } from '@angular/core';


@Component({
  selector: 'app-pwd-store',
  templateUrl: './pwd-store.component.html',
  styleUrls: ['./pwd-store.component.css']
})
export class PwdStoreComponent {
  // credList: Password[] = [];


  removePassword(i: number) {
    // this.pwdList.splice(i);
  }
}
