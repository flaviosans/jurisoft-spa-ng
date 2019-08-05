import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasIndexComponent } from './pessoas/pessoas-index/pessoas-index.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConfigComponent } from './pages/config/config.component';

const routes: Routes = [
  { path: 'pessoas', component: PessoasIndexComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'config', component: ConfigComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
