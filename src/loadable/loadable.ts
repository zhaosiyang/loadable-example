
export interface Loadable {
  loading: boolean;
  success: boolean;
  error: any;
}

export function createDefaultLoadable(): Loadable {
  return {
    loading: false,
    success: false,
    error: null,
  };
}

export function onLoadingReducer<T extends Loadable>(loadable: T): T {
  return {
    ...(loadable as any),
    loading: true,
    success: false,
    error: null,
  } as T;
}

export function onSuccessReducer<T extends Loadable>(loadable: T): T {
  return {
    ...(loadable as any),
    loading: false,
    success: true,
    error: null,
  } as T;
}

export function onErrorReducer<T extends Loadable>(loadable: T, error: any): T {
  return {
    ...(loadable as any),
    loading: false,
    success: false,
    error: error,
  } as T;
}
