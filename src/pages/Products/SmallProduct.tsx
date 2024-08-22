import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";
import React from "react";

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

const SmallProduct: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="small-product-container">
      <section>
        <img src={product.image} alt="img" />
        <HeartIcon />
        <div>
          <Link to="/product/:id">
            <h2>
              <div>${product.name}</div>
              <span>${product.price}</span>
            </h2>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SmallProduct;
