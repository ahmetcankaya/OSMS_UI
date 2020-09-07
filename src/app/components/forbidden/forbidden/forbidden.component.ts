import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styles: [
  ]
})
export class ForbiddenComponent implements OnInit {

  constructor(private route:Router,private location:Location) { }

  ngOnInit(): void {
  }

}
