export default function Categories({ search, categoryList, active, onSelect }) {
  const activeLabel = categoryList.find((c) => c.id === active)?.label ?? "All";

  return (
    <div>
      <div className="chips" role="tablist" aria-label="Product categories">
        {categoryList.map((category) => (
          <button
            key={category.id}
            role="tab"
            aria-selected={active === category.id}
            className={`chip${active === category.id ? " active" : ""}`}
            onClick={() => onSelect(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="section-head">
        <h3>{activeLabel}</h3>
        <span>{search ? `Results for "${search}"` : "0 products"}</span>
      </div>

      <div className="empty">
        <div className="empty-icon">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 8 12 3 3 8l9 5 9-5Z" />
            <path d="M3 8v8l9 5 9-5V8" />
            <path d="M12 13v8" />
          </svg>
        </div>
        <h3>No products yet</h3>
        <p>Products in this category will show up here once they are added.</p>
      </div>
    </div>
  );
}
