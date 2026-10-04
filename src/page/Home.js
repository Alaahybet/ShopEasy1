import Sidebar from "./Sidebar";
import Categories from "./Categories";

export default function Home({ search, categoryList, active, setActive , products }) {
  return (
    <>
      <section className="hero">
        <span className="hero-tag">ShopEasy ShopCast</span>
        <h2>Discover fashion, electronics and home essentials all in one place.</h2>
      </section>

      <div className="layout">
        <Sidebar categoryList={categoryList} active={active} onSelect={setActive} />
        <div className="content">
          <Categories
            search={search}
            categoryList={categoryList}
            active={active}
            onSelect={setActive}
            products={products}
          />
        </div>
      </div>
    </>
  );
}
