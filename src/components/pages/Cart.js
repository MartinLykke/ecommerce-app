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
          <ul className="list-group list-group-flush">
            <li className="list-group-item ">
              <div className="d-flex justify-content-around">
                <img src={doc.img} alt={doc.name} className="w-25" />
                <p className="d-flex align-items-center"> {doc.name}</p>
                <p className="d-flex align-items-center">{doc.price}</p>
              </div>
            </li>
          </ul>
        ))}
    </div>
  );
}

export default Cart;
