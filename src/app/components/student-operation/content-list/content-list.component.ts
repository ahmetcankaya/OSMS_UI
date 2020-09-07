import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/services/student-service.service';
import { ActivatedRoute } from '@angular/router';
import { Context } from 'src/app/models/context';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styles: [
  ]
})
export class StudentContentListComponent implements OnInit {

  constructor(private service:StudentServiceService,private route:ActivatedRoute) { }
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
