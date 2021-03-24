/**
 * 
 * カード型レイアウト型定義
 * 
 */

/**
 * @param skillName フレームワークやライブラリの名称
 * @param skillImg　言語やフレームワークのロゴ画像URL
 * @param level　習熟度?(0 ~ 5)
 * @param contents 概略
 */

type SkillCard = {
  skillName: string;
  skillImg: string;
  level: 0|1|2|3|4|5;
  contents: string;
};

/**
 * @param productName 製作物の名前
 * @param 製作物の画像URL
 * @param langs　使用した言語(vue, react, TS、PHP、Laravelなど)
 * @param contents 概略
 */

type PortfolioCard = {
    productName: string;
    productImg: string;
    langs: string[];
    contents: string;
  };
  