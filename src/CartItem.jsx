import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateQuantity, removeItem } from "../redux/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIncrement = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const itemTotal = item.quantity * item.price;

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} width="80" />
      <h4>{item.name}</h4>
      <p>Unit Price: ${item.price}</p>

      <p>Quantity: {item.quantity}</p>
      <p><strong>Total: ${itemTotal}</strong></p>

      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>

      <button onClick={() => dispatch(removeItem(item.id))}>
        Delete
      </button>

      <button onClick={() => navigate("/products")}>
        Continue Shopping
      </button>

      <button onClick={() => alert("Checkout coming soon!")}>
        Checkout
      </button>
    </div>
  );
};

export default CartItem;
