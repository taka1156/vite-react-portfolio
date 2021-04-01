import React from 'react';
import ProfileBox from '@/components/ProfileBox/ProfileBox';
import ContributionBox from '@/components/ContributionBox/ContributionBox';
import CertificateList from '@/components/CertificateList/CertificateList';
import SnsIcon from '@/components/SnsIcon/SnsIcon';
import { USER_PROFILE, CERTIFICATIONS, SNS_ACCOUNT } from '@/constants/index';

const View = () => {
  return (
    <>
      <h2>Profile</h2>
      <ProfileBox userProfile={USER_PROFILE} />
      <ContributionBox github={SNS_ACCOUNT.github.userName} />
      <CertificateList certificaations={CERTIFICATIONS} />
      <SnsIcon sns={SNS_ACCOUNT} />
    </>
  );
};

export default View;
