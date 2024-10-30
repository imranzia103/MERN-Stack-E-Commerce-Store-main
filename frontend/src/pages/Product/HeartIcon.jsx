import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
  setFavorites,
} from "../../redux/features/favorites/favoriteSlice";

import {
  addFavoriteToLocalStorage,
  getFavoritesFromLocalStorage,
  removeFavoriteFromLocalStorage,
} from "../../Utils/localStorage";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const HeartIcon = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites) || [];
  const isFavorite = favorites.some((p) => p._id === product._id);

  useEffect(() => {
    const favoritesFromLocalStorage = getFavoritesFromLocalStorage();
    dispatch(setFavorites(favoritesFromLocalStorage));
  }, []);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(product));
      removeFavoriteFromLocalStorage(product._id);
    } else {
      dispatch(addToFavorite(product));
      addFavoriteToLocalStorage(product);
    }
  };

  return (
    <div
      className=" absolute top-2 right-5 cursor-pointer"
      onClick={toggleFavorite}
    >
      {isFavorite ? (
        <FaHeart className=" text-pink-500" />
      ) : (
        <FaRegHeart className=" text-white" />
      )}
    </div>
  );
};

export default HeartIcon;
