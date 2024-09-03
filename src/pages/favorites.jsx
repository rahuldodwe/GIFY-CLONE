import React, { useEffect, useState } from "react";
import { GifState } from "../contex/gif-context";
import Gif from "../components/Gif";

const Favorites = () => {
  const [favoriteGIFs, setFavoriteGIFs] = useState([]);
  const { gf, favorites } = GifState();

  const fetchFavoriteGIFs = async () => {
    const { data: gifs } = await gf.gifs(favorites);
    setFavoriteGIFs(gifs);
  };

  useEffect(() => {
    fetchFavoriteGIFs();
  }, []);

  return (
    <div className="mt-2">
      <span className="faded-text">My Favorites</span>
      <div className="columns-2 md:columns-3 lg:colmns-4 xl:columns-5 gap-2 mt-2">
        {favoriteGIFs.map((gif) => {
          return <Gif gif={gif} key={gif.id} />;
        })}
      </div>
    </div>
  );
};

export default Favorites;
