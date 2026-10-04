import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
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
 const[products , setProducts] = useState([]);

useEffect(() => {
  fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) =>{
    setProducts(data.products);
  });
} , []); 



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
                  products={products}
                />
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Acc" element={<Account />} />
          </Routes>
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
