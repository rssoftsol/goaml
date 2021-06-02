import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UsersComponent} from "./users/users.component";
import {AuthGaurdService} from "./service/auth-gaurd.service";
import {LogoutComponent} from "./logout/logout.component";
import {PasswordChangeComponent} from "./password-change/password-change.component";
import {XmlDownloadComponent} from "./xml-download/xml-download.component";

const routes: Routes = [
  {path: '', component: XmlDownloadComponent, canActivate: [AuthGaurdService]},
  {path: 'users', component: UsersComponent, canActivate: [AuthGaurdService]},
  {path: 'change-password', component: PasswordChangeComponent, canActivate: [AuthGaurdService]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
