import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { StarFill } from "react-bootstrap-icons";
function Product(props) {
  const [cart, setCart] = useContext(CartContext);
  function addToCart() {
    const productItem = {
      name: "props.text",
      price: 4299,
      id: Math.random().toString(36).substr(2, 9),
    };
    setCart((currentState) => [...currentState, productItem]);
    console.log(cart);
    addToCartPopUp();
  }
  function addToCartPopUp() {
    props.setPopupIsOpen(true);
  }
  return (
    <>
      <div className="card">
        <img
          src="https://oasis.opstatics.com/content/dam/oasis/default/product-specs/8t-green.png"
          alt="Product"
          className="img-fluid card-img-top"
        />

        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          {props.showProductDesc && (
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          )}

          <button className="btn btn-primary" onClick={addToCart}>
            Add to cart
          </button>
          <p>
            <StarFill />
          </p>
          <p>Stock status</p>
          <p>Price,-</p>
        </div>
      </div>
    </>
  );
}

export default Product;
