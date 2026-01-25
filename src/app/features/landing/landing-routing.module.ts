import { RouterModule, Routes } from "@angular/router";
import { Landing } from "./landing/landing";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {path: '', component: Landing}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LandingRoutingModule { }
