import React from 'react';
import PortfolioCard from '@/components/PortfolioCard/PortfolioCard';
import './Portfolio.css'
import { PortfolioCards } from '@/constants/index';

const View = () => {
  return (
    <>
      <h2>Portfolio</h2>
      <div className="portfolio">
        {PortfolioCards.map((pCard: PortfolioCard) => (
          <PortfolioCard key={pCard.productName} card={pCard} />
        ))}
      </div>
    </>
  );
};

export default View;
