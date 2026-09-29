import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
} from "./CartSlice";

function CartItem() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const totalAmount = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div>
            <nav>
                <a href="/">Home</a>
                <a href="/plants">Plants</a>
                <a href="/cart">Cart</a>
            </nav>

            <h1>Shopping Cart</h1>

            {cart.length === 0 ? (
                <div>
                    <p>Your cart is empty.</p>
                    <a href="/plants">Continue Shopping</a>
                </div>
            ) : (
                <div>
                    {cart.map(item => (
                        <div key={item.id}>
                            <img
                                src={item.image}
                                alt={item.name}
                                width="150"
                                height="150"
                            />

                            <h2>{item.name}</h2>

                            <p>Unit Price: ${item.price}</p>

                            <button
                                onClick={() =>
                                    dispatch(decreaseQuantity(item.id))
                                }
                            >
                                -
                            </button>

                            <span> {item.quantity} </span>

                            <button
                                onClick={() =>
                                    dispatch(increaseQuantity(item.id))
                                }
                            >
                                +
                            </button>

                            <p>
                                Total: $
                                {(item.price * item.quantity).toFixed(2)}
                            </p>

                            <button
                                onClick={() =>
                                    dispatch(removeFromCart(item.id))
                                }
                            >
                                Delete
                            </button>
                        </div>
                    ))}

                    <h2>
                        Total Cart Amount: ${totalAmount.toFixed(2)}
                    </h2>

                    <button onClick={() => alert("Coming Soon")}>
                        Checkout
                    </button>

                    <a href="/plants">Continue Shopping</a>
                </div>
            )}
        </div>
    );
}

export default CartItem;