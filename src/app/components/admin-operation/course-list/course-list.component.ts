import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styles: [
  ]
})
export class CourseListComponent implements OnInit {

  constructor(private service:AdminServiceService) { }
  courses:Course[]
  
  ngOnInit(): void {
    this.courseList()
  }

  courseList(){
    this.service.courseList().subscribe((resp:Course[])=> this.courses=resp)
  }

}
