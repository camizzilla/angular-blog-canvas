import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wdg-contacts',
  template: `
    <div class="content">
    <ul class="is-unstyled is-pulled-left">
        <li> 
          <app-wdg-social></app-wdg-social> 
        </li>
        <li>
          <a>
            <span class="icon">
              <i class="fas fa-home"></i>
            </span>
            camizzilla@gmail.com
          </a>
        </li>
        <li>
          <a routerLink="">Privacy policy</a>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .is-unstyled {
      list-style: none;
    }
    ul {
      margin-left: 0px;
    }
  `]
})
export class WdgContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
