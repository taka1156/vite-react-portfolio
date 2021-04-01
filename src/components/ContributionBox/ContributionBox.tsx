import React from 'react';
import './ContributionBox.css'

type PropsType = {
  github: string;
};

const View = (props: PropsType) => {
  return (
    <div className="contribution-box">
      <img
        className="contribution-box__img"
        src={`https://ghchart.rshah.org/${props.github}`}
        alt={`${props.github}'s Github chart`}
      />
    </div>
  );
};

export default View;
