import React, { useState } from "react";

function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState([]); // State to manage cart items

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button>Remove</button>
        </div>
      ))}
      <h3>Total: $0</h3> {/* Calculate total price */}
    </div>
  );
}

export default ShoppingCartPage;
