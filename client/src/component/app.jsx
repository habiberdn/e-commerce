import React from "react";
import Login from "./auth/login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Default from "./default"

export default function App() {
  
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Default/>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
  
  );
}
