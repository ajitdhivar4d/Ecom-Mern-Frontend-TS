import { FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hook/hooks";
import { addToCart, removeFromCart } from "../redux/features/cart/cartSlice";

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

interface Product {
  _id: string;
  brand: string;
  image: string;
  price: number;
  description: string;
  name: string;
}

const Cart = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { cartItems } = useAppSelector((state) => state.cart);

  const addToCartHandler = (product: Product, qty: number) => {
    dispatch(addToCart({ ...product, qty } as CartItem));
  };

  const removeFromCartHandler = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };

  return (
    <>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            Your cart is empty <Link to="/shop">Go To Shop</Link>
          </div>
        ) : (
          <>
            <div className="cart-section">
              <h1>Shopping Cart</h1>

              {cartItems.map((item) => (
                <div key={item._id} className="cart-items">
                  <div className="img-section">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-one">
                    <div className="name-price-brand-section">
                      <Link
                        to={`/product/${item._id}`}
                        className="text-pink-500"
                      >
                        {item.name}
                      </Link>

                      <div className="brand-div">{item.brand}</div>
                      <div className="price-div">$ {item.price}</div>
                    </div>

                    <div className="cart-two">
                      {" "}
                      <div className="countInStock-section">
                        <select
                          value={item.qty}
                          onChange={(e) =>
                            addToCartHandler(item, Number(e.target.value))
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="removeFromCartHandler">
                        <button
                          className="text-red-500 mr-[5rem]"
                          onClick={() => removeFromCartHandler(item._id)}
                        >
                          <FaTrash className="icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="checkoutHandler-section">
                <div>
                  <h2>
                    Items ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                  </h2>

                  <div>
                    ${" "}
                    {cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}
                  </div>

                  <button
                    disabled={cartItems.length === 0}
                    onClick={checkoutHandler}
                  >
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
