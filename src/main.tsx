import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";
import { LayoutProvider } from "./contexts/Layout/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LayoutProvider>
      <App />
    </LayoutProvider>
  </React.StrictMode>
);
