import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./page/Header";
import Home from "./page/Home";
import Cart from "./page/Cart";
import Account from "./page/Account";

const categoriesList = [
  { id: "All", label: "All" },
  { id: "Men'sFashion", label: "Men's Fashion" },
  { id: "Women'sFashion", label: "Women's Fashion" },
  { id: "Electronics", label: "Electronics" },
  { id: "Home&Living", label: "Home & Living" },
  { id: "Accessories", label: "Accessories" },
];

function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="App">
      <HashRouter>
        <Header search={search} setSearch={setSearch} />
        <main className="page">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  search={search}
                  categoryList={categoriesList}
                  active={activeCategory}
                  setActive={setActiveCategory}
                />
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Acc" element={<Account />} />
          </Routes>
        </main>
      </HashRouter>

      <footer className="footer">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} ShopEasy. All rights reserved.</span>
          <span>Free delivery on orders over $50</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
