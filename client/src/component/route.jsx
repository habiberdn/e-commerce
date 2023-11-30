import React from "react";
import Login from "./auth/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryPhoto from "./prodCat/Photocategory";
import CategoryElec from "./prodCat/Eleccategory";
import CategoryFashion from './prodCat/FashionCategory'
import Default from "./app";
import Product from './product/Product'

export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/:product" element={<Product />} />
          <Route path="/" element={<Default />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category/Electronic" element={<CategoryElec />} />
          <Route path="/category/Photography" element={<CategoryPhoto />} />
          <Route path="/category/Fashion" element={<CategoryFashion />} />


        </Routes>
      </Router>
  );
}
