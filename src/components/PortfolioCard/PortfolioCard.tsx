import React from 'react';

const View = (props: PortfolioCard) => {
  return (
    <div>
      <h2>{props.productName}</h2>
      <img src={props.productImg} alt={`${props.productName}の画像`} />
      <ul>
        {props.langs.map((lang) => (
          <li>{lang}</li>
        ))}
      </ul>
      <p>{props.contents}</p>
    </div>
  );
};

export default {
  View,
};
