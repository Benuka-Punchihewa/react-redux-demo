import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      //checking for existing items
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (!existingItem) {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.totalQuantity++;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.itemsList.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    setShowCart(state) {
      state.showCart = true;
    },
  },
});

export const sendCartData = (cartItems) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        open: true,
        message: "Sending the Request",
        type: "warning",
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        "https://redux-shopping-cart-d6baf-default-rtdb.firebaseio.com/cart-items.json",
        {
          method: "PUT",
          body: JSON.stringify(cartItems),
        }
      );

      const data = res.json();
      // Request successful
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Request Successful",
          type: "success",
        })
      );
    };
    
    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Request Failed",
          type: "error",
        })
      );
    }
  };
}

export const cartActions = cartSlice.actions;

export default cartSlice;
