import "./App.css";
import React from "react";
import AppRouter from "./routers/AppRouter";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <AppRouter />
      <Analytics />
    </>
  );
}

export default App;
