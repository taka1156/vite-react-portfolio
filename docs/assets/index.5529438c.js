var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,r=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,n=(e,n)=>{for(var c in n||(n={}))t.call(n,c)&&r(e,c,n[c]);if(a)for(var c of a(n))l.call(n,c)&&r(e,c,n[c]);return e};import{r as c,L as o,a as m,B as s,S as i,R as p}from"./vendor.3961f9a4.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const l=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,n)=>{const c=new URL(e,l);if(self[t].moduleMap[c])return a(self[t].moduleMap[c]);const o=new Blob([`import * as m from '${c}';`,`${t}.moduleMap['${c}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){n(new Error(`Failed to import: ${e}`)),r(m)},onload(){a(self[t].moduleMap[c]),r(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}}("/vite-react-portfolio/assets/");const u={userName:"taka1156",userIcon:"./img/sns/prof.png",comment:"プログラミングは、大学1年から触り始めC、Java、Python3などを学びました。現在は、TypeScriptやPHP(+Laravel)について学習しています。"},d=[{name:"ITパスポート"},{name:"情報セキュリティマネジメント"},{name:"基本情報技術者試験"},{name:"応用情報技術者試験"}],g={github:{userName:"taka1156",img:"./img/sns/github-logo.png",url:""},twitter:{userName:"taka_1156",img:"./img/sns/twitter-logo.png",url:""},qiita:{userName:"taka_1156",img:"./img/sns/qiita-logo.png",url:""},other:{userName:"taka1156",img:"./img/sns/prof.png",url:""}},f=[{skillName:"vue",level:2,contents:"Vue3、vite環境などでcomposition apiなどを試しています。"},{skillName:"nuxt",level:3,contents:"初めて触れたフレームワークです。Nuxtは、SSGなども一通り触っています。"},{skillName:"electron",level:2,contents:"サンプルサンプルサンプルサンプルサンプルサンプルサンプル"},{skillName:"express",level:1,contents:"サンプルサンプルサンプルサンプルサンプルサンプルサンプル"}],E=[{productName:"ポートフォリオ",productImg:"./img/portfolio/default.png",productUrl:"https://www.taka1156.site",langs:["Nuxt","firebase","jest","Storybook"],contents:"microCMS + Nuxt(SSG)を利用して作ったサイト"},{productName:"ブログサイト",productImg:"/img/portfolio/default.png",productUrl:"https://blog.taka1156.site",langs:["Nuxt","marked.js","jest","Storybook"],contents:"マークダウンで記述したブログで目次やタグ、カテゴリ、OGPなども作成"},{productName:"チャットサイト",productImg:"./img/portfolio/default.png",productUrl:"",langs:["Vue","firebase"],contents:"サンプルサンプルサンプルサンプルサンプルサンプルサンプル"},{productName:"line ボット",productImg:"/img/portfolio/default.png",productUrl:"",langs:["express","line-bot-sdk-nodejs"],contents:"サンプルサンプルサンプルサンプルサンプルサンプルサンプル"}],N=()=>c.createElement(c.Fragment,null,c.createElement("div",{className:"top"},c.createElement("h1",{className:"top__main-title"},"Welcome To Taka's Portfolio"),c.createElement("p",{className:"top__sub-title"},"This site is created by Vite + React")));const _=e=>c.createElement("div",{className:"profile-box"},c.createElement("img",{className:"profile-box__img",src:e.userProfile.userIcon,alt:"プロフィールロゴアイコン"}),c.createElement("p",{className:"profile-box__comment"},e.userProfile.comment));const h=e=>c.createElement("div",{className:"contribution-box"},c.createElement("img",{className:"contribution-box__img",src:`https://ghchart.rshah.org/${e.github}`,alt:`${e.github}'s Github chart`}));const k=e=>c.createElement("ul",{className:"profile-list"},e.certificaations.map((e=>c.createElement("li",{key:e.name,className:"profile-list-item"},e.name))));const b=e=>{let t=[];return(()=>{const a=e.sns;t=Object.entries(a).map((([e,t])=>n({key:e},t)))})(),c.createElement("ul",{className:"sns-icon"},t.map((e=>c.createElement("li",{key:e.key},c.createElement("a",{className:"sns-icon__item",href:e.url},c.createElement("img",{className:"sns-icon__img",src:e.img,alt:`${e.key}アイコン`}),e.key)))))},v=()=>c.createElement(c.Fragment,null,c.createElement("h2",null,"Profile"),c.createElement(_,{userProfile:u}),c.createElement(h,{github:g.github.userName}),c.createElement(k,{certificaations:d}),c.createElement(b,{sns:g}));const y=e=>c.createElement("div",{className:"skill-card"},c.createElement("img",{className:"skill-card__img",src:`./img/skill/${e.card.skillName}.png`,alt:`${e.card.skillName}の画像`}),c.createElement("h2",{className:"skill-card__title"},e.card.skillName),c.createElement("ul",{className:"skill-card__star"},(({level:e})=>{const t=[];for(let a=0;a<e;a++)t.push(c.createElement("li",{className:"skill-card__star-item"},"★"));return t})(e.card)),c.createElement("p",{className:"skill-card__contents"},e.card.contents));const x=()=>c.createElement(c.Fragment,null,c.createElement("h2",null,"Portfolio"),c.createElement("div",{className:"skill"},f.map((e=>c.createElement(y,{key:e.skillName,card:e})))));const P=e=>c.createElement("div",{className:"portfolio-card"},c.createElement("img",{className:"portfolio-card__img",src:e.card.productImg,alt:`${e.card.productName}の画像`}),c.createElement("h2",{className:"portfolio-card__title"},e.card.productName),c.createElement("ul",{className:"portfolio-card__lang"},e.card.langs.map((e=>c.createElement("li",{key:e,className:"portfolio-card__lang-item"},e,",")))),c.createElement("p",{className:"portfolio-card__contents"},e.card.contents),c.createElement("a",{className:"portfolio-card__link",href:e.card.productUrl},"詳細"));const j=()=>c.createElement(c.Fragment,null,c.createElement("h2",null,"Portfolio"),c.createElement("div",{className:"portfolio"},E.map((e=>c.createElement(P,{key:e.productName,card:e}))))),w=[{path:"/",exact:!0,children:c.createElement(N,null)},{path:"/profile",exact:!0,children:c.createElement(v,null)},{path:"/skill",exact:!0,children:c.createElement(x,null)},{path:"/portfolio",exact:!0,children:c.createElement(j,null)}],$=[{name:"top",path:"/"},{name:"profile",path:"./profile"},{name:"skill",path:"./skill"},{name:"portfolio",path:"./portfolio"}];const O=()=>c.createElement("div",null,c.createElement("nav",null,c.createElement("ul",{className:"nav"},$.map(((e,t)=>c.createElement("li",{key:`nav_${t}`,className:"nav__item"},c.createElement(o,{className:"nav-item__box",to:e.path},c.createElement("div",null,c.createElement("img",{className:"nav__item-img",src:`img/ui/${e.name}.png`,alt:`${e.name}のアイコン`}),e.name))))))));m.render(c.createElement(c.StrictMode,null,c.createElement(s,{basename:"/vite-react-portfolio/"},c.createElement(O,null),c.createElement(i,null,w.map(((e,t)=>c.createElement(p,n({key:`route_${t}`},e))))))),document.getElementById("root"));
