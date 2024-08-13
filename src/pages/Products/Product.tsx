import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

const product = {
  _id: "4578",
  image:
    "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone_11-rosette-family-lineup-091019_big.jpg.large.jpg",
  name: "Iphone 5",
  price: "45000",
};

const Product = () => {
  return (
    <div className="product">
      <div className="one">
        <img
          src={product.image}
          alt={product.name}
          className="w-[30rem] rounded"
        />
        <HeartIcon />
      </div>
      <div className="two">
        <Link to={`/product/${product._id}`} className="two-link">
          <h2>
            <div>{product.name}</div>
            <span>$ {product.price}</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Product;
