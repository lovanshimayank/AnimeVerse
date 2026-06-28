import axios from "axios";

const API = "https://animeverse-gsox.onrender.com/api/cart";

export const addToCart = async (productId, quantity = 1) => {
  const token = localStorage.getItem("token");

  const res = await axios.post(
    `${API}/add`,
    {
      productId,
      quantity,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

export const getCart = async () => {
  const token = localStorage.getItem("token");

  const res = await axios.get(API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const removeCartItem = async (productId) => {
  const token = localStorage.getItem("token");

  const res = await axios.delete(
    `${API}/remove/${productId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

export const updateCartQuantity = async (
  productId,
  quantity
) => {
  const token = localStorage.getItem("token");

  const res = await axios.put(
    `${API}/update/${productId}`,
    {
      quantity,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};