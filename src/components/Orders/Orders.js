import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import  {removeFromDb, deleteShoppingCart}  from "../../utilities/fakedb";
import {Link} from 'react-router-dom'
const Order = () => {
    const {products, previousCart} = useLoaderData();
    const [cart, setCart] = useState(previousCart);

    const handleRemoveItem =(id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

        const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className="shop-container">
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItems key={product.id} handleRemoveItem = {handleRemoveItem} product = {product} />)
                }
                {
                    cart.length === 0 && <h2>No itmes for review <Link to='/'>Shop More</Link></h2>
                }
            </div>

            <div className="cart-container">
                <Cart clearCart={clearCart} cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;