import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Admin } from 'src/app/models/admin';
import { Teacher } from 'src/app/models/teacher';
import { Student } from 'src/app/models/student';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private readonly apiUrl='https://osmsapijwt20200903135119.azurewebsites.net';
  //private readonly apiUrl='http://localhost:63240';
  constructor(private http:HttpClient) { }
  
  //-----ADMIN TOKEN GET START----// 
  getAdminToken(){
    return this.http.get(this.apiUrl+'/api/admin/TokenAdmin')
  }
  //-----ADMIN TOKEN GET END----//

  //------ADMIN START------//
  getAdmins(){
    //var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})
    return this.http.get(this.apiUrl+'/api/Admin');
  }

  addAdmin(admin:Admin) {
    return this.http.post(this.apiUrl + '/api/Admin', admin);
  }

  deleteAdmin(admin:Admin){
    let id:number=admin.AdminID;
    return this.http.delete(this.apiUrl+'/api/Admin/'+id);
  }

  updateAdmin(admin:Admin){
    let id:number=admin.AdminID;
    return this.http.put(this.apiUrl+'/api/Admin/'+id,admin);
  }
  //------ADMIN END------//

  //------TEACHER START------//
  getTeachers(){
    return this.http.get(this.apiUrl+'/api/Teacher');
  }

  addTeacher(teacher:Teacher) {
    return this.http.post(this.apiUrl + '/api/Teacher', teacher);
  }

  deleteTeacher(teacher:Teacher){
    let id:number=teacher.TeacherID;
    return this.http.delete(this.apiUrl+'/api/Teacher/'+id);
  }

  updateTeacher(teacher:Teacher){
    let id:number=teacher.TeacherID;
    return this.http.put(this.apiUrl+'/api/Teacher/'+id,teacher);
  }
  //------TEACHER END------//

  //------Student START------//
  getStudents(){
    return this.http.get(this.apiUrl+'/api/Student');
  }

  addStudent(student:Student) {
    return this.http.post(this.apiUrl + '/api/Student', student);
  }

  deleteStudent(student:Student){
    let id:number=student.StudentID;
    return this.http.delete(this.apiUrl+'/api/Student/'+id);
  }

  updateStudent(student:Student){
    let id:number=student.StudentID;
    return this.http.put(this.apiUrl+'/api/Student/'+id,student);
  }
  //------Student END------//


  //------Course Operation START------//
  courseList(){
    return this.http.get(this.apiUrl+'/api/Course');
  }

  courseRegistrationStudentList(id){
    return this.http.get(this.apiUrl+'/api/CourseRegistration/Students/'+id)
  }

  courseContentList(id){
    return this.http.get(this.apiUrl+'/api/Context/Contents/'+id)
  }
  //------Course Operation END------//

  //------Count Operation START------//
  getCountAdmin(){
    return this.http.get(this.apiUrl+'/api/Admin/TotalAdmin')
  }

  getCountTeacher(){
    return this.http.get(this.apiUrl+'/api/Teacher/TotalTeacher')
  }

  getCountStudent(){
    return this.http.get(this.apiUrl+'/api/Student/TotalStudent')
  }

  getCountCourse(){
    return this.http.get(this.apiUrl+'/api/Course/TotalCourse')
  }

  getCountContext(){
    return this.http.get(this.apiUrl+'/api/Context/TotalContext')
  }
  //------Count Operation START------//

}
