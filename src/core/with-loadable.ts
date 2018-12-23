import {onErrorReducer, onLoadingReducer, onSuccessReducer} from '../loadable/loadable';
import {Action} from '@ngrx/store';

export interface Reducer<T> {
  (state: T, action: Action): T;
}


export function withLoadable<T>(reducer: Reducer<T>, {loadingActionType, successActionType, errorActionType}) {
  return (state, action) => {
    if (action.type === loadingActionType) {
      state = onLoadingReducer(state);
    }
    if (action.type === successActionType) {
      state = onSuccessReducer(state);
    }
    if (action.type === errorActionType) {
      state = onErrorReducer(state, action.error);
    }
    return reducer(state, action);
  };
}
