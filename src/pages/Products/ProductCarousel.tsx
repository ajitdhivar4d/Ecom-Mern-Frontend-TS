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

const img1 =
  "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-model-unselect-gallery-2-202303_GEO_EMEA_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=NjB6M3BqTGRudDZtakJrUG5tT2pHTGdzSmpObkZCM3MrNmJ5SkhESlNDZ1hBSXMwL2Jwdk9oTk42KzZHdTdNUStPZEo4N1VRRWxvaDh0eHhOVmNKTVdTMFRmWmtRdTBHQlhFcGIzZUhKekJuNDBzcjA0aG5jQUJ1UTI2VzJJR1kwNVp6MmhlRFdDdTNsVDcwQXNhL05RPT0=&traceId=1";

// const img2 =
//   "https://cdn.britannica.com/09/241709-050-149181B1/apple-iphone-11-2019.jpg";

// const img3 =
//   "https://www.cnet.com/a/img/resize/f80d30024ee6d0bf2ef6a62aff582dacf1990867/hub/2023/09/18/faee0366-a837-41be-a084-b359bcbf3f93/iphone15-pro-88.jpg?auto=webp&fit=crop&height=362&width=644";

const ProductCarousel = () => {
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
      <Slider {...settings} className="carousel-slider">
        <div className="carousel-slide">
          <img src={img1} alt="img" />
          <div className="carousel-slide-info">
            <div className="carousel-slide-name">
              <h2>Name</h2>
              <p>$ Price</p>
              <br />
              <p>
                description description description description description
                description description
              </p>
            </div>
            <div className="carousel-slide-brand-rate">
              <div className="carousel-slide-brand">
                <h1>
                  <FaStore className="icon " /> Brand: Name
                </h1>
                <h1>
                  <FaClock className="icon " /> Added: CreatedName
                </h1>
                <h1>
                  <FaStar className="icon " /> Reviews: no. Reviews
                </h1>
              </div>
              <div className="carousel-slide-rate">
                <h1>
                  <FaStar className="icon" /> Rating: rating
                </h1>
                <h1>
                  <FaBox className="icon" /> Quantity: quantity
                </h1>
                <h1>
                  <FaShoppingCart className="icon" /> In Stock: countInStock
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* ///// */}
        <div className="carousel-slide">
          <img src={img1} alt="img" />
          <div></div>
        </div>
        <div className="carousel-slide">
          <img src={img1} alt="img" />
          <div></div>
        </div>
      </Slider>
    </div>
  );
};

export default ProductCarousel;
