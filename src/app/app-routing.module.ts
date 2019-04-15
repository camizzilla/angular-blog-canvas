import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewsletterComponent } from './components/pages/newsletter/newsletter.component';

import { PlatformComponent } from './components/blog/platform/platform.component';
import { IntroComponent } from './components/blog/platform/single-screen/intro/intro.component';

import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'newsletter',
    component: NewsletterComponent
  },
  {
    path: 'platform',
    component: PlatformComponent,
    children: [
      {
        path: 'intro',
        component: IntroComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
