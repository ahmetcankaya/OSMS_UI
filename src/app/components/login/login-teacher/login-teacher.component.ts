import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-teacher',
  templateUrl: './login-teacher.component.html',
  styles: [
  ]
})
export class LoginTeacherComponent implements OnInit {

  constructor(private service:LoginServiceService,private router:Router) { }
  formModel = {
    UserName:'',
    Password:''
  }
  ngOnInit(): void {
  }

  onSubmitTeacher(form:NgForm){
    this.service.loginTeacher(form.value).subscribe(
      (resp:any)=>{
        localStorage.setItem('token',resp.token);
        this.router.navigateByUrl('/teacher');
      },
      err => {
        if(err.status==400)
        {
          alert("Kullanıcı adı ya da parola yanlış.")
          console.log(err)
        }
      }
    )
  }
}
