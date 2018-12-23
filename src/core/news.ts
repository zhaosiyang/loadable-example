import {createDefaultLoadable, Loadable} from '../loadable/loadable';
import {Action} from '@ngrx/store';
import {LoadNewsSuccess, NewsActionsTypes} from './news.actions';
import {withLoadable} from '../loadable/with-loadable';

export interface News extends Loadable {
  entities: string[];
}

export function createDefaultNews(): News {
  return {
    ...createDefaultLoadable(),
    entities: []
  };
}

function baseNewsReducer(state: News = createDefaultNews(), action: Action): News {
  switch (action.type) {
    case NewsActionsTypes.LoadSuccess:
      return {
        ...state,
        entities: (action as LoadNewsSuccess).entities
      };
    default:
      return state;
  }
}

export function newsReducer(state: News, action: Action): News {
  return withLoadable(baseNewsReducer, {
    loadingActionType: NewsActionsTypes.Load,
    successActionType: NewsActionsTypes.LoadSuccess,
    errorActionType: NewsActionsTypes.LoadError,
  })(state, action);
}
