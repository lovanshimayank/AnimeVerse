import axios from "axios";

const API =
  process.env.REACT_APP_BASE_API_URL ||
  "https://animeverse-gsox.onrender.com/api";

export const register = async (userData) => {
  const { data } = await axios.post(
    `${API}/auth/register`,
    userData
  );

  return data;
};

export const login = async (userData) => {
  const { data } = await axios.post(
    `${API}/auth/login`,
    userData
  );

  return data;
};

export const getProfile = async () => {
  const token = localStorage.getItem("token");

  const { data } = await axios.get(
    `${API}/auth/profile`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};