import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { PessoaIndexComponent } from './pessoa/pessoas-index/pessoa-index.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConfigComponent } from './pages/config/config.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { PessoaEditComponent } from './pessoa/pessoa-edit/pessoa-edit.component';
import { PessoaCreateComponent } from './pessoa/pessoa-create/pessoa-create.component';
import { PessoaFormComponent } from './pessoa/pessoa-form/pessoa-form.component';
import { PessoaViewComponent } from './pessoa-view/pessoa-view.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    PessoaIndexComponent,
    DashboardComponent,
    ConfigComponent,
    BreadcrumbComponent,
    PessoaEditComponent,
    PessoaCreateComponent,
    PessoaFormComponent,
    PessoaViewComponent,
    PessoaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
