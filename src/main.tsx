import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  ReactQueryDevtools,
  ReactQueryDevtoolsPanel,
} from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/*const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 1000, //10s
      cacheTime: 300_000, //5s
      retry: 3,
    },
  },
});*/

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
