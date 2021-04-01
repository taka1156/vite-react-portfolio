import React from 'react';
import Top from '@/pages/top/Top';
import Profile from '@/pages/profile/Profile';
import Skill from '@/pages/skill/Skill';
import Portfolio from '@/pages/portfolio/Portfolio';

const routes: Route[] = [
  {
    path: '/',
    exact: true,
    children: <Top />,
  },
  {
    path: '/profile',
    exact: true,
    children: <Profile />,
  },
  {
    path: '/skill',
    exact: true,
    children: <Skill />,
  },
  {
    path: '/portfolio',
    exact: true,
    children: <Portfolio />,
  },
];

const routesNav: RouteNav[] = [
  {
    name: 'top',
    path: '/',
  },
  {
    name: 'profile',
    path: './profile',
  },
  {
    name: 'skill',
    path: './skill',
  },
  {
    name: 'portfolio',
    path: './portfolio',
  },
];

export {routes, routesNav};
