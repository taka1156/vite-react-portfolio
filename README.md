# vite-react-portfolio

> Vite + React + TypeScrptで作成した簡易ポートフォリオサイト

## 特徴
[`constants/index.ts`](https://github.com/taka1156/vite-react-portfolio/blob/master/src/constants/index.ts)の書き換えで簡単に内容を追加、変更できるようにしてみました。

## 表示内容設定

基本的には、`constants/index.ts`の中身の差し替えで内容を変更できます.
(ポートフォリオやスキルの言語ロゴ、プロフィールアイコンは`public/img`の対応するフォルダに画像を追加する必要があります。)

### Top

```typescript
/**
 * Top
 */

const SITE_TITLE: string = "Welcome To Taka's Portfolio";
const SITE_SUBTITLE: string = 'This site is created by Vite + React';
```

サイトタイトルの設定

### Profile

```typescript
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

const SNS_ACCOUNT: SnsAccount = {
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
```

自己紹介
資格
sns

の設定をそれぞれ行うことができます

### SKill

```typescript
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
```

やったことのあるフレームワークや言語の登録
`public/img/skill/${skillName}.png`でパスを作るため、画像ファイル名は、小文字で`skillName`と一致するように保存してください。
(画像はこちらで取得し適宜pngに変換してください[svg porn](https://svgporn.com/))

### Portfolio

```typescirpt
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
```

制作物の登録を行えます。


## 使ったもの
- react
- react-router-dom

## 大まかな変更点

- [x] 2021/03/25 リポジトリ作成
- [ ] 2021/04/01 完成 
