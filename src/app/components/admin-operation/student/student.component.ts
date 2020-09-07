import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [
  ]
})
export class StudentComponent implements OnInit {

  constructor(private service:AdminServiceService,private formBuilder:FormBuilder) { }
  studentForm:FormGroup
  students:Student[]
  paymentForID:number
  searchName:string
  
  resetForm(){
    if(this.studentForm!=null)
      this.studentForm.reset();
    this.studentForm =this.formBuilder.group({
      StudentID:0,
      Role:"STUDENT",
      Password: ["",Validators.required],
      UserName:["",Validators.required],
      Name:["",Validators.required],
      SureName:["",Validators.required],
      ContactNo:["",Validators.required]
    })
  }

  ngOnInit(): void {
    this.resetForm();
    this.studentList();
  }

  studentList(){
    this.service.getStudents().subscribe((resp:Student[])=>this.students=resp);
  }



  onSubmit(){
    if(this.studentForm.value.StudentID==0){
      if(this.studentForm.valid){
        this.service.addStudent(this.studentForm.value)
        .subscribe(resp=>{
          this.resetForm();
          this.studentList();
        })
      }
    }
    else
    {
      this.service.updateStudent(this.studentForm.value)
      .subscribe(resp => {
        this.resetForm();
        this.studentList();
      })
    }
  }

  showForEdit(student:Student){
    this.studentForm.setValue(student)
  }

  delete(student:Student){
    this.service.deleteStudent(student)
    .subscribe(resp => {
      this.studentList();
    });
  }

}
