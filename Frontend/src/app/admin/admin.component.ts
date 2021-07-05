import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router'
import { HeaderService } from '../header.service';
import { NavbarService } from '../navbarservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _auth:AuthService,
    private _router:Router,public header: HeaderService, public nav: NavbarService) { }

  ngOnInit(): void {
    this.header.hide();
    this.nav.show();
  }

}
