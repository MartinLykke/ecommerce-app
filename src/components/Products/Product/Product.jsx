
import React, { useContext } from "react";
import { Typography } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';
import { CartContext } from "../../../context/CartContext";



const Product = ({ product, onAddToCart, setPopupIsOpen }) => {
    const [cart, setCart] = useContext(CartContext);
      function addToCart() {
    const productItem = {
      name: product.name,
      price: product.price.formatted,
      img: product.media.source,
      id: Math.random().toString(36).substr(2, 9),
    };
    setCart((currentState) => [...currentState, productItem]);
    console.log(cart);
    addToCartPopUp();
  }
   function addToCartPopUp() {
    setPopupIsOpen(true);
  }
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <div className="card">
      <img className="img-fluid card-img-top" src={product.media.source} title={product.name} />
      <div className="card-body d-flex flex-column">
        <div >
          <h5 className="card-title">
            {product.name}
          </h5>
          <h5 >
            £{product.price.formatted}
          </h5>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </div>
            <button className="btn btn-primary mt-auto" onClick={addToCart}>
            Add to cart
          </button>
    </div>
  );
};

export default Product;