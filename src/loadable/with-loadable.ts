import {Action} from '@ngrx/store';
import {onLoadableError, onLoadableLoad, onLoadableSuccess} from './loadable';

export type Reducer<T> =  (state: T, action: Action) => T;

export function withLoadable<T>(reducer: Reducer<T>, {loadingActionType, successActionType, errorActionType}) {
  return (state, action) => {
    if (action.type === loadingActionType) {
      state = onLoadableLoad(state);
    }
    if (action.type === successActionType) {
      state = onLoadableSuccess(state);
    }
    if (action.type === errorActionType) {
      state = onLoadableError(state, action.error);
    }
    return reducer(state, action);
  };
}
