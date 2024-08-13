import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";
import SmallProduct from "./SmallProduct";

const userInfo = true;

const product = {
  reviews: {
    length: 2,
  },
};

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // submit review logic here
  };
  return (
    <div className="product-tab-container">
      <section className="main-section">
        <div
          className={`one ${activeTab === 1 ? "font-bold" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          Write Your Review
        </div>
        <div
          className={`one ${activeTab === 2 ? "font-bold" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          All Reviews
        </div>
        <div
          className={`one ${activeTab === 3 ? "font-bold" : ""}`}
          onClick={() => handleTabClick(3)}
        >
          Related Products
        </div>
      </section>
      {/* /// */}

      <section className="write-review-section">
        {activeTab === 1 && (
          <div>
            {userInfo ? (
              <form onSubmit={submitHandler}>
                <div className="rating">
                  <label htmlFor="rating">Rating</label>

                  <select
                    id="rating"
                    required
                    // value={rating}
                    // onChange={(e) => setRating(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="1">Inferior</option>
                    <option value="2">Decent</option>
                    <option value="3">Great</option>
                    <option value="4">Excellent</option>
                    <option value="5">Exceptional</option>
                  </select>
                </div>

                <div className="comment">
                  <label htmlFor="comment">Comment</label>

                  <textarea
                    id="comment"
                    // rows="3"
                    required
                    // value={comment}
                    // onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  //   disabled={loadingProductReview}
                >
                  Submit
                </button>
              </form>
            ) : (
              <p>
                Please <Link to="/login">sign in</Link> to write a review
              </p>
            )}
          </div>
        )}
      </section>

      {/* // */}
      <section className="reviews-section">
        {activeTab === 2 && (
          <>
            {product.reviews.length === 0 ? (
              <p>No Reviews</p>
            ) : (
              <div className="review">
                <div>
                  <strong>Mohit</strong>
                  <p>2024-07-03</p>
                </div>

                <p>Good work ....</p>
                <Ratings />
              </div>
            )}
          </>
        )}
      </section>

      {/* /// */}
      <section>
        {activeTab === 3 && (
          <section className="related-products-section ">
            <SmallProduct />
            <SmallProduct />
            <SmallProduct />
            <SmallProduct />
          </section>
        )}
      </section>
    </div>
  );
};

export default ProductTabs;
