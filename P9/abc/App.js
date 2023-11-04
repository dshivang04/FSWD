import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import productsData from './products.json'; // JSON data with product information

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = product => {
    const existingCartItem = cartItems.find(item => item.product.id === product.id);

    if (existingCartItem) {
      const updatedCartItems = cartItems.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = product => {
    const updatedCartItems = cartItems.filter(item => item.product.id !== product.id);
    setCartItems(updatedCartItems);
  };

  const handleAdjustQuantity = (product, change) => {
    const updatedCartItems = cartItems.map(item =>
      item.product.id === product.id
        ? { ...item, quantity: item.quantity + change }
        : item
    );

    setCartItems(updatedCartItems.filter(item => item.quantity > 0));
  };

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <ProductList products={productsData} onAddToCart={handleAddToCart} />
          </Route>
          <Route path="/product/:productId">
            <ProductDetail products={productsData} onAddToCart={handleAddToCart} />
          </Route>
          <Route path="/cart">
            <Cart
              cartItems={cartItems}
              onRemoveFromCart={handleRemoveFromCart}
              onAdjustQuantity={handleAdjustQuantity}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
