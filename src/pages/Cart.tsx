import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

interface CartItems {
  _id: string; // Unique identifier for the item
  image: string; // URL or path to the item's image
  name: string; // Name of the item
  brand: string; // Brand of the item
  price: number; // Price of the item
  countInStock: number; // Number of items in stock
  qty: number; // Quantity of the item in the cart
}

const cartItems: CartItems[] = [
  {
    _id: "1",
    image:
      "https://m.media-amazon.com/images/I/31wacBawB3L._SY445_SX342_QL70_FMwebp_.jpg",
    name: "IPhone 14 (128 GB) - Midnight",
    brand: "Apple",
    price: 78000,
    countInStock: 20,
    qty: 2,
  },
  {
    _id: "2",
    image:
      "https://m.media-amazon.com/images/I/3144jXPtX4L._SY445_SX342_QL70_FMwebp_.jpg",
    name: "iPhone 14 (128 GB) - Starlight",
    brand: "Apple",
    price: 76000,
    countInStock: 15,
    qty: 1,
  },
  {
    _id: "3",
    image:
      "https://m.media-amazon.com/images/I/31jQ91XUDhS._SY445_SX342_QL70_FMwebp_.jpg",
    name: "iPhone 12 (128GB) - Purple",
    brand: "Apple",
    price: 44500,
    countInStock: 10,
    qty: 3,
  },
];

const Cart = () => {
  const addToCartHandler = () => {
    console.log("addToCartHandler");
  };

  const removeFromCartHandler = () => {
    console.log("removeFromCartHandler");
  };

  const checkoutHandler = () => {
    console.log("checkoutHandler");
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
                          onChange={() => addToCartHandler()}
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
                          onClick={() => removeFromCartHandler()}
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
