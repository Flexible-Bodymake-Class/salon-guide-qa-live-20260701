# salon-guide-qa-live-20260701

FBC（Flexible Bodymake Class）サロンガイドQ&A — 2026-07-01 LIVEの質問回答まとめサイト。

公開URL: https://flexible-bodymake-class.github.io/salon-guide-qa-live-20260701/

## 概要

もとはGoogle Apps Script（GAS）のWebアプリとして作成されたQ&Aダッシュボードを、GitHub Pagesで静的サイトとして公開したもの。

## データ更新方法

`index.html` 内の `const DATA` 配列を直接編集し、GitHubへpushすれば公開サイトに反映される。

```
git add index.html
git commit -m "Q&Aデータ更新"
git push
```

## gas-original/ について

移行元であるGAS Webアプリのコードのアーカイブ。`コード.js`（サーバーサイド処理）と `appsscript.json`（マニフェスト）を保存している。現在の公開サイトの動作には使用していない。
