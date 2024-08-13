import { useState } from "react";
import {
  FaBox,
  FaClock,
  FaShoppingCart,
  FaStar,
  FaStore,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";
import ProductTabs from "./ProductTabs";

const product = {
  name: "Iphone",
  image:
    "https://iplanet.one/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1695427946",
  description:
    "The Apple iPhone 15 5G comes with a 6.1 inch touchscreen with Crash Detection, features Dynamic Island and a new 48-megapixel main camera with 4x resolution, 20 hours of video playback. This is all powered by the Apple A16 Bionic GPU",
  price: 45000,
  brand: "Apple",
  numReviews: 45,
  createAt: "12-4-2025",
  countInStock: 99,
  quantity: 1,
};

const ProductDetails = () => {
  const [qty, setQty] = useState(1);
  // const [rating, setRating] = useState(0);
  // const [comment, setComment] = useState("");

  const addToCartHandler = () => {
    console.log("addToCartHandler");
  };
  return (
    <div className="product-container">
      <div className="go-back">
        <Link to="/" className=" ">
          Go Back
        </Link>
      </div>
      <div className="product-details">
        <div className="img-div">
          <img src={product.image} alt={product.name} />

          <HeartIcon />
        </div>
        <div className="info">
          <h2>{product.name}</h2>
          <p className="p-description">{product.description}</p>
          <p className="p-price">$ {product.price}</p>
          <div className="brand-rate">
            <div className="brand">
              <h1>
                <FaStore className="icon " /> Brand: Name
              </h1>
              <h1>
                <FaClock className="icon " /> Added: CreatedName
              </h1>
              <h1>
                <FaStar className="icon " /> Reviews: no. Reviews
              </h1>
            </div>
            <div className="rate">
              <h1>
                <FaStar className="icon" /> Rating: rating
              </h1>
              <h1>
                <FaBox className="icon" /> Quantity: quantity
              </h1>
              <h1>
                <FaShoppingCart className="icon" /> In Stock: countInStock
              </h1>
            </div>
          </div>
          <div className="rating-stock">
            {/* <Ratings
              value={product.rating}
              text={`${product.numReviews} reviews`}
            /> */}
            {product.countInStock > 0 && (
              <div className="countInStock">
                <select
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div className="addToCart">
            <button
              onClick={addToCartHandler}
              disabled={product.countInStock === 0}
            >
              Add To Cart
            </button>
          </div>
        </div>
        <div className="review-container">
          <ProductTabs />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
