import React from 'react';
import { useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  CartItem as ItemType,
} from '../redux/CartSlice';

interface Props {
  item: ItemType;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} width="80" />

      <div>
        <h4>{item.name}</h4>
        <p>Unit Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <p><strong>Total: ${item.total}</strong></p>

        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
        <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
