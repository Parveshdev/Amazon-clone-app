import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            {" "}
            <p>
              Subtotal(0 items): <strong>{"Rs"}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contain gifts
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs"}
      />
      <button>Procced To Checkout</button>
    </div>
  );
}

export default Subtotal;
