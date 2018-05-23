import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { WysiwygTextAreaComponent } from './wysiwyg-text-area.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    WysiwygTextAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    WysiwygTextAreaComponent
  ],
  providers: [],
  entryComponents: [
    WysiwygTextAreaComponent
  ]
})
export class WysiwygTextAreaModule { }
