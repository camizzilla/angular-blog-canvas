import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

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

import { AppCanvasComponent } from './components/canvas.component';
import { NewsletterBlockComponent } from './components/pages/newsletter/newsletter-block.component';
import { EndOnAllPageBlogComponent } from './components/blog/end-on-all-page-blog.component';
import { WdgPrivacyPolicyComponent } from './components/widget/wdg-privacy-policy/wdg-privacy-policy.component';
import { WdgContactsComponent } from './components/widget/wdg-contacts/wdg-contacts.component';
import { WdgNavigationComponent } from './components/widget/wdg-navigation/wdg-navigation.component';
import { WdgLastPostComponent } from './components/widget/wdg-last-post/wdg-last-post.component';
import { WdgSocialComponent } from './components/widget/wdg-social/wdg-social.component';

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
    CreazionePersonaggioComponent,
    AppCanvasComponent,
    NewsletterBlockComponent,
    EndOnAllPageBlogComponent,
    WdgPrivacyPolicyComponent,
    WdgContactsComponent,
    WdgNavigationComponent,
    WdgLastPostComponent,
    WdgSocialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HighlightModule.forRoot({ languages: hljsLanguages })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
