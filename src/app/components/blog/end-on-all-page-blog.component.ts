import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-end-on-all-page-blog',
  template: `
  <p>
    <span class="has-text-weight-bold">
    Per eventuali suggerimenti correzioni o semplicemente se vi
    sentite soli e volete fare due chiacchiere, qui sotto trovate i miei contatti</span>.
    <figure class="image">
      <img src="https://i.ibb.co/w0zkT6T/arrow-Metro.jpg" alt="arrow down" />
    </figure>
  </p>
  `,
  styles: []
})
export class EndOnAllPageBlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
