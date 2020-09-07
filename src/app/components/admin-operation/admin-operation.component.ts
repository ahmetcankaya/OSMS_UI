import { Component, OnInit, Input, Output } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { Admin } from 'src/app/models/admin';
import {
  FormGroup,
  FormBuilder,
  Validators,
  
} from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-operation',
  templateUrl: './admin-operation.component.html',
  styles: [
  ]
})
export class AdminOperationComponent implements OnInit {

  constructor(private service:AdminServiceService,private router:Router) { }
  admin:Admin
  ngOnInit(): void {
    this.getAdminToken()
  }

  onLogout(){
    localStorage.removeItem('token')
    this.router.navigateByUrl('/')
  }

  getAdminToken(){
    this.service.getAdminToken().subscribe(
      (resp:Admin)=>{   
         this.admin=resp
      }
    )
  }

}
