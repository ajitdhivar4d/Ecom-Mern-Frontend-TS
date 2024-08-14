import React, { ChangeEvent, useState } from "react";
import ProductCard from "./Products/ProductCard";

const categories = [
  { _id: "1", name: "cameras" },
  { _id: "2", name: "sofa" },
  { _id: "3", name: "Gym" },
  { _id: "4", name: "Shoes" },
  { _id: "5", name: "Mackbooks" },
  { _id: "6", name: "PC" },
];

const uniqueBrands = [
  "Fujifilm",
  "Amazon Brand",
  "Bodyband",
  "Bacca Bucci",
  "Apple",
];

const Shop = () => {
  const [priceFilter, setPriceFilter] = useState("");

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Update the price filter state when the user types in the input filed
    setPriceFilter(e.target.value);
  };

  return (
    <div className="shop-container">
      <div className="shop-section">
        <div className="filter-section">
          {/* // */}
          <div className="filter-category-brand">
            <div className="filter-category">
              <h2 className="h2-category">Filter by Categories</h2>

              <div className="div-category">
                {categories?.map((c) => (
                  <div key={c._id} className="div-key">
                    <div>
                      <input type="checkbox" id="red-checkbox" />

                      <label htmlFor="pink-checkbox">{c.name}</label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* // */}
            <div className="filter-brand">
              <h2 className="h2-brand">Filter by Brands</h2>
              <div className="div-brand">
                {uniqueBrands?.map((brand) => (
                  <React.Fragment key={brand}>
                    <div>
                      <input type="radio" id={brand} name="brand" />

                      <label htmlFor="pink-radio">{brand}</label>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* // */}
          <div className="filter-price-reset">
            <div className="filter-price">
              <h2 className="h2-price">Filer by Price</h2>
              <div className="div-price">
                <input
                  type="text"
                  placeholder="Enter Price"
                  value={priceFilter}
                  onChange={handlePriceChange}
                />
              </div>
            </div>
            {/* / */}
            <div className="div-reset">
              <button onClick={() => window.location.reload()}>Reset</button>
            </div>
          </div>
        </div>

        <div className="shop-product-container">
          <h2 className="h4 text-center mb-2">10 Products</h2>
          <div className="flex flex-wrap">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
