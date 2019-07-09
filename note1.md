# Complete React Developer in 2019

Udemy - [Complete React Developer in 2019](https://www.udemy.com/complete-react-developer-zero-to-mastery/)に関するまとめ

+ 従来は、  
　ユーザーのアクションのたびにサーバーからHTML,CSS, JSを取得

+ Jquery  
  DOM操作が楽になった -> アプリケーションが大きくなった

+ Single page aplication + AJAX

+ angular  
  コンポーネントごとに分けれたが、関係性が複雑

+ React (2013)
  1. Don't touch the DOM
  1. Bulding websites like lego blocks
  1. Unidirectional Data Flow
  1. UI - everywhere use


# The Job of A React Developer

1. Decide  on Components
1. Decide the State and where it lives
1. What changes when state changes

# Install

[nvm](https://github.com/nvm-sh/nvm) - node管理パッケージ

```javascript
//
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

//source ~/.bashrc　を追記
nano ~/.bash_profile
source ~/.bash_profile

//nvm によりインストールされたか確認
```

[node.js](https://nodejs.org/ja/)
```javascript

//サイトの最新バージョンをインストール
nvm install 10.16.0

//使用するver選択
nvm use 10.16.0

node -v
npm -v
```

[yarn](https://yarnpkg.com/lang/ja/docs/install/#mac-stabl)もNPMマネージャとして使用可能  

Reactプロジェクトの作成

```javascript
//node.js ver 10 or higher
//react

npx create-react-app my-app
```

[CodeSandbox](https://codesandbox.io/)

# BABEL and webpack

+ BABEL  
  ブラウザへの互換性向上

+ webpack  
  modele bundler
  複数になっているモジュールをまとめる

# 講座内で調べた参考記事

## JavaScript

+ Promise
  + [【JavaScript入門】誰でも分かるPromiseの使い方とサンプル例まとめ！](https://www.sejuku.net/blog/52314)

+ クラス内での関数定義 Sec.3 - 38 Excercise: Event Binding (ここ重要)

## CSS

+ [backface-visibility](https://dekiru.net/article/13256/)
+ [-moz-osx-font-smoothing](http://chocolu.net/blog/?p=312)
+ [transform/transtion](https://takuo4649design.com/weblog/note/archives/8933)