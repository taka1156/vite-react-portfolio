import React from 'react';
import './ProfileBox.css'

type PropsType = {
  userProfile: UserProfile;
};

const View = (props: PropsType) => {
  return (
    <div className="profile-box">
      <img
        className="profile-box__img"
        src={props.userProfile.userIcon}
        alt="プロフィールロゴアイコン"
      />
      <p className="profile-box__comment">{props.userProfile.comment}</p>
    </div>
  );
};

export default View;
