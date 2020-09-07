import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin-operation/admin/admin.component';
import { TeacherComponent } from './components/admin-operation/teacher/teacher.component';
import { StudentComponent } from './components/admin-operation/student/student.component';
import { AdminOperationComponent } from './components/admin-operation/admin-operation.component';
import { CourseListComponent} from './components/admin-operation/course-list/course-list.component';
import { AdminRegistrationStudentsComponent } from './components/admin-operation/registration-students/registration-students.component';
import { AdminContentListComponent } from './components/admin-operation/content-list/content-list.component';
import { LoginComponent } from './components/login/login.component';
import { TeacherDashboardComponent } from './components/teacher-operation/teacher-dashboard/teacher-dashboard.component';
import { TeacherProfilComponent } from './components/teacher-operation/teacher-profil/teacher-profil.component';
import { CourseContentComponent } from './components/teacher-operation/course-content/course-content.component';
import { TeacherRegistrationStudentsComponent } from './components/teacher-operation/registration-students/registration-students.component';
import { TeacherContentListComponent } from './components/teacher-operation/content-list/content-list.component';
import { StudentDashboardComponent } from './components/student-operation/student-dashboard/student-dashboard.component';
import { StudentProfilComponent } from './components/student-operation/student-profil/student-profil.component';
import { StudentContentListComponent } from './components/student-operation/content-list/content-list.component';
import { AuthGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './components/forbidden/forbidden/forbidden.component';
import { from } from 'rxjs';
import { AdminProfilComponent } from './components/admin-operation/admin-profil/admin-profil.component';
import { LoginAdminComponent } from './components/login/login-admin/login-admin.component';
import { LoginTeacherComponent } from './components/login/login-teacher/login-teacher.component';
import { LoginStudentComponent } from './components/login/login-student/login-student.component';
import { CourseDetailComponent } from './components/student-operation/course-detail/course-detail.component';



const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'login/admin',component: LoginAdminComponent},
  {path:'login/teacher',component: LoginTeacherComponent},
  {path:'login/student',component: LoginStudentComponent},
  {path:'admin',component: AdminComponent,canActivate:[AuthGuard], data : {permittedRoles:['ADMIN']}},
  {path:'admin/teacher',component: TeacherComponent,canActivate:[AuthGuard], data : {permittedRoles:['ADMIN']}}, 
  {path:'admin/student',component: StudentComponent,canActivate:[AuthGuard], data : {permittedRoles:['ADMIN']}},
  {path:'admin/course/list',component:CourseListComponent,canActivate:[AuthGuard], data : {permittedRoles:['ADMIN']}},
  {path:'admin/profil',component:AdminProfilComponent,canActivate:[AuthGuard], data : {permittedRoles:['ADMIN']}},
  {path:'admin/registration/students/:CourseID',component:AdminRegistrationStudentsComponent,canActivate:[AuthGuard], data : {permittedRoles:['ADMIN']}},
  {path:'admin/course/content/list/:CourseID',component:AdminContentListComponent,canActivate:[AuthGuard], data : {permittedRoles:['ADMIN']}},
  {path:'teacher',component: TeacherDashboardComponent,canActivate:[AuthGuard], data : {permittedRoles:['TEACHER']}},
  {path:'teacher/profil',component:TeacherProfilComponent,canActivate:[AuthGuard], data : {permittedRoles:['TEACHER']}},
  {path:'student',component:StudentDashboardComponent,canActivate:[AuthGuard], data : {permittedRoles:['STUDENT']}},
  {path:'student/profil',component:StudentProfilComponent,canActivate:[AuthGuard], data : {permittedRoles:['STUDENT']}},
  {path:'student/course/content/list/:CourseID',component:StudentContentListComponent,canActivate:[AuthGuard], data : {permittedRoles:['STUDENT']}},
  {path:'teacher/course/content/:CourseID',component:CourseContentComponent,canActivate:[AuthGuard], data : {permittedRoles:['TEACHER']}},
  {path:'teacher/course/content/list/:CourseID',component:TeacherContentListComponent,canActivate:[AuthGuard], data : {permittedRoles:['TEACHER']}},
  {path:'teacher/registration/students/:CourseID',component:TeacherRegistrationStudentsComponent,canActivate:[AuthGuard], data : {permittedRoles:['TEACHER']}},
  {path:'forbidden',component:ForbiddenComponent},
  {path:'student/course/detail/:CourseID',component:CourseDetailComponent,canActivate:[AuthGuard], data : {permittedRoles:['STUDENT']}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
