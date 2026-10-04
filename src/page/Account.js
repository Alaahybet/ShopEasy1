export default function Account() {
  return (
    <div className="panel">
      <h2>Welcome back</h2>
      <p className="sub">Sign in to your ShopEasy account.</p>
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@example.com" autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="••••••••" autoComplete="current-password" />
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    </div>
  );
}
