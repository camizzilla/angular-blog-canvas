import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  classNavbarMenu: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbarMenu() {
    this.classNavbarMenu = !this.classNavbarMenu;
    console.log(this.classNavbarMenu);
  }

}
