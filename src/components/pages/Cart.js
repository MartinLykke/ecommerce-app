import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import { useHistory } from "react-router-dom";
import { Cart3, CartX } from "react-bootstrap-icons";
import CartEmpty from "../CartEmpty";
import { RemoveShoppingCart } from "@material-ui/icons";

function Cart() {
  const [cart, setCart] = useContext(CartContext);
  const history = useHistory();
  const removeFromCart = (id) => {
    const newCart = cart.filter((Cart) => Cart.id !== id);
    setCart(newCart);
  };

  function clearCart() {
    setCart([]);
  }
  return (
    <div className="container mb-5">
      {cart.length === 0 && <CartEmpty />}

      {cart.length !== 0 && (
        <div class="py-5 text-center">
          <Cart3 size={70} />
          <h2>Checkout</h2>
        </div>
      )}
      <div className="row">
        {cart.length != 0 &&
          cart.map((doc) => (
            <ul className="list-group list-group-flush border-top col-6 col-sm-12">
              <li className="list-group-item ">
                <div className="d-flex justify-content-around">
                  <img src={doc.img} alt={doc.name} className="w-25" />

                  <p className="d-flex align-items-center"> {doc.name}</p>
                  <p className="d-flex align-items-center">{doc.price}</p>
                  <div className="d-flex align-items-center text-right">
                    <CartX
                      onClick={() => removeFromCart(doc.id)}
                      size={60}
                      className="deleteBtn "
                    />
                  </div>
                </div>
              </li>
            </ul>
          ))}
      </div>
      {cart.length != 0 && (
        <button onClick={clearCart} className="clear-btn mb-5">
          <p>
            <RemoveShoppingCart /> Empty cart
          </p>
        </button>
      )}
    </div>
  );
}

export default Cart;
