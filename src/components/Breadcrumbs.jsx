import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
  const { pathname } = useLocation();

  let currentLink = '';

  const crumbs = pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
}

export default Breadcrumbs;
