import React from "react";

interface IProductParams {
  params: { id: string };
}

const Product = ({ params }: IProductParams) => {
  return <div>ID: {params.id}</div>;
};

export default Product;
