import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wdg-last-post',
  template: `
  <ul class="is-unstyled">
    <li>
      <a routerLink="platform/creazione-personaggio">
        <div class="card article">
          <div class="card-content">
            <div class="media-center">
              <figure class="image">
                <img src="https://i.ibb.co/4fCLc23/img-platform-single-Screen-art5.jpg" class="author-image"
                  alt="Creare un Platform articolo 5">
              </figure>
            </div>
            <div class="media">

              <div class="media-content has-text-centered">
                <p class="title article-title is-5">Come creare un <strong>platform</strong> single Screen <br> <i>Articolo
                    5</i></p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
    <li>
    <a routerLink="platform/inizializziamo">
        <div class="card article">
          <div class="card-content">
            <div class="media-center">
              <figure class="image">
                <img src="https://i.ibb.co/sKMkcPv/img-platform-single-Screen-art4.jpg" class="author-image" alt="Creare un Platform articolo 4">
              </figure>
            </div>
            <div class="media">

              <div class="media-content has-text-centered">
                <p class="title article-title is-5">Come creare un <strong>platform</strong> single Screen <br> <i>Articolo 4</i></p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
  <ul>
  
  `,
  styles: [`
    .is-unstyled {
      list-style: none;
    }

    ul {
      margin-left: 0px;
    }
    li {
      margin: 1rem;
    }
  `]
})
export class WdgLastPostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
