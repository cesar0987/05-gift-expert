import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GiftExpertApp } from "./GifExpertApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GiftExpertApp />
  </StrictMode>
);
