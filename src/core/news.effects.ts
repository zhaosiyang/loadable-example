import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {LoadNewsError, LoadNewsSuccess, NewsActionsTypes} from './news.actions';

@Injectable()
export class NewsEffects {

  constructor(private actions$: Actions, private http: HttpClient) {}

  @Effect()
  loadNews = this.actions$.pipe(
    ofType(NewsActionsTypes.Load),
    switchMap(action => this.http.get('http://demo9695495.mockable.io/')),
    map((response: any) => new LoadNewsSuccess(response.todaysNews)),
    catchError(error => of(new LoadNewsError(error)))
  );
}
