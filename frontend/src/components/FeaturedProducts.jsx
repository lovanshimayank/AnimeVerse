import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAllProducts } from "../services/productService";

import "./FeaturedProducts.css";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data.slice(0, 4));
    };

    fetchProducts();
  }, []);

  return (
    <section className="featured-products">

      <h2>🔥 Featured Merchandise</h2>

      <div className="featured-grid">

        {products.map(product => (

          <Link
            key={product._id}
            to={`/product/${product._id}`}
            className="featured-card"
          >

            <img
              src={product.images[0]}
              alt={product.name}
            />

            <h3>{product.name}</h3>

            <p>₹{product.price}</p>

          </Link>

        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;