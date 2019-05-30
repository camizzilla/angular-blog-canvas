import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HighlightModule } from 'ngx-highlightjs';

import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';

import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewsletterComponent } from './components/pages/newsletter/newsletter.component';
import { IntroComponent } from './components/blog/platform/single-screen/intro/intro.component';
import { PlatformComponent } from './components/blog/platform/platform.component';
import { CosaServeComponent } from './components/blog/platform/single-screen/cosa-serve/cosa-serve.component';
import { CanvasBaseComponent } from './components/blog/platform/single-screen/canvas-base/canvas-base.component';
import { InizializzazioneComponent } from './components/blog/platform/single-screen/inizializzazione/inizializzazione.component';
import { CreazionePersonaggioComponent } from './components/blog/platform/single-screen/creazione-personaggio/creazione-personaggio.component';

/** 
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
export function hljsLanguages() {
  return [
    { name: 'typescript', func: typescript },
    { name: 'javascript', func: javascript },
    { name: 'css', func: css },
    { name: 'xml', func: xml }
  ];
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    NewsletterComponent,
    IntroComponent,
    PlatformComponent,
    CosaServeComponent,
    CanvasBaseComponent,
    InizializzazioneComponent,
    CreazionePersonaggioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HighlightModule.forRoot({ languages: hljsLanguages })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
