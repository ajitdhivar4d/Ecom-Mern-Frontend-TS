import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineShoppingCart,
  AiOutlineLogin,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";
import FavoritesCount from "../Products/FavoritesCount";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";
import { useLogoutMutation } from "../../redux/api/userSlice";
import { logout } from "../../redux/features/auth/authSlice";

const Navigation = () => {
  const { userInfo } = useAppSelector((state) => state.auth);
  const { cartItems } = useAppSelector((state) => state.cart);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const windowsWidth = useWindowsWidth(); // Move hook to the top

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="navigation">
      <div className="navigation-main">
        <Link to="/" className="link-home-shop">
          <AiOutlineHome className="Icon" size={26} />
          <span className="">HOME</span>
        </Link>
        <Link to="/shop" className="link-home-shop">
          <AiOutlineShopping className="Icon" size={26} />
          <span className="">SHOP</span>
        </Link>
        <Link to="/cart" className="link-cart">
          <div className="cart-icon">
            <AiOutlineShoppingCart className="Icon" size={26} />
            <span className="cart-title">Cart</span>
          </div>
          <div className="cart-count">
            <span>
              <span>{cartItems.reduce((a, c) => a + c.qty, 0)}</span>
            </span>
          </div>
        </Link>
        <Link to="/favorite" className="link-favorites">
          <div className="favorites-icon">
            <FaHeart className="Icon" size={26} />
            <span className="fav-span">Favorites</span>
            <FavoritesCount />
          </div>
        </Link>
      </div>
      <div className="navigation-auth">
        {userInfo && (
          <button onClick={toggleDropdown} className="toggle-dropdown-btn">
            <span>UserName </span>
            {userInfo && dropdownOpen ? (
              windowsWidth > 700 ? (
                <IoIosArrowDropdown size={26} />
              ) : (
                <IoIosArrowDropup size={26} />
              )
            ) : windowsWidth > 700 ? (
              <IoIosArrowDropup size={26} />
            ) : (
              <IoIosArrowDropdown size={26} />
            )}
          </button>
        )}
        {dropdownOpen && userInfo && (
          <ul className="userInfo-ul">
            {userInfo.user?.isAdmin && (
              <>
                <li>
                  <Link to="/admin/dashboard" className="admin-link">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/admin/productlist" className="admin-link">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/admin/categorylist" className="admin-link">
                    Category
                  </Link>
                </li>
                <li>
                  <Link to="/admin/orderlist" className="admin-link">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link to="/admin/userlist" className="admin-link">
                    Users
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link to="/profile" className="link-profile">
                Profile
              </Link>
            </li>
            <li>
              <div onClick={logoutHandler} className="link-logout">
                Logout
              </div>
            </li>
          </ul>
        )}

        {!userInfo && (
          <ul className="log-reg-ul">
            <li>
              <Link to="/login" className="link-login">
                <AiOutlineLogin className="Icon" size={23} />
                <span>Login</span>
              </Link>
            </li>
            <li>
              <Link to="/register" className="link-login">
                <AiOutlineUserAdd className="Icon" size={23} />
                <span>Register</span>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

const useWindowsWidth = () => {
  const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowsWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowsWidth;
};

export default Navigation;
