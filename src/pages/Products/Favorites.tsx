import Product from "./Product";

const Favorites = () => {
  return (
    <div className="favorites-container">
      <h1>FAVORITE PRODUCTS</h1>
      <div className="favorites-items">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Favorites;
