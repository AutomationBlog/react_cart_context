import { useState } from "react";
import Menu from "./components/menu/menu.jsx";
import Header from "./components/header/header.jsx";
import Product from "./components/product/product.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Menu cart={cart} />
      <Header />
      <Product cart={cart} setCart={setCart} />
      <Footer />
    </>
  );
}

export default App;
