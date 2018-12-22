import {createDefaultLoadable, Loadable, onErrorReducer, onLoadingReducer, onSuccessReducer} from '../loadable/loadable';
import {Action} from '@ngrx/store';
import {LoadNewsError, LoadNewsSuccess, NewsActionsTypes} from './news.actions';

export interface News extends Loadable {
  entities: string[];
}

export function createDefaultTodos(): News {
  return {
    ...createDefaultLoadable(),
    entities: []
  };
}

export function newsReducer(state: News = createDefaultTodos(), action: Action): News {
  switch (action.type) {
    case NewsActionsTypes.Load:
      return onLoadingReducer(state);
    case NewsActionsTypes.LoadSuccess:
      return {
        ...onSuccessReducer(state),
        entities: (action as LoadNewsSuccess).entities
      };
    case NewsActionsTypes.LoadError:
      return onErrorReducer(state, (action as LoadNewsError).error);
    default:
      return state;
  }
}
