export interface IChildren {
  children: React.ReactNode;
}

export interface IFuncLoading {
  startLoading(): void;
  stopLoading(): void;
}

export interface ILoadingContext extends IFuncLoading {
  loading: number;
}
