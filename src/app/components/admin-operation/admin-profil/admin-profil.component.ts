import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-admin-profil',
  templateUrl: './admin-profil.component.html',
  styles: [
  ]
})
export class AdminProfilComponent implements OnInit {

  constructor(private service:AdminServiceService) { }
  admin:Admin

  ngOnInit(): void {
    this.getAdminToken()
  }

  
  getAdminToken(){
    this.service.getAdminToken().subscribe(
      (resp:Admin)=>{   
         this.admin=resp
      }
    )
  }


}
