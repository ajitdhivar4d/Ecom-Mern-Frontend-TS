import { useAppSelector } from "../../hook/hooks";
import Product from "./Product";

const Favorites = () => {
  const { favorites } = useAppSelector((state) => state.favorites);
  return (
    <div className="favorites-container">
      <h1>FAVORITE PRODUCTS</h1>
      <div className="favorites-items">
        {favorites.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
