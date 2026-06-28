import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <motion.div
      className="product-card"
      whileHover={{
        scale: 1.05,
        y: -10,
      }}
      onClick={() =>
        navigate(`/product/${product._id}`)
      }
    >
      <img
        src={product.images[0]}
        alt={product.name}
      />

      <div className="product-info">
        <h3>{product.name}</h3>

        <p>₹{product.price}</p>

        <span>
          Stock: {product.stock}
        </span>
      </div>
    </motion.div>
  );
}

export default ProductCard;