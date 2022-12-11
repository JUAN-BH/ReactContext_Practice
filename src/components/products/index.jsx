import React from "react";
import { useEffect } from "react";
import { useShopData } from "../../contexts/data";
import { Product } from "../product";

export const Products = () => {
  const { products, categorySelected, filteredProducts, setFilteredProducts } =
    useShopData();

  useEffect(() => {
    const filterProducts = products.filter(
      (product) => product.category.id === categorySelected
    );
    setFilteredProducts(filterProducts);
  }, [categorySelected]);

  return (
    <section className="productsSection">
      {filteredProducts.map((product) => (
        <Product
          key={product.id}
          img={product.images[0]}
          name={product.title}
          price={product.price}
        />
      ))}
    </section>
  );
};
