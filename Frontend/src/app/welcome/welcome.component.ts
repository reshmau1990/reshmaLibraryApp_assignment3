import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';
import { NavbarService } from '../navbarservice.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(public nav: NavbarService, public header: HeaderService) { }

  ngOnInit(): void {
    this.header.show();
    this.nav.hide();
  }

}
