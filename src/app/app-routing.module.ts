import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {ErrorPageComponent} from './component/error-page/error-page.component';
import {RegistrationComponent} from './component/registration/registration.component';
import {ContactComponent} from './component/contact/contact.component';
import {HelpComponent} from './component/help/help.component';
import {ShareComponent} from './component/share/share.component';
import {SettingsComponent} from './component/settings/settings.component';
import {AllStudentComponent} from './component/all-student/all-student.component';
import {SearchStudentComponent} from './component/search-student/search-student.component';
import {FindResultComponent} from './component/find-result/find-result.component';
import {NoticeBoardComponent} from './component/notice-board/notice-board.component';
import {AddResultComponent} from './component/add-result/add-result.component';
import {EditStudentComponent} from './component/edit-student/edit-student.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, children: [
      {path: '', redirectTo: 'all-student', pathMatch: 'full'},
      {path: 'all-student', component: AllStudentComponent},
      {path: 'search-student', component: SearchStudentComponent},
      {path: 'find-result', component: FindResultComponent},
      {path: 'add-result', component: AddResultComponent},
      {path: 'edit-student/:id', component: EditStudentComponent},
      {path: 'notice-board', component: NoticeBoardComponent},
      {path: 'registration', component: RegistrationComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'help', component: HelpComponent},
      {path: 'share', component: ShareComponent},
      {path: 'settings', component: SettingsComponent},
      {path: '**', redirectTo: 'all-student'}
    ]},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  DashboardComponent,
  AllStudentComponent,
  SearchStudentComponent,
  FindResultComponent,
  AddResultComponent,
  EditStudentComponent,
  NoticeBoardComponent,
  ErrorPageComponent,
  RegistrationComponent,
  ContactComponent,
  HelpComponent,
  ShareComponent,
  SettingsComponent
];
