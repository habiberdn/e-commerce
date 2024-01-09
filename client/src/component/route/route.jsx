import React from "react";
import Login from "../buyer/auth/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryPhoto from "../buyer/prodCat/Photocategory";
import CategoryElec from "../buyer/prodCat/Eleccategory";
import CategoryFashion from '../buyer/prodCat/FashionCategory'
import Default from "../buyer/app";
import Product from '../buyer/product/Product'
import Seller from '../seller/seller'
import AddProduct from '../seller/product/addProduct'
import Loginseller from '../seller/auth/login'
import Allproduct from '../seller/product/myProduct'
import EditProduct from '../seller/product/editProduct'

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
        <Route path="/seller" element={<Seller />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/seller/login" element={<Loginseller />} />
        <Route path="/myproduct" element={<Allproduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />



      </Routes>
    </Router>
  );
}
