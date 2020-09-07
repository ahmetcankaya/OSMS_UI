import { Component, OnInit } from '@angular/core';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';
import { Course } from 'src/app/models/course';
import { FormGroup, FormBuilder,Validators, NgForm } from '@angular/forms';
import { Teacher } from 'src/app/models/teacher';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styles: [
  ]
})
export class TeacherDashboardComponent implements OnInit {

  constructor(private service:TeacherServiceService,private formBuilder:FormBuilder) { }
  courses:Course[]
  courseForm:FormGroup
  teacher:Teacher
  countCourse:number
  countStudent:number
  countContext:number

  resetForm() {
    if (this.courseForm != null)
      this.courseForm.reset();
      this.courseForm = this.formBuilder.group({
      TeacherID:1,
      Name: ["",Validators.required],
      Fees: [,Validators.required],
      Duration: [,Validators.required]
    });
  }

  formModel={
    TeacherID:0,
    Name:'',
    Fees:'',
    Duration:''
  }

  ngOnInit(): void {
    this.getTeacherToken();
    this.getCourseListByTeacherID();
    this.resetForm(); 
    this.getCourseCount();
    this.getStudentCount();
    this.getContextCount();
  }

  getTeacherToken(){
    this.service.getTeacherToken().subscribe(
      (resp:Teacher)=>{   
         this.service.teacher=resp
      }
    )
  }

  getCourseListByTeacherID(){
    this.service.getTeacherToken().subscribe(
      (resp:Teacher)=>{   
         this.teacher=resp
         this.service.getCourseListByTeacherID(this.teacher.TeacherID)
          .subscribe((resp:Course[])=>this.courses=resp)
      }
    )
    
  }

  addCourse(form:NgForm){
    if (form.valid) {
      form.value.TeacherID=this.teacher.TeacherID
      this.service.addCourse(form.value)
      .subscribe(resp => {
        this.ngOnInit()
        form.reset()
      })
    }
  }

  getCourseCount(){
    this.service.getTeacherToken().subscribe(
      (resp:Teacher)=>{   
         this.teacher=resp
         this.service.getCourseCount(this.teacher.TeacherID)
          .subscribe((count:number)=>{
            this.countCourse=count
          })
      }
    )
  }

  getStudentCount(){
    this.service.getTeacherToken().subscribe(
      (resp:Teacher)=>{   
         this.teacher=resp
         this.service.getStudentCount(this.teacher.TeacherID)
          .subscribe((count:number)=>{
            this.countStudent=count
          })
      }
    )
  }

  getContextCount(){
    this.service.getTeacherToken().subscribe(
      (resp:Teacher)=>{   
         this.teacher=resp
         this.service.getContextCount(this.teacher.TeacherID)
          .subscribe((count:number)=>{
            this.countContext=count
          })
      }
    )
  }

  delete(course:Course){
    this.service.deleteCourse(course)
    .subscribe(resp => {
      this.getCourseListByTeacherID();
    });
  }

}
