import React from "react";
import Login from "./auth/login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Default from "./app"
import CategoryPhoto from './prodCat/Photocategory'

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Default/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/category/:Photography" element={<CategoryPhoto/>} />

    </Routes>
  </Router>
  
  );
}
