import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes
import ProductListingPage from "./components/ProductListingPage";
import ProductDetailPage from "./components/ProductDetailPage";
import ShoppingCartPage from "./components/ShoppingCartPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {" "}
          {/* Wrap your Route components with Routes */}
          <Route path="/" element={<ProductListingPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;