import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string | number;
  name: string;
  price: number;
  image?: string;
  quantity: number;
  totalPrice: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Omit<CartItem, "quantity" | "totalPrice">>) {
      const item = state.items.find(i => i.id === action.payload.id);

      state.totalQuantity++;
      state.totalPrice += action.payload.price;

      if (!item) {
        state.items.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      } else {
        item.quantity++;
        item.totalPrice += item.price;
      }
    },

    removeItem(state, action: PayloadAction<string | number>) {
      const item = state.items.find(i => i.id === action.payload);
      if (!item) return;

      state.totalQuantity -= item.quantity;
      state.totalPrice -= item.totalPrice;
      state.items = state.items.filter(i => i.id !== action.payload);
    },

    updateQuantity(
      state,
      action: PayloadAction<{ id: string | number; quantity: number }>
    ) {
      const item = state.items.find(i => i.id === action.payload.id);
      if (!item) return;

      state.totalQuantity -= item.quantity;
      state.totalPrice -= item.totalPrice;

      item.quantity = action.payload.quantity;
      item.totalPrice = item.price * item.quantity;

      state.totalQuantity += item.quantity;
      state.totalPrice += item.totalPrice;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
