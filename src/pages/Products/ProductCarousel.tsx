import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaBox,
  FaClock,
  FaShoppingCart,
  FaStar,
  FaStore,
} from "react-icons/fa";
import { useGetTopProductsQuery } from "../../redux/api/productSlice";

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

const ProductCarousel = () => {
  const { data, isLoading, error } = useGetTopProductsQuery();

  const topProducts = data?.products;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 3000,
  };
  return (
    <div className="product-main">
      {isLoading ? null : error ? (
        <h1>Error Occurred </h1>
      ) : (
        <Slider {...settings} className="carousel-slider">
          {topProducts?.map((product: Product) => (
            <div key={product._id} className="carousel-slide">
              <img src={product.image || ""} alt={product.name} />
              <div className="carousel-slide-info">
                <div className="carousel-slide-name">
                  <h2>{product.name}</h2>
                  <p>₹ {product.price}</p>
                  <p className="description">
                    {product.description
                      ? product.description.slice(0, 60) + "..."
                      : "No description available"}
                  </p>
                </div>
                <div className="carousel-slide-brand-rate">
                  <div className="carousel-slide-brand">
                    <h1>
                      <FaStore className="icon " /> Brand: {product.brand}
                    </h1>
                    <h1>
                      <FaClock className="icon " /> Added:{" "}
                      {product.createdAt.slice(0, 10)}
                    </h1>
                    <h1>
                      <FaStar className="icon " /> Reviews: {product.numReviews}
                    </h1>
                  </div>
                  <div className="carousel-slide-rate">
                    <h1>
                      <FaStar className="icon" /> Rating: {product.rating}
                    </h1>
                    <h1>
                      <FaBox className="icon" /> Quantity: {product.quantity}
                    </h1>
                    <h1>
                      <FaShoppingCart className="icon" /> In Stock:{" "}
                      {product.countInStock}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default ProductCarousel;
