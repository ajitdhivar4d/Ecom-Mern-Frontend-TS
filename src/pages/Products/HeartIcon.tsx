import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const HeartIcon = () => {
  const [isFavorites, setIsFavorite] = useState(false);

  const toggleFavorites = () => {
    setIsFavorite((prev) => !prev);
  };
  return (
    <div onClick={toggleFavorites} className="heartIcon">
      {isFavorites ? <FaHeart color="deeppink" /> : <FaRegHeart />}
    </div>
  );
};

export default HeartIcon;
