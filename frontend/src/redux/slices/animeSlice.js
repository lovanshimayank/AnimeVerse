import { createSlice } from "@reduxjs/toolkit";

const animeSlice = createSlice({
  name: "anime",

  initialState: {
    animes: [],
    loading: false,
    error: null,
  },

  reducers: {
    setAnimes: (state, action) => {
      state.animes = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setAnimes,
  setLoading,
  setError,
} = animeSlice.actions;

export default animeSlice.reducer;