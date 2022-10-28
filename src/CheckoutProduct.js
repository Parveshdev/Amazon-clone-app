import React from "react";
import "./CheckoutProduct.css";
function CheckoutProduct({ id, image, title, price, rating }) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct__price">
          <small>Rs</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
