import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {News} from '../core/news';
import {LoadNews} from '../core/news.actions';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="load()">Load News</button>
    <loading-container [loadable]="news$ | async">
        <p *ngFor="let item of (news$ | async).entities">{{item}}</p>
    </loading-container>`
})
export class AppComponent {

  news$: Observable<News>;

  constructor(private store: Store<{news: News}>) {
    this.news$ = this.store.select(state => state.news);
  }

  load() {
    const action = new LoadNews();
    this.store.dispatch(action);
  }
}
