import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      const token = localStorage.getItem("token");

      const res = await axios.get("https://animeverse-gsox.onrender.com/api/orders/my", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setOrders(res.data);
    };

    loadOrders();
  }, []);

  return (
    <>
      <Navbar />

      <div className="orders-page">
        <h1 className="orders-title">My Orders 📦</h1>

        {orders.length === 0 ? (
          <h2>No Orders Yet</h2>
        ) : (
          orders.map((order) => (
            <div className="order-card" key={order._id}>
              <div className="order-header">
                <h2>Order ID</h2>

                <span>{order.orderStatus}</span>
              </div>

              <h3>Total ₹{order.totalAmount}</h3>

              <div className="order-products">
                {order.products.map((product, index) => (
                  <div className="order-product" key={index}>
                    <p>{product.name}</p>

                    <p>x {product.quantity}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Orders;
