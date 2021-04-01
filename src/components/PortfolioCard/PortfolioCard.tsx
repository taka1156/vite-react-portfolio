import React from 'react';
import './PortfolioCard.css';

type PropsType = {
  card: PortfolioCard;
};

const View = (props: PropsType) => {
  return (
    <div className="portfolio-card">
      <img
        className="portfolio-card__img"
        src={props.card.productImg}
        alt={`${props.card.productName}の画像`}
      />
      <h2 className="portfolio-card__title">{props.card.productName}</h2>
      <ul className="portfolio-card__lang">
        {props.card.langs.map((lang) => (
          <li key={lang} className="portfolio-card__lang-item">{lang},</li>
        ))}
      </ul>
      <p className="portfolio-card__contents">{props.card.contents}</p>
      <a className="portfolio-card__link" href={props.card.productUrl}>詳細</a>
    </div>
  );
};

export default View;
