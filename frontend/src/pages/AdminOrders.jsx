import { useEffect, useState} from "react";
import axios from "axios";
import "./AdminOrders.css";
function AdminOrders() {
  const [orders, setOrders] = useState([]);

  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  

 useEffect(() => {
  const loadOrders = async () => {
    const res = await axios.get(
      "https://animeverse-gsox.onrender.com/api/orders/admin",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setOrders(res.data);
  };

  loadOrders();
}, [token]);

 const updateStatus = async (id, status) => {
  console.log("BUTTON CLICKED");

  try {
    const res = await axios.put(
      `http://animeverse-gsox.onrender.com/api/orders/${id}`,
      { status },
      { headers }
    );

    console.log("SERVER RESPONSE:", res.data);

    loadOrders();

  } catch (err) {
    console.log("AXIOS ERROR");
    console.log(err.response);
    console.log(err.response?.data);
  }
};

  return (

<div className="admin-orders-page">

<h1>
📦 AnimeVerse Orders
</h1>


{
orders.length===0 ?

(
<h2 className="no-orders">
No Orders Found
</h2>
)

:

orders.map((order)=>(


<div
className="order-card"
key={order._id}
>


<h3>
👤 {order.user?.name}
</h3>


<p>
💰 Amount:
₹ {order.totalAmount}
</p>


<p className="order-status">
Status:
{order.orderStatus}
</p>



<div className="order-actions">


<button
onClick={()=>updateStatus(
order._id,
"Processing"
)}
>
⚙ Processing
</button>



<button
onClick={()=>updateStatus(
order._id,
"Shipped"
)}
>
🚚 Shipped
</button>



<button
onClick={()=>updateStatus(
order._id,
"Delivered"
)}
>
✅ Delivered
</button>


</div>


</div>


))

}


</div>

);
}

export default AdminOrders;