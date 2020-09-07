import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin-operation/admin/admin.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TeacherComponent } from './components/admin-operation/teacher/teacher.component';
import { StudentComponent } from './components/admin-operation/student/student.component';
import { AdminOperationComponent } from './components/admin-operation/admin-operation.component';
import { AdminProfilComponent } from './components/admin-operation/admin-profil/admin-profil.component';
import { LoginComponent } from './components/login/login.component';
import { TeacherDashboardComponent } from './components/teacher-operation/teacher-dashboard/teacher-dashboard.component';
import { TeacherProfilComponent } from './components/teacher-operation/teacher-profil/teacher-profil.component';
import { StudentDashboardComponent } from './components/student-operation/student-dashboard/student-dashboard.component';
import { StudentProfilComponent } from './components/student-operation/student-profil/student-profil.component';
import { CourseContentComponent } from './components/teacher-operation/course-content/course-content.component';
import { StudentContentListComponent } from './components/student-operation/content-list/content-list.component';
import { TeacherRegistrationStudentsComponent } from './components/teacher-operation/registration-students/registration-students.component';
import { CourseListComponent } from './components/admin-operation/course-list/course-list.component';
import { AdminRegistrationStudentsComponent } from './components/admin-operation/registration-students/registration-students.component';
import { AdminContentListComponent } from './components/admin-operation/content-list/content-list.component';
import { TeacherContentListComponent } from './components/teacher-operation/content-list/content-list.component';
import { StudentFilterPipe } from './filter/student-filter.pipe';
import { AdminServiceService } from './services/admin-service.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { TeacherServiceService } from './services/teacher-service.service';
import { StudentServiceService } from './services/student-service.service';
import { ForbiddenComponent } from './components/forbidden/forbidden/forbidden.component';
import { StudentOperationComponent } from './components/student-operation/student-operation.component';
import { TeacherOperationComponent } from './components/teacher-operation/teacher-operation.component';
import { LoginAdminComponent } from './components/login/login-admin/login-admin.component';
import { LoginTeacherComponent } from './components/login/login-teacher/login-teacher.component';
import { LoginStudentComponent } from './components/login/login-student/login-student.component';
import { CourseDetailComponent } from './components/student-operation/course-detail/course-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TeacherComponent,
    StudentComponent,
    AdminOperationComponent,
    AdminProfilComponent,
    LoginComponent,
    TeacherDashboardComponent,
    TeacherProfilComponent,
    StudentDashboardComponent,
    StudentProfilComponent,
    CourseContentComponent,
    StudentContentListComponent,
    TeacherRegistrationStudentsComponent,
    CourseListComponent,
    AdminRegistrationStudentsComponent,
    AdminContentListComponent,
    TeacherContentListComponent,
    StudentFilterPipe,
    ForbiddenComponent,
    StudentOperationComponent,
    TeacherOperationComponent,
    LoginAdminComponent,
    LoginTeacherComponent,
    LoginStudentComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AdminServiceService,TeacherServiceService,StudentServiceService,{
    provide: HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
