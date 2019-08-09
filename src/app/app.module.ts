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
import { PessoaEditComponent } from './pessoa/pessoa-edit/pessoa-edit.component';
import { PessoaFormComponent } from './pessoa/pessoa-form/pessoa-form.component';
import {FormsModule} from '@angular/forms';

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
    PessoaFormComponent
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
