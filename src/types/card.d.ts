/**
 *
 * カード型レイアウト型定義
 *
 */

/**
 * skillName フレームワークやライブラリの名称
 * skillImg 言語やフレームワークのロゴ画像URL
 * level 習熟度?(0 ~ 5)
 * contents 概略
 */

type SkillCard = {
  skillName: string;
  level: 0 | 1 | 2 | 3 | 4 | 5;
  contents: string;
};

/**
 * productName 製作物の名前
 * productImg 製作物の画像URL
 * langs 使用した言語(vue, react, TS、PHP、Laravelなど)
 * contents 概略
 */

type PortfolioCard = {
  productName: string;
  productImg: string;
  productUrl: string;
  langs: string[];
  contents: string;
};

type Cards = (SkillCard | PortfolioCard)[];
