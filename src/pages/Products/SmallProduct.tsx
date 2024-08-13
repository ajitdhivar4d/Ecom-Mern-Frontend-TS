import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

const img =
  "https://cdn.mos.cms.futurecdn.net/yDn3ZSXu9eSBxmXQDZ4PCF-1200-80.jpg";

const SmallProduct = () => {
  return (
    <div className="small-product-container">
      <section>
        <img src={img} alt="img" />
        <HeartIcon />
        <div>
          <Link to="/product/:id">
            <h2>
              <div>productName</div>
              <span>$ productPrice</span>
            </h2>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SmallProduct;
