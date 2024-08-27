import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hook/hooks";
import { useFetchCategoriesQuery } from "../redux/api/categorySlice";
import { useAllProductsQuery } from "../redux/api/productSlice";
import {
  setCategories,
  setChecked,
  setProducts,
} from "../redux/features/shop/shopSlice";
import ProductCard from "./Products/ProductCard";

interface Category {
  _id: string;
  name: string;
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

const Shop: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categories, checked, radio, products } = useAppSelector(
    (state) => state.shop,
  );

  const [priceFilter, setPriceFilter] = useState<string>("");

  const { data: categoriesQueryData, isLoading: categoriesQueryIsLoading } =
    useFetchCategoriesQuery();

  const {
    data: filteredProductsQueryData,
    isLoading: filteredProductsQueryIsLoading,
    error: filteredProductsQueryError,
  } = useAllProductsQuery();

  console.log(filteredProductsQueryData);

  useEffect(() => {
    if (categoriesQueryData && !categoriesQueryIsLoading) {
      dispatch(setCategories(categoriesQueryData.categories as Category[]));
    }
  }, [categoriesQueryData, dispatch, categoriesQueryIsLoading]);

  useEffect(() => {
    if (!filteredProductsQueryIsLoading && !filteredProductsQueryError) {
      const filteredProducts = filteredProductsQueryData?.products?.filter(
        (product: Product) => {
          return (
            product.price.toString().includes(priceFilter) ||
            product.price === parseInt(priceFilter, 10)
          );
        },
      );

      dispatch(setProducts(filteredProducts as Product[]));
    }
  }, [
    checked,
    radio,
    filteredProductsQueryData,
    dispatch,
    priceFilter,
    filteredProductsQueryIsLoading,
    filteredProductsQueryError,
  ]);

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPriceFilter(e.target.value);
  };

  const handleCheck = (name: string) => {
    console.log(name);
    const productsByCatName = filteredProductsQueryData?.products?.filter(
      (product: Product) => product.category === name,
    );

    dispatch(setProducts(productsByCatName as Product[]));
  };

  const handleBrandClick = (brand: string) => {
    const productsByBrand = filteredProductsQueryData?.products?.filter(
      (product: Product) => product.brand === brand,
    );

    dispatch(setProducts(productsByBrand as Product[]));
  };

  // Add "All Brands" option to uniqueBrands
  const uniqueBrands = [
    ...Array.from(
      new Set(
        filteredProductsQueryData?.products
          ?.map((product) => product.brand)
          .filter((brand) => brand !== undefined),
      ),
    ),
  ];

  const resetFilters = () => {
    dispatch(setChecked([]));
    setPriceFilter("");
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
                      <input
                        type="checkbox"
                        id={`category-${c._id}`}
                        onChange={() => handleCheck(c.name)}
                      />
                      <label htmlFor={`category-${c._id}`}>{c.name}</label>
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
                  <div key={brand}>
                    <input
                      type="radio"
                      id={`brand-${brand}`}
                      name="brand"
                      onChange={() => handleBrandClick(brand)}
                    />
                    <label htmlFor={`brand-${brand}`}>{brand}</label>
                  </div>
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
              <button onClick={resetFilters}>Reset</button>{" "}
            </div>
          </div>
        </div>

        <div className="shop-product-container">
          <h2>{products?.length} Products</h2>
          <div>
            {products.length === 0 ? (
              <div>Loading..</div>
            ) : (
              products?.map((p) => (
                <div className="p-3" key={p._id}>
                  <ProductCard product={p} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
