import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ShopDataContext = createContext();
const apiFakeStore = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
});

export function ShopDataProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productsSelected, setProductsSelected] = useState([]);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  async function getCategories() {
    try {
      const { data, status } = await apiFakeStore("categories");
      setCategories(data);
    } catch (error) {
      alert(`No se pudo encontrar las categorias: ${error.message}`);
    }
  }
  async function getProducts() {
    try {
      const { data, status } = await apiFakeStore("products");
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      alert(`No se pudo encontrar las categorias: ${error.message}`);
    }
  }

  function selectCategory(input) {
    setCategorySelected(input);
  }

  const data = {
    categories,
    products,
    filteredProducts,
    setFilteredProducts,
    categorySelected,
    selectCategory,
    productsSelected,
    setProductsSelected,
  };
  return (
    <ShopDataContext.Provider value={data}>{children}</ShopDataContext.Provider>
  );
}

export function useShopData() {
  const shopData = useContext(ShopDataContext);
  return shopData;
}
