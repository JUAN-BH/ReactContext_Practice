import React from "react";
import { useShopData } from "../../contexts/data";

export const Product = ({ img, name, price }) => {
  const { setProductsSelected } = useShopData();

  function selectProducts() {
    setProductsSelected((prev) => [...prev, { name, price, img }]);
  }

  return (
    <article className="productsSection__product" onClick={selectProducts}>
      <picture>
        <img src={img} alt="" />
      </picture>
      <div className="productsSection__product__info">
        <h3>{name}</h3>
        <h4>{price}$</h4>
      </div>
    </article>
  );
};
