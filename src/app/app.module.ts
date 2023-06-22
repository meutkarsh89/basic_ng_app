import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './my-container/header/header.component';
import { MyContainerComponent } from './my-container/my-container.component';
import { LeftTextComponent } from './my-container/left-text/left-text.component';
import { RightTextComponent } from './my-container/right-text/right-text.component';
import { DatabindComponent } from './databind/databind.component';
import { ClassStyleComponent } from './class-style/class-style.component';
import { EventbindComponent } from './databind/eventbind/eventbind.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgifComponent } from './ngif/ngif.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { TelevisionComponent } from './product/television/television.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { WashingMachineComponent } from './product/washing-machine/washing-machine.component';
// import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
// import { Card1Component } from './card1/card1.component';
// import { Card2Component } from './card2/card2.component';
import { DesignUtilityService } from './appServices/design-utility.service';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { Comp5Component } from './comp5/comp5.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { DcChildComponent } from './decorators/dc-child/dc-child.component';
import { CustomColorDirective } from './appDirectives/custom-color.directive';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';

import { UxPipe } from './appPipes/ux.pipes';
import { MypipePipe } from './appPipes/mypipe.pipe';
import { FilterPipe } from './appPipes/filter.pipe';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
import { TempFormComponent } from './temp-form/temp-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CardsModule } from './cards/cards.module';
import { ManageProductComponent } from './product/manage-product/manage-product.component';
import { ManageUserComponent } from './product/manage-user/manage-user.component';
import { ProductServiceService } from './product/services/pServices/product-service.service';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    // NavigationComponent,
    HeaderComponent,
    MyContainerComponent,
    LeftTextComponent,
    RightTextComponent,
    DatabindComponent,
    ClassStyleComponent,
    EventbindComponent,
    // NgifComponent,
    NgForComponent,
    HomeComponent,
    AboutUsComponent,
    ProductComponent,
    ServicesComponent,
    TopNavComponent,
    LoginComponent,
    PageNotFoundComponent,
    LaptopComponent,
    TelevisionComponent,
    MobileComponent,
    WashingMachineComponent,
    
    ParentComponent,
    ChildComponent,
    ContactUsComponent,
    
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    LifecycleComponent,
    Comp5Component,
    DecoratorsComponent,
    DcChildComponent,
    CustomColorDirective,
    CustomPipeComponent,
    UxPipe,
    MypipePipe,
    FilterPipe,
    FilterPipeComponent,
    TempFormComponent,
    ReactiveFormComponent,
    ManageProductComponent,
    ManageUserComponent,
    EmployeeComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CardsModule,
  ],
  providers: [DesignUtilityService, ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
