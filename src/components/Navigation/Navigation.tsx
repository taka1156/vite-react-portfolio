import React from 'react';
import { Link } from 'react-router-dom';
import { routesNav } from '@/routes/index';
import './Navigation.css';

const View = (): JSX.Element => {
  return (
    <div>
      <nav>
        <ul className="nav">
          {routesNav.map((route, i) => (
            <li key={`nav_${i}`} className="nav__item">
              <Link className="nav-item__box" to={route.path}>
                <div>
                  <img
                    className="nav__item-img"
                    src={`img/ui/${route.name}.png`}
                    alt={`${route.name}のアイコン`}
                  />
                  {route.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default View;
