import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"; // for routing
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: "heroes", component: HeroesComponent }, // for 'url/heroes'
  { path: "dashboard", component: DashboardComponent }, // for 'url/dashboard'
  { path: 'detail/:id', component: HeroDetailComponent }, // for 'url/detail/:id'
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // for 'url' ==> 'url/dashboard'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
