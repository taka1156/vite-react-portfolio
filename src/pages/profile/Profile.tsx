import React from 'react';
import ProfileBox from '@/components/ProfileBox/ProfileBox';
import ContributionBox from '@/components/ContributionBox/ContributionBox';
import CertificateList from '@/components/CertificateList/CertificateList';
import SnsIcon from '@/components/SnsIcon/SnsIcon';
import { USER_PROFILE, CERTIFICATIONS, SNS_ACCOUNTS } from '@/constants/index';

const View = () => {
  return (
    <>
      <h2>Profile</h2>
      <h3>自己紹介</h3>
      <ProfileBox userProfile={USER_PROFILE} />
      <h3>Githubの活動</h3>
      <ContributionBox github={SNS_ACCOUNTS.github.userName} />
      <h3>資格</h3>
      <CertificateList certificaations={CERTIFICATIONS} />
      <h3>SNS</h3>
      <SnsIcon sns={SNS_ACCOUNTS} />
    </>
  );
};

export default View;
