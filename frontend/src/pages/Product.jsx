import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getProductById } from "../services/productService";

import { useDispatch } from "react-redux";

import { addToWishlist } from "../redux/slices/wishlistSlice";
import { setCart } from "../redux/slices/cartSlice";

import {
  addToCart,
  getCart,
} from "../services/cartService";

function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
    const dispatch = useDispatch();
    

  useEffect(() => {
    const fetchProduct =
      async () => {
        const data =
          await getProductById(id);

        setProduct(data);
      };

      

    fetchProduct();
  }, [id]);

  if (!product)
    return <h1>Loading...</h1>;

  const handleAddToCart = async () => {

  try {

    await addToCart(product._id);

    const cart = await getCart();

    dispatch(setCart(cart.items));

    alert("Added to Cart 🔥");

  } catch (error) {

    console.log(error);

    alert("Failed to add item");

  }

};


  return (
    <>
      <Navbar />

      <div className="product-details">
        <img
          src={product.images[0]}
          alt={product.name}
        />

        <div>
          <h1>{product.name}</h1>

          <p>
            {product.description}
          </p>

          <h2>
            ₹{product.price}
          </h2>

          <h3>
            Stock:
            {product.stock}
          </h3>
<button
  onClick={handleAddToCart}
>
  Add To Cart
</button>
          
          <button
            onClick={() =>
            dispatch(addToWishlist(product))
            }
          >
  ❤️ Wishlist
</button>

        </div>
      </div>
    </>
  );
}

export default Product;