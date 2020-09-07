import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/services/student-service.service';
import { Student } from 'src/app/models/student';
import { StudentDashboardComponent } from '../student-dashboard/student-dashboard.component';

@Component({
  selector: 'app-student-profil',
  templateUrl: './student-profil.component.html',
  styles: [
  ]
})
export class StudentProfilComponent implements OnInit {

  constructor(private service:StudentServiceService) { }
  student:Student
  ngOnInit(): void {
    this.getStudentToken()
  }

  getStudentToken(){
    this.service.getStudentToken().subscribe(
      (resp:Student)=>{   
         this.student=resp
      }
    )
  }

}
