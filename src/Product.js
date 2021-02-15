import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{basket},dispatch]=useStateValue()
  const addToBasket=(e)=>{
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id,title,price,image,rating
      }
    })
    }
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label={i}>
                ⭐
              </span>
            ))}
        </div>
      </div>
      <img  src={image} alt="iron" />
      <button onClick={e=>addToBasket(e)} >Add to Basket</button>
    </div>
  );
}
export default Product;
