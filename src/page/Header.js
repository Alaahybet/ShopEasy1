import { Link, NavLink } from "react-router-dom";

const Icon = ({ children }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

export default function Header({ search, setSearch }) {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo" aria-label="ShopEasy home">
          <span className="logo-mark">
            <Icon>
              <circle cx="9" cy="20" r="1.4" />
              <circle cx="18" cy="20" r="1.4" />
              <path d="M2 3h3l2.6 12.4a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L20 7H6" />
            </Icon>
          </span>
          <span>Shop<b>Easy</b></span>
        </Link>

        <div className="search" role="search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search for products"
            aria-label="Search for products"
          />
        </div>

        <nav className="header-actions">
          <NavLink to="/cart" className={({ isActive }) => `icon-btn${isActive ? " active" : ""}`} aria-label="Cart" title="Cart">
            <Icon>
              <circle cx="9" cy="20" r="1.4" />
              <circle cx="18" cy="20" r="1.4" />
              <path d="M2 3h3l2.6 12.4a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L20 7H6" />
            </Icon>
          </NavLink>
          <NavLink to="/Acc" className={({ isActive }) => `icon-btn${isActive ? " active" : ""}`} aria-label="Account" title="Account">
            <Icon>
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
            </Icon>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
