import React from "react";
import ProductCarousel from "../pages/Products/ProductCarousel";
import SmallProduct from "../pages/Products/SmallProduct";
import { useGetTopProductsQuery } from "../redux/api/productSlice";

const Header = () => {
  const { data, isLoading, error } = useGetTopProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <h1>ERROR</h1>;

  const topProducts = data?.products;

  return (
    <>
      <div className="header-container">
        <section className="top-product-grid">
          <div className="small-products-grid">
            {topProducts?.map((product) => (
              <React.Fragment key={product._id}>
                <SmallProduct product={product} />
              </React.Fragment>
            ))}
          </div>
        </section>
        <ProductCarousel />
      </div>
    </>
  );
};

export default Header;
