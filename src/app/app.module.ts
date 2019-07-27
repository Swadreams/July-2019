import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { StarComponent } from './shared/star/star.component';
import { HeaderComponent } from './header/header.component';
import { AdminModule } from './admin/admin.module';
import { environment } from 'src/environments/environment';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseListComponent,
    StarComponent,
    HeaderComponent,
    CourseDetailsComponent,
    CourseEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
