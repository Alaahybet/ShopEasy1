import Sidebar from "./Sidebar";
import Categories from "./Categories";

export default function Home({ search, categoryList, active, setActive }) {
  return (
    <>
      <section className="hero">
        <span className="hero-tag">New season</span>
        <h2>Everything you need, delivered easy.</h2>
        <p>Discover fashion, electronics and home essentials all in one place.</p>
      </section>

      <div className="layout">
        <Sidebar categoryList={categoryList} active={active} onSelect={setActive} />
        <div className="content">
          <Categories
            search={search}
            categoryList={categoryList}
            active={active}
            onSelect={setActive}
          />
        </div>
      </div>
    </>
  );
}
