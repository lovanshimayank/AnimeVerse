import { useState } from "react";
import axios from "axios";
import "./AdminProducts.css";

function AdminProducts() {

const [product,setProduct]=useState({

name:"",
description:"",
price:"",
stock:"",
category:"",
image:""

});

const handleChange=(e)=>{

setProduct({

...product,
[e.target.name]:e.target.value

});

};

const addProduct=async()=>{

const token=localStorage.getItem("token");

await axios.post(

"https://animeverse-gsox.onrender.com/api/products",

{

name:product.name,
description:product.description,
price:product.price,
stock:product.stock,
category:product.category,
images:[product.image]

},

{

headers:{

Authorization:`Bearer ${token}`

}

}

);

alert("Product Added");

};

return (

<div className="admin-products-page">

<h1>
🛒 Add Anime Product
</h1>


<div className="product-form">


<input 
name="name"
placeholder="Product Name"
onChange={handleChange}
/>


<textarea
name="description"
placeholder="Product Description"
onChange={handleChange}
/>


<input
name="price"
placeholder="Price"
onChange={handleChange}
/>


<input
name="stock"
placeholder="Stock"
onChange={handleChange}
/>


<input
name="category"
placeholder="Category"
onChange={handleChange}
/>


<input
name="image"
placeholder="Image URL"
onChange={handleChange}
/>


<button onClick={addProduct}>
🔥 Add Product
</button>


</div>

</div>

);
}

export default AdminProducts;