import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SWRConfig } from "swr";
import "./index.css";
import App from "./App.tsx";
import api from "./utils/api.ts";
import AppContextProvider from "./context/AppContextProvider.tsx";
import { SnackbarProvider } from "notistack";

const fetcher = (url: string) => api.get(url).then((res) => res.data);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SWRConfig
      value={{
        fetcher,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        shouldRetryOnError: false,
      }}
    >
      <AppContextProvider>
        <SnackbarProvider
          variant="success"
          maxSnack={3}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={3000}
        >
          <App />
        </SnackbarProvider>
      </AppContextProvider>
    </SWRConfig>
  </StrictMode>
);
