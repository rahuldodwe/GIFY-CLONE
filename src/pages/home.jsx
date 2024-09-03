import React, { useEffect } from "react";
import { GifState } from "../contex/gif-context";
import Gif from "../components/Gif";
import FilterGif from "../components/FilterGif";
import GifSearch from "../components/GifSearch";

const Home = () => {
  const { gf, gifs, filter, setGifs} = GifState();

  const fetchTrendigGIFs = async () => {
    const { data } = await gf.trending({
      limit: 20,
      type: filter,
      rating: "g",
    });

    setGifs(data);
  };

  useEffect(() => {
    fetchTrendigGIFs();
  }, [filter]);

  return (
    <div>

      <img
        src="/banner.gif"
        alt="earth banner"
        className="mt-2 rounded w-full"
      />
      <FilterGif showTrending/>
      <div className="columns-2 md:columns-3 lg:colmns-4 xl:columns-5 gap-2">
        {gifs.map((gif) => {
          return <Gif gif={gif} key={gif?.title} />;
        })}
      </div>
    </div>
  );
};

export default Home;
