import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {WysiwygTextAreaModule} from './wysiwyg-text-area/wysiwyg-text-area.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    WysiwygTextAreaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
