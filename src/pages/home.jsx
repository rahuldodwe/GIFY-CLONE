import React, { useEffect } from "react";
import { GifState } from "../contex/gif-context";
import Gif from "../components/Gif";
import FilterGif from "../components/FilterGif";
import GifSearch from "../components/GifSearch";

const Home = () => {
  const { gf, gifs, filter, setGifs} = GifState();

  const loadMore = () => {
    const fetchTrendigGIFs = async () => {
      let { data } = await gf.trending({
        limit: 20,
        type: filter,
        rating: "g",
      });
  
      setGifs(data);
    };
  
    useEffect(() => {
      fetchTrendigGIFs();
    }, [filter]);

  }

  const fetchTrendigGIFs = async () => {
    const { data } = await gf.trending({
      limit: 30,
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
      {/* <div className="pt-10 flex justify-center items-center">
      <button className="bg-green-500 px-2 rounded-md">Load more..</button>
      </div> */}
    </div>
  );
};

export default Home;
