import React from 'react';

const View = (props: SkillCard) => {

  // 星で熟練度を表現
  const generateStars = ({ level }: SkillCard) => {
    const stars = [];

    for (let i = 0; i < level; i++) {
      stars.push(<li>★</li>);
    }

    return stars;
  };

  return (
    <div>
      <h2>{props.skillName}</h2>
      <img src={props.skillImg} alt={`${props.skillName}の画像`} />
      <ul>{generateStars(props)}</ul>
      <p>{props.contents}</p>
    </div>
  );
};

export default {
  View,
};
