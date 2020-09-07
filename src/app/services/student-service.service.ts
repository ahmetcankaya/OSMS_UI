import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CourseRegistration } from '../models/course-regisration';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private readonly apiUrl='https://osmsapijwt20200903135119.azurewebsites.net';
  //private readonly apiUrl='http://localhost:63240';
  constructor(private http:HttpClient) { }
  public student:Student
  //-----STUDENT TOKEN GET START----// 
  getStudentToken(){
    return this.http.get(this.apiUrl+'/api/Student/TokenStudent')
  }
  //-----STUDENT TOKEN GET END----//

  getStudentCourses(studentTokenID){
    return this.http.get(this.apiUrl+'/api/Course/GetCourseByStudentID/'+studentTokenID)
    
  }

  getCourses(studentTokenID){
     return this.http.get(this.apiUrl+'/api/Course/GetCourseByNotStudentID/'+studentTokenID)
  }

  postCourseRegistration(courseRegistration:CourseRegistration){
    return this.http.post(this.apiUrl+'/api/CourseRegistration',courseRegistration)
  }

  courseContentList(id){
    return this.http.get(this.apiUrl+'/api/Context/Contents/'+id)
  }

  courseDetail(id){
    return this.http.get(this.apiUrl+'/api/Course/'+id)
  }

  getTeacherByID(id){
    return this.http.get(this.apiUrl+'/api/Student/Teacher/'+id)
  }

  getCourseContextCount(id){
    return this.http.get(this.apiUrl+'/api/Context/Count/'+id)
  }

}
