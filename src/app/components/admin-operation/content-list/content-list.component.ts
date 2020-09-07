import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { ActivatedRoute } from '@angular/router';
import { Context } from 'src/app/models/context';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styles: [
  ]
})
export class AdminContentListComponent implements OnInit {

  constructor(private service:AdminServiceService,private route:ActivatedRoute) { }
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
