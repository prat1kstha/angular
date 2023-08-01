import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PwdGeneratorComponent } from './pwd-generator/pwd-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    PwdGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  toggleModal() {
    const modal = document.querySelector('.modal')?.classList.add('is-active');
    // modal.classList.add('is-active');
  }
}
