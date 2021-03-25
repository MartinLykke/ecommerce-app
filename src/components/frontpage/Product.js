import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { StarFill } from "react-bootstrap-icons";
function Product() {
  const [, setCart] = useContext(CartContext);
  function addToCart() {
    const productItem = {
      name: "props.text",
      price: "props.price",
      id: Math.random().toString(36).substr(2, 9),
    };
    setCart((currentState) => [...currentState, productItem]);
  }
  return (
    <>
      <img
        src="https://oasis.opstatics.com/content/dam/oasis/default/product-specs/8t-green.png"
        alt="Product"
        className="img-fluid"
      />
      <h5>Title</h5>
      <p>Desc</p>
      <p>
        {" "}
        <StarFill />
        Rating
      </p>
      <p>Stock status</p>
      <p>Price,-</p>
      <button className="btn btn-light" onClick={addToCart}>
        Buy
      </button>
    </>
  );
}

export default Product;
