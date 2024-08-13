import { Link } from "react-router-dom";
import Header from "../components/Header";
import Product from "./Products/Product";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <>
        <div className="special-products">
          <h1>Special Products</h1>
          <Link to="/shop" className="link-shop">
            Shop
          </Link>
        </div>

        <div className="product-container">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </>
    </div>
  );
};

export default Home;
