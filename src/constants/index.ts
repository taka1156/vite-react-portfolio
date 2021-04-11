/**
 * Top
 */

const SITE_TITLE: string = "Welcome To Taka's Portfolio";
const SITE_SUBTITLE: string = 'This site is created by Vite + React';

/**
 * Profile
 */

const USER_PROFILE: UserProfile = {
  userName: 'taka1156',
  userIcon: './img/sns/prof.png',
  comment:
    'プログラミングは、大学1年から触り始めC、Java、Python3などを学びました。現在は、TypeScriptやPHP(+Laravel)について学習しています。',
};

const CERTIFICATIONS: Certificate[] = [
  {
    name: 'ITパスポート',
  },
  {
    name: '情報セキュリティマネジメント',
  },
  {
    name: '基本情報技術者試験',
  },
  {
    name: '応用情報技術者試験',
  },
];

const SNS_ACCOUNTS: SnsAccounts = {
  github: {
    userName: 'taka1156',
    img: './img/sns/github-logo.png',
    url: '',
  },
  twitter: {
    userName: 'taka_1156',
    img: './img/sns/twitter-logo.png',
    url: '',
  },
  qiita: {
    userName: 'taka_1156',
    img: './img/sns/qiita-logo.png',
    url: '',
  },
  other: {
    userName: 'taka1156',
    img: './img/sns/prof.png',
    url: '',
  },
};

/**
 * Skill
 */

// 70文字程度

const SkillCards: SkillCard[] = [
  {
    skillName: 'vue',
    level: 2,
    contents: 'Vue3、vite環境などでcomposition apiなどを試しています。',
  },
  {
    skillName: 'nuxt',
    level: 3,
    contents:
      '初めて触れたフレームワークです。Nuxtは、SSGなども一通り触っています。',
  },
  {
    skillName: 'electron',
    level: 2,
    contents: 'サンプルサンプルサンプルサンプルサンプルサンプルサンプル',
  },
  {
    skillName: 'express',
    level: 1,
    contents: 'サンプルサンプルサンプルサンプルサンプルサンプルサンプル',
  }
];

/**
 * Portfolio
 */

const PortfolioCards: PortfolioCard[] = [
  {
    productName: 'ポートフォリオ',
    productImg: './img/portfolio/default.png',
    productUrl: 'https://www.taka1156.site',
    langs: ['Nuxt', 'firebase', 'jest', 'Storybook'],
    contents: 'microCMS + Nuxt(SSG)を利用して作ったサイト',
  },
  {
    productName: 'ブログサイト',
    productImg: './img/portfolio/default.png',
    productUrl: 'https://blog.taka1156.site',
    langs: ['Nuxt', 'marked.js', 'jest', 'Storybook'],
    contents:
      'マークダウンで記述したブログで目次やタグ、カテゴリ、OGPなども作成',
  },
  {
    productName: 'チャットサイト',
    productImg: './img/portfolio/default.png',
    productUrl: '',
    langs: ['Vue', 'firebase'],
    contents: 'サンプルサンプルサンプルサンプルサンプルサンプルサンプル',
  },
  {
    productName: 'line ボット',
    productImg: './img/portfolio/default.png',
    productUrl: '',
    langs: ['express', 'line-bot-sdk-nodejs'],
    contents: 'サンプルサンプルサンプルサンプルサンプルサンプルサンプル',
  },
];

export {
  SITE_TITLE,
  SITE_SUBTITLE,
  USER_PROFILE,
  CERTIFICATIONS,
  SNS_ACCOUNTS,
  SkillCards,
  PortfolioCards,
};
