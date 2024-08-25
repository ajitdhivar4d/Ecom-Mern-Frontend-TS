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

const ProductCard = ({ p }: { p: Product }) => {
  const addToCartHandler = () => {
    console.log("addToCartHandler");
  };

  return (
    <div className="productCard-container">
      <section>
        <Link to={`/product/${p._id}`} className="link-brand-img">
          <span>{p?.brand}</span>
          <img src={p.image} alt={p.name} />
        </Link>
        <HeartIcon />
      </section>

      <div className="productCard-info">
        <div>
          <h5>{p?.name.slice(0, 25)}</h5>

          <p>
            {p?.price?.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
          </p>
        </div>

        <p>{p?.description?.substring(0, 40)} ...</p>

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
