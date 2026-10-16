import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default ProductList;