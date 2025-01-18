import { Link } from "react-router";
import { useDisconnect } from "wagmi";

export function Header() {
  const { disconnect } = useDisconnect();
  return (
    <header>
      <div className="page-wrap flex justify-between">
        <span>Logo</span>
        <nav>
          <button onClick={() => disconnect()}>disconnect</button>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
