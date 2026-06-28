import React, { useEffect } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";

import { setUser,setLoading } from "./redux/slices/authSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AnimeDetails from "./pages/AnimeDetails";
import Store from "./pages/Store";

import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { setCart } from "./redux/slices/cartSlice";
import Orders from "./pages/Orders";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from "./pages/AdminProducts";
import AdminOrders from "./pages/AdminOrders";



function App() {
  const dispatch = useDispatch();


  useEffect(()=>{


  const loadUser = async()=>{
  const token = localStorage.getItem("token");
  if(token){
    try{
      const res = await axios.get(
        "https://animeverse-gsox.onrender.com/api/auth/profile", {
            headers:{
              Authorization:`Bearer ${token}`
            }
  }

);


dispatch(setUser(res.data));
const cartRes = await axios.get(
    "https://animeverse-gsox.onrender.com/api/cart",
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
);

dispatch(setCart(cartRes.data?.items || []));


}

catch(error){

console.log(error);

localStorage.removeItem("token");

}


}


dispatch(setLoading(false));


};


loadUser();


},[dispatch]);




  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/anime/:id" element={<AnimeDetails />} />

<Route path="/login" element={<Login />} />

<Route
  path="/register"
  element={<Register />}
/>
        <Route path="/store" element={<Store />} />

       
        <Route path="/product/:id" element={<Product />}/>

        <Route
path="/orders"
element={<Orders/>}
/>

        <Route path="/cart" element={
          <ProtectedRoute>
            <Cart/>
          </ProtectedRoute>} 
        />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        <Route
          path="/checkout"
          element={
          <ProtectedRoute>
            <Checkout/>
          </ProtectedRoute>}
        />

        <Route

          path="/profile"
          element={
            <ProtectedRoute>
              <Profile/>
            </ProtectedRoute>
          }
        />

        <Route
 path="/orders"
 element={
   <ProtectedRoute>
      <Orders/>
   </ProtectedRoute>
 }
/>

      <Route
  path="/admin"
  element={<AdminDashboard />}
/>

<Route
  path="/admin/products"
  element={<AdminProducts />}
/>

<Route
  path="/admin/orders"
  element={<AdminOrders />}
/>

<Route
path="/admin"
element={<AdminDashboard/>}
/>

<Route
path="/admin/products"
element={<AdminProducts/>}
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;