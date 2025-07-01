import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route,Routes,useParams } from 'react-router-dom';

import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';

export default function App() {
return(
  <Router>
  <Routes>
  <Route path="/" element={<ProductCard />}></Route>
  <Route path="/product/:id" element={<ProductDetails />}></Route>
  </Routes>
  </Router>
);
} 