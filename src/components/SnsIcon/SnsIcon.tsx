import React from 'react';
import './SnsIcon.css';

type PropsType = {
  sns: SnsAccount;
};

type SnsAccounts = SnsType & {
  key: string;
};

const View = (props: PropsType) => {
  let snsList: SnsAccounts[] = [];

  const SnsObjToArray = () => {
    const snsObj = props.sns;
    snsList = Object.entries(snsObj).map(([key, value]) => {
      return {
        key: key,
        ...value,
      };
    });
  };

  SnsObjToArray();

  return (
    <ul className="sns-icon">
      {snsList.map((account: SnsAccounts) => (
        <li key={account.key}>
          <a className="sns-icon__item" href={account.url}>
            <img
              className="sns-icon__img"
              src={account.img}
              alt={`${account.key}アイコン`}
            />
            {account.key}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default View;
