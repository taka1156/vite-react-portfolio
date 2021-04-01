import React from 'react';
import './Top.css';
import { SITE_TITLE, SITE_SUBTITLE } from '@/constants/index';

const View = () => {
  return (
    <>
      <div className="top">
        <h1 className="top__main-title">{SITE_TITLE}</h1>
        <p className="top__sub-title">{SITE_SUBTITLE}</p>
      </div>
    </>
  );
};

export default View;
