import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

import { getAllProducts } from "../services/productService";

import "./Store.css";

function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />

      <div className="store-page">

        <div className="store-header">
          <h1>🛍 Anime Merchandise Store</h1>

          <p>
            Premium figures, hoodies, manga, posters,
            keychains and collectibles from your
            favourite anime universe.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>

      </div>
    </>
  );
}

export default Store;