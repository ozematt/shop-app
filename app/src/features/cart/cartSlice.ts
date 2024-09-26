import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

// import { EntityState } from "@reduxjs/toolkit";

export interface CartProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  amount: number;
  total?: number;
  quantity?: number;
}

const cartAdapter = createEntityAdapter({
  selectId: (product: CartProduct) => product.id,
});

const cartSlice = createSlice({
  name: "cart",
  initialState: cartAdapter.getInitialState({
    total: 0,
    quantity: 0,
  }),
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const item = action.payload;
      cartAdapter.addOne(state, item);
      state.total = Number((state.total + item.price).toFixed(2));
      state.quantity += 1;
    },
    updateCart: cartAdapter.updateOne,
    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const itemToRemove = state.entities[itemId];
      if (itemToRemove) {
        state.total = Number((state.total - itemToRemove.price).toFixed(2));
      }
      cartAdapter.removeOne(state, itemId);
    },
  },
});

export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

export const { selectAll: selectAllCart, selectById: selectByItemId } =
  cartAdapter.getSelectors<RootState>((state) => state.cart);
