
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from '../redux/action'


const ProductList = () => {
    const dispatch = useDispatch();
    const product = [
        { id: 1, name: "t-shirt", price: 200 },
        { id: 2, name: "bag", price: 1000 },
        { id: 3, name: "mobile", price: 7500 },
        { id: 4, name: "jeans", price: 800 },
    ]

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <>
            <div>
                <h2>Products</h2>
                <ul>
                    {product.map((product) => (
                        <li key={product.id}>
                            {product.name} - ${product.price}
                            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>)

}

export default ProductList