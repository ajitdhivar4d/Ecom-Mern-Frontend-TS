import ProductCarousel from "../pages/Products/ProductCarousel";
import SmallProduct from "../pages/Products/SmallProduct";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <section className="top-product-grid">
          <div className="small-products-grid">
            <SmallProduct />
            <SmallProduct />
            <SmallProduct />
            <SmallProduct />
          </div>
        </section>
        <ProductCarousel />
      </div>
    </>
  );
};

export default Header;
