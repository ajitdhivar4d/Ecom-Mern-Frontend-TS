interface Review {
  _id: string;
  name: string;
  rating: number;
  comment: string;
  user: string;
}

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
}

// Utility function to save favorites to localStorage
const saveFavoritesToLocalStorage = (favorites: Product[]): void => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

// Add a product to localStorage
export const addFavoritesToLocalStorage = (product: Product): void => {
  const favorites = getFavoritesFromLocalStorage();
  const isAlreadyFavorite = favorites.some(({ _id }) => _id === product._id);

  if (!isAlreadyFavorite) {
    const updatedFavorites = [...favorites, product];
    saveFavoritesToLocalStorage(updatedFavorites);
  }
};

// Remove a product from localStorage
export const removeFavoritesFromLocalStorage = (productId: string): void => {
  const favorites = getFavoritesFromLocalStorage();
  const updatedFavorites = favorites.filter(({ _id }) => _id !== productId);

  saveFavoritesToLocalStorage(updatedFavorites);
};

// Retrieve favorites from localStorage
export const getFavoritesFromLocalStorage = (): Product[] => {
  const favoritesJSON = localStorage.getItem("favorites");
  return favoritesJSON ? (JSON.parse(favoritesJSON) as Product[]) : [];
};
