import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useHistory } from "react-router-dom";
import { Cart3 } from "react-bootstrap-icons";
import CartEmpty from "../CartEmpty";

function Cart() {
  const [cart, setCart] = useContext(CartContext);
  const history = useHistory();
  const removeFromOrder = (id) => {
    const newCart = cart.filter((Cart) => Cart.id !== id);
    setCart(newCart);
    console.log(cart);
  };

  function clearCart() {
    setCart([]);
  }
  return (
    <div className="container">
      {cart.length === 0 && <CartEmpty />}

      {cart.length !== 0 && (
        <div class="py-5 text-center">
          <Cart3 size={70} />
          <h2>Checkout</h2>
        </div>
      )}
      {cart !== 0 &&
        cart.map((doc) => (
          <li className="cartItem__details">
            <p>
              {doc.name}{" "}
              <span
                onClick={() => removeFromOrder(doc.id)}
                className="deleteItemBtn"
              >
                <i class="fas fa-trash fa-2x"></i>
              </span>{" "}
              <p>{doc.price}kr. </p>
            </p>

            <span className="removeButton"></span>
          </li>
        ))}
    </div>
  );
}

export default Cart;
