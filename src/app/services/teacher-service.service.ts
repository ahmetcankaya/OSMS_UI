import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Course } from '../models/course';
import { Context } from '../models/context';
import { Teacher } from '../models/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {
  private readonly apiUrl='https://osmsapijwt20200903135119.azurewebsites.net';
  //private readonly apiUrl='http://localhost:63240';
  constructor(private http:HttpClient) { }
  teacher:Teacher
  
  //-----TEACHER TOKEN GET START----// 
  getTeacherToken(){
    return this.http.get(this.apiUrl+'/api/Teacher/TokenTeacher')
  }
  //-----TEACHER TOKEN GET END----//

  getCourseListByTeacherID(teacherTokenID){
      return this.http.get(this.apiUrl+'/api/Course/GetCourseByTeacherID/'+teacherTokenID)
  }

  addCourse(course:Course){
    return this.http.post(this.apiUrl+'/api/Course',course)
  }

  addContext(context:Context){
    return this.http.post(this.apiUrl+'/api/Context',context)
  }

  courseContentList(id){
    return this.http.get(this.apiUrl+'/api/Context/Contents/'+id)
  }

  courseRegistrationStudentList(id){
    return this.http.get(this.apiUrl+'/api/CourseRegistration/Students/'+id)
  }

  getCourseCount(teacherTokenID){
    return this.http.get(this.apiUrl+'/api/Course/totalCourse/'+teacherTokenID)
  }

  getStudentCount(teacherTokenID){
    return this.http.get(this.apiUrl+'/api/CourseRegistration/totalStudent/'+teacherTokenID)
  }

  getContextCount(teacherTokenID){
    return this.http.get(this.apiUrl+'/api/Context/totalContext/'+teacherTokenID)
  }

  deleteCourse(course:Course){
    let id:number=course.CourseID;
    return this.http.delete(this.apiUrl+'/api/Course/'+id);
  }
}
