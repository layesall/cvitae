import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Import of the components

import Welcome from "./Welcome/Welcome";
import Notfound from "./Notfound/Notfound";

export default function App() {
  return (
    <div className="app-component">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}
