import { createContext, useContext, useState } from "react";

import { IChildren, ILoadingContext } from "./interfacesLoading";

const LoadingContext = createContext<ILoadingContext>({} as ILoadingContext);

const LoadingProvider = ({ children }: IChildren) => {
  const [loading, loadingSet] = useState<number>(0);

  const startLoading = () => loadingSet((loading) => loading + 1);

  const stopLoading = () => loadingSet((loading) => loading - 1);

  return (
    <LoadingContext.Provider value={{ loading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

function UseLoading(): ILoadingContext {
  const context = useContext(LoadingContext);
  return context;
}

export { LoadingProvider, UseLoading };
