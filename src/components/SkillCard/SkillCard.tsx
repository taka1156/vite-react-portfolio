import React from 'react';

const View = (props: SkillCard) => {
  return (
    <div>
      <h2>{props.skillName}</h2>
      <img src={props.skillImg} alt={`${props.skillName}の画像`} />
      <ul>
        {[...new Array(props.level)].map((lang) => (
          <li>★</li>
        ))}
      </ul>
      <p>{props.contents}</p>
    </div>
  );
};

export default {
  View,
};
