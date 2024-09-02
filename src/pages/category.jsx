import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const [results, setResults] = useState([]);

  const {category} = useParams();

  return <div>Category</div>;
};

export default Category;
