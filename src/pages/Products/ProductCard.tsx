import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";
import { FaLongArrowAltRight } from "react-icons/fa";

interface Product {
  _id: string;
  brand: string;
  image: string;
  price: number;
  description: string;
  name: string;
}

const p: Product = {
  _id: "62f4a4c7e1f8b4531a4f8c6d",
  brand: "Apple",
  name: "Apple iPhone 15 (128 GB) - Blue",
  image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg",
  price: 120000,
  description: "DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles...",
};

const ProductCard = () => {
  const addToCartHandler = () => {
    console.log("addToCartHandler");
  };

  return (
    <div className="productCard-container">
      <section>
        <Link to={`/product/${p._id}`} className="link-brand-img">
          <span>{p?.brand}</span>
          <img
            src={p.image}
            alt={p.name}
            style={{ height: "170px", objectFit: "cover" }}
          />
        </Link>
        <HeartIcon />
      </section>

      <div className="productCard-info">
        <div>
          <h5>{p?.name}</h5>

          <p>
            {p?.price?.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
          </p>
        </div>

        <p>{p?.description?.substring(0, 60)} ...</p>

        <section>
          <Link to={`/product/${p._id}`} className="link-readMore">
            Read More...
            <FaLongArrowAltRight size={20} />
          </Link>

          <button onClick={() => addToCartHandler()}>
            <AiOutlineShoppingCart size={20} />
          </button>
        </section>
      </div>
    </div>
  );
};

export default ProductCard;
