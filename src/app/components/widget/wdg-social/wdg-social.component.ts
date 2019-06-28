import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wdg-social',
  template: `
    <div class="navbar-item is-flex-touch social">
    <a class="navbar-item" href="">
      <i class="fab fa-lg fa-facebook"></i>
    </a>
    <a class="navbar-item" href="">
      <i class="fab fa-lg fa-instagram"></i>
    </a>
    <a class="navbar-item" href="">
      <i class="fab fa-lg fa-linkedin"></i>
    </a>
    <a class="navbar-item" href="">
      <i class="fab fa-lg fa-git-square"></i>
    </a>
</div>
  `,
  styles: []
})
export class WdgSocialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
