import { ShopDataProvider } from "./contexts/data";
import { Categories } from "./components/categories";
import { Products } from "./components/products";
import { ShopCar } from "./components/shopCar";

function App() {
  return (
    <ShopDataProvider>
      <Categories />
      <Products />
      <ShopCar />
    </ShopDataProvider>
  );
}

export default App;
