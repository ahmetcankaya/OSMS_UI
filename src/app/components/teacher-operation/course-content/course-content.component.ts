import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styles: [
  ]
})
export class CourseContentComponent implements OnInit {

  constructor(private service:TeacherServiceService,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,) { }
  contentForm:FormGroup
  id:number

  resetForm(courseID:number) {
    if (this.contentForm != null)
      this.contentForm.reset();
      this.contentForm = this.formBuilder.group({
      ContextID: 0,
      CourseID: this.id,
      Title: ["",Validators.required],
      Text: ["",Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(resp=>{
      this.id = +resp['CourseID']
      this.resetForm(this.id)
    })
  }


  onSubmit() {
      if (this.contentForm.valid) {
            this.service.addContext(this.contentForm.value)
            .subscribe(resp => {
              location.pathname=('/teacher')
        })
    }
  }

}
