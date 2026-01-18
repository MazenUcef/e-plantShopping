import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const items = useSelector(state => state.cart.items);

  const calculateTotalAmount = () => {
    return items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.length === 0 && <p>Your cart is empty</p>}

      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <h3>Total Cart Amount: ${calculateTotalAmount()}</h3>
    </div>
  );
};

export default Cart;
