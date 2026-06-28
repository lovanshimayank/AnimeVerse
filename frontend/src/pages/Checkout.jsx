import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";


import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);

  const [shipping, setShipping] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const total = cartItems.reduce(
    (acc, item) =>
      acc + (item.product?.price ?? item.price ?? 0) * item.quantity,
    0,
  );

  const handleChange = (e) => {
    setShipping({
      ...shipping,

      [e.target.name]: e.target.value,
    });
  };

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");

      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
 const placeOrder = async () => {
  try {

    const res = await loadRazorpay();

    if (!res) {
      alert("Failed to load Razorpay");
      return;
    }

    const token = localStorage.getItem("token");

    const { data } = await axios.post(
      "https://animeverse-gsox.onrender.com/api/payment/create",
      {
        amount: total,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Razorpay Order =", data);

console.log("Amount from backend =", data.order.amount);

console.log("Amount in rupees =", data.order.amount / 100);

console.log("Order ID =", data.order.id);


    const options = {
      key: "rzp_test_8CxHBNuMQt1Qn8",

      amount: data.order.amount,

      currency: data.order.currency,

      order_id: data.order.id,

      name: "AnimeVerse",

      description: "Anime Merchandise",

      prefill: {
        name: shipping.name,
        contact: shipping.phone,
      },

      theme: {
        color: "#6C63FF",
      },

      handler: async function (response) {

        console.log("PAYMENT SUCCESS");

        console.log(response);

        await createOrderAfterPayment();

      },

      modal: {
        ondismiss: function () {
          console.log("Payment Closed");
        },
      },
    };

    console.log("RAZORPAY OPTIONS =", options);
    const razor = new window.Razorpay(options);

    razor.on("payment.failed", function (response) {
      console.log(response.error);
      alert(response.error.description);
    });

    razor.open();

  } catch (err) {

    console.log(err);

  }
};

  const createOrderAfterPayment = async () => {

    const token = localStorage.getItem("token");

    await axios.post(
        "https://animeverse-gsox.onrender.com/api/orders",
        {
            shippingAddress: shipping,
        },
        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
    );

    alert("Order Placed Successfully 🔥");

    navigate("/orders");

};

  

  return (
    <>
      <Navbar />

      <div className="checkout-container">
        <motion.div
          className="checkout-card"
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          <h1>Checkout 🛒</h1>

          <div className="shipping">
            <h2>Shipping Details</h2>

            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
            />

            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
            />

            <textarea
              name="address"
              placeholder="Address"
              onChange={handleChange}
            />
          </div>

          <div className="order-summary">
            <h2>Your Anime Loot</h2>

            {cartItems.map((item) => (
              <div
                className="checkout-item"
                key={item.product?._id || item._id}
              >
                <img
                  src={item.product?.images?.[0] || item.images?.[0]}
                  alt={item.product?.name || item.name}
                />

                <div>
                  <h3>{item.product?.name || item.name}</h3>

                  <p>Qty: {item.quantity}</p>

                  <p>₹ {item.product?.price || item.price}</p>
                </div>
              </div>
            ))}

            <h2>Total: ₹{total}</h2>

            <button onClick={placeOrder}>PLACE ORDER 🔥</button>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Checkout;
