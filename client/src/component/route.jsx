import React from "react";
import Login from "./auth/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryPhoto from "./prodCat/PhotoCategory";
import CategoryElec from "./prodCat/ElecCategory";
import CategoryFashion from './prodCat/FashionCategory'
import Default from "./app";

export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Default />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category/Electronic" element={<CategoryElec />} />
          <Route path="/category/Photography" element={<CategoryPhoto />} />
          <Route path="/category/Fashion" element={<CategoryFashion />} />

        </Routes>
      </Router>
  );
}
