import { createRoot } from "react-dom/client";
import App from "./App";
import QueryProvider from "../lib/QueryProvider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <QueryProvider>
    <App />
  </QueryProvider>
)
