import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from '../demo/demo.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

import { UserComponent } from './user/user.component';
import { FormatWidth } from '@angular/common';
import { DirectiveComponent } from './directive/directive.component';
import{custom_directive}from '../app/custom_directive.directive';
import { Task1Component } from './task1/task1.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccComponent } from './acc/acc.component';

import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';
import { EmpComponent } from './emp/emp.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { Emp1Component } from './emp1/emp1.component';
import {EmpaddService} from './empadd.service';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { Sidebar1Component } from './sidebar1/sidebar1.component';
import { Tast2Component } from './tast2/tast2.component';
import { PipesComponent } from './pipes/pipes.component';
import { SalaryCalciPipe } from './salary-calci.pipe';
//import { AgePipe } from './age.pipe';
import { FirstLetterCapitalPipe } from './first-letter-capital.pipe';
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    NavComponent,
    SidebarComponent,
    FooterComponent,
    UserComponent,
    DirectiveComponent,
    custom_directive,
    Task1Component,
    AccountComponent,
    NewAccountComponent,
    AccComponent,
    EmpComponent,
    EmpInfoComponent,
    Emp1Component,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    ServicesComponent,
    Sidebar1Component,
    Tast2Component,
    PipesComponent,
    SalaryCalciPipe,
   // AgePipe,
    FirstLetterCapitalPipe,
   FormComponent,
   Form2Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {  path : 'home' , component : HomeComponent },
      {  path : 'aboutus' , component : AboutusComponent },
      {  path : 'contactus' , component : ContactusComponent},
      {  path : 'services' , component : ServicesComponent  }

    ])
  ],
  providers: [AccountsService,LoggingService,EmpaddService],
  bootstrap: [AppComponent]    //begining of project
})
export class AppModule { }
