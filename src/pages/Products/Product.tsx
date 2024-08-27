import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

interface Product {
  _id: string;
  brand: string;
  image: string;
  price: number;
  description: string;
  name: string;
}

interface ProductProps {
  product: Product;
}

const Product: React.FC<ProductProps> = ({ product }: { product: Product }) => {
  return (
    <div className="product">
      <div className="one">
        <img
          src={product.image || ""}
          alt={product.name}
          className="w-[30rem] rounded"
        />
        <HeartIcon product={product} />
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
