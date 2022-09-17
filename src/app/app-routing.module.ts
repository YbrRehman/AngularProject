import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/components/admin/admin.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { HomeinsuranceDetailsComponent } from './components/homeinsurance-details/homeinsurance-details.component';
import { HomeinsuranceComponent } from './components/homeinsurance/homeinsurance.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [{path:'home',component:HomeComponent},
{path:'homeinsurance',component:HomeinsuranceComponent},
//{path:'investments/:type',component:InvestmentComponent},
//{path:'investments/:property/:value',component:InvestmentComponent},

{path:'insurance-details/:id',component:HomeinsuranceDetailsComponent},
{path:'admin',component:AdminComponent},
{path:'contact',component:ContactusComponent},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'**',component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
