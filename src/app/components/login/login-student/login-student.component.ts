import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styles: [
  ]
})
export class LoginStudentComponent implements OnInit {

  constructor(private service:LoginServiceService,private router:Router) { }
  formModel = {
    UserName:'',
    Password:''
  }
  ngOnInit(): void {
  }

  onSubmitStudent(form:NgForm){
    this.service.loginStudent(form.value).subscribe(
      (resp:any)=>{
        localStorage.setItem('token',resp.token);
        this.router.navigateByUrl('/student');
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
