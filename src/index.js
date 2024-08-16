import React, { StrictMode } from "react"; //React
import { createRoot } from "react-dom/client"; //Library React untuk berkomunikasi dengan peramban web (React DOM
import "./styles.css"; //style untuk komponen Anda

import App from "./App"; //komponen yang Anda buat di App.js.

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
