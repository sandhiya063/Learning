import { React,useState } from "react";
import "./Task3.css";
const Task3=()=> {
  const [product, setProduct] = useState({
    name: "",
    price: "",
  });
  const [products, setProducts] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [removeIndex, setRemoveIndex] = useState(null);
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.name === "" || product.price === "") {
      alert("Please fill all fields");
      return;
    }
    const newProduct = {
      name: product.name,
      price: Number(product.price),
      quantity: 1,
    };

    setProducts([...products, newProduct]);
    setProduct({
      name: "",
      price: "",
    });
  };
  const increaseQuantity = (index) => {
    const updatedProducts = products.map((product, i) => {
      if (i === index) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }

      return product;
    });

    setProducts(updatedProducts);
  };
  const decreaseQuantity = (index) => {
    const updatedProducts = products.map((product, i) => {
      if (i === index && product.quantity > 1) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }

      return product;
    });

    setProducts(updatedProducts);
  };
  const handleRemove = () => {
    setProducts(
      products.filter((product, index) => index !== removeIndex)
    );

    setRemoveIndex(null);
  };
  const cheapProducts = products.filter(
    (product) => product.price < 1000
  );

  return (
    <div className={darkMode ? "app dark" : "app"}>

      <h1>🛒 Shopping Cart</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <div className="box">
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter Product Name"
            value={product.name}
            onChange={handleChange}
          />
         <input
            type="number"
            name="price"
            placeholder="Enter Price"
            value={product.price}
            onChange={handleChange}
          />

          <button type="submit">
            Add Product
          </button>

        </form>
      </div>
      <div className="box">

        <h2>All Products</h2>

        {products.length === 0 ? (
          <p>No products added yet.</p>
        ) : (
          products.map((product, index) => (

            <div className="product" key={index}>

              <p>
                <b>Product:</b> {product.name}
              </p>

              <p>
                <b>Price:</b> ₹{product.price}
              </p>

              <p>
                <b>Quantity:</b> {product.quantity}
              </p>
              <button
                onClick={() => decreaseQuantity(index)}
              >
                −
              </button>

              <button
                onClick={() => increaseQuantity(index)}
              >
                +
              </button>
              <button
                onClick={() => setRemoveIndex(index)}
              >
                Remove
              </button>

            </div>

          ))
        )}

      </div>
      <div className="box">

        <h2>Products Below ₹1000</h2>

        {cheapProducts.length === 0 ? (
          <p>No products below ₹1000.</p>
        ) : (
          cheapProducts.map((product, index) => (

            <p key={index}>
              {product.name} - ₹{product.price}
            </p>

          ))
        )}

      </div>
      <div className="box">
       <h2>Shopping Rules</h2>
       <button onClick={() => setShowRules(!showRules)}>
          Shopping Rules
        </button>
        {showRules && (
          <div>

            <p>1. Check the product price before buying.</p>

            <p>2. Select the required quantity.</p>

            <p>3. Check your products before removing.</p>

            <p>4. Make sure the product details are correct.</p>

          </div>
        )}

      </div>
      {removeIndex !== null && (

        <div className="modal-background">

          <div className="modal">

            <h2>Are you sure?</h2>

            <p>
              Do you really want to remove this product?
            </p>

            <button
              onClick={() => setRemoveIndex(null)}
            >
              Cancel
            </button>

            <button onClick={handleRemove}>
              Remove
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Task3;