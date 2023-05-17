import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import  {removeFromDb, deleteShoppingCart}  from "../../utilities/fakedb";
import {Link} from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/shipping');
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
                <Cart clearCart={clearCart} cart ={cart}>
                    <button onClick={handleNavigate} className='delete-btn'>Proceed to shipping <FontAwesomeIcon className='icon' icon={faArrowRight} /></button>
                </Cart>
            </div>
        </div>
    );
};

export default Order;