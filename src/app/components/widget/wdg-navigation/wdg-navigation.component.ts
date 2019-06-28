import { Component, OnInit } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-wdg-navigation',
  template: `
    <div class="menu">
      <p class="menu-label">
        Navigation
      </p>
      <ul class="menu-list">
        <li><a class="navbar-item" routerLink="">Home</a></li>
        <li><a class="navbar-item" routerLink="about">About</a></li>
        <li><a class="navbar-item" routerLink="newsletter">Newsletter</a></li>
        <li>
        <p class="menu-label">
          Platform
        </p>
          <ul  class="menu-list">
            <li><a class="navbar-item" routerLink="platform/intro">Intro</a></li>
            <li><a class="navbar-item" routerLink="platform/cosa-serve">Cosa serve</a></li>
            <li><a class="navbar-item" routerLink="platform/canvas">Canvas</a></li>
            <li><a class="navbar-item" routerLink="platform/inizializziamo">Inizializziamo</a></li>
            <li><a class="navbar-item" routerLink="platform/creazione-personaggio">creazione personaggio</a></li>
          </ul>
        </li>
      </ul>
    </div>   
  `,
  styles: [`
    .menu-list {
      list-style: none;
      text-align: left;
    }

  `]
})
export class WdgNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
