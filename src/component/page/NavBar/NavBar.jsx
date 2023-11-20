import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <h1>Casino</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create">New Blog</Link>
        </div>
      </nav>
    </div>
  );
}
