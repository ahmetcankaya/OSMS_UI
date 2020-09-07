import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Teacher } from 'src/app/models/teacher';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styles: [
  ]
})
export class TeacherComponent implements OnInit {

  constructor(private service:AdminServiceService,private formBuilder: FormBuilder) { }
  teacherForm: FormGroup;
  teachers: Teacher[];
  teacher:Teacher;

  resetForm(){
    if(this.teacherForm!=null)
      this.teacherForm.reset();
    this.teacherForm=this.formBuilder.group({
      TeacherID:0,
      Role:"TEACHER",
      Password: ["",Validators.required],
      UserName:["",Validators.required],
      Name:["",Validators.required],
      SureName:["",Validators.required],
      Qualification:["",Validators.required]
    });
  }

  ngOnInit(): void {
    this.resetForm();
    this.teacherList();
  }

  teacherList(){
    this.service.getTeachers().subscribe((resp:Teacher[])=>this.teachers=resp);
  }

  onSubmit(){
    if(this.teacherForm.value.TeacherID==0){
      if(this.teacherForm.valid){
        this.service.addTeacher(this.teacherForm.value)
        .subscribe(resp => {
          this.resetForm();
          this.teacherList();
        })
      }
    }
    else
    {
      this.service.updateTeacher(this.teacherForm.value)
      .subscribe(resp => {
        this.resetForm();
        this.teacherList();
      })
    }
  }

  showForEdit(teacher:Teacher){
    this.teacherForm.setValue(teacher)
  }

  delete(teacher:Teacher){
    this.service.deleteTeacher(teacher)
    .subscribe(resp => {
      this.teacherList();
    })
  }

}
