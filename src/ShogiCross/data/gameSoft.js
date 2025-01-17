export default {
	"shogi": {
		"name": "将棋",
		"variant": "将棋",
		"url": "https://ja.wikipedia.org/wiki/%E5%B0%86%E6%A3%8B",
		"desc": "一般的な将棋。本将棋とも呼ばれる。",
		"playBoard": "将棋",
		"useStand": true,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "default"},
			{"gameName": "将棋", "pieceSet": "2p"}
		]
	},
	"chess": {
		"name": "チェス",
		"variant": "チェス",
		"url": "https://ja.wikipedia.org/wiki/%E3%83%81%E3%82%A7%E3%82%B9",
		"desc": "西洋の将棋類。西洋将棋とも呼ばれる。",
		"playBoard": "チェス",
		"useStand": false,
		"playPieces": [
			{"gameName": "チェス", "pieceSet": "default"},
			{"gameName": "チェス", "pieceSet": "2p"}
		]
	},
	"xiangq": {
		"name": "シャンチー",
		"variant": "シャンチー",
		"url": "https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%A3%E3%83%B3%E3%83%81%E3%83%BC",
		"desc": "中国の将棋類。象棋、中国将棋とも呼ばれる。",
		"playBoard": "シャンチー",
		"useStand": false,
		"playPieces": [
			{"gameName": "シャンチー", "pieceSet": "default"},
			{"gameName": "シャンチー", "pieceSet": "2p"}
		]
	},
	"janggi": {
		"name": "チャンギ",
		"variant": "チャンギ",
		"url": "https://ja.wikipedia.org/wiki/%E3%83%81%E3%83%A3%E3%83%B3%E3%82%AE",
		"desc": "朝鮮半島の将棋類。朝鮮将棋とも呼ばれる。",
		"playBoard": "チャンギ",
		"useStand": false,
		"playPieces": [
			{"gameName": "チャンギ", "pieceSet": "default"},
			{"gameName": "チャンギ", "pieceSet": "2p"}
		]
	},
	"makruk": {
		"name": "マークルック",
		"variant": "マークルック",
		"url": "https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%BC%E3%82%AF%E3%83%AB%E3%83%83%E3%82%AF",
		"desc": "タイの将棋類。タイ将棋とも呼ばれる。",
		"playBoard": "マークルック",
		"useStand": false,
		"playPieces": [
			{"gameName": "マークルック", "pieceSet": "default"},
			{"gameName": "マークルック", "pieceSet": "2p"}
		]
	},
	"chaturanga": {
		"name": "チャトランガ",
		"variant": "チャトランガ",
		"url": "https://ja.wikipedia.org/wiki/%E3%83%81%E3%83%A3%E3%83%88%E3%83%A9%E3%83%B3%E3%82%AC",
		"desc": "原初の将棋類。詳細なルールは失われている。",
		"playBoard": "チェス",
		"useStand": false,
		"playPieces": [
			{"gameName": "チャトランガ", "pieceSet": "default"},
			{"gameName": "チャトランガ", "pieceSet": "2p"}
		]
	},
	"dobutsuShogi": {
		"name": "どうぶつしょうぎ",
		"variant": "どうぶつしょうぎ",
		"url": "https://www.silverstar.co.jp/02products/dobutsushogi/switch/animal.html",
		"desc": "入門用として考案された将棋。",
		"playBoard": "どうぶつしょうぎ",
		"useStand": true,
		"playPieces": [
			{"gameName": "どうぶつしょうぎ", "pieceSet": "default"},
			{"gameName": "どうぶつしょうぎ", "pieceSet": "default"}
		]
	},
	"toriShogi": {
		"name": "禽将棋",
		"variant": "禽将棋",
		"url": "https://ja.wikipedia.org/wiki/%E7%A6%BD%E5%B0%86%E6%A3%8B",
		"desc": "鳥の名の駒を使用する古将棋。特殊な動きをする駒が多い。",
		"playBoard": "将棋7x7",
		"useStand": true,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "禽将棋"},
			{"gameName": "将棋", "pieceSet": "禽将棋"}
		]
	},
	"chuShogi": {
		"name": "中将棋",
		"variant": "中将棋",
		"url": "https://ja.wikipedia.org/wiki/%E4%B8%AD%E5%B0%86%E6%A3%8B",
		"desc": "現在でもプレイされることのある古将棋の一種。",
		"playBoard": "古将棋12x12",
		"useStand": false,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "中将棋"},
			{"gameName": "将棋", "pieceSet": "中将棋2p"}
		]
	},
	"waShogi": {
		"name": "和将棋",
		"variant": "和将棋",
		"url": "https://ja.wikipedia.org/wiki/%E5%92%8C%E5%B0%86%E6%A3%8B",
		"desc": "全ての駒に動物の名前を使用した古将棋の一種。",
		"playBoard": "古将棋11x11",
		"useStand": false,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "和将棋"},
			{"gameName": "将棋", "pieceSet": "和将棋"}
		]
	},
	"grantAcedrex": {
		"name": "Grant Acedrex",
		"variant": "Grant Acedrex",
		"url": "https://www.chessvariants.org/rules/grantacedrex",
		"desc": "古チェスの一種。特殊な動きをする駒が多い。プロモーション先は本来は敵陣の到着列の駒となる(未実装)。",
		"playBoard": "チェス12x12",
		"useStand": false,
		"playPieces": [
			{"gameName": "チェス", "pieceSet": "GrantAcedrex"},
			{"gameName": "チェス", "pieceSet": "GrantAcedrex2p"}
		]
	},
	"courierChessAdvanced": {
		"name": "クーリエチェス(定形配置)",
		"variant": "クーリエチェス(定形配置)",
		"url": "https://en.wikipedia.org/wiki/Courier_chess",
		"desc": "古チェスの一種。ビショップに等しい走り駒(クーリエ)が初めて使用された。",
		"playBoard": "チェス12x8",
		"useStand": false,
		"playPieces": [
			{"gameName": "チェス", "pieceSet": "クーリエチェス(定形配置)"},
			{"gameName": "チェス", "pieceSet": "クーリエチェス(定形配置)2p"}
		]
	},
	"gogoShogi": {
		"name": "5五将棋",
		"variant": "将棋",
		"url": "https://ja.wikipedia.org/wiki/5%E4%BA%94%E5%B0%86%E6%A3%8B",
		"desc": "簡略化された将棋。",
		"playBoard": "将棋5x5",
		"useStand": true,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "default"},
			{"gameName": "将棋", "pieceSet": "2p"}
		]
	},
	"asakuraShogi": {
		"name": "朝倉象棋",
		"variant": "将棋",
		"url": "https://ja.wikipedia.org/wiki/%E5%B0%8F%E5%B0%86%E6%A3%8B#%E6%9C%9D%E5%80%89%E8%B1%A1%E6%A3%8B",
		"desc": "持ち駒が使用できる小将棋。",
		"playBoard": "将棋",
		"useStand": true,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "小将棋"},
			{"gameName": "将棋", "pieceSet": "小将棋2p"}
		]
	},
	"shoShogi": {
		"name": "小将棋",
		"variant": "将棋",
		"url": "https://ja.wikipedia.org/wiki/%E5%B0%8F%E5%B0%86%E6%A3%8B",
		"desc": "中将棋から駒を取り入れて原点回帰した平安将棋。",
		"playBoard": "将棋",
		"useStand": false,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "小将棋"},
			{"gameName": "将棋", "pieceSet": "小将棋2p"}
		]
	},
	"heianShogi8x8": {
		"name": "平安将棋(8x8)",
		"variant": "将棋",
		"url": "https://ja.wikipedia.org/wiki/%E5%B9%B3%E5%AE%89%E5%B0%86%E6%A3%8B",
		"desc": "記録が残る最古の日本の将棋。盤の大きさに緒説ある。",
		"playBoard": "古将棋8x8",
		"useStand": false,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "平安将棋"},
			{"gameName": "将棋", "pieceSet": "平安将棋"}
		]
	},
	"heianShogi9x8": {
		"name": "平安将棋(9x8)",
		"variant": "将棋",
		"url": "https://ja.wikipedia.org/wiki/%E5%B9%B3%E5%AE%89%E5%B0%86%E6%A3%8B",
		"desc": "9x8マスと想定した時の平安将棋。",
		"playBoard": "古将棋9x8",
		"useStand": false,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "平安将棋"},
			{"gameName": "将棋", "pieceSet": "平安将棋"}
		]
	},
	"heianShogi9x9": {
		"name": "平安将棋(9x9)",
		"variant": "将棋",
		"url": "https://ja.wikipedia.org/wiki/%E5%B9%B3%E5%AE%89%E5%B0%86%E6%A3%8B",
		"desc": "9x9マスと想定した時の平安将棋。",
		"playBoard": "古将棋9x9",
		"useStand": false,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "平安将棋"},
			{"gameName": "将棋", "pieceSet": "平安将棋"}
		]
	},
	"kyoShogiLeft": {
		"name": "京将棋(左京配置)",
		"variant": "将棋",
		"url": "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
		"desc": "京翔と銅将を追加した将棋。左右の配置が存在。",
		"playBoard": "将棋10x10",
		"useStand": true,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "京将棋(左京配置)"},
			{"gameName": "将棋", "pieceSet": "京将棋(左京配置)2p"}
		]
	},
	"kyoShogiRight": {
		"name": "京将棋(右京配置)",
		"variant": "将棋",
		"url": "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
		"desc": "京将棋の右側に京を置くパターン。",
		"playBoard": "将棋10x10",
		"useStand": true,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "京将棋(右京配置)"},
			{"gameName": "将棋", "pieceSet": "京将棋(右京配置)2p"}
		]
	},
	"shoKyoShogiLeft": {
		"name": "小京将棋(左置換)",
		"variant": "将棋",
		"url": "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
		"desc": "桂馬を京翔へ置き換えた本将棋。左右の配置が存在。",
		"playBoard": "将棋",
		"useStand": true,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "小京将棋(左置換)"},
			{"gameName": "将棋", "pieceSet": "小京将棋(左置換)2p"}
		]
	},
	"shoKyoShogiRight": {
		"name": "小京将棋(右置換)",
		"variant": "将棋",
		"url": "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
		"desc": "小京将棋の右置換パターン。",
		"playBoard": "将棋",
		"useStand": true,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "小京将棋(右置換)"},
			{"gameName": "将棋", "pieceSet": "小京将棋(右置換)2p"}
		]
	},
	"sanshaShogiLeft": {
		"name": "山車将棋(左置換)",
		"variant": "将棋",
		"url": "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
		"desc": "香車を山車へ置き換えた本将棋。左右の配置が存在。",
		"playBoard": "将棋",
		"useStand": true,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "山車将棋(左置換)"},
			{"gameName": "将棋", "pieceSet": "山車将棋(左置換)2p"}
		]
	},
	"sanshaShogiRight": {
		"name": "山車将棋(右置換)",
		"variant": "将棋",
		"url": "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
		"desc": "山車将棋の右置換パターン。",
		"playBoard": "将棋",
		"useStand": true,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "山車将棋(右置換)"},
			{"gameName": "将棋", "pieceSet": "山車将棋(右置換)2p"}
		]
	},
	"doShogiLeft": {
		"name": "銅将棋(左置換)",
		"variant": "将棋",
		"url": "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
		"desc": "銀将を銅将へ置き換えた本将棋。左右の配置が存在。",
		"playBoard": "将棋",
		"useStand": true,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "銅将棋(左置換)"},
			{"gameName": "将棋", "pieceSet": "銅将棋(左置換)2p"}
		]
	},
	"doShogiRight": {
		"name": "銅将棋(右置換)",
		"variant": "将棋",
		"url": "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
		"desc": "銅将棋の右置換パターン。",
		"playBoard": "将棋",
		"useStand": true,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "銅将棋(右置換)"},
			{"gameName": "将棋", "pieceSet": "銅将棋(右置換)2p"}
		]
	},
	"kinshiShogiLeft": {
		"name": "金翅将棋(左置換)",
		"variant": "将棋",
		"url": "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
		"desc": "金将を金翅へ置き換えた本将棋。左右の配置が存在。",
		"playBoard": "将棋",
		"useStand": true,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "金翅将棋(左置換)"},
			{"gameName": "将棋", "pieceSet": "金翅将棋(左置換)2p"}
		]
	},
	"kinshiShogiRight": {
		"name": "金翅将棋(右置換)",
		"variant": "将棋",
		"url": "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
		"desc": "金翅将棋の右置換パターン。",
		"playBoard": "将棋",
		"useStand": true,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "金翅将棋(右置換)"},
			{"gameName": "将棋", "pieceSet": "金翅将棋(右置換)2p"}
		]
	},
	"kintoShogiLeft": {
		"name": "金斗将棋(左置換)",
		"variant": "将棋",
		"url": "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
		"desc": "金将を金翅へ置き換えた本将棋。左右の配置が存在。",
		"playBoard": "将棋",
		"useStand": true,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "金斗将棋(左置換)"},
			{"gameName": "将棋", "pieceSet": "金斗将棋(左置換)2p"}
		]
	},
	"kintoShogiRight": {
		"name": "金斗将棋(右置換)",
		"variant": "将棋",
		"url": "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
		"desc": "金斗将棋の右置換パターン。",
		"playBoard": "将棋",
		"useStand": true,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "金斗将棋(右置換)"},
			{"gameName": "将棋", "pieceSet": "金斗将棋(右置換)2p"}
		]
	},
	"shogi30AllLeft": {
		"name": "将棋30++(左系フル置換)",
		"variant": "将棋",
		"url": "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
		"desc": "京将棋系の駒で複数置換した本将棋。左右の配置が存在。",
		"playBoard": "将棋",
		"useStand": true,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "将棋30++(左系フル置換)"},
			{"gameName": "将棋", "pieceSet": "将棋30++(左系フル置換)2p"}
		]
	},
	"shogi30AllRight": {
		"name": "将棋30++(右系フル置換)",
		"variant": "将棋",
		"url": "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
		"desc": "将棋30++の右置換パターン。",
		"playBoard": "将棋",
		"useStand": true,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "将棋30++(右系フル置換)"},
			{"gameName": "将棋", "pieceSet": "将棋30++(右系フル置換)2p"}
		]
	},
	"okisakiShogi": {
		"name": "御妃将棋",
		"variant": "将棋",
		"url": "https://en.wikipedia.org/wiki/Okisaki_shogi",
		"desc": "チェスの要素を取り入れた本将棋。香車は意図して反車として表示した。",
		"playBoard": "将棋10x10",
		"useStand": true,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "御妃将棋"},
			{"gameName": "将棋", "pieceSet": "御妃将棋2p"}
		]
	},
	"crazyHouse": {
		"name": "クレージーハウス",
		"variant": "チェス",
		"url": "https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AC%E3%83%BC%E3%82%B8%E3%83%BC%E3%83%8F%E3%82%A6%E3%82%B9",
		"desc": "持ち駒が使用できるチェス。",
		"playBoard": "クレージーハウス",
		"useStand": true,
		"playPieces": [
			{"gameName": "チェス", "pieceSet": "default"},
			{"gameName": "チェス", "pieceSet": "2p"}
		]
	},
	"losAlamosChess": {
		"name": "ロスアラモスチェス",
		"variant": "チェス",
		"url": "https://en.wikipedia.org/wiki/Los_Alamos_chess",
		"desc": "簡略化されたチェス。",
		"playBoard": "チェス6x6",
		"useStand": false,
		"playPieces": [
			{"gameName": "チェス", "pieceSet": "default"},
			{"gameName": "チェス", "pieceSet": "2p"}
		]
	},
	"capablancaChess": {
		"name": "カパブランカチェス",
		"variant": "チェス",
		"url": "https://en.wikipedia.org/wiki/Capablanca_chess",
		"desc": "マーシャル(エンプレス)、カーディナル(プリンセス)を追加したチェス。",
		"playBoard": "チェス10x8",
		"useStand": false,
		"playPieces": [
			{"gameName": "チェス", "pieceSet": "カパブランカチェス"},
			{"gameName": "チェス", "pieceSet": "カパブランカチェス2p"}
		]
	},
	"grandChess": {
		"name": "グランドチェス",
		"variant": "チェス",
		"url": "https://en.wikipedia.org/wiki/Grand_Chess",
		"desc": "カパブランカチェスと同様の駒を使用するが配置が異なる。",
		"playBoard": "チェス10x10",
		"useStand": false,
		"playPieces": [
			{"gameName": "チェス", "pieceSet": "グランドチェス"},
			{"gameName": "チェス", "pieceSet": "グランドチェス2p"}
		]
	},
	"gorogoroDobutsuShogi": {
		"name": "ごろごろどうぶつしょうぎ",
		"variant": "どうぶつしょうぎ",
		"url": "https://www.silverstar.co.jp/02products/dobutsushogi/switch/gorogoro.html",
		"desc": "「きりん」と「ぞう」の代わりに「いぬ」(金将)と「ねこ」(銀将)を追加したどうぶつしょうぎ。5656将棋のどうぶつしょうぎ版。",
		"playBoard": "ごろごろどうぶつしょうぎ",
		"useStand": true,
		"playPieces": [
			{"gameName": "どうぶつしょうぎ", "pieceSet": "default"},
			{"gameName": "どうぶつしょうぎ", "pieceSet": "default"}
		]
	},
	"shishiShogi": {
		"name": "獅子将棋",
		"variant": "中将棋",
		"url": "https://drive.google.com/file/d/1emrOmE1Xh-sR8wApTOikEgXDGVaAYrrO/view",
		"desc": "中将棋を遊びやすくするよう考案された将棋の一種。",
		"playBoard": "古将棋9x9",
		"useStand": false,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "獅子将棋"},
			{"gameName": "将棋", "pieceSet": "獅子将棋2p"}
		]
	},
	"heiseiShogi": {
		"name": "平成将棋",
		"variant": "中将棋",
		"url": "http://akasaka0x16.blog.fc2.com/blog-entry-130.html",
		"desc": "中将棋を遊びやすくするよう考案された将棋の一種。",
		"playBoard": "古将棋10x10",
		"useStand": false,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "平成将棋"},
			{"gameName": "将棋", "pieceSet": "平成将棋2p"}
		]
	},
	"daiShogi": {
		"name": "大将棋",
		"variant": "中将棋",
		"url": "https://ja.wikipedia.org/wiki/%E5%A4%A7%E5%B0%86%E6%A3%8B",
		"desc": "中将棋の祖先とされる古将棋。",
		"playBoard": "古将棋15x15",
		"useStand": false,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "大将棋"},
			{"gameName": "将棋", "pieceSet": "大将棋2p"}
		]
	},
	"courierChess": {
		"name": "クーリエチェス(初期配置)",
		"variant": "クーリエチェス(定形配置)",
		"url": "https://en.wikipedia.org/wiki/Courier_chess",
		"desc": "クーリエチェスの定形移動を行わない配置。",
		"playBoard": "チェス12x8",
		"useStand": false,
		"playPieces": [
			{"gameName": "チェス", "pieceSet": "クーリエチェス(初期配置)"},
			{"gameName": "チェス", "pieceSet": "クーリエチェス(初期配置)2p"}
		]
	},
	"p4Shogi": {
		"name": "四人将棋",
		"variant": "将棋",
		"url": "https://ja.wikipedia.org/wiki/%E5%9B%9B%E4%BA%BA%E5%B0%86%E6%A3%8B",
		"desc": "4人用の将棋。",
		"playBoard": "将棋",
		"useStand": true,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "p4"},
			{"gameName": "将棋", "pieceSet": "p4"},
			{"gameName": "将棋", "pieceSet": "p4"},
			{"gameName": "将棋", "pieceSet": "p4"}
		]
	},
	"p4Chess": {
		"name": "4人チェス",
		"variant": "チェス",
		"url": "https://en.wikipedia.org/wiki/Four-player_chess",
		"desc": "4人用のチェス。",
		"playBoard": "4人チェス",
		"useStand": false,
		"playPieces": [
			{"gameName": "チェス", "pieceSet": "p4"},
			{"gameName": "チェス", "pieceSet": "p4"},
			{"gameName": "チェス", "pieceSet": "p4"},
			{"gameName": "チェス", "pieceSet": "p4"}
		]
	},
	"g4Shogi": {
		"name": "四神将棋",
		"variant": "将棋",
		"url": "https://ja.wikipedia.org/wiki/%E5%9B%9B%E7%A5%9E%E5%B0%86%E6%A3%8B",
		"desc": "テレビ用の企画として考案された4人用の将棋。",
		"playBoard": "四神将棋",
		"useStand": true,
		"playPieces": [
			{"gameName": "将棋", "pieceSet": "p4"},
			{"gameName": "将棋", "pieceSet": "p4"},
			{"gameName": "将棋", "pieceSet": "p4"},
			{"gameName": "将棋", "pieceSet": "p4"}
		]
	},
	"chaturaji": {
		"name": "チャトラジ",
		"variant": "チャトランガ",
		"url": "https://ja.wikipedia.org/wiki/%E3%83%81%E3%83%A3%E3%83%88%E3%83%A9%E3%82%B8",
		"desc": "チャトランガの4人用のバリエーション。ダイスで動かす駒を決めていた。",
		"playBoard": "チェス",
		"useStand": false,
		"playPieces": [
			{"gameName": "チャトランガ", "pieceSet": "p4"},
			{"gameName": "チャトランガ", "pieceSet": "p4"},
			{"gameName": "チャトランガ", "pieceSet": "p4"},
			{"gameName": "チャトランガ", "pieceSet": "p4"}
		]
	}
}
