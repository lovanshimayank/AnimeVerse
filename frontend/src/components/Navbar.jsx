import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../redux/slices/authSlice";

import "./Navbar.css";


function Navbar() {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const { user } = useSelector(
    state => state.auth
  );


  const { cartItems } = useSelector(
    state => state.cart
  );


  const { wishlistItems } = useSelector(
    state => state.wishlist
  );



  const handleLogout = () => {

    dispatch(logout());

    navigate("/login");

  };



  return (

    <motion.nav

      className="navbar"

      initial={{
        y:-100,
        opacity:0
      }}

      animate={{
        y:0,
        opacity:1
      }}

      transition={{
        duration:0.8
      }}

    >


      <Link to="/" className="logo-link">
  <motion.div
    className="logo"
    whileHover={{
      scale: 1.1,
      rotate: -2
    }}
  >
    🌸 AnimeVerse
  </motion.div>
</Link>


      <ul className="nav-links">


        <motion.li whileHover={{y:-5}}>

          <Link to="/">
            Home
          </Link>

        </motion.li>



        <motion.li whileHover={{y:-5}}>

          <Link to="/store">
            Store
          </Link>

        </motion.li>



        {
          user ? (

            <>

            <motion.li whileHover={{y:-5}}>

              <Link to="/admin">

                Admin 
                </Link>

</motion.li>




              <motion.li whileHover={{y:-5}}>

                <Link to="/cart">

                  Cart 🛒
                  
                  {
                    cartItems.length > 0 &&
                    ` (${cartItems.length})`
                  }

                </Link>

              </motion.li>



              <motion.li whileHover={{y:-5}}>

                <Link to="/wishlist">

                  Wishlist ❤️

                  {
                    wishlistItems.length > 0 &&
                    ` (${wishlistItems.length})`
                  }

                </Link>

              </motion.li>



              <motion.li whileHover={{y:-5}}>

                <Link to="/profile">

                  Profile 🧑‍🎤

                </Link>

              </motion.li>



              <motion.li whileHover={{y:-5}}>


                <button

                  className="logout-btn"

                  onClick={handleLogout}

                >

                  Logout ╰┈➤🚪

                </button>


              </motion.li>


            </>


          ) : (


            <>


              <motion.li whileHover={{y:-5}}>

                <Link to="/login">

                  Login

                </Link>

              </motion.li>



              <motion.li whileHover={{y:-5}}>

                <Link to="/register">

                  Register

                </Link>

              </motion.li>


            </>


          )

        }


      </ul>


    </motion.nav>

  );

}


export default Navbar;