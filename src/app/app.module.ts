import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { UploadResumeComponent } from './upload-resume/upload-resume.component';
import { ServicesComponent } from './services/services.component';
import { OurPackegesComponent } from './our-packeges/our-packeges.component';
import { PackegeDetailsComponent } from './packege-details/packege-details.component';
import { CustomPackegeComponent } from './custom-packege/custom-packege.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { UserRequestsComponent } from './user-requests/user-requests.component';
import { ApprovingRequestComponent } from './approving-request/approving-request.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    ProfileComponent,
    UploadResumeComponent,
    ServicesComponent,
    OurPackegesComponent,
    PackegeDetailsComponent,
    CustomPackegeComponent,
    ConfirmOrderComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    ManageUsersComponent,
    UserRequestsComponent,
    ApprovingRequestComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
