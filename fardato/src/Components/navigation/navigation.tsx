import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Welcome</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}
