import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const contentType = ["gifs", "stickers", "texts"];

const GifPage = () => {
  const {type, slug} = useParams();
  const [gif, setGif] = useState({});
  const [relatedGifs, setRelatedGifs] = useState([]);

  const {gf} = GifState();

  const fetchGif = async () => {
    const gitId = slug.split("-");
    const {data} = await gf.gif(gifId[gifId.length - 1]);
    const {data: related} = await gf.related(gitId[gifId.length -1], {
      limit: 10,
    });
    setGif(data);
    setRelatedGifs(related);
  }

  useEffect(() => {
    if(!contentType.includes(type)) {
      throw new Error("Invalid Content Type");
    }
  },[])
  return <div>GifPage</div>;
};

export default GifPage;
