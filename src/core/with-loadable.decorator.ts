import {onErrorReducer, onLoadingReducer, onSuccessReducer} from '../loadable/loadable';


function withLoadableEnhancer(reducer, {loadingActionType, successActionType, errorActionType}) {
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
    return reducer(state);
  };
}

export function withLoadable({loadingActionType, successActionType, errorActionType}) {
  return function (target, key, descriptor) {
    const oldReducer = descriptor.value;
    const newReducer = withLoadableEnhancer(oldReducer, {loadingActionType, successActionType, errorActionType});
    descriptor.value = function () {
      return newReducer.apply(this, arguments);
    };
  };
}
