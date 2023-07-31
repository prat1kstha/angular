import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Last30daysComponent } from './last30days/last30days.component';
import { WfhComponent } from './wfh/wfh.component';

const routes: Routes = [
  {
    path: "hiring",
    component: DashboardComponent,
    children: [
      // { path: "", component: DashboardComponent },
      // { path: "dashboard", component: DashboardComponent },
      { path: "last30days", component: Last30daysComponent },
      { path: "wfh", component: WfhComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HiringRoutingModule { }
