/**
 * FBCサロン Q&Aダッシュボード
 * サロンの使い方 質問＆解説LIVE（2026/07/01）まとめ
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('FBCサロン Q&Aまとめ | 質問＆解説LIVE 2026.07.01')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
