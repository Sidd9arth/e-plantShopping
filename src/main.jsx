import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import App from "./App";

const savedCart = localStorage.getItem("cart");

const store = configureStore({
    reducer: {
        cart: cartReducer
    },
    preloadedState: {
        cart: savedCart ? JSON.parse(savedCart) : []
    }
});

store.subscribe(() => {
    localStorage.setItem("cart", JSON.stringify(store.getState().cart));
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);