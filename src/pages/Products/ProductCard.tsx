import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";
import { FaLongArrowAltRight } from "react-icons/fa";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useAppDispatch } from "../../hook/hooks";

interface CartItem {
  _id: string;
  name: string;
  image: string;
  brand: string;
  quantity: number;
  category: string;
  description: string;
  price: number;
  countInStock: number;
  qty: number;
}

// Interface representing a product review
interface Review {
  _id: string;
  name: string;
  rating: number;
  comment: string;
  user: string;
}

// Interface representing a product
interface Product {
  _id: string;
  name: string;
  image: string;
  brand: string;
  quantity: number;
  category: string;
  description: string;
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  reviews: Review[];
  createdAt: string;
  updatedAt: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();

  const addToCartHandler = (product: Product, qty: number) => {
    dispatch(addToCart({ ...product, qty } as CartItem));
    // toast.success("Item added successfully", {
    //   position: toast.POSITION.TOP_RIGHT,
    //   autoClose: 2000,
    // });
  };

  return (
    <div className="productCard-container">
      <section>
        <Link to={`/product/${product._id}`} className="link-brand-img">
          <span>{product?.brand}</span>
          <img src={product.image} alt={product.name} />
        </Link>
        <HeartIcon product={product} />
      </section>

      <div className="productCard-info">
        <div>
          <h5>{product?.name.slice(0, 25)}</h5>

          <p>
            {product?.price?.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
          </p>
        </div>

        <p>{product?.description?.substring(0, 40)} ...</p>

        <section>
          <Link to={`/product/${product._id}`} className="link-readMore">
            Read More...
            <FaLongArrowAltRight size={20} />
          </Link>

          <button onClick={() => addToCartHandler(product, 1)}>
            <AiOutlineShoppingCart size={20} />
          </button>
        </section>
      </div>
    </div>
  );
};

export default ProductCard;
