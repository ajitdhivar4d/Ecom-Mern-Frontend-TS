import { Link } from "react-router-dom";
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

const userInfo = false;
const userInfoIsAdmin = false;

const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const logoutHandler = () => {
    console.log("logoutHandler");
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
              <span>44</span>
            </span>
          </div>
        </Link>
        <Link to="/favorite" className="link-favorites">
          <div className="favorites-icon">
            <FaHeart className="Icon" size={26} />
            <span className="fav-span">Favorites</span>
            <div className="fav-count">
              <span>34</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="navigation-auth">
        {userInfo && (
          <button onClick={toggleDropdown} className="toggle-dropdown-btn">
            {/* // */}
            {userInfo ? <span>UserName </span> : <></>}
            {/* // */}
            {userInfo && dropdownOpen ? (
              useWindowsWidth() > 700 ? (
                <IoIosArrowDropdown size={26} />
              ) : (
                <IoIosArrowDropup size={26} />
              )
            ) : useWindowsWidth() > 700 ? (
              <IoIosArrowDropup size={26} />
            ) : (
              <IoIosArrowDropdown size={26} />
            )}
          </button>
        )}
        {dropdownOpen && userInfo && (
          <ul className="userInfo-ul">
            {userInfoIsAdmin && (
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

        {/* // */}
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
