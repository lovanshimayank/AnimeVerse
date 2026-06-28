import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({

  name:"auth",

  initialState:{

    user:null,

    token:localStorage.getItem("token"),

    isAuthenticated:!!localStorage.getItem("token"),

    loading:true

},

  reducers:{

    loginSuccess:(state,action)=>{

      state.user=action.payload.user;

      state.token=action.payload.token;

      state.isAuthenticated=true;

    },

    logout:(state)=>{

      state.user=null;

      state.token=null;

      state.isAuthenticated=false;

      localStorage.removeItem("token");

    },

    setUser:(state,action)=>{

      state.user=action.payload;

    }, 

    setLoading:(state,action)=>{

      state.loading = action.payload;

    }

  }

});

  export const{

    loginSuccess,
    logout,
    setUser,
    setLoading
    
  }=authSlice.actions;

export default authSlice.reducer;