import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaIndexComponent } from './pessoa/pessoas-index/pessoa-index.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConfigComponent } from './pages/config/config.component';
import { PessoaEditComponent } from './pessoa/pessoa-edit/pessoa-edit.component';
import {PessoaCreateComponent} from './pessoa/pessoa-create/pessoa-create.component';

const routes: Routes = [
  { path: 'pessoas', component: PessoaIndexComponent },
  { path: 'pessoas/criar', component: PessoaCreateComponent},
  { path: 'pessoas/:id', component: PessoaEditComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'config', component: ConfigComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
