import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <>
      <Navbar />

      <div className="admin-dashboard">
        <h1>AnimeVerse Admin Panel</h1>

        <div className="admin-links">

          <Link to="/admin/orders">
            <button>Manage Orders</button>
          </Link>

          <Link to="/admin/products">
            <button>Manage Products</button>
          </Link>

        </div>
      </div>
    </>
  );
}

export default AdminDashboard;