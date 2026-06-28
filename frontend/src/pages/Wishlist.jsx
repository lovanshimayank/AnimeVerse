import "./Wishlist.css";

import Navbar from "../components/Navbar";

import { useSelector, useDispatch } from "react-redux";

import { removeFromWishlist } from "../redux/slices/wishlistSlice";

import { addToCart } from "../redux/slices/cartSlice";

import { useNavigate } from "react-router-dom";

function Wishlist() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { wishlistItems } = useSelector((state) => state.wishlist);

  return (
    <>
      <Navbar />

      <div className="wishlist-page">
        <h1 className="wishlist-title">❤️ My Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <div className="empty-wishlist">
            <h2>Your Wishlist is Empty 💔</h2>

            <button className="store-btn" onClick={() => navigate("/store")}>
              Explore Store
            </button>
          </div>
        ) : (
          <div className="wishlist-grid">
            {wishlistItems.map((item) => (
              <div className="wishlist-card" key={item._id}>
                <img src={item.images[0]} alt={item.name} />

                <div className="wishlist-info">
                  <h2>{item.name}</h2>

                  <p className="price">₹{item.price}</p>

                  <p className="desc">
                    Save your favorite anime merchandise for later.
                  </p>

                  <div className="button-group">
                    <button
                      onClick={() => {
                        dispatch(addToCart(item));

                        dispatch(removeFromWishlist(item._id));
                      }}
                    >
                      🛒 Move To Cart
                    </button>

                    <button
                      className="remove-btn"
                      onClick={() => dispatch(removeFromWishlist(item._id))}
                    >
                      🗑 Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Wishlist;
