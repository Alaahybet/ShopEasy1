import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div>
      <h1 className="page-title">Shopping Cart</h1>
      <div className="empty">
        <div className="empty-icon">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="9" cy="20" r="1.4" />
            <circle cx="18" cy="20" r="1.4" />
            <path d="M2 3h3l2.6 12.4a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L20 7H6" />
          </svg>
        </div>
        <h3>Your cart is empty</h3>
        <p>Looks like you haven't added anything yet. Start browsing to find something you love.</p>
        <Link to="/" className="btn btn-primary">Continue shopping</Link>
      </div>
    </div>
  );
}
