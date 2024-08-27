import { useAppSelector } from "../../hook/hooks";

interface Product {
  _id: string;
  brand: string;
  image: string;
  price: number;
  description: string;
  name: string;
}

interface favoriteState {
  favorites: Product[];
}

const FavoritesCount = () => {
  const favorites = useAppSelector(
    (state: { favorites: favoriteState }) => state.favorites.favorites,
  );
  const favoritesCount = favorites.length;
  return (
    <div className="fav-count">
      {favoritesCount > 0 && <span>{favoritesCount}</span>}
    </div>
  );
};

export default FavoritesCount;
