import { Component, OnInit } from '@angular/core';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';
import { Teacher } from 'src/app/models/teacher';

@Component({
  selector: 'app-teacher-profil',
  templateUrl: './teacher-profil.component.html',
  styles: [
  ]
})
export class TeacherProfilComponent implements OnInit {

  constructor(private service:TeacherServiceService) { }
  teacher:Teacher

  ngOnInit(): void {
    this.getTeacherToken();
  }

  // getTeacherProfil(){
  //   this.service.getTeacherProfil()
  //   .subscribe((resp:Teacher)=>this.teacher=resp)
  // }

  getTeacherToken(){
    this.service.getTeacherToken().subscribe(
      (resp:Teacher)=>{   
         this.teacher=resp
         console.log(this.teacher)
      }
    )
  }

}
