import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";
import React from "react";

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

const SmallProduct: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="small-product-container">
      <section>
        <img src={product.image || ""} alt={product.name} />
        <HeartIcon product={product} />
        <div>
          <Link to={`/product/${product._id}`}>
            <h2>
              <div>{product.name}</div>
              <span>₹ {product.price}</span>
            </h2>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SmallProduct;
