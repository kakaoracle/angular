import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from "./heroes/heroes.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {EChartsComponent} from "./e-charts/e-charts.component";
import {ObservableComponent} from "./observable/observable.component";


const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path:'dashBoard',component: DashboardComponent},
  {path: 'detail/:id',component: HeroDetailComponent},
  {path: 'eCharts',component: EChartsComponent},
  {path:'',redirectTo:'/dashBoard',pathMatch:'full'},
  {path: 'observable',component: ObservableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
