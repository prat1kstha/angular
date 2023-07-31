import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HiringRoutingModule } from './hiring-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Last30daysComponent } from './last30days/last30days.component';
import { WfhComponent } from './wfh/wfh.component';


@NgModule({
  declarations: [
    DashboardComponent,
    Last30daysComponent,
    WfhComponent
  ],
  imports: [
    CommonModule,
    HiringRoutingModule
  ]
})
export class HiringModule { }
