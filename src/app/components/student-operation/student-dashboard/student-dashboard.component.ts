import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/services/student-service.service';
import { Course } from 'src/app/models/course';
import { Student } from 'src/app/models/student';
import { ActivatedRoute } from '@angular/router';
import { CourseRegistration } from 'src/app/models/course-regisration';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styles: [
  ]
})
export class StudentDashboardComponent implements OnInit {
  static student: Student;

  constructor(private service:StudentServiceService,private route: ActivatedRoute) { }
  studentCourses:Course[]
  courses:Course[]
  student:Student
  courseRegistration:CourseRegistration

  ngOnInit(): void {
    this.getStudentToken();
    this.getStudentCourses();
    this.getCourses();
  }

  getStudentCourses(){
    this.service.getStudentToken().subscribe(
      (resp:Student)=>{   
         this.student=resp
         this.service.getStudentCourses(this.student.StudentID).subscribe((resp:Course[])=>this.studentCourses=resp)
      }
    )
    
  }

  getCourses(){
    this.service.getStudentToken().subscribe(
      (resp:Student)=>{   
         this.student=resp
         this.service.getCourses(this.student.StudentID).subscribe((resp:Course[])=>this.courses=resp)
      }
    )
    
  }

  postCourseRegistration(CourseID,){
    this.courseRegistration={
      CourseResgistrationID:null,
      CourseID:CourseID,
      StudentID:this.student.StudentID
    }
    this.service.postCourseRegistration(this.courseRegistration)
    .subscribe((resp:any)=> {
      this.getCourses();
      this.getStudentCourses();
        });
  }

  getStudentToken(){
    this.service.getStudentToken().subscribe(
      (resp:Student)=>{   
         this.student=resp
      }
    )
  }

}
