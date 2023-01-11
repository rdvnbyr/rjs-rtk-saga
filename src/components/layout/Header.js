import { Link } from 'react-router-dom';

export function Header({ isAuthenticated }) {
  return (
    <header className="main-header">
      <h1 className="fs-2">React Redux Toolkit</h1>
      <nav className="navigation">
        <ul className="navigation-links">
          <li className="col-auto">
            <Link to="/">Home</Link>
          </li>
          {!isAuthenticated && (
            <>
              <li className="col-auto">
                <Link to="/login">Login</Link>
              </li>
              <li className="col-auto">
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
          {isAuthenticated && (
            <li className="col-auto">
              <Link to="/logout">logout</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
