import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { EditcontactComponent } from './editcontact/editcontact.component';
import { ManagerComponent } from './manager/manager.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SpinnnerComponent } from './spinnner/spinnner.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { StatisticComponent } from './statistic/statistic.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
      
  {
    path:'addcontact',
    component:AddcontactComponent, canActivate: [AuthGuard]
  },
  
  {
    path:'editcontact/:contactId',
    component:EditcontactComponent, canActivate: [AuthGuard]
  },
  {
    path:'manager',
    component:ManagerComponent, canActivate: [AuthGuard]
  }, {
    path:'navbar',
    component:NavbarComponent
  }, {
    path:'spinner',
    component:SpinnnerComponent
  },
  {
    path:'view/:contactId',
    component:ViewcontactComponent, canActivate: [AuthGuard]
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'statistic',
    component:StatisticComponent
  },
  {
    path:'',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
