import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Menu(props) {
  const {
    routes,
  } = props;

  return (
    <nav id="menu">
      {routes.map(({ path, name, showInMenu }, idx) => (
        showInMenu && (
          <Link
            to={path}
            key={`item-${idx}`}
          >
            {name}
          </Link>
        )
      ))}
    </nav>
  );
}

export default Menu;
