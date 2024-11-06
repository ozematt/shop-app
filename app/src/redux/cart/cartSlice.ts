import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../store";
import { type CartProduct } from "../../lib/types";
import { type Product } from "../../lib/types";

const cartAdapter = createEntityAdapter({
  selectId: (product: CartProduct) => product.id, //
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
      const existingItem = state.entities[item.id]; //assign if item already exist

      if (existingItem) {
        const updatedPieces = existingItem.pieces + 1;
        state.total = Number((state.total + item.price).toFixed(2)); //update total price
        state.quantity += 1;
        // if item exist update pieces
        cartAdapter.updateOne(state, {
          id: item.id,
          changes: { pieces: updatedPieces },
        });
      } else {
        const modifiedItemData: CartProduct = {
          id: item.id,
          title: item.title,
          image: item.image,
          price: item.price,
          pieces: 1,
        };

        cartAdapter.addOne(state, modifiedItemData); //add new item with modified data
        state.total = Number((state.total + item.price).toFixed(2)); //update total price
        state.quantity += 1; //update quantity
      }
    },
    updateCart: (
      state,
      action: PayloadAction<{ id: number; changes: Partial<CartProduct> }>
    ) => {
      const { id, changes } = action.payload;
      const existingItem = state.entities[id]; //check if item already exist

      if (existingItem) {
        //calculate the difference in quantity (in case the product quantity changes)
        const amountDifference = changes.pieces
          ? changes.pieces - existingItem.pieces
          : 0;
        state.total = Number(
          (state.total + existingItem.price * amountDifference).toFixed(2) //update total price
        );
        existingItem.pieces = changes.pieces ?? existingItem.pieces; //update product amount
        state.quantity += amountDifference; //update quantity
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const itemToRemove = state.entities[itemId]; //check if item already exist

      if (itemToRemove) {
        state.total = Number(
          (state.total - itemToRemove.price * itemToRemove.pieces).toFixed(2) // update total price
        );
        state.quantity -= itemToRemove.pieces; //update quantity
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

export const { selectAll: selectAllCart } = cartAdapter.getSelectors(
  (state: RootState) => state.cart
);
