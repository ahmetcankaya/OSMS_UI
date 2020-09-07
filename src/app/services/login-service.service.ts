import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private readonly apiUrl='https://osmsapijwt20200903135119.azurewebsites.net';
  //private readonly apiUrl='http://localhost:63240';
  constructor(private http:HttpClient) { }

  loginAdmin(formData){
      return this.http.post(this.apiUrl+'/api/login/admin',formData)
  }

  loginTeacher(formData){
    return this.http.post(this.apiUrl+'/api/login/teacher',formData)
  }

  loginStudent(formData){
  return this.http.post(this.apiUrl+'/api/login/student',formData)
  }

  roleMatch(allowedRoles) : boolean {
    var isMatch=false;
    var payload= JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]))
    var userRole = payload.role;
    allowedRoles.forEach(element => {
      if(userRole== element) {
        isMatch=true
        return false
      }
    });
    return isMatch
  }
}
