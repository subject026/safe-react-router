import { Link } from "react-router";
import { useAccount } from "wagmi";

export function Header() {
  return (
    <header>
      <div className="page-wrap flex justify-between">
        <span>Safe & React Router</span>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
