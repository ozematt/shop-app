import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { Product } from "../products/productsSlice";

export interface CartProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  pieces: number;
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
    addToCart: (state, action: PayloadAction<Product>) => {
      const item = action.payload;

      const existingItem = state.entities[item.id];

      if (existingItem) {
        const updatedAmount = existingItem.pieces + 1;

        state.total = Number((state.total + item.price).toFixed(2));

        state.quantity += 1;

        cartAdapter.updateOne(state, {
          id: item.id,
          changes: { pieces: updatedAmount },
        });
      } else {
        const modifiedItemData: CartProduct = {
          id: item.id,
          title: item.title,
          image: item.image,
          price: item.price,
          pieces: 1,
        };
        //add item
        cartAdapter.addOne(state, modifiedItemData);

        //update total price,
        state.total = Number((state.total + item.price).toFixed(2));
        //update quantity
        state.quantity += 1;
      }
    },
    updateCart: (
      state,
      action: PayloadAction<{ id: number; changes: Partial<CartProduct> }>
    ) => {
      const { id, changes } = action.payload;
      //check if item already exist
      const existingItem = state.entities[id];

      if (existingItem) {
        //calculate the difference in quantity (in case the product quantity changes)
        const amountDifference = changes.pieces
          ? changes.pieces - existingItem.pieces
          : 0;

        //update total price if item exist
        state.total = Number(
          (state.total + existingItem.price * amountDifference).toFixed(2)
        );

        //update product amount
        existingItem.pieces = changes.pieces ?? existingItem.pieces;

        //update quantity
        state.quantity += amountDifference;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;

      //check if item already exist
      const itemToRemove = state.entities[itemId];

      if (itemToRemove) {
        // update total price
        state.total = Number(
          (state.total - itemToRemove.price * itemToRemove.pieces).toFixed(2)
        );
        //update quantity
        state.quantity -= itemToRemove.pieces;
      }
      cartAdapter.removeOne(state, itemId);
    },
    removeAllFromCart: (state) => {
      cartAdapter.removeAll(state);
      state.total = 0; //reset total
      state.quantity = 0; // reset quantity
    },
  },
});

export const { addToCart, updateCart, removeFromCart, removeAllFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;

export const {
  selectAll: selectAllCart,
  selectIds: selectAllIdsInCart,
  selectById: selectByItemId,
} = cartAdapter.getSelectors<RootState>((state) => state.cart);
