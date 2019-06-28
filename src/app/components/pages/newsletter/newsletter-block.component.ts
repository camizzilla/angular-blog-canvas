import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter-block',
  template: `
  <!-- START PROMO BLOCK -->
  <section class="hero is-info is-bold is-small promo-block">
    <div class="hero-body">
      <div class="has-text-centered">
        <h1 class="title">
          Se vuoi altri <strong>articoli escusivi</strong>, <br>iscriviti alla newsletter</h1>
        <a routerLink="newsletter"
          class="tag is-warning is-large is-rounded  is-uppercase has-text-weight-semibold">
          newsletter
        </a>
      </div>
    </div>
  </section>
  <!-- END PROMO BLOCK -->
  `,
  styles: []
})
export class NewsletterBlockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
