import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { Admin } from 'src/app/models/admin';
import {
  FormGroup,
  FormBuilder,
  Validators,
  
} from "@angular/forms";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: [
  ]
})
export class AdminComponent implements OnInit {

  constructor(private service:AdminServiceService,private formBuilder: FormBuilder) { }
  admins:Admin[]
  adminForm: FormGroup
  countAdmin:number
  countTeacher:number
  countStudent:number
  countCourse:number
  countContext:number
  resetForm() {
    if (this.adminForm != null)
      this.adminForm.reset();
      this.adminForm = this.formBuilder.group({
      AdminID: 0,
      Role:"ADMIN",
      Password: ["",Validators.required],
      UserName: ["",Validators.required],
      Name: ["",Validators.required],
      SureName: ["",Validators.required]
    });
  }

  ngOnInit(): void {
    this.resetForm()
    this.adminList()
    this.getCountAdmin()
    this.getCountTeacher()
    this.getCountStudent()
    this.getCountCourse()
    this.getCountContext()
  }

  adminList(){
    this.service.getAdmins().subscribe((resp :Admin[])=> this.admins=resp);
  }

  onSubmit() {
    if (this.adminForm.value.AdminID == 0) {
      if (this.adminForm.valid) {
            this.service.addAdmin(this.adminForm.value)
            .subscribe(resp => {
              this.ngOnInit()
        })
      }
    }
    else {
      this.service.updateAdmin(this.adminForm.value)
      .subscribe(data => {
        this.ngOnInit()
      });
    }
  }

  showForEdit(admin: Admin) {
    this.adminForm.setValue(admin)
  }

  delete(admin:Admin) {
    this.service.deleteAdmin(admin).subscribe(resp=>{
      this.ngOnInit()
     });
  }

  getCountAdmin(){
    this.service.getCountAdmin().subscribe(
      (count:number)=>{   
         this.countAdmin=count
      }
    )
  }

  getCountTeacher(){
    this.service.getCountTeacher().subscribe(
      (count:number)=>{   
         this.countTeacher=count
      }
    )
  }

  getCountStudent(){
    this.service.getCountStudent().subscribe(
      (count:number)=>{   
         this.countStudent=count
      }
    )
  }

  getCountCourse(){
    this.service.getCountCourse().subscribe(
      (count:number)=>{   
         this.countCourse=count
      }
    )
  }

  getCountContext(){
    this.service.getCountContext().subscribe(
      (count:number)=>{   
         this.countContext=count
      }
    )
  }

}
