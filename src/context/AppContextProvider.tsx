/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from "react";

type AppContextType = {
  minPrice: number | null;
  setMinPrice: React.Dispatch<React.SetStateAction<number | null>>;
  maxPrice: number | null;
  setMaxPrice: React.Dispatch<React.SetStateAction<number | null>>;
};
const defaultValue: AppContextType = {
  minPrice: null,
  setMinPrice: () => {},
  maxPrice: null,
  setMaxPrice: () => {},
};
export const AppContext = createContext<AppContextType>(defaultValue);

function AppContextProvider({ children }: { children: React.ReactNode }) {
  // Tạo state để lưu trữ địa chỉ đã chọn
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  const appContextValue = {
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
  };
  return <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>;
}
export default AppContextProvider;
