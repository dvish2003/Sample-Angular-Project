import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {MainComponent} from './main/main.component';
import { Navigation } from './navigation/navigation';
import { Content } from './content/content';
import { TemplateTest } from './template-test/template-test';

@NgModule({
  declarations: [
    App,
    Content,
    TemplateTest
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainComponent,
    Navigation,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
