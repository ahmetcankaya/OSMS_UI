import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { Student } from 'src/app/models/student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration-students',
  templateUrl: './registration-students.component.html',
  styles: [
  ]
})
export class AdminRegistrationStudentsComponent implements OnInit {

  constructor(private service:AdminServiceService,private route:ActivatedRoute) { }
  students:Student[]
  ngOnInit(): void {
     this.route.params.subscribe(params => {
      this.getCourseRegistrationStudentList(params["CourseID"]);
    });
  }

  getCourseRegistrationStudentList(id){
      this.service.courseRegistrationStudentList(id)
      .subscribe((resp:Student[])=>{
        this.students=resp
    })
  }
}
