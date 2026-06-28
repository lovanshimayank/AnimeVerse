import "./Cart.css";
import Navbar from "../components/Navbar";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} from "../redux/slices/cartSlice";

function Cart() {
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (acc, item) =>
      acc + (item.product?.price || 0) * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="cart-page">
        <h1 className="cart-title">
          🛒 Your Anime Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty 😢</h2>

            <button
              className="checkout-btn"
              onClick={() => navigate("/store")}
            >
              Explore Store
            </button>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">

              {cartItems.map((item) => (

                <div
                  key={item.product._id}
                  className="cart-card"
                >

                  <img
                    src={item.product?.images?.[0]}
                    alt={item.product?.name}
                    className="cart-image"
                  />

                  <div className="cart-info">

                    <h2>{item.product?.name}</h2>

                    <p className="cart-price">
                      ₹{item.product?.price}
                    </p>

                    <div className="qty-box">

<button
onClick={() =>
dispatch(
decreaseQuantity(
item.product._id
)
)
}
>
-
</button>


<span>
{item.quantity}
</span>


<button
onClick={() =>
dispatch(
increaseQuantity(
item.product._id
)
)
}
>
+
</button>

</div>

                    <button

className="remove-btn"

onClick={() =>
dispatch(
removeFromCart(
item.product._id
)
)
}

>
Remove
</button>

                  </div>

                </div>

              ))}

            </div>

            <div className="summary">

              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Items</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>FREE</span>
              </div>

              <div className="summary-row total-row">
                <strong>Total</strong>
                <strong>₹{total}</strong>
              </div>

              <Link to="/checkout">
                <button className="checkout-btn">
                  Proceed to Checkout →
                </button>
              </Link>

            </div>

          </div>
        )}

      </div>
    </>
  );
}

export default Cart;