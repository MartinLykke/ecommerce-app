import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';
import useStyles from './styles';
import { Paper } from '@material-ui/core';

const Products = ({ products, onAddToCart, setPopupIsOpen }) => {
 const classes = useStyles();

  if (!products.products.length) return <p>Loading...</p>;

  return (
    <>
    <div >
  <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4} direction={"row"}>
        {products.products.map((product) => (
          <Grid style={{width: '500px'}} key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} setPopupIsOpen={setPopupIsOpen}/>
          </Grid>
        ))}
      </Grid>
    </main>
    </div>
    </>
  );
};

export default Products;