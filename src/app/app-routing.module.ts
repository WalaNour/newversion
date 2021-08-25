import { createComponentDefinitionMap } from "@angular/compiler/src/render3/partial/component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { ApprovingRequestComponent } from "./approving-request/approving-request.component";
import { ConfirmOrderComponent } from "./confirm-order/confirm-order.component";
import { CustomPackegeComponent } from "./custom-packege/custom-packege.component";
import { HomeComponent } from "./home/home.component";
import { ManageUsersComponent } from "./manage-users/manage-users.component";
import { OurPackegesComponent } from "./our-packeges/our-packeges.component";
import { PackegeDetailsComponent } from "./packege-details/packege-details.component";
import { ProfileComponent } from "./profile/profile.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UploadResumeComponent } from "./upload-resume/upload-resume.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "admin/home", component: AdminHomeComponent },
  { path: "admin/login", component: AdminLoginComponent },
  { path: "admin/users/request", component: UploadResumeComponent },
  { path: "admin/manageUsers", component: ManageUsersComponent },
  { path: "admin/aprroving", component: ApprovingRequestComponent },
  { path: "user/confirmOrder", component: ConfirmOrderComponent },
  { path: "user/customPackege", component: CustomPackegeComponent },
  { path: "user/ourPackeges", component: OurPackegesComponent },
  { path: "user/packegeDetails", component: PackegeDetailsComponent },
  { path: "user/profile", component: ProfileComponent },
  { path: "user/athonticat", component: SignUpComponent },
  { path: "user/signIn", component: SignInComponent },
  { path: "user/upload/Resume", component: UploadResumeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
