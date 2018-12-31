import {Action} from '@ngrx/store';

export enum NewsActionsTypes {
  Load = '[NEWS] LOAD',
  LoadSuccess = '[NEWS] LOAD SUCCESS',
  LoadError = '[NEWS] LOAD ERROR',
}

export class LoadNews implements Action {
  readonly type = NewsActionsTypes.Load;
}

export class LoadNewsSuccess implements Action {
  readonly type = NewsActionsTypes.LoadSuccess;
  constructor(public payload: {entities: string[]}) {}
}

export class LoadNewsError implements Action {
  readonly type = NewsActionsTypes.LoadError;
  constructor(public error: any) {}
}

export type NewActionsUnion = LoadNews | LoadNewsSuccess | LoadNewsError;
