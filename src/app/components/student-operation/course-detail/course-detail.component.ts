import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from 'src/app/services/student-service.service';
import { Course } from 'src/app/models/course';
import { Teacher } from 'src/app/models/teacher';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styles: [
  ]
})
export class CourseDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:StudentServiceService) { }
  course:Course
  teacher:Teacher
  count:number
  
  ngOnInit(): void {
    this.route.params.subscribe(resp=>{
      this.courseDetail(resp["CourseID"])
    })
  }

  courseDetail(CourseID){
    this.service.courseDetail(CourseID).subscribe(
      (resp:Course)=>{
        this.course=resp
        this.service.getTeacherByID(this.course.TeacherID).subscribe(
          (resp:Teacher)=>{
            this.teacher=resp
            this.service.getCourseContextCount(CourseID).subscribe((resp:number)=>this.count=resp)
          })
      })
  }

}
