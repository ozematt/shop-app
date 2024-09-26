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
      state.total += item.price;
      state.quantity += 1;
    },
    updateCart: cartAdapter.updateOne,
    removeFromCart: cartAdapter.removeOne,
  },
});

export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

export const { selectAll: selectAllCart, selectById: selectByItemId } =
  cartAdapter.getSelectors<RootState>((state) => state.cart);
