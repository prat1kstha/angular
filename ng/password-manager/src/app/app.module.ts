import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PwdGeneratorComponent } from './pwd-generator/pwd-generator.component';
import { PwdStoreComponent } from './pwd-store/pwd-store.component';

@NgModule({
  declarations: [
    AppComponent,
    PwdGeneratorComponent,
    PwdStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  toggleModal() {
    document.querySelector('.modal')?.classList.add('is-active');
  }
}
