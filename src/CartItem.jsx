import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  total: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Omit<CartItem, 'quantity' | 'total'>>) {
      const item = state.items.find(i => i.id === action.payload.id);

      state.totalQuantity++;
      state.totalAmount += action.payload.price;

      if (!item) {
        state.items.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        });
      } else {
        item.quantity++;
        item.total += item.price;
      }
    },

    increaseQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find(i => i.id === action.payload);
      if (!item) return;

      item.quantity++;
      item.total += item.price;
      state.totalQuantity++;
      state.totalAmount += item.price;
    },

    decreaseQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find(i => i.id === action.payload);
      if (!item || item.quantity === 1) return;

      item.quantity--;
      item.total -= item.price;
      state.totalQuantity--;
      state.totalAmount -= item.price;
    },

    removeItem(state, action: PayloadAction<number>) {
      const item = state.items.find(i => i.id === action.payload);
      if (!item) return;

      state.totalQuantity -= item.quantity;
      state.totalAmount -= item.total;
      state.items = state.items.filter(i => i.id !== action.payload);
    },
  },
});

export const {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;
