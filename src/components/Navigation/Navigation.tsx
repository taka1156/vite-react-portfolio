import React from 'react';
import { Link, Router } from 'react-router-dom';
import { routesNav } from '@/constants/index';
import './Navigation.css';

const View = (): JSX.Element => {
  return (
    <div>
      <nav>
        <ul className="nav">
          {routesNav.map((route, i) => (
            <li key={`nav_${i}`} className="nav__item">
              <img className="nav__item-img" src={`img/ui/${route.name}.png`} alt={`${route.name}のアイコン`} />
              <Link className="nav__item-link" to={route.path}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default View;
