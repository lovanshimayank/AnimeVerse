import API from "../api/axios";

export const getAllAnime = async () => {
    const { data } =
      await API.get("/anime");

    return data;
  };

export const getAnimeById = async (id) => {
    const response = await API.get(`/anime/${id}`);

    return response.data;
  };