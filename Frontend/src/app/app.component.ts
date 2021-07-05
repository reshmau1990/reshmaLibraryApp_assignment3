import { Component } from '@angular/core';
import { NavbarService } from './navbarservice.service';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Library';
  constructor(public nav: NavbarService, public header: HeaderService){}

  ngOnInit() {
    this.header.hide();
    this.nav.hide();
  }
}
