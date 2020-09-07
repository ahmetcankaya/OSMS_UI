import { Component, OnInit } from '@angular/core';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher';

@Component({
  selector: 'app-teacher-operation',
  templateUrl: './teacher-operation.component.html',
  styles: [
  ]
})
export class TeacherOperationComponent implements OnInit {

  constructor(private service:TeacherServiceService,private router:Router) { }
  teacher:Teacher
  ngOnInit(): void {
    this.getTeacherToken()
  }

  onLogout(){
    localStorage.removeItem('token')
    this.router.navigateByUrl('/')
  }

  getTeacherToken(){
    this.service.getTeacherToken().subscribe(
      (resp:Teacher)=>{   
         this.teacher=resp
      }
    )
  }
}
