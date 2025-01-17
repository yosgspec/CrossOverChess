
# ShogiCross(将棋クロス)
![](img/logo.min.svg)　<img src="img/all.png" height="200px">  
様々な将棋類を将棋駒として実体化するプロジェクト。

## [収録ゲーム](http://shogicross.yosgspec.com/#playBoard)
* 将棋
* チェス
* シャンチー
* チャンギ
* マークルック
* チャトランガ
* どうぶつしょうぎ
* 禽将棋
* 中将棋
* Grand Acedrex
* クーリエチェス
* その他バリエーション等

### [駒情報](doc/pieces/README.md)
実装済の駒の定義一覧。

## Webアプリ
[![Build](https://github.com/yosgspec/ShogiCross/actions/workflows/build.yml/badge.svg)](https://github.com/yosgspec/ShogiCross/actions/workflows/build.yml)
[![npm version](https://badge.fury.io/js/shogicross.svg)](https://badge.fury.io/js/shogicross)
[![CC0-1.0](https://custom-icon-badges.herokuapp.com/badge/license-CC0%201.0-8BB80A.svg?logo=law&logoColor=white)](LICENSE)  
様々な将棋類の駒を並べるだけの将棋盤のようなツール。

### 実装
* [ShogiCross App](http://shogicross.yosgspec.com/#app)
* [単品ゲーム集](http://shogicross.yosgspec.com/#dist)
* [将棋類紹介](http://shogicross.yosgspec.com/#playBoard)
* [将棋駒Viewer](http://shogicross.yosgspec.com/#pieceViewer)

### ライブラリ
任意のページへ設置できる。駒やボードの追加も対応。
* [ドキュメント](http://shogicross.yosgspec.com)
* [ダウンロード](http://shogicross.yosgspec.com/#doc/getStarted)

### 特徴
* 様々な将棋類の表示に対応
* 4人用ボード対応
* 手を戻す、進める機能
* 盤面回転機能(棋譜とは同期しない)
* 画像出力機能
* BOD形式での局面入出力機能(独自拡張あり)
* レスポンシブ対応
* オリジナルの駒配置を設定 (チェス対将棋も容易)
* 画像を用意せずに追加駒を設定
* 視覚的にわかりやすい駒データ定義
* Webページに簡単設置([CodePen](https://codepen.io/yosgspec/pen/bGJqNJr)、[コード付サンプル](https://shogicross.yosgspec.com/#doc/gameSoft))

  * <details>
	<summary>サンプルコード</summary>

	```html
	<canvas id="shogiCross"></canvas>
	<script type="module">
		import {Board, gameSoft} from "https://cdn.jsdelivr.net/gh/yosgspec/ShogiCross@0.5/src/dist/ShogiCross.min.js";
		const canvas = document.getElementById("shogiCross");
		const board = Board.run(canvas, gameSoft.shogi);
	</script>
	```
	</details>

## [ペーパークラフト](paper/README.md)
様々な将棋類を紙の力で実体化。

## [ディレクトリ構成](doc/root/README.md)
プロジェクトのディレクトリ構成。

## 使用フォント
下記のフォントを採用(優先度順)。
* [Noto Serif JP Black](https://fonts.google.com/noto/specimen/Noto+Serif+JP)
* [Noto Emoji](https://fonts.google.com/noto/specimen/Noto+Emoji?noto.query=emoji)
* [Noto Sans Symbols 2](https://fonts.google.com/noto/specimen/Noto+Sans+Symbols+2?noto.query=Symbols)
* [Noto Sans Symbols](https://fonts.google.com/noto/specimen/Noto+Sans+Symbols?noto.query=Symbols)
* [Noto Serif Black](https://fonts.google.com/noto/specimen/Noto+Serif?noto.query=serif)
* [Noto Serif TC Black](https://fonts.google.com/noto/specimen/Noto+Serif+TC?noto.query=serif+tc)

楷書体は使用せず、文字の網羅性が高くGoogle Fontsで使用できることからからNotoフォントで統一している。

## 将棋駒の角度・寸法
将棋駒は以下寸法とした。
![](img/piece.png)
参考資料を基に寸法ができるだけ単純になるように設定している。

### 参考資料
* [将棋駒の寸法をしっかり計算したお - 生き抜くぜ21世紀](https://rskmoi.hatenablog.com/entry/2018/01/21/104029)
* [駒のサイズ](http://kijishi.html.xdomain.jp/komanosize.htm)

## 使用ライブラリ
Webアプリの本体についてはVanilla.jsで実装。

ビルドツールとして下記を採用。いずれも最適化のためのもので使わなくても動く。

|ライブラリ|用途
|:---------|:----
|[npm-run-all](https://github.com/mysticatea/npm-run-all)|npmビルド処理直列化
|[Vite](https://ja.vitejs.dev)|コード1ファイル化
|[Toptal Minifier Tool](https://www.toptal.com/developers/javascript-minifier)|コード最小化
|[TypeScript](https://www.typescriptlang.org/ja/)|型定義ファイル(.d.ts)生成
|[TypeDoc](https://typedoc.org)|.d.ts(JSDoc)ドキュメント生成
|[ADM-ZIP](https://github.com/cthackers/adm-zip/wiki/ADM-ZIP)|ZIPファイル生成
|[sharp-cli](https://github.com/vseventer/sharp-cli)|画像ファイル最適化
|[jsDelivr](https://www.jsdelivr.com/github)|CDNリンク取得
|[markdown-it](https://github.com/markdown-it/markdown-it)|Markdown⇒HTML変換

## [ライセンス](LICENSE)
CC0-1.0。コードの引用再利用ご自由に。

## その他
その他不足情報があれば、下記を参照。  
(過去類似作成物)
* [超棋.pdf](doc/超棋.pdf)
