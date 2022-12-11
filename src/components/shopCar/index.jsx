import React from "react";
import { useShopData } from "../../contexts/data";
import { ShopCarItem } from "../shopCarItem";

export const ShopCar = () => {
  const { productsSelected } = useShopData();
  const total = productsSelected
    .map((product) => product.price)
    .reduce((a, b) => a + b, 0);
  return (
    <section className="shopCarSection">
      {productsSelected.length === 0 ? (
        <h3>The car is empty</h3>
      ) : (
        productsSelected.map((product) => (
          <ShopCarItem
            img={product.img}
            name={product.name}
            price={product.price}
          />
        ))
      )}
      <article className="shopCarSection__info">
        <h3>Total</h3>
        <p>{total}$</p>
      </article>
    </section>
  );
};
