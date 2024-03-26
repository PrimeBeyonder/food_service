import React, { useContext, useState } from 'react'
import "./FoodItem.css";
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StroeContext';
const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems,
        removeFromCart,
        addToCart, } = useContext(StoreContext);
    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt="" />
                {
                    !cartItems[id] ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} /> :
                        <div className='food-item-counter'>
                            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                            <p>{cartItems[id]}</p>
                            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                        </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-des">{description}</p>
                <p className="food-item-price">$ {price}</p>
            </div>
        </div>

    )
}

export default FoodItem