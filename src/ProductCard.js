function ProductCard({ product }) {
  return (
    <div>
      <img src={product.image} alt={product.title} width="100" />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductCard;