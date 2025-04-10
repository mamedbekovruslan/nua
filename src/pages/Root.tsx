import { Link, Outlet } from "react-router";

export const Root = () => (
  <div>
    <nav>
      <Link to="/">Главая</Link>
      <Link to="/about">О нас</Link>
    </nav>
    <hr />
    <Outlet />
  </div>
);
