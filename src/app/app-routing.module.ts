import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { LoginComponent } from './admin/login/login.component';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import { AuthGuard } from './admin/auth.guard';
import { SignupComponent } from './admin/signup/signup.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'courses', component: CourseListComponent, canActivate: [AuthGuard]},
  {path: 'courses/details/:id', component: CourseDetailsComponent, canActivate: [AuthGuard]},
  {path: 'courses/edit/:id', component: CourseEditComponent, canActivate: [AuthGuard]},
  {path: 'signup', component: SignupComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
