import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingOneContainerComponent } from './testing-one-container/testing-one-container.component';
import { UnlessDirective } from './unless.directive';
import { TestingTwoUnlessDirectiveComponent } from './testing-two-unless-directive/testing-two-unless-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingOneContainerComponent,
    UnlessDirective,
    TestingTwoUnlessDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
