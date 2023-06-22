import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeComponent } from './employee/employee.component';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
import { HomeComponent } from './home/home.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { ManageProductComponent } from './product/manage-product/manage-product.component';
import { ManageUserComponent } from './product/manage-user/manage-user.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { TelevisionComponent } from './product/television/television.component';
import { WashingMachineComponent } from './product/washing-machine/washing-machine.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ServicesComponent } from './services/services.component';
import { TempFormComponent } from './temp-form/temp-form.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'products', children:[
    {path:'', component: ProductComponent},
    {path:'laptop', component:LaptopComponent},
    {path:'mobile', component:MobileComponent},
    {path:'television', component:TelevisionComponent},
    {path:'washing-machine', component:WashingMachineComponent}
  ]},
  {path: 'services', component: ServicesComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'communication', component: ParentComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'lifecycle', component:LifecycleComponent},
  {path: 'decorators', component: DecoratorsComponent},
  {path: 'pipes', component: CustomPipeComponent},
  {path: 'filter-pipe', component: FilterPipeComponent},
  {path: 'temp-form', component: TempFormComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'manage-product', component: ManageProductComponent},
  {path: 'manage-user', component: ManageUserComponent},
  {path: 'employee',  children: [
    {path: '', component: EmployeeComponent},
    {path: ':id', component: EmployeeDetailComponent}
  ]},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
