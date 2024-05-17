import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/menu/menu.jsx";
import Header from "./components/header/header.jsx";
import Product from "./components/product/product.jsx";
import Footer from "./components/footer/footer.jsx";
import Cart from "./components/cart/cart.jsx";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function HomePage() {
  return (
    <>
      <Menu />
      <Header />
      <Product />
      <Footer />
    </>
  );
}

function CartPage() {
  return (
    <>
      <Menu />
      <Cart />
    </>
  );
}

export default App;
