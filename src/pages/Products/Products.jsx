import { useEffect, useState } from "react";
import classes from "./Products.module.css";
import Banner from "../../components/Banner/Banner";
import { Box, Grid, Modal } from "@mui/material";

//aqui dentro nao havera uma pagina de detalhamento de produtos, e sim um modal que abrirá ao clicar em um produto

//estou criando uma API para usar, essa de pokemon não está boa para o que eu quero fazer

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

  return (
    <div className={classes.productPage}>
      <Banner />

      <Grid container spacing={2}>
        {products.map((product) => {
          return (
            <Grid item onClick={() => handleOpen(product)} key={product.id}>
              <h2>{product.title}</h2>
              <img src={product.images[0]} alt={product.title} />
              <p>{product.price}</p>
            </Grid>
          );
        })}
      </Grid>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <h2>{product?.title}</h2>
          {/* <img src={product?.images[0]} alt={product?.title} /> */}
          <p>{product?.price}</p>
          <p>{product?.description}</p>
          <button>Add Cart</button>
        </Box>
      </Modal>
    </div>
  );
};
