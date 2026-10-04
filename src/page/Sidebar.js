import { useState } from "react";

export default function Sidebar({ categoryList, active, onSelect }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className="sidebar-wrapper">
      <button
        className="menu-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="sidebar-panel"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        Categories
      </button>

      <div id="sidebar-panel" className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="sidebar-container">
          <div className="sidebar-title">Browse</div>
          {categoryList.map((category) => (
            <button
              key={category.id}
              className={`sidebar-item${active === category.id ? " active" : ""}`}
              onClick={() => onSelect(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
