import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {News} from '../core/news';
import {LoadNews} from '../core/news.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  news$: Observable<News>;

  constructor(private store: Store<{news: News}>) {
    this.news$ = this.store.select(state => state.news);
  }

  load() {
    this.store.dispatch(new LoadNews());
  }
}
