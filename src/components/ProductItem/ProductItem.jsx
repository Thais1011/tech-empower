function ProductItem(product) {
  return (
    <div>
      <img src={product.images} alt={product.title} width={400} height={400} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductItem;
