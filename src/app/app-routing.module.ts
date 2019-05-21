import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewsletterComponent } from './components/pages/newsletter/newsletter.component';

import { PlatformComponent } from './components/blog/platform/platform.component';
import { IntroComponent } from './components/blog/platform/single-screen/intro/intro.component';
import { CosaServeComponent } from './components/blog/platform/single-screen/cosa-serve/cosa-serve.component';
import { CanvasBaseComponent } from './components/blog/platform/single-screen/canvas-base/canvas-base.component';
import { InizializzazioneComponent } from './components/blog/platform/single-screen/inizializzazione/inizializzazione.component';

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
    children: []
  },
  {
    path: 'platform/intro',
    component: IntroComponent
  },
  {
    path: 'platform/cosa-serve',
    component: CosaServeComponent
  },
  {
    path: 'platform/canvas',
    component: CanvasBaseComponent
  },
  {
    path: 'platform/inizializziamo',
    component: InizializzazioneComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
