import { Component, Injectable, Input } from '@angular/core';


@Component({
  selector: 'app-pwd-store',
  templateUrl: './pwd-store.component.html',
  styleUrls: ['./pwd-store.component.css']
})
@Injectable({ providedIn: 'root' })
export class PwdStoreComponent {
  @Input() credentials: any[] = [];
}
