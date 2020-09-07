import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/services/student-service.service';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student-operation',
  templateUrl: './student-operation.component.html',
  styles: [
  ]
})
export class StudentOperationComponent implements OnInit {

  constructor(private service:StudentServiceService,private router:Router) { }
  student:Student
  ngOnInit(): void {
    this.getStudentToken()
  }

  onLogout(){
    localStorage.removeItem('token')
    this.router.navigateByUrl('/')
  }

  getStudentToken(){
    this.service.getStudentToken().subscribe(
      (resp:Student)=>{   
         this.student=resp
      }
    )
  }

}
