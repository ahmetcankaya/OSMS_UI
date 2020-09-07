import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styles: [
  ]
})
export class LoginAdminComponent implements OnInit {

  constructor(private service:LoginServiceService,private router:Router) { }
  formModel = {
    UserName:'',
    Password:''
  }
  ngOnInit(): void {
  }

  onSubmitAdmin(form:NgForm){
    this.service.loginAdmin(form.value).subscribe(
      (resp:any)=>{
        localStorage.setItem('token',resp.token);
        this.router.navigateByUrl('/admin');
      },
      (err:any) => {
        if(err.status==400)
        {
         alert("Kullanıcı adı ya da parola yanlış.")
         console.log(err)
        }
      }
    )
  }
}
