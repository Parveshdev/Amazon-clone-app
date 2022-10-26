import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">your shopping Basket</h2>
        </div>
      </div>
      <div className="checkout_right">
        <h2>the sub total</h2>
      </div>
    </div>
  );
}

export default Checkout;
