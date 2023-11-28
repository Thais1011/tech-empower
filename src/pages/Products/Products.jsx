import { useEffect, useState } from "react";
import classes from "./Products.module.css";
import Banner from "../../components/Banner/Banner";
import { Box, Grid, Modal } from "@mui/material";
import Card from "../../components/Layout/Card/Card";
import CartProvider from "../../store/CartProvider";
import CartIcon from "../Cart/CartIcon";

//estou criando uma API para usar definitiva com o server.json, essa é provisoria

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState(null);

  const handleOpen = (product) => {
    setProduct(product);
    setOpen(true);
  };

  const onGetProducts = async () => {
    const response = await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.products.slice(0, 10));
      });
    console.log(response);
  };

  useEffect(() => {
    onGetProducts();
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submitHandler");
  };

  return (
    <CartProvider>
      <div className={classes.productPage}>
        <Banner />
        <Card>
          <Grid container spacing={2}>
            {products.map((product) => {
              return (
                <Grid item onClick={() => handleOpen(product)} key={product.id}>
                  <h2>{product.title}</h2>
                  <img
                    className={classes["grid-image"]}
                    src={product.images[0]}
                    alt={product.title}
                  />
                  <p>{`R$ ${product.price}`}</p>
                </Grid>
              );
            })}
          </Grid>
        </Card>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={classes.box}>
            <h2>{product?.title}</h2>
            <img
              src={product?.images[0]}
              alt={product?.title}
              className={classes["box-image"]}
            />
            <p>{product?.price}</p>
            <p>{product?.description}</p>
            <button className={classes.button} onClick={submitHandler}>
              <span className={classes.icon}>
                <CartIcon />
              </span>
              Add Cart
            </button>
          </Box>
        </Modal>
      </div>
    </CartProvider>
  );
};
