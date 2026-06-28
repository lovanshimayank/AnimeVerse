import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";

import "./Profile.css";


function Profile(){

    const {user}=useSelector(
        state=>state.auth
    );


    const {cartItems}=useSelector(
        state=>state.cart
    );


    const {wishlistItems}=useSelector(
        state=>state.wishlist
    );



return(

<>

<Navbar/>


<div className="profile-container">


<motion.div

className="profile-card"

initial={{
opacity:0,
scale:0.8
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:0.6
}}

>


<div className="avatar">

🧑‍🎤

</div>



<h1>

{user?.name}

</h1>


<p>

{user?.email}

</p>


{/* <span>

{user?.role}

</span> */}


</motion.div>




<div className="profile-stats">



<motion.div

className="stat-card"

whileHover={{
scale:1.05
}}

>

<h2>

❤️

</h2>


<p>

Wishlist

</p>


<h3>

{wishlistItems.length}

</h3>


</motion.div>





<motion.div

className="stat-card"

whileHover={{
scale:1.05
}}

>

<h2>

🛒

</h2>


<p>

Cart

</p>


<h3>

{cartItems.length}

</h3>


</motion.div>



</div>




<motion.div

className="anime-section"

initial={{
y:50,
opacity:0
}}

animate={{
y:0,
opacity:1
}}

transition={{
delay:0.3
}}

>


<h2>

🎬 My Anime Journey

</h2>


<p>

Your favourite anime memories will appear here soon...

</p>


</motion.div>




<button

className="profile-logout"

>

Logout ╰┈➤🚪

</button>



</div>


</>

)


}


export default Profile;