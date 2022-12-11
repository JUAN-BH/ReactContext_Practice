import React from "react";
import { useShopData } from "../../contexts/data";

export const ShopCarItem = ({ img, name, price }) => {
  const { productsSelected, setProductsSelected } = useShopData();

  function deleteProduct() {
    const newItems = productsSelected.filter(
      (product) => product.name !== name
    );
    setProductsSelected(newItems);
  }

  return (
    <article className="shopCarSection__product">
      <div className="shopCarSection__product__info">
        <img src={img} alt={name} />
        <div className="shopCarSection__product__info__namePrice">
          <h3>{name}</h3>
          <p>{price}$</p>
        </div>
      </div>
      <button onClick={deleteProduct}>X</button>
    </article>
  );
};
