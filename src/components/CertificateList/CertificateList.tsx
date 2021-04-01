import React from 'react';
import './CertificateList.css';

type PropsType = {
  certificaations: Certificate[];
};

const View = (props: PropsType) => {
  return (
    <ul className="profile-list">
      {props.certificaations.map((certification: Certificate) => (
        <li key={certification.name} className="profile-list-item">
          {certification.name}
        </li>
      ))}
    </ul>
  );
};

export default View;
