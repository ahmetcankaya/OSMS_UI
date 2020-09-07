import { Component, OnInit } from '@angular/core';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-registration-students',
  templateUrl: './registration-students.component.html',
  styles: [
  ]
})
export class TeacherRegistrationStudentsComponent implements OnInit {

  constructor(private service:TeacherServiceService,private route:ActivatedRoute) { }
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
