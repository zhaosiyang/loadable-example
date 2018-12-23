import {Action, ActionReducer} from '@ngrx/store';
import {Loadable, onLoadableError, onLoadableLoad, onLoadableSuccess} from './loadable';

export function withLoadable<T extends Loadable>(reducer: ActionReducer<T>, {loadingActionType, successActionType, errorActionType}): ActionReducer<T> {
  return (state: T, action: Action): T => {
    if (action.type === loadingActionType) {
      state = onLoadableLoad(state);
    }
    if (action.type === successActionType) {
      state = onLoadableSuccess(state);
    }
    if (action.type === errorActionType) {
      state = onLoadableError(state, (action as any).error);
    }
    return reducer(state, action);
  };
}
