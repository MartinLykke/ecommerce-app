
import React, { useContext } from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import { CartContext } from "../../../context/CartContext";

const Product = ({ product, onAddToCart, setPopupIsOpen }) => {
     const classes = useStyles();
    const [cart, setCart] = useContext(CartContext);
      function addToCart() {
    const productItem = {
      name: product.name,
      price: product.price.formatted,
      img: product.media.source,
      id: Math.random().toString(36).substr(2, 9),
    };
    setCart((currentState) => [...currentState, productItem]);
    addToCartPopUp();
  }
   function addToCartPopUp() {
    setPopupIsOpen(true);
  }

  return (
    <>
    <Card className={classes.root}>
 <CardMedia className={classes.media} image={product.media.source} title={product.name} /> <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={addToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
    </>
  );
};

export default Product;