import React from "react";
import { useParams } from "react-router-dom";

function ProductCompo() {
  const { params } = useParams();
  return (
    <div>
      ProductCompo
      <h3>{params.num}</h3>
    </div>
  );
}

export default ProductCompo;
