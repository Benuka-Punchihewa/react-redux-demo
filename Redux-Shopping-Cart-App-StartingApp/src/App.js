import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import {sendCartData} from "./store/cart-slice";

let isFirstRender = true;

const App = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartItems = useSelector((state) => state.cart.itemsList);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }

    // const sendRequest = async () => {
    //   // sending the request
    //   dispatch(
    //     uiActions.showNotification({
    //       open: true,
    //       message: "Sending the Request",
    //       type: "warning",
    //     })
    //   );
    //   const res = await fetch(
    //     "https://redux-shopping-cart-d6baf-default-rtdb.firebaseio.com/cart-items.json",
    //     {
    //       method: "PUT",
    //       body: JSON.stringify(cartItems),
    //     }
    //   );

    //   const data = res.json();
    //   // Request successful
    //   dispatch(
    //     uiActions.showNotification({
    //       open: true,
    //       message: "Request Successful",
    //       type: "success",
    //     })
    //   );
    // };

    // sendRequest().catch((err) => {
    //   //send error
    //   dispatch(
    //     uiActions.showNotification({
    //       open: true,
    //       message: "Request Failed",
    //       type: "error",
    //     })
    //   );
    // });

    //using thunk pattern
    dispatch(sendCartData(cartItems));

  }, [cartItems, dispatch]);

  return (
    <div className="App">
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
        ></Notification>
      )}

      {isLoggedIn ? <Layout /> : <Auth />}
    </div>
  );
};

export default App;
