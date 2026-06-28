import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { register } from "../services/authService";

import "./Auth.css";

function Register() {

const navigate=useNavigate();

const [form,setForm]=useState({

name:"",
email:"",
password:""

});

const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

});

};

const handleSubmit=async(e)=>{

e.preventDefault();

try{

await register(form);

alert("Registration Successful");

navigate("/login");

}catch(err){

alert(err.response?.data?.message);

}

};

return(

<div className="auth-page">

<form
className="auth-box"
onSubmit={handleSubmit}
>

<h1>Create Account</h1>

<input
name="name"
placeholder="Name"
onChange={handleChange}
required
/>

<input
type="email"
name="email"
placeholder="Email"
onChange={handleChange}
required
/>

<input
type="password"
name="password"
placeholder="Password"
onChange={handleChange}
required
/>

<button>

Register

</button>

<p>

Already have account?

<Link to="/login">

 Login

</Link>

</p>

</form>

</div>

);

}

export default Register;