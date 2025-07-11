import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SWRConfig } from "swr";
import "./index.css";
import App from "./App.tsx";
import api from "./utils/api.ts";

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
      <App />
    </SWRConfig>
  </StrictMode>
);
