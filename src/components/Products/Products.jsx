
import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart, setPopupIsOpen }) => {
  const classes = useStyles();

  if (!products.products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} setPopupIsOpen={setPopupIsOpen} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;