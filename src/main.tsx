import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import firebaseConfig from "../firebase.json";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
