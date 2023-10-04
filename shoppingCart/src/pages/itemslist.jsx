import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/action'

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems)
    console.log(cartItems)
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    const handleRemoveFromCart = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    return (
        <div>
            <div>
                <h2>Shopping Cart</h2>
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                            <button onClick={() => handleRemoveFromCart(item.id)}>Remove Cart</button>
                        </li>
                    ))}
                </ul>
                <p>Total Price: ${getTotalPrice()}</p>
            </div>
        </div>
    )
}

export default ShoppingCart;