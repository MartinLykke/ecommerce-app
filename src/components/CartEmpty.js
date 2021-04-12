import React from "react";
import { CartDash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function CartEmpty() {
  return (
    <div className="mt-5 mb-5 ">
      <div className="d-flex justify-content-center p-1">
        <CartDash size={70} />
      </div>
      <h1 className="d-flex justify-content-center mt-3 mb-3">
        Your Cart is Empty
      </h1>
      <h6 className="d-flex justify-content-center mt-3 mb-3">
        Add something to fill your cart
      </h6>
      <div className="text-center">
        <Link to="/" className="w-50 btn btn-primary ">
          Continue shopping
        </Link>
      </div>
    </div>
  );
}

export default CartEmpty;
