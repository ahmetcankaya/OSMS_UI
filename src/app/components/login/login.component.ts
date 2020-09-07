import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

}
