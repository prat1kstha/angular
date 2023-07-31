import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HiringModule } from './hiring/hiring.module';
import { FinanceModule } from './finance/finance.module';
import { VoterComponent } from './voter/voter.component';
import { VotingComponent } from './voting/voting.component';

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    VotingComponent
  ],
  // Eager Loading
  imports: [
    BrowserModule,
    HiringModule,
    FinanceModule,
    VoterComponent,
    VotingComponent,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
