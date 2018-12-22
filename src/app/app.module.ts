import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {NewsEffects} from '../core/news.effects';
import {newsReducer} from '../core/news';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({news: newsReducer}),
    HttpClientModule,
    EffectsModule.forRoot([NewsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
