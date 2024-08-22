import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

interface Product {
  _id: string;
  name: string;
  image: string | undefined;
  price: number;
  rating: number;
  numReviews: number;
  countInStock: number;
  brand: string;
  category: string;
  reviews: any[];
  description: string;
  quantity: number;
  createdAt: string;
  updatedAt: string;
}

interface ProductProps {
  product: Product;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="product">
      <div className="one">
        <img
          src={product.image || ""}
          alt={product.name}
          className="w-[30rem] rounded"
        />
        <HeartIcon />
      </div>
      <div className="two">
        <Link to={`/product/${product._id}`} className="two-link">
          <h2>
            <div>{product.name.slice(0, 20)}</div>
            <span>₹ {product.price}</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Product;
