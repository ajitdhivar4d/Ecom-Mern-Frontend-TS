import { useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";
import {
  addFavorite,
  removeFavorite,
  setFavorites,
} from "../../redux/features/favorites/favoriteSlice";
import {
  addFavoritesToLocalStorage,
  getFavoritesFromLocalStorage,
  removeFavoritesFromLocalStorage,
} from "../../utils/localStorage";

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

const HeartIcon = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  const favorites =
    useAppSelector(
      (state: { favorites: favoriteState }) => state.favorites.favorites,
    ) || [];
  const isFavorite = favorites.some((P) => P._id === product._id);

  useEffect(() => {
    const favoritesFromLocalStorage = getFavoritesFromLocalStorage();
    dispatch(setFavorites(favoritesFromLocalStorage));
  }, []);

  const toggleFavorites = () => {
    if (isFavorite) {
      dispatch(removeFavorite(product._id));
      removeFavoritesFromLocalStorage(product._id);
    } else {
      dispatch(addFavorite(product));
      addFavoritesToLocalStorage(product);
    }
  };
  return (
    <div onClick={toggleFavorites} className="heartIcon">
      {isFavorite ? <FaHeart color="deeppink" /> : <FaRegHeart />}
    </div>
  );
};

export default HeartIcon;
