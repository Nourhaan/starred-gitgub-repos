import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingReposComponent } from './components/trending-repos/trending-repos.component';

const routes: Routes = [
  {path:'',component:TrendingReposComponent},
  {path:'trending-repos',component:TrendingReposComponent},
  {path:'**',component:TrendingReposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
