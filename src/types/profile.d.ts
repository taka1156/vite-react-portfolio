/**
 * UserProfile 
 */

type UserProfile = {
  userName: string;
  userIcon: string;
  comment: string;
};


/**
 * certifications
 */

type Certificate = {
  name: string;
}


/**
 * SNS
 */

type SnsType = {
  userName: string
  img: string;
  url: string;
}

type SnsAccount = {
  github: SnsType;
  twitter: SnsType;
  qiita: SnsType;
  other: SnsType;
};
