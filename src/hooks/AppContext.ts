import { createContext, useContext } from "react";
import { AppProviderValue } from "../shared/interfaces";

export const AppContext = createContext<AppProviderValue>(
  {} as AppProviderValue
);

export const useAppContext = () => {
  return useContext(AppContext);
};
