import { useState } from "react";
import {
  FaBox,
  FaClock,
  FaShoppingCart,
  FaStar,
  FaStore,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import {
  useGetProductDetailsQuery,
  useGetTopProductsQuery,
} from "../../redux/api/productSlice";
import HeartIcon from "./HeartIcon";
import ProductTabs from "./ProductTabs";

const ProductDetails = () => {
  const { id: productId } = useParams();

  const { data: productData } = useGetProductDetailsQuery(productId as string);

  const product = productData?.product;

  console.log(productData);

  const { data: topProducts, isLoading: topProductIsLoading } =
    useGetTopProductsQuery();

  const [qty, setQty] = useState(1);
  // const [rating, setRating] = useState(0);
  // const [comment, setComment] = useState("");

  const addToCartHandler = () => {
    console.log("addToCartHandler");
  };
  return (
    <div className="product-details-container">
      <div className="go-back">
        <Link to="/" className=" ">
          Go Back
        </Link>
      </div>
      {product && (
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
            <ProductTabs
              data={topProducts}
              isLoading={topProductIsLoading}
              productData={productData}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
