import { Component, OnInit } from '@angular/core';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';
import { ActivatedRoute } from '@angular/router';
import { Context } from 'src/app/models/context';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styles: [
  ]
})
export class TeacherContentListComponent implements OnInit {

  constructor(private service:TeacherServiceService,private route:ActivatedRoute) { }
  contexts:Context[]

  ngOnInit(): void {
    this.route.params.subscribe(resp=>{
      this.courseContentList(resp["CourseID"])
    })
  }

  courseContentList(id){
    this.service.courseContentList(id)
    .subscribe((resp:Context[])=>{
      this.contexts=resp
    })
  }

}
