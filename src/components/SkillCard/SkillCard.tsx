import React from 'react';
import './SkillCard.css';

type PropsType = {
  card: SkillCard;
};

const View = (props: PropsType) => {
  // 星で熟練度を表現
  const generateStars = ({ level }: SkillCard) => {
    const stars = [];

    for (let i = 0; i < level; i++) {
      stars.push(<li key={i} className="skill-card__star-item">★</li>);
    }

    return stars;
  };

  return (
    <div className="skill-card">
      <img className="skill-card__img" src={`./img/skill/${props.card.skillName}.png`} alt={`${props.card.skillName}の画像`} />
      <h2 className="skill-card__title">{props.card.skillName}</h2>
      <ul className="skill-card__star">{generateStars(props.card)}</ul>
      <p className="skill-card__contents">{props.card.contents}</p>
    </div>
  );
};

export default View;
