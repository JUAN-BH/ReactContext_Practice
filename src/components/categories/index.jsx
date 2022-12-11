import React from "react";
import { useShopData } from "../../contexts/data";

export const Categories = () => {
  const { categories, selectCategory } = useShopData();
  return (
    <section className="categoriesSection">
      <h2>Categories</h2>
      <ul className="categoriesSection__categoriesList">
        {categories.map((category) => (
          <li key={category.id} onClick={() => selectCategory(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
    </section>
  );
};
