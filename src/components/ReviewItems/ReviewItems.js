import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
const ReviewItems = ({product, handleRemoveItem}) => {
    const {id, name, price, quantity, shipping, img} = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>Name: {name}</p>
                    <p><small>Price: <span>${price}</span></small></p>
                    <p><small>Shipping: <span>${shipping}</span></small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick = {() => handleRemoveItem(id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon = {faTrashCan}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;