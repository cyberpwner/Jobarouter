import { Link, NavLink, Outlet } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1 className="text-logo">
            <Link href="/">Jobarouter</Link>
          </h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </nav>
        <Breadcrumbs />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
