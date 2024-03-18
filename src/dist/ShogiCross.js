const M = {
  fonts: [
    ["Noto Serif JP", 900],
    ["Noto Emoji", 400],
    ["Noto Sans Symbols 2", 400],
    ["Noto Sans Symbols", 400],
    ["Noto Serif", 900],
    ["Noto Serif TC", 900]
  ]
}, ae = {
  shogi: {
    name: "将棋",
    variant: "将棋",
    url: "https://ja.wikipedia.org/wiki/%E5%B0%86%E6%A3%8B",
    desc: "一般的な将棋。本将棋とも呼ばれる。",
    playBoard: "将棋",
    useStand: !0,
    playPieces: [
      { gameName: "将棋", pieceSet: "default" },
      { gameName: "将棋", pieceSet: "2p" }
    ]
  },
  chess: {
    name: "チェス",
    variant: "チェス",
    url: "https://ja.wikipedia.org/wiki/%E3%83%81%E3%82%A7%E3%82%B9",
    desc: "西洋の将棋類。西洋将棋とも呼ばれる。",
    playBoard: "チェス",
    useStand: !1,
    playPieces: [
      { gameName: "チェス", pieceSet: "default" },
      { gameName: "チェス", pieceSet: "2p" }
    ]
  },
  xiangq: {
    name: "シャンチー",
    variant: "シャンチー",
    url: "https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%A3%E3%83%B3%E3%83%81%E3%83%BC",
    desc: "中国の将棋類。象棋、中国将棋とも呼ばれる。",
    playBoard: "シャンチー",
    useStand: !1,
    playPieces: [
      { gameName: "シャンチー", pieceSet: "default" },
      { gameName: "シャンチー", pieceSet: "2p" }
    ]
  },
  janggi: {
    name: "チャンギ",
    variant: "チャンギ",
    url: "https://ja.wikipedia.org/wiki/%E3%83%81%E3%83%A3%E3%83%B3%E3%82%AE",
    desc: "朝鮮半島の将棋類。朝鮮将棋とも呼ばれる。",
    playBoard: "チャンギ",
    useStand: !1,
    playPieces: [
      { gameName: "チャンギ", pieceSet: "default" },
      { gameName: "チャンギ", pieceSet: "2p" }
    ]
  },
  makruk: {
    name: "マークルック",
    variant: "マークルック",
    url: "https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%BC%E3%82%AF%E3%83%AB%E3%83%83%E3%82%AF",
    desc: "タイの将棋類。タイ将棋とも呼ばれる。",
    playBoard: "マークルック",
    useStand: !1,
    playPieces: [
      { gameName: "マークルック", pieceSet: "default" },
      { gameName: "マークルック", pieceSet: "2p" }
    ]
  },
  chaturanga: {
    name: "チャトランガ",
    variant: "チャトランガ",
    url: "https://ja.wikipedia.org/wiki/%E3%83%81%E3%83%A3%E3%83%88%E3%83%A9%E3%83%B3%E3%82%AC",
    desc: "原初の将棋類。詳細なルールは失われている。",
    playBoard: "チェス",
    useStand: !1,
    playPieces: [
      { gameName: "チャトランガ", pieceSet: "default" },
      { gameName: "チャトランガ", pieceSet: "2p" }
    ]
  },
  dobutsuShogi: {
    name: "どうぶつしょうぎ",
    variant: "どうぶつしょうぎ",
    url: "https://www.silverstar.co.jp/02products/dobutsushogi/switch/animal.html",
    desc: "入門用として考案された将棋。",
    playBoard: "どうぶつしょうぎ",
    useStand: !0,
    playPieces: [
      { gameName: "どうぶつしょうぎ", pieceSet: "default" },
      { gameName: "どうぶつしょうぎ", pieceSet: "default" }
    ]
  },
  toriShogi: {
    name: "禽将棋",
    variant: "禽将棋",
    url: "https://ja.wikipedia.org/wiki/%E7%A6%BD%E5%B0%86%E6%A3%8B",
    desc: "鳥の名の駒を使用する将棋。特殊な動きをする駒が多い。",
    playBoard: "将棋7x7",
    useStand: !0,
    playPieces: [
      { gameName: "将棋", pieceSet: "禽将棋" },
      { gameName: "将棋", pieceSet: "禽将棋" }
    ]
  },
  chuShogi: {
    name: "中将棋",
    variant: "中将棋",
    url: "https://ja.wikipedia.org/wiki/%E4%B8%AD%E5%B0%86%E6%A3%8B",
    desc: "現在でもプレイされることのある古将棋の一種。",
    playBoard: "古将棋12x12",
    useStand: !1,
    playPieces: [
      { gameName: "将棋", pieceSet: "中将棋" },
      { gameName: "将棋", pieceSet: "中将棋2p" }
    ]
  },
  grantAcedrex: {
    name: "Grant Acedrex",
    variant: "Grant Acedrex",
    url: "https://www.chessvariants.org/rules/grantacedrex",
    desc: "古チェスの一種。特殊な動きをする駒が多い。プロモーション先は本来は敵陣の到着列の駒となる(未実装)。",
    playBoard: "チェス12x12",
    useStand: !1,
    playPieces: [
      { gameName: "チェス", pieceSet: "GrantAcedrex" },
      { gameName: "チェス", pieceSet: "GrantAcedrex2p" }
    ]
  },
  courierChessAdvanced: {
    name: "クーリエチェス(定形配置)",
    variant: "クーリエチェス(定形配置)",
    url: "https://en.wikipedia.org/wiki/Courier_chess",
    desc: "古チェスの一種。ビショップに等しい走り駒(クーリエ)が初めて使用された。",
    playBoard: "チェス12x8",
    useStand: !1,
    playPieces: [
      { gameName: "チェス", pieceSet: "クーリエチェス(定形配置)" },
      { gameName: "チェス", pieceSet: "クーリエチェス(定形配置)2p" }
    ]
  },
  e5Shogi: {
    name: "5五将棋",
    variant: "将棋",
    url: "https://ja.wikipedia.org/wiki/5%E4%BA%94%E5%B0%86%E6%A3%8B",
    desc: "簡略化された将棋。",
    playBoard: "将棋5x5",
    useStand: !0,
    playPieces: [
      { gameName: "将棋", pieceSet: "default" },
      { gameName: "将棋", pieceSet: "2p" }
    ]
  },
  asakuraShogi: {
    name: "朝倉象棋",
    variant: "将棋",
    url: "https://ja.wikipedia.org/wiki/%E5%B0%8F%E5%B0%86%E6%A3%8B#%E6%9C%9D%E5%80%89%E8%B1%A1%E6%A3%8B",
    desc: "持ち駒が使用できる小将棋。",
    playBoard: "将棋",
    useStand: !0,
    playPieces: [
      { gameName: "将棋", pieceSet: "小将棋" },
      { gameName: "将棋", pieceSet: "小将棋2p" }
    ]
  },
  shoShogi: {
    name: "小将棋",
    variant: "将棋",
    url: "https://ja.wikipedia.org/wiki/%E5%B0%8F%E5%B0%86%E6%A3%8B",
    desc: "中将棋から駒を取り入れて原点回帰した平安将棋。",
    playBoard: "将棋",
    useStand: !1,
    playPieces: [
      { gameName: "将棋", pieceSet: "小将棋" },
      { gameName: "将棋", pieceSet: "小将棋2p" }
    ]
  },
  heianShogi8x8: {
    name: "平安将棋(8x8)",
    variant: "将棋",
    url: "https://ja.wikipedia.org/wiki/%E5%B9%B3%E5%AE%89%E5%B0%86%E6%A3%8B",
    desc: "記録が残る最古の日本の将棋。盤の大きさに緒説ある。",
    playBoard: "古将棋8x8",
    useStand: !1,
    playPieces: [
      { gameName: "将棋", pieceSet: "平安将棋" },
      { gameName: "将棋", pieceSet: "平安将棋" }
    ]
  },
  heianShogi9x8: {
    name: "平安将棋(9x8)",
    variant: "将棋",
    url: "https://ja.wikipedia.org/wiki/%E5%B9%B3%E5%AE%89%E5%B0%86%E6%A3%8B",
    desc: "9x8マスと想定した時の平安将棋。",
    playBoard: "古将棋9x8",
    useStand: !1,
    playPieces: [
      { gameName: "将棋", pieceSet: "平安将棋" },
      { gameName: "将棋", pieceSet: "平安将棋" }
    ]
  },
  heianShogi9x9: {
    name: "平安将棋(9x9)",
    variant: "将棋",
    url: "https://ja.wikipedia.org/wiki/%E5%B9%B3%E5%AE%89%E5%B0%86%E6%A3%8B",
    desc: "9x9マスと想定した時の平安将棋。",
    playBoard: "古将棋9x9",
    useStand: !1,
    playPieces: [
      { gameName: "将棋", pieceSet: "平安将棋" },
      { gameName: "将棋", pieceSet: "平安将棋" }
    ]
  },
  kyoShogiLeft: {
    name: "京将棋(左京配置)",
    variant: "将棋",
    url: "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
    desc: "京翔と銅将を追加した将棋。左右の配置が存在。",
    playBoard: "将棋10x10",
    useStand: !0,
    playPieces: [
      { gameName: "将棋", pieceSet: "京将棋(左京配置)" },
      { gameName: "将棋", pieceSet: "京将棋(左京配置)2p" }
    ]
  },
  kyoShogiRight: {
    name: "京将棋(右京配置)",
    variant: "将棋",
    url: "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
    desc: "京将棋の右側に京を置くパターン。",
    playBoard: "将棋10x10",
    useStand: !0,
    playPieces: [
      { gameName: "将棋", pieceSet: "京将棋(右京配置)" },
      { gameName: "将棋", pieceSet: "京将棋(右京配置)2p" }
    ]
  },
  shoKyoShogiLeft: {
    name: "小京将棋(左置換)",
    variant: "将棋",
    url: "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
    desc: "桂馬を京翔へ置き換えた本将棋。左右の配置が存在。",
    playBoard: "将棋",
    useStand: !0,
    playPieces: [
      { gameName: "将棋", pieceSet: "小京将棋(左置換)" },
      { gameName: "将棋", pieceSet: "小京将棋(左置換)2p" }
    ]
  },
  shoKyoShogiRight: {
    name: "小京将棋(右置換)",
    variant: "将棋",
    url: "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
    desc: "小京将棋の右置換パターン。",
    playBoard: "将棋",
    useStand: !0,
    playPieces: [
      { gameName: "将棋", pieceSet: "小京将棋(右置換)" },
      { gameName: "将棋", pieceSet: "小京将棋(右置換)2p" }
    ]
  },
  sanshaShogiLeft: {
    name: "山車将棋(左置換)",
    variant: "将棋",
    url: "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
    desc: "香車を山車へ置き換えた本将棋。左右の配置が存在。",
    playBoard: "将棋",
    useStand: !0,
    playPieces: [
      { gameName: "将棋", pieceSet: "山車将棋(左置換)" },
      { gameName: "将棋", pieceSet: "山車将棋(左置換)2p" }
    ]
  },
  sanshaShogiRight: {
    name: "山車将棋(右置換)",
    variant: "将棋",
    url: "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
    desc: "山車将棋の右置換パターン。",
    playBoard: "将棋",
    useStand: !0,
    playPieces: [
      { gameName: "将棋", pieceSet: "山車将棋(右置換)" },
      { gameName: "将棋", pieceSet: "山車将棋(右置換)2p" }
    ]
  },
  doShogiLeft: {
    name: "銅将棋(左置換)",
    variant: "将棋",
    url: "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
    desc: "銀将を銅将へ置き換えた本将棋。左右の配置が存在。",
    playBoard: "将棋",
    useStand: !0,
    playPieces: [
      { gameName: "将棋", pieceSet: "銅将棋(左置換)" },
      { gameName: "将棋", pieceSet: "銅将棋(左置換)2p" }
    ]
  },
  doShogiRight: {
    name: "銅将棋(右置換)",
    variant: "将棋",
    url: "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
    desc: "銅将棋の右置換パターン。",
    playBoard: "将棋",
    useStand: !0,
    playPieces: [
      { gameName: "将棋", pieceSet: "銅将棋(右置換)" },
      { gameName: "将棋", pieceSet: "銅将棋(右置換)2p" }
    ]
  },
  kinshiShogiLeft: {
    name: "金翅将棋(左置換)",
    variant: "将棋",
    url: "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
    desc: "金将を金翅へ置き換えた本将棋。左右の配置が存在。",
    playBoard: "将棋",
    useStand: !0,
    playPieces: [
      { gameName: "将棋", pieceSet: "金翅将棋(左置換)" },
      { gameName: "将棋", pieceSet: "金翅将棋(左置換)2p" }
    ]
  },
  kinshiShogiRight: {
    name: "金翅将棋(右置換)",
    variant: "将棋",
    url: "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
    desc: "金翅将棋の右置換パターン。",
    playBoard: "将棋",
    useStand: !0,
    playPieces: [
      { gameName: "将棋", pieceSet: "金翅将棋(右置換)" },
      { gameName: "将棋", pieceSet: "金翅将棋(右置換)2p" }
    ]
  },
  kintoShogiLeft: {
    name: "金斗将棋(左置換)",
    variant: "将棋",
    url: "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
    desc: "金将を金翅へ置き換えた本将棋。左右の配置が存在。",
    playBoard: "将棋",
    useStand: !0,
    playPieces: [
      { gameName: "将棋", pieceSet: "金斗将棋(左置換)" },
      { gameName: "将棋", pieceSet: "金斗将棋(左置換)2p" }
    ]
  },
  kintoShogiRight: {
    name: "金斗将棋(右置換)",
    variant: "将棋",
    url: "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
    desc: "金斗将棋の右置換パターン。",
    playBoard: "将棋",
    useStand: !0,
    playPieces: [
      { gameName: "将棋", pieceSet: "金斗将棋(右置換)" },
      { gameName: "将棋", pieceSet: "金斗将棋(右置換)2p" }
    ]
  },
  shogi30AllLeft: {
    name: "将棋30++(左系フル置換)",
    variant: "将棋",
    url: "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
    desc: "京将棋系の駒で複数置換した本将棋。左右の配置が存在。",
    playBoard: "将棋",
    useStand: !0,
    playPieces: [
      { gameName: "将棋", pieceSet: "将棋30++(左系フル置換)" },
      { gameName: "将棋", pieceSet: "将棋30++(左系フル置換)2p" }
    ]
  },
  shogi30AllRight: {
    name: "将棋30++(右系フル置換)",
    variant: "将棋",
    url: "https://ja.wikipedia.org/wiki/%E4%BA%AC%E5%B0%86%E6%A3%8B",
    desc: "将棋30++の右置換パターン。",
    playBoard: "将棋",
    useStand: !0,
    playPieces: [
      { gameName: "将棋", pieceSet: "将棋30++(右系フル置換)" },
      { gameName: "将棋", pieceSet: "将棋30++(右系フル置換)2p" }
    ]
  },
  okisakiShogi: {
    name: "御妃将棋",
    variant: "将棋",
    url: "https://en.wikipedia.org/wiki/Okisaki_shogi",
    desc: "チェスの要素を取り入れた本将棋。香車は意図して反車として表示した。",
    playBoard: "将棋10x10",
    useStand: !0,
    playPieces: [
      { gameName: "将棋", pieceSet: "御妃将棋" },
      { gameName: "将棋", pieceSet: "御妃将棋2p" }
    ]
  },
  crazyHouse: {
    name: "クレージーハウス",
    variant: "チェス",
    url: "https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AC%E3%83%BC%E3%82%B8%E3%83%BC%E3%83%8F%E3%82%A6%E3%82%B9",
    desc: "持ち駒が使用できるチェス。",
    playBoard: "クレージーハウス",
    useStand: !0,
    playPieces: [
      { gameName: "チェス", pieceSet: "default" },
      { gameName: "チェス", pieceSet: "2p" }
    ]
  },
  losAlamosChess: {
    name: "ロスアラモスチェス",
    variant: "チェス",
    url: "https://en.wikipedia.org/wiki/Los_Alamos_chess",
    desc: "簡略化されたチェス。",
    playBoard: "チェス6x6",
    useStand: !1,
    playPieces: [
      { gameName: "チェス", pieceSet: "default" },
      { gameName: "チェス", pieceSet: "2p" }
    ]
  },
  capablancaChess: {
    name: "カパブランカチェス",
    variant: "チェス",
    url: "https://en.wikipedia.org/wiki/Capablanca_chess",
    desc: "マーシャル(エンプレス)、カーディナル(プリンセス)を追加したチェス。",
    playBoard: "チェス10x8",
    useStand: !1,
    playPieces: [
      { gameName: "チェス", pieceSet: "カパブランカチェス" },
      { gameName: "チェス", pieceSet: "カパブランカチェス2p" }
    ]
  },
  grandChess: {
    name: "グランドチェス",
    variant: "チェス",
    url: "https://en.wikipedia.org/wiki/Grand_Chess",
    desc: "カパブランカチェスと同様の駒を使用するが配置が異なる。",
    playBoard: "チェス10x10",
    useStand: !1,
    playPieces: [
      { gameName: "チェス", pieceSet: "グランドチェス" },
      { gameName: "チェス", pieceSet: "グランドチェス2p" }
    ]
  },
  gorogoroDobutsuShogi: {
    name: "ごろごろどうぶつしょうぎ",
    variant: "どうぶつしょうぎ",
    url: "https://www.silverstar.co.jp/02products/dobutsushogi/switch/gorogoro.html",
    desc: "「きりん」と「ぞう」の代わりに「いぬ」(金将)と「ねこ」(銀将)を追加したどうぶつしょうぎ。5656将棋のどうぶつしょうぎ版。",
    playBoard: "ごろごろどうぶつしょうぎ",
    useStand: !0,
    playPieces: [
      { gameName: "どうぶつしょうぎ", pieceSet: "default" },
      { gameName: "どうぶつしょうぎ", pieceSet: "default" }
    ]
  },
  shishiShogi: {
    name: "獅子将棋",
    variant: "中将棋",
    url: "https://drive.google.com/file/d/1emrOmE1Xh-sR8wApTOikEgXDGVaAYrrO/view",
    desc: "中将棋を遊びやすくするよう考案された将棋の一種。",
    playBoard: "古将棋9x9",
    useStand: !1,
    playPieces: [
      { gameName: "将棋", pieceSet: "獅子将棋" },
      { gameName: "将棋", pieceSet: "獅子将棋2p" }
    ]
  },
  heiseiShogi: {
    name: "平成将棋",
    variant: "中将棋",
    url: "http://akasaka0x16.blog.fc2.com/blog-entry-130.html",
    desc: "中将棋を遊びやすくするよう考案された将棋の一種。",
    playBoard: "古将棋10x10",
    useStand: !1,
    playPieces: [
      { gameName: "将棋", pieceSet: "平成将棋" },
      { gameName: "将棋", pieceSet: "平成将棋2p" }
    ]
  },
  daiShogi: {
    name: "大将棋",
    variant: "中将棋",
    url: "https://ja.wikipedia.org/wiki/%E5%A4%A7%E5%B0%86%E6%A3%8B",
    desc: "中将棋の祖先とされる古将棋。",
    playBoard: "古将棋15x15",
    useStand: !1,
    playPieces: [
      { gameName: "将棋", pieceSet: "大将棋" },
      { gameName: "将棋", pieceSet: "大将棋2p" }
    ]
  },
  courierChess: {
    name: "クーリエチェス(初期配置)",
    variant: "クーリエチェス(定形配置)",
    url: "https://en.wikipedia.org/wiki/Courier_chess",
    desc: "クーリエチェスの定形移動を行わない配置。",
    playBoard: "チェス12x8",
    useStand: !1,
    playPieces: [
      { gameName: "チェス", pieceSet: "クーリエチェス(初期配置)" },
      { gameName: "チェス", pieceSet: "クーリエチェス(初期配置)2p" }
    ]
  },
  p4Shogi: {
    name: "四人将棋",
    variant: "将棋",
    url: "https://ja.wikipedia.org/wiki/%E5%9B%9B%E4%BA%BA%E5%B0%86%E6%A3%8B",
    desc: "4人用の将棋。",
    playBoard: "将棋",
    useStand: !0,
    playPieces: [
      { gameName: "将棋", pieceSet: "p4" },
      { gameName: "将棋", pieceSet: "p4" },
      { gameName: "将棋", pieceSet: "p4" },
      { gameName: "将棋", pieceSet: "p4" }
    ]
  },
  p4Chess: {
    name: "4人チェス",
    variant: "チェス",
    url: "https://en.wikipedia.org/wiki/Four-player_chess",
    desc: "4人用のチェス。",
    playBoard: "4人チェス",
    useStand: !1,
    playPieces: [
      { gameName: "チェス", pieceSet: "p4" },
      { gameName: "チェス", pieceSet: "p4" },
      { gameName: "チェス", pieceSet: "p4" },
      { gameName: "チェス", pieceSet: "p4" }
    ]
  },
  g4Shogi: {
    name: "四神将棋",
    variant: "将棋",
    url: "https://ja.wikipedia.org/wiki/%E5%9B%9B%E7%A5%9E%E5%B0%86%E6%A3%8B",
    desc: "テレビ用の企画として考案された4人用の将棋。",
    playBoard: "四神将棋",
    useStand: !0,
    playPieces: [
      { gameName: "将棋", pieceSet: "p4" },
      { gameName: "将棋", pieceSet: "p4" },
      { gameName: "将棋", pieceSet: "p4" },
      { gameName: "将棋", pieceSet: "p4" }
    ]
  },
  chaturaji: {
    name: "チャトラジ",
    variant: "チャトランガ",
    url: "https://ja.wikipedia.org/wiki/%E3%83%81%E3%83%A3%E3%83%88%E3%83%A9%E3%82%B8",
    desc: "チャトランガの4人用のバリエーション。ダイスで動かす駒を決めていた。",
    playBoard: "チェス",
    useStand: !1,
    playPieces: [
      { gameName: "チャトランガ", pieceSet: "p4" },
      { gameName: "チャトランガ", pieceSet: "p4" },
      { gameName: "チャトランガ", pieceSet: "p4" },
      { gameName: "チャトランガ", pieceSet: "p4" }
    ]
  }
}, z = {
  将棋: {
    english: "Shogi",
    fontColor: "#000000",
    backgroundColor: "#FFDDAA",
    promoLine: 3,
    position: {
      5: {
        default: [
          "歩・・・・",
          "玉金銀角飛"
        ],
        "2p": [
          "歩・・・・",
          "皇金銀角飛"
        ]
      },
      7: {
        禽将棋: [
          "・・・・燕・・",
          "燕燕燕燕燕燕燕",
          "・・・鷹・・・",
          "鶉雉鶴鵬鶴雉享"
        ]
      },
      8: {
        default: [
          "歩歩歩歩歩歩歩歩",
          "・角・・・・飛・",
          "香桂銀玉金銀桂香"
        ],
        "2p": [
          "歩歩歩歩歩歩歩歩",
          "・角・・・・飛・",
          "香桂銀皇金銀桂香"
        ],
        平安将棋: [
          "歩歩歩歩歩歩歩歩",
          "・・・・・・・・",
          "香桂銀玉金銀桂香"
        ]
      },
      9: {
        default: [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "香桂銀金玉金銀桂香"
        ],
        "2p": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "香桂銀金皇金銀桂香"
        ],
        "小京将棋(左置換)": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "香京銀金玉金銀桂香"
        ],
        "小京将棋(左置換)2p": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "香京銀金皇金銀桂香"
        ],
        "小京将棋(右置換)": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "香桂銀金玉金銀京香"
        ],
        "小京将棋(右置換)2p": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "香桂銀金皇金銀京香"
        ],
        "山車将棋(左置換)": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "山桂銀金玉金銀桂香"
        ],
        "山車将棋(左置換)2p": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "山桂銀金皇金銀桂香"
        ],
        "山車将棋(右置換)": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "香桂銀金玉金銀桂山"
        ],
        "山車将棋(右置換)2p": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "香桂銀金皇金銀桂山"
        ],
        "銅将棋(左置換)": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "香桂銅金玉金銀桂香"
        ],
        "銅将棋(左置換)2p": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "香桂銅金皇金銀桂香"
        ],
        "銅将棋(右置換)": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "香桂銀金玉金銅桂香"
        ],
        "銅将棋(右置換)2p": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "香桂銀金皇金銅桂香"
        ],
        "金翅将棋(左置換)": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "香桂銀翅玉金銀桂香"
        ],
        "金翅将棋(左置換)2p": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "香桂銀翅皇金銀桂香"
        ],
        "金翅将棋(右置換)": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "香桂銀金玉翅銀桂香"
        ],
        "金翅将棋(右置換)2p": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "香桂銀金皇翅銀桂香"
        ],
        "金斗将棋(左置換)": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "香桂銀斗玉金銀桂香"
        ],
        "金斗将棋(左置換)2p": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "香桂銀斗皇金銀桂香"
        ],
        "金斗将棋(右置換)": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "香桂銀金玉斗銀桂香"
        ],
        "金斗将棋(右置換)2p": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "香桂銀金皇斗銀桂香"
        ],
        "将棋30++(左系フル置換)": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "山京銅翅玉金銀桂香"
        ],
        "将棋30++(左系フル置換)2p": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "山京銅翅皇金銀桂香"
        ],
        "将棋30++(右系フル置換)": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "香桂銀金玉翅銅京山"
        ],
        "将棋30++(右系フル置換)2p": [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・・・・飛・",
          "香桂銀金皇翅銅京山"
        ],
        小将棋: [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・醉・・飛・",
          "香桂銀金玉金銀桂香"
        ],
        小将棋2p: [
          "歩歩歩歩歩歩歩歩歩",
          "・角・・醉・・飛・",
          "香桂銀金皇金銀桂香"
        ],
        獅子将棋: [
          "歩歩歩歩歩歩歩歩歩",
          "・碼・獅醉奔・竜・",
          "馨麒艮釡玉釡艮鳳馨"
        ],
        獅子将棋2p: [
          "歩歩歩歩歩歩歩歩歩",
          "・碼・獅醉奔・竜・",
          "馨麒艮釡皇釡艮鳳馨"
        ],
        禽将棋: [
          "・・・・・・燕・・",
          "燕燕燕燕燕燕燕燕燕",
          "・・・鷹・鷹・・・",
          "鶉雉鶴・鵬・鶴雉享"
        ],
        p4: [
          "・・・・歩・・・・",
          "・・・歩飛歩・・・",
          "・・銀金玉金銀・・"
        ],
        平安将棋: [
          "歩歩歩歩歩歩歩歩歩",
          "・・・・・・・・・",
          "香桂銀金玉金銀桂香"
        ]
      },
      10: {
        "京将棋(左京配置)": [
          "歩歩歩歩歩歩歩歩歩歩",
          "・角・・・銅・・飛・",
          "香桂京銀金玉金銀桂香"
        ],
        "京将棋(左京配置)2p": [
          "歩歩歩歩歩歩歩歩歩歩",
          "・角・・・銅・・飛・",
          "香桂京銀金皇金銀桂香"
        ],
        "京将棋(右京配置)": [
          "歩歩歩歩歩歩歩歩歩歩",
          "・角・・銅・・・飛・",
          "香桂銀金玉金銀京桂香"
        ],
        "京将棋(右京配置)2p": [
          "歩歩歩歩歩歩歩歩歩歩",
          "・角・・銅・・・飛・",
          "香桂銀金皇金銀京桂香"
        ],
        平成将棋: [
          "・・仲・・・・仲・・",
          "歩歩歩歩歩歩歩歩歩歩",
          "横飛角・獅奔・角飛横",
          "竪麒艮釡玉醉釡艮鳳竪"
        ],
        平成将棋2p: [
          "・・仲・・・・仲・・",
          "歩歩歩歩歩歩歩歩歩歩",
          "横飛角・獅奔・角飛横",
          "竪麒艮釡皇醉釡艮鳳竪"
        ],
        御妃将棋: [
          "歩歩歩歩歩歩歩歩歩歩",
          "・角・・・・・・飛・",
          "返跳銀金女玉金銀跳返"
        ],
        御妃将棋2p: [
          "歩歩歩歩歩歩歩歩歩歩",
          "・角・・・・・・飛・",
          "返跳銀金女皇金銀跳返"
        ]
      },
      12: {
        中将棋: [
          "・・・仲・・・・仲・・・",
          "歩歩歩歩歩歩歩歩歩歩歩歩",
          "横竪飛碼竜獅奔竜碼飛竪横",
          "反・角・虎麒鳳虎・角・反",
          "馨猛同艮釡玉醉釡艮同猛馨"
        ],
        中将棋2p: [
          "・・・仲・・・・仲・・・",
          "歩歩歩歩歩歩歩歩歩歩歩歩",
          "横竪飛碼竜獅奔竜碼飛竪横",
          "反・角・虎麒鳳虎・角・反",
          "馨猛同艮釡皇醉釡艮同猛馨"
        ]
      },
      14: {
        p4: [
          "・・・歩歩歩歩歩歩歩歩・・・",
          "・・・・角・・・・飛・・・・",
          "・・・香桂銀玉金銀桂香・・・"
        ]
      },
      15: {
        p4: [
          "・・・歩歩歩歩歩歩歩歩歩・・・",
          "・・・・角・・・・・飛・・・・",
          "・・・香桂銀金玉金銀桂香・・・"
        ],
        大将棋: [
          "・・・・仲・・・・・仲・・・・",
          "歩歩歩歩歩歩歩歩歩歩歩歩歩歩歩",
          "飛瀧横竪角碼竜奔竜碼角竪横瀧飛",
          "・丑・嗔・狼麒獅鳳狼・嗔・丑・",
          "反・猫・猛・虎醉虎・猛・猫・反",
          "馨桂石鉄同艮釡玉釡艮同鉄石桂馨"
        ],
        大将棋2p: [
          "・・・・仲・・・・・仲・・・・",
          "歩歩歩歩歩歩歩歩歩歩歩歩歩歩歩",
          "飛瀧横竪角碼竜奔竜碼角竪横瀧飛",
          "・丑・嗔・狼麒獅鳳狼・嗔・丑・",
          "反・猫・猛・虎醉虎・猛・猫・反",
          "馨桂石鉄同艮釡皇釡艮同鉄石桂馨"
        ]
      },
      17: {
        p4: [
          "・・・・歩歩歩歩歩歩歩歩歩・・・・",
          "・・・・・角・・・・・飛・・・・・",
          "・・・・香桂銀金玉金銀桂香・・・・"
        ]
      }
    }
  },
  チェス: {
    english: "Chess",
    fontColor: "#FFFFFF",
    backgroundColor: "#000000",
    promoLine: 1,
    position: {
      6: {
        default: [
          "丘丘丘丘丘丘",
          "塔騎后王騎塔"
        ],
        "2p": [
          "丘丘丘丘丘丘",
          "塔騎帝后騎塔"
        ]
      },
      8: {
        default: [
          "兵兵兵兵兵兵兵兵",
          "塔騎聖后王聖騎塔"
        ],
        "2p": [
          "兵兵兵兵兵兵兵兵",
          "塔騎聖帝后聖騎塔"
        ]
      },
      9: {
        default: [
          "兵兵兵兵兵兵兵兵兵",
          "塔騎聖后・王聖騎塔"
        ],
        "2p": [
          "兵兵兵兵兵兵兵兵兵",
          "塔騎聖帝・后聖騎塔"
        ]
      },
      10: {
        カパブランカチェス: [
          "浜浜浜浜浜浜浜浜浜浜",
          "塔騎駮聖后国聖駆騎塔"
        ],
        カパブランカチェス2p: [
          "浜浜浜浜浜浜浜浜浜浜",
          "塔騎駆聖國后聖駮騎塔"
        ],
        グランドチェス: [
          "浜浜浜浜浜浜浜浜浜浜",
          "・騎聖后王駆駮聖騎・",
          "塔・・・・・・・・塔"
        ],
        グランドチェス2p: [
          "浜浜浜浜浜浜浜浜浜浜",
          "・騎聖駮駆帝后聖騎・",
          "塔・・・・・・・・塔"
        ]
      },
      12: {
        GrantAcedrex: [
          "梹梹梹梹梹梹梹梹梹梹梹梹",
          "・・・・・・・・・・・・",
          "・・・・・・・・・・・・",
          "砦師犀麟鰐鴻呈鰐麟犀師砦"
        ],
        GrantAcedrex2p: [
          "梹梹梹梹梹梹梹梹梹梹梹梹",
          "・・・・・・・・・・・・",
          "・・・・・・・・・・・・",
          "砦師犀麟鰐逞鴻鰐麟犀師砦"
        ],
        "クーリエチェス(初期配置)": [
          "鋲鋲鋲鋲鋲鋲鋲鋲鋲鋲鋲鋲",
          "砦騎射使賢閏妾佯使射騎砦"
        ],
        "クーリエチェス(初期配置)2p": [
          "鋲鋲鋲鋲鋲鋲鋲鋲鋲鋲鋲鋲",
          "砦騎射使佯妾潤賢使射騎砦"
        ],
        "クーリエチェス(定形配置)": [
          "鋲・・・・・鋲・・・・鋲",
          "・・・・・・妾・・・・・",
          "・鋲鋲鋲鋲鋲・鋲鋲鋲鋲・",
          "砦騎射使賢閏・佯使射騎砦"
        ],
        "クーリエチェス(定形配置)2p": [
          "鋲・・・・鋲・・・・・鋲",
          "・・・・・妾・・・・・・",
          "・鋲鋲鋲鋲・鋲鋲鋲鋲鋲・",
          "砦騎射使佯・潤賢使射騎砦"
        ]
      },
      14: {
        p4: [
          "・・・兵兵兵兵兵兵兵兵・・・",
          "・・・塔騎聖后王聖騎塔・・・"
        ]
      },
      15: {
        p4: [
          "・・・兵兵兵兵兵兵兵兵兵・・・",
          "・・・塔騎聖后・王聖騎塔・・・"
        ]
      },
      17: {
        p4: [
          "・・・・兵兵兵兵兵兵兵兵兵・・・・",
          "・・・・塔騎聖后・王聖騎塔・・・・"
        ]
      }
    }
  },
  シャンチー: {
    english: "Xiangqi",
    fontColor: "#BB1100",
    backgroundColor: "#FFDD77",
    promoLine: 4,
    position: {
      8: {
        default: [
          "卒・卒卒・卒・卒",
          "・炮・・・・炮・",
          "・・・・・・・・",
          "俥馮相帥仕相馮俥"
        ],
        "2p": [
          "卒・卒・卒卒・卒",
          "・炮・・・・炮・",
          "・・・・・・・・",
          "俥馮相仕將相馮俥"
        ]
      },
      9: {
        default: [
          "卒・卒・卒・卒・卒",
          "・炮・・・・・炮・",
          "・・・・・・・・・",
          "俥馮相仕帥仕相馮俥"
        ],
        "2p": [
          "卒・卒・卒・卒・卒",
          "・炮・・・・・炮・",
          "・・・・・・・・・",
          "俥馮相仕將仕相馮俥"
        ]
      },
      14: {
        p4: [
          "・・・卒・卒卒・卒・卒・・・",
          "・・・・炮・・・・炮・・・・",
          "・・・俥相馮帥仕馮相俥・・・"
        ]
      },
      15: {
        p4: [
          "・・・卒・卒・卒・卒・卒・・・",
          "・・・・炮・・・・・炮・・・・",
          "・・・俥相馮仕帥仕馮相俥・・・"
        ]
      },
      17: {
        p4: [
          "・・・・卒・卒・卒・卒・卒・・・・",
          "・・・・・炮・・・・・炮・・・・・",
          "・・・・・・・・・・・・・・・・・",
          "・・・・俥馮相仕帥仕相馮俥・・・・"
        ]
      }
    }
  },
  チャンギ: {
    english: "Janggi",
    fontColor: "#008800",
    backgroundColor: "#FFFFFF",
    position: {
      8: {
        default: [
          "卆・卆卆・卆・卆",
          "・包・・・・包・",
          "・・・楚・・・・",
          "車馭象・士象馭車"
        ],
        "2p": [
          "卆・卆・卆卆・卆",
          "・包・・・・包・",
          "・・・・漢・・・",
          "車馭象士・象馭車"
        ],
        左象配置: [
          "卆・卆卆・卆・卆",
          "・包・・・・包・",
          "・・・楚・・・・",
          "車象馭・士象馭車"
        ],
        左象配置2p: [
          "卆・卆・卆卆・卆",
          "・包・・・・包・",
          "・・・・漢・・・",
          "車象馭士・象馭車"
        ],
        右象配置: [
          "卆・卆卆・卆・卆",
          "・包・・・・包・",
          "・・・楚・・・・",
          "車馭象・士馭象車"
        ],
        右象配置2p: [
          "卆・卆・卆卆・卆",
          "・包・・・・包・",
          "・・・・漢・・・",
          "車馭象士・馭象車"
        ],
        外象配置: [
          "卆・卆卆・卆・卆",
          "・包・・・・包・",
          "・・・楚・・・・",
          "車象馭・士馭象車"
        ],
        外象配置2p: [
          "卆・卆・卆卆・卆",
          "・包・・・・包・",
          "・・・・漢・・・",
          "車象馭士・馭象車"
        ]
      },
      9: {
        default: [
          "卆・卆・卆・卆・卆",
          "・包・・・・・包・",
          "・・・・楚・・・・",
          "車馭象士・士象馭車"
        ],
        "2p": [
          "卆・卆・卆・卆・卆",
          "・包・・・・・包・",
          "・・・・漢・・・・",
          "車馭象士・士象馭車"
        ],
        左象配置: [
          "卆・卆・卆・卆・卆",
          "・包・・・・・包・",
          "・・・・楚・・・・",
          "車象馭士・士象馭車"
        ],
        左象配置2p: [
          "卆・卆・卆・卆・卆",
          "・包・・・・・包・",
          "・・・・漢・・・・",
          "車象馭士・士象馭車"
        ],
        右象配置: [
          "卆・卆・卆・卆・卆",
          "・包・・・・・包・",
          "・・・・楚・・・・",
          "車馭象士・士馭象車"
        ],
        右象配置2p: [
          "卆・卆・卆・卆・卆",
          "・包・・・・・包・",
          "・・・・漢・・・・",
          "車馭象士・士馭象車"
        ],
        外象配置: [
          "卆・卆・卆・卆・卆",
          "・包・・・・・包・",
          "・・・・楚・・・・",
          "車象馭士・士馭象車"
        ],
        外象配置2p: [
          "卆・卆・卆・卆・卆",
          "・包・・・・・包・",
          "・・・・漢・・・・",
          "車象馭士・士馭象車"
        ]
      },
      14: {
        p4: [
          "・・・卆・卆卆・卆・卆・・・",
          "・・・・包・楚・・包・・・・",
          "・・・車象馭・士馭象車・・・"
        ]
      },
      15: {
        p4: [
          "・・・卆・卆・卆・卆・卆・・・",
          "・・・・包・・楚・・包・・・・",
          "・・・車象馭士・士馭象車・・・"
        ]
      },
      17: {
        p4: [
          "・・・・卆・卆・卆・卆・卆・・・・",
          "・・・・・包・・・・・包・・・・・",
          "・・・・・・・・楚・・・・・・・・",
          "・・・・車馭象士・士象馭車・・・・"
        ]
      }
    }
  },
  マークルック: {
    english: "Makruk",
    fontColor: "#FFFFFF",
    backgroundColor: "#CC2222",
    promoLine: 3,
    position: {
      8: {
        default: [
          "貝貝貝貝貝貝貝貝",
          "・・・・・・・・",
          "船瑪根君種根瑪船"
        ],
        "2p": [
          "貝貝貝貝貝貝貝貝",
          "・・・・・・・・",
          "船瑪根公種根瑪船"
        ]
      },
      9: {
        default: [
          "貝貝貝貝貝貝貝貝貝",
          "・・・・・・・・・",
          "船瑪根種君種根瑪船"
        ],
        "2p": [
          "貝貝貝貝貝貝貝貝貝",
          "・・・・・・・・・",
          "船瑪根種公種根瑪船"
        ]
      },
      14: {
        p4: [
          "・・・貝貝貝貝貝貝貝貝・・・",
          "・・・・・・・・・・・・・・",
          "・・・船瑪根君種根瑪船・・・"
        ]
      },
      15: {
        p4: [
          "・・・貝貝貝貝貝貝貝貝貝・・・",
          "・・・・・・・・・・・・・・・",
          "・・・船瑪根種君種根瑪船・・・"
        ]
      },
      17: {
        p4: [
          "・・・・貝貝貝貝貝貝貝貝貝・・・・",
          "・・・・・・・・・・・・・・・・・",
          "・・・・船瑪根種君種根瑪船・・・・"
        ]
      }
    }
  },
  チャトランガ: {
    english: "Chaturanga",
    fontColor: "#666666",
    backgroundColor: "#FFFFEE",
    promoLine: -1,
    position: {
      8: {
        default: [
          "木火天央大天火木",
          "戦午像主臣像午戦"
        ],
        "2p": [
          "木火天央大天火木",
          "戦午像柱臣像午戦"
        ],
        p4: [
          "矢火本央・・・・",
          "舟午豕主・・・・"
        ]
      },
      9: {
        default: [
          "木火天大央大天火木",
          "戦午像臣主臣像午戦"
        ],
        "2p": [
          "木火天大央大天火木",
          "戦午像臣柱臣像午戦"
        ]
      },
      14: {
        p4: [
          "・・・木火天央大天火木・・・",
          "・・・戦午像主臣像午戦・・・"
        ]
      },
      15: {
        p4: [
          "・・・木火天大央大天火木・・・",
          "・・・戦午像臣主臣像午戦・・・"
        ]
      },
      17: {
        p4: [
          "・・・・木火天大央大天火木・・・・",
          "・・・・戦午像臣主臣像午戦・・・・"
        ]
      }
    }
  },
  どうぶつしょうぎ: {
    english: "DobutsuShogi",
    fontColor: "#666666",
    backgroundColor: "#DDCCFF",
    promoLine: -3,
    position: {
      3: {
        default: [
          "・ひ・",
          "きラぞ"
        ]
      },
      5: {
        default: [
          "・ひひひ・",
          "・・・・・",
          "ねいらいね"
        ]
      }
    }
  }
}, q = {
  将棋: {
    backgroundColor: "#EECC88",
    borderColor: "#333333",
    field: [
      "SSSSSSSSS",
      "SSSSSSSSS",
      "SSSSSSSSS",
      "SSSSSSSSS",
      "SSSSSSSSS",
      "SSSSSSSSS",
      "SSSSSSSSS",
      "SSSSSSSSS",
      "SSSSSSSSS"
    ]
  },
  チェス: {
    backgroundColor: "#444444",
    borderColor: "#000000",
    field: [
      "WBWBWBWB",
      "BWBWBWBW",
      "WBWBWBWB",
      "BWBWBWBW",
      "WBWBWBWB",
      "BWBWBWBW",
      "WBWBWBWB",
      "BWBWBWBW"
    ]
  },
  シャンチー: {
    backgroundColor: "#EECC88",
    borderColor: "#333333",
    promoLineOffset: 1,
    field: [
      "SSS<#>SSS",
      "SSS#*#SSS",
      "SSS>#<SSS",
      "SSSSSSSSS",
      "=======]=",
      "=[=======",
      "SSSSSSSSS",
      "SSS<#>SSS",
      "SSS#*#SSS",
      "SSS>#<SSS"
    ]
  },
  チャンギ: {
    backgroundColor: "#EECC88",
    borderColor: "#333333",
    promoLineOffset: 1,
    field: [
      "SSS<#>SSS",
      "SSS#*#SSS",
      "SSS>#<SSS",
      "SSSSSSSSS",
      "SSSSSSSSS",
      "SSSSSSSSS",
      "SSSSSSSSS",
      "SSS<#>SSS",
      "SSS#*#SSS",
      "SSS>#<SSS"
    ]
  },
  マークルック: {
    backgroundColor: "#775544",
    borderColor: "#000000",
    field: [
      "MMMMMMMM",
      "MMMMMMMM",
      "MMMMMMMM",
      "MMMMMMMM",
      "MMMMMMMM",
      "MMMMMMMM",
      "MMMMMMMM",
      "MMMMMMMM"
    ]
  },
  どうぶつしょうぎ: {
    backgroundColor: "#FFFFDD",
    borderColor: "#FFDD99",
    promoLineOffset: -2,
    field: [
      "DDD",
      "$$$",
      "$$$",
      "ddd"
    ]
  },
  将棋5x5: {
    backgroundColor: "#EECC88",
    borderColor: "#333333",
    promoLineOffset: -2,
    field: [
      "SSSSS",
      "SSSSS",
      "SSSSS",
      "SSSSS",
      "SSSSS"
    ]
  },
  将棋7x7: {
    backgroundColor: "#EECC88",
    borderColor: "#333333",
    promoLineOffset: -1,
    field: [
      "SSSSSSS",
      "SSSSSSS",
      "SSSSSSS",
      "SSSSSSS",
      "SSSSSSS",
      "SSSSSSS",
      "SSSSSSS"
    ]
  },
  将棋10x10: {
    backgroundColor: "#EECC88",
    borderColor: "#333333",
    field: [
      "SSSSSSSSSS",
      "SSSSSSSSSS",
      "SSSSSSSSSS",
      "SSSSSSSSSS",
      "SSSSSSSSSS",
      "SSSSSSSSSS",
      "SSSSSSSSSS",
      "SSSSSSSSSS",
      "SSSSSSSSSS",
      "SSSSSSSSSS"
    ]
  },
  チェス6x6: {
    backgroundColor: "#444444",
    borderColor: "#000000",
    field: [
      "WBWBWB",
      "BWBWBW",
      "WBWBWB",
      "BWBWBW",
      "WBWBWB",
      "BWBWBW"
    ]
  },
  チェス10x8: {
    backgroundColor: "#444444",
    borderColor: "#000000",
    field: [
      "WBWBWBWBWB",
      "BWBWBWBWBW",
      "WBWBWBWBWB",
      "BWBWBWBWBW",
      "WBWBWBWBWB",
      "BWBWBWBWBW",
      "WBWBWBWBWB",
      "BWBWBWBWBW"
    ]
  },
  チェス10x10: {
    backgroundColor: "#444444",
    borderColor: "#000000",
    promoLineOffset: 2,
    field: [
      "WBWBWBWBWB",
      "BWBWBWBWBW",
      "WBWBWBWBWB",
      "BWBWBWBWBW",
      "WBWBWBWBWB",
      "BWBWBWBWBW",
      "WBWBWBWBWB",
      "BWBWBWBWBW",
      "WBWBWBWBWB",
      "BWBWBWBWBW"
    ]
  },
  チェス12x8: {
    backgroundColor: "#444444",
    borderColor: "#000000",
    field: [
      "WBWBWBWBWBWB",
      "BWBWBWBWBWBW",
      "WBWBWBWBWBWB",
      "BWBWBWBWBWBW",
      "WBWBWBWBWBWB",
      "BWBWBWBWBWBW",
      "WBWBWBWBWBWB",
      "BWBWBWBWBWBW"
    ]
  },
  チェス12x12: {
    backgroundColor: "#444444",
    borderColor: "#000000",
    field: [
      "WBWBWBWBWBWB",
      "BWBWBWBWBWBW",
      "WBWBWBWBWBWB",
      "BWBWBWBWBWBW",
      "WBWBWBWBWBWB",
      "BWBWBWBWBWBW",
      "WBWBWBWBWBWB",
      "BWBWBWBWBWBW",
      "WBWBWBWBWBWB",
      "BWBWBWBWBWBW",
      "WBWBWBWBWBWB",
      "BWBWBWBWBWBW"
    ]
  },
  ごろごろどうぶつしょうぎ: {
    backgroundColor: "#FFFFDD",
    borderColor: "#FFDD99",
    promoLineOffset: -1,
    field: [
      "44444",
      "44444",
      "$$$$$",
      "$$$$$",
      "ddddd",
      "ddddd"
    ]
  },
  古将棋8x8: {
    backgroundColor: "#EECC88",
    borderColor: "#333333",
    field: [
      "ssssssss",
      "ssssssss",
      "ssssssss",
      "ssssssss",
      "ssssssss",
      "ssssssss",
      "ssssssss",
      "ssssssss"
    ]
  },
  古将棋9x8: {
    backgroundColor: "#EECC88",
    borderColor: "#333333",
    field: [
      "sssssssss",
      "sssssssss",
      "sssssssss",
      "sssssssss",
      "sssssssss",
      "sssssssss",
      "sssssssss",
      "sssssssss"
    ]
  },
  古将棋9x9: {
    backgroundColor: "#EECC88",
    borderColor: "#333333",
    field: [
      "sssssssss",
      "sssssssss",
      "sssssssss",
      "sssssssss",
      "sssssssss",
      "sssssssss",
      "sssssssss",
      "sssssssss",
      "sssssssss"
    ]
  },
  古将棋10x10: {
    backgroundColor: "#EECC88",
    borderColor: "#333333",
    promoLineOffset: 1,
    field: [
      "ssssssssss",
      "ssssssssss",
      "ssssssssss",
      "ssssssssss",
      "ssssssssss",
      "ssssssssss",
      "ssssssssss",
      "ssssssssss",
      "ssssssssss",
      "ssssssssss"
    ]
  },
  古将棋12x12: {
    backgroundColor: "#EECC88",
    borderColor: "#333333",
    promoLineOffset: 1,
    field: [
      "ssssssssssss",
      "ssssssssssss",
      "ssssssssssss",
      "ssssssssssss",
      "ssssssssssss",
      "ssssssssssss",
      "ssssssssssss",
      "ssssssssssss",
      "ssssssssssss",
      "ssssssssssss",
      "ssssssssssss",
      "ssssssssssss"
    ]
  },
  古将棋15x15: {
    backgroundColor: "#EECC88",
    borderColor: "#333333",
    promoLineOffset: 2,
    field: [
      "sssssssssssssss",
      "sssssssssssssss",
      "sssssssssssssss",
      "sssssssssssssss",
      "sssssssssssssss",
      "sssssssssssssss",
      "sssssssssssssss",
      "sssssssssssssss",
      "sssssssssssssss",
      "sssssssssssssss",
      "sssssssssssssss",
      "sssssssssssssss",
      "sssssssssssssss",
      "sssssssssssssss",
      "sssssssssssssss"
    ]
  },
  クレージーハウス: {
    backgroundColor: "#444444",
    borderColor: "#000000",
    field: [
      "wbwbwbwb",
      "bwbwbwbw",
      "wbwbwbwb",
      "bwbwbwbw",
      "wbwbwbwb",
      "bwbwbwbw",
      "wbwbwbwb",
      "bwbwbwbw"
    ]
  },
  "4人チェス": {
    backgroundColor: "#444444",
    borderColor: "#000000",
    promoLineOffset: 6,
    field: [
      "...BWBWBWBW...",
      "...WBWBWBWB...",
      "...BWBWBWBW...",
      "BWBWBWBWBWBWBW",
      "WBWBWBWBWBWBWB",
      "BWBWBWBWBWBWBW",
      "WBWBWBWBWBWBWB",
      "BWBWBWBWBWBWBW",
      "WBWBWBWBWBWBWB",
      "BWBWBWBWBWBWBW",
      "WBWBWBWBWBWBWB",
      "...WBWBWBWB...",
      "...BWBWBWBW...",
      "...WBWBWBWB..."
    ]
  },
  四神将棋: {
    backgroundColor: "#EECC88",
    borderColor: "#333333",
    sidePromo: !0,
    field: [
      "...SSSSSSSSS...",
      "...SSSSSSSSS...",
      "...SSSSSSSSS...",
      "SSSSSSSSSSSSSSS",
      "SSSSSSSSSSSSSSS",
      "SSSSSSSSSSSSSSS",
      "SSSSSSSSSSSSSSS",
      "SSSSSSSSSSSSSSS",
      "SSSSSSSSSSSSSSS",
      "SSSSSSSSSSSSSSS",
      "SSSSSSSSSSSSSSS",
      "SSSSSSSSSSSSSSS",
      "...SSSSSSSSS...",
      "...SSSSSSSSS...",
      "...SSSSSSSSS..."
    ]
  },
  クロス8x8: {
    backgroundColor: "#EECC88",
    borderColor: "#333333",
    field: [
      "WBW<#>SS",
      "BWB#*#SS",
      "WBW>#<SS",
      "======]=",
      "=[======",
      "SS<#>BWB",
      "SS#*#WBW",
      "SS>#<BWB"
    ]
  },
  クロス9x9: {
    backgroundColor: "#EECC88",
    borderColor: "#333333",
    field: [
      "XSX<#>XSX",
      "SXS#*#SXS",
      "XSX>#<XSX",
      "SSSSSSSSS",
      "=[=====]=",
      "SSSSSSSSS",
      "XSX<#>XSX",
      "SXS#*#SXS",
      "XSX>#<XSX"
    ]
  },
  クロス11x11: {
    backgroundColor: "#EECC88",
    borderColor: "#333333",
    field: [
      "BWBW<#>SXSX",
      "WBWB#*#XSXS",
      "BWBW>#<SXSX",
      "SSSSSSSSSSS",
      "SSSSSSSSSSS",
      "=[=======]=",
      "SSSSSSSSSSS",
      "SSSSSSSSSSS",
      "XSXS<#>WBWB",
      "SXSX#*#BWBW",
      "XSXS>#<WBWB"
    ]
  },
  クロス12x12: {
    backgroundColor: "#EECC88",
    borderColor: "#333333",
    field: [
      "BWBW<#>XSXSX",
      "WBWB#*#SXSXS",
      "BWBW>#<XSXSX",
      "SSSSSSSSSSSS",
      "SSSSSSSSSSSS",
      "==========]=",
      "=[==========",
      "SSSSSSSSSSSS",
      "SSSSSSSSSSSS",
      "XSXSX<#>WBWB",
      "SXSXS#*#BWBW",
      "XSXSX>#<WBWB"
    ]
  },
  クロス13x13: {
    backgroundColor: "#EECC88",
    borderColor: "#333333",
    field: [
      "BWBWB<#>XSXSX",
      "WBWBW#*#SXSXS",
      "BWBWB>#<XSXSX",
      "SSSSSSSSSSSSS",
      "SSSSSSSSSSSSS",
      "SSSSSSSSSSSSS",
      "=[=========]=",
      "SSSSSSSSSSSSS",
      "SSSSSSSSSSSSS",
      "SSSSSSSSSSSSS",
      "XSXSX<#>BWBWB",
      "SXSXS#*#WBWBW",
      "XSXSX>#<BWBWB"
    ]
  },
  "4人用クロス8列": {
    backgroundColor: "#444444",
    borderColor: "#000000",
    promoLineOffset: 6,
    field: [
      "...XSX<#>XS...",
      "...SXS#*#SX...",
      "...XSX>#<XS...",
      "XSXWBWBWBWBSXS",
      "SXSBWBWBWBWXSX",
      "<#>WB===]WBSXS",
      "#*#BW====BW<#>",
      ">#<WB====WB#*#",
      "SXSBW[===BW>#<",
      "XSXWBWBWBWBSXS",
      "SXSBWBWBWBWXSX",
      "...SX<#>XSX...",
      "...XS#*#SXS...",
      "...SX>#<XSX..."
    ]
  },
  "4人用クロス9列": {
    backgroundColor: "#EECC88",
    borderColor: "#333333",
    promoLineOffset: 6,
    field: [
      "...XSX<#>XSX...",
      "...SXS#*#SXS...",
      "...XSX>#<XSX...",
      "XSXBWBWBWBWBXSX",
      "SXSWBWBWBWBWSXS",
      "XSXBWB==]BWBXSX",
      "<#>WB=====BW<#>",
      "#*#BW=====WB#*#",
      ">#<WB=====BW>#<",
      "XSXBWB[==BWBXSX",
      "SXSWBWBWBWBWSXS",
      "XSXBWBWBWBWBXSX",
      "...XSX<#>XSX...",
      "...SXS#*#SXS...",
      "...XSX>#<XSX..."
    ]
  },
  "4人用クロス9列4行": {
    backgroundColor: "#EECC88",
    borderColor: "#333333",
    promoLineOffset: 6,
    field: [
      "....XSX<#>XSX....",
      "....SXS#*#SXS....",
      "....XSX>#<XSX....",
      "....SXSXSXSXS....",
      "XSXSBWBWBWBWBSXSX",
      "SXSXWBWBWBWBWXSXS",
      "XSXSBWB==]BWBSXSX",
      "<#>XWB=====BWX<#>",
      "#*#SBW=====WBS#*#",
      ">#<XWB=====BWX>#<",
      "XSXSBWB[==BWBSXSX",
      "SXSXWBWBWBWBWXSXS",
      "XSXSBWBWBWBWBSXSX",
      "....SXSXSXSXS....",
      "....XSX<#>XSX....",
      "....SXS#*#SXS....",
      "....XSX>#<XSX...."
    ]
  }
}, D = {
  S: {
    name: "将棋",
    text: "　　",
    backgroundColor: "#EECC88",
    borderColor: "#333333"
  },
  s: {
    name: "古将棋(持ち駒なし)",
    text: "　　",
    backgroundColor: "#EECC88",
    borderColor: "#333333",
    attr: ["cantCapture"]
  },
  X: {
    name: "クロス用黒",
    text: "　　",
    backgroundColor: "#BB7744",
    borderColor: "#333333"
  },
  M: {
    name: "マークルック",
    text: "　　",
    backgroundColor: "#775544",
    borderColor: "#CCCCCC"
  },
  W: {
    name: "チェス白",
    text: "　　",
    backgroundColor: "#CCCCCC",
    borderColor: "#33333377"
  },
  B: {
    name: "チェス黒",
    text: "　　",
    backgroundColor: "#444444",
    borderColor: "#CCCCCC77"
  },
  w: {
    name: "チェス白(クレージーハウス)",
    text: "　　",
    backgroundColor: "#CCCCCC",
    borderColor: "#33333377",
    attr: ["capture"]
  },
  b: {
    name: "チェス黒(持ち駒あり)",
    text: "　　",
    backgroundColor: "#444444",
    borderColor: "#CCCCCC77",
    attr: ["capture"]
  },
  "+": {
    name: "シャンチー(交点)",
    text: "　　",
    backgroundColor: "#EECC88",
    borderColor: "#333333",
    intersect: !0
  },
  $: {
    name: "どうぶつしょうぎ地",
    text: "　　",
    backgroundColor: "#FFFFDD",
    borderColor: "#FFBB77"
  },
  D: {
    name: "どうぶつしょうぎ空",
    text: "　　",
    backgroundColor: "#AADDFF",
    borderColor: "#FFBB77"
  },
  4: {
    name: "どうぶつしょうぎ夕",
    text: "　　",
    backgroundColor: "#FFDDAA",
    borderColor: "#FFBB77"
  },
  d: {
    name: "どうぶつしょうぎ森",
    text: "　　",
    backgroundColor: "#DDFFAA",
    borderColor: "#FFBB77"
  },
  "=": {
    name: "河界",
    text: "＝＝",
    backgroundColor: "#EECC88",
    borderColor: "#33221144"
  },
  "[": {
    name: "河界左字",
    text: "＝＝",
    backgroundColor: "#EECC88",
    borderColor: "#33221144",
    displayText: "河",
    textRotate: -90
  },
  "]": {
    name: "河界右字",
    text: "＝＝",
    backgroundColor: "#EECC88",
    borderColor: "#33221144",
    displayText: "界",
    textRotate: 90
  },
  "#": {
    name: "九宮",
    text: "　：",
    backgroundColor: "#CC9966",
    borderColor: "#333333",
    attr: ["palace"]
  },
  "<": {
    name: "九宮左",
    text: "　＼",
    backgroundColor: "#CC9966",
    borderColor: "#333333",
    borderSlashLeft: !0,
    attr: ["palace", "palaceSlash"]
  },
  ">": {
    name: "九宮右",
    text: "　／",
    backgroundColor: "#CC9966",
    borderColor: "#333333",
    borderSlashRight: !0,
    attr: ["palace", "palaceSlash"]
  },
  "*": {
    name: "九宮中",
    text: "　※",
    backgroundColor: "#CC9966",
    borderColor: "#333333",
    borderSlashLeft: !0,
    borderSlashRight: !0,
    attr: ["palace", "palaceSlash"]
  },
  ".": {
    name: "立入禁止",
    text: "＃＃",
    backgroundColor: "#00000000",
    borderColor: "#00000000",
    attr: ["keepOut"]
  }
}, T = {
  歩: {
    name: "歩兵",
    display: ["歩兵"],
    gameName: "将棋",
    unit: "兵",
    attr: ["capture"],
    forcePromoLine: 1,
    range: {
      default: "歩"
    },
    promo: "と"
  },
  桂: {
    name: "桂馬",
    display: ["桂馬"],
    gameName: "将棋",
    unit: "馬",
    attr: ["capture"],
    forcePromoLine: 2,
    range: {
      default: "桂"
    },
    promo: "圭"
  },
  銀: {
    name: "銀将",
    display: ["銀将", "銀將"],
    gameName: "将棋",
    unit: "象",
    attr: ["capture"],
    range: {
      default: "銀"
    },
    promo: "全"
  },
  角: {
    name: "角行",
    display: ["角行"],
    gameName: "将棋",
    unit: "象",
    attr: ["capture"],
    range: {
      default: "聖"
    },
    promo: "馬"
  },
  香: {
    name: "香車",
    display: ["香車"],
    gameName: "将棋",
    unit: "車",
    attr: ["capture"],
    forcePromoLine: 1,
    range: {
      default: "香"
    },
    promo: "杏"
  },
  飛: {
    name: "飛車",
    display: ["飛車"],
    gameName: "将棋",
    unit: "車",
    attr: ["capture"],
    range: {
      default: "車"
    },
    promo: "龍"
  },
  金: {
    name: "金将",
    display: ["金將", "金将"],
    gameName: "将棋",
    unit: "臣",
    attr: ["capture"],
    range: {
      default: "金"
    }
  },
  玉: {
    name: "玉将",
    display: ["玉將", "王將", "玉将", "王将"],
    alias: "皇",
    gameName: "将棋",
    unit: "王",
    attr: ["king", "capture"],
    range: {
      default: "王"
    }
  },
  兵: {
    name: "ポーン",
    display: ["♟兵", "♙兵"],
    gameName: "チェス",
    unit: "兵",
    attr: ["enPassant"],
    forcePromoLine: 1,
    range: {
      default: "歩",
      start: "二",
      attack: "兵",
      enPassant: "通"
    },
    promo: "妃騏城僧"
  },
  騎: {
    name: "ナイト",
    display: ["♞騎", "♘騎"],
    gameName: "チェス",
    unit: "馬",
    range: {
      default: "騎"
    }
  },
  聖: {
    name: "ビショップ",
    display: ["♝聖", "♗聖"],
    gameName: "チェス",
    unit: "象",
    range: {
      default: "聖"
    }
  },
  塔: {
    name: "ルーク",
    display: ["♜塔", "♖塔"],
    gameName: "チェス",
    unit: "車",
    attr: ["castlingRook"],
    range: {
      default: "車",
      castling: "塔"
    }
  },
  后: {
    name: "クイーン",
    display: ["♛后", "♕后"],
    gameName: "チェス",
    unit: "臣",
    range: {
      default: "后"
    }
  },
  王: {
    name: "キング",
    display: ["♚王", "♔王"],
    alias: "帝",
    gameName: "チェス",
    unit: "王",
    attr: ["king", "castlingKing"],
    range: {
      default: "王",
      castling: "城"
    }
  },
  卒: {
    name: "卒",
    display: ["○卒", "○兵", "卒", "兵"],
    gameName: "シャンチー",
    unit: "兵",
    forcePromoLine: 4,
    range: {
      default: "歩"
    },
    promo: "率"
  },
  炮: {
    name: "炮",
    display: ["○炮", "○砲", "炮", "砲"],
    alias: "砲",
    gameName: "シャンチー",
    unit: "砲",
    attr: ["pao"],
    range: {
      default: "車",
      attack: "砲"
    }
  },
  馮: {
    name: "傌",
    display: ["○傌", "○傌", "○馬", "傌", "馬"],
    alias: "傌",
    gameName: "シャンチー",
    unit: "馬",
    range: {
      default: "馮"
    }
  },
  相: {
    name: "相",
    display: ["○相", "○象", "相", "象"],
    gameName: "シャンチー",
    unit: "象",
    attr: ["unCrossRiver"],
    range: {
      default: "相"
    }
  },
  俥: {
    name: "俥",
    display: ["○俥", "○車", "俥", "車"],
    gameName: "シャンチー",
    unit: "車",
    range: {
      default: "車"
    }
  },
  仕: {
    name: "仕",
    display: ["○仕", "○士", "仕", "士"],
    gameName: "シャンチー",
    unit: "臣",
    attr: ["inPalace"],
    range: {
      palaceSlash: "ぞ"
    }
  },
  帥: {
    name: "帥",
    display: ["⊕帥", "⊕將", "帥", "將"],
    alias: "將",
    gameName: "シャンチー",
    unit: "王",
    attr: ["king", "inPalace", "cantSeeKing"],
    range: {
      default: "き"
    }
  },
  卆: {
    name: "卒",
    display: ["⬡卆", "⬡卒", "卆", "卒"],
    gameName: "チャンギ",
    unit: "兵",
    range: {
      default: "卒",
      palaceSlash: "兵"
    }
  },
  包: {
    name: "包",
    display: ["⬡包", "包"],
    gameName: "チャンギ",
    unit: "砲",
    attr: ["po"],
    range: {
      default: "砲",
      palaceSlash: "弓"
    }
  },
  馭: {
    name: "馬",
    display: ["⬡马", "⬡马", "⬡馭", "⬡馬", "马", "馭", "馬"],
    alias: "马",
    gameName: "チャンギ",
    unit: "馬",
    range: {
      default: "馮"
    }
  },
  象: {
    name: "象",
    display: ["⬡象", "象"],
    gameName: "チャンギ",
    unit: "象",
    range: {
      default: "象"
    }
  },
  車: {
    name: "車",
    display: ["⬡车", "⬡车", "⬡車", "车", "車"],
    alias: "车",
    gameName: "チャンギ",
    unit: "車",
    range: {
      default: "車",
      palaceSlash: "聖"
    }
  },
  士: {
    name: "士",
    display: ["⬡士", "士"],
    gameName: "チャンギ",
    unit: "臣",
    attr: ["inPalace"],
    range: {
      default: "き",
      palaceSlash: "ぞ"
    }
  },
  楚: {
    name: "楚",
    display: ["⏣楚", "⏣漢", "楚", "漢"],
    alias: "漢",
    gameName: "チャンギ",
    unit: "王",
    attr: ["king", "inPalace", "bikjang", "usePass", "swapHorseElephant"],
    range: {
      default: "き",
      palaceSlash: "ぞ"
    }
  },
  貝: {
    name: "ビア",
    display: ["⛂貝", "◎貝"],
    gameName: "マークルック",
    unit: "兵",
    forcePromoLine: 1,
    range: {
      default: "歩",
      attack: "兵"
    },
    promo: "貴"
  },
  瑪: {
    name: "マー",
    display: ["🐴瑪", "🦄瑪", "🦓瑪"],
    gameName: "マークルック",
    unit: "馬",
    range: {
      default: "騎"
    }
  },
  根: {
    name: "コーン",
    display: ["Δ根", "🧄根", "⏏根"],
    gameName: "マークルック",
    unit: "象",
    range: {
      default: "銀"
    }
  },
  船: {
    name: "ルアー",
    display: ["⯊船"],
    gameName: "マークルック",
    unit: "車",
    range: {
      default: "車"
    }
  },
  種: {
    name: "メット",
    display: ["▴種"],
    gameName: "マークルック",
    unit: "臣",
    range: {
      default: "ぞ",
      start: "弐"
    }
  },
  君: {
    name: "クン",
    gameName: "マークルック",
    display: ["▲君", "△君", "▲公", "△公"],
    alias: "公",
    unit: "王",
    attr: ["king", "countingRules"],
    range: {
      default: "ぞ"
    }
  },
  火: {
    name: "パダーティ",
    display: ["🗡人", "🗡火"],
    gameName: "チャトランガ",
    unit: "兵",
    forcePromoLine: 1,
    range: {
      default: "歩",
      attack: "兵"
    },
    promo: "杵"
  },
  天: {
    name: "パダーティ",
    display: ["🗡人", "🗡天"],
    gameName: "チャトランガ",
    unit: "兵",
    forcePromoLine: 1,
    range: {
      default: "歩",
      attack: "兵"
    },
    promo: "橡"
  },
  木: {
    name: "パダーティ",
    display: ["🗡人", "🗡木"],
    gameName: "チャトランガ",
    unit: "兵",
    forcePromoLine: 1,
    range: {
      default: "歩",
      attack: "兵"
    },
    promo: "戰"
  },
  大: {
    name: "パダーティ",
    display: ["🗡人", "🗡大"],
    gameName: "チャトランガ",
    unit: "兵",
    forcePromoLine: 1,
    range: {
      default: "歩",
      attack: "兵"
    },
    promo: "巨"
  },
  央: {
    name: "パダーティ",
    display: ["🗡人", "🗡人", "🗡央"],
    alias: "人",
    gameName: "チャトランガ",
    unit: "兵",
    forcePromoLine: 1,
    range: {
      default: "歩",
      attack: "兵"
    },
    promo: "往"
  },
  午: {
    name: "アシュワ",
    display: ["🐎午"],
    gameName: "チャトランガ",
    unit: "馬",
    range: {
      default: "騎"
    }
  },
  像: {
    name: "ガジャ",
    display: ["🐘像"],
    gameName: "チャトランガ",
    unit: "象",
    range: {
      default: "像"
    }
  },
  戦: {
    name: "ラタ",
    display: ["🛞戦"],
    gameName: "チャトランガ",
    unit: "車",
    range: {
      default: "車"
    }
  },
  臣: {
    name: "マントリ",
    display: ["⚔臣"],
    gameName: "チャトランガ",
    unit: "臣",
    range: {
      default: "ぞ"
    }
  },
  主: {
    name: "ラージャ",
    gameName: "チャトランガ",
    display: ["👑主", "🛡主", "🛡柱"],
    alias: "柱",
    unit: "王",
    attr: ["king"],
    range: {
      default: "王"
    }
  },
  ひ: {
    name: "ひよこ",
    display: ["🐤ひ"],
    gameName: "どうぶつしょうぎ",
    unit: "兵",
    attr: ["capture"],
    forcePromoLine: 1,
    range: {
      default: "歩"
    },
    promo: "に"
  },
  ぞ: {
    name: "ぞう",
    display: ["🐘ぞ"],
    gameName: "どうぶつしょうぎ",
    unit: "象",
    attr: ["capture"],
    range: {
      default: "ぞ"
    }
  },
  き: {
    name: "きりん",
    display: ["🦒き"],
    gameName: "どうぶつしょうぎ",
    unit: "車",
    attr: ["capture"],
    range: {
      default: "き"
    }
  },
  ラ: {
    name: "ライオン",
    display: ["🦁ラ"],
    gameName: "どうぶつしょうぎ",
    unit: "王",
    attr: ["king", "capture", "ruleThrough"],
    range: {
      default: "王"
    }
  },
  燕: {
    name: "燕",
    display: ["燕"],
    gameName: "将棋",
    expansion: "禽将棋",
    unit: "兵",
    attr: ["capture"],
    forcePromoLine: 3,
    range: {
      default: "歩"
    },
    promo: "鴈"
  },
  雉: {
    name: "雉",
    display: ["雉"],
    gameName: "将棋",
    expansion: "禽将棋",
    unit: "馬",
    attr: ["capture"],
    range: {
      default: "雉"
    }
  },
  鶴: {
    name: "銀将",
    display: ["鶴"],
    gameName: "将棋",
    expansion: "禽将棋",
    unit: "象",
    attr: ["capture"],
    range: {
      default: "猛"
    }
  },
  鶉: {
    name: "鶉(左)",
    display: ["左鶉"],
    gameName: "将棋",
    expansion: "禽将棋",
    unit: "車",
    attr: ["capture"],
    range: {
      default: "鶉"
    }
  },
  享: {
    name: "鶉(右)",
    display: ["右鶉"],
    gameName: "将棋",
    expansion: "禽将棋",
    unit: "車",
    attr: ["capture"],
    range: {
      default: "享"
    }
  },
  鷹: {
    name: "鷹",
    display: ["鷹"],
    gameName: "将棋",
    expansion: "禽将棋",
    unit: "臣",
    attr: ["capture"],
    forcePromoLine: 3,
    range: {
      default: "醉"
    },
    promo: "雕"
  },
  鵬: {
    name: "鵬",
    display: ["鵬"],
    gameName: "将棋",
    expansion: "禽将棋",
    unit: "王",
    attr: ["king", "capture", "twoSwallows"],
    range: {
      default: "王"
    }
  },
  京: {
    name: "京翔",
    display: ["京翔"],
    gameName: "将棋",
    expansion: "京将棋",
    unit: "馬",
    attr: ["capture"],
    forcePromoLine: 3,
    range: {
      default: "京"
    },
    promo: "幾"
  },
  銅: {
    name: "銅将",
    display: ["銅将"],
    gameName: "将棋",
    expansion: "京将棋",
    unit: "象",
    attr: ["capture"],
    range: {
      default: "銅"
    },
    promo: "う"
  },
  山: {
    name: "山車",
    display: ["山車"],
    gameName: "将棋",
    expansion: "京将棋",
    unit: "車",
    attr: ["capture"],
    range: {
      default: "山"
    },
    promo: "さ"
  },
  翅: {
    name: "金翅",
    display: ["金翅"],
    gameName: "将棋",
    expansion: "京将棋",
    unit: "臣",
    attr: ["capture"],
    range: {
      default: "翅"
    }
  },
  斗: {
    name: "金斗",
    display: ["金斗"],
    gameName: "将棋",
    expansion: "京将棋",
    unit: "臣",
    attr: ["capture"],
    range: {
      default: "斗"
    }
  },
  跳: {
    name: "跳馬",
    display: ["跳馬"],
    gameName: "将棋",
    expansion: "御妃将棋",
    unit: "馬",
    attr: ["capture"],
    range: {
      default: "騎"
    },
    promo: "含"
  },
  返: {
    name: "反車",
    display: ["反車"],
    gameName: "将棋",
    expansion: "御妃将棋",
    unit: "車",
    attr: ["capture"],
    range: {
      default: "反"
    },
    promo: "余"
  },
  女: {
    name: "妃将",
    display: ["妃將"],
    gameName: "将棋",
    expansion: "御妃将棋",
    unit: "臣",
    attr: ["capture"],
    range: {
      default: "后"
    }
  },
  醉: {
    name: "醉象",
    display: ["醉象"],
    expansion: "朝倉象棋",
    gameName: "将棋",
    unit: "臣",
    attr: ["capture", "cantCapture"],
    range: {
      default: "醉"
    },
    promo: "太"
  },
  丘: {
    name: "ポーン",
    display: ["♟兵", "♙兵", "♟丘", "♙丘"],
    gameName: "チェス",
    expansion: "ロスアラモスチェス",
    unit: "兵",
    forcePromoLine: 1,
    range: {
      default: "歩",
      attack: "兵"
    },
    promo: "妃騏城"
  },
  浜: {
    name: "ポーン",
    display: ["♟兵", "♙兵", "♟浜", "♙浜"],
    gameName: "チェス",
    expansion: "カパブランカチェス",
    unit: "兵",
    attr: ["enPassant"],
    forcePromoLine: 1,
    range: {
      default: "歩",
      start: "二",
      attack: "兵"
    },
    promo: "妃駈駁騏城僧"
  },
  駮: {
    name: "カーディナル",
    display: ["🩓駮", "🩐駮"],
    gameName: "チェス",
    expansion: "カパブランカチェス",
    unit: "臣",
    range: {
      default: "駮"
    }
  },
  駆: {
    name: "マーシャル",
    display: ["🩒駆", "🩏駆"],
    gameName: "チェス",
    expansion: "カパブランカチェス",
    unit: "臣",
    range: {
      default: "駆"
    }
  },
  国: {
    name: "キング",
    display: ["♚王", "♔王"],
    alias: "國",
    gameName: "チェス",
    expansion: "カパブランカチェス",
    unit: "王",
    attr: ["king", "castlingKing"],
    range: {
      default: "王",
      castling: "国"
    }
  },
  矢: {
    name: "パダーティ",
    display: ["🗡人", "🗡矢"],
    gameName: "チャトランガ",
    expansion: "チャトラジ",
    unit: "兵",
    forcePromoLine: 1,
    range: {
      default: "歩",
      attack: "兵"
    },
    promo: "舶"
  },
  本: {
    name: "パダーティ",
    display: ["🗡人", "🗡本"],
    gameName: "チャトランガ",
    expansion: "チャトラジ",
    unit: "兵",
    forcePromoLine: 1,
    range: {
      default: "歩",
      attack: "兵"
    },
    promo: "豪"
  },
  舟: {
    name: "ローカ",
    display: ["⛵舟"],
    gameName: "チャトランガ",
    expansion: "チャトラジ",
    unit: "象",
    range: {
      default: "像"
    }
  },
  豕: {
    name: "ハスティー",
    display: ["🐘豕"],
    gameName: "チャトランガ",
    expansion: "チャトラジ",
    unit: "車",
    range: {
      default: "車"
    }
  },
  ね: {
    name: "ねこ",
    display: ["🐱ね"],
    gameName: "どうぶつしょうぎ",
    expansion: "ごろごろどうぶつしょうぎ",
    unit: "象",
    attr: ["capture"],
    range: {
      default: "銀"
    },
    promo: "ネ"
  },
  い: {
    name: "いぬ",
    display: ["🐶い"],
    gameName: "どうぶつしょうぎ",
    expansion: "ごろごろどうぶつしょうぎ",
    unit: "臣",
    attr: ["capture"],
    range: {
      default: "金"
    }
  },
  ら: {
    name: "ライオン",
    display: ["🦁ラ"],
    gameName: "どうぶつしょうぎ",
    expansion: "ごろごろどうぶつしょうぎ",
    unit: "王",
    attr: ["king", "capture"],
    range: {
      default: "王"
    }
  },
  仲: {
    name: "仲人",
    display: ["仲人"],
    gameName: "将棋",
    expansion: "中将棋",
    unit: "兵",
    range: {
      default: "仲"
    },
    promo: "酔"
  },
  同: {
    name: "銅将",
    display: ["銅将"],
    gameName: "将棋",
    expansion: "中将棋",
    unit: "臣",
    range: {
      default: "歩"
    },
    promo: "黄"
  },
  艮: {
    name: "銀将",
    display: ["銀将"],
    gameName: "将棋",
    expansion: "中将棋",
    unit: "象",
    range: {
      default: "銀"
    },
    promo: "堅"
  },
  釡: {
    name: "金将",
    display: ["金將", "金将"],
    gameName: "将棋",
    expansion: "中将棋",
    unit: "臣",
    range: {
      default: "金"
    },
    promo: "升"
  },
  猛: {
    name: "猛豹",
    display: ["猛豹"],
    gameName: "将棋",
    expansion: "中将棋",
    unit: "象",
    range: {
      default: "猛"
    },
    promo: "桷"
  },
  馨: {
    name: "香車",
    display: ["香車"],
    gameName: "将棋",
    expansion: "中将棋",
    unit: "車",
    forcePromoLine: 1,
    range: {
      default: "香"
    },
    promo: "駒"
  },
  反: {
    name: "反車",
    display: ["反車"],
    gameName: "将棋",
    expansion: "中将棋",
    unit: "車",
    range: {
      default: "反"
    },
    promo: "鯨"
  },
  虎: {
    name: "盲虎",
    display: ["盲虎"],
    gameName: "将棋",
    expansion: "中将棋",
    unit: "象",
    range: {
      default: "虎"
    },
    promo: "鹿"
  },
  麒: {
    name: "麒麟",
    display: ["麒麟"],
    gameName: "将棋",
    expansion: "中将棋",
    unit: "馬",
    range: {
      default: "麒"
    },
    promo: "鰤"
  },
  鳳: {
    name: "鳳凰",
    display: ["鳳凰"],
    gameName: "将棋",
    expansion: "中将棋",
    unit: "象",
    range: {
      default: "鳳"
    },
    promo: "卉"
  },
  横: {
    name: "横行",
    display: ["横行"],
    gameName: "将棋",
    expansion: "中将棋",
    unit: "車",
    range: {
      default: "横"
    },
    promo: "猪"
  },
  竪: {
    name: "竪行",
    display: ["竪行"],
    gameName: "将棋",
    expansion: "中将棋",
    unit: "車",
    range: {
      default: "竪"
    },
    promo: "牛"
  },
  碼: {
    name: "竜馬",
    display: ["竜馬"],
    gameName: "将棋",
    expansion: "中将棋",
    unit: "臣",
    range: {
      default: "馬"
    },
    promo: "鷂"
  },
  竜: {
    name: "竜王",
    display: ["竜王"],
    gameName: "将棋",
    expansion: "中将棋",
    unit: "臣",
    range: {
      default: "竜"
    },
    promo: "鷲"
  },
  奔: {
    name: "奔走",
    display: ["奔走"],
    gameName: "将棋",
    expansion: "中将棋",
    unit: "臣",
    range: {
      default: "后"
    }
  },
  獅: {
    name: "獅子",
    display: ["獅子"],
    gameName: "将棋",
    expansion: "中将棋",
    unit: "臣",
    range: {
      default: "獅"
    }
  },
  石: {
    name: "石将",
    display: ["石将"],
    gameName: "将棋",
    expansion: "大将棋",
    unit: "兵",
    forcePromoLine: 1,
    range: {
      default: "兵"
    },
    promo: "鉐"
  },
  鉄: {
    name: "鉄将",
    display: ["鐵将", "鐵将", "鉄将"],
    alias: "鐵",
    gameName: "将棋",
    expansion: "大将棋",
    unit: "兵",
    forcePromoLine: 1,
    range: {
      default: "鉄"
    },
    promo: "鋼"
  },
  猫: {
    name: "猫刄",
    display: ["猫刄"],
    gameName: "将棋",
    expansion: "大将棋",
    unit: "象",
    range: {
      default: "ぞ"
    },
    promo: "錨"
  },
  瀧: {
    name: "飛龍",
    display: ["飛龍"],
    gameName: "将棋",
    expansion: "大将棋",
    unit: "象",
    range: {
      default: "瀧"
    },
    promo: "錆"
  },
  嗔: {
    name: "嗔猪",
    display: ["嗔猪"],
    gameName: "将棋",
    expansion: "大将棋",
    unit: "車",
    range: {
      default: "き"
    },
    promo: "鎭"
  },
  丑: {
    name: "猛牛",
    display: ["猛牛"],
    gameName: "将棋",
    expansion: "大将棋",
    unit: "車",
    range: {
      default: "丑"
    },
    promo: "鈕"
  },
  狼: {
    name: "悪狼",
    display: ["悪狼"],
    gameName: "将棋",
    expansion: "大将棋",
    unit: "臣",
    range: {
      default: "狼"
    },
    promo: "狂"
  },
  梹: {
    name: "ポーン",
    display: ["♟兵", "♙兵", "♟梹", "♙梹"],
    gameName: "チェス",
    expansion: "GrantAcedrex",
    unit: "兵",
    forcePromoLine: 1,
    range: {
      default: "歩",
      attack: "兵"
    },
    promo: "篩遲麋齶塞鵺"
  },
  師: {
    name: "ライオン",
    display: ["🦁師"],
    gameName: "チェス",
    expansion: "GrantAcedrex",
    unit: "馬",
    range: {
      default: "師"
    }
  },
  犀: {
    name: "ユニコーン",
    display: ["🦏犀"],
    gameName: "チェス",
    expansion: "GrantAcedrex",
    unit: "馬",
    range: {
      default: "犀"
    }
  },
  麟: {
    name: "ジラフ",
    display: ["🦒麟"],
    gameName: "チェス",
    expansion: "GrantAcedrex",
    unit: "象",
    range: {
      default: "麟"
    }
  },
  鰐: {
    name: "コカトリス",
    display: ["🐊鰐"],
    gameName: "チェス",
    expansion: "GrantAcedrex",
    unit: "象",
    range: {
      default: "聖"
    }
  },
  砦: {
    name: "ルーク",
    display: ["♜砦"],
    gameName: "チェス",
    expansion: "GrantAcedrex",
    unit: "車",
    range: {
      default: "車"
    }
  },
  鴻: {
    name: "アンカ",
    display: ["🦅鴻"],
    gameName: "チェス",
    expansion: "GrantAcedrex",
    unit: "臣",
    range: {
      default: "鴻"
    }
  },
  呈: {
    name: "キング",
    display: ["♚王", "♔王"],
    alias: "逞",
    gameName: "チェス",
    expansion: "GrantAcedrex",
    unit: "王",
    attr: ["king"],
    range: {
      default: "王",
      start: "呈"
    }
  },
  鋲: {
    name: "ソルダート",
    display: ["♟兵", "♙兵", "♟鋲", "♙鋲"],
    gameName: "チェス",
    expansion: "クーリエチェス",
    unit: "兵",
    forcePromoLine: 1,
    range: {
      default: "歩",
      attack: "兵"
    },
    promo: "童"
  },
  射: {
    name: "シュッツェ",
    display: ["🏹射"],
    gameName: "チェス",
    expansion: "クーリエチェス",
    unit: "象",
    range: {
      default: "像"
    }
  },
  使: {
    name: "クーリエ",
    display: ["⨺使"],
    gameName: "チェス",
    expansion: "クーリエチェス",
    unit: "象",
    range: {
      default: "聖"
    }
  },
  佯: {
    name: "シュライヒ",
    display: ["🎭佯"],
    gameName: "チェス",
    expansion: "クーリエチェス",
    unit: "車",
    range: {
      default: "き"
    }
  },
  賢: {
    name: "マン",
    display: ["🎓賢"],
    gameName: "チェス",
    expansion: "クーリエチェス",
    unit: "臣",
    range: {
      default: "王"
    }
  },
  妾: {
    name: "ケーニギン",
    display: ["♛妾"],
    gameName: "チェス",
    expansion: "クーリエチェス",
    unit: "臣",
    range: {
      default: "ぞ"
    }
  },
  閏: {
    name: "ケーニヒ",
    display: ["♚王", "♔王"],
    alias: "潤",
    gameName: "チェス",
    expansion: "クーリエチェス",
    unit: "王",
    attr: ["king"],
    range: {
      default: "王"
    }
  },
  と: {
    name: "と金",
    display: ["と", "个"],
    alias: "个",
    attr: ["capture"],
    range: {
      default: "金"
    }
  },
  杏: {
    name: "成香",
    display: ["仝", "仝", "杏"],
    alias: "仝",
    attr: ["capture"],
    range: {
      default: "金"
    }
  },
  圭: {
    name: "成桂",
    display: ["今", "今", "圭"],
    alias: "今",
    attr: ["capture"],
    range: {
      default: "金"
    }
  },
  全: {
    name: "成銀",
    display: ["全"],
    attr: ["capture"],
    range: {
      default: "金"
    }
  },
  馬: {
    name: "龍馬",
    display: ["龍馬", "竜馬"],
    attr: ["capture"],
    range: {
      default: "馬"
    }
  },
  龍: {
    name: "龍王",
    display: ["龍王", "龍王", "竜王"],
    attr: ["capture"],
    range: {
      default: "竜"
    }
  },
  妃: {
    name: "Pクイーン",
    display: ["♕妃", "♛妃"],
    range: {
      default: "后"
    }
  },
  騏: {
    name: "Pナイト",
    display: ["♘騏", "♞騏"],
    range: {
      default: "騎"
    }
  },
  城: {
    name: "Pルーク",
    display: ["♖城", "♜城"],
    range: {
      default: "車"
    }
  },
  僧: {
    name: "Pビショップ",
    display: ["♗僧", "♝僧"],
    range: {
      default: "聖"
    }
  },
  率: {
    name: "成卒",
    display: ["⊖率", "⊖卒", "⊖兵", "率", "卒", "兵"],
    range: {
      default: "卒"
    }
  },
  貴: {
    name: "ビアガーイ",
    display: ["⛀貴", "⛀珠", "◉貴", "◉珠"],
    alias: "珠",
    range: {
      default: "ぞ"
    }
  },
  杵: {
    name: "Pアシュワ",
    display: ["🐎杵"],
    range: {
      default: "騎"
    }
  },
  橡: {
    name: "Pガジャ",
    display: ["🐘橡"],
    range: {
      default: "像"
    }
  },
  戰: {
    name: "Pラタ",
    display: ["🛞戰"],
    range: {
      default: "車"
    }
  },
  巨: {
    name: "Pマントリ",
    display: ["⚔巨"],
    range: {
      default: "ぞ"
    }
  },
  往: {
    name: "Pラージャ",
    display: ["🔱往"],
    range: {
      default: "王"
    }
  },
  に: {
    name: "にわとり",
    display: ["🐔に"],
    attr: ["capture"],
    range: {
      default: "金"
    }
  },
  鴈: {
    name: "鴈",
    display: ["鴈"],
    attr: ["capture"],
    range: {
      default: "鴈"
    }
  },
  左: {
    name: "左(鶉)",
    display: ["左"],
    gameName: "将棋",
    unit: "車",
    attr: ["promoted"],
    range: {}
  },
  右: {
    name: "右(鶉)",
    display: ["右"],
    gameName: "将棋",
    unit: "車",
    attr: ["promoted"],
    range: {}
  },
  雕: {
    name: "鵰",
    display: ["鵰", "鵰"],
    alias: "鵰",
    attr: ["capture"],
    range: {
      default: "雕"
    }
  },
  幾: {
    name: "成京",
    display: ["き"],
    attr: ["capture"],
    range: {
      default: "金"
    }
  },
  う: {
    name: "成銅",
    display: ["う"],
    attr: ["capture"],
    range: {
      default: "金"
    }
  },
  さ: {
    name: "成山",
    display: ["さ"],
    attr: ["capture"],
    range: {
      default: "金"
    }
  },
  太: {
    name: "太子",
    display: ["太子"],
    attr: ["king", "capture", "cantCapture"],
    range: {
      default: "王"
    }
  },
  余: {
    name: "成反",
    display: ["余"],
    attr: ["capture"],
    range: {
      default: "金"
    }
  },
  含: {
    name: "成跳",
    display: ["含"],
    attr: ["capture"],
    range: {
      default: "金"
    }
  },
  駁: {
    name: "Pカーディナル",
    display: ["🩐駁", "🩓駁"],
    range: {
      default: "駮"
    }
  },
  駈: {
    name: "Pマーシャル",
    display: ["🩏駈", "🩒駈"],
    range: {
      default: "駆"
    }
  },
  舶: {
    name: "Pローカ",
    display: ["⛵舶"],
    range: {
      default: "像"
    }
  },
  豪: {
    name: "Pハスティー",
    display: ["🐘豪"],
    range: {
      default: "車"
    }
  },
  ネ: {
    name: "パワーアップねこ",
    display: ["😺ネ"],
    attr: ["capture"],
    range: {
      default: "金"
    }
  },
  升: {
    name: "金飛車",
    display: ["金飛"],
    range: {
      default: "車"
    }
  },
  堅: {
    name: "銀竪行",
    display: ["銀竪"],
    range: {
      default: "竪"
    }
  },
  黄: {
    name: "銅横行",
    display: ["銅横"],
    range: {
      default: "横"
    }
  },
  桷: {
    name: "小角",
    display: ["小角"],
    range: {
      default: "聖"
    }
  },
  駒: {
    name: "白駒",
    display: ["白駒"],
    range: {
      default: "駒"
    }
  },
  鯨: {
    name: "鯨鯢",
    display: ["鯨鯢"],
    range: {
      default: "鯨"
    }
  },
  鹿: {
    name: "飛鹿",
    display: ["飛鹿"],
    range: {
      default: "鹿"
    }
  },
  鰤: {
    name: "麒獅子",
    display: ["麒獅"],
    range: {
      default: "獅"
    }
  },
  卉: {
    name: "鳳奔走",
    display: ["鳳奔"],
    range: {
      default: "后"
    }
  },
  酔: {
    name: "酔象",
    display: ["酔象"],
    range: {
      default: "醉"
    }
  },
  猪: {
    name: "奔猪",
    display: ["奔猪"],
    range: {
      default: "猪"
    }
  },
  牛: {
    name: "飛牛",
    display: ["飛牛"],
    range: {
      default: "牛"
    }
  },
  鷂: {
    name: "角鷹",
    display: ["角鷹"],
    range: {
      default: "鷂"
    }
  },
  鷲: {
    name: "飛鷲",
    display: ["飛鷲"],
    range: {
      default: "鷲"
    }
  },
  鉐: {
    name: "石金将",
    display: ["石金"],
    range: {
      default: "金"
    }
  },
  鋼: {
    name: "金将",
    display: ["鉄金"],
    range: {
      default: "金"
    }
  },
  錨: {
    name: "猫金将",
    display: ["猫金"],
    range: {
      default: "金"
    }
  },
  錆: {
    name: "龍金将",
    display: ["龍金"],
    range: {
      default: "金"
    }
  },
  鎭: {
    name: "嗔金将",
    display: ["嗔金"],
    range: {
      default: "金"
    }
  },
  鈕: {
    name: "牛金将",
    display: ["牛金"],
    range: {
      default: "金"
    }
  },
  狂: {
    name: "狼金将",
    display: ["狼金"],
    range: {
      default: "金"
    }
  },
  篩: {
    name: "Pライオン",
    display: ["🦁篩"],
    range: {
      default: "師"
    }
  },
  遲: {
    name: "Pユニコーン",
    display: ["🦏遲"],
    range: {
      default: "犀"
    }
  },
  麋: {
    name: "Pジラフ",
    display: ["🦒麋"],
    range: {
      default: "麟"
    }
  },
  齶: {
    name: "Pコカトリス",
    display: ["🐊齶"],
    range: {
      default: "聖"
    }
  },
  塞: {
    name: "Pルーク",
    display: ["♖塞"],
    range: {
      default: "車"
    }
  },
  鵺: {
    name: "Pアンカ",
    display: ["🦅鴻"],
    range: {
      default: "鴻"
    }
  },
  童: {
    name: "Pケーニギン",
    display: ["♕童"],
    range: {
      default: "ぞ"
    }
  }
}, V = {
  "〇": [
    ".......",
    ".......",
    ".......",
    "...O...",
    ".......",
    ".......",
    "......."
  ],
  歩: [
    ".......",
    ".......",
    "...A...",
    "...O...",
    ".......",
    ".......",
    "......."
  ],
  兵: [
    ".......",
    ".......",
    "..A.A..",
    "...O...",
    ".......",
    ".......",
    "......."
  ],
  二: [
    ".......",
    "...A...",
    "...a...",
    "...O...",
    ".......",
    ".......",
    "......."
  ],
  通: [
    ".......",
    ".......",
    ".......",
    "..AOA..",
    ".......",
    ".......",
    "......."
  ],
  弐: [
    ".......",
    "...A...",
    ".......",
    "...O...",
    ".......",
    ".......",
    "......."
  ],
  卒: [
    ".......",
    ".......",
    "...A...",
    "..AOA..",
    ".......",
    ".......",
    "......."
  ],
  鴈: [
    ".......",
    ".A...A.",
    ".......",
    "...O...",
    ".......",
    "...A...",
    "......."
  ],
  仲: [
    ".......",
    ".......",
    "...A...",
    "...O...",
    "...A...",
    ".......",
    "......."
  ],
  鉄: [
    ".......",
    ".......",
    "..AAA..",
    "...O...",
    ".......",
    ".......",
    "......."
  ],
  桂: [
    ".......",
    "..A.A..",
    ".......",
    "...O...",
    ".......",
    ".......",
    "......."
  ],
  京: [
    "..A.A..",
    ".......",
    ".......",
    "...O...",
    ".......",
    ".......",
    "......."
  ],
  騎: [
    ".......",
    "..A.A..",
    ".A...A.",
    "...O...",
    ".A...A.",
    "..A.A..",
    "......."
  ],
  馮: [
    ".......",
    "..A.A..",
    ".D.a.B.",
    "..dOb..",
    ".D.c.B.",
    "..C.C..",
    "......."
  ],
  雉: [
    ".......",
    "...A...",
    ".......",
    "...O...",
    "..A.A..",
    ".......",
    "......."
  ],
  師: [
    ".......",
    "..AAA..",
    ".A...A.",
    ".A.O.A.",
    ".A...A.",
    "..AAA..",
    "......."
  ],
  犀: [
    ".*...*.",
    "*.o.o.*",
    ".o...o.",
    "...O...",
    ".o...o.",
    "*.o.o.*",
    ".*...*."
  ],
  ぞ: [
    ".......",
    ".......",
    "..A.A..",
    "...O...",
    "..A.A..",
    ".......",
    "......."
  ],
  銀: [
    ".......",
    ".......",
    "..AAA..",
    "...O...",
    "..A.A..",
    ".......",
    "......."
  ],
  像: [
    ".......",
    ".A...A.",
    ".......",
    "...O...",
    ".......",
    ".A...A.",
    "......."
  ],
  相: [
    ".......",
    ".A...B.",
    "..a.b..",
    "...O...",
    "..d.c..",
    ".D...C.",
    "......."
  ],
  象: [
    ".E...F.",
    "L.e.f.G",
    ".l.a.g.",
    "..dOb..",
    ".k.c.h.",
    "K.j.i.H",
    ".J...I."
  ],
  麒: [
    ".......",
    "...A...",
    "..A.A..",
    ".A.O.A.",
    "..A.A..",
    "...A...",
    "......."
  ],
  鳳: [
    ".......",
    ".A...A.",
    "...A...",
    "..AOA..",
    "...A...",
    ".A...A.",
    "......."
  ],
  聖: [
    ".......",
    ".......",
    "..*.*..",
    "...O...",
    "..*.*..",
    ".......",
    "......."
  ],
  麟: [
    ".A...A.",
    "A.....A",
    ".......",
    "...O...",
    ".......",
    "A.....A",
    ".A...A."
  ],
  瀧: [
    ".......",
    ".......",
    "..2.2..",
    "...O...",
    "..2.2...",
    ".......",
    "......."
  ],
  き: [
    ".......",
    ".......",
    "...A...",
    "..AOA..",
    "...A...",
    ".......",
    "......."
  ],
  香: [
    ".......",
    ".......",
    "...*...",
    "...O...",
    ".......",
    ".......",
    "......."
  ],
  車: [
    ".......",
    ".......",
    "...*...",
    "..*O*..",
    "...*...",
    ".......",
    "......."
  ],
  砲: [
    ".......",
    ".......",
    "...+...",
    "..+O+..",
    "...+...",
    "......",
    "......."
  ],
  弓: [
    ".......",
    ".......",
    "..+.+..",
    "...O...",
    "..+.+..",
    "......",
    "......."
  ],
  反: [
    ".......",
    ".......",
    "...*...",
    "...O...",
    "...*...",
    ".......",
    "......."
  ],
  鶉: [
    ".......",
    ".......",
    "...*...",
    "...O...",
    "..A.*..",
    ".......",
    "......."
  ],
  享: [
    ".......",
    ".......",
    "...*...",
    "...O...",
    "..*.A..",
    ".......",
    "......."
  ],
  横: [
    ".......",
    ".......",
    "...A...",
    "..*O*..",
    "...A...",
    ".......",
    "......."
  ],
  竪: [
    ".......",
    ".......",
    "...*...",
    "..AOA..",
    "...*...",
    ".......",
    "......."
  ],
  丑: [
    ".......",
    ".......",
    "...2...",
    "..2O2..",
    "...2...",
    ".......",
    "......."
  ],
  山: [
    ".......",
    "...A...",
    "...*...",
    "...O...",
    ".......",
    ".......",
    "......."
  ],
  鴻: [
    ".......",
    "..*.*..",
    ".*o.o*.",
    "...O...",
    ".*o.o*.",
    "..*.*..",
    "......."
  ],
  金: [
    ".......",
    ".......",
    "..AAA..",
    "..AOA..",
    "...A...",
    ".......",
    "......."
  ],
  銅: [
    ".......",
    ".......",
    "..AAA..",
    "...O...",
    "...A...",
    ".......",
    "......."
  ],
  馬: [
    ".......",
    ".......",
    "..*A*..",
    "..AOA..",
    "..*A*..",
    ".......",
    "......."
  ],
  竜: [
    ".......",
    ".......",
    "..A*A..",
    "..*O*..",
    "..A*A..",
    ".......",
    "......."
  ],
  醉: [
    ".......",
    ".......",
    "..AAA..",
    "..AOA..",
    "..A.A..",
    ".......",
    "......."
  ],
  后: [
    ".......",
    ".......",
    "..***..",
    "..*O*..",
    "..***..",
    ".......",
    "......."
  ],
  駆: [
    ".......",
    "..A.A..",
    ".A.*.A.",
    "..*O*..",
    ".A.*.A.",
    "..A.A..",
    "......."
  ],
  駮: [
    ".......",
    "..A.A..",
    ".A*.*A.",
    "...O...",
    ".A*.*A.",
    "..A.A..",
    "......."
  ],
  雕: [
    ".......",
    ".......",
    "..*A*..",
    "..AOA..",
    "..2*2..",
    ".......",
    "......."
  ],
  猛: [
    ".......",
    ".......",
    "..AAA..",
    "...O...",
    "..AAA..",
    ".......",
    "......."
  ],
  虎: [
    ".......",
    ".......",
    "..A.A..",
    "..AOA..",
    "..AAA..",
    ".......",
    "......."
  ],
  獅: [
    ".......",
    ".AAAAA.",
    ".AAAAA.",
    ".AAOAA.",
    ".AAAAA.",
    ".AAAAA.",
    "......."
  ],
  駒: [
    ".......",
    ".......",
    "..***..",
    "...O...",
    "...*...",
    ".......",
    "......."
  ],
  鯨: [
    ".......",
    ".......",
    "...*...",
    "...O...",
    "..***..",
    ".......",
    "......."
  ],
  鹿: [
    ".......",
    ".......",
    "..A*A..",
    "..AOA..",
    "..A*A..",
    ".......",
    "......."
  ],
  猪: [
    ".......",
    ".......",
    "..*.*..",
    "..*O*..",
    "..*.*..",
    ".......",
    "......."
  ],
  牛: [
    ".......",
    ".......",
    "..***..",
    "...O...",
    "..***..",
    ".......",
    "......."
  ],
  鷂: [
    ".......",
    "...A...",
    "..*A*..",
    "..*O*..",
    "..***..",
    ".......",
    "......."
  ],
  鷲: [
    ".......",
    ".A...A.",
    "..A*A..",
    "..*O*..",
    "..***..",
    ".......",
    "......."
  ],
  狼: [
    ".......",
    ".......",
    "..AAA..",
    "..AOA..",
    ".......",
    ".......",
    "......."
  ],
  翅: [
    ".......",
    ".......",
    "..AAA..",
    "..AOA..",
    "..AA...",
    ".......",
    "......."
  ],
  斗: [
    ".......",
    ".......",
    "..AAA..",
    "..AOA..",
    "...AA..",
    ".......",
    "......."
  ],
  王: [
    ".......",
    ".......",
    "..AAA..",
    "..AOA..",
    "..AAA..",
    ".......",
    "......."
  ],
  城: [
    ".......",
    ".......",
    ".......",
    ".BbOaA.",
    ".......",
    ".......",
    "......."
  ],
  国: [
    ".......",
    ".......",
    ".......",
    "BbbOaaA",
    ".......",
    ".......",
    "......."
  ],
  塔: [
    ".......",
    ".......",
    ".......",
    "..|O|..",
    ".......",
    ".......",
    "......."
  ],
  呈: [
    ".......",
    ".A.A.A.",
    ".......",
    ".A.O.A.",
    ".......",
    ".A.A.A.",
    "......."
  ]
}, Z = {
  女: 54,
  獅: 44,
  后: 36,
  奔: 36,
  駆: 36,
  駮: 34,
  麟: 32,
  鴻: 32,
  飛: 28,
  竜: 28,
  碼: 24,
  塔: 22,
  車: 22,
  俥: 20,
  船: 20,
  戦: 20,
  豕: 20,
  角: 20,
  跳: 20,
  砦: 20,
  醉: 18,
  鷹: 18,
  鶉: 18,
  享: 18,
  翅: 16,
  斗: 16,
  返: 16,
  聖: 14,
  騎: 14,
  瑪: 14,
  午: 14,
  金: 14,
  横: 14,
  竪: 14,
  麒: 14,
  鳳: 14,
  い: 14,
  鶴: 14,
  鰐: 14,
  銀: 12,
  炮: 12,
  ね: 12,
  反: 12,
  虎: 12,
  包: 10,
  根: 10,
  像: 10,
  舟: 10,
  釡: 10,
  雉: 10,
  桂: 8,
  京: 8,
  銅: 8,
  山: 8,
  馮: 8,
  馭: 8,
  馨: 8,
  猛: 8,
  香: 7,
  種: 7,
  臣: 7,
  き: 7,
  ぞ: 7,
  同: 7,
  象: 5,
  士: 5,
  相: 4,
  仕: 4,
  卆: 4,
  仲: 4,
  歩: 3,
  兵: 3,
  浜: 3,
  ひ: 2,
  燕: 2,
  丘: 2,
  梹: 2,
  貝: 2,
  卒: 2,
  火: 2,
  天: 2,
  矢: 2,
  木: 2,
  本: 2,
  大: 2,
  央: 2,
  ラ: 0,
  鵬: -4,
  玉: -8,
  ら: -8,
  王: -12,
  国: -12,
  呈: -12,
  君: -16,
  主: -18,
  楚: -24,
  帥: -28
}, te = "./json/ShogiCross/";
function v(p) {
  const e = new XMLHttpRequest();
  return e.open("GET", `${te}${p}.json`, !1), e.send(), e.status === 200 ? JSON.parse(e.responseText) : {};
}
const O = {
  canvasFont: v("canvasFont"),
  gameSoft: v("gameSoft"),
  games: v("games"),
  boards: v("boards"),
  panels: v("panels"),
  pieces: v("pieces"),
  pieceRange: v("pieceRange"),
  pieceCost: v("pieceCost")
};
Object.assign(M, O.canvasFont);
Object.assign(ae, O.gameSoft);
Object.assign(z, O.games);
Object.assign(q, O.boards);
Object.assign(D, O.panels);
Object.assign(T, O.pieces);
Object.assign(V, O.pieceRange);
Object.assign(Z, O.pieceCost);
const se = () => [
  .../* @__PURE__ */ new Set([
    ...Object.values(D).map(({ displayText: p }) => p).join("") + Object.values(T).map(({ display: p }) => p ? p.join("") : "").join("")
  ])
].sort().join("");
Object.assign(M, {
  /** 読み込み済みであるか? */
  imported: !1,
  /** 読み込むフォントの一覧(","区切り)
   * @type {string}
   */
  names: "",
  /** フォントの読み込み
   * @returns {Promise<void>}
   */
  async importAsync() {
    if (this.imported)
      return;
    const p = "https://fonts.googleapis.com/css2?family=", e = se(), a = (/* @__PURE__ */ new Date()).getTime().toString();
    return this.names = M.fonts.map((t) => `"${t[0]}${a}"`).join(",") + ",serif", Promise.all(
      M.fonts.map(async ([t, s]) => {
        const i = t.replace(/ /g, "+"), r = `${p}${i}:wght@${s}&text=${e}`, o = await fetch(r);
        if (!o.ok)
          return;
        const S = (await o.text()).match(/url\(.+?\)/g);
        if (!S)
          throw new Error("Not found font.");
        for (const n of S) {
          const d = new FontFace(`${t}${a}`, n);
          document.fonts.add(d), await d.load().catch(() => {
          });
        }
      })
    ).then((t) => this.imported = !0);
  }
});
function ie(p) {
  return new Promise((e) => {
    const a = new Image();
    a.src = p, a.onload = () => e(a);
  });
}
const re = [...new Set(
  Object.values(D).flatMap(({ imgSrc: p }) => p ?? []).concat(Object.values(T).flatMap(({ imgSrc: p }) => p ?? []))
)], j = {
  /** 読み込み済みであるか? */
  imported: !1,
  /** 読み込んだ画像データ
   * @type {Object<string, Image>}
   */
  images: {},
  /** 画像の読み込み
   * @returns {Promise<void>}
   */
  async importAsync() {
    if (!this.imported)
      return Promise.all(
        re.map(async (p) => {
          this.images[p] = await ie(p);
        })
      ).then((p) => this.imported = !0);
  }
}, ne = (p) => "image/" + p.replace("jpg", "jpeg");
async function oe(p, e = "image", a = "png", t = "base64") {
  const s = ne(a), i = document.createElement("a");
  let r;
  t === "blob" ? r = URL.createObjectURL(
    await new Promise((o) => p.toBlob(o), s)
  ) : r = p.toDataURL(s), i.href = r, i.download = `${e}.${a}`, i.click(), t === "blob" && URL.revokeObjectURL(i.href);
}
class le {
  #e;
  #a;
  /**
   * @param {any} ctx - Canvas描画コンテキスト
   * @param {string} char - マス目を示す文字
   * @param {number} center - 描写するX座標(中心原点)
   * @param {number} middle - 描写するY座標(中心原点)
   * @param {number} width - マス目幅
   * @param {number} height - マス目高さ
   * @param {number} borderWidth - 枠線の太さ
   * @param {number} pX - ボード上のマス目の列
   * @param {number} pY - ボード上のマス目の行
   */
  constructor(e, a, t, s, i, r, o, l, S) {
    Object.assign(this, D[a]), this.ctx = e, this.center = t, this.middle = s, this.width = i, this.height = r, this.left = t - i / 2, this.top = s - r / 2, this.right = t + i / 2, this.bottom = s + r / 2, this.borderWidth = o, this.pX = l, this.pY = S, this.selectColor ??= "#FF000066", this.targetColor ??= "#00FF0066", this.attr ??= [], this.piece = null, this.isSelected = !1, this.clearTarget();
  }
  /** マス目の選択状態
   * @param {boolean} value
   */
  set isSelected(e) {
    this.#e = this.hasAttr("keepOut") ? !1 : e;
  }
  get isSelected() {
    return this.#e;
  }
  /** マス目の移動可能判定
   * @param {boolean} value
   */
  get isTarget() {
    return 0 < this.#a.length;
  }
  /** マス目の移動先情報をクリア */
  clearTarget() {
    this.#a = [];
  }
  /** マス目の移動先情報を追加
   * @param {string} rangeName - 移動先情報
   */
  addTarget(e) {
    this.#a.push(e);
  }
  /** マス目が移動先情報を持っているか判定
   * @param {string} rangeName - 移動先情報
   * @returns {boolean}
   */
  hasTarget(e) {
    return this.#a.includes(e);
  }
  /** 属性の存在を確認
   * @param {string} attrName - 属性名
   * @returns {boolean}
   */
  hasAttr(e) {
    return this.attr.includes(e);
  }
  /** 座標がマス目に含まれるか判定
   * @param {number} x - X座標
   * @param {number} y - Y座標
   */
  checkRangeMouse(e, a) {
    return this.left <= e && e < this.right && this.top <= a && a < this.bottom;
  }
  /** マス目/マスク/駒を描写 */
  draw() {
    const { selectColor: e, targetColor: a } = this;
    this.imgSrc && j.imported ? this.drawImage() : this.drawPanel(), this.isSelected && this.drawMask(e), this.isTarget && this.drawMask(a), this.piece?.draw();
  }
  /** マス目画像を描写 */
  drawImage() {
    const { ctx: e } = this, a = this.imgSrc, t = j.images[a];
    t && (e.save(), e.translate(this.left, this.top), e.drawImage(t, 0, 0, this.width, this.height), e.restore());
  }
  /** マス目を描写 */
  drawPanel() {
    const { ctx: e, left: a, top: t, center: s, middle: i, width: r, height: o, displayText: l, textRotate: S } = this;
    if (e.fillStyle = this.backgroundColor, e.strokeStyle = this.borderColor, e.lineWidth = this.borderWidth, e.save(), e.translate(a, t), e.fillRect(0, 0, r, o), this.intersect ? (e.lineWidth = this.borderWidth, e.beginPath(), e.moveTo(r / 2, 0), e.lineTo(r / 2, o), e.moveTo(0, o / 2), e.lineTo(r, o / 2), e.closePath(), e.stroke()) : e.strokeRect(0, 0, r, o), e.lineWidth = this.borderWidth / 2, e.beginPath(), this.borderSlashLeft && (e.moveTo(0, 0), e.lineTo(r, o)), this.borderSlashRight && (e.moveTo(r, 0), e.lineTo(0, o)), e.closePath(), e.stroke(), e.restore(), l) {
      e.save(), e.translate(s, i), e.fillStyle = this.borderColor;
      const n = S ? S * Math.PI / 180 : 0;
      e.rotate(n);
      const d = Math.min(this.width, this.height) * 0.6;
      e.font = `${d}px ${M.names}`;
      const m = e.measureText(l).width, u = d / 2 * 0.8;
      e.fillText(l, -m / 2, u), e.restore();
    }
  }
  /** マス目にマスクを描写
   * @param {string} color - カラーエフェクトの色
   */
  drawMask(e) {
    const { ctx: a } = this;
    a.fillStyle = e, a.fillRect(this.left, this.top, this.width, this.height);
  }
  /** マス目をテキスト形式で取得
   * @param {boolean} isCompact - コンパクト表示
   */
  toString(e = !1) {
    return e ? `｜${this.text.slice(-1).replace(/　/g, "・")}` : this.text;
  }
}
class y {
  /** 描写サイズ
   * @type {number}
   */
  static size = 45;
  /** 格の違いによって駒の大きさを変更するか
   * @type {boolean}
   */
  static useRankSize = !0;
  /** 影の描写有無
   * @type {boolean}
   */
  static isDrawShadow = !0;
  /** テキスト出力時のプレイヤー表示
   * @type {Object<string, string>}
   */
  static degChars = {
    0: "▲",
    90: "≫",
    180: "▽",
    270: "＜"
  };
  /** プレイヤー表示から角度を取得 */
  static charDegs = {};
  /** サイズ変更設定値
   * @type {Object<string, number>}
   */
  static rankRatio = {
    KR: 1,
    SR: 0.965,
    R: 0.935,
    UC: 0.9,
    C: 0.865
  };
  /** 駒の段階別価値を取得 */
  get rank() {
    return this.cost <= 0 ? "KR" : 20 <= this.cost ? "SR" : 10 <= this.cost ? "R" : 5 <= this.cost ? "UC" : "C";
  }
  /** 駒データを初期化
   * @param {any} ctx - Canvas描画コンテキスト
   * @param {Piece|PieceInitOption} option - 駒の初期化オプション
   */
  static getPieces(e, a = {}) {
    const t = new Map(Object.entries(JSON.parse(JSON.stringify(T))));
    for (const [i, r] of t)
      r.attr ??= [], r.unit && r.unit !== "成" && (r.base = r);
    for (const [i, r] of t) {
      if (!r.promo || typeof r.promo != "string")
        continue;
      const o = [...r.promo];
      r.promo = {};
      for (const l of o) {
        const S = t.get(l);
        S.attr.push("promoted"), S.unit = "成", r.promo[l] = S, t.set(l, { ...r, ...S });
      }
    }
    [...t].forEach(([i, r], o) => {
      r.id = o, r.char = i, t.set(i, new y(e, r, a));
    });
    const s = Object.fromEntries(t);
    for (const [i, r] of t)
      r.alias.forEach((o, l) => {
        const S = r.clone(), n = [...S.display];
        S.displayPtn = l + 1, S.display = n, S.alias[l] = i, s[o] = S;
      });
    return s;
  }
  /** 文字列から駒を取得
   * @param {Piece|PieceInitOption} piece - 駒
   * @param {string} text - 駒文字列
   */
  static stringToPiece(e, a) {
    if (!a)
      return null;
    const [t, s] = [...a], i = y.charDegs[t];
    if (!i || !e[s])
      return null;
    const r = e[s].clone();
    return r.deg = i, r;
  }
  /** 駒の一覧をリストで取得 */
  static piecesToList(e) {
    return Object.entries(e).sort(([a, { id: t }], [s, { id: i }]) => Math.sign(t - i));
  }
  /** 駒の角度(deg/rad)
   * @param {number} value
   */
  set deg(e) {
    this.rad = e % 360 * Math.PI / 180;
  }
  get deg() {
    return this.rad % 360 / (Math.PI / 180);
  }
  /** 左側の座標 */
  get left() {
    return this.center - this.size * 0.8 / 2;
  }
  /** 上側の座標 */
  get top() {
    return this.middle - this.size / 2;
  }
  /** 右側の座標 */
  get right() {
    return this.center + this.size * 0.8 / 2;
  }
  /** 下側の座標 */
  get bottom() {
    return this.middle + this.size / 2;
  }
  /** 拡大率を取得
   * @returns {number}
   */
  get zoom() {
    let e = this.size / 100;
    return this.useRankSize && (e *= y.rankRatio[this.rank]), e;
  }
  /**
   * @param {any} ctx - Canvas描画コンテキスト
   * @param {Piece|PieceInitOption} piece - 駒
   * @param {Object} option - オプション
   * @param {number} option.displayPtn - 表示文字列を変更(1〜)
   * @param {number} option.deg - 駒の角度
   * @param {number} option.size - 駒の大きさ
   * @param {boolean} option.useRankSize - 駒の大きさを格の違いで変更するか
   * @param {boolean} option.isDrawShadow - 駒の影の描写有無
   * @param {boolean} option.isMoved - 初回移動済みか否か
   */
  constructor(e, a, t = {}) {
    const {
      displayPtn: s = 0,
      deg: i = 0,
      size: r = y.size,
      useRankSize: o = y.useRankSize,
      isDrawShadow: l = y.isDrawShadow,
      isMoved: S = !1
    } = t;
    Object.assign(this, a), this.ctx = e, this.display ??= [""], this.imgSrc ??= null, this.alias = [...this.alias ?? ""], this.displayPtn = s, this.game = z[this.gameName], this.cost = Z[this.char] ?? 1, this.center = 0, this.middle = 0, this.deg = i, this.size = r, this.useRankSize = o, this.isDrawShadow = l, this.isRotateImg ??= !0, this.isMoved = S, this.isSelected = !1, this.attr ??= [];
    try {
      Object.entries(this.range).forEach(([n, d]) => {
        Array.isArray(d) || (this.range[n] = V[d].map((m) => [...m]));
      });
    } catch (n) {
      throw console.error(n), a;
    }
  }
  /** 駒をクローン
   * @returns Piece
   */
  clone() {
    const { displayPtn: e, deg: a, size: t, isMoved: s } = this;
    return new y(this.ctx, { ...this }, { displayPtn: e, deg: a, size: t, isMoved: s });
  }
  /** 駒を表返す */
  turnFront() {
    Object.assign(this, this.base);
  }
  /** プロモーション
   * @param {string} char - 成り先の文字
   */
  promotion(e) {
    const { promo: a } = this;
    if (!a)
      throw Error(`promo=${e}, Not plomote piece.`);
    if (!a in a)
      throw Error(`promo=${e}, Plomote key is missing.`);
    if (this.hasAttr("promoted"))
      throw Error(`promo=${e}, Promoted piece.`);
    Object.assign(this, a[e]), this.char = e;
  }
  /** 属性の存在を確認
   * @param {string} attrName - 属性名
   * @returns {boolean}
   */
  hasAttr(e) {
    return this.attr.includes(e);
  }
  /** 座標が駒に含まれるか判定
   * @param {number} x - X座標
   * @param {number} y - Y座標
   */
  checkRangeMouse(e, a) {
    return this.left <= e && e < this.right && this.top <= a && a < this.bottom;
  }
  /** 移動範囲を回転して取得 */
  getRange() {
    const e = 0 | this.deg, a = JSON.parse(JSON.stringify(this.range));
    return Object.keys(a).forEach((t) => {
      if (e !== 0) {
        if (![90, 180, 270].includes(e))
          throw Error(`deg=${e}, deg need multiple of 90.`);
        if ([90, 270].includes(e)) {
          const s = (i) => i[0].map((r, o) => i.map((l) => l[o]));
          a[t] = s(a[t]);
        }
        [180, 270].includes(e) && a[t].reverse(), a[t].forEach((s) => {
          [90, 180].includes(e) && s.reverse();
        });
      }
    }), a;
  }
  /** 駒/マスクを描写 */
  async draw() {
    const e = "#FF000055";
    this.imgSrc && j.imported ? (this.drawImage(), this.isSelected && this.drawMaskImage(e)) : (this.drawPiece(), this.isSelected && this.drawMask(e));
  }
  /** 駒画像を描写 */
  drawImage() {
    const { ctx: e, size: a } = this, t = this.imgSrc[this.displayPtn], s = j.images[t];
    if (!s)
      return;
    e.save(), e.translate(this.center, this.middle), this.isRotateImg && e.rotate(this.rad);
    let i, r;
    s.width * 0.9 < s.height ? (i = s.width / s.height * a, r = a) : (i = a, r = s.height / s.width * a), e.drawImage(s, -i / 2, -r / 2, i, r), e.restore();
  }
  /** 駒画像にマスクを描写
   * @param {string} color - カラーエフェクトの色
   */
  drawMaskImage(e) {
    const { ctx: a, size: t } = this;
    a.fillStyle = e, a.save();
    const s = t * 0.9, i = t;
    a.translate(this.center, this.middle), a.fillRect(-s / 2, -i / 2, s, i), a.restore();
  }
  /** 将棋駒の外形パスを作成
   * @param {number} zoom - 駒の拡大率
   */
  makePath(e) {
    const { ctx: a } = this;
    a.translate(this.center, this.middle), a.rotate(this.rad), a.beginPath(), a.moveTo(-30 * e, -40 * e), a.lineTo(0 * e, -50 * e), a.lineTo(30 * e, -40 * e), a.lineTo(45 * e, 50 * e), a.lineTo(-45 * e, 50 * e), a.closePath();
  }
  /** 駒の影を描写
  * @param {number} zoom - 駒の拡大率
  */
  drawPieceShadow(e) {
    if (!this.isDrawShadow)
      return;
    const { ctx: a } = this;
    a.save(), a.translate(0, 10 * e), this.drawMask("#00000066"), a.restore();
  }
  /** 駒を描写 */
  drawPiece() {
    const { ctx: e, game: a, zoom: t } = this;
    let s, i, r;
    this.hasAttr("promoted") ? (s = a.promoteFontColor ?? a.fontColor ?? "#000000", i = a.promoteBackgroundColor ?? a.backgroundColor ?? "#FFFFFF", r = a.promoteBorderColor ?? a.borderColor ?? "#FF3300") : (s = a.fontColor ?? "#000000", i = a.backgroundColor ?? "#FFFFFF", r = a.borderColor ?? "#777777"), e.strokeStyle = r, e.fillStyle = i, e.lineWidth = 8 * t, this.drawPieceShadow(t), e.save(), this.makePath(t), e.stroke(), e.fill(), e.fillStyle = s;
    const o = [..."" + this.display[this.displayPtn]], l = 40 * t;
    e.font = `${l}px ${M.names}`, e.textAlign = "center", o.forEach((S, n) => {
      const d = o.length === 1 ? l / 2 : n * l;
      e.fillText(S, 0, d);
    }), e.restore();
  }
  /** 駒にマスクを描写
   * @param {string} color - カラーエフェクトの色
   */
  drawMask(e) {
    const { ctx: a, zoom: t } = this;
    a.fillStyle = e, a.save(), this.makePath(t), a.fill(), a.restore();
  }
  /** 文字列形式で取得 */
  toString() {
    return y.degChars[this.deg] + this.char;
  }
}
Object.entries(y.degChars).forEach(([p, e]) => {
  y.charDegs[e] = p;
});
const Se = [
  ["default", { isAttack: !1 }],
  ["attack", { isAttack: !0 }],
  ["start", { isAttack: !1 }],
  ["castling", { isAttack: !1 }],
  ["enPassant", { isAttack: !0 }],
  ["palaceSlash", { isAttack: !1 }],
  ["palaceSlash", { isAttack: !0 }]
], de = [
  ["O", { isOwn: !0 }],
  ["o", {}]
], ce = [
  ["o"],
  ["A", { child: ["a"] }],
  ["B", { child: ["b"] }],
  ["C", { child: ["c"] }],
  ["D", { child: ["d"] }],
  ["E", { child: ["a", "e"] }],
  ["F", { child: ["a", "f"] }],
  ["G", { child: ["b", "g"] }],
  ["H", { child: ["b", "h"] }],
  ["I", { child: ["c", "i"] }],
  ["J", { child: ["c", "j"] }],
  ["K", { child: ["d", "k"] }],
  ["L", { child: ["d", "l"] }]
], Q = [
  ["*", {}],
  ["+", { jmps: 1 }],
  ["|", { jmps: 1, moves: 1 }]
];
for (let p = 1; p <= 9; p++)
  Q.push(["" + p, { moves: p }]);
function pe(p) {
  const e = [];
  let a, t;
  for (let s = 0; s < p.length; s++)
    for (let i = 0; i < p[s].length; i++) {
      const r = p[s][i];
      for (let [o, { isOwn: l }] of de)
        r === o && (e.push({ isOwn: l, oX: i, oY: s }), l && ([a, t] = [i, s]));
    }
  return e.map((s) => (s.offsetX = s.oX - a, s.offsetY = s.oY - t, s));
}
function me(p, e, a, t) {
  const { field: s, yLen: i, enPassant: r } = p;
  function o(c, g) {
    return s[g] && s[g][c] && !s[g][c].hasAttr("keepOut");
  }
  function l(c) {
    return c.piece && e.hasAttr("po") && c.piece.hasAttr("po");
  }
  function S(c) {
    return c.piece && !e.isMoved && !c.piece.isMoved && e.hasAttr("pao") && e.cost < c.piece.cost;
  }
  function n(c, g, A, h = "", C = !0) {
    if (!s[A] || !s[A][g])
      return !1;
    const w = s[A][g];
    return !w || l(w) || S(w) || h === "enPassant" && !r.isTarget(w, e) || e.hasAttr("inPalace") && !w.hasAttr("palace") || h.indexOf("palace") === 0 && !(w.hasAttr(h) && s[t][a].hasAttr(h)) || e.hasAttr("unCrossRiver") && i - (0 | i / 2) <= p.getRow(g, A, e.deg) ? !1 : c ? s[A][g].piece ? C ? e.deg !== s[A][g].piece.deg : !0 : !1 : !s[A][g].piece;
  }
  function d(c, g, A, h, C) {
    for (const w of g)
      for (let b = 0; b < c.length; b++)
        for (let x = 0; x < c[b].length; x++) {
          const [E, k] = [x + a - h, b + t - C];
          if (!(!o(E, k) || n(A, 0 | E, 0 | k, "", !1) || c[b][x] !== w))
            return !0;
        }
    return !1;
  }
  function m(c, g, A) {
    const h = s[A][g];
    h.addTarget(c), r.setTarget(h, e);
  }
  function u(c, [g, { isAttack: A }], { oX: h, oY: C, isOwn: w }) {
    if (w)
      for (const [b, { child: x = [] } = {}] of ce)
        for (let E = 0; E < c.length; E++)
          for (let k = 0; k < c[E].length; k++) {
            const [f, N] = [k + a - h, E + t - C];
            !o(f, N) || !n(A, f, N, g) || c[E][k] !== b || d(c, x, !1, h, C) || m(g, f, N);
          }
  }
  function W(c, [g, { isAttack: A }], { oX: h, oY: C, isOwn: w, offsetX: b, offsetY: x }) {
    if (!(!w && !n(!1, a + b, t + x)))
      for (const [E, { jmps: k = 0, moves: f = 0 } = {}] of Q) {
        const N = !f || f === 0;
        for (let X = C - 1; X <= C + 1; X++)
          for (let P = h - 1; P <= h + 1; P++) {
            if (c[X][P] !== E || P === h && X === C)
              continue;
            let L = k || 0, F = f || 0;
            const [I, ee] = [P - h, X - C];
            for (let J = a, K = t; ; ) {
              J += I, K += ee;
              const R = J + b, $ = K + x;
              if (!o(R, $) || !N && F === 0)
                break;
              const G = L === 0;
              G && n(A, R, $, g, G) ? (F--, m(g, R, $)) : k < 1 && F--;
              const Y = s[$][R];
              if (Y.piece && (L--, G || l(Y)))
                break;
            }
          }
      }
  }
  (function() {
    const c = e.getRange();
    c.attack ??= c.default;
    for (const g of Se) {
      const A = g[0];
      if (e.isMoved && ["start", "castling"].includes(A))
        continue;
      const h = c[A];
      if (h)
        for (const C of pe(h))
          u(h, g, C), W(h, g, C);
    }
  })();
}
function ge(p) {
  let e = !1, a = [], t = null, s = null;
  const { canvas: i } = p, r = (n, d, m = () => {
  }) => {
    const u = window.getComputedStyle(i), W = n.target.getBoundingClientRect();
    let c = i.width / parseFloat(u.width), g = i.height / parseFloat(u.height);
    if (n.clientX)
      c *= n.clientX - W.left, g *= n.clientY - W.top;
    else if (0 < n.touches.length) {
      if (1 < n.touches.length)
        return;
      c *= n.touches[0].clientX - W.left, g *= n.touches[0].clientY - W.top;
    } else
      n.preventDefault(), [c, g] = a;
    p.field.forEach((A, h) => A.forEach((C, w) => d(C, c, g, w, h))), m(c, g), p.draw(), a = [c, g];
  }, o = (n) => {
    e = !0, r(
      n,
      (d, m, u) => {
        const { piece: W, pX: c, pY: g } = d;
        W && d.checkRangeMouse(m, u) && (n.preventDefault(), W.isSelected = !0, t = d, me(p, W, c, g));
      },
      (d, m) => {
        for (const [u, W] of p.stand.stocks)
          for (let c = W.length - 1; 0 <= c; c--)
            if (W[c].checkRangeMouse(d, m)) {
              n.preventDefault(), W[c].isSelected = !0, s = { deg: u, i: c };
              return;
            }
      }
    );
  }, l = (n) => {
    !e || !(t || s) || r(
      n,
      (d, m, u) => {
        d.isSelected = d.checkRangeMouse(m, u);
      }
    );
  }, S = (n) => {
    e = !1, r(
      n,
      (d, m, u) => {
        d.checkRangeMouse(m, u) && (t && p.movePiece(t, d), s && !d.piece && p.stand.releasePiece(d, s));
      }
    ), r(
      n,
      (d) => {
        d.piece && (d.piece.isSelected = !1), d.isSelected = !1, d.clearTarget();
      },
      () => {
        for (const [d, m] of p.stand.stocks)
          for (let u = m.length - 1; 0 <= u; u--)
            m[u].isSelected = !1;
        t = null, s = null;
      }
    );
  };
  return i.addEventListener("mousedown", o), i.addEventListener("mousemove", l), i.addEventListener("mouseup", S), i.addEventListener("touchstart", o), i.addEventListener("touchmove", l), i.addEventListener("touchend", S), {
    removeEvent() {
      i.removeEventListener("mousedown", o), i.removeEventListener("mousemove", l), i.removeEventListener("mouseup", S), i.removeEventListener("touchstart", o), i.removeEventListener("touchmove", l), i.removeEventListener("touchend", S);
    }
  };
}
class B {
  /** 角度から駒の文字表示
   * @type {Map<number, string>}
   */
  static #e = /* @__PURE__ */ new Map([
    [0, " "],
    [90, ">"],
    [180, "v"],
    [270, "<"]
  ]);
  /** 角度から駒の正規表現表示
   * @type {Map<number, string>}
   */
  static #a = new Map(
    [...B.#e].map(([e, a]) => [e, new RegExp(a, "g")])
  );
  /** 駒の文字から角度表示
   * @type {Map<string, number>}
   */
  static #s = new Map(
    [...B.#e].map(([e, a]) => [a, e])
  );
  /** 角度から持駒の表題表示
   * @type {Map<number, string>}
   */
  static #i = /* @__PURE__ */ new Map([
    [0, "先手の持駒"],
    [90, "次手の持駒"],
    [180, "後手の持駒"],
    [270, "四手の持駒"]
  ]);
  /** 持駒の表題から角度表示
   * @type {Map<string, number>}
   */
  static #r = new Map(
    [...B.#i].map(([e, a]) => [a, e])
  );
  static #n = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  static #o = ["", "十", "二十", "三十", "四十", "五十", "六十", "七十", "八十", "九十"];
  /** 行/持駒用の数字表示(漢数字)
   * @param {number} num - 数字
   * @param {boolean} viewOne - 一を表示
   * @returns {string}
   */
  static #l(e, a = !0) {
    if (!a && e <= 1)
      return "";
    const t = e % 10, s = 0 | e / 10;
    return B.#o[s] + B.#n[t];
  }
  /** 行/持駒用の数字表示(漢数字)
   * @param {number} num - 数字
   * @param {boolean} emptyOne - 空文字を1とする
   * @returns {string}
   */
  static #S(e, a = !0) {
    if (a && e === "")
      return 1;
    if (!isNaN(e))
      return 0 | e;
    let t = B.#o.findIndex(
      (i) => i !== "" && new RegExp("^" + i).test(e)
    );
    t < 0 && (t = 0);
    let s = B.#n.findIndex(
      (i) => i !== "" && new RegExp(i + "$").test(e)
    );
    return s < 0 && (s = 0), t * 10 + s;
  }
  /** 列用の数字表示(全角/2桁)
   * @param {number} num - 数字
   * @returns {string}
   */
  static #d(e) {
    if (10 <= e)
      return e;
    const a = "０１２３４５６７８９", t = e % 10;
    return a[t];
  }
  /** マス目の表示
   * @type {string}
   */
  static #c = " ・";
  /** 駒のBOD表記
   * @param {Piece} piece - 駒
   * @returns {string}
   */
  static #p(e) {
    return e ? B.#e.get(e.deg) + e.char : B.#c;
  }
  /** 駒台のBOD表記
   * @param {Stand} stand - 駒台
   * @param {number} deg - 角度
   * @returns {string}
   */
  static #t(e, a = 0) {
    const t = /* @__PURE__ */ new Map();
    return e.stocks.get(a).forEach(({ char: s }) => {
      t.has(s) || t.set(s, 0), t.set(s, t.get(s) + 1);
    }), B.#i.get(a) + "：" + [...t].map(
      ([s, i]) => s + B.#l(i, !1)
    ).join(" ");
  }
  /** BOD形式のテキストをボードで扱えるよう変換
   * @param {string} text - BOD形式のテキスト
   * @returns {string}
   */
  static convSetText(e) {
    const a = [], t = [];
    e.split(/\r|\n|\r\n/).forEach((r) => {
      [...B.#r.keys()].some((o) => new RegExp(`^${o}`).test(r)) ? t.push(r) : a.push(r.slice(1));
    });
    let s = a.slice(2, -1).join(`
`);
    B.#a.forEach((r, o) => {
      s = s.replace(r, y.degChars[o]);
    });
    const i = t.flatMap((r) => {
      const [o, l] = r.split(/：/);
      if (l === "")
        return "";
      const S = B.#r.get(o), n = y.degChars[S];
      return l.split(/\s/).map((m) => {
        const u = m[0], W = m.slice(1);
        return (n + u).repeat(B.#S(W));
      });
    }).join("");
    return `${s}
${i}`;
  }
  /** BOD形式テキストを取得
   * @returns {string}
   */
  static getText(e) {
    const { field: a, xLen: t, players: s, stand: i } = e;
    let r = ` ${[...Array(t).keys()].map((u) => ` ${B.#d(t - u)}`).join("")}
+${Array(t).fill("---").join("")}+
`, o = `
+${Array(t).fill("---").join("")}+`, l = "|", S = "", n = `
`, d = `${B.#t(i, 180)}
`, m = `${B.#t(i, 0)}`;
    return s !== 2 && (d = `${B.#t(i, 270)}
` + d, m = `${B.#t(i, 90)}
` + m), d + r + a.map(
      (u, W) => l + u.map(
        (c) => B.#p(c.piece)
      ).join(S) + l + B.#l(W + 1)
    ).join(n) + o + `
` + m;
  }
}
class H {
  /** 駒台への角度ごとの表示順
   * @type {number[]}
   */
  static #e = [180, 90, 270, 0];
  /**
   * @param {Board} ボード
   */
  constructor(e) {
    this.board = e;
    const { top: a, right: t, bottom: s, width: i, height: r, panelWidth: o, panelHeight: l, xLen: S, yLen: n } = e;
    this.clear(), this.left = t * 1.02, this.top = a, this.width = i / 2, this.height = r, this.right = this.left + this.width, this.bottom = s, this.pitchWidth = o / 2, this.pitchHeight = l, this.xLen = S, this.yLen = n;
  }
  /** 駒台を初期化にする */
  clear() {
    this.stocks = new Map(H.#e.map((e) => [e, []]));
  }
  /** 持ち駒からボード上に配置する
   * @param {Panal} toPanell - 配置先のパネル
   * @param {Object} option - オプション
   * @param {number} option.deg - 角度
   * @param {number} option.i - 配置する持ち駒のインデックス
   */
  releasePiece(e, a = {}) {
    if (e.hasAttr("keepOut"))
      return;
    const { deg: t, i: s } = a, { board: i } = this, r = this.stocks.get(t);
    e.piece = r[s], r[s].center = e.center, r[s].middle = e.middle, i.addRecord(e, { end: "打" }), r.splice(s, 1);
  }
  /** 駒台に追加する
   * @param {Piece} piece - 追加する駒
   */
  add(e) {
    const a = this.stocks.get(e.deg);
    e.turnFront(), a.push(e), a.sort((t, s) => Math.sign(t.id - s.id));
  }
  /** 駒を持ち駒にする
   * @param {Piece|null} winnerPiece - 移動する駒
   * @param {Piece} loserPiece - 捕縛される駒
   * @param {boolean} forceCapture - 属性を無視して捕縛する
   * @param {boolean} forceCantCapture - 属性を無視して捕縛しない
   */
  capturePiece(e, a, t = !1, s = !1) {
    s || !a || !(t || e.hasAttr("capture")) || a.hasAttr("king") || a.hasAttr("cantCapture") || (a.deg = e.deg, a.isMoved = !0, this.add(a));
  }
  /** 盤を描写 */
  draw() {
    const { board: e, left: a, top: t, width: s, height: i, pitchWidth: r, pitchHeight: o } = this, { ctx: l, xLen: S, yLen: n } = e;
    l.fillStyle = e.backgroundColor, l.strokeStyle = e.borderColor, l.lineWidth = e.borderWidth, l.save(), l.translate(a, t), l.fillRect(0, 0, s, i), l.strokeRect(0, 0, s, i), l.restore(), [...this.stocks.values()].forEach((d, m) => {
      let u = 0;
      d = d.slice(-n / 4 * S);
      for (let W = 0 | n / 4 * m; W < n / 4 * (m + 1); W++)
        for (let c = 0; c < S; c++) {
          const g = a + r * (c + 1), A = t + o * (W + 1), h = d[u++];
          if (h == null)
            break;
          h.center = g, h.middle = A, h.draw();
        }
    });
  }
  /** 駒台をテキスト形式で取得
   * @param {boolean} isCompact - コンパクト表示
   */
  toString(e = !1) {
    const { xLen: a } = this.board, t = [...this.stocks.values()].flat().filter((r) => r);
    let s = 0 < t.length ? `
` + "―".repeat(a * 2) + `
` : "", i = t.map((r) => "" + r).join("");
    if (!e) {
      s = "";
      for (const r of Object.values(y.degChars))
        i = i.replace(r, `
${r}持駒：${r}`);
    }
    return s + i;
  }
}
const ue = Object.keys(y.degChars), U = () => ({
  panel: null,
  piece: null
});
class he {
  constructor() {
    this.degs = {}, ue.forEach((e) => this.degs[e] = U());
  }
  /** アンパッサン情報をクリア
   * @param {number} deg - アンパッサンされうる陣営の角度
   */
  clear(e) {
    this.degs[e] = U();
  }
  /** アンパッサン対象と成りうるマス情報を記録
   * @param {Panel} panel - アンパッサン対象と成りうるマス目
   * @param {Piece} piece - アンパッサン対象と成りうる駒
   */
  setTarget(e, a) {
    e.hasTarget("start") && a.hasAttr("enPassant") && (this.degs[a.deg].panel = e);
  }
  /** アンパッサン対象と成りうる駒情報を記録
   * @param {Panel} toPanel - アンパッサン対象か確認するマス目
   */
  setMoved(e) {
    const { piece: a } = e, t = this.degs[a.deg];
    a && e === t.panel ? t.piece = a : this.clear(a.deg);
  }
  /** アンパッサン対象のマスか確認する
   * @param {Panel} panel - アンパッサン対象と成りうるマス目
   * @param {Piece} piece - アンパッサン対象と成りうる駒
   * @returns {boolean}
   */
  isTarget(e, a) {
    return !e || !e.piece ? !0 : e.piece.hasAttr("enPassant") ? e.piece === this.degs[e.piece.deg].piece : !1;
  }
}
class _ {
  /** ゲームを実行する
   * @param {HTMLCanvasElement}} canvas - Canvas要素
   * @param {BoardInitOption} option - ボードの初期化オプション
   * @param {string} option.playBoard - ボードタイプ
   * @param {Object} option.playPieces - 駒セット
   * @param {string} option.playPieces.gameName - ゲーム名(基準となる駒の配置セット)
   * @param {string} option.playPieces.pieceSet - 駒の配置パターン
   * @returns Board
   */
  static run(e, a) {
    const { playBoard: t, playPieces: s, onDrawed: i } = a, r = s.some(({ gameName: l }, S) => 1 < S && l) ? 4 : 2, o = new _(e, t, {
      ...a,
      players: r,
      onDrawed: i
    });
    return s.forEach(({ gameName: l, pieceSet: S }, n) => {
      if (l) {
        S ??= "default";
        try {
          o.putStartPieces(n, l, S);
        } catch {
        }
      }
    }), o.onDrawed = i, o;
  }
  /**
   * @typedef {"overflow"|"horizontal"|"vertical"|"parentOverflow"|"parentHorizontal"|"parentVertical"|null} canvasFit
   */
  /**
   * @param {HTMLCanvasElement} canvas - Canvas要素
   * @param {string} playBoard - ボードタイプ
   * @param {number} players - プレイヤー人数(2 or 4)
   * @param {BoardInitOption} option - ボードの初期化オプション
   */
  constructor(e, a, t) {
    const {
      players: s = 2,
      canvasWidth: i = void 0,
      canvasHeight: r = void 0,
      canvasFit: o = "overflow",
      boardLeft: l = 5,
      boardTop: S = 5,
      panelWidth: n = 50,
      panelHeight: d = 0 | n * 1.1,
      pieceSize: m = 0 | n * 0.9,
      useRankSize: u = !0,
      isDrawShadow: W = !0,
      borderWidth: c = Math.min(n, d) / 30,
      useStand: g = !1,
      backgroundColor: A = "#00000000",
      autoDrawing: h = !0,
      onDrawed: C,
      onGameOver: w = (N) => alert(`プレイヤー${N + 1}の敗北です。`),
      freeMode: b = !1
    } = t, x = M.importAsync(), E = j.importAsync();
    this.canvas = e;
    const k = e.getContext("2d");
    if (k.clearRect(0, 0, e.width, e.height), this.ctx = k, this.pieces = y.getPieces(k, {
      size: m,
      useRankSize: u,
      isDrawShadow: W
    }), Object.assign(this, q[a]), ![2, 4].includes(s))
      throw Error(`players=${s}, players need 2 or 4.`);
    this.players = s, this.left = l, this.top = S, this.panelWidth = n, this.panelHeight = d, this.borderWidth = c, this.pieceSize = m, this.canvasBackgroundColor = A, this.field = this.field.map(
      (N, X) => [...N].map((P, L) => {
        const F = l + n * (L + 1), I = S + d * (X + 1);
        return new le(k, P, F, I, n, d, c, L, X);
      })
    ), this.xLen = this.field[0].length, this.yLen = this.field.length, this.width = this.panelWidth * (this.xLen + 1), this.height = this.panelHeight * (this.yLen + 1), this.right = l + this.width, this.bottom = S + this.height, this.stand = new H(this), e.width = i ?? (g ? this.stand.right : this.right) + 5, e.height = r ?? this.bottom + 5;
    const { style: f } = e;
    o === "overflow" ? (f.maxWidth === "" && (f.maxWidth = "97vw"), f.maxHeight === "" && (f.maxHeight = "97vh")) : o === "horizontal" ? f.width === "" && (f.width = "97vw") : o === "vertical" ? f.height === "" && (f.height = "97vh") : o === "parentOverflow" ? (f.maxWidth === "" && (f.maxWidth = "100%"), f.maxHeight === "" && (f.maxHeight = "100%")) : o === "parentHorizontal" ? f.width === "" && (f.width = "100%") : o === "parentVertical" && f.height === "" && (f.height = "100%"), this.autoDrawing = h, h && (x.then(() => this.draw()), E.then(() => this.draw()), this.draw()), this.onDrawed = C, this.onGameOver = w, this.gameAlives = new Map(
      [...Array(this.players).keys()].map((N) => [this.#e(N), !0])
    ), this.freeMode = b, this.record = [], this.uiControl = ge(this), this.enPassant = new he();
  }
  /** ボードを閉じる */
  close() {
    this.uiControl.removeEvent();
  }
  /** 角度を正規化
   * @param {number} playeaIdOrDeg - プレイヤー番号または角度
   * @returns {number}
   */
  #e(e) {
    let a = e;
    0 < a && a < 4 && (a = 0 | a * 360 / this.players);
    do
      a = (a + 360) % 360;
    while (a < 0);
    return a;
  }
  /** 駒配置を回転
   * @param {number} deg - 回転角 (90の倍数)
   */
  rotateField(e) {
    const { xLen: a, yLen: t } = this;
    if (e = this.#e(e), e !== 0) {
      if (![90, 180, 270].includes(e))
        throw Error(`deg=${e}, deg need multiple of 90.`);
      if ([90, 270].includes(e)) {
        const s = (i) => i[0].map((r, o) => i.map((l) => l[o]));
        if (a !== t)
          throw Error(`cols=${a} != rows=${t}, Not rows = cols.`);
        this.field = s(this.field);
      }
      [180, 270].includes(e) && this.field.reverse(), this.field.forEach((s) => {
        s.forEach((i) => {
          i.piece && (i.piece.deg += e);
        }), [90, 180].includes(e) && s.reverse();
      });
    }
  }
  /** 駒の初期配置
   * @param {number} playerId - プレイヤー番号
   * @param {string} gameName - ゲーム名(基準となる駒の配置セット)
   * @param {string} pieceSet - 駒の配置パターン
   */
  putStartPieces(e, a, t = "default") {
    const { pieces: s } = this, i = this.#e(e);
    this.rotateField(i);
    const r = z[a].position[this.xLen][t];
    if (!r)
      throw Error(`games["${a}"].position["${this.xLen}"]["${t}"]is null.`);
    r.forEach((o, l) => {
      if (o.length < this.xLen)
        throw Error(o.join(""));
      const S = l + this.yLen - r.length;
      [...o].forEach((n, d) => {
        if (!s[n])
          return;
        const m = s[n].clone(), u = this.field[S][d];
        m.center = u.center, m.middle = u.middle, u.piece = m;
      });
    }), this.rotateField(-i), this.autoDrawing && this.draw();
  }
  /** 駒の配置
   * @param {string} piece - 駒の表現文字
   * @param {number} pX - X方向配置位置(マス目基準)
   * @param {number} pY - Y方向配置位置(マス目基準)
   * @param {number} playeaIdOrDeg - プレイヤー番号または駒の配置角
   * @param {Object} option - オプション
   * @param {number} option.displayPtn - 表示文字列を変更(1〜)
   * @param {boolean} option.isMoved - 初回移動済みか否か
   */
  putNewPiece(e, a, t, s, i = {}) {
    const { displayPtn: r = 0, isMoved: o = !1 } = i, { pieces: l } = this, S = this.#e(s);
    typeof e == "string" && (e = new y(this.ctx, l[e], { displayPtn: r, deg: S, isMoved: o }));
    const n = this.field[t][a];
    e.center = n.center, e.middle = n.middle, n.piece = e, this.autoDrawing && this.draw();
  }
  /** 文字列から駒を配置
   * {string} text - 駒配置を表す文字列
   */
  setTextPieces(e) {
    const { field: a, pieces: t, xLen: s, yLen: i } = this, r = "持駒：";
    0 < e.indexOf(r) && (e = B.convSetText(e));
    const l = [e].concat(
      [..."┏━┯┓┗┷┛┃│┠─┼┨―"],
      Object.values(y.degChars).map((n) => `
` + n + r)
    ).reduce(
      (n, d) => n.replace(new RegExp(d, "g"), "")
    ).replace(/\n\n/g, `
`).replace(/　/g, "・").trim().split(/\n/).map(
      (n) => n.match(/.{2}/g)
    );
    for (let n = 0; n < i; n++)
      for (let d = 0; d < s; d++)
        try {
          const m = l[n][d], u = y.stringToPiece(t, m);
          u.center = a[n][d].center, u.middle = a[n][d].middle, a[n][d].piece = u;
        } catch {
          a[n][d].piece = null;
        }
    this.stand.clear();
    const S = l[i];
    S && S.forEach((n) => {
      const d = y.stringToPiece(t, n);
      d && this.stand.add(d);
    }), this.autoDrawing && this.draw();
  }
  /** 角度基準のマス目の行を取得する
   * @param {Panel} panel - マス目
   * @param {number} deg - 角度
   * @param {number} offsetDeg - 補正角度
   * @returns {number}
   */
  getRow(e, a, t, s = 0) {
    const { xLen: i, yLen: r } = this;
    return t = this.#e(t + s), t === 0 ? r - 1 - a : t === 90 ? e : t === 180 ? a : t === 270 ? i - 1 - e : -1;
  }
  /** 角度基準のマス目の列を取得する
   * @param {Panel} panel - マス目
   * @param {number} deg - 角度
   * @param {number} offsetDeg - 補正角度
   * @returns {number}
   */
  getCol(e, a, t, s = 0) {
    const { xLen: i, yLen: r } = this;
    return t = this.#e(t + s), t === 0 ? e : t === 90 ? r - 1 - a : t === 180 ? i - 1 - e : t === 270 ? a : -1;
  }
  /** プロモーションエリア内であるか判別
   * @param {Panel} panel - マス目
   */
  checkCanPromo(e) {
    const { yLen: a } = this, { piece: t, pX: s, pY: i } = e, { deg: r } = t, [o, l] = [
      t.game.promoLine,
      t.forcePromoLine
    ].map((n) => a - n - (0 | this.promoLineOffset));
    let S;
    return this.sidePromo ? S = Math.max(
      ...Object.keys(y.degChars).map((n) => 0 | n).filter((n) => n !== r).map(
        (n) => this.getRow(s, i, n, 180)
      )
    ) : S = this.getRow(s, i, r), {
      canPromo: o <= S,
      forcePromo: l <= S
    };
  }
  /** 敗北したプレイヤーが存在するか確認し、イベントを発生させる */
  #a() {
    [...this.gameAlives].forEach(([e, a], t) => {
      a && (this.field.some(
        (s) => s.some(
          ({ piece: i }) => i && i.deg === e && i.hasAttr("king")
        )
      ) || (this.gameAlives.set(e, !1), this.onGameOver(t)));
    });
  }
  /** プロモーション処理
   * @param {Panel} fromPanel - 移動元のマス目
   * @param {Panel} toPanel - 選択中のマス目
   * @param {boolean} canPromo - 成ることができる
   * @param {boolean} forcePromo - 成りを強制する
   */
  #s(e, a, t, s) {
    const { freeMode: i } = this, { piece: r } = a;
    if (!r.promo || r.hasAttr("promoted") || !t) {
      this.addRecord(a, { fromPanel: e });
      return;
    }
    do
      for (const [o, { name: l }] of Object.entries(r.promo))
        if (confirm(`成りますか?
	${r.char}:${r.name}
	　↓
	${o}:${l}`)) {
          this.addRecord(a, { fromPanel: e, end: "成" }), r.promotion(o);
          return;
        }
    while (!i && s);
    this.addRecord(a, { fromPanel: e, end: "不成" });
  }
  /** 駒を移動
   * @param {Panel} fromPanel - 移動元のマス目
   * @param {Panel} toPanel - 選択中のマス目
   */
  movePiece(e, a) {
    const { stand: t, freeMode: s, enPassant: i } = this;
    if (!e || a.hasAttr("keepOut") || a.piece === e.piece || a.piece?.deg === e.piece.deg || !this.freeMode && !a.isTarget)
      return;
    let { canPromo: r, forcePromo: o } = this.checkCanPromo(e);
    t.capturePiece(
      e.piece,
      a.piece,
      a.hasAttr("capture"),
      a.hasAttr("cantCapture")
    ), a.piece = e.piece, e.piece = null;
    const { piece: l } = a;
    l.center = a.center, l.middle = a.middle, l.isMoved = !0;
    const S = this.checkCanPromo(a);
    r ||= S.canPromo, o ||= S.forcePromo, i.setMoved(a), this.#s(e, a, r, o), this.#a();
  }
  /** 棋譜を追記
   * @param {Panel} toPanel - 移動先のマス目
   * @param {Object} option - オプション
   * @param {Panel} option.fromPanel - 移動元のマス目
   * @param {string} option.end - オプション=成|不成|打
   */
  addRecord(e, a = {}) {
    const { fromPanel: t, end: s = "" } = a, { piece: i } = e;
    this.record.push({
      to: {
        pX: e.pX,
        pY: e.pY
      },
      from: {
        pX: t?.pX,
        pY: t?.pY
      },
      deg: i.deg,
      pieceChar: i.char,
      end: s
    });
  }
  /** 棋譜をテキストで取得
   * @returns {string}
   */
  getTextRecord() {
    const e = ({ pX: t }) => t == null ? "*" : (this.xLen - t).toString(36), a = ({ pY: t }) => t == null ? "*" : (t + 1).toString(36);
    return this.record.map(
      ({ to: t, from: s, deg: i, pieceChar: r, end: o }) => `${y.degChars[i]}${e(t)}${a(t)}${r}${o} (${e(s)}${a(s)})`
    ).join(`
`);
  }
  /** 盤を描写 */
  draw() {
    const { ctx: e, canvas: a, left: t, top: s, width: i, height: r, panelWidth: o, panelHeight: l } = this;
    e.restore(), e.save(), e.clearRect(0, 0, a.width, a.height), e.fillStyle = this.canvasBackgroundColor, e.fillRect(0, 0, a.width, a.height), e.fillStyle = this.backgroundColor, e.lineWidth = this.borderWidth, e.strokeStyle = this.borderColor, e.save(), e.translate(t, s), e.fillRect(0, 0, i, r), e.strokeRect(0, 0, i, r), e.translate(o / 2, l / 2), e.strokeRect(0, 0, i - o, r - l), e.restore(), this.stand.draw(), this.field.forEach((S) => {
      S.forEach((n) => {
        n.draw();
      });
    }), this.onDrawed && this.onDrawed(this);
  }
  /** 駒配置をテキストで取得
   * @param {"default"|"compact"|"bod"} isCompact - テキスト形式
   * @returns {string}
   */
  getText(e = "default") {
    return e === "bod" ? B.getText(this) : this.toString(e === "compact");
  }
  /** 駒配置をテキストで取得
   * @param {boolean} isCompact - コンパクト表示
   */
  toString(e = !1) {
    const { xLen: a } = this;
    let t = "", s = "", i = "", r = "", o = `
`;
    return e || (t = `┏${Array(a).fill("━━").join("┯")}┓
`, s = `
┗${Array(a).fill("━━").join("┷")}┛`, i = "┃", r = "│", o = `
┠${Array(a).fill("──").join("┼")}┨
`), t + this.field.map(
      (l) => i + l.map(
        (S) => "" + (S.piece ?? S.toString(e))
      ).join(r) + i
    ).join(o) + s + this.stand.toString(e);
  }
  /** 画像を取得
   * @param {string} fileName - ファイル名
   * @param {string} ext - 拡張子
   * @returns {Promise<void>}
   */
  async downloadImage(e, a) {
    await oe(this.canvas, e, a);
  }
}
export {
  _ as Board,
  y as Piece,
  q as boards,
  M as canvasFont,
  j as canvasImage,
  ae as gameSoft,
  z as games
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvZ2lDcm9zcy5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL1Nob2dpQ3Jvc3MvZGF0YS9jYW52YXNGb250LmpzIiwiLi4vc3JjL1Nob2dpQ3Jvc3MvZGF0YS9nYW1lU29mdC5qcyIsIi4uL3NyYy9TaG9naUNyb3NzL2RhdGEvZ2FtZXMuanMiLCIuLi9zcmMvU2hvZ2lDcm9zcy9kYXRhL2JvYXJkcy5qcyIsIi4uL3NyYy9TaG9naUNyb3NzL2RhdGEvcGFuZWxzLmpzIiwiLi4vc3JjL1Nob2dpQ3Jvc3MvZGF0YS9waWVjZXMuanMiLCIuLi9zcmMvU2hvZ2lDcm9zcy9kYXRhL3BpZWNlUmFuZ2UuanMiLCIuLi9zcmMvU2hvZ2lDcm9zcy9kYXRhL3BpZWNlQ29zdC5qcyIsIi4uL3NyYy9TaG9naUNyb3NzL2NvcmUvanNvbi94aHIuanMiLCIuLi9zcmMvU2hvZ2lDcm9zcy9jb3JlL2pzb24uanMiLCIuLi9zcmMvU2hvZ2lDcm9zcy9jb3JlL2NhbnZhc0ZvbnRMb2FkZXIuanMiLCIuLi9zcmMvU2hvZ2lDcm9zcy9jb3JlL2NhbnZhc0ltYWdlTG9hZGVyLmpzIiwiLi4vc3JjL1Nob2dpQ3Jvc3MvY29yZS9kb3dubG9hZEltYWdlLmpzIiwiLi4vc3JjL1Nob2dpQ3Jvc3MvY29yZS9wYW5lbC5qcyIsIi4uL3NyYy9TaG9naUNyb3NzL2NvcmUvcGllY2UuanMiLCIuLi9zcmMvU2hvZ2lDcm9zcy9jb3JlL2NoZWNrVGFyZ2V0LmpzIiwiLi4vc3JjL1Nob2dpQ3Jvc3MvY29yZS91aUNvbnRyb2wuanMiLCIuLi9zcmMvU2hvZ2lDcm9zcy9jb3JlL2JvZC5qcyIsIi4uL3NyYy9TaG9naUNyb3NzL2NvcmUvc3RhbmQuanMiLCIuLi9zcmMvU2hvZ2lDcm9zcy9jb3JlL2VuUGFzc2FudC5qcyIsIi4uL3NyYy9TaG9naUNyb3NzL2NvcmUvYm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuXHRcImZvbnRzXCI6IFtcblx0XHRbXCJOb3RvIFNlcmlmIEpQXCIsIDkwMF0sXG5cdFx0W1wiTm90byBFbW9qaVwiLCA0MDBdLFxuXHRcdFtcIk5vdG8gU2FucyBTeW1ib2xzIDJcIiwgNDAwXSxcblx0XHRbXCJOb3RvIFNhbnMgU3ltYm9sc1wiLCA0MDBdLFxuXHRcdFtcIk5vdG8gU2VyaWZcIiwgOTAwXSxcblx0XHRbXCJOb3RvIFNlcmlmIFRDXCIsIDkwMF1cblx0XVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRcInNob2dpXCI6IHtcblx0XHRcIm5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIuS4gOiIrOeahOOBquWwhuaji+OAguacrOWwhuaji+OBqOOCguWRvOOBsOOCjOOCi+OAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiB0cnVlLFxuXHRcdFwicGxheVBpZWNlc1wiOiBbXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwiZGVmYXVsdFwifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCIycFwifVxuXHRcdF1cblx0fSxcblx0XCJjaGVzc1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OB44Kn44K5XCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi44OB44Kn44K5XCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2phLndpa2lwZWRpYS5vcmcvd2lraS8lRTMlODMlODElRTMlODIlQTclRTMlODIlQjlcIixcblx0XHRcImRlc2NcIjogXCLopb/mtIvjga7lsIbmo4vpoZ7jgILopb/mtIvlsIbmo4vjgajjgoLlkbzjgbDjgozjgovjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuODgeOCp+OCuVwiLFxuXHRcdFwidXNlU3RhbmRcIjogZmFsc2UsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsIFwicGllY2VTZXRcIjogXCJkZWZhdWx0XCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIiwgXCJwaWVjZVNldFwiOiBcIjJwXCJ9XG5cdFx0XVxuXHR9LFxuXHRcInhpYW5ncVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44K344Oj44Oz44OB44O8XCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi44K344Oj44Oz44OB44O8XCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2phLndpa2lwZWRpYS5vcmcvd2lraS8lRTMlODIlQjclRTMlODMlQTMlRTMlODMlQjMlRTMlODMlODElRTMlODMlQkNcIixcblx0XHRcImRlc2NcIjogXCLkuK3lm73jga7lsIbmo4vpoZ7jgILosaHmo4vjgIHkuK3lm73lsIbmo4vjgajjgoLlkbzjgbDjgozjgovjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuOCt+ODo+ODs+ODgeODvFwiLFxuXHRcdFwidXNlU3RhbmRcIjogZmFsc2UsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44K344Oj44Oz44OB44O8XCIsIFwicGllY2VTZXRcIjogXCJkZWZhdWx0XCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLjgrfjg6Pjg7Pjg4Hjg7xcIiwgXCJwaWVjZVNldFwiOiBcIjJwXCJ9XG5cdFx0XVxuXHR9LFxuXHRcImphbmdnaVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OB44Oj44Oz44KuXCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi44OB44Oj44Oz44KuXCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2phLndpa2lwZWRpYS5vcmcvd2lraS8lRTMlODMlODElRTMlODMlQTMlRTMlODMlQjMlRTMlODIlQUVcIixcblx0XHRcImRlc2NcIjogXCLmnJ3prq7ljYrls7bjga7lsIbmo4vpoZ7jgILmnJ3prq7lsIbmo4vjgajjgoLlkbzjgbDjgozjgovjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuODgeODo+ODs+OCrlwiLFxuXHRcdFwidXNlU3RhbmRcIjogZmFsc2UsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44OB44Oj44Oz44KuXCIsIFwicGllY2VTZXRcIjogXCJkZWZhdWx0XCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLjg4Hjg6Pjg7Pjgq5cIiwgXCJwaWVjZVNldFwiOiBcIjJwXCJ9XG5cdFx0XVxuXHR9LFxuXHRcIm1ha3J1a1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Oe44O844Kv44Or44OD44KvXCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi44Oe44O844Kv44Or44OD44KvXCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2phLndpa2lwZWRpYS5vcmcvd2lraS8lRTMlODMlOUUlRTMlODMlQkMlRTMlODIlQUYlRTMlODMlQUIlRTMlODMlODMlRTMlODIlQUZcIixcblx0XHRcImRlc2NcIjogXCLjgr/jgqTjga7lsIbmo4vpoZ7jgILjgr/jgqTlsIbmo4vjgajjgoLlkbzjgbDjgozjgovjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuODnuODvOOCr+ODq+ODg+OCr1wiLFxuXHRcdFwidXNlU3RhbmRcIjogZmFsc2UsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44Oe44O844Kv44Or44OD44KvXCIsIFwicGllY2VTZXRcIjogXCJkZWZhdWx0XCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLjg57jg7zjgq/jg6vjg4Pjgq9cIiwgXCJwaWVjZVNldFwiOiBcIjJwXCJ9XG5cdFx0XVxuXHR9LFxuXHRcImNoYXR1cmFuZ2FcIjoge1xuXHRcdFwibmFtZVwiOiBcIuODgeODo+ODiOODqeODs+OCrFwiLFxuXHRcdFwidmFyaWFudFwiOiBcIuODgeODo+ODiOODqeODs+OCrFwiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9qYS53aWtpcGVkaWEub3JnL3dpa2kvJUUzJTgzJTgxJUUzJTgzJUEzJUUzJTgzJTg4JUUzJTgzJUE5JUUzJTgzJUIzJUUzJTgyJUFDXCIsXG5cdFx0XCJkZXNjXCI6IFwi5Y6f5Yid44Gu5bCG5qOL6aGe44CC6Kmz57Sw44Gq44Or44O844Or44Gv5aSx44KP44KM44Gm44GE44KL44CCXCIsXG5cdFx0XCJwbGF5Qm9hcmRcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcInVzZVN0YW5kXCI6IGZhbHNlLFxuXHRcdFwicGxheVBpZWNlc1wiOiBbXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuODgeODo+ODiOODqeODs+OCrFwiLCBcInBpZWNlU2V0XCI6IFwiZGVmYXVsdFwifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44OB44Oj44OI44Op44Oz44KsXCIsIFwicGllY2VTZXRcIjogXCIycFwifVxuXHRcdF1cblx0fSxcblx0XCJkb2J1dHN1U2hvZ2lcIjoge1xuXHRcdFwibmFtZVwiOiBcIuOBqeOBhuOBtuOBpOOBl+OCh+OBhuOBjlwiLFxuXHRcdFwidmFyaWFudFwiOiBcIuOBqeOBhuOBtuOBpOOBl+OCh+OBhuOBjlwiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuc2lsdmVyc3Rhci5jby5qcC8wMnByb2R1Y3RzL2RvYnV0c3VzaG9naS9zd2l0Y2gvYW5pbWFsLmh0bWxcIixcblx0XHRcImRlc2NcIjogXCLlhaXploDnlKjjgajjgZfjgabogIPmoYjjgZXjgozjgZ/lsIbmo4vjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuOBqeOBhuOBtuOBpOOBl+OCh+OBhuOBjlwiLFxuXHRcdFwidXNlU3RhbmRcIjogdHJ1ZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLjganjgYbjgbbjgaTjgZfjgofjgYbjgY5cIiwgXCJwaWVjZVNldFwiOiBcImRlZmF1bHRcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuOBqeOBhuOBtuOBpOOBl+OCh+OBhuOBjlwiLCBcInBpZWNlU2V0XCI6IFwiZGVmYXVsdFwifVxuXHRcdF1cblx0fSxcblx0XCJ0b3JpU2hvZ2lcIjoge1xuXHRcdFwibmFtZVwiOiBcIuemveWwhuaji1wiLFxuXHRcdFwidmFyaWFudFwiOiBcIuemveWwhuaji1wiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9qYS53aWtpcGVkaWEub3JnL3dpa2kvJUU3JUE2JUJEJUU1JUIwJTg2JUU2JUEzJThCXCIsXG5cdFx0XCJkZXNjXCI6IFwi6bOl44Gu5ZCN44Gu6aeS44KS5L2/55So44GZ44KL5bCG5qOL44CC54m55q6K44Gq5YuV44GN44KS44GZ44KL6aeS44GM5aSa44GE44CCXCIsXG5cdFx0XCJwbGF5Qm9hcmRcIjogXCLlsIbmo4s3eDdcIixcblx0XHRcInVzZVN0YW5kXCI6IHRydWUsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLnpr3lsIbmo4tcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi56a95bCG5qOLXCJ9XG5cdFx0XVxuXHR9LFxuXHRcImNodVNob2dpXCI6IHtcblx0XHRcIm5hbWVcIjogXCLkuK3lsIbmo4tcIixcblx0XHRcInZhcmlhbnRcIjogXCLkuK3lsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNCVCOCVBRCVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIuePvuWcqOOBp+OCguODl+ODrOOCpOOBleOCjOOCi+OBk+OBqOOBruOBguOCi+WPpOWwhuaji+OBruS4gOeoruOAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5Y+k5bCG5qOLMTJ4MTJcIixcblx0XHRcInVzZVN0YW5kXCI6IGZhbHNlLFxuXHRcdFwicGxheVBpZWNlc1wiOiBbXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi5Lit5bCG5qOLXCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIuS4reWwhuajizJwXCJ9XG5cdFx0XVxuXHR9LFxuXHRcImdyYW50QWNlZHJleFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwiR3JhbnQgQWNlZHJleFwiLFxuXHRcdFwidmFyaWFudFwiOiBcIkdyYW50IEFjZWRyZXhcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vd3d3LmNoZXNzdmFyaWFudHMub3JnL3J1bGVzL2dyYW50YWNlZHJleFwiLFxuXHRcdFwiZGVzY1wiOiBcIuWPpOODgeOCp+OCueOBruS4gOeoruOAgueJueauiuOBquWLleOBjeOCkuOBmeOCi+mnkuOBjOWkmuOBhOOAguODl+ODreODouODvOOCt+ODp+ODs+WFiOOBr+acrOadpeOBr+aVtemZo+OBruWIsOedgOWIl+OBrumnkuOBqOOBquOCiyjmnKrlrp/oo4Up44CCXCIsXG5cdFx0XCJwbGF5Qm9hcmRcIjogXCLjg4HjgqfjgrkxMngxMlwiLFxuXHRcdFwidXNlU3RhbmRcIjogZmFsc2UsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsIFwicGllY2VTZXRcIjogXCJHcmFudEFjZWRyZXhcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLCBcInBpZWNlU2V0XCI6IFwiR3JhbnRBY2VkcmV4MnBcIn1cblx0XHRdXG5cdH0sXG5cdFwiY291cmllckNoZXNzQWR2YW5jZWRcIjoge1xuXHRcdFwibmFtZVwiOiBcIuOCr+ODvOODquOCqOODgeOCp+OCuSjlrprlvaLphY3nva4pXCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi44Kv44O844Oq44Ko44OB44Kn44K5KOWumuW9oumFjee9rilcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvdXJpZXJfY2hlc3NcIixcblx0XHRcImRlc2NcIjogXCLlj6Tjg4Hjgqfjgrnjga7kuIDnqK7jgILjg5Pjgrfjg6fjg4Pjg5fjgavnrYnjgZfjgYTotbDjgorpp5Io44Kv44O844Oq44KoKeOBjOWIneOCgeOBpuS9v+eUqOOBleOCjOOBn+OAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi44OB44Kn44K5MTJ4OFwiLFxuXHRcdFwidXNlU3RhbmRcIjogZmFsc2UsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsIFwicGllY2VTZXRcIjogXCLjgq/jg7zjg6rjgqjjg4Hjgqfjgrko5a6a5b2i6YWN572uKVwifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsIFwicGllY2VTZXRcIjogXCLjgq/jg7zjg6rjgqjjg4Hjgqfjgrko5a6a5b2i6YWN572uKTJwXCJ9XG5cdFx0XVxuXHR9LFxuXHRcImU1U2hvZ2lcIjoge1xuXHRcdFwibmFtZVwiOiBcIjXkupTlsIbmo4tcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLzUlRTQlQkElOTQlRTUlQjAlODYlRTYlQTMlOEJcIixcblx0XHRcImRlc2NcIjogXCLnsKHnlaXljJbjgZXjgozjgZ/lsIbmo4vjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuWwhuajizV4NVwiLFxuXHRcdFwidXNlU3RhbmRcIjogdHJ1ZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcImRlZmF1bHRcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwiMnBcIn1cblx0XHRdXG5cdH0sXG5cdFwiYXNha3VyYVNob2dpXCI6IHtcblx0XHRcIm5hbWVcIjogXCLmnJ3lgInosaHmo4tcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNSVCMCU4RiVFNSVCMCU4NiVFNiVBMyU4QiMlRTYlOUMlOUQlRTUlODAlODklRTglQjElQTElRTYlQTMlOEJcIixcblx0XHRcImRlc2NcIjogXCLmjIHjgaHpp5LjgYzkvb/nlKjjgafjgY3jgovlsI/lsIbmo4vjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuWwhuaji1wiLFxuXHRcdFwidXNlU3RhbmRcIjogdHJ1ZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIuWwj+Wwhuaji1wifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlsI/lsIbmo4sycFwifVxuXHRcdF1cblx0fSxcblx0XCJzaG9TaG9naVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5bCP5bCG5qOLXCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2phLndpa2lwZWRpYS5vcmcvd2lraS8lRTUlQjAlOEYlRTUlQjAlODYlRTYlQTMlOEJcIixcblx0XHRcImRlc2NcIjogXCLkuK3lsIbmo4vjgYvjgonpp5LjgpLlj5bjgorlhaXjgozjgabljp/ngrnlm57luLDjgZfjgZ/lubPlronlsIbmo4vjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuWwhuaji1wiLFxuXHRcdFwidXNlU3RhbmRcIjogZmFsc2UsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlsI/lsIbmo4tcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi5bCP5bCG5qOLMnBcIn1cblx0XHRdXG5cdH0sXG5cdFwiaGVpYW5TaG9naTh4OFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5bmz5a6J5bCG5qOLKDh4OClcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNSVCOSVCMyVFNSVBRSU4OSVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIuiomOmMsuOBjOaui+OCi+acgOWPpOOBruaXpeacrOOBruWwhuaji+OAguebpOOBruWkp+OBjeOBleOBq+e3kuiqrOOBguOCi+OAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5Y+k5bCG5qOLOHg4XCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiBmYWxzZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIuW5s+WuieWwhuaji1wifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlubPlronlsIbmo4tcIn1cblx0XHRdXG5cdH0sXG5cdFwiaGVpYW5TaG9naTl4OFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5bmz5a6J5bCG5qOLKDl4OClcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNSVCOSVCMyVFNSVBRSU4OSVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIjl4OOODnuOCueOBqOaDs+WumuOBl+OBn+aZguOBruW5s+WuieWwhuaji+OAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5Y+k5bCG5qOLOXg4XCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiBmYWxzZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIuW5s+WuieWwhuaji1wifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlubPlronlsIbmo4tcIn1cblx0XHRdXG5cdH0sXG5cdFwiaGVpYW5TaG9naTl4OVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5bmz5a6J5bCG5qOLKDl4OSlcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNSVCOSVCMyVFNSVBRSU4OSVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIjl4OeODnuOCueOBqOaDs+WumuOBl+OBn+aZguOBruW5s+WuieWwhuaji+OAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5Y+k5bCG5qOLOXg5XCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiBmYWxzZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIuW5s+WuieWwhuaji1wifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlubPlronlsIbmo4tcIn1cblx0XHRdXG5cdH0sXG5cdFwia3lvU2hvZ2lMZWZ0XCI6IHtcblx0XHRcIm5hbWVcIjogXCLkuqzlsIbmo4so5bem5Lqs6YWN572uKVwiLFxuXHRcdFwidmFyaWFudFwiOiBcIuWwhuaji1wiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9qYS53aWtpcGVkaWEub3JnL3dpa2kvJUU0JUJBJUFDJUU1JUIwJTg2JUU2JUEzJThCXCIsXG5cdFx0XCJkZXNjXCI6IFwi5Lqs57+U44Go6YqF5bCG44KS6L+95Yqg44GX44Gf5bCG5qOL44CC5bem5Y+z44Gu6YWN572u44GM5a2Y5Zyo44CCXCIsXG5cdFx0XCJwbGF5Qm9hcmRcIjogXCLlsIbmo4sxMHgxMFwiLFxuXHRcdFwidXNlU3RhbmRcIjogdHJ1ZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIuS6rOWwhuajiyjlt6bkuqzphY3nva4pXCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIuS6rOWwhuajiyjlt6bkuqzphY3nva4pMnBcIn1cblx0XHRdXG5cdH0sXG5cdFwia3lvU2hvZ2lSaWdodFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5Lqs5bCG5qOLKOWPs+S6rOmFjee9rilcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNCVCQSVBQyVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIuS6rOWwhuaji+OBruWPs+WBtOOBq+S6rOOCkue9ruOBj+ODkeOCv+ODvOODs+OAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5bCG5qOLMTB4MTBcIixcblx0XHRcInVzZVN0YW5kXCI6IHRydWUsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLkuqzlsIbmo4so5Y+z5Lqs6YWN572uKVwifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLkuqzlsIbmo4so5Y+z5Lqs6YWN572uKTJwXCJ9XG5cdFx0XVxuXHR9LFxuXHRcInNob0t5b1Nob2dpTGVmdFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5bCP5Lqs5bCG5qOLKOW3pue9ruaPmylcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNCVCQSVBQyVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIuahgummrOOCkuS6rOe/lOOBuOe9ruOBjeaPm+OBiOOBn+acrOWwhuaji+OAguW3puWPs+OBrumFjee9ruOBjOWtmOWcqOOAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiB0cnVlLFxuXHRcdFwicGxheVBpZWNlc1wiOiBbXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi5bCP5Lqs5bCG5qOLKOW3pue9ruaPmylcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi5bCP5Lqs5bCG5qOLKOW3pue9ruaPmykycFwifVxuXHRcdF1cblx0fSxcblx0XCJzaG9LeW9TaG9naVJpZ2h0XCI6IHtcblx0XHRcIm5hbWVcIjogXCLlsI/kuqzlsIbmo4so5Y+z572u5o+bKVwiLFxuXHRcdFwidmFyaWFudFwiOiBcIuWwhuaji1wiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9qYS53aWtpcGVkaWEub3JnL3dpa2kvJUU0JUJBJUFDJUU1JUIwJTg2JUU2JUEzJThCXCIsXG5cdFx0XCJkZXNjXCI6IFwi5bCP5Lqs5bCG5qOL44Gu5Y+z572u5o+b44OR44K/44O844Oz44CCXCIsXG5cdFx0XCJwbGF5Qm9hcmRcIjogXCLlsIbmo4tcIixcblx0XHRcInVzZVN0YW5kXCI6IHRydWUsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlsI/kuqzlsIbmo4so5Y+z572u5o+bKVwifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlsI/kuqzlsIbmo4so5Y+z572u5o+bKTJwXCJ9XG5cdFx0XVxuXHR9LFxuXHRcInNhbnNoYVNob2dpTGVmdFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5bGx6LuK5bCG5qOLKOW3pue9ruaPmylcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNCVCQSVBQyVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIummmei7iuOCkuWxsei7iuOBuOe9ruOBjeaPm+OBiOOBn+acrOWwhuaji+OAguW3puWPs+OBrumFjee9ruOBjOWtmOWcqOOAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiB0cnVlLFxuXHRcdFwicGxheVBpZWNlc1wiOiBbXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi5bGx6LuK5bCG5qOLKOW3pue9ruaPmylcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi5bGx6LuK5bCG5qOLKOW3pue9ruaPmykycFwifVxuXHRcdF1cblx0fSxcblx0XCJzYW5zaGFTaG9naVJpZ2h0XCI6IHtcblx0XHRcIm5hbWVcIjogXCLlsbHou4rlsIbmo4so5Y+z572u5o+bKVwiLFxuXHRcdFwidmFyaWFudFwiOiBcIuWwhuaji1wiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9qYS53aWtpcGVkaWEub3JnL3dpa2kvJUU0JUJBJUFDJUU1JUIwJTg2JUU2JUEzJThCXCIsXG5cdFx0XCJkZXNjXCI6IFwi5bGx6LuK5bCG5qOL44Gu5Y+z572u5o+b44OR44K/44O844Oz44CCXCIsXG5cdFx0XCJwbGF5Qm9hcmRcIjogXCLlsIbmo4tcIixcblx0XHRcInVzZVN0YW5kXCI6IHRydWUsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlsbHou4rlsIbmo4so5Y+z572u5o+bKVwifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlsbHou4rlsIbmo4so5Y+z572u5o+bKTJwXCJ9XG5cdFx0XVxuXHR9LFxuXHRcImRvU2hvZ2lMZWZ0XCI6IHtcblx0XHRcIm5hbWVcIjogXCLpioXlsIbmo4so5bem572u5o+bKVwiLFxuXHRcdFwidmFyaWFudFwiOiBcIuWwhuaji1wiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9qYS53aWtpcGVkaWEub3JnL3dpa2kvJUU0JUJBJUFDJUU1JUIwJTg2JUU2JUEzJThCXCIsXG5cdFx0XCJkZXNjXCI6IFwi6YqA5bCG44KS6YqF5bCG44G4572u44GN5o+b44GI44Gf5pys5bCG5qOL44CC5bem5Y+z44Gu6YWN572u44GM5a2Y5Zyo44CCXCIsXG5cdFx0XCJwbGF5Qm9hcmRcIjogXCLlsIbmo4tcIixcblx0XHRcInVzZVN0YW5kXCI6IHRydWUsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLpioXlsIbmo4so5bem572u5o+bKVwifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLpioXlsIbmo4so5bem572u5o+bKTJwXCJ9XG5cdFx0XVxuXHR9LFxuXHRcImRvU2hvZ2lSaWdodFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi6YqF5bCG5qOLKOWPs+e9ruaPmylcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNCVCQSVBQyVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIumKheWwhuaji+OBruWPs+e9ruaPm+ODkeOCv+ODvOODs+OAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiB0cnVlLFxuXHRcdFwicGxheVBpZWNlc1wiOiBbXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi6YqF5bCG5qOLKOWPs+e9ruaPmylcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi6YqF5bCG5qOLKOWPs+e9ruaPmykycFwifVxuXHRcdF1cblx0fSxcblx0XCJraW5zaGlTaG9naUxlZnRcIjoge1xuXHRcdFwibmFtZVwiOiBcIumHkee/heWwhuajiyjlt6bnva7mj5spXCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2phLndpa2lwZWRpYS5vcmcvd2lraS8lRTQlQkElQUMlRTUlQjAlODYlRTYlQTMlOEJcIixcblx0XHRcImRlc2NcIjogXCLph5HlsIbjgpLph5Hnv4Xjgbjnva7jgY3mj5vjgYjjgZ/mnKzlsIbmo4vjgILlt6blj7Pjga7phY3nva7jgYzlrZjlnKjjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuWwhuaji1wiLFxuXHRcdFwidXNlU3RhbmRcIjogdHJ1ZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIumHkee/heWwhuajiyjlt6bnva7mj5spXCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIumHkee/heWwhuajiyjlt6bnva7mj5spMnBcIn1cblx0XHRdXG5cdH0sXG5cdFwia2luc2hpU2hvZ2lSaWdodFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi6YeR57+F5bCG5qOLKOWPs+e9ruaPmylcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNCVCQSVBQyVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIumHkee/heWwhuaji+OBruWPs+e9ruaPm+ODkeOCv+ODvOODs+OAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiB0cnVlLFxuXHRcdFwicGxheVBpZWNlc1wiOiBbXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi6YeR57+F5bCG5qOLKOWPs+e9ruaPmylcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi6YeR57+F5bCG5qOLKOWPs+e9ruaPmykycFwifVxuXHRcdF1cblx0fSxcblx0XCJraW50b1Nob2dpTGVmdFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi6YeR5paX5bCG5qOLKOW3pue9ruaPmylcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNCVCQSVBQyVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIumHkeWwhuOCkumHkee/heOBuOe9ruOBjeaPm+OBiOOBn+acrOWwhuaji+OAguW3puWPs+OBrumFjee9ruOBjOWtmOWcqOOAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiB0cnVlLFxuXHRcdFwicGxheVBpZWNlc1wiOiBbXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi6YeR5paX5bCG5qOLKOW3pue9ruaPmylcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi6YeR5paX5bCG5qOLKOW3pue9ruaPmykycFwifVxuXHRcdF1cblx0fSxcblx0XCJraW50b1Nob2dpUmlnaHRcIjoge1xuXHRcdFwibmFtZVwiOiBcIumHkeaWl+Wwhuajiyjlj7Pnva7mj5spXCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2phLndpa2lwZWRpYS5vcmcvd2lraS8lRTQlQkElQUMlRTUlQjAlODYlRTYlQTMlOEJcIixcblx0XHRcImRlc2NcIjogXCLph5HmlpflsIbmo4vjga7lj7Pnva7mj5vjg5Hjgr/jg7zjg7PjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuWwhuaji1wiLFxuXHRcdFwidXNlU3RhbmRcIjogdHJ1ZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIumHkeaWl+Wwhuajiyjlj7Pnva7mj5spXCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIumHkeaWl+Wwhuajiyjlj7Pnva7mj5spMnBcIn1cblx0XHRdXG5cdH0sXG5cdFwic2hvZ2kzMEFsbExlZnRcIjoge1xuXHRcdFwibmFtZVwiOiBcIuWwhuajizMwKyso5bem57O744OV44Or572u5o+bKVwiLFxuXHRcdFwidmFyaWFudFwiOiBcIuWwhuaji1wiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9qYS53aWtpcGVkaWEub3JnL3dpa2kvJUU0JUJBJUFDJUU1JUIwJTg2JUU2JUEzJThCXCIsXG5cdFx0XCJkZXNjXCI6IFwi5Lqs5bCG5qOL57O744Gu6aeS44Gn6KSH5pWw572u5o+b44GX44Gf5pys5bCG5qOL44CC5bem5Y+z44Gu6YWN572u44GM5a2Y5Zyo44CCXCIsXG5cdFx0XCJwbGF5Qm9hcmRcIjogXCLlsIbmo4tcIixcblx0XHRcInVzZVN0YW5kXCI6IHRydWUsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlsIbmo4szMCsrKOW3puezu+ODleODq+e9ruaPmylcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi5bCG5qOLMzArKyjlt6bns7vjg5Xjg6vnva7mj5spMnBcIn1cblx0XHRdXG5cdH0sXG5cdFwic2hvZ2kzMEFsbFJpZ2h0XCI6IHtcblx0XHRcIm5hbWVcIjogXCLlsIbmo4szMCsrKOWPs+ezu+ODleODq+e9ruaPmylcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNCVCQSVBQyVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIuWwhuajizMwKyvjga7lj7Pnva7mj5vjg5Hjgr/jg7zjg7PjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuWwhuaji1wiLFxuXHRcdFwidXNlU3RhbmRcIjogdHJ1ZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIuWwhuajizMwKyso5Y+z57O744OV44Or572u5o+bKVwifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlsIbmo4szMCsrKOWPs+ezu+ODleODq+e9ruaPmykycFwifVxuXHRcdF1cblx0fSxcblx0XCJva2lzYWtpU2hvZ2lcIjoge1xuXHRcdFwibmFtZVwiOiBcIuW+oeWmg+Wwhuaji1wiLFxuXHRcdFwidmFyaWFudFwiOiBcIuWwhuaji1wiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvT2tpc2FraV9zaG9naVwiLFxuXHRcdFwiZGVzY1wiOiBcIuODgeOCp+OCueOBruimgee0oOOCkuWPluOCiuWFpeOCjOOBn+acrOWwhuaji+OAgummmei7iuOBr+aEj+Wbs+OBl+OBpuWPjei7iuOBqOOBl+OBpuihqOekuuOBl+OBn+OAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5bCG5qOLMTB4MTBcIixcblx0XHRcInVzZVN0YW5kXCI6IHRydWUsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlvqHlpoPlsIbmo4tcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi5b6h5aaD5bCG5qOLMnBcIn1cblx0XHRdXG5cdH0sXG5cdFwiY3JhenlIb3VzZVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Kv44Os44O844K444O844OP44Km44K5XCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi44OB44Kn44K5XCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2phLndpa2lwZWRpYS5vcmcvd2lraS8lRTMlODIlQUYlRTMlODMlQUMlRTMlODMlQkMlRTMlODIlQjglRTMlODMlQkMlRTMlODMlOEYlRTMlODIlQTYlRTMlODIlQjlcIixcblx0XHRcImRlc2NcIjogXCLmjIHjgaHpp5LjgYzkvb/nlKjjgafjgY3jgovjg4HjgqfjgrnjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuOCr+ODrOODvOOCuOODvOODj+OCpuOCuVwiLFxuXHRcdFwidXNlU3RhbmRcIjogdHJ1ZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIiwgXCJwaWVjZVNldFwiOiBcImRlZmF1bHRcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLCBcInBpZWNlU2V0XCI6IFwiMnBcIn1cblx0XHRdXG5cdH0sXG5cdFwibG9zQWxhbW9zQ2hlc3NcIjoge1xuXHRcdFwibmFtZVwiOiBcIuODreOCueOCouODqeODouOCueODgeOCp+OCuVwiLFxuXHRcdFwidmFyaWFudFwiOiBcIuODgeOCp+OCuVwiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTG9zX0FsYW1vc19jaGVzc1wiLFxuXHRcdFwiZGVzY1wiOiBcIuewoeeVpeWMluOBleOCjOOBn+ODgeOCp+OCueOAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi44OB44Kn44K5Nng2XCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiBmYWxzZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIiwgXCJwaWVjZVNldFwiOiBcImRlZmF1bHRcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLCBcInBpZWNlU2V0XCI6IFwiMnBcIn1cblx0XHRdXG5cdH0sXG5cdFwiY2FwYWJsYW5jYUNoZXNzXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgqvjg5Hjg5bjg6njg7Pjgqvjg4HjgqfjgrlcIixcblx0XHRcInZhcmlhbnRcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NhcGFibGFuY2FfY2hlc3NcIixcblx0XHRcImRlc2NcIjogXCLjg57jg7zjgrfjg6Pjg6so44Ko44Oz44OX44Os44K5KeOAgeOCq+ODvOODh+OCo+ODiuODqyjjg5fjg6rjg7Pjgrvjgrkp44KS6L+95Yqg44GX44Gf44OB44Kn44K544CCXCIsXG5cdFx0XCJwbGF5Qm9hcmRcIjogXCLjg4HjgqfjgrkxMHg4XCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiBmYWxzZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIiwgXCJwaWVjZVNldFwiOiBcIuOCq+ODkeODluODqeODs+OCq+ODgeOCp+OCuVwifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsIFwicGllY2VTZXRcIjogXCLjgqvjg5Hjg5bjg6njg7Pjgqvjg4HjgqfjgrkycFwifVxuXHRcdF1cblx0fSxcblx0XCJncmFuZENoZXNzXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgrDjg6njg7Pjg4njg4HjgqfjgrlcIixcblx0XHRcInZhcmlhbnRcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dyYW5kX0NoZXNzXCIsXG5cdFx0XCJkZXNjXCI6IFwi44Kr44OR44OW44Op44Oz44Kr44OB44Kn44K544Go5ZCM5qeY44Gu6aeS44KS5L2/55So44GZ44KL44GM6YWN572u44GM55Ww44Gq44KL44CCXCIsXG5cdFx0XCJwbGF5Qm9hcmRcIjogXCLjg4HjgqfjgrkxMHgxMFwiLFxuXHRcdFwidXNlU3RhbmRcIjogZmFsc2UsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsIFwicGllY2VTZXRcIjogXCLjgrDjg6njg7Pjg4njg4HjgqfjgrlcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLCBcInBpZWNlU2V0XCI6IFwi44Kw44Op44Oz44OJ44OB44Kn44K5MnBcIn1cblx0XHRdXG5cdH0sXG5cdFwiZ29yb2dvcm9Eb2J1dHN1U2hvZ2lcIjoge1xuXHRcdFwibmFtZVwiOiBcIuOBlOOCjeOBlOOCjeOBqeOBhuOBtuOBpOOBl+OCh+OBhuOBjlwiLFxuXHRcdFwidmFyaWFudFwiOiBcIuOBqeOBhuOBtuOBpOOBl+OCh+OBhuOBjlwiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuc2lsdmVyc3Rhci5jby5qcC8wMnByb2R1Y3RzL2RvYnV0c3VzaG9naS9zd2l0Y2gvZ29yb2dvcm8uaHRtbFwiLFxuXHRcdFwiZGVzY1wiOiBcIuOAjOOBjeOCiuOCk+OAjeOBqOOAjOOBnuOBhuOAjeOBruS7o+OCj+OCiuOBq+OAjOOBhOOBrOOAjSjph5HlsIYp44Go44CM44Gt44GT44CNKOmKgOWwhinjgpLov73liqDjgZfjgZ/jganjgYbjgbbjgaTjgZfjgofjgYbjgY7jgII1NjU25bCG5qOL44Gu44Gp44GG44G244Gk44GX44KH44GG44GO54mI44CCXCIsXG5cdFx0XCJwbGF5Qm9hcmRcIjogXCLjgZTjgo3jgZTjgo3jganjgYbjgbbjgaTjgZfjgofjgYbjgY5cIixcblx0XHRcInVzZVN0YW5kXCI6IHRydWUsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44Gp44GG44G244Gk44GX44KH44GG44GOXCIsIFwicGllY2VTZXRcIjogXCJkZWZhdWx0XCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLjganjgYbjgbbjgaTjgZfjgofjgYbjgY5cIiwgXCJwaWVjZVNldFwiOiBcImRlZmF1bHRcIn1cblx0XHRdXG5cdH0sXG5cdFwic2hpc2hpU2hvZ2lcIjoge1xuXHRcdFwibmFtZVwiOiBcIueNheWtkOWwhuaji1wiLFxuXHRcdFwidmFyaWFudFwiOiBcIuS4reWwhuaji1wiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZW1yT21FMVhoLXNSOHdBcFRPaWtFZ1hER1ZhQVlyck8vdmlld1wiLFxuXHRcdFwiZGVzY1wiOiBcIuS4reWwhuaji+OCkumBiuOBs+OChOOBmeOBj+OBmeOCi+OCiOOBhuiAg+ahiOOBleOCjOOBn+Wwhuaji+OBruS4gOeoruOAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5Y+k5bCG5qOLOXg5XCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiBmYWxzZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIueNheWtkOWwhuaji1wifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLnjYXlrZDlsIbmo4sycFwifVxuXHRcdF1cblx0fSxcblx0XCJoZWlzZWlTaG9naVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5bmz5oiQ5bCG5qOLXCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi5Lit5bCG5qOLXCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwOi8vYWthc2FrYTB4MTYuYmxvZy5mYzIuY29tL2Jsb2ctZW50cnktMTMwLmh0bWxcIixcblx0XHRcImRlc2NcIjogXCLkuK3lsIbmo4vjgpLpgYrjgbPjgoTjgZnjgY/jgZnjgovjgojjgYbogIPmoYjjgZXjgozjgZ/lsIbmo4vjga7kuIDnqK7jgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuWPpOWwhuajizEweDEwXCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiBmYWxzZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIuW5s+aIkOWwhuaji1wifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlubPmiJDlsIbmo4sycFwifVxuXHRcdF1cblx0fSxcblx0XCJkYWlTaG9naVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5aSn5bCG5qOLXCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi5Lit5bCG5qOLXCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2phLndpa2lwZWRpYS5vcmcvd2lraS8lRTUlQTQlQTclRTUlQjAlODYlRTYlQTMlOEJcIixcblx0XHRcImRlc2NcIjogXCLkuK3lsIbmo4vjga7npZblhYjjgajjgZXjgozjgovlj6TlsIbmo4vjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuWPpOWwhuajizE1eDE1XCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiBmYWxzZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIuWkp+Wwhuaji1wifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlpKflsIbmo4sycFwifVxuXHRcdF1cblx0fSxcblx0XCJjb3VyaWVyQ2hlc3NcIjoge1xuXHRcdFwibmFtZVwiOiBcIuOCr+ODvOODquOCqOODgeOCp+OCuSjliJ3mnJ/phY3nva4pXCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi44Kv44O844Oq44Ko44OB44Kn44K5KOWumuW9oumFjee9rilcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvdXJpZXJfY2hlc3NcIixcblx0XHRcImRlc2NcIjogXCLjgq/jg7zjg6rjgqjjg4Hjgqfjgrnjga7lrprlvaLnp7vli5XjgpLooYzjgo/jgarjgYTphY3nva7jgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuODgeOCp+OCuTEyeDhcIixcblx0XHRcInVzZVN0YW5kXCI6IGZhbHNlLFxuXHRcdFwicGxheVBpZWNlc1wiOiBbXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLCBcInBpZWNlU2V0XCI6IFwi44Kv44O844Oq44Ko44OB44Kn44K5KOWIneacn+mFjee9rilcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLCBcInBpZWNlU2V0XCI6IFwi44Kv44O844Oq44Ko44OB44Kn44K5KOWIneacn+mFjee9rikycFwifVxuXHRcdF1cblx0fSxcblx0XCJwNFNob2dpXCI6IHtcblx0XHRcIm5hbWVcIjogXCLlm5vkurrlsIbmo4tcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNSU5QiU5QiVFNCVCQSVCQSVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIjTkurrnlKjjga7lsIbmo4vjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuWwhuaji1wiLFxuXHRcdFwidXNlU3RhbmRcIjogdHJ1ZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcInA0XCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcInA0XCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcInA0XCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcInA0XCJ9XG5cdFx0XVxuXHR9LFxuXHRcInA0Q2hlc3NcIjoge1xuXHRcdFwibmFtZVwiOiBcIjTkurrjg4HjgqfjgrlcIixcblx0XHRcInZhcmlhbnRcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0ZvdXItcGxheWVyX2NoZXNzXCIsXG5cdFx0XCJkZXNjXCI6IFwiNOS6uueUqOOBruODgeOCp+OCueOAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwiNOS6uuODgeOCp+OCuVwiLFxuXHRcdFwidXNlU3RhbmRcIjogZmFsc2UsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsIFwicGllY2VTZXRcIjogXCJwNFwifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsIFwicGllY2VTZXRcIjogXCJwNFwifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsIFwicGllY2VTZXRcIjogXCJwNFwifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsIFwicGllY2VTZXRcIjogXCJwNFwifVxuXHRcdF1cblx0fSxcblx0XCJnNFNob2dpXCI6IHtcblx0XHRcIm5hbWVcIjogXCLlm5vnpZ7lsIbmo4tcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNSU5QiU5QiVFNyVBNSU5RSVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIuODhuODrOODk+eUqOOBruS8geeUu+OBqOOBl+OBpuiAg+ahiOOBleOCjOOBnzTkurrnlKjjga7lsIbmo4vjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuWbm+elnuWwhuaji1wiLFxuXHRcdFwidXNlU3RhbmRcIjogdHJ1ZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcInA0XCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcInA0XCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcInA0XCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcInA0XCJ9XG5cdFx0XVxuXHR9LFxuXHRcImNoYXR1cmFqaVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OB44Oj44OI44Op44K4XCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi44OB44Oj44OI44Op44Oz44KsXCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2phLndpa2lwZWRpYS5vcmcvd2lraS8lRTMlODMlODElRTMlODMlQTMlRTMlODMlODglRTMlODMlQTklRTMlODIlQjhcIixcblx0XHRcImRlc2NcIjogXCLjg4Hjg6Pjg4jjg6njg7Pjgqzjga405Lq655So44Gu44OQ44Oq44Ko44O844K344On44Oz44CC44OA44Kk44K544Gn5YuV44GL44GZ6aeS44KS5rG644KB44Gm44GE44Gf44CCXCIsXG5cdFx0XCJwbGF5Qm9hcmRcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcInVzZVN0YW5kXCI6IGZhbHNlLFxuXHRcdFwicGxheVBpZWNlc1wiOiBbXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuODgeODo+ODiOODqeODs+OCrFwiLCBcInBpZWNlU2V0XCI6IFwicDRcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuODgeODo+ODiOODqeODs+OCrFwiLCBcInBpZWNlU2V0XCI6IFwicDRcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuODgeODo+ODiOODqeODs+OCrFwiLCBcInBpZWNlU2V0XCI6IFwicDRcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuODgeODo+ODiOODqeODs+OCrFwiLCBcInBpZWNlU2V0XCI6IFwicDRcIn1cblx0XHRdXG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcblx0XCLlsIbmo4tcIjoge1xuXHRcdFwiZW5nbGlzaFwiOiBcIlNob2dpXCIsXG5cdFx0XCJmb250Q29sb3JcIjogXCIjMDAwMDAwXCIsXG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZEREFBXCIsXG5cdFx0XCJwcm9tb0xpbmVcIjogMyxcblx0XHRcInBvc2l0aW9uXCI6IHtcblx0XHRcdFwiNVwiOiB7XG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBbXG5cdFx0XHRcdFx0XCLmranjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIueOiemHkemKgOinkumjm1wiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiMnBcIjogW1xuXHRcdFx0XHRcdFwi5q2p44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLnmofph5HpioDop5Lpo5tcIlxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCI3XCI6IHtcblx0XHRcdFx0XCLnpr3lsIbmo4tcIjogW1xuXHRcdFx0XHRcdFwi44O744O744O744O754eV44O744O7XCIsXG5cdFx0XHRcdFx0XCLnh5Xnh5Xnh5Xnh5Xnh5Xnh5Xnh5VcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+m3ueODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi6baJ6ZuJ6ba06bWs6ba06ZuJ5LqrXCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiOFwiOiB7XG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+ODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5qGC6YqA546J6YeR6YqA5qGC6aaZXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCIycFwiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+ODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5qGC6YqA55qH6YeR6YqA5qGC6aaZXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLlubPlronlsIbmo4tcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIummmeahgumKgOeOiemHkemKgOahgummmVwiXG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcIjlcIjoge1xuXHRcdFx0XHRcImRlZmF1bHRcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7tcIixcblx0XHRcdFx0XHRcIummmeahgumKgOmHkeeOiemHkemKgOahgummmVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiMnBcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7tcIixcblx0XHRcdFx0XHRcIummmeahgumKgOmHkeeah+mHkemKgOahgummmVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5bCP5Lqs5bCG5qOLKOW3pue9ruaPmylcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7tcIixcblx0XHRcdFx0XHRcIummmeS6rOmKgOmHkeeOiemHkemKgOahgummmVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5bCP5Lqs5bCG5qOLKOW3pue9ruaPmykycFwiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+ODu+ODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5Lqs6YqA6YeR55qH6YeR6YqA5qGC6aaZXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLlsI/kuqzlsIbmo4so5Y+z572u5o+bKVwiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+ODu+ODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5qGC6YqA6YeR546J6YeR6YqA5Lqs6aaZXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLlsI/kuqzlsIbmo4so5Y+z572u5o+bKTJwXCI6IFtcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi44O76KeS44O744O744O744O744O76aOb44O7XCIsXG5cdFx0XHRcdFx0XCLpppnmoYLpioDph5Hnmofph5HpioDkuqzppplcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuWxsei7iuWwhuajiyjlt6bnva7mj5spXCI6IFtcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi44O76KeS44O744O744O744O744O76aOb44O7XCIsXG5cdFx0XHRcdFx0XCLlsbHmoYLpioDph5Hnjonph5HpioDmoYLppplcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuWxsei7iuWwhuajiyjlt6bnva7mj5spMnBcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7tcIixcblx0XHRcdFx0XHRcIuWxseahgumKgOmHkeeah+mHkemKgOahgummmVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5bGx6LuK5bCG5qOLKOWPs+e9ruaPmylcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7tcIixcblx0XHRcdFx0XHRcIummmeahgumKgOmHkeeOiemHkemKgOahguWxsVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5bGx6LuK5bCG5qOLKOWPs+e9ruaPmykycFwiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+ODu+ODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5qGC6YqA6YeR55qH6YeR6YqA5qGC5bGxXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLpioXlsIbmo4so5bem572u5o+bKVwiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+ODu+ODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5qGC6YqF6YeR546J6YeR6YqA5qGC6aaZXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLpioXlsIbmo4so5bem572u5o+bKTJwXCI6IFtcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi44O76KeS44O744O744O744O744O76aOb44O7XCIsXG5cdFx0XHRcdFx0XCLpppnmoYLpioXph5Hnmofph5HpioDmoYLppplcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIumKheWwhuajiyjlj7Pnva7mj5spXCI6IFtcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi44O76KeS44O744O744O744O744O76aOb44O7XCIsXG5cdFx0XHRcdFx0XCLpppnmoYLpioDph5Hnjonph5HpioXmoYLppplcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIumKheWwhuajiyjlj7Pnva7mj5spMnBcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7tcIixcblx0XHRcdFx0XHRcIummmeahgumKgOmHkeeah+mHkemKheahgummmVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi6YeR57+F5bCG5qOLKOW3pue9ruaPmylcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7tcIixcblx0XHRcdFx0XHRcIummmeahgumKgOe/heeOiemHkemKgOahgummmVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi6YeR57+F5bCG5qOLKOW3pue9ruaPmykycFwiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+ODu+ODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5qGC6YqA57+F55qH6YeR6YqA5qGC6aaZXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLph5Hnv4XlsIbmo4so5Y+z572u5o+bKVwiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+ODu+ODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5qGC6YqA6YeR546J57+F6YqA5qGC6aaZXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLph5Hnv4XlsIbmo4so5Y+z572u5o+bKTJwXCI6IFtcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi44O76KeS44O744O744O744O744O76aOb44O7XCIsXG5cdFx0XHRcdFx0XCLpppnmoYLpioDph5Hnmofnv4XpioDmoYLppplcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIumHkeaWl+Wwhuajiyjlt6bnva7mj5spXCI6IFtcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi44O76KeS44O744O744O744O744O76aOb44O7XCIsXG5cdFx0XHRcdFx0XCLpppnmoYLpioDmlpfnjonph5HpioDmoYLppplcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIumHkeaWl+Wwhuajiyjlt6bnva7mj5spMnBcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7tcIixcblx0XHRcdFx0XHRcIummmeahgumKgOaWl+eah+mHkemKgOahgummmVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi6YeR5paX5bCG5qOLKOWPs+e9ruaPmylcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7tcIixcblx0XHRcdFx0XHRcIummmeahgumKgOmHkeeOieaWl+mKgOahgummmVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi6YeR5paX5bCG5qOLKOWPs+e9ruaPmykycFwiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+ODu+ODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5qGC6YqA6YeR55qH5paX6YqA5qGC6aaZXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLlsIbmo4szMCsrKOW3puezu+ODleODq+e9ruaPmylcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7tcIixcblx0XHRcdFx0XHRcIuWxseS6rOmKhee/heeOiemHkemKgOahgummmVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5bCG5qOLMzArKyjlt6bns7vjg5Xjg6vnva7mj5spMnBcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7tcIixcblx0XHRcdFx0XHRcIuWxseS6rOmKhee/heeah+mHkemKgOahgummmVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5bCG5qOLMzArKyjlj7Pns7vjg5Xjg6vnva7mj5spXCI6IFtcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi44O76KeS44O744O744O744O744O76aOb44O7XCIsXG5cdFx0XHRcdFx0XCLpppnmoYLpioDph5Hnjonnv4XpioXkuqzlsbFcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuWwhuajizMwKyso5Y+z57O744OV44Or572u5o+bKTJwXCI6IFtcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi44O76KeS44O744O744O744O744O76aOb44O7XCIsXG5cdFx0XHRcdFx0XCLpppnmoYLpioDph5Hnmofnv4XpioXkuqzlsbFcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuWwj+Wwhuaji1wiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+mGieODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5qGC6YqA6YeR546J6YeR6YqA5qGC6aaZXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLlsI/lsIbmo4sycFwiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+mGieODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5qGC6YqA6YeR55qH6YeR6YqA5qGC6aaZXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLnjYXlrZDlsIbmo4tcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vnorzjg7vnjYXphonlpZTjg7vnq5zjg7tcIixcblx0XHRcdFx0XHRcIummqOm6kuiJrumHoeeOiemHoeiJrumzs+mmqFwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi542F5a2Q5bCG5qOLMnBcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vnorzjg7vnjYXphonlpZTjg7vnq5zjg7tcIixcblx0XHRcdFx0XHRcIummqOm6kuiJrumHoeeah+mHoeiJrumzs+mmqFwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi56a95bCG5qOLXCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+ODu+ODu+eHleODu+ODu1wiLFxuXHRcdFx0XHRcdFwi54eV54eV54eV54eV54eV54eV54eV54eV54eVXCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vpt7njg7vpt7njg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIum2iembiem2tOODu+m1rOODu+m2tOmbieS6q1wiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwicDRcIjogW1xuXHRcdFx0XHRcdFwi44O744O744O744O75q2p44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vmranpo5vmranjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+mKgOmHkeeOiemHkemKgOODu+ODu1wiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5bmz5a6J5bCG5qOLXCI6IFtcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi44O744O744O744O744O744O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLpppnmoYLpioDph5Hnjonph5HpioDmoYLppplcIlxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCIxMFwiOiB7XG5cdFx0XHRcdFwi5Lqs5bCG5qOLKOW3puS6rOmFjee9rilcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vop5Ljg7vjg7vjg7vpioXjg7vjg7vpo5vjg7tcIixcblx0XHRcdFx0XHRcIummmeahguS6rOmKgOmHkeeOiemHkemKgOahgummmVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5Lqs5bCG5qOLKOW3puS6rOmFjee9rikycFwiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+ODu+mKheODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5qGC5Lqs6YqA6YeR55qH6YeR6YqA5qGC6aaZXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLkuqzlsIbmo4so5Y+z5Lqs6YWN572uKVwiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+mKheODu+ODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5qGC6YqA6YeR546J6YeR6YqA5Lqs5qGC6aaZXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLkuqzlsIbmo4so5Y+z5Lqs6YWN572uKTJwXCI6IFtcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi44O76KeS44O744O76YqF44O744O744O76aOb44O7XCIsXG5cdFx0XHRcdFx0XCLpppnmoYLpioDph5Hnmofph5HpioDkuqzmoYLppplcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuW5s+aIkOWwhuaji1wiOiBbXG5cdFx0XHRcdFx0XCLjg7vjg7vku7Ljg7vjg7vjg7vjg7vku7Ljg7vjg7tcIixcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi5qiq6aOb6KeS44O7542F5aWU44O76KeS6aOb5qiqXCIsXG5cdFx0XHRcdFx0XCLnq6rpupLoia7ph6Hnjonphonph6Hoia7ps7Pnq6pcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuW5s+aIkOWwhuajizJwXCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+S7suODu+ODu+ODu+ODu+S7suODu+ODu1wiLFxuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLmqKrpo5vop5Ljg7vnjYXlpZTjg7vop5Lpo5vmqKpcIixcblx0XHRcdFx0XHRcIuerqum6kuiJrumHoeeah+mGiemHoeiJrumzs+erqlwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5b6h5aaD5bCG5qOLXCI6IFtcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi44O76KeS44O744O744O744O744O744O76aOb44O7XCIsXG5cdFx0XHRcdFx0XCLov5Tot7PpioDph5HlpbPnjonph5HpioDot7Pov5RcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuW+oeWmg+WwhuajizJwXCI6IFtcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi44O76KeS44O744O744O744O744O744O76aOb44O7XCIsXG5cdFx0XHRcdFx0XCLov5Tot7PpioDph5HlpbPnmofph5HpioDot7Pov5RcIlxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCIxMlwiOiB7XG5cdFx0XHRcdFwi5Lit5bCG5qOLXCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+S7suODu+ODu+ODu+ODu+S7suODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLmqKrnq6rpo5vnorznq5znjYXlpZTnq5znorzpo5vnq6rmqKpcIixcblx0XHRcdFx0XHRcIuWPjeODu+inkuODu+iZjum6kumzs+iZjuODu+inkuODu+WPjVwiLFxuXHRcdFx0XHRcdFwi6aao54yb5ZCM6Imu6Yeh546J6YaJ6Yeh6Imu5ZCM54yb6aaoXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLkuK3lsIbmo4sycFwiOiBbXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vku7Ljg7vjg7vjg7vjg7vku7Ljg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi5qiq56uq6aOb56K856uc542F5aWU56uc56K86aOb56uq5qiqXCIsXG5cdFx0XHRcdFx0XCLlj43jg7vop5Ljg7vomY7pupLps7PomY7jg7vop5Ljg7vlj41cIixcblx0XHRcdFx0XHRcIummqOeMm+WQjOiJrumHoeeah+mGiemHoeiJruWQjOeMm+mmqFwiXG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcIjE0XCI6IHtcblx0XHRcdFx0XCJwNFwiOiBbXG5cblx0XHRcdFx0XHRcIuODu+ODu+ODu+atqeatqeatqeatqeatqeatqeatqeatqeODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O76KeS44O744O744O744O76aOb44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vpppnmoYLpioDnjonph5HpioDmoYLpppnjg7vjg7vjg7tcIlxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCIxNVwiOiB7XG5cdFx0XHRcdFwicDRcIjogW1xuXHRcdFx0XHRcdFwi44O744O744O75q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p44O744O744O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+mmmeahgumKgOmHkeeOiemHkemKgOahgummmeODu+ODu+ODu1wiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5aSn5bCG5qOLXCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+S7suODu+ODu+ODu+ODu+ODu+S7suODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLpo5vngKfmqKrnq6rop5Lnorznq5zlpZTnq5znorzop5Lnq6rmqKrngKfpo5tcIixcblx0XHRcdFx0XHRcIuODu+S4keODu+WXlOODu+eLvOm6kueNhemzs+eLvOODu+WXlOODu+S4keODu1wiLFxuXHRcdFx0XHRcdFwi5Y+N44O754yr44O754yb44O76JmO6YaJ6JmO44O754yb44O754yr44O75Y+NXCIsXG5cdFx0XHRcdFx0XCLppqjmoYLnn7PpiYTlkIzoia7ph6Hnjonph6Hoia7lkIzpiYTnn7PmoYLppqhcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuWkp+WwhuajizJwXCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+S7suODu+ODu+ODu+ODu+ODu+S7suODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLpo5vngKfmqKrnq6rop5Lnorznq5zlpZTnq5znorzop5Lnq6rmqKrngKfpo5tcIixcblx0XHRcdFx0XHRcIuODu+S4keODu+WXlOODu+eLvOm6kueNhemzs+eLvOODu+WXlOODu+S4keODu1wiLFxuXHRcdFx0XHRcdFwi5Y+N44O754yr44O754yb44O76JmO6YaJ6JmO44O754yb44O754yr44O75Y+NXCIsXG5cdFx0XHRcdFx0XCLppqjmoYLnn7PpiYTlkIzoia7ph6Hnmofph6Hoia7lkIzpiYTnn7PmoYLppqhcIlxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCIxN1wiOiB7XG5cdFx0XHRcdFwicDRcIjogW1xuXHRcdFx0XHRcdFwi44O744O744O744O75q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+mmmeahgumKgOmHkeeOiemHkemKgOahgummmeODu+ODu+ODu+ODu1wiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdFwi44OB44Kn44K5XCI6IHtcblx0XHRcImVuZ2xpc2hcIjogXCJDaGVzc1wiLFxuXHRcdFwiZm9udENvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwMDAwMFwiLFxuXHRcdFwicHJvbW9MaW5lXCI6IDEsXG5cdFx0XCJwb3NpdGlvblwiOiB7XG5cdFx0XHRcIjZcIjoge1xuXHRcdFx0XHRcImRlZmF1bHRcIjogW1xuXHRcdFx0XHRcdFwi5LiY5LiY5LiY5LiY5LiY5LiYXCIsXG5cdFx0XHRcdFx0XCLloZTpqI7lkI7njovpqI7loZRcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIjJwXCI6IFtcblx0XHRcdFx0XHRcIuS4mOS4mOS4mOS4mOS4mOS4mFwiLFxuXHRcdFx0XHRcdFwi5aGU6aiO5bid5ZCO6aiO5aGUXCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiOFwiOiB7XG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBbXG5cdFx0XHRcdFx0XCLlhbXlhbXlhbXlhbXlhbXlhbXlhbXlhbVcIixcblx0XHRcdFx0XHRcIuWhlOmojuiBluWQjueOi+iBlumojuWhlFwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiMnBcIjogW1xuXHRcdFx0XHRcdFwi5YW15YW15YW15YW15YW15YW15YW15YW1XCIsXG5cdFx0XHRcdFx0XCLloZTpqI7ogZbluJ3lkI7ogZbpqI7loZRcIlxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCI5XCI6IHtcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFtcblx0XHRcdFx0XHRcIuWFteWFteWFteWFteWFteWFteWFteWFteWFtVwiLFxuXHRcdFx0XHRcdFwi5aGU6aiO6IGW5ZCO44O7546L6IGW6aiO5aGUXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCIycFwiOiBbXG5cdFx0XHRcdFx0XCLlhbXlhbXlhbXlhbXlhbXlhbXlhbXlhbXlhbVcIixcblx0XHRcdFx0XHRcIuWhlOmojuiBluW4neODu+WQjuiBlumojuWhlFwiXG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcIjEwXCI6IHtcblx0XHRcdFx0XCLjgqvjg5Hjg5bjg6njg7Pjgqvjg4HjgqfjgrlcIjogW1xuXHRcdFx0XHRcdFwi5rWc5rWc5rWc5rWc5rWc5rWc5rWc5rWc5rWc5rWcXCIsXG5cdFx0XHRcdFx0XCLloZTpqI7pp67ogZblkI7lm73ogZbpp4bpqI7loZRcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuOCq+ODkeODluODqeODs+OCq+ODgeOCp+OCuTJwXCI6IFtcblx0XHRcdFx0XHRcIua1nOa1nOa1nOa1nOa1nOa1nOa1nOa1nOa1nOa1nFwiLFxuXHRcdFx0XHRcdFwi5aGU6aiO6aeG6IGW5ZyL5ZCO6IGW6aeu6aiO5aGUXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLjgrDjg6njg7Pjg4njg4HjgqfjgrlcIjogW1xuXHRcdFx0XHRcdFwi5rWc5rWc5rWc5rWc5rWc5rWc5rWc5rWc5rWc5rWcXCIsXG5cdFx0XHRcdFx0XCLjg7vpqI7ogZblkI7njovpp4bpp67ogZbpqI7jg7tcIixcblx0XHRcdFx0XHRcIuWhlOODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+WhlFwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi44Kw44Op44Oz44OJ44OB44Kn44K5MnBcIjogW1xuXHRcdFx0XHRcdFwi5rWc5rWc5rWc5rWc5rWc5rWc5rWc5rWc5rWc5rWcXCIsXG5cdFx0XHRcdFx0XCLjg7vpqI7ogZbpp67pp4bluJ3lkI7ogZbpqI7jg7tcIixcblx0XHRcdFx0XHRcIuWhlOODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+WhlFwiXG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcIjEyXCI6IHtcblx0XHRcdFx0XCJHcmFudEFjZWRyZXhcIjogW1xuXHRcdFx0XHRcdFwi5qK55qK55qK55qK55qK55qK55qK55qK55qK55qK55qK55qK5XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi56Cm5bir54qA6bqf6bCQ6bS75ZGI6bCQ6bqf54qA5bir56CmXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJHcmFudEFjZWRyZXgycFwiOiBbXG5cdFx0XHRcdFx0XCLmornmornmornmornmornmornmornmornmornmornmornmorlcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O744O744O744O744O744O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLnoKbluKvnioDpup/psJDpgJ7ptLvpsJDpup/nioDluKvnoKZcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuOCr+ODvOODquOCqOODgeOCp+OCuSjliJ3mnJ/phY3nva4pXCI6IFtcblx0XHRcdFx0XHRcIumLsumLsumLsumLsumLsumLsumLsumLsumLsumLsumLsumLslwiLFxuXHRcdFx0XHRcdFwi56Cm6aiO5bCE5L2/6LOi6ZaP5aa+5L2v5L2/5bCE6aiO56CmXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLjgq/jg7zjg6rjgqjjg4Hjgqfjgrko5Yid5pyf6YWN572uKTJwXCI6IFtcblx0XHRcdFx0XHRcIumLsumLsumLsumLsumLsumLsumLsumLsumLsumLsumLsumLslwiLFxuXHRcdFx0XHRcdFwi56Cm6aiO5bCE5L2/5L2v5aa+5r2k6LOi5L2/5bCE6aiO56CmXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLjgq/jg7zjg6rjgqjjg4Hjgqfjgrko5a6a5b2i6YWN572uKVwiOiBbXG5cdFx0XHRcdFx0XCLpi7Ljg7vjg7vjg7vjg7vjg7vpi7Ljg7vjg7vjg7vjg7vpi7JcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+ODu+ODu+WmvuODu+ODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O76Yuy6Yuy6Yuy6Yuy6Yuy44O76Yuy6Yuy6Yuy6Yuy44O7XCIsXG5cdFx0XHRcdFx0XCLnoKbpqI7lsITkvb/os6Lplo/jg7vkva/kvb/lsITpqI7noKZcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuOCr+ODvOODquOCqOODgeOCp+OCuSjlrprlvaLphY3nva4pMnBcIjogW1xuXHRcdFx0XHRcdFwi6Yuy44O744O744O744O76Yuy44O744O744O744O744O76YuyXCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vlpr7jg7vjg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuODu+mLsumLsumLsumLsuODu+mLsumLsumLsumLsumLsuODu1wiLFxuXHRcdFx0XHRcdFwi56Cm6aiO5bCE5L2/5L2v44O75r2k6LOi5L2/5bCE6aiO56CmXCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiMTRcIjoge1xuXHRcdFx0XHRcInA0XCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+WFteWFteWFteWFteWFteWFteWFteWFteODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O75aGU6aiO6IGW5ZCO546L6IGW6aiO5aGU44O744O744O7XCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiMTVcIjoge1xuXHRcdFx0XHRcInA0XCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+WFteWFteWFteWFteWFteWFteWFteWFteWFteODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O75aGU6aiO6IGW5ZCO44O7546L6IGW6aiO5aGU44O744O744O7XCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiMTdcIjoge1xuXHRcdFx0XHRcInA0XCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+WFteWFteWFteWFteWFteWFteWFteWFteWFteODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O75aGU6aiO6IGW5ZCO44O7546L6IGW6aiO5aGU44O744O744O744O7XCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0XCLjgrfjg6Pjg7Pjg4Hjg7xcIjoge1xuXHRcdFwiZW5nbGlzaFwiOiBcIlhpYW5ncWlcIixcblx0XHRcImZvbnRDb2xvclwiOiBcIiNCQjExMDBcIixcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkRENzdcIixcblx0XHRcInByb21vTGluZVwiOiA0LFxuXHRcdFwicG9zaXRpb25cIjoge1xuXHRcdFx0XCI4XCI6IHtcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFtcblx0XHRcdFx0XHRcIuWNkuODu+WNkuWNkuODu+WNkuODu+WNklwiLFxuXHRcdFx0XHRcdFwi44O754Ku44O744O744O744O754Ku44O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuS/pemmruebuOW4peS7leebuOmmruS/pVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiMnBcIjogW1xuXHRcdFx0XHRcdFwi5Y2S44O75Y2S44O75Y2S5Y2S44O75Y2SXCIsXG5cdFx0XHRcdFx0XCLjg7vngq7jg7vjg7vjg7vjg7vngq7jg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi5L+l6aau55u45LuV5bCH55u46aau5L+lXCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiOVwiOiB7XG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBbXG5cdFx0XHRcdFx0XCLljZLjg7vljZLjg7vljZLjg7vljZLjg7vljZJcIixcblx0XHRcdFx0XHRcIuODu+eCruODu+ODu+ODu+ODu+ODu+eCruODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O744O744O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLkv6Xppq7nm7jku5XluKXku5Xnm7jppq7kv6VcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIjJwXCI6IFtcblx0XHRcdFx0XHRcIuWNkuODu+WNkuODu+WNkuODu+WNkuODu+WNklwiLFxuXHRcdFx0XHRcdFwi44O754Ku44O744O744O744O744O754Ku44O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuS/pemmruebuOS7leWwh+S7leebuOmmruS/pVwiXG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcIjE0XCI6IHtcblx0XHRcdFx0XCJwNFwiOiBbXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vljZLjg7vljZLljZLjg7vljZLjg7vljZLjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+eCruODu+ODu+ODu+ODu+eCruODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O75L+l55u46aau5bil5LuV6aau55u45L+l44O744O744O7XCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiMTVcIjoge1xuXHRcdFx0XHRcInA0XCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+WNkuODu+WNkuODu+WNkuODu+WNkuODu+WNkuODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O754Ku44O744O744O744O744O754Ku44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vkv6Xnm7jppq7ku5XluKXku5Xppq7nm7jkv6Xjg7vjg7vjg7tcIlxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCIxN1wiOiB7XG5cdFx0XHRcdFwicDRcIjogW1xuXHRcdFx0XHRcdFwi44O744O744O744O75Y2S44O75Y2S44O75Y2S44O75Y2S44O75Y2S44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vngq7jg7vjg7vjg7vjg7vjg7vngq7jg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O75L+l6aau55u45LuV5bil5LuV55u46aau5L+l44O744O744O744O7XCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0XCLjg4Hjg6Pjg7Pjgq5cIjoge1xuXHRcdFwiZW5nbGlzaFwiOiBcIkphbmdnaVwiLFxuXHRcdFwiZm9udENvbG9yXCI6IFwiIzAwODgwMFwiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuXHRcdFwicG9zaXRpb25cIjoge1xuXHRcdFx0XCI4XCI6IHtcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFtcblx0XHRcdFx0XHRcIuWNhuODu+WNhuWNhuODu+WNhuODu+WNhlwiLFxuXHRcdFx0XHRcdFwi44O75YyF44O744O744O744O75YyF44O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vmpZrjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIui7iummreixoeODu+Wjq+ixoemmrei7ilwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiMnBcIjogW1xuXHRcdFx0XHRcdFwi5Y2G44O75Y2G44O75Y2G5Y2G44O75Y2GXCIsXG5cdFx0XHRcdFx0XCLjg7vljIXjg7vjg7vjg7vjg7vljIXjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+a8ouODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi6LuK6aat6LGh5aOr44O76LGh6aat6LuKXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLlt6bosaHphY3nva5cIjogW1xuXHRcdFx0XHRcdFwi5Y2G44O75Y2G5Y2G44O75Y2G44O75Y2GXCIsXG5cdFx0XHRcdFx0XCLjg7vljIXjg7vjg7vjg7vjg7vljIXjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+almuODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi6LuK6LGh6aat44O75aOr6LGh6aat6LuKXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLlt6bosaHphY3nva4ycFwiOiBbXG5cdFx0XHRcdFx0XCLljYbjg7vljYbjg7vljYbljYbjg7vljYZcIixcblx0XHRcdFx0XHRcIuODu+WMheODu+ODu+ODu+ODu+WMheODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O75ryi44O744O744O7XCIsXG5cdFx0XHRcdFx0XCLou4rosaHppq3lo6vjg7vosaHppq3ou4pcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuWPs+ixoemFjee9rlwiOiBbXG5cdFx0XHRcdFx0XCLljYbjg7vljYbljYbjg7vljYbjg7vljYZcIixcblx0XHRcdFx0XHRcIuODu+WMheODu+ODu+ODu+ODu+WMheODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O75qWa44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLou4rppq3osaHjg7vlo6vppq3osaHou4pcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuWPs+ixoemFjee9rjJwXCI6IFtcblx0XHRcdFx0XHRcIuWNhuODu+WNhuODu+WNhuWNhuODu+WNhlwiLFxuXHRcdFx0XHRcdFwi44O75YyF44O744O744O744O75YyF44O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vmvKLjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIui7iummreixoeWjq+ODu+mmreixoei7ilwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5aSW6LGh6YWN572uXCI6IFtcblx0XHRcdFx0XHRcIuWNhuODu+WNhuWNhuODu+WNhuODu+WNhlwiLFxuXHRcdFx0XHRcdFwi44O75YyF44O744O744O744O75YyF44O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vmpZrjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIui7iuixoemmreODu+Wjq+mmreixoei7ilwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5aSW6LGh6YWN572uMnBcIjogW1xuXHRcdFx0XHRcdFwi5Y2G44O75Y2G44O75Y2G5Y2G44O75Y2GXCIsXG5cdFx0XHRcdFx0XCLjg7vljIXjg7vjg7vjg7vjg7vljIXjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+a8ouODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi6LuK6LGh6aat5aOr44O76aat6LGh6LuKXCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiOVwiOiB7XG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBbXG5cdFx0XHRcdFx0XCLljYbjg7vljYbjg7vljYbjg7vljYbjg7vljYZcIixcblx0XHRcdFx0XHRcIuODu+WMheODu+ODu+ODu+ODu+ODu+WMheODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O75qWa44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLou4rppq3osaHlo6vjg7vlo6vosaHppq3ou4pcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIjJwXCI6IFtcblx0XHRcdFx0XHRcIuWNhuODu+WNhuODu+WNhuODu+WNhuODu+WNhlwiLFxuXHRcdFx0XHRcdFwi44O75YyF44O744O744O744O744O75YyF44O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vmvKLjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIui7iummreixoeWjq+ODu+Wjq+ixoemmrei7ilwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5bem6LGh6YWN572uXCI6IFtcblx0XHRcdFx0XHRcIuWNhuODu+WNhuODu+WNhuODu+WNhuODu+WNhlwiLFxuXHRcdFx0XHRcdFwi44O75YyF44O744O744O744O744O75YyF44O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vmpZrjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIui7iuixoemmreWjq+ODu+Wjq+ixoemmrei7ilwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5bem6LGh6YWN572uMnBcIjogW1xuXHRcdFx0XHRcdFwi5Y2G44O75Y2G44O75Y2G44O75Y2G44O75Y2GXCIsXG5cdFx0XHRcdFx0XCLjg7vljIXjg7vjg7vjg7vjg7vjg7vljIXjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+a8ouODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi6LuK6LGh6aat5aOr44O75aOr6LGh6aat6LuKXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLlj7PosaHphY3nva5cIjogW1xuXHRcdFx0XHRcdFwi5Y2G44O75Y2G44O75Y2G44O75Y2G44O75Y2GXCIsXG5cdFx0XHRcdFx0XCLjg7vljIXjg7vjg7vjg7vjg7vjg7vljIXjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+almuODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi6LuK6aat6LGh5aOr44O75aOr6aat6LGh6LuKXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLlj7PosaHphY3nva4ycFwiOiBbXG5cdFx0XHRcdFx0XCLljYbjg7vljYbjg7vljYbjg7vljYbjg7vljYZcIixcblx0XHRcdFx0XHRcIuODu+WMheODu+ODu+ODu+ODu+ODu+WMheODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O75ryi44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLou4rppq3osaHlo6vjg7vlo6vppq3osaHou4pcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuWkluixoemFjee9rlwiOiBbXG5cdFx0XHRcdFx0XCLljYbjg7vljYbjg7vljYbjg7vljYbjg7vljYZcIixcblx0XHRcdFx0XHRcIuODu+WMheODu+ODu+ODu+ODu+ODu+WMheODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O75qWa44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLou4rosaHppq3lo6vjg7vlo6vppq3osaHou4pcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuWkluixoemFjee9rjJwXCI6IFtcblx0XHRcdFx0XHRcIuWNhuODu+WNhuODu+WNhuODu+WNhuODu+WNhlwiLFxuXHRcdFx0XHRcdFwi44O75YyF44O744O744O744O744O75YyF44O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vmvKLjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIui7iuixoemmreWjq+ODu+Wjq+mmreixoei7ilwiXG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcIjE0XCI6IHtcblx0XHRcdFx0XCJwNFwiOiBbXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vljYbjg7vljYbljYbjg7vljYbjg7vljYbjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+WMheODu+almuODu+ODu+WMheODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O76LuK6LGh6aat44O75aOr6aat6LGh6LuK44O744O744O7XCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiMTVcIjoge1xuXHRcdFx0XHRcInA0XCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+WNhuODu+WNhuODu+WNhuODu+WNhuODu+WNhuODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O75YyF44O744O75qWa44O744O75YyF44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vou4rosaHppq3lo6vjg7vlo6vppq3osaHou4rjg7vjg7vjg7tcIlxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCIxN1wiOiB7XG5cdFx0XHRcdFwicDRcIjogW1xuXHRcdFx0XHRcdFwi44O744O744O744O75Y2G44O75Y2G44O75Y2G44O75Y2G44O75Y2G44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vljIXjg7vjg7vjg7vjg7vjg7vljIXjg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+almuODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O76LuK6aat6LGh5aOr44O75aOr6LGh6aat6LuK44O744O744O744O7XCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0XCLjg57jg7zjgq/jg6vjg4Pjgq9cIjoge1xuXHRcdFwiZW5nbGlzaFwiOiBcIk1ha3J1a1wiLFxuXHRcdFwiZm9udENvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0NDMjIyMlwiLFxuXHRcdFwicHJvbW9MaW5lXCI6IDMsXG5cdFx0XCJwb3NpdGlvblwiOiB7XG5cdFx0XHRcIjhcIjoge1xuXHRcdFx0XHRcImRlZmF1bHRcIjogW1xuXHRcdFx0XHRcdFwi6LKd6LKd6LKd6LKd6LKd6LKd6LKd6LKdXCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuiIueeRquagueWQm+eoruagueeRquiIuVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiMnBcIjogW1xuXHRcdFx0XHRcdFwi6LKd6LKd6LKd6LKd6LKd6LKd6LKd6LKdXCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuiIueeRquagueWFrOeoruagueeRquiIuVwiXG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcIjlcIjoge1xuXHRcdFx0XHRcImRlZmF1bHRcIjogW1xuXHRcdFx0XHRcdFwi6LKd6LKd6LKd6LKd6LKd6LKd6LKd6LKd6LKdXCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuiIueeRquagueeoruWQm+eoruagueeRquiIuVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiMnBcIjogW1xuXHRcdFx0XHRcdFwi6LKd6LKd6LKd6LKd6LKd6LKd6LKd6LKd6LKdXCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuiIueeRquagueeoruWFrOeoruagueeRquiIuVwiXG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcIjE0XCI6IHtcblx0XHRcdFx0XCJwNFwiOiBbXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vosp3osp3osp3osp3osp3osp3osp3osp3jg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O76Ii555Gq5qC55ZCb56iu5qC555Gq6Ii544O744O744O7XCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiMTVcIjoge1xuXHRcdFx0XHRcInA0XCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+iyneiyneiyneiyneiyneiyneiyneiyneiyneODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O744O744O744O744O744O744O744O744O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7voiLnnkarmoLnnqK7lkJvnqK7moLnnkaroiLnjg7vjg7vjg7tcIlxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCIxN1wiOiB7XG5cdFx0XHRcdFwicDRcIjogW1xuXHRcdFx0XHRcdFwi44O744O744O744O76LKd6LKd6LKd6LKd6LKd6LKd6LKd6LKd6LKd44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+iIueeRquagueeoruWQm+eoruagueeRquiIueODu+ODu+ODu+ODu1wiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdFwi44OB44Oj44OI44Op44Oz44KsXCI6IHtcblx0XHRcImVuZ2xpc2hcIjogXCJDaGF0dXJhbmdhXCIsXG5cdFx0XCJmb250Q29sb3JcIjogXCIjNjY2NjY2XCIsXG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkVFXCIsXG5cdFx0XCJwcm9tb0xpbmVcIjogLTEsXG5cdFx0XCJwb3NpdGlvblwiOiB7XG5cdFx0XHRcIjhcIjoge1xuXHRcdFx0XHRcImRlZmF1bHRcIjogW1xuXHRcdFx0XHRcdFwi5pyo54Gr5aSp5aSu5aSn5aSp54Gr5pyoXCIsXG5cdFx0XHRcdFx0XCLmiKbljYjlg4/kuLvoh6Plg4/ljYjmiKZcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIjJwXCI6IFtcblx0XHRcdFx0XHRcIuacqOeBq+WkqeWkruWkp+WkqeeBq+acqFwiLFxuXHRcdFx0XHRcdFwi5oim5Y2I5YOP5p+x6Iej5YOP5Y2I5oimXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJwNFwiOiBbXG5cdFx0XHRcdFx0XCLnn6LngavmnKzlpK7jg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuiIn+WNiOixleS4u+ODu+ODu+ODu+ODu1wiXG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcIjlcIjoge1xuXHRcdFx0XHRcImRlZmF1bHRcIjogW1xuXHRcdFx0XHRcdFwi5pyo54Gr5aSp5aSn5aSu5aSn5aSp54Gr5pyoXCIsXG5cdFx0XHRcdFx0XCLmiKbljYjlg4/oh6PkuLvoh6Plg4/ljYjmiKZcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIjJwXCI6IFtcblx0XHRcdFx0XHRcIuacqOeBq+WkqeWkp+WkruWkp+WkqeeBq+acqFwiLFxuXHRcdFx0XHRcdFwi5oim5Y2I5YOP6Iej5p+x6Iej5YOP5Y2I5oimXCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiMTRcIjoge1xuXHRcdFx0XHRcInA0XCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+acqOeBq+WkqeWkruWkp+WkqeeBq+acqOODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O75oim5Y2I5YOP5Li76Iej5YOP5Y2I5oim44O744O744O7XCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiMTVcIjoge1xuXHRcdFx0XHRcInA0XCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+acqOeBq+WkqeWkp+WkruWkp+WkqeeBq+acqOODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O75oim5Y2I5YOP6Iej5Li76Iej5YOP5Y2I5oim44O744O744O7XCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiMTdcIjoge1xuXHRcdFx0XHRcInA0XCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+acqOeBq+WkqeWkp+WkruWkp+WkqeeBq+acqOODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O75oim5Y2I5YOP6Iej5Li76Iej5YOP5Y2I5oim44O744O744O744O7XCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0XCLjganjgYbjgbbjgaTjgZfjgofjgYbjgY5cIjoge1xuXHRcdFwiZW5nbGlzaFwiOiBcIkRvYnV0c3VTaG9naVwiLFxuXHRcdFwiZm9udENvbG9yXCI6IFwiIzY2NjY2NlwiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0REQ0NGRlwiLFxuXHRcdFwicHJvbW9MaW5lXCI6IC0zLFxuXHRcdFwicG9zaXRpb25cIjoge1xuXHRcdFx0XCIzXCI6IHtcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFtcblx0XHRcdFx0XHRcIuODu+OBsuODu1wiLFxuXHRcdFx0XHRcdFwi44GN44Op44GeXCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiNVwiOiB7XG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBbXG5cdFx0XHRcdFx0XCLjg7vjgbLjgbLjgbLjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44Gt44GE44KJ44GE44GtXCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRcIuWwhuaji1wiOiB7XG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRUVDQzg4XCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiMzMzMzMzNcIixcblx0XHRcImZpZWxkXCI6IFtcblx0XHRcdFwiU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NcIlxuXHRcdF1cblx0fSxcblx0XCLjg4HjgqfjgrlcIjoge1xuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzQ0NDQ0NFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMDAwMDAwXCIsXG5cdFx0XCJmaWVsZFwiOiBbXG5cdFx0XHRcIldCV0JXQldCXCIsXG5cdFx0XHRcIkJXQldCV0JXXCIsXG5cdFx0XHRcIldCV0JXQldCXCIsXG5cdFx0XHRcIkJXQldCV0JXXCIsXG5cdFx0XHRcIldCV0JXQldCXCIsXG5cdFx0XHRcIkJXQldCV0JXXCIsXG5cdFx0XHRcIldCV0JXQldCXCIsXG5cdFx0XHRcIkJXQldCV0JXXCJcblx0XHRdXG5cdH0sXG5cdFwi44K344Oj44Oz44OB44O8XCI6IHtcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuXHRcdFwicHJvbW9MaW5lT2Zmc2V0XCI6IDEsXG5cdFx0XCJmaWVsZFwiOiBbXG5cdFx0XHRcIlNTUzwjPlNTU1wiLFxuXHRcdFx0XCJTU1MjKiNTU1NcIixcblx0XHRcdFwiU1NTPiM8U1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1wiLFxuXHRcdFx0XCI9PT09PT09XT1cIixcblx0XHRcdFwiPVs9PT09PT09XCIsXG5cdFx0XHRcIlNTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1M8Iz5TU1NcIixcblx0XHRcdFwiU1NTIyojU1NTXCIsXG5cdFx0XHRcIlNTUz4jPFNTU1wiXG5cdFx0XVxuXHR9LFxuXHRcIuODgeODo+ODs+OCrlwiOiB7XG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRUVDQzg4XCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiMzMzMzMzNcIixcblx0XHRcInByb21vTGluZU9mZnNldFwiOiAxLFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCJTU1M8Iz5TU1NcIixcblx0XHRcdFwiU1NTIyojU1NTXCIsXG5cdFx0XHRcIlNTUz4jPFNTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NcIixcblx0XHRcdFwiU1NTPCM+U1NTXCIsXG5cdFx0XHRcIlNTUyMqI1NTU1wiLFxuXHRcdFx0XCJTU1M+IzxTU1NcIlxuXHRcdF1cblx0fSxcblx0XCLjg57jg7zjgq/jg6vjg4Pjgq9cIjoge1xuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzc3NTU0NFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMDAwMDAwXCIsXG5cdFx0XCJmaWVsZFwiOiBbXG5cdFx0XHRcIk1NTU1NTU1NXCIsXG5cdFx0XHRcIk1NTU1NTU1NXCIsXG5cdFx0XHRcIk1NTU1NTU1NXCIsXG5cdFx0XHRcIk1NTU1NTU1NXCIsXG5cdFx0XHRcIk1NTU1NTU1NXCIsXG5cdFx0XHRcIk1NTU1NTU1NXCIsXG5cdFx0XHRcIk1NTU1NTU1NXCIsXG5cdFx0XHRcIk1NTU1NTU1NXCJcblx0XHRdXG5cdH0sXG5cdFwi44Gp44GG44G244Gk44GX44KH44GG44GOXCI6IHtcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRERcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiI0ZGREQ5OVwiLFxuXHRcdFwicHJvbW9MaW5lT2Zmc2V0XCI6IC0yLFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCJERERcIixcblx0XHRcdFwiJCQkXCIsXG5cdFx0XHRcIiQkJFwiLFxuXHRcdFx0XCJkZGRcIlxuXHRcdF1cblx0fSxcblx0XCLlsIbmo4s1eDVcIjoge1xuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0VFQ0M4OFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMzMzMzMzXCIsXG5cdFx0XCJwcm9tb0xpbmVPZmZzZXRcIjogLTIsXG5cdFx0XCJmaWVsZFwiOiBbXG5cdFx0XHRcIlNTU1NTXCIsXG5cdFx0XHRcIlNTU1NTXCIsXG5cdFx0XHRcIlNTU1NTXCIsXG5cdFx0XHRcIlNTU1NTXCIsXG5cdFx0XHRcIlNTU1NTXCJcblx0XHRdXG5cdH0sXG5cdFwi5bCG5qOLN3g3XCI6IHtcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuXHRcdFwicHJvbW9MaW5lT2Zmc2V0XCI6IC0xLFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCJTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTXCJcblx0XHRdXG5cdH0sXG5cdFwi5bCG5qOLMTB4MTBcIjoge1xuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0VFQ0M4OFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMzMzMzMzXCIsXG5cdFx0XCJmaWVsZFwiOiBbXG5cdFx0XHRcIlNTU1NTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1NcIlxuXHRcdF1cblx0fSxcblx0XCLjg4Hjgqfjgrk2eDZcIjoge1xuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzQ0NDQ0NFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMDAwMDAwXCIsXG5cdFx0XCJmaWVsZFwiOiBbXG5cdFx0XHRcIldCV0JXQlwiLFxuXHRcdFx0XCJCV0JXQldcIixcblx0XHRcdFwiV0JXQldCXCIsXG5cdFx0XHRcIkJXQldCV1wiLFxuXHRcdFx0XCJXQldCV0JcIixcblx0XHRcdFwiQldCV0JXXCJcblx0XHRdXG5cdH0sXG5cdFwi44OB44Kn44K5MTB4OFwiOiB7XG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNDQ0NDQ0XCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiMwMDAwMDBcIixcblx0XHRcImZpZWxkXCI6IFtcblx0XHRcdFwiV0JXQldCV0JXQlwiLFxuXHRcdFx0XCJCV0JXQldCV0JXXCIsXG5cdFx0XHRcIldCV0JXQldCV0JcIixcblx0XHRcdFwiQldCV0JXQldCV1wiLFxuXHRcdFx0XCJXQldCV0JXQldCXCIsXG5cdFx0XHRcIkJXQldCV0JXQldcIixcblx0XHRcdFwiV0JXQldCV0JXQlwiLFxuXHRcdFx0XCJCV0JXQldCV0JXXCJcblx0XHRdXG5cdH0sXG5cdFwi44OB44Kn44K5MTB4MTBcIjoge1xuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzQ0NDQ0NFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMDAwMDAwXCIsXG5cdFx0XCJwcm9tb0xpbmVPZmZzZXRcIjogMixcblx0XHRcImZpZWxkXCI6IFtcblx0XHRcdFwiV0JXQldCV0JXQlwiLFxuXHRcdFx0XCJCV0JXQldCV0JXXCIsXG5cdFx0XHRcIldCV0JXQldCV0JcIixcblx0XHRcdFwiQldCV0JXQldCV1wiLFxuXHRcdFx0XCJXQldCV0JXQldCXCIsXG5cdFx0XHRcIkJXQldCV0JXQldcIixcblx0XHRcdFwiV0JXQldCV0JXQlwiLFxuXHRcdFx0XCJCV0JXQldCV0JXXCIsXG5cdFx0XHRcIldCV0JXQldCV0JcIixcblx0XHRcdFwiQldCV0JXQldCV1wiXG5cdFx0XVxuXHR9LFxuXHRcIuODgeOCp+OCuTEyeDhcIjoge1xuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzQ0NDQ0NFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMDAwMDAwXCIsXG5cdFx0XCJmaWVsZFwiOiBbXG5cdFx0XHRcIldCV0JXQldCV0JXQlwiLFxuXHRcdFx0XCJCV0JXQldCV0JXQldcIixcblx0XHRcdFwiV0JXQldCV0JXQldCXCIsXG5cdFx0XHRcIkJXQldCV0JXQldCV1wiLFxuXHRcdFx0XCJXQldCV0JXQldCV0JcIixcblx0XHRcdFwiQldCV0JXQldCV0JXXCIsXG5cdFx0XHRcIldCV0JXQldCV0JXQlwiLFxuXHRcdFx0XCJCV0JXQldCV0JXQldcIlxuXHRcdF1cblx0fSxcblx0XCLjg4HjgqfjgrkxMngxMlwiOiB7XG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNDQ0NDQ0XCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiMwMDAwMDBcIixcblx0XHRcImZpZWxkXCI6IFtcblx0XHRcdFwiV0JXQldCV0JXQldCXCIsXG5cdFx0XHRcIkJXQldCV0JXQldCV1wiLFxuXHRcdFx0XCJXQldCV0JXQldCV0JcIixcblx0XHRcdFwiQldCV0JXQldCV0JXXCIsXG5cdFx0XHRcIldCV0JXQldCV0JXQlwiLFxuXHRcdFx0XCJCV0JXQldCV0JXQldcIixcblx0XHRcdFwiV0JXQldCV0JXQldCXCIsXG5cdFx0XHRcIkJXQldCV0JXQldCV1wiLFxuXHRcdFx0XCJXQldCV0JXQldCV0JcIixcblx0XHRcdFwiQldCV0JXQldCV0JXXCIsXG5cdFx0XHRcIldCV0JXQldCV0JXQlwiLFxuXHRcdFx0XCJCV0JXQldCV0JXQldcIlxuXHRcdF1cblx0fSxcblx0XCLjgZTjgo3jgZTjgo3jganjgYbjgbbjgaTjgZfjgofjgYbjgY5cIjoge1xuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZERFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjRkZERDk5XCIsXG5cdFx0XCJwcm9tb0xpbmVPZmZzZXRcIjogLTEsXG5cdFx0XCJmaWVsZFwiOiBbXG5cdFx0XHRcIjQ0NDQ0XCIsXG5cdFx0XHRcIjQ0NDQ0XCIsXG5cdFx0XHRcIiQkJCQkXCIsXG5cdFx0XHRcIiQkJCQkXCIsXG5cdFx0XHRcImRkZGRkXCIsXG5cdFx0XHRcImRkZGRkXCJcblx0XHRdXG5cdH0sXG5cdFwi5Y+k5bCG5qOLOHg4XCI6IHtcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCJzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc1wiXG5cdFx0XVxuXHR9LFxuXHRcIuWPpOWwhuajizl4OFwiOiB7XG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRUVDQzg4XCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiMzMzMzMzNcIixcblx0XHRcImZpZWxkXCI6IFtcblx0XHRcdFwic3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc1wiXG5cblx0XHRdXG5cdH0sXG5cdFwi5Y+k5bCG5qOLOXg5XCI6IHtcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCJzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc1wiXG5cdFx0XVxuXHR9LFxuXHRcIuWPpOWwhuajizEweDEwXCI6IHtcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuXHRcdFwicHJvbW9MaW5lT2Zmc2V0XCI6IDEsXG5cdFx0XCJmaWVsZFwiOiBbXG5cdFx0XHRcInNzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc3NcIlxuXHRcdF1cblx0fSxcblx0XCLlj6TlsIbmo4sxMngxMlwiOiB7XG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRUVDQzg4XCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiMzMzMzMzNcIixcblx0XHRcInByb21vTGluZU9mZnNldFwiOiAxLFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCJzc3Nzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc3Nzc1wiXG5cdFx0XVxuXHR9LFxuXHRcIuWPpOWwhuajizE1eDE1XCI6IHtcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuXHRcdFwicHJvbW9MaW5lT2Zmc2V0XCI6IDIsXG5cdFx0XCJmaWVsZFwiOiBbXG5cdFx0XHRcInNzc3Nzc3Nzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3Nzc3Nzc3NzXCJcblx0XHRdXG5cdH0sXG5cdFwi44Kv44Os44O844K444O844OP44Km44K5XCI6IHtcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiM0NDQ0NDRcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzAwMDAwMFwiLFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCJ3Yndid2J3YlwiLFxuXHRcdFx0XCJid2J3Yndid1wiLFxuXHRcdFx0XCJ3Yndid2J3YlwiLFxuXHRcdFx0XCJid2J3Yndid1wiLFxuXHRcdFx0XCJ3Yndid2J3YlwiLFxuXHRcdFx0XCJid2J3Yndid1wiLFxuXHRcdFx0XCJ3Yndid2J3YlwiLFxuXHRcdFx0XCJid2J3Yndid1wiXG5cdFx0XVxuXHR9LFxuXHRcIjTkurrjg4HjgqfjgrlcIjoge1xuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzQ0NDQ0NFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMDAwMDAwXCIsXG5cdFx0XCJwcm9tb0xpbmVPZmZzZXRcIjogNixcblx0XHRcImZpZWxkXCI6IFtcblx0XHRcdFwiLi4uQldCV0JXQlcuLi5cIixcblx0XHRcdFwiLi4uV0JXQldCV0IuLi5cIixcblx0XHRcdFwiLi4uQldCV0JXQlcuLi5cIixcblx0XHRcdFwiQldCV0JXQldCV0JXQldcIixcblx0XHRcdFwiV0JXQldCV0JXQldCV0JcIixcblx0XHRcdFwiQldCV0JXQldCV0JXQldcIixcblx0XHRcdFwiV0JXQldCV0JXQldCV0JcIixcblx0XHRcdFwiQldCV0JXQldCV0JXQldcIixcblx0XHRcdFwiV0JXQldCV0JXQldCV0JcIixcblx0XHRcdFwiQldCV0JXQldCV0JXQldcIixcblx0XHRcdFwiV0JXQldCV0JXQldCV0JcIixcblx0XHRcdFwiLi4uV0JXQldCV0IuLi5cIixcblx0XHRcdFwiLi4uQldCV0JXQlcuLi5cIixcblx0XHRcdFwiLi4uV0JXQldCV0IuLi5cIlxuXHRcdF1cblx0fSxcblx0XCLlm5vnpZ7lsIbmo4tcIjoge1xuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0VFQ0M4OFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMzMzMzMzXCIsXG5cdFx0XCJzaWRlUHJvbW9cIjogdHJ1ZSxcblx0XHRcImZpZWxkXCI6IFtcblx0XHRcdFwiLi4uU1NTU1NTU1NTLi4uXCIsXG5cdFx0XHRcIi4uLlNTU1NTU1NTUy4uLlwiLFxuXHRcdFx0XCIuLi5TU1NTU1NTU1MuLi5cIixcblx0XHRcdFwiU1NTU1NTU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NTU1NTU1NcIixcblx0XHRcdFwiLi4uU1NTU1NTU1NTLi4uXCIsXG5cdFx0XHRcIi4uLlNTU1NTU1NTUy4uLlwiLFxuXHRcdFx0XCIuLi5TU1NTU1NTU1MuLi5cIlxuXHRcdF1cblx0fSxcblx0XCLjgq/jg63jgrk4eDhcIjoge1xuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0VFQ0M4OFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMzMzMzMzXCIsXG5cdFx0XCJmaWVsZFwiOiBbXG5cdFx0XHRcIldCVzwjPlNTXCIsXG5cdFx0XHRcIkJXQiMqI1NTXCIsXG5cdFx0XHRcIldCVz4jPFNTXCIsXG5cdFx0XHRcIj09PT09PV09XCIsXG5cdFx0XHRcIj1bPT09PT09XCIsXG5cdFx0XHRcIlNTPCM+QldCXCIsXG5cdFx0XHRcIlNTIyojV0JXXCIsXG5cdFx0XHRcIlNTPiM8QldCXCJcblx0XHRdXG5cdH0sXG5cdFwi44Kv44Ot44K5OXg5XCI6IHtcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCJYU1g8Iz5YU1hcIixcblx0XHRcdFwiU1hTIyojU1hTXCIsXG5cdFx0XHRcIlhTWD4jPFhTWFwiLFxuXHRcdFx0XCJTU1NTU1NTU1NcIixcblx0XHRcdFwiPVs9PT09PV09XCIsXG5cdFx0XHRcIlNTU1NTU1NTU1wiLFxuXHRcdFx0XCJYU1g8Iz5YU1hcIixcblx0XHRcdFwiU1hTIyojU1hTXCIsXG5cdFx0XHRcIlhTWD4jPFhTWFwiXG5cdFx0XVxuXHR9LFxuXHRcIuOCr+ODreOCuTExeDExXCI6IHtcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCJCV0JXPCM+U1hTWFwiLFxuXHRcdFx0XCJXQldCIyojWFNYU1wiLFxuXHRcdFx0XCJCV0JXPiM8U1hTWFwiLFxuXHRcdFx0XCJTU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCI9Wz09PT09PT1dPVwiLFxuXHRcdFx0XCJTU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCJYU1hTPCM+V0JXQlwiLFxuXHRcdFx0XCJTWFNYIyojQldCV1wiLFxuXHRcdFx0XCJYU1hTPiM8V0JXQlwiXG5cdFx0XVxuXHR9LFxuXHRcIuOCr+ODreOCuTEyeDEyXCI6IHtcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCJCV0JXPCM+WFNYU1hcIixcblx0XHRcdFwiV0JXQiMqI1NYU1hTXCIsXG5cdFx0XHRcIkJXQlc+IzxYU1hTWFwiLFxuXHRcdFx0XCJTU1NTU1NTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1NTU1NTXCIsXG5cdFx0XHRcIj09PT09PT09PT1dPVwiLFxuXHRcdFx0XCI9Wz09PT09PT09PT1cIixcblx0XHRcdFwiU1NTU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCJYU1hTWDwjPldCV0JcIixcblx0XHRcdFwiU1hTWFMjKiNCV0JXXCIsXG5cdFx0XHRcIlhTWFNYPiM8V0JXQlwiXG5cdFx0XVxuXHR9LFxuXHRcIuOCr+ODreOCuTEzeDEzXCI6IHtcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCJCV0JXQjwjPlhTWFNYXCIsXG5cdFx0XHRcIldCV0JXIyojU1hTWFNcIixcblx0XHRcdFwiQldCV0I+IzxYU1hTWFwiLFxuXHRcdFx0XCJTU1NTU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCI9Wz09PT09PT09PV09XCIsXG5cdFx0XHRcIlNTU1NTU1NTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlhTWFNYPCM+QldCV0JcIixcblx0XHRcdFwiU1hTWFMjKiNXQldCV1wiLFxuXHRcdFx0XCJYU1hTWD4jPEJXQldCXCJcblx0XHRdXG5cdH0sXG5cdFwiNOS6uueUqOOCr+ODreOCuTjliJdcIjoge1xuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzQ0NDQ0NFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMDAwMDAwXCIsXG5cdFx0XCJwcm9tb0xpbmVPZmZzZXRcIjogNixcblx0XHRcImZpZWxkXCI6IFtcblx0XHRcdFwiLi4uWFNYPCM+WFMuLi5cIixcblx0XHRcdFwiLi4uU1hTIyojU1guLi5cIixcblx0XHRcdFwiLi4uWFNYPiM8WFMuLi5cIixcblx0XHRcdFwiWFNYV0JXQldCV0JTWFNcIixcblx0XHRcdFwiU1hTQldCV0JXQldYU1hcIixcblx0XHRcdFwiPCM+V0I9PT1dV0JTWFNcIixcblx0XHRcdFwiIyojQlc9PT09Qlc8Iz5cIixcblx0XHRcdFwiPiM8V0I9PT09V0IjKiNcIixcblx0XHRcdFwiU1hTQldbPT09Qlc+IzxcIixcblx0XHRcdFwiWFNYV0JXQldCV0JTWFNcIixcblx0XHRcdFwiU1hTQldCV0JXQldYU1hcIixcblx0XHRcdFwiLi4uU1g8Iz5YU1guLi5cIixcblx0XHRcdFwiLi4uWFMjKiNTWFMuLi5cIixcblx0XHRcdFwiLi4uU1g+IzxYU1guLi5cIlxuXHRcdF1cblx0fSxcblx0XCI05Lq655So44Kv44Ot44K5OeWIl1wiOiB7XG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRUVDQzg4XCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiMzMzMzMzNcIixcblx0XHRcInByb21vTGluZU9mZnNldFwiOiA2LFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCIuLi5YU1g8Iz5YU1guLi5cIixcblx0XHRcdFwiLi4uU1hTIyojU1hTLi4uXCIsXG5cdFx0XHRcIi4uLlhTWD4jPFhTWC4uLlwiLFxuXHRcdFx0XCJYU1hCV0JXQldCV0JYU1hcIixcblx0XHRcdFwiU1hTV0JXQldCV0JXU1hTXCIsXG5cdFx0XHRcIlhTWEJXQj09XUJXQlhTWFwiLFxuXHRcdFx0XCI8Iz5XQj09PT09Qlc8Iz5cIixcblx0XHRcdFwiIyojQlc9PT09PVdCIyojXCIsXG5cdFx0XHRcIj4jPFdCPT09PT1CVz4jPFwiLFxuXHRcdFx0XCJYU1hCV0JbPT1CV0JYU1hcIixcblx0XHRcdFwiU1hTV0JXQldCV0JXU1hTXCIsXG5cdFx0XHRcIlhTWEJXQldCV0JXQlhTWFwiLFxuXHRcdFx0XCIuLi5YU1g8Iz5YU1guLi5cIixcblx0XHRcdFwiLi4uU1hTIyojU1hTLi4uXCIsXG5cdFx0XHRcIi4uLlhTWD4jPFhTWC4uLlwiXG5cdFx0XVxuXHR9LFxuXHRcIjTkurrnlKjjgq/jg63jgrk55YiXNOihjFwiOiB7XG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRUVDQzg4XCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiMzMzMzMzNcIixcblx0XHRcInByb21vTGluZU9mZnNldFwiOiA2LFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCIuLi4uWFNYPCM+WFNYLi4uLlwiLFxuXHRcdFx0XCIuLi4uU1hTIyojU1hTLi4uLlwiLFxuXHRcdFx0XCIuLi4uWFNYPiM8WFNYLi4uLlwiLFxuXHRcdFx0XCIuLi4uU1hTWFNYU1hTLi4uLlwiLFxuXHRcdFx0XCJYU1hTQldCV0JXQldCU1hTWFwiLFxuXHRcdFx0XCJTWFNYV0JXQldCV0JXWFNYU1wiLFxuXHRcdFx0XCJYU1hTQldCPT1dQldCU1hTWFwiLFxuXHRcdFx0XCI8Iz5YV0I9PT09PUJXWDwjPlwiLFxuXHRcdFx0XCIjKiNTQlc9PT09PVdCUyMqI1wiLFxuXHRcdFx0XCI+IzxYV0I9PT09PUJXWD4jPFwiLFxuXHRcdFx0XCJYU1hTQldCWz09QldCU1hTWFwiLFxuXHRcdFx0XCJTWFNYV0JXQldCV0JXWFNYU1wiLFxuXHRcdFx0XCJYU1hTQldCV0JXQldCU1hTWFwiLFxuXHRcdFx0XCIuLi4uU1hTWFNYU1hTLi4uLlwiLFxuXHRcdFx0XCIuLi4uWFNYPCM+WFNYLi4uLlwiLFxuXHRcdFx0XCIuLi4uU1hTIyojU1hTLi4uLlwiLFxuXHRcdFx0XCIuLi4uWFNYPiM8WFNYLi4uLlwiXG5cdFx0XVxuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG5cdFwiU1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJ0ZXh0XCI6IFwi44CA44CAXCIsXG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRUVDQzg4XCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiMzMzMzMzNcIlxuXHR9LFxuXHRcInNcIjoge1xuXHRcdFwibmFtZVwiOiBcIuWPpOWwhuajiyjmjIHjgaHpp5LjgarjgZcpXCIsXG5cdFx0XCJ0ZXh0XCI6IFwi44CA44CAXCIsXG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRUVDQzg4XCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiMzMzMzMzNcIixcblx0XHRcImF0dHJcIjogW1wiY2FudENhcHR1cmVcIl1cblx0fSxcblx0XCJYXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgq/jg63jgrnnlKjpu5JcIixcblx0XHRcInRleHRcIjogXCLjgIDjgIBcIixcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNCQjc3NDRcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiXG5cdH0sXG5cdFwiTVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Oe44O844Kv44Or44OD44KvXCIsXG5cdFx0XCJ0ZXh0XCI6IFwi44CA44CAXCIsXG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNzc1NTQ0XCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiNDQ0NDQ0NcIlxuXHR9LFxuXHRcIldcIjoge1xuXHRcdFwibmFtZVwiOiBcIuODgeOCp+OCueeZvVwiLFxuXHRcdFwidGV4dFwiOiBcIuOAgOOAgFwiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0NDQ0NDQ1wiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMzMzMzMzNzdcIlxuXHR9LFxuXHRcIkJcIjoge1xuXHRcdFwibmFtZVwiOiBcIuODgeOCp+OCuem7klwiLFxuXHRcdFwidGV4dFwiOiBcIuOAgOOAgFwiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzQ0NDQ0NFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjQ0NDQ0NDNzdcIlxuXHR9LFxuXHRcIndcIjoge1xuXHRcdFwibmFtZVwiOiBcIuODgeOCp+OCueeZvSjjgq/jg6zjg7zjgrjjg7zjg4/jgqbjgrkpXCIsXG5cdFx0XCJ0ZXh0XCI6IFwi44CA44CAXCIsXG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjQ0NDQ0NDXCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiMzMzMzMzM3N1wiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdXG5cdH0sXG5cdFwiYlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OB44Kn44K56buSKOaMgeOBoemnkuOBguOCiilcIixcblx0XHRcInRleHRcIjogXCLjgIDjgIBcIixcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiM0NDQ0NDRcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiI0NDQ0NDQzc3XCIsXG5cdFx0XCJhdHRyXCI6IFtcImNhcHR1cmVcIl1cblx0fSxcblx0XCIrXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgrfjg6Pjg7Pjg4Hjg7wo5Lqk54K5KVwiLFxuXHRcdFwidGV4dFwiOiBcIuOAgOOAgFwiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0VFQ0M4OFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMzMzMzMzXCIsXG5cdFx0XCJpbnRlcnNlY3RcIjogdHJ1ZVxuXHR9LFxuXHRcIiRcIjoge1xuXHRcdFwibmFtZVwiOiBcIuOBqeOBhuOBtuOBpOOBl+OCh+OBhuOBjuWcsFwiLFxuXHRcdFwidGV4dFwiOiBcIuOAgOOAgFwiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZERFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjRkZCQjc3XCJcblx0fSxcblx0XCJEXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjganjgYbjgbbjgaTjgZfjgofjgYbjgY7nqbpcIixcblx0XHRcInRleHRcIjogXCLjgIDjgIBcIixcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNBQURERkZcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiI0ZGQkI3N1wiXG5cdH0sXG5cdFwiNFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Gp44GG44G244Gk44GX44KH44GG44GO5aSVXCIsXG5cdFx0XCJ0ZXh0XCI6IFwi44CA44CAXCIsXG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZEREFBXCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiNGRkJCNzdcIlxuXHR9LFxuXHRcImRcIjoge1xuXHRcdFwibmFtZVwiOiBcIuOBqeOBhuOBtuOBpOOBl+OCh+OBhuOBjuajrlwiLFxuXHRcdFwidGV4dFwiOiBcIuOAgOOAgFwiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0RERkZBQVwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjRkZCQjc3XCJcblx0fSxcblx0XCI9XCI6IHtcblx0XHRcIm5hbWVcIjogXCLmsrPnlYxcIixcblx0XHRcInRleHRcIjogXCLvvJ3vvJ1cIixcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMjIxMTQ0XCJcblx0fSxcblx0XCJbXCI6IHtcblx0XHRcIm5hbWVcIjogXCLmsrPnlYzlt6blrZdcIixcblx0XHRcInRleHRcIjogXCLvvJ3vvJ1cIixcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMjIxMTQ0XCIsXG5cdFx0XCJkaXNwbGF5VGV4dFwiOiBcIuays1wiLFxuXHRcdFwidGV4dFJvdGF0ZVwiOiAtOTBcblx0fSxcblx0XCJdXCI6IHtcblx0XHRcIm5hbWVcIjogXCLmsrPnlYzlj7PlrZdcIixcblx0XHRcInRleHRcIjogXCLvvJ3vvJ1cIixcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMjIxMTQ0XCIsXG5cdFx0XCJkaXNwbGF5VGV4dFwiOiBcIueVjFwiLFxuXHRcdFwidGV4dFJvdGF0ZVwiOiA5MFxuXHR9LFxuXHRcIiNcIjoge1xuXHRcdFwibmFtZVwiOiBcIuS5neWurlwiLFxuXHRcdFwidGV4dFwiOiBcIuOAgO+8mlwiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0NDOTk2NlwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMzMzMzMzXCIsXG5cdFx0XCJhdHRyXCI6IFtcInBhbGFjZVwiXVxuXHR9LFxuXHRcIjxcIjoge1xuXHRcdFwibmFtZVwiOiBcIuS5neWuruW3plwiLFxuXHRcdFwidGV4dFwiOiBcIuOAgO+8vFwiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0NDOTk2NlwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMzMzMzMzXCIsXG5cdFx0XCJib3JkZXJTbGFzaExlZnRcIjogdHJ1ZSxcblx0XHRcImF0dHJcIjogW1wicGFsYWNlXCIsIFwicGFsYWNlU2xhc2hcIl1cblx0fSxcblx0XCI+XCI6IHtcblx0XHRcIm5hbWVcIjogXCLkuZ3lrq7lj7NcIixcblx0XHRcInRleHRcIjogXCLjgIDvvI9cIixcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNDQzk5NjZcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuXHRcdFwiYm9yZGVyU2xhc2hSaWdodFwiOiB0cnVlLFxuXHRcdFwiYXR0clwiOiBbXCJwYWxhY2VcIiwgXCJwYWxhY2VTbGFzaFwiXVxuXHR9LFxuXHRcIipcIjoge1xuXHRcdFwibmFtZVwiOiBcIuS5neWuruS4rVwiLFxuXHRcdFwidGV4dFwiOiBcIuOAgOKAu1wiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0NDOTk2NlwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMzMzMzMzXCIsXG5cdFx0XCJib3JkZXJTbGFzaExlZnRcIjogdHJ1ZSxcblx0XHRcImJvcmRlclNsYXNoUmlnaHRcIjogdHJ1ZSxcblx0XHRcImF0dHJcIjogW1wicGFsYWNlXCIsIFwicGFsYWNlU2xhc2hcIl1cblx0fSxcblx0XCIuXCI6e1xuXHRcdFwibmFtZVwiOiBcIueri+WFpeemgeatolwiLFxuXHRcdFwidGV4dFwiOiBcIu+8g++8g1wiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwMDAwMDAwXCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiMwMDAwMDAwMFwiLFxuXHRcdFwiYXR0clwiOiBbXCJrZWVwT3V0XCJdXG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcblx0XCLmralcIjoge1xuXHRcdFwibmFtZVwiOiBcIuatqeWFtVwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLmranlhbVcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIuWFtVwiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwiZm9yY2VQcm9tb0xpbmVcIjogMSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuatqVwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi44GoXCJcblx0fSxcblx0XCLmoYJcIjoge1xuXHRcdFwibmFtZVwiOiBcIuahgummrFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLmoYLppqxcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIummrFwiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwiZm9yY2VQcm9tb0xpbmVcIjogMixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuahglwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi5ZytXCJcblx0fSxcblx0XCLpioBcIjoge1xuXHRcdFwibmFtZVwiOiBcIumKgOWwhlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpioDlsIZcIiwgXCLpioDlsIdcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIuixoVwiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6YqAXCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLlhahcIlxuXHR9LFxuXHRcIuinklwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi6KeS6KGMXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuinkuihjFwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi6LGhXCIsXG5cdFx0XCJhdHRyXCI6IFtcImNhcHR1cmVcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLogZZcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIummrFwiXG5cdH0sXG5cdFwi6aaZXCI6IHtcblx0XHRcIm5hbWVcIjogXCLpppnou4pcIixcblx0XHRcImRpc3BsYXlcIjogW1wi6aaZ6LuKXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLou4pcIixcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcImZvcmNlUHJvbW9MaW5lXCI6IDEsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLppplcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIuadj1wiXG5cdH0sXG5cdFwi6aObXCI6IHtcblx0XHRcIm5hbWVcIjogXCLpo5vou4pcIixcblx0XHRcImRpc3BsYXlcIjogW1wi6aOb6LuKXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLou4pcIixcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIui7ilwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi6b6NXCJcblx0fSxcblx0XCLph5FcIjoge1xuXHRcdFwibmFtZVwiOiBcIumHkeWwhlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLph5HlsIdcIiwgXCLph5HlsIZcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIuiHo1wiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6YeRXCJcblx0XHR9XG5cdH0sXG5cdFwi546JXCI6IHtcblx0XHRcIm5hbWVcIjogXCLnjonlsIZcIixcblx0XHRcImRpc3BsYXlcIjogW1wi546J5bCHXCIsIFwi546L5bCHXCIsIFwi546J5bCGXCIsIFwi546L5bCGXCJdLFxuXHRcdFwiYWxpYXNcIjogXCLnmodcIixcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi546LXCIsXG5cdFx0XCJhdHRyXCI6IFtcImtpbmdcIiwgXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi546LXCJcblx0XHR9XG5cdH0sXG5cdFwi5YW1XCI6IHtcblx0XHRcIm5hbWVcIjogXCLjg53jg7zjg7NcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4pmf5YW1XCIsIFwi4pmZ5YW1XCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcInVuaXRcIjogXCLlhbVcIixcblx0XHRcImF0dHJcIjogW1wiZW5QYXNzYW50XCJdLFxuXHRcdFwiZm9yY2VQcm9tb0xpbmVcIjogMSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuatqVwiLFxuXHRcdFx0XCJzdGFydFwiOiBcIuS6jFwiLFxuXHRcdFx0XCJhdHRhY2tcIjogXCLlhbVcIixcblx0XHRcdFwiZW5QYXNzYW50XCI6IFwi6YCaXCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLlpoPpqI/ln47lg6dcIlxuXHR9LFxuXHRcIumojlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OK44Kk44OIXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuKZnumojlwiLCBcIuKZmOmojlwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsXG5cdFx0XCJ1bml0XCI6IFwi6aasXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpqI5cIlxuXHRcdH1cblx0fSxcblx0XCLogZZcIjoge1xuXHRcdFwibmFtZVwiOiBcIuODk+OCt+ODp+ODg+ODl1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLimZ3ogZZcIiwgXCLimZfogZZcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLFxuXHRcdFwidW5pdFwiOiBcIuixoVwiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6IGWXCJcblx0XHR9XG5cdH0sXG5cdFwi5aGUXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjg6vjg7zjgq9cIixcblx0XHRcImRpc3BsYXlcIjogW1wi4pmc5aGUXCIsIFwi4pmW5aGUXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcInVuaXRcIjogXCLou4pcIixcblx0XHRcImF0dHJcIjogW1wiY2FzdGxpbmdSb29rXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6LuKXCIsXG5cdFx0XHRcImNhc3RsaW5nXCI6IFwi5aGUXCJcblx0XHR9XG5cdH0sXG5cdFwi5ZCOXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgq/jgqTjg7zjg7NcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4pmb5ZCOXCIsIFwi4pmV5ZCOXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcInVuaXRcIjogXCLoh6NcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuWQjlwiXG5cdFx0fVxuXHR9LFxuXHRcIueOi1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Kt44Oz44KwXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuKZmueOi1wiLCBcIuKZlOeOi1wiXSxcblx0XHRcImFsaWFzXCI6IFwi5bidXCIsXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLFxuXHRcdFwidW5pdFwiOiBcIueOi1wiLFxuXHRcdFwiYXR0clwiOiBbXCJraW5nXCIsIFwiY2FzdGxpbmdLaW5nXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi546LXCIsXG5cdFx0XHRcImNhc3RsaW5nXCI6IFwi5Z+OXCJcblx0XHR9XG5cdH0sXG5cdFwi5Y2SXCI6IHtcblx0XHRcIm5hbWVcIjogXCLljZJcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4peL5Y2SXCIsIFwi4peL5YW1XCIsIFwi5Y2SXCIsIFwi5YW1XCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjgrfjg6Pjg7Pjg4Hjg7xcIixcblx0XHRcInVuaXRcIjogXCLlhbVcIixcblx0XHRcImZvcmNlUHJvbW9MaW5lXCI6IDQsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLmralcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIueOh1wiXG5cdH0sXG5cdFwi54KuXCI6IHtcblx0XHRcIm5hbWVcIjogXCLngq5cIixcblx0XHRcImRpc3BsYXlcIjogW1wi4peL54KuXCIsIFwi4peL56CyXCIsIFwi54KuXCIsIFwi56CyXCJdLFxuXHRcdFwiYWxpYXNcIjogXCLnoLJcIixcblx0XHRcImdhbWVOYW1lXCI6IFwi44K344Oj44Oz44OB44O8XCIsXG5cdFx0XCJ1bml0XCI6IFwi56CyXCIsXG5cdFx0XCJhdHRyXCI6IFtcInBhb1wiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIui7ilwiLFxuXHRcdFx0XCJhdHRhY2tcIjogXCLnoLJcIlxuXHRcdH1cblx0fSxcblx0XCLppq5cIjoge1xuXHRcdFwibmFtZVwiOiBcIuWCjFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLil4vlgoxcIiwgXCLil4vlgoxcIiwgXCLil4vppqxcIiwgXCLlgoxcIiwgXCLppqxcIl0sXG5cdFx0XCJhbGlhc1wiOiBcIuWCjFwiLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjgrfjg6Pjg7Pjg4Hjg7xcIixcblx0XHRcInVuaXRcIjogXCLppqxcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIummrlwiXG5cdFx0fVxuXHR9LFxuXHRcIuebuFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi55u4XCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuKXi+ebuFwiLCBcIuKXi+ixoVwiLCBcIuebuFwiLCBcIuixoVwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44K344Oj44Oz44OB44O8XCIsXG5cdFx0XCJ1bml0XCI6IFwi6LGhXCIsXG5cdFx0XCJhdHRyXCI6IFtcInVuQ3Jvc3NSaXZlclwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuebuFwiXG5cdFx0fVxuXHR9LFxuXHRcIuS/pVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5L+lXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuKXi+S/pVwiLCBcIuKXi+i7ilwiLCBcIuS/pVwiLCBcIui7ilwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44K344Oj44Oz44OB44O8XCIsXG5cdFx0XCJ1bml0XCI6IFwi6LuKXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLou4pcIlxuXHRcdH1cblx0fSxcblx0XCLku5VcIjoge1xuXHRcdFwibmFtZVwiOiBcIuS7lVwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLil4vku5VcIiwgXCLil4vlo6tcIiwgXCLku5VcIiwgXCLlo6tcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuOCt+ODo+ODs+ODgeODvFwiLFxuXHRcdFwidW5pdFwiOiBcIuiHo1wiLFxuXHRcdFwiYXR0clwiOiBbXCJpblBhbGFjZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwicGFsYWNlU2xhc2hcIjogXCLjgZ5cIlxuXHRcdH1cblx0fSxcblx0XCLluKVcIjoge1xuXHRcdFwibmFtZVwiOiBcIuW4pVwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLiipXluKVcIiwgXCLiipXlsIdcIiwgXCLluKVcIiwgXCLlsIdcIl0sXG5cdFx0XCJhbGlhc1wiOiBcIuWwh1wiLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjgrfjg6Pjg7Pjg4Hjg7xcIixcblx0XHRcInVuaXRcIjogXCLnjotcIixcblx0XHRcImF0dHJcIjogW1wia2luZ1wiLCBcImluUGFsYWNlXCIsIFwiY2FudFNlZUtpbmdcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLjgY1cIlxuXHRcdH1cblx0fSxcblx0XCLljYZcIjoge1xuXHRcdFwibmFtZVwiOiBcIuWNklwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLirKHljYZcIiwgXCLirKHljZJcIiwgXCLljYZcIiwgXCLljZJcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeODo+ODs+OCrlwiLFxuXHRcdFwidW5pdFwiOiBcIuWFtVwiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi5Y2SXCIsXG5cdFx0XHRcInBhbGFjZVNsYXNoXCI6IFwi5YW1XCJcblx0XHR9XG5cdH0sXG5cdFwi5YyFXCI6IHtcblx0XHRcIm5hbWVcIjogXCLljIVcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4qyh5YyFXCIsIFwi5YyFXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4Hjg6Pjg7Pjgq5cIixcblx0XHRcInVuaXRcIjogXCLnoLJcIixcblx0XHRcImF0dHJcIjogW1wicG9cIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLnoLJcIixcblx0XHRcdFwicGFsYWNlU2xhc2hcIjogXCLlvJNcIlxuXHRcdH1cblx0fSxcblx0XCLppq1cIjoge1xuXHRcdFwibmFtZVwiOiBcIummrFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLirKHpqaxcIiwgXCLirKHpqaxcIiwgXCLirKHppq1cIiwgXCLirKHppqxcIiwgXCLpqaxcIiwgXCLppq1cIiwgXCLppqxcIl0sXG5cdFx0XCJhbGlhc1wiOiBcIumprFwiLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4Hjg6Pjg7Pjgq5cIixcblx0XHRcInVuaXRcIjogXCLppqxcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIummrlwiXG5cdFx0fVxuXHR9LFxuXHRcIuixoVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi6LGhXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuKsoeixoVwiLCBcIuixoVwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44OB44Oj44Oz44KuXCIsXG5cdFx0XCJ1bml0XCI6IFwi6LGhXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLosaFcIlxuXHRcdH1cblx0fSxcblx0XCLou4pcIjoge1xuXHRcdFwibmFtZVwiOiBcIui7ilwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLirKHovaZcIiwgXCLirKHovaZcIiwgXCLirKHou4pcIiwgXCLovaZcIiwgXCLou4pcIl0sXG5cdFx0XCJhbGlhc1wiOiBcIui9plwiLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4Hjg6Pjg7Pjgq5cIixcblx0XHRcInVuaXRcIjogXCLou4pcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIui7ilwiLFxuXHRcdFx0XCJwYWxhY2VTbGFzaFwiOiBcIuiBllwiXG5cdFx0fVxuXHR9LFxuXHRcIuWjq1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5aOrXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuKsoeWjq1wiLCBcIuWjq1wiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44OB44Oj44Oz44KuXCIsXG5cdFx0XCJ1bml0XCI6IFwi6IejXCIsXG5cdFx0XCJhdHRyXCI6IFtcImluUGFsYWNlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi44GNXCIsXG5cdFx0XHRcInBhbGFjZVNsYXNoXCI6IFwi44GeXCJcblx0XHR9XG5cdH0sXG5cdFwi5qWaXCI6IHtcblx0XHRcIm5hbWVcIjogXCLmpZpcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4o+j5qWaXCIsIFwi4o+j5ryiXCIsIFwi5qWaXCIsIFwi5ryiXCJdLFxuXHRcdFwiYWxpYXNcIjogXCLmvKJcIixcblx0XHRcImdhbWVOYW1lXCI6IFwi44OB44Oj44Oz44KuXCIsXG5cdFx0XCJ1bml0XCI6IFwi546LXCIsXG5cdFx0XCJhdHRyXCI6IFtcImtpbmdcIiwgXCJpblBhbGFjZVwiLCBcImJpa2phbmdcIiwgXCJ1c2VQYXNzXCIsIFwic3dhcEhvcnNlRWxlcGhhbnRcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLjgY1cIixcblx0XHRcdFwicGFsYWNlU2xhc2hcIjogXCLjgZ5cIlxuXHRcdH1cblx0fSxcblx0XCLosp1cIjoge1xuXHRcdFwibmFtZVwiOiBcIuODk+OColwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLim4Losp1cIiwgXCLil47osp1cIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODnuODvOOCr+ODq+ODg+OCr1wiLFxuXHRcdFwidW5pdFwiOiBcIuWFtVwiLFxuXHRcdFwiZm9yY2VQcm9tb0xpbmVcIjogMSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuatqVwiLFxuXHRcdFx0XCJhdHRhY2tcIjogXCLlhbVcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIuiytFwiXG5cdH0sXG5cdFwi55GqXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjg57jg7xcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+QtOeRqlwiLCBcIvCfpoTnkapcIiwgXCLwn6aT55GqXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg57jg7zjgq/jg6vjg4Pjgq9cIixcblx0XHRcInVuaXRcIjogXCLppqxcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumojlwiXG5cdFx0fVxuXHR9LFxuXHRcIuaguVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Kz44O844OzXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIs6U5qC5XCIsIFwi8J+nhOaguVwiLCBcIuKPj+aguVwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44Oe44O844Kv44Or44OD44KvXCIsXG5cdFx0XCJ1bml0XCI6IFwi6LGhXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpioBcIlxuXHRcdH1cblx0fSxcblx0XCLoiLlcIjoge1xuXHRcdFwibmFtZVwiOiBcIuODq+OCouODvFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLir4roiLlcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODnuODvOOCr+ODq+ODg+OCr1wiLFxuXHRcdFwidW5pdFwiOiBcIui7ilwiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6LuKXCJcblx0XHR9XG5cdH0sXG5cdFwi56iuXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjg6Hjg4Pjg4hcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4pa056iuXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg57jg7zjgq/jg6vjg4Pjgq9cIixcblx0XHRcInVuaXRcIjogXCLoh6NcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuOBnlwiLFxuXHRcdFx0XCJzdGFydFwiOiBcIuW8kFwiXG5cdFx0fVxuXHR9LFxuXHRcIuWQm1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Kv44OzXCIsXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODnuODvOOCr+ODq+ODg+OCr1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLilrLlkJtcIiwgXCLilrPlkJtcIiwgXCLilrLlhaxcIiwgXCLilrPlhaxcIl0sXG5cdFx0XCJhbGlhc1wiOiBcIuWFrFwiLFxuXHRcdFwidW5pdFwiOiBcIueOi1wiLFxuXHRcdFwiYXR0clwiOiBbXCJraW5nXCIsIFwiY291bnRpbmdSdWxlc1wiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuOBnlwiXG5cdFx0fVxuXHR9LFxuXHRcIueBq1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OR44OA44O844OG44KjXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfl6HkurpcIiwgXCLwn5eh54GrXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4Hjg6Pjg4jjg6njg7PjgqxcIixcblx0XHRcInVuaXRcIjogXCLlhbVcIixcblx0XHRcImZvcmNlUHJvbW9MaW5lXCI6IDEsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLmralcIixcblx0XHRcdFwiYXR0YWNrXCI6IFwi5YW1XCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLmnbVcIlxuXHR9LFxuXHRcIuWkqVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OR44OA44O844OG44KjXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfl6HkurpcIiwgXCLwn5eh5aSpXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4Hjg6Pjg4jjg6njg7PjgqxcIixcblx0XHRcInVuaXRcIjogXCLlhbVcIixcblx0XHRcImZvcmNlUHJvbW9MaW5lXCI6IDEsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLmralcIixcblx0XHRcdFwiYXR0YWNrXCI6IFwi5YW1XCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLmqaFcIlxuXHR9LFxuXHRcIuacqFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OR44OA44O844OG44KjXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfl6HkurpcIiwgXCLwn5eh5pyoXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4Hjg6Pjg4jjg6njg7PjgqxcIixcblx0XHRcInVuaXRcIjogXCLlhbVcIixcblx0XHRcImZvcmNlUHJvbW9MaW5lXCI6IDEsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLmralcIixcblx0XHRcdFwiYXR0YWNrXCI6IFwi5YW1XCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLmiLBcIlxuXHR9LFxuXHRcIuWkp1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OR44OA44O844OG44KjXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfl6HkurpcIiwgXCLwn5eh5aSnXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4Hjg6Pjg4jjg6njg7PjgqxcIixcblx0XHRcInVuaXRcIjogXCLlhbVcIixcblx0XHRcImZvcmNlUHJvbW9MaW5lXCI6IDEsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLmralcIixcblx0XHRcdFwiYXR0YWNrXCI6IFwi5YW1XCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLlt6hcIlxuXHR9LFxuXHRcIuWkrlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OR44OA44O844OG44KjXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfl6HkurpcIiwgXCLwn5eh5Lq6XCIsIFwi8J+XoeWkrlwiXSxcblx0XHRcImFsaWFzXCI6IFwi5Lq6XCIsXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeODo+ODiOODqeODs+OCrFwiLFxuXHRcdFwidW5pdFwiOiBcIuWFtVwiLFxuXHRcdFwiZm9yY2VQcm9tb0xpbmVcIjogMSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuatqVwiLFxuXHRcdFx0XCJhdHRhY2tcIjogXCLlhbVcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIuW+gFwiXG5cdH0sXG5cdFwi5Y2IXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgqLjgrfjg6Xjg69cIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+QjuWNiFwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44OB44Oj44OI44Op44Oz44KsXCIsXG5cdFx0XCJ1bml0XCI6IFwi6aasXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpqI5cIlxuXHRcdH1cblx0fSxcblx0XCLlg49cIjoge1xuXHRcdFwibmFtZVwiOiBcIuOCrOOCuOODo1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn5CY5YOPXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4Hjg6Pjg4jjg6njg7PjgqxcIixcblx0XHRcInVuaXRcIjogXCLosaFcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuWDj1wiXG5cdFx0fVxuXHR9LFxuXHRcIuaIplwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Op44K/XCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfm57miKZcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeODo+ODiOODqeODs+OCrFwiLFxuXHRcdFwidW5pdFwiOiBcIui7ilwiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6LuKXCJcblx0XHR9XG5cdH0sXG5cdFwi6IejXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjg57jg7Pjg4jjg6pcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4pqU6IejXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4Hjg6Pjg4jjg6njg7PjgqxcIixcblx0XHRcInVuaXRcIjogXCLoh6NcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuOBnlwiXG5cdFx0fVxuXHR9LFxuXHRcIuS4u1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Op44O844K444OjXCIsXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeODo+ODiOODqeODs+OCrFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn5GR5Li7XCIsIFwi8J+boeS4u1wiLCBcIvCfm6Hmn7FcIl0sXG5cdFx0XCJhbGlhc1wiOiBcIuafsVwiLFxuXHRcdFwidW5pdFwiOiBcIueOi1wiLFxuXHRcdFwiYXR0clwiOiBbXCJraW5nXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi546LXCJcblx0XHR9XG5cdH0sXG5cdFwi44GyXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgbLjgojjgZNcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+QpOOBslwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44Gp44GG44G244Gk44GX44KH44GG44GOXCIsXG5cdFx0XCJ1bml0XCI6IFwi5YW1XCIsXG5cdFx0XCJhdHRyXCI6IFtcImNhcHR1cmVcIl0sXG5cdFx0XCJmb3JjZVByb21vTGluZVwiOiAxLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi5q2pXCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLjgatcIlxuXHR9LFxuXHRcIuOBnlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Ge44GGXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfkJjjgZ5cIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuOBqeOBhuOBtuOBpOOBl+OCh+OBhuOBjlwiLFxuXHRcdFwidW5pdFwiOiBcIuixoVwiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi44GeXCJcblx0XHR9XG5cdH0sXG5cdFwi44GNXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgY3jgorjgpNcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+mkuOBjVwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44Gp44GG44G244Gk44GX44KH44GG44GOXCIsXG5cdFx0XCJ1bml0XCI6IFwi6LuKXCIsXG5cdFx0XCJhdHRyXCI6IFtcImNhcHR1cmVcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLjgY1cIlxuXHRcdH1cblx0fSxcblx0XCLjg6lcIjoge1xuXHRcdFwibmFtZVwiOiBcIuODqeOCpOOCquODs1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn6aB44OpXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjganjgYbjgbbjgaTjgZfjgofjgYbjgY5cIixcblx0XHRcInVuaXRcIjogXCLnjotcIixcblx0XHRcImF0dHJcIjogW1wia2luZ1wiLCBcImNhcHR1cmVcIiwgXCJydWxlVGhyb3VnaFwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIueOi1wiXG5cdFx0fVxuXHR9LFxuXHRcIueHlVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi54eVXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIueHlVwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLnpr3lsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLlhbVcIixcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcImZvcmNlUHJvbW9MaW5lXCI6IDMsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLmralcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIum0iFwiXG5cdH0sXG5cdFwi6ZuJXCI6IHtcblx0XHRcIm5hbWVcIjogXCLpm4lcIixcblx0XHRcImRpc3BsYXlcIjogW1wi6ZuJXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuemveWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIummrFwiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6ZuJXCJcblx0XHR9XG5cdH0sXG5cdFwi6ba0XCI6IHtcblx0XHRcIm5hbWVcIjogXCLpioDlsIZcIixcblx0XHRcImRpc3BsYXlcIjogW1wi6ba0XCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuemveWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIuixoVwiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi54ybXCJcblx0XHR9XG5cdH0sXG5cdFwi6baJXCI6IHtcblx0XHRcIm5hbWVcIjogXCLptoko5bemKVwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLlt6bptolcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi56a95bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi6LuKXCIsXG5cdFx0XCJhdHRyXCI6IFtcImNhcHR1cmVcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLptolcIlxuXHRcdH1cblx0fSxcblx0XCLkuqtcIjoge1xuXHRcdFwibmFtZVwiOiBcIum2iSjlj7MpXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuWPs+m2iVwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLnpr3lsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLou4pcIixcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuS6q1wiXG5cdFx0fVxuXHR9LFxuXHRcIum3uVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi6be5XCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIum3uVwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLnpr3lsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLoh6NcIixcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcImZvcmNlUHJvbW9MaW5lXCI6IDMsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpholcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIumblVwiXG5cdH0sXG5cdFwi6bWsXCI6IHtcblx0XHRcIm5hbWVcIjogXCLptaxcIixcblx0XHRcImRpc3BsYXlcIjogW1wi6bWsXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuemveWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIueOi1wiLFxuXHRcdFwiYXR0clwiOiBbXCJraW5nXCIsIFwiY2FwdHVyZVwiLCBcInR3b1N3YWxsb3dzXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi546LXCJcblx0XHR9XG5cdH0sXG5cdFwi5LqsXCI6IHtcblx0XHRcIm5hbWVcIjogXCLkuqznv5RcIixcblx0XHRcImRpc3BsYXlcIjogW1wi5Lqs57+UXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuS6rOWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIummrFwiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwiZm9yY2VQcm9tb0xpbmVcIjogMyxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuS6rFwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi5bm+XCJcblx0fSxcblx0XCLpioVcIjoge1xuXHRcdFwibmFtZVwiOiBcIumKheWwhlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpioXlsIZcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5Lqs5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi6LGhXCIsXG5cdFx0XCJhdHRyXCI6IFtcImNhcHR1cmVcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpioVcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIuOBhlwiXG5cdH0sXG5cdFwi5bGxXCI6IHtcblx0XHRcIm5hbWVcIjogXCLlsbHou4pcIixcblx0XHRcImRpc3BsYXlcIjogW1wi5bGx6LuKXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuS6rOWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIui7ilwiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi5bGxXCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLjgZVcIlxuXHR9LFxuXHRcIue/hVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi6YeR57+FXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIumHkee/hVwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLkuqzlsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLoh6NcIixcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIue/hVwiXG5cdFx0fVxuXHR9LFxuXHRcIuaWl1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi6YeR5paXXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIumHkeaWl1wiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLkuqzlsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLoh6NcIixcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuaWl1wiXG5cdFx0fVxuXHR9LFxuXHRcIui3s1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi6Lez6aasXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIui3s+mmrFwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLlvqHlpoPlsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLppqxcIixcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumojlwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi5ZCrXCJcblx0fSxcblx0XCLov5RcIjoge1xuXHRcdFwibmFtZVwiOiBcIuWPjei7ilwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLlj43ou4pcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5b6h5aaD5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi6LuKXCIsXG5cdFx0XCJhdHRyXCI6IFtcImNhcHR1cmVcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLlj41cIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIuS9mVwiXG5cdH0sXG5cdFwi5aWzXCI6IHtcblx0XHRcIm5hbWVcIjogXCLlpoPlsIZcIixcblx0XHRcImRpc3BsYXlcIjogW1wi5aaD5bCHXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuW+oeWmg+Wwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIuiHo1wiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi5ZCOXCJcblx0XHR9XG5cdH0sXG5cdFwi6YaJXCI6IHtcblx0XHRcIm5hbWVcIjogXCLphonosaFcIixcblx0XHRcImRpc3BsYXlcIjogW1wi6YaJ6LGhXCJdLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5pyd5YCJ6LGh5qOLXCIsXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIuiHo1wiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCIsIFwiY2FudENhcHR1cmVcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpholcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIuWkqlwiXG5cdH0sXG5cdFwi5LiYXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjg53jg7zjg7NcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4pmf5YW1XCIsIFwi4pmZ5YW1XCIsIFwi4pmf5LiYXCIsIFwi4pmZ5LiYXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuODreOCueOCouODqeODouOCueODgeOCp+OCuVwiLFxuXHRcdFwidW5pdFwiOiBcIuWFtVwiLFxuXHRcdFwiZm9yY2VQcm9tb0xpbmVcIjogMSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuatqVwiLFxuXHRcdFx0XCJhdHRhY2tcIjogXCLlhbVcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIuWmg+moj+WfjlwiXG5cdH0sXG5cdFwi5rWcXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjg53jg7zjg7NcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4pmf5YW1XCIsIFwi4pmZ5YW1XCIsIFwi4pmf5rWcXCIsIFwi4pmZ5rWcXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuOCq+ODkeODluODqeODs+OCq+ODgeOCp+OCuVwiLFxuXHRcdFwidW5pdFwiOiBcIuWFtVwiLFxuXHRcdFwiYXR0clwiOiBbXCJlblBhc3NhbnRcIl0sXG5cdFx0XCJmb3JjZVByb21vTGluZVwiOiAxLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi5q2pXCIsXG5cdFx0XHRcInN0YXJ0XCI6IFwi5LqMXCIsXG5cdFx0XHRcImF0dGFja1wiOiBcIuWFtVwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi5aaD6aeI6aeB6aiP5Z+O5YOnXCJcblx0fSxcblx0XCLpp65cIjoge1xuXHRcdFwibmFtZVwiOiBcIuOCq+ODvOODh+OCo+ODiuODq1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn6mT6aeuXCIsIFwi8J+pkOmnrlwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLjgqvjg5Hjg5bjg6njg7Pjgqvjg4HjgqfjgrlcIixcblx0XHRcInVuaXRcIjogXCLoh6NcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumnrlwiXG5cdFx0fVxuXHR9LFxuXHRcIumnhlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Oe44O844K344Oj44OrXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfqZLpp4ZcIiwgXCLwn6mP6aeGXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuOCq+ODkeODluODqeODs+OCq+ODgeOCp+OCuVwiLFxuXHRcdFwidW5pdFwiOiBcIuiHo1wiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6aeGXCJcblx0XHR9XG5cdH0sXG5cdFwi5Zu9XCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgq3jg7PjgrBcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4pma546LXCIsIFwi4pmU546LXCJdLFxuXHRcdFwiYWxpYXNcIjogXCLlnItcIixcblx0XHRcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLjgqvjg5Hjg5bjg6njg7Pjgqvjg4HjgqfjgrlcIixcblx0XHRcInVuaXRcIjogXCLnjotcIixcblx0XHRcImF0dHJcIjogW1wia2luZ1wiLCBcImNhc3RsaW5nS2luZ1wiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIueOi1wiLFxuXHRcdFx0XCJjYXN0bGluZ1wiOiBcIuWbvVwiXG5cdFx0fVxuXHR9LFxuXHRcIuefolwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OR44OA44O844OG44KjXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfl6HkurpcIiwgXCLwn5eh55+iXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4Hjg6Pjg4jjg6njg7PjgqxcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuODgeODo+ODiOODqeOCuFwiLFxuXHRcdFwidW5pdFwiOiBcIuWFtVwiLFxuXHRcdFwiZm9yY2VQcm9tb0xpbmVcIjogMSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuatqVwiLFxuXHRcdFx0XCJhdHRhY2tcIjogXCLlhbVcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIuiItlwiXG5cdH0sXG5cdFwi5pysXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjg5Hjg4Djg7zjg4bjgqNcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+XoeS6ulwiLCBcIvCfl6HmnKxcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeODo+ODiOODqeODs+OCrFwiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi44OB44Oj44OI44Op44K4XCIsXG5cdFx0XCJ1bml0XCI6IFwi5YW1XCIsXG5cdFx0XCJmb3JjZVByb21vTGluZVwiOiAxLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi5q2pXCIsXG5cdFx0XHRcImF0dGFja1wiOiBcIuWFtVwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi6LGqXCJcblx0fSxcblx0XCLoiJ9cIjoge1xuXHRcdFwibmFtZVwiOiBcIuODreODvOOCq1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLim7XoiJ9cIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeODo+ODiOODqeODs+OCrFwiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi44OB44Oj44OI44Op44K4XCIsXG5cdFx0XCJ1bml0XCI6IFwi6LGhXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLlg49cIlxuXHRcdH1cblx0fSxcblx0XCLosZVcIjoge1xuXHRcdFwibmFtZVwiOiBcIuODj+OCueODhuOCo+ODvFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn5CY6LGVXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4Hjg6Pjg4jjg6njg7PjgqxcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuODgeODo+ODiOODqeOCuFwiLFxuXHRcdFwidW5pdFwiOiBcIui7ilwiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6LuKXCJcblx0XHR9XG5cdH0sXG5cdFwi44GtXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjga3jgZNcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+QseOBrVwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44Gp44GG44G244Gk44GX44KH44GG44GOXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLjgZTjgo3jgZTjgo3jganjgYbjgbbjgaTjgZfjgofjgYbjgY5cIixcblx0XHRcInVuaXRcIjogXCLosaFcIixcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumKgFwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi44ONXCJcblx0fSxcblx0XCLjgYRcIjoge1xuXHRcdFwibmFtZVwiOiBcIuOBhOOBrFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn5C244GEXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjganjgYbjgbbjgaTjgZfjgofjgYbjgY5cIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuOBlOOCjeOBlOOCjeOBqeOBhuOBtuOBpOOBl+OCh+OBhuOBjlwiLFxuXHRcdFwidW5pdFwiOiBcIuiHo1wiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6YeRXCJcblx0XHR9XG5cdH0sXG5cdFwi44KJXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjg6njgqTjgqrjg7NcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+mgeODqVwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44Gp44GG44G244Gk44GX44KH44GG44GOXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLjgZTjgo3jgZTjgo3jganjgYbjgbbjgaTjgZfjgofjgYbjgY5cIixcblx0XHRcInVuaXRcIjogXCLnjotcIixcblx0XHRcImF0dHJcIjogW1wia2luZ1wiLCBcImNhcHR1cmVcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLnjotcIlxuXHRcdH1cblx0fSxcblx0XCLku7JcIjoge1xuXHRcdFwibmFtZVwiOiBcIuS7suS6ulwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLku7LkurpcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5Lit5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi5YW1XCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLku7JcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIumFlFwiXG5cdH0sXG5cdFwi5ZCMXCI6IHtcblx0XHRcIm5hbWVcIjogXCLpioXlsIZcIixcblx0XHRcImRpc3BsYXlcIjogW1wi6YqF5bCGXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuS4reWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIuiHo1wiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi5q2pXCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLpu4RcIlxuXHR9LFxuXHRcIuiJrlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi6YqA5bCGXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIumKgOWwhlwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLkuK3lsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLosaFcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumKgFwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi5aCFXCJcblx0fSxcblx0XCLph6FcIjoge1xuXHRcdFwibmFtZVwiOiBcIumHkeWwhlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLph5HlsIdcIiwgXCLph5HlsIZcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5Lit5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi6IejXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLph5FcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIuWNh1wiXG5cdH0sXG5cdFwi54ybXCI6IHtcblx0XHRcIm5hbWVcIjogXCLnjJvosblcIixcblx0XHRcImRpc3BsYXlcIjogW1wi54yb6LG5XCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuS4reWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIuixoVwiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi54ybXCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLmobdcIlxuXHR9LFxuXHRcIummqFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi6aaZ6LuKXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIummmei7ilwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLkuK3lsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLou4pcIixcblx0XHRcImZvcmNlUHJvbW9MaW5lXCI6IDEsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLppplcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIumnklwiXG5cdH0sXG5cdFwi5Y+NXCI6IHtcblx0XHRcIm5hbWVcIjogXCLlj43ou4pcIixcblx0XHRcImRpc3BsYXlcIjogW1wi5Y+N6LuKXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuS4reWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIui7ilwiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi5Y+NXCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLpr6hcIlxuXHR9LFxuXHRcIuiZjlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi55uy6JmOXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuebsuiZjlwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLkuK3lsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLosaFcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuiZjlwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi6bm/XCJcblx0fSxcblx0XCLpupJcIjoge1xuXHRcdFwibmFtZVwiOiBcIum6kum6n1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpupLpup9cIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5Lit5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi6aasXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpupJcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIumwpFwiXG5cdH0sXG5cdFwi6bOzXCI6IHtcblx0XHRcIm5hbWVcIjogXCLps7Plh7BcIixcblx0XHRcImRpc3BsYXlcIjogW1wi6bOz5YewXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuS4reWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIuixoVwiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6bOzXCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLljYlcIlxuXHR9LFxuXHRcIuaoqlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5qiq6KGMXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuaoquihjFwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLkuK3lsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLou4pcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuaoqlwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi54yqXCJcblx0fSxcblx0XCLnq6pcIjoge1xuXHRcdFwibmFtZVwiOiBcIuerquihjFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLnq6rooYxcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5Lit5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi6LuKXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLnq6pcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIueJm1wiXG5cdH0sXG5cdFwi56K8XCI6IHtcblx0XHRcIm5hbWVcIjogXCLnq5zppqxcIixcblx0XHRcImRpc3BsYXlcIjogW1wi56uc6aasXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuS4reWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIuiHo1wiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6aasXCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLpt4JcIlxuXHR9LFxuXHRcIuernFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi56uc546LXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuernOeOi1wiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLkuK3lsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLoh6NcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuernFwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi6beyXCJcblx0fSxcblx0XCLlpZRcIjoge1xuXHRcdFwibmFtZVwiOiBcIuWllOi1sFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLlpZTotbBcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5Lit5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi6IejXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLlkI5cIlxuXHRcdH1cblx0fSxcblx0XCLnjYVcIjoge1xuXHRcdFwibmFtZVwiOiBcIueNheWtkFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLnjYXlrZBcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5Lit5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi6IejXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLnjYVcIlxuXHRcdH1cblx0fSxcblx0XCLnn7NcIjoge1xuXHRcdFwibmFtZVwiOiBcIuefs+WwhlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLnn7PlsIZcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5aSn5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi5YW1XCIsXG5cdFx0XCJmb3JjZVByb21vTGluZVwiOiAxLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi5YW1XCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLpiZBcIlxuXHR9LFxuXHRcIumJhFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi6YmE5bCGXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIumQteWwhlwiLCBcIumQteWwhlwiLCBcIumJhOWwhlwiXSxcblx0XHRcImFsaWFzXCI6IFwi6ZC1XCIsXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5aSn5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi5YW1XCIsXG5cdFx0XCJmb3JjZVByb21vTGluZVwiOiAxLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6YmEXCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLpi7xcIlxuXHR9LFxuXHRcIueMq1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi54yr5YiEXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIueMq+WIhFwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLlpKflsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLosaFcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuOBnlwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi6YyoXCJcblx0fSxcblx0XCLngKdcIjoge1xuXHRcdFwibmFtZVwiOiBcIumjm+m+jVwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpo5vpvo1cIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5aSn5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi6LGhXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLngKdcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIumMhlwiXG5cdH0sXG5cdFwi5ZeUXCI6IHtcblx0XHRcIm5hbWVcIjogXCLll5TnjKpcIixcblx0XHRcImRpc3BsYXlcIjogW1wi5ZeU54yqXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuWkp+Wwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIui7ilwiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi44GNXCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLpjq1cIlxuXHR9LFxuXHRcIuS4kVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi54yb54mbXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIueMm+eJm1wiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLlpKflsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLou4pcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuS4kVwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi6YiVXCJcblx0fSxcblx0XCLni7xcIjoge1xuXHRcdFwibmFtZVwiOiBcIuaCqueLvFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLmgqrni7xcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5aSn5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi6IejXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLni7xcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIueLglwiXG5cdH0sXG5cdFwi5qK5XCI6IHtcblx0XHRcIm5hbWVcIjogXCLjg53jg7zjg7NcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4pmf5YW1XCIsIFwi4pmZ5YW1XCIsIFwi4pmf5qK5XCIsIFwi4pmZ5qK5XCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIkdyYW50QWNlZHJleFwiLFxuXHRcdFwidW5pdFwiOiBcIuWFtVwiLFxuXHRcdFwiZm9yY2VQcm9tb0xpbmVcIjogMSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuatqVwiLFxuXHRcdFx0XCJhdHRhY2tcIjogXCLlhbVcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIuevqemBsum6i+m9tuWhnum1ulwiXG5cdH0sXG5cdFwi5birXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjg6njgqTjgqrjg7NcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+mgeW4q1wiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCJHcmFudEFjZWRyZXhcIixcblx0XHRcInVuaXRcIjogXCLppqxcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuW4q1wiXG5cdFx0fVxuXHR9LFxuXHRcIueKgFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Om44OL44Kz44O844OzXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfpo/nioBcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwiR3JhbnRBY2VkcmV4XCIsXG5cdFx0XCJ1bml0XCI6IFwi6aasXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLnioBcIlxuXHRcdH1cblx0fSxcblx0XCLpup9cIjoge1xuXHRcdFwibmFtZVwiOiBcIuOCuOODqeODlVwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn6aS6bqfXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIkdyYW50QWNlZHJleFwiLFxuXHRcdFwidW5pdFwiOiBcIuixoVwiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6bqfXCJcblx0XHR9XG5cdH0sXG5cdFwi6bCQXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgrPjgqvjg4jjg6rjgrlcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+QiumwkFwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCJHcmFudEFjZWRyZXhcIixcblx0XHRcInVuaXRcIjogXCLosaFcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuiBllwiXG5cdFx0fVxuXHR9LFxuXHRcIuegplwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Or44O844KvXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuKZnOegplwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCJHcmFudEFjZWRyZXhcIixcblx0XHRcInVuaXRcIjogXCLou4pcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIui7ilwiXG5cdFx0fVxuXHR9LFxuXHRcIum0u1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Ki44Oz44KrXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfpoXptLtcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwiR3JhbnRBY2VkcmV4XCIsXG5cdFx0XCJ1bml0XCI6IFwi6IejXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLptLtcIlxuXHRcdH1cblx0fSxcblx0XCLlkYhcIjoge1xuXHRcdFwibmFtZVwiOiBcIuOCreODs+OCsFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLimZrnjotcIiwgXCLimZTnjotcIl0sXG5cdFx0XCJhbGlhc1wiOiBcIumAnlwiLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcImV4cGFuc2lvblwiOlwiR3JhbnRBY2VkcmV4XCIsXG5cdFx0XCJ1bml0XCI6IFwi546LXCIsXG5cdFx0XCJhdHRyXCI6IFtcImtpbmdcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLnjotcIixcblx0XHRcdFwic3RhcnRcIjogXCLlkYhcIlxuXHRcdH1cblx0fSxcblx0XCLpi7JcIjoge1xuXHRcdFwibmFtZVwiOiBcIuOCveODq+ODgOODvOODiFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLimZ/lhbVcIiwgXCLimZnlhbVcIiwgXCLimZ/pi7JcIiwgXCLimZnpi7JcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi44Kv44O844Oq44Ko44OB44Kn44K5XCIsXG5cdFx0XCJ1bml0XCI6IFwi5YW1XCIsXG5cdFx0XCJmb3JjZVByb21vTGluZVwiOiAxLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi5q2pXCIsXG5cdFx0XHRcImF0dGFja1wiOiBcIuWFtVwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi56ulXCJcblx0fSxcblx0XCLlsIRcIjoge1xuXHRcdFwibmFtZVwiOiBcIuOCt+ODpeODg+ODhOOCp1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn4+55bCEXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuOCr+ODvOODquOCqOODgeOCp+OCuVwiLFxuXHRcdFwidW5pdFwiOiBcIuixoVwiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi5YOPXCJcblx0XHR9XG5cdH0sXG5cdFwi5L2/XCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgq/jg7zjg6rjgqhcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4qi65L2/XCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuOCr+ODvOODquOCqOODgeOCp+OCuVwiLFxuXHRcdFwidW5pdFwiOiBcIuixoVwiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6IGWXCJcblx0XHR9XG5cdH0sXG5cdFwi5L2vXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgrfjg6Xjg6njgqTjg5JcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+OreS9r1wiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLjgq/jg7zjg6rjgqjjg4HjgqfjgrlcIixcblx0XHRcInVuaXRcIjogXCLou4pcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuOBjVwiXG5cdFx0fVxuXHR9LFxuXHRcIuizolwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Oe44OzXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfjpPos6JcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi44Kv44O844Oq44Ko44OB44Kn44K5XCIsXG5cdFx0XCJ1bml0XCI6IFwi6IejXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLnjotcIlxuXHRcdH1cblx0fSxcblx0XCLlpr5cIjoge1xuXHRcdFwibmFtZVwiOiBcIuOCseODvOODi+OCruODs1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLimZvlpr5cIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi44Kv44O844Oq44Ko44OB44Kn44K5XCIsXG5cdFx0XCJ1bml0XCI6IFwi6IejXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLjgZ5cIlxuXHRcdH1cblx0fSxcblx0XCLplo9cIjoge1xuXHRcdFwibmFtZVwiOiBcIuOCseODvOODi+ODklwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLimZrnjotcIiwgXCLimZTnjotcIl0sXG5cdFx0XCJhbGlhc1wiOiBcIua9pFwiLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuOCr+ODvOODquOCqOODgeOCp+OCuVwiLFxuXHRcdFwidW5pdFwiOiBcIueOi1wiLFxuXHRcdFwiYXR0clwiOiBbXCJraW5nXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi546LXCJcblx0XHR9XG5cdH0sXG5cdFwi44GoXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgajph5FcIixcblx0XHRcImRpc3BsYXlcIjogW1wi44GoXCIsIFwi5LiqXCJdLFxuXHRcdFwiYWxpYXNcIjogXCLkuKpcIixcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumHkVwiXG5cdFx0fVxuXHR9LFxuXHRcIuadj1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5oiQ6aaZXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuS7nVwiLCBcIuS7nVwiLCBcIuadj1wiXSxcblx0XHRcImFsaWFzXCI6IFwi5LudXCIsXG5cdFx0XCJhdHRyXCI6IFtcImNhcHR1cmVcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLph5FcIlxuXHRcdH1cblx0fSxcblx0XCLlnK1cIjoge1xuXHRcdFwibmFtZVwiOiBcIuaIkOahglwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLku4pcIiwgXCLku4pcIiwgXCLlnK1cIl0sXG5cdFx0XCJhbGlhc1wiOiBcIuS7ilwiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6YeRXCJcblx0XHR9XG5cdH0sXG5cdFwi5YWoXCI6IHtcblx0XHRcIm5hbWVcIjogXCLmiJDpioBcIixcblx0XHRcImRpc3BsYXlcIjogW1wi5YWoXCJdLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6YeRXCJcblx0XHR9XG5cdH0sXG5cdFwi6aasXCI6IHtcblx0XHRcIm5hbWVcIjogXCLpvo3ppqxcIixcblx0XHRcImRpc3BsYXlcIjogW1wi6b6N6aasXCIsIFwi56uc6aasXCJdLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6aasXCJcblx0XHR9XG5cdH0sXG5cdFwi6b6NXCI6IHtcblx0XHRcIm5hbWVcIjogXCLpvo3njotcIixcblx0XHRcImRpc3BsYXlcIjogW1wi6b6N546LXCIsIFwi6b6N546LXCIsIFwi56uc546LXCJdLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi56ucXCJcblx0XHR9XG5cdH0sXG5cdFwi5aaDXCI6IHtcblx0XHRcIm5hbWVcIjogXCJQ44Kv44Kk44O844OzXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuKZleWmg1wiLCBcIuKZm+Wmg1wiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuWQjlwiXG5cdFx0fVxuXHR9LFxuXHRcIumoj1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwiUOODiuOCpOODiFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLimZjpqI9cIiwgXCLimZ7pqI9cIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpqI5cIlxuXHRcdH1cblx0fSxcblx0XCLln45cIjoge1xuXHRcdFwibmFtZVwiOiBcIlDjg6vjg7zjgq9cIixcblx0XHRcImRpc3BsYXlcIjogW1wi4pmW5Z+OXCIsIFwi4pmc5Z+OXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6LuKXCJcblx0XHR9XG5cdH0sXG5cdFwi5YOnXCI6IHtcblx0XHRcIm5hbWVcIjogXCJQ44OT44K344On44OD44OXXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuKZl+WDp1wiLCBcIuKZneWDp1wiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuiBllwiXG5cdFx0fVxuXHR9LFxuXHRcIueOh1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5oiQ5Y2SXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuKKlueOh1wiLCBcIuKKluWNklwiLCBcIuKKluWFtVwiLCBcIueOh1wiLCBcIuWNklwiLCBcIuWFtVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuWNklwiXG5cdFx0fVxuXHR9LFxuXHRcIuiytFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OT44Ki44Ks44O844KkXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuKbgOiytFwiLCBcIuKbgOePoFwiLCBcIuKXieiytFwiLCBcIuKXieePoFwiXSxcblx0XHRcImFsaWFzXCI6IFwi54+gXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLjgZ5cIlxuXHRcdH1cblx0fSxcblx0XCLmnbVcIjoge1xuXHRcdFwibmFtZVwiOiBcIlDjgqLjgrfjg6Xjg69cIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+QjuadtVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumojlwiXG5cdFx0fVxuXHR9LFxuXHRcIuapoVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwiUOOCrOOCuOODo1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn5CY5qmhXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi5YOPXCJcblx0XHR9XG5cdH0sXG5cdFwi5oiwXCI6IHtcblx0XHRcIm5hbWVcIjogXCJQ44Op44K/XCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfm57miLBcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLou4pcIlxuXHRcdH1cblx0fSxcblx0XCLlt6hcIjoge1xuXHRcdFwibmFtZVwiOiBcIlDjg57jg7Pjg4jjg6pcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4pqU5beoXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi44GeXCJcblx0XHR9XG5cdH0sXG5cdFwi5b6AXCI6IHtcblx0XHRcIm5hbWVcIjogXCJQ44Op44O844K444OjXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCflLHlvoBcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLnjotcIlxuXHRcdH1cblx0fSxcblx0XCLjgatcIjoge1xuXHRcdFwibmFtZVwiOiBcIuOBq+OCj+OBqOOCilwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn5CU44GrXCJdLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6YeRXCJcblx0XHR9XG5cdH0sXG5cdFwi6bSIXCI6IHtcblx0XHRcIm5hbWVcIjogXCLptIhcIixcblx0XHRcImRpc3BsYXlcIjogW1wi6bSIXCJdLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6bSIXCJcblx0XHR9XG5cdH0sXG5cdFwi5bemXCI6IHtcblx0XHRcIm5hbWVcIjogXCLlt6Yo6baJKVwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLlt6ZcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIui7ilwiLFxuXHRcdFwiYXR0clwiOiBbXCJwcm9tb3RlZFwiXSxcblx0XHRcInJhbmdlXCI6IHt9XG5cdH0sXG5cdFwi5Y+zXCI6IHtcblx0XHRcIm5hbWVcIjogXCLlj7Mo6baJKVwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLlj7NcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIui7ilwiLFxuXHRcdFwiYXR0clwiOiBbXCJwcm9tb3RlZFwiXSxcblx0XHRcInJhbmdlXCI6IHt9XG5cdH0sXG5cdFwi6ZuVXCI6IHtcblx0XHRcIm5hbWVcIjogXCLptbBcIixcblx0XHRcImRpc3BsYXlcIjogW1wi6bWwXCIsIFwi6bWwXCJdLFxuXHRcdFwiYWxpYXNcIjogXCLptbBcIixcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumblVwiXG5cdFx0fVxuXHR9LFxuXHRcIuW5vlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5oiQ5LqsXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuOBjVwiXSxcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumHkVwiXG5cdFx0fVxuXHR9LFxuXHRcIuOBhlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5oiQ6YqFXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuOBhlwiXSxcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumHkVwiXG5cdFx0fVxuXHR9LFxuXHRcIuOBlVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5oiQ5bGxXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuOBlVwiXSxcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumHkVwiXG5cdFx0fVxuXHR9LFxuXHRcIuWkqlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5aSq5a2QXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuWkquWtkFwiXSxcblx0XHRcImF0dHJcIjogW1wia2luZ1wiLCBcImNhcHR1cmVcIiwgXCJjYW50Q2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIueOi1wiXG5cdFx0fVxuXHR9LFxuXHRcIuS9mVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5oiQ5Y+NXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuS9mVwiXSxcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumHkVwiXG5cdFx0fVxuXHR9LFxuXHRcIuWQq1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5oiQ6LezXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuWQq1wiXSxcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumHkVwiXG5cdFx0fVxuXHR9LFxuXHRcIumngVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwiUOOCq+ODvOODh+OCo+ODiuODq1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn6mQ6aeBXCIsIFwi8J+pk+mngVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumnrlwiXG5cdFx0fVxuXHR9LFxuXHRcIumniFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwiUOODnuODvOOCt+ODo+ODq1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn6mP6aeIXCIsIFwi8J+pkumniFwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumnhlwiXG5cdFx0fVxuXHR9LFxuXHRcIuiItlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwiUOODreODvOOCq1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLim7XoiLZcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLlg49cIlxuXHRcdH1cblx0fSxcblx0XCLosapcIjoge1xuXHRcdFwibmFtZVwiOiBcIlDjg4/jgrnjg4bjgqPjg7xcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+QmOixqlwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIui7ilwiXG5cdFx0fVxuXHR9LFxuXHRcIuODjVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OR44Ov44O844Ki44OD44OX44Gt44GTXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfmLrjg41cIl0sXG5cdFx0XCJhdHRyXCI6IFtcImNhcHR1cmVcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLph5FcIlxuXHRcdH1cblx0fSxcblx0XCLljYdcIjoge1xuXHRcdFwibmFtZVwiOiBcIumHkemjm+i7ilwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLph5Hpo5tcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLou4pcIlxuXHRcdH1cblx0fSxcblx0XCLloIVcIjoge1xuXHRcdFwibmFtZVwiOiBcIumKgOerquihjFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpioDnq6pcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLnq6pcIlxuXHRcdH1cblx0fSxcblx0XCLpu4RcIjoge1xuXHRcdFwibmFtZVwiOiBcIumKheaoquihjFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpioXmqKpcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLmqKpcIlxuXHRcdH1cblx0fSxcblx0XCLmobdcIjoge1xuXHRcdFwibmFtZVwiOiBcIuWwj+inklwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLlsI/op5JcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLogZZcIlxuXHRcdH1cblx0fSxcblx0XCLpp5JcIjoge1xuXHRcdFwibmFtZVwiOiBcIueZvemnklwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLnmb3pp5JcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpp5JcIlxuXHRcdH1cblx0fSxcblx0XCLpr6hcIjoge1xuXHRcdFwibmFtZVwiOiBcIumvqOmvolwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpr6jpr6JcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpr6hcIlxuXHRcdH1cblx0fSxcblx0XCLpub9cIjoge1xuXHRcdFwibmFtZVwiOiBcIumjm+m5v1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpo5vpub9cIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpub9cIlxuXHRcdH1cblx0fSxcblx0XCLpsKRcIjoge1xuXHRcdFwibmFtZVwiOiBcIum6kueNheWtkFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpupLnjYVcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLnjYVcIlxuXHRcdH1cblx0fSxcblx0XCLljYlcIjoge1xuXHRcdFwibmFtZVwiOiBcIumzs+WllOi1sFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLps7PlpZRcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLlkI5cIlxuXHRcdH1cblx0fSxcblx0XCLphZRcIjoge1xuXHRcdFwibmFtZVwiOiBcIumFlOixoVwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLphZTosaFcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpholcIlxuXHRcdH1cblx0fSxcblx0XCLnjKpcIjoge1xuXHRcdFwibmFtZVwiOiBcIuWllOeMqlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLlpZTnjKpcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLnjKpcIlxuXHRcdH1cblx0fSxcblx0XCLniZtcIjoge1xuXHRcdFwibmFtZVwiOiBcIumjm+eJm1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpo5vniZtcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLniZtcIlxuXHRcdH1cblx0fSxcblx0XCLpt4JcIjoge1xuXHRcdFwibmFtZVwiOiBcIuinkum3uVwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLop5Lpt7lcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpt4JcIlxuXHRcdH1cblx0fSxcblx0XCLpt7JcIjoge1xuXHRcdFwibmFtZVwiOiBcIumjm+m3slwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpo5vpt7JcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpt7JcIlxuXHRcdH1cblx0fSxcblx0XCLpiZBcIjoge1xuXHRcdFwibmFtZVwiOiBcIuefs+mHkeWwhlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLnn7Pph5FcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLph5FcIlxuXHRcdH1cblx0fSxcblx0XCLpi7xcIjoge1xuXHRcdFwibmFtZVwiOiBcIumHkeWwhlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpiYTph5FcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLph5FcIlxuXHRcdH1cblx0fSxcblx0XCLpjKhcIjoge1xuXHRcdFwibmFtZVwiOiBcIueMq+mHkeWwhlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLnjKvph5FcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLph5FcIlxuXHRcdH1cblx0fSxcblx0XCLpjIZcIjoge1xuXHRcdFwibmFtZVwiOiBcIum+jemHkeWwhlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpvo3ph5FcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLph5FcIlxuXHRcdH1cblx0fSxcblx0XCLpjq1cIjoge1xuXHRcdFwibmFtZVwiOiBcIuWXlOmHkeWwhlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLll5Tph5FcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLph5FcIlxuXHRcdH1cblx0fSxcblx0XCLpiJVcIjoge1xuXHRcdFwibmFtZVwiOiBcIueJm+mHkeWwhlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLniZvph5FcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLph5FcIlxuXHRcdH1cblx0fSxcblx0XCLni4JcIjoge1xuXHRcdFwibmFtZVwiOiBcIueLvOmHkeWwhlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLni7zph5FcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLph5FcIlxuXHRcdH1cblx0fSxcblx0XCLnr6lcIjoge1xuXHRcdFwibmFtZVwiOiBcIlDjg6njgqTjgqrjg7NcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+mgeevqVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuW4q1wiXG5cdFx0fVxuXHR9LFxuXHRcIumBslwiOiB7XG5cdFx0XCJuYW1lXCI6IFwiUOODpuODi+OCs+ODvOODs1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn6aP6YGyXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi54qAXCJcblx0XHR9XG5cdH0sXG5cdFwi6bqLXCI6IHtcblx0XHRcIm5hbWVcIjogXCJQ44K444Op44OVXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfppLpuotcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpup9cIlxuXHRcdH1cblx0fSxcblx0XCLpvbZcIjoge1xuXHRcdFwibmFtZVwiOiBcIlDjgrPjgqvjg4jjg6rjgrlcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+Qium9tlwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuiBllwiXG5cdFx0fVxuXHR9LFxuXHRcIuWhnlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwiUOODq+ODvOOCr1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLimZbloZ5cIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLou4pcIlxuXHRcdH1cblx0fSxcblx0XCLptbpcIjoge1xuXHRcdFwibmFtZVwiOiBcIlDjgqLjg7PjgqtcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+mhem0u1wiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIum0u1wiXG5cdFx0fVxuXHR9LFxuXHRcIuerpVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwiUOOCseODvOODi+OCruODs1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLimZXnq6VcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLjgZ5cIlxuXHRcdH1cblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRcIuOAh1wiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi5PLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLmralcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uQS4uLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi5YW1XCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uQS5BLi5cIixcblx0XHRcIi4uLk8uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIuS6jFwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi5BLi4uXCIsXG5cdFx0XCIuLi5hLi4uXCIsXG5cdFx0XCIuLi5PLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLpgJpcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi5BT0EuLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi5byQXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLkEuLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLk8uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIuWNklwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi5BLi4uXCIsXG5cdFx0XCIuLkFPQS4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLptIhcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLkEuLi5BLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uQS4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi5LuyXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLkEuLi5cIixcblx0XHRcIi4uLk8uLi5cIixcblx0XHRcIi4uLkEuLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIumJhFwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLkFBQS4uXCIsXG5cdFx0XCIuLi5PLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLmoYJcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi5BLkEuLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi5LqsXCI6IFtcblx0XHRcIi4uQS5BLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLk8uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIumojlwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLkEuQS4uXCIsXG5cdFx0XCIuQS4uLkEuXCIsXG5cdFx0XCIuLi5PLi4uXCIsXG5cdFx0XCIuQS4uLkEuXCIsXG5cdFx0XCIuLkEuQS4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLppq5cIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi5BLkEuLlwiLFxuXHRcdFwiLkQuYS5CLlwiLFxuXHRcdFwiLi5kT2IuLlwiLFxuXHRcdFwiLkQuYy5CLlwiLFxuXHRcdFwiLi5DLkMuLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi6ZuJXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLkEuLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLk8uLi5cIixcblx0XHRcIi4uQS5BLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIuW4q1wiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLkFBQS4uXCIsXG5cdFx0XCIuQS4uLkEuXCIsXG5cdFx0XCIuQS5PLkEuXCIsXG5cdFx0XCIuQS4uLkEuXCIsXG5cdFx0XCIuLkFBQS4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLnioBcIjogW1xuXHRcdFwiLiouLi4qLlwiLFxuXHRcdFwiKi5vLm8uKlwiLFxuXHRcdFwiLm8uLi5vLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLm8uLi5vLlwiLFxuXHRcdFwiKi5vLm8uKlwiLFxuXHRcdFwiLiouLi4qLlwiXG5cdF0sXG5cdFwi44GeXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uQS5BLi5cIixcblx0XHRcIi4uLk8uLi5cIixcblx0XHRcIi4uQS5BLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIumKgFwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLkFBQS4uXCIsXG5cdFx0XCIuLi5PLi4uXCIsXG5cdFx0XCIuLkEuQS4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLlg49cIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLkEuLi5BLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLkEuLi5BLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi55u4XCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi5BLi4uQi5cIixcblx0XHRcIi4uYS5iLi5cIixcblx0XHRcIi4uLk8uLi5cIixcblx0XHRcIi4uZC5jLi5cIixcblx0XHRcIi5ELi4uQy5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIuixoVwiOiBbXG5cdFx0XCIuRS4uLkYuXCIsXG5cdFx0XCJMLmUuZi5HXCIsXG5cdFx0XCIubC5hLmcuXCIsXG5cdFx0XCIuLmRPYi4uXCIsXG5cdFx0XCIuay5jLmguXCIsXG5cdFx0XCJLLmouaS5IXCIsXG5cdFx0XCIuSi4uLkkuXCJcblx0XSxcblx0XCLpupJcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uQS4uLlwiLFxuXHRcdFwiLi5BLkEuLlwiLFxuXHRcdFwiLkEuTy5BLlwiLFxuXHRcdFwiLi5BLkEuLlwiLFxuXHRcdFwiLi4uQS4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi6bOzXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi5BLi4uQS5cIixcblx0XHRcIi4uLkEuLi5cIixcblx0XHRcIi4uQU9BLi5cIixcblx0XHRcIi4uLkEuLi5cIixcblx0XHRcIi5BLi4uQS5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIuiBllwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLiouKi4uXCIsXG5cdFx0XCIuLi5PLi4uXCIsXG5cdFx0XCIuLiouKi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLpup9cIjogW1xuXHRcdFwiLkEuLi5BLlwiLFxuXHRcdFwiQS4uLi4uQVwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiQS4uLi4uQVwiLFxuXHRcdFwiLkEuLi5BLlwiXG5cdF0sXG5cdFwi54CnXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uMi4yLi5cIixcblx0XHRcIi4uLk8uLi5cIixcblx0XHRcIi4uMi4yLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLjgY1cIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uQS4uLlwiLFxuXHRcdFwiLi5BT0EuLlwiLFxuXHRcdFwiLi4uQS4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi6aaZXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLiouLi5cIixcblx0XHRcIi4uLk8uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIui7ilwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4qLi4uXCIsXG5cdFx0XCIuLipPKi4uXCIsXG5cdFx0XCIuLi4qLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLnoLJcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uKy4uLlwiLFxuXHRcdFwiLi4rTysuLlwiLFxuXHRcdFwiLi4uKy4uLlwiLFxuXHRcdFwiLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLlvJNcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4rLisuLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLi4rLisuLlwiLFxuXHRcdFwiLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLlj41cIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uKi4uLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLi4uKi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi6baJXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLiouLi5cIixcblx0XHRcIi4uLk8uLi5cIixcblx0XHRcIi4uQS4qLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIuS6q1wiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4qLi4uXCIsXG5cdFx0XCIuLi5PLi4uXCIsXG5cdFx0XCIuLiouQS4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLmqKpcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uQS4uLlwiLFxuXHRcdFwiLi4qTyouLlwiLFxuXHRcdFwiLi4uQS4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi56uqXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLiouLi5cIixcblx0XHRcIi4uQU9BLi5cIixcblx0XHRcIi4uLiouLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIuS4kVwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4yLi4uXCIsXG5cdFx0XCIuLjJPMi4uXCIsXG5cdFx0XCIuLi4yLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLlsbFcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uQS4uLlwiLFxuXHRcdFwiLi4uKi4uLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi6bS7XCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uKi4qLi5cIixcblx0XHRcIi4qby5vKi5cIixcblx0XHRcIi4uLk8uLi5cIixcblx0XHRcIi4qby5vKi5cIixcblx0XHRcIi4uKi4qLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIumHkVwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLkFBQS4uXCIsXG5cdFx0XCIuLkFPQS4uXCIsXG5cdFx0XCIuLi5BLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLpioVcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi5BQUEuLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLi4uQS4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi6aasXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uKkEqLi5cIixcblx0XHRcIi4uQU9BLi5cIixcblx0XHRcIi4uKkEqLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIuernFwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLkEqQS4uXCIsXG5cdFx0XCIuLipPKi4uXCIsXG5cdFx0XCIuLkEqQS4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLpholcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi5BQUEuLlwiLFxuXHRcdFwiLi5BT0EuLlwiLFxuXHRcdFwiLi5BLkEuLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi5ZCOXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uKioqLi5cIixcblx0XHRcIi4uKk8qLi5cIixcblx0XHRcIi4uKioqLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIumnhlwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLkEuQS4uXCIsXG5cdFx0XCIuQS4qLkEuXCIsXG5cdFx0XCIuLipPKi4uXCIsXG5cdFx0XCIuQS4qLkEuXCIsXG5cdFx0XCIuLkEuQS4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLpp65cIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi5BLkEuLlwiLFxuXHRcdFwiLkEqLipBLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLkEqLipBLlwiLFxuXHRcdFwiLi5BLkEuLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi6ZuVXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uKkEqLi5cIixcblx0XHRcIi4uQU9BLi5cIixcblx0XHRcIi4uMioyLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIueMm1wiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLkFBQS4uXCIsXG5cdFx0XCIuLi5PLi4uXCIsXG5cdFx0XCIuLkFBQS4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLomY5cIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi5BLkEuLlwiLFxuXHRcdFwiLi5BT0EuLlwiLFxuXHRcdFwiLi5BQUEuLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi542FXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi5BQUFBQS5cIixcblx0XHRcIi5BQUFBQS5cIixcblx0XHRcIi5BQU9BQS5cIixcblx0XHRcIi5BQUFBQS5cIixcblx0XHRcIi5BQUFBQS5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIumnklwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLioqKi4uXCIsXG5cdFx0XCIuLi5PLi4uXCIsXG5cdFx0XCIuLi4qLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLpr6hcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uKi4uLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLi4qKiouLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi6bm/XCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uQSpBLi5cIixcblx0XHRcIi4uQU9BLi5cIixcblx0XHRcIi4uQSpBLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIueMqlwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLiouKi4uXCIsXG5cdFx0XCIuLipPKi4uXCIsXG5cdFx0XCIuLiouKi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLniZtcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4qKiouLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLi4qKiouLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi6beCXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLkEuLi5cIixcblx0XHRcIi4uKkEqLi5cIixcblx0XHRcIi4uKk8qLi5cIixcblx0XHRcIi4uKioqLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIum3slwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuQS4uLkEuXCIsXG5cdFx0XCIuLkEqQS4uXCIsXG5cdFx0XCIuLipPKi4uXCIsXG5cdFx0XCIuLioqKi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLni7xcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi5BQUEuLlwiLFxuXHRcdFwiLi5BT0EuLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi57+FXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uQUFBLi5cIixcblx0XHRcIi4uQU9BLi5cIixcblx0XHRcIi4uQUEuLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIuaWl1wiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLkFBQS4uXCIsXG5cdFx0XCIuLkFPQS4uXCIsXG5cdFx0XCIuLi5BQS4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLnjotcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi5BQUEuLlwiLFxuXHRcdFwiLi5BT0EuLlwiLFxuXHRcdFwiLi5BQUEuLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi5Z+OXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi5CYk9hQS5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIuWbvVwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCJCYmJPYWFBXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLloZRcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi58T3wuLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi5ZGIXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi5BLkEuQS5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi5BLk8uQS5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi5BLkEuQS5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuXHRcIuWls1wiOiA1NCxcblx0XCLnjYVcIjogNDQsXG5cdFwi5ZCOXCI6IDM2LFxuXHRcIuWllFwiOiAzNixcblx0XCLpp4ZcIjogMzYsXG5cdFwi6aeuXCI6IDM0LFxuXHRcIum6n1wiOiAzMixcblx0XCLptLtcIjogMzIsXG5cdFwi6aObXCI6IDI4LFxuXHRcIuernFwiOiAyOCxcblx0XCLnorxcIjogMjQsXG5cdFwi5aGUXCI6IDIyLFxuXHRcIui7ilwiOiAyMixcblx0XCLkv6VcIjogMjAsXG5cdFwi6Ii5XCI6IDIwLFxuXHRcIuaIplwiOiAyMCxcblx0XCLosZVcIjogMjAsXG5cdFwi6KeSXCI6IDIwLFxuXHRcIui3s1wiOiAyMCxcblx0XCLnoKZcIjogMjAsXG5cdFwi6YaJXCI6IDE4LFxuXHRcIum3uVwiOiAxOCxcblx0XCLptolcIjogMTgsXG5cdFwi5LqrXCI6IDE4LFxuXHRcIue/hVwiOiAxNixcblx0XCLmlpdcIjogMTYsXG5cdFwi6L+UXCI6IDE2LFxuXHRcIuiBllwiOiAxNCxcblx0XCLpqI5cIjogMTQsXG5cdFwi55GqXCI6IDE0LFxuXHRcIuWNiFwiOiAxNCxcblx0XCLph5FcIjogMTQsXG5cdFwi5qiqXCI6IDE0LFxuXHRcIuerqlwiOiAxNCxcblx0XCLpupJcIjogMTQsXG5cdFwi6bOzXCI6IDE0LFxuXHRcIuOBhFwiOiAxNCxcblx0XCLptrRcIjogMTQsXG5cdFwi6bCQXCI6IDE0LFxuXHRcIumKgFwiOiAxMixcblx0XCLngq5cIjogMTIsXG5cdFwi44GtXCI6IDEyLFxuXHRcIuWPjVwiOiAxMixcblx0XCLomY5cIjogMTIsXG5cdFwi5YyFXCI6IDEwLFxuXHRcIuaguVwiOiAxMCxcblx0XCLlg49cIjogMTAsXG5cdFwi6IifXCI6IDEwLFxuXHRcIumHoVwiOiAxMCxcblx0XCLpm4lcIjogMTAsXG5cdFwi5qGCXCI6ICA4LFxuXHRcIuS6rFwiOiAgOCxcblx0XCLpioVcIjogIDgsXG5cdFwi5bGxXCI6ICA4LFxuXHRcIummrlwiOiAgOCxcblx0XCLppq1cIjogIDgsXG5cdFwi6aaoXCI6ICA4LFxuXHRcIueMm1wiOiAgOCxcblx0XCLppplcIjogIDcsXG5cdFwi56iuXCI6ICA3LFxuXHRcIuiHo1wiOiAgNyxcblx0XCLjgY1cIjogIDcsXG5cdFwi44GeXCI6ICA3LFxuXHRcIuWQjFwiOiAgNyxcblx0XCLosaFcIjogIDUsXG5cdFwi5aOrXCI6ICA1LFxuXHRcIuebuFwiOiAgNCxcblx0XCLku5VcIjogIDQsXG5cdFwi5Y2GXCI6ICA0LFxuXHRcIuS7slwiOiAgNCxcblx0XCLmralcIjogIDMsXG5cdFwi5YW1XCI6ICAzLFxuXHRcIua1nFwiOiAgMyxcblx0XCLjgbJcIjogIDIsXG5cdFwi54eVXCI6ICAyLFxuXHRcIuS4mFwiOiAgMixcblx0XCLmorlcIjogIDIsXG5cdFwi6LKdXCI6ICAyLFxuXHRcIuWNklwiOiAgMixcblx0XCLngatcIjogIDIsXG5cdFwi5aSpXCI6ICAyLFxuXHRcIuefolwiOiAgMixcblx0XCLmnKhcIjogIDIsXG5cdFwi5pysXCI6ICAyLFxuXHRcIuWkp1wiOiAgMixcblx0XCLlpK5cIjogIDIsXG5cdFwi44OpXCI6ICAwLFxuXHRcIum1rFwiOiAtNCxcblx0XCLnjolcIjogLTgsXG5cdFwi44KJXCI6IC04LFxuXHRcIueOi1wiOi0xMixcblx0XCLlm71cIjotMTIsXG5cdFwi5ZGIXCI6LTEyLFxuXHRcIuWQm1wiOi0xNixcblx0XCLkuLtcIjotMTgsXG5cdFwi5qWaXCI6LTI0LFxuXHRcIuW4pVwiOi0yOFxufVxuIiwiY29uc3QgYmFzZSA9ICcuL2pzb24vU2hvZ2lDcm9zcy8nO1xuZnVuY3Rpb24gaW1wb3J0SnNvbihuYW1lKSB7XG5cdGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHR4aHIub3BlbihcIkdFVFwiLCBgJHtiYXNlfSR7bmFtZX0uanNvbmAsIGZhbHNlKTtcblx0eGhyLnNlbmQoKTtcblx0aWYoeGhyLnN0YXR1cyA9PT0gMjAwKVxuXHRcdHJldHVybiBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuXHRlbHNlXG5cdFx0cmV0dXJuIHt9O1xufVxuXG5leHBvcnQgY29uc3QganNvbiA9IHtcblx0Y2FudmFzRm9udDogaW1wb3J0SnNvbihcImNhbnZhc0ZvbnRcIiksXG5cdGdhbWVTb2Z0OiBpbXBvcnRKc29uKFwiZ2FtZVNvZnRcIiksXG5cdGdhbWVzOiBpbXBvcnRKc29uKFwiZ2FtZXNcIiksXG5cdGJvYXJkczogaW1wb3J0SnNvbihcImJvYXJkc1wiKSxcblx0cGFuZWxzOiBpbXBvcnRKc29uKFwicGFuZWxzXCIpLFxuXHRwaWVjZXM6IGltcG9ydEpzb24oXCJwaWVjZXNcIiksXG5cdHBpZWNlUmFuZ2U6IGltcG9ydEpzb24oXCJwaWVjZVJhbmdlXCIpLFxuXHRwaWVjZUNvc3Q6IGltcG9ydEpzb24oXCJwaWVjZUNvc3RcIilcbn07XG4iLCIvKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IENhbnZhc0ZvbnRcbiAqIEBwcm9wIHt7Zm9udE5hbWU6IHN0cmluZywgZm9udFdlaWdodDogbnVtYmVyfVtdfSBmb250cyAtIHtmb250TmFtZTog44OV44Kp44Oz44OI5ZCNLCBmb250V2VpZ2h0OiDjg5Xjgqnjg7Pjg4jjga7lpKrjgZV9XG4gKi9cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gR2FtZVNvZnRcbiAqIEBwcm9wIHtzdHJpbmd9IG5hbWUgLSDjgrLjg7zjg6DlkI1cbiAqIEBwcm9wIHtzdHJpbmd9IHBsYXlCb2FyZCAtIOS9v+eUqOOBmeOCi+ODnOODvOODieWQjVxuICogQHByb3Age2Jvb2xlYW59IHVzZVN0YW5kIC0g6aeS5Y+w44Gu5L2/55So5pyJ54ShXG4gKiBAcHJvcCB7e2dhbWVOYW1lOiBzdHJpbmcsIHBpZWNlU2V0OiBzdHJpbmd9W119IHBsYXlQaWVjZXMgLSB7Z2FtZU5hbWU6IOOCsuODvOODoOWQjSwgcGllY2VTZXQ6IOmnkuOCu+ODg+ODiOOBruWQjeensH1cbiAqL1xuLyoqXG4gKiBAdHlwZWRlZiBHYW1lXG4gKiBAcHJvcCB7c3RyaW5nfSBlbmdsaXNoIC0g6Iux6Kqe5ZCNXG4gKiBAcHJvcCB7c3RyaW5nfSBmb250Q29sb3IgLSDpp5Ljga7jg5Xjgqnjg7Pjg4joibJcbiAqIEBwcm9wIHtzdHJpbmd9IHByb21vdGVGb250Q29sb3IgLSDmiJDpp5Ljga7jg5Xjgqnjg7Pjg4joibJcbiAqIEBwcm9wIHtzdHJpbmd9IGJhY2tncm91bmRDb2xvciAtIOmnkuOBruiJslxuICogQHByb3Age3N0cmluZ30gcHJvbW90ZUJhY2tncm91bmRDb2xvciAtIOaIkOmnkuOBruiJslxuICogQHByb3Age3N0cmluZ30gYm9yZGVyQ29sb3IgLSDpp5Ljga7mnqDoibJcbiAqIEBwcm9wIHtzdHJpbmd9IHByb21vdGVCYWNrZ3JvdW5kQ29sb3IgLSDmiJDpp5Ljga7mnqDoibJcbiAqIEBwcm9wIHtudW1iZXJ9IHByb21vTGluZSAtIOODl+ODreODouODvOOCt+ODp+ODs+ODqeOCpOODsyjmiJDjgorjga7mrrUpXG4gKiBAcHJvcCB7T2JqZWN0PHN0cmluZywgT2JqZWN0PHN0cmluZywgc3RyaW5nW10+Pn0gcG9zaXRpb24gLSDpp5Ljga7phY3nva7jg4fjg7zjgr9cbiAqL1xuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBCb2FyZEluaXRPcHRpb24gLSDjg5zjg7zjg4njga7liJ3mnJ/ljJbjgqrjg5fjgrfjg6fjg7NcbiAqIEBwcm9wIHtudW1iZXJ9IGNhbnZhc1dpZHRoIC0gQ2FudmFz5bmFXG4gKiBAcHJvcCB7bnVtYmVyfSBjYW52YXNIZWlnaHQgLSBDYW52YXPpq5jjgZVcbiAqIEBwcm9wIHtjYW52YXNGaXR9IGNhbnZhc0ZpdCAtIENhbnZhc+OCteOCpOOCuuOBruiHquWLleiqv+aVtFxuICogQHByb3Age251bWJlcn0gYm9hcmRMZWZ0IC0g5o+P5YaZ44GZ44KLWOW6p+aomVxuICogQHByb3Age251bWJlcn0gYm9hcmRUb3AgLSDmj4/lhpnjgZnjgotZ5bqn5qiZXG4gKiBAcHJvcCB7bnVtYmVyfSBwYW5lbFdpZHRoIC0g44Oe44K555uu5bmFXG4gKiBAcHJvcCB7bnVtYmVyfSBwYW5lbEhlaWdodCAtIOODnuOCueebrumrmOOBlVxuICogQHByb3Age251bWJlcn0gcGllY2VTaXplIC0g6aeS44Gu5aSn44GN44GVXG4gKiBAcHJvcCB7Ym9vbGVhbn0gdXNlUmFua1NpemUgLSDpp5Ljga7lpKfjgY3jgZXjgpLmoLzjga7pgZXjgYTjgaflpInmm7TjgZnjgotcbiAqIEBwcm9wIHtib29sZWFufSBpc0RyYXdTaGFkb3cgLSDpp5Ljga7lvbHjga7mj4/lhpnmnInnhKFcbiAqIEBwcm9wIHtudW1iZXJ9IGJvcmRlcldpZHRoIC0g5p6g57ea5aSq44GVXG4gKiBAcHJvcCB7Ym9vbGVhbn0gdXNlU3RhbmQgLSDpp5Llj7Djga7kvb/nlKjmnInnhKFcbiAqIEBwcm9wIHtzdHJpbmd9IGJhY2tncm91bmRDb2xvciAtIOiDjOaZr+iJsijjg4fjg5Xjgqnjg6vjg4jnhKHoibIpXG4gKiBAcHJvcCB7Ym9vbGVhbn0gYXV0b0RyYXdpbmcgLSDmj4/lhpnjga7oh6rli5Xmm7TmlrDmnInnhKFcbiAqIEBwcm9wIHsoQm9hcmQpPT52b2lkfSBvbkRyYXdlZCAtIOaPj+WGmeOCpOODmeODs+ODiFxuICogQHByb3AgeyhpKT0+dm9pZH0gb25HYW1lT3ZlciAtIOOCsuODvOODoOOCquODvOODkOODvOOCpOODmeODs+ODiFxuICogQHByb3Age2Jvb2xlYW59IGZyZWVNb2RlIC0g44OV44Oq44O844Oi44O844OJ5pyJ5Yq55YyWL+eEoeWKueWMllxuICovXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBhbmVsSW5pdE9wdGlvbiAtIOODnuOCueebruOBruWIneacn+WMluOCquODl+OCt+ODp+ODs1xuICogQHByb3Age3N0cmluZ30gbmFtZSAtIOODnuOCueebruOBruWQjeWJjVxuICogQHByb3Age3N0cmluZ30gdGV4dCAtIOODnOODvOODieihqOekuuaWh+Wtl+WIl1xuICogQHByb3Age3N0cmluZ30gYmFja2dyb3VuZENvbG9yIC0g44Oe44K555uu44Gu6ImyXG4gKiBAcHJvcCB7c3RyaW5nfSBib3JkZXJDb2xvciAtIOaeoOiJsuWPiuOBs+ODleOCqeODs+ODiOiJslxuICogQHByb3Age3N0cmluZ30gc2VsZWN0Q29sb3IgLSDpgbjmip7jgZfjgZ/mmYLjga7oibJcbiAqIEBwcm9wIHtzdHJpbmd9IHRhcmdldENvbG9yIC0g6aeS44KS6YG45oqe44GX44Gf5pmC44Gu6ImyXG4gKiBAcHJvcCB7c3RyaW5nfSBkaXNwbGF5VGV4dCAtIOihqOekuuOBmeOCi+aWh+Wtlygx5paH5a2XKVxuICogQHByb3Age251bWJlcn0gdGV4dFJvdGF0ZSAtIOihqOekuuOBmeOCi+aWh+Wtl+OBruWbnui7ouinkihkZWcpXG4gKiBAcHJvcCB7Ym9vbGVhbn0gYm9yZGVyU2xhc2hMZWZ0IC0g5bem5pac57eaKO+8vCnjga7mnInnhKFcbiAqIEBwcm9wIHtib29sZWFufSBib3JkZXJTbGFzaFJpZ2h0IC0g5Y+z5pac57eaKO+8jynjga7mnInnhKFcbiAqIEBwcm9wIHtib29sZWFufSBpbnRlcnNlY3QgLSDkuqTngrnjgpLkuK3lv4PjgajjgZnjgotcbiAqIEBwcm9wIHtzdHJpbmdbXX0gYXR0ciAtIOODnuOCueebruOBruapn+iDveOBruWxnuaAp1xuICovXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBpZWNlSW5pdE9wdGlvbiAtIOmnkuOBruWIneacn+WMluOCquODl+OCt+ODp+ODs1xuICogQHByb3Age3N0cmluZ30gbmFtZSAtIOmnkuOBruWQjeWJjVxuICogQHByb3Age3N0cmluZ1tdfSBkaXNwbGF5IC0g6aeS44Gr6KGo56S644GZ44KL5paH5a2X5YiXKDHjgIEy5paH5a2XKeOBrumFjeWIl1xuICogQHByb3Age3N0cmluZ30gaW1nU3JjIC0g6aeS44Go44GX44Gm6KGo56S644GZ44KL55S75YOP44OR44K544Gu6YWN5YiXXG4gKiBAcHJvcCB7Ym9vbGVhbn1pc1JvdGF0ZUltZyAtIOmBjueUu+WDj+OCkuioreWumuOBmeOCi+WgtOWQiOWbnui7ouOBmeOCi+OBi1xuICogQHByb3Age3N0cmluZ30gYWxpYXMgLSDjgq3jg7zjga7liKXlkI3jgajjgZfjgablrprjgoHjgovmloflrZfjga7pm4blkIjooahcbiAqIEBwcm9wIHtzdHJpbmd9IGdhbWVOYW1lIC0g6aeS44Gr5a++5b+c44GZ44KL44Ky44O844Og5ZCNXG4gKiBAcHJvcCB7c3RyaW5nfSBleHBhbnNpb24gLSDjgrLjg7zjg6DlkI3jga7ntLDliIbpoZ5cbiAqIEBwcm9wIHtcIuWFtVwifFwi6aasXCJ8XCLosaFcInxcIui7ilwifFwi6IejXCJ8XCLnjotcInxcIuaIkFwifSB1bml0IC0g6aeS44Gu5YW156iuXG4gKiBAcHJvcCB7bnVtYmVyfWZvcmNlUHJvbW9MaW5lIC0g6KGM44GN44Gp44GT44KN44Gu44Gq44GE6aeS44Go44Gq44KL5q61XG4gKiBAcHJvcCB7T2JqZWN0fSByYW5nZSAtIOmnkuOBruenu+WLleevhOWbslxuICogQHByb3Age3N0cmluZ1tdfSByYW5nZS5kZWZhdWx0IC0g6YCa5bi45pmC44Gu56e75YuV56+E5ZuyXG4gKiBAcHJvcCB7c3RyaW5nW119IHJhbmdlLmF0dGFjayAtIOmnkuWPluW+l+aZguOBruenu+WLleevhOWbslxuICogQHByb3Age3N0cmluZ1tdfSByYW5nZS5zdGFydCAtIOWIneWbnuOBruOBv+OBruenu+WLleevhOWbslxuICogQHByb3Age3N0cmluZ1tdfSByYW5nZS5jYXN0bGluZyAtIOOCreODo+OCueODquODs+OCsOaZguOBruenu+WLleevhOWbslxuICogQHByb3Age3N0cmluZ1tdfSByYW5nZS5lblBhc3NhbnQgLSDjgqLjg7Pjg5Hjg4PjgrXjg7PmmYLjga7np7vli5Xnr4Tlm7JcbiAqIEBwcm9wIHtzdHJpbmdbXX0gcmFuZ2UucGFsYWNlU2xhc2ggLSDkuZ3lrq7lhoXjgafjga7np7vli5Xnr4Tlm7JcbiAqIEBwcm9wIHtzdHJpbmd9IHByb21vIC0g44OX44Ot44Oi44O844K344On44Oz5YWI44Gu6aeS44Gu5LiA5paH5a2X6KGo6KiYXG4gKiBAcHJvcCB7c3RyaW5nW119IGF0dHIgLSDpp5Ljga7mqZ/og73jga7jg6rjgrnjg4hcbiAqL1xuXG5pbXBvcnQgY2FudmFzRm9udCBmcm9tIFwiLi4vZGF0YS9jYW52YXNGb250LmpzXCI7XG5pbXBvcnQgZ2FtZVNvZnQgZnJvbSBcIi4uL2RhdGEvZ2FtZVNvZnQuanNcIjtcbmltcG9ydCBnYW1lcyBmcm9tIFwiLi4vZGF0YS9nYW1lcy5qc1wiO1xuaW1wb3J0IGJvYXJkcyBmcm9tIFwiLi4vZGF0YS9ib2FyZHMuanNcIjtcbmltcG9ydCBwYW5lbHMgZnJvbSBcIi4uL2RhdGEvcGFuZWxzLmpzXCI7XG5pbXBvcnQgcGllY2VzIGZyb20gXCIuLi9kYXRhL3BpZWNlcy5qc1wiO1xuaW1wb3J0IHBpZWNlUmFuZ2UgZnJvbSBcIi4uL2RhdGEvcGllY2VSYW5nZS5qc1wiO1xuaW1wb3J0IHBpZWNlQ29zdCBmcm9tIFwiLi4vZGF0YS9waWVjZUNvc3QuanNcIjtcbmltcG9ydCB7anNvbn0gZnJvbSBcIi4vanNvbi94aHIuanNcIjtcblxuZXhwb3J0IHtcblx0LyoqIENhbnZhc+eUqOOBrkdvb2dsZeODleOCqeODs+ODiOaDheWgsVxuXHQgKiBAdHlwZSB7Q2FudmFzRm9udH1cblx0ICovXG5cdGNhbnZhc0ZvbnQsXG5cblx0LyoqIOOCsuODvOODoOaDheWgsSjjg5zjg7zjg4kr6aeSKeOBruODl+ODquOCu+ODg+ODiFxuXHQgKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgR2FtZVNvZnQ+fVxuXHQgKi9cblx0Z2FtZVNvZnQsXG5cblx0LyoqIOOCsuODvOODoOOBrueorumhnuOBq+WFsemAmuOBmeOCi+mnkuaDheWgseOChOmnkumFjee9ruaDheWgsVxuXHQgKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgR2FtZT59XG5cdCAqL1xuXHRnYW1lcyxcblxuXHQvKipcblx0ICog44Oc44O844OJ44Gu5qeL5oiQ5oOF5aCxXG5cdCAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBCb2FyZEluaXRPcHRpb24+fVxuXHQgKi9cblx0Ym9hcmRzLFxuXG5cdC8qKlxuXHQgKiDjg5zjg7zjg4nkuK3jga7jg57jgrnnm67mg4XloLFcblx0ICogQHR5cGUge09iamVjdDxzdHJpbmcsIFBhbmVsSW5pdE9wdGlvbn1cblx0ICovXG5cdHBhbmVscyxcblxuXHQvKipcblx0ICog6aeS5oOF5aCxXG5cdCAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBQaWVjZUluaXRPcHRpb24+fVxuXHQgKi9cblx0cGllY2VzLFxuXG5cdC8qKlxuXHQgKiBAdHlwZWRlZiB7c3RyaW5nW119IFBpZWNlUmFuZ2Ug6aeS44Gu56e75YuV56+E5ZuyXG5cdCAqL1xuXHQvKipcblx0ICog6aeS44Gu56e75YuV56+E5ZuyXG5cdCAqIEB0eXBle09iamVjdDxzdHJpbmcsIFBpZWNlUmFuZ2U+fVxuXHQgKi9cblx0cGllY2VSYW5nZSxcblxuXHQvKipcblx0ICog6aeS44Gu5L6h5YCkXG5cdCAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBudW1iZXI+fVxuXHQgKi9cblx0cGllY2VDb3N0XG59XG5cbk9iamVjdC5hc3NpZ24oY2FudmFzRm9udCwganNvbi5jYW52YXNGb250KTtcbk9iamVjdC5hc3NpZ24oZ2FtZVNvZnQsIGpzb24uZ2FtZVNvZnQpO1xuT2JqZWN0LmFzc2lnbihnYW1lcywganNvbi5nYW1lcyk7XG5PYmplY3QuYXNzaWduKGJvYXJkcywganNvbi5ib2FyZHMpO1xuT2JqZWN0LmFzc2lnbihwYW5lbHMsIGpzb24ucGFuZWxzKTtcbk9iamVjdC5hc3NpZ24ocGllY2VzLCBqc29uLnBpZWNlcyk7XG5PYmplY3QuYXNzaWduKHBpZWNlUmFuZ2UsIGpzb24ucGllY2VSYW5nZSk7XG5PYmplY3QuYXNzaWduKHBpZWNlQ29zdCwganNvbi5waWVjZUNvc3QpO1xuIiwiaW1wb3J0IHtjYW52YXNGb250LCBwYW5lbHMsIHBpZWNlc30gZnJvbSBcIi4vanNvbi5qc1wiO1xuZXhwb3J0IHtjYW52YXNGb250fTtcblxuLyoqIOiqreOBv+i+vOOCgOaWh+Wtl+OBruS4gOimp+OCkuWPluW+l1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuY29uc3QgZ2V0Q2hhcnMgPSAoKSA9PiBbLi4uXG5cdG5ldyBTZXQoWy4uLlxuXHRcdE9iamVjdC52YWx1ZXMocGFuZWxzKS5tYXAoKHtkaXNwbGF5VGV4dH0pPT5kaXNwbGF5VGV4dCkuam9pbihcIlwiKStcblx0XHRPYmplY3QudmFsdWVzKHBpZWNlcykubWFwKCh7ZGlzcGxheX0pPT5kaXNwbGF5PyBkaXNwbGF5LmpvaW4oXCJcIik6IFwiXCIpLmpvaW4oXCJcIilcblx0XSlcbl0uc29ydCgpLmpvaW4oXCJcIik7XG5cbi8qKiBDYW52YXPnlKjjg5Xjgqnjg7Pjg4jnrqHnkIYgKi9cbk9iamVjdC5hc3NpZ24oY2FudmFzRm9udCwge1xuXHQvKiog6Kqt44G/6L6844G/5riI44G/44Gn44GC44KL44GLPyAqL1xuXHRpbXBvcnRlZDogZmFsc2UsXG5cblx0LyoqIOiqreOBv+i+vOOCgOODleOCqeODs+ODiOOBruS4gOimpyhcIixcIuWMuuWIh+OCiilcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdG5hbWVzOiBcIlwiLFxuXG5cdC8qKiDjg5Xjgqnjg7Pjg4jjga7oqq3jgb/ovrzjgb9cblx0ICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG5cdCAqL1xuXHRhc3luYyBpbXBvcnRBc3luYygpe1xuXHRcdGlmKHRoaXMuaW1wb3J0ZWQpIHJldHVybjtcblx0XHRjb25zdCBnb29nbGVVcmwgPSBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9XCI7XG5cdFx0Y29uc3QgY2hhcnMgPSBnZXRDaGFycygpO1xuXHRcdGNvbnN0IHVuaXF1ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCk7XG5cdFx0dGhpcy5uYW1lcyA9IGNhbnZhc0ZvbnQuZm9udHMubWFwKG89PmBcIiR7b1swXX0ke3VuaXF1ZX1cImApLmpvaW4oXCIsXCIpK1wiLHNlcmlmXCI7XG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKFxuXHRcdFx0Y2FudmFzRm9udC5mb250cy5tYXAoYXN5bmMgKFtmb250TmFtZSwgZm9udFdlaWdodF0pPT57XG5cdFx0XHRcdGNvbnN0IGZvbnROYW1lUGx1cyA9IGZvbnROYW1lLnJlcGxhY2UoLyAvZywgXCIrXCIpO1xuXHRcdFx0XHRjb25zdCBmb250VXJsID0gYCR7Z29vZ2xlVXJsfSR7Zm9udE5hbWVQbHVzfTp3Z2h0QCR7Zm9udFdlaWdodH0mdGV4dD0ke2NoYXJzfWA7XG5cdFx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGZvbnRVcmwpO1xuXHRcdFx0XHRpZighcmVzLm9rKSByZXR1cm47XG5cdFx0XHRcdGNvbnN0IGNzcyA9IGF3YWl0IHJlcy50ZXh0KCk7XG5cdFx0XHRcdGNvbnN0IG1hdGNoVXJscyA9IGNzcy5tYXRjaCgvdXJsXFwoLis/XFwpL2cpO1xuXHRcdFx0XHRpZighbWF0Y2hVcmxzKSB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgZm91bmQgZm9udC5cIik7XG5cblx0XHRcdFx0Zm9yIChjb25zdCB1cmwgb2YgbWF0Y2hVcmxzKSB7XG5cdFx0XHRcdFx0Y29uc3QgZm9udEZhY2UgPSBuZXcgRm9udEZhY2UoYCR7Zm9udE5hbWV9JHt1bmlxdWV9YCwgdXJsKTtcblx0XHRcdFx0XHRkb2N1bWVudC5mb250cy5hZGQoZm9udEZhY2UpO1xuXHRcdFx0XHRcdGF3YWl0IGZvbnRGYWNlLmxvYWQoKS5jYXRjaCgoKT0+e30pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdCkudGhlbihfPT50aGlzLmltcG9ydGVkID0gdHJ1ZSk7XG5cdH1cbn0pO1xuIiwiaW1wb3J0IHtwYW5lbHMsIHBpZWNlc30gZnJvbSBcIi4vanNvbi5qc1wiO1xuXG4vKiog55S75YOP6Kqt44G/6L6844G/5Yem55CGXG4gKiBAcGFyYW0ge3N0cmluZ30gc3JjIC0g55S75YOP44OR44K5XG4gKiBAcmV0dXJucyBQcm9taXNlPEltYWdlPlxuICovXG5mdW5jdGlvbiBsb2FkSW1hZ2Uoc3JjKXtcblx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmU9Pntcblx0XHRjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXHRcdGltYWdlLnNyYyA9IHNyYztcblx0XHRpbWFnZS5vbmxvYWQgPSAoKT0+cmVzb2x2ZShpbWFnZSk7XG5cdH0pO1xufVxuXG4vKiog6Kqt44G/6L6844KA55S75YOP44OR44K544Gu5LiA6KanXG4gKiBAdHlwZSB7c3RyaW5nW119XG4gKi9cbmNvbnN0IGltZ1NyY3MgPSBbLi4ubmV3IFNldChcblx0T2JqZWN0LnZhbHVlcyhwYW5lbHMpLmZsYXRNYXAoKHtpbWdTcmN9KT0+aW1nU3JjPz9bXSlcblx0LmNvbmNhdChPYmplY3QudmFsdWVzKHBpZWNlcykuZmxhdE1hcCgoe2ltZ1NyY30pPT5pbWdTcmM/P1tdKSlcbildO1xuXG4vKiogQ2FudmFz55So55S75YOP44Gu566h55CGICovXG5leHBvcnQgY29uc3QgY2FudmFzSW1hZ2UgPSB7XG5cdC8qKiDoqq3jgb/ovrzjgb/muIjjgb/jgafjgYLjgovjgYs/ICovXG5cdGltcG9ydGVkOiBmYWxzZSxcblxuXHQvKiog6Kqt44G/6L6844KT44Gg55S75YOP44OH44O844K/XG5cdCAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBJbWFnZT59XG5cdCAqL1xuXHRpbWFnZXM6IHt9LFxuXG5cdC8qKiDnlLvlg4/jga7oqq3jgb/ovrzjgb9cblx0ICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG5cdCAqL1xuXHRhc3luYyBpbXBvcnRBc3luYygpe1xuXHRcdGlmKHRoaXMuaW1wb3J0ZWQpIHJldHVybjtcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoXG5cdFx0XHRpbWdTcmNzLm1hcChhc3luYyBzcmM9Pntcblx0XHRcdFx0dGhpcy5pbWFnZXNbc3JjXSA9IGF3YWl0IGxvYWRJbWFnZShzcmMpO1xuXHRcdFx0fSlcblx0XHQpLnRoZW4oXz0+dGhpcy5pbXBvcnRlZCA9IHRydWUpXG5cdH1cbn07XG5cbiIsImNvbnN0IGdldE1pbWUgPSAoZXh0KT0+XG5cdFwiaW1hZ2UvXCIrZXh0LnJlcGxhY2UoXCJqcGdcIiwgXCJqcGVnXCIpO1xuXG4vKiog44Kt44Oj44Oz44OQ44K544Gu55S75YOP44KS5Y+W5b6X44GZ44KLXG4gKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fX0gY2FudmFzIC0gQ2FudmFz6KaB57SgXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgLSDlj5blvpfjgZnjgovjg5XjgqHjgqTjg6vlkI0o5ouh5by15a2Q44KS6Zmk44GPKVxuICogQHBhcmFtIHtzdHJpbmd9IGV4dCAtIOaLoeW8teWtkFxuICogQHBhcmFtIHtcImJhc2U2NFwifFwiYmxvYlwifSB1cmxUeXBlIC0g55Sf5oiQVVJM44K/44Kk44OXXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRvd25sb2FkSW1hZ2UoY2FudmFzLCBmaWxlTmFtZT1cImltYWdlXCIsIGV4dD1cInBuZ1wiLCB1cmxUeXBlPVwiYmFzZTY0XCIpe1xuXHRjb25zdCBtaW1lID0gZ2V0TWltZShleHQpO1xuXHRjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGxldCB1cmw7XG5cdGlmKHVybFR5cGUgPT09IFwiYmxvYlwiKVxuXHRcdHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoXG5cdFx0XHRhd2FpdCBuZXcgUHJvbWlzZShyZXM9PmNhbnZhcy50b0Jsb2IocmVzKSwgbWltZSkpO1xuXHRlbHNlXG5cdFx0dXJsID0gY2FudmFzLnRvRGF0YVVSTChtaW1lKTtcblx0YS5ocmVmID0gdXJsO1xuXHRhLmRvd25sb2FkID0gYCR7ZmlsZU5hbWV9LiR7ZXh0fWA7XG5cdGEuY2xpY2soKTtcblx0aWYodXJsVHlwZSA9PT0gXCJibG9iXCIpIFVSTC5yZXZva2VPYmplY3RVUkwoYS5ocmVmKTtcbn1cbiIsImltcG9ydCB7Y2FudmFzRm9udH0gZnJvbSBcIi4vY2FudmFzRm9udExvYWRlci5qc1wiO1xuaW1wb3J0IHtjYW52YXNJbWFnZX0gZnJvbSBcIi4vY2FudmFzSW1hZ2VMb2FkZXIuanNcIjtcbmltcG9ydCB7cGFuZWxzfSBmcm9tIFwiLi9qc29uLmpzXCI7XG5cbi8qKiDjg57jgrnnm67jga7nrqHnkIbjgq/jg6njgrkgKi9cbmV4cG9ydCBjbGFzcyBQYW5lbHtcblx0I2lzU2VsZWN0ZWQ7XG5cdCN0YXJnZXRSYW5nZXM7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7YW55fSBjdHggLSBDYW52YXPmj4/nlLvjgrPjg7Pjg4bjgq3jgrnjg4hcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNoYXIgLSDjg57jgrnnm67jgpLnpLrjgZnmloflrZdcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNlbnRlciAtIOaPj+WGmeOBmeOCi1jluqfmqJko5Lit5b+D5Y6f54K5KVxuXHQgKiBAcGFyYW0ge251bWJlcn0gbWlkZGxlIC0g5o+P5YaZ44GZ44KLWeW6p+aomSjkuK3lv4Pljp/ngrkpXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIOODnuOCueebruW5hVxuXHQgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IC0g44Oe44K555uu6auY44GVXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBib3JkZXJXaWR0aCAtIOaeoOe3muOBruWkquOBlVxuXHQgKiBAcGFyYW0ge251bWJlcn0gcFggLSDjg5zjg7zjg4nkuIrjga7jg57jgrnnm67jga7liJdcblx0ICogQHBhcmFtIHtudW1iZXJ9IHBZIC0g44Oc44O844OJ5LiK44Gu44Oe44K555uu44Gu6KGMXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihjdHgsIGNoYXIsIGNlbnRlciwgbWlkZGxlLCB3aWR0aCwgaGVpZ2h0LCBib3JkZXJXaWR0aCwgcFgsIHBZKXtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHBhbmVsc1tjaGFyXSk7XG5cdFx0dGhpcy5jdHggPSBjdHg7XG5cdFx0dGhpcy5jZW50ZXIgPSBjZW50ZXI7XG5cdFx0dGhpcy5taWRkbGUgPSBtaWRkbGU7XG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdHRoaXMubGVmdCA9IGNlbnRlci13aWR0aC8yO1xuXHRcdHRoaXMudG9wID0gbWlkZGxlLWhlaWdodC8yO1xuXHRcdHRoaXMucmlnaHQgPSBjZW50ZXIrd2lkdGgvMjtcblx0XHR0aGlzLmJvdHRvbSA9IG1pZGRsZStoZWlnaHQvMjtcblx0XHR0aGlzLmJvcmRlcldpZHRoID0gYm9yZGVyV2lkdGg7XG5cdFx0dGhpcy5wWCA9IHBYO1xuXHRcdHRoaXMucFkgPSBwWTtcblx0XHR0aGlzLnNlbGVjdENvbG9yID8/PSBcIiNGRjAwMDA2NlwiO1xuXHRcdHRoaXMudGFyZ2V0Q29sb3IgPz89IFwiIzAwRkYwMDY2XCI7XG5cdFx0dGhpcy5hdHRyID8/PSBbXTtcblx0XHR0aGlzLnBpZWNlID0gbnVsbDtcblx0XHR0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcblx0XHR0aGlzLmNsZWFyVGFyZ2V0KCk7XG5cdH1cblxuXHQvKiog44Oe44K555uu44Gu6YG45oqe54q25oWLXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcblx0ICovXG5cdHNldCBpc1NlbGVjdGVkKHZhbHVlKXtcblx0XHR0aGlzLiNpc1NlbGVjdGVkID0gdGhpcy5oYXNBdHRyKFwia2VlcE91dFwiKT8gZmFsc2U6IHZhbHVlO1xuXHR9XG5cdGdldCBpc1NlbGVjdGVkKCl7XG5cdFx0cmV0dXJuIHRoaXMuI2lzU2VsZWN0ZWQ7XG5cdH1cblxuXHQvKiog44Oe44K555uu44Gu56e75YuV5Y+v6IO95Yik5a6aXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcblx0ICovXG5cdGdldCBpc1RhcmdldCgpe1xuXHRcdHJldHVybiAwIDwgdGhpcy4jdGFyZ2V0UmFuZ2VzLmxlbmd0aDtcblx0fVxuXG5cdC8qKiDjg57jgrnnm67jga7np7vli5XlhYjmg4XloLHjgpLjgq/jg6rjgqIgKi9cblx0Y2xlYXJUYXJnZXQoKXtcblx0XHR0aGlzLiN0YXJnZXRSYW5nZXMgPSBbXTtcblx0fVxuXG5cdC8qKiDjg57jgrnnm67jga7np7vli5XlhYjmg4XloLHjgpLov73liqBcblx0ICogQHBhcmFtIHtzdHJpbmd9IHJhbmdlTmFtZSAtIOenu+WLleWFiOaDheWgsVxuXHQgKi9cbiAgIGFkZFRhcmdldChyYW5nZU5hbWUpe1xuXHRcdHRoaXMuI3RhcmdldFJhbmdlcy5wdXNoKHJhbmdlTmFtZSk7XG5cdH1cblxuXHQvKiog44Oe44K555uu44GM56e75YuV5YWI5oOF5aCx44KS5oyB44Gj44Gm44GE44KL44GL5Yik5a6aXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSByYW5nZU5hbWUgLSDnp7vli5XlhYjmg4XloLFcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRoYXNUYXJnZXQocmFuZ2VOYW1lKXtcblx0XHRyZXR1cm4gdGhpcy4jdGFyZ2V0UmFuZ2VzLmluY2x1ZGVzKHJhbmdlTmFtZSk7XG5cdH1cblxuXHQvKiog5bGe5oCn44Gu5a2Y5Zyo44KS56K66KqNXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyTmFtZSAtIOWxnuaAp+WQjVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdGhhc0F0dHIoYXR0ck5hbWUpe1xuXHRcdHJldHVybiB0aGlzLmF0dHIuaW5jbHVkZXMoYXR0ck5hbWUpO1xuXHR9XG5cdC8qKiDluqfmqJnjgYzjg57jgrnnm67jgavlkKvjgb7jgozjgovjgYvliKTlrppcblx0ICogQHBhcmFtIHtudW1iZXJ9IHggLSBY5bqn5qiZXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gWeW6p+aomVxuXHQgKi9cblx0Y2hlY2tSYW5nZU1vdXNlKHgsIHkpe1xuXHRcdHJldHVybiAoXG5cdFx0XHR0aGlzLmxlZnQgPD0geCAmJiB4IDwgdGhpcy5yaWdodCAmJlxuXHRcdFx0dGhpcy50b3AgPD0geSAmJiB5IDwgdGhpcy5ib3R0b21cblx0XHQpO1xuXHR9XG5cblx0LyoqIOODnuOCueebri/jg57jgrnjgq8v6aeS44KS5o+P5YaZICovXG5cdGRyYXcoKXtcblx0XHRjb25zdCB7c2VsZWN0Q29sb3IsIHRhcmdldENvbG9yfSA9IHRoaXM7XG5cblx0XHRpZih0aGlzLmltZ1NyYyAmJiBjYW52YXNJbWFnZS5pbXBvcnRlZClcblx0XHRcdHRoaXMuZHJhd0ltYWdlKCk7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5kcmF3UGFuZWwoKTtcblx0XHRpZih0aGlzLmlzU2VsZWN0ZWQpIHRoaXMuZHJhd01hc2soc2VsZWN0Q29sb3IpO1xuXHRcdGlmKHRoaXMuaXNUYXJnZXQpIHRoaXMuZHJhd01hc2sodGFyZ2V0Q29sb3IpO1xuXHRcdHRoaXMucGllY2U/LmRyYXcoKTtcblx0fVxuXG5cdC8qKiDjg57jgrnnm67nlLvlg4/jgpLmj4/lhpkgKi9cblx0ZHJhd0ltYWdlKCl7XG5cdFx0Y29uc3Qge2N0eH0gPSB0aGlzO1xuXG5cdFx0Y29uc3Qgc3JjID0gdGhpcy5pbWdTcmM7XG5cdFx0Y29uc3QgaW1hZ2UgPSBjYW52YXNJbWFnZS5pbWFnZXNbc3JjXTtcblx0XHRpZighaW1hZ2UpIHJldHVybjtcblxuXHRcdGN0eC5zYXZlKCk7XG5cdFx0Y3R4LnRyYW5zbGF0ZSh0aGlzLmxlZnQsIHRoaXMudG9wKTtcblx0XHRjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cdFx0Y3R4LnJlc3RvcmUoKTtcblx0fVxuXG5cdC8qKiDjg57jgrnnm67jgpLmj4/lhpkgKi9cblx0ZHJhd1BhbmVsKCl7XG5cdFx0Y29uc3Qge2N0eCwgbGVmdCwgdG9wLCBjZW50ZXIsIG1pZGRsZSwgd2lkdGgsIGhlaWdodCwgZGlzcGxheVRleHQsIHRleHRSb3RhdGV9ID0gdGhpcztcblxuXHRcdGN0eC5maWxsU3R5bGUgPSB0aGlzLmJhY2tncm91bmRDb2xvcjtcblx0XHRjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmJvcmRlckNvbG9yO1xuXHRcdGN0eC5saW5lV2lkdGggPSB0aGlzLmJvcmRlcldpZHRoO1xuXG5cdFx0Y3R4LnNhdmUoKTtcblx0XHRjdHgudHJhbnNsYXRlKGxlZnQsIHRvcCk7XG5cdFx0Y3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuXHRcdC8vIOS6pOeCueOCkuaPj+WGmVxuXHRcdGlmKHRoaXMuaW50ZXJzZWN0KXtcblx0XHRcdGN0eC5saW5lV2lkdGggPSB0aGlzLmJvcmRlcldpZHRoO1xuXHRcdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRcdFx0Y3R4Lm1vdmVUbyh3aWR0aC8yLCAwKTtcblx0XHRcdGN0eC5saW5lVG8od2lkdGgvMiwgaGVpZ2h0KTtcblx0XHRcdGN0eC5tb3ZlVG8oMCwgaGVpZ2h0LzIpO1xuXHRcdFx0Y3R4LmxpbmVUbyh3aWR0aCwgaGVpZ2h0LzIpO1xuXHRcdFx0Y3R4LmNsb3NlUGF0aCgpO1xuXHRcdFx0Y3R4LnN0cm9rZSgpO1xuXHRcdH1cblx0XHQvLyDjg57jgrnnm67jgpLmj4/lhplcblx0XHRlbHNle1xuXHRcdFx0Y3R4LnN0cm9rZVJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5cdFx0fVxuXG5cdFx0Ly8g5pac57ea44KS5o+P5YaZXG5cdFx0Y3R4LmxpbmVXaWR0aCA9IHRoaXMuYm9yZGVyV2lkdGgvMjtcblx0XHRjdHguYmVnaW5QYXRoKCk7XG5cdFx0aWYodGhpcy5ib3JkZXJTbGFzaExlZnQpe1xuXHRcdFx0Y3R4Lm1vdmVUbygwLCAwKTtcblx0XHRcdGN0eC5saW5lVG8od2lkdGgsIGhlaWdodCk7XG5cdFx0fVxuXHRcdGlmKHRoaXMuYm9yZGVyU2xhc2hSaWdodCl7XG5cdFx0XHRjdHgubW92ZVRvKHdpZHRoLCAwKTtcblx0XHRcdGN0eC5saW5lVG8oMCwgaGVpZ2h0KTtcblx0XHR9XG5cdFx0Y3R4LmNsb3NlUGF0aCgpO1xuXHRcdGN0eC5zdHJva2UoKTtcblx0XHRjdHgucmVzdG9yZSgpO1xuXG5cdFx0Ly8g5paH5a2X44KS5o+P5YaZXG5cdFx0aWYoZGlzcGxheVRleHQpe1xuXHRcdFx0Y3R4LnNhdmUoKTtcblx0XHRcdGN0eC50cmFuc2xhdGUoY2VudGVyLCBtaWRkbGUpO1xuXHRcdFx0Y3R4LmZpbGxTdHlsZSA9IHRoaXMuYm9yZGVyQ29sb3I7XG5cblx0XHRcdGNvbnN0IHJhZCA9IHRleHRSb3RhdGU/IHRleHRSb3RhdGUqTWF0aC5QSS8xODA6IDA7XG5cdFx0XHRjdHgucm90YXRlKHJhZCk7XG5cblx0XHRcdGNvbnN0IGZvbnRTaXplID0gTWF0aC5taW4odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpKjAuNjtcblx0XHRcdGN0eC5mb250ID0gYCR7Zm9udFNpemV9cHggJHtjYW52YXNGb250Lm5hbWVzfWA7XG5cblx0XHRcdGNvbnN0IHdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KGRpc3BsYXlUZXh0KS53aWR0aDtcblx0XHRcdGNvbnN0IGhlaWdodCA9IGZvbnRTaXplLzIqMC44O1xuXHRcdFx0Y3R4LmZpbGxUZXh0KGRpc3BsYXlUZXh0LCAtd2lkdGgvMiwgaGVpZ2h0KTtcblx0XHRcdGN0eC5yZXN0b3JlKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqIOODnuOCueebruOBq+ODnuOCueOCr+OCkuaPj+WGmVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSDjgqvjg6njg7zjgqjjg5Xjgqfjgq/jg4jjga7oibJcblx0ICovXG5cdGRyYXdNYXNrKGNvbG9yKXtcblx0XHRjb25zdCB7Y3R4fSA9IHRoaXM7XG5cblx0XHRjdHguZmlsbFN0eWxlID0gY29sb3I7XG5cblx0XHQvLyDjg57jgrnnm67jgpLmj4/lhplcblx0XHRjdHguZmlsbFJlY3QodGhpcy5sZWZ0LCB0aGlzLnRvcCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXHR9XG5cblx0LyoqIOODnuOCueebruOCkuODhuOCreOCueODiOW9ouW8j+OBp+WPluW+l1xuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQ29tcGFjdCAtIOOCs+ODs+ODkeOCr+ODiOihqOekulxuXHQgKi9cblx0dG9TdHJpbmcoaXNDb21wYWN0PWZhbHNlKXtcblx0XHRyZXR1cm4gIWlzQ29tcGFjdD9cblx0XHRcdHRoaXMudGV4dDpcblx0XHRcdGDvvZwke3RoaXMudGV4dC5zbGljZSgtMSkucmVwbGFjZSgv44CAL2csIFwi44O7XCIpfWA7XG5cdH1cbn1cbiIsIi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2pzb24nKS5QaWVjZUluaXRPcHRpb259IFBpZWNlSW5pdE9wdGlvbiAqL1xuaW1wb3J0IHtjYW52YXNGb250fSBmcm9tIFwiLi9jYW52YXNGb250TG9hZGVyLmpzXCI7XG5pbXBvcnQge2NhbnZhc0ltYWdlfSBmcm9tIFwiLi9jYW52YXNJbWFnZUxvYWRlci5qc1wiO1xuaW1wb3J0IHtnYW1lcywgcGllY2VzLCBwaWVjZVJhbmdlLCBwaWVjZUNvc3R9IGZyb20gXCIuL2pzb24uanNcIjtcblxuLyoqIOmnkuOBrueuoeeQhuOCr+ODqeOCuSAqL1xuZXhwb3J0IGNsYXNzIFBpZWNle1xuXHQvKiog5o+P5YaZ44K144Kk44K6XG5cdCAqIEB0eXBlIHtudW1iZXJ9XG5cdCAqL1xuXHRzdGF0aWMgc2l6ZSA9IDQ1O1xuXG5cdC8qKiDmoLzjga7pgZXjgYTjgavjgojjgaPjgabpp5Ljga7lpKfjgY3jgZXjgpLlpInmm7TjgZnjgovjgYtcblx0ICogQHR5cGUge2Jvb2xlYW59XG5cdCAqL1xuXHRzdGF0aWMgdXNlUmFua1NpemUgPSB0cnVlO1xuXG5cdC8qKiDlvbHjga7mj4/lhpnmnInnhKFcblx0ICogQHR5cGUge2Jvb2xlYW59XG5cdCAqL1xuXHRzdGF0aWMgaXNEcmF3U2hhZG93ID0gdHJ1ZTtcblxuXHQvKiog44OG44Kt44K544OI5Ye65Yqb5pmC44Gu44OX44Os44Kk44Ok44O86KGo56S6XG5cdCAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBzdHJpbmc+fVxuXHQgKi9cblx0c3RhdGljIGRlZ0NoYXJzID0ge1xuXHRcdDA6IFwi4payXCIsXG5cdFx0OTA6IFwi4omrXCIsXG5cdFx0MTgwOiBcIuKWvVwiLFxuXHRcdDI3MDogXCLvvJxcIlxuXHR9O1xuXG5cdC8qKiDjg5fjg6zjgqTjg6Tjg7zooajnpLrjgYvjgonop5LluqbjgpLlj5blvpcgKi9cblx0c3RhdGljIGNoYXJEZWdzID0ge307XG5cblx0LyoqIOOCteOCpOOCuuWkieabtOioreWumuWApFxuXHQgKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgbnVtYmVyPn1cblx0ICovXG5cdHN0YXRpYyByYW5rUmF0aW8gPSB7XG5cdFx0XCJLUlwiOiAxLFxuXHRcdFwiU1JcIjogMC45NjUsXG5cdFx0XCJSXCI6IDAuOTM1LFxuXHRcdFwiVUNcIjogMC45MCxcblx0XHRcIkNcIjogMC44NjVcblx0fVxuXG5cdC8qKiDpp5Ljga7mrrXpmo7liKXkvqHlgKTjgpLlj5blvpcgKi9cblx0Z2V0IHJhbmsoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dGhpcy5jb3N0IDw9IDA/IFwiS1JcIjpcblx0XHRcdDIwIDw9IHRoaXMuY29zdD8gXCJTUlwiOlxuXHRcdFx0MTAgPD0gdGhpcy5jb3N0PyBcIlJcIjpcblx0XHRcdDUgPD0gdGhpcy5jb3N0PyBcIlVDXCI6XG5cdFx0XHRcIkNcIlxuXHRcdCk7XG5cdH1cblxuXG5cdC8qKiDpp5Ljg4fjg7zjgr/jgpLliJ3mnJ/ljJZcblx0ICogQHBhcmFtIHthbnl9IGN0eCAtIENhbnZhc+aPj+eUu+OCs+ODs+ODhuOCreOCueODiFxuXHQgKiBAcGFyYW0ge1BpZWNlfFBpZWNlSW5pdE9wdGlvbn0gb3B0aW9uIC0g6aeS44Gu5Yid5pyf5YyW44Kq44OX44K344On44OzXG5cdCAqL1xuXHRzdGF0aWMgZ2V0UGllY2VzKGN0eCwgb3B0aW9uPXt9KXtcblx0XHRjb25zdCBleFBpZWNlcyA9IG5ldyBNYXAoT2JqZWN0LmVudHJpZXMoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwaWVjZXMpKSkpO1xuXG5cdFx0Lyog44OH44O844K/44KS6KOc5a6MICovXG5cdFx0Zm9yKGNvbnN0IFtfLCBwaWVjZV0gb2YgZXhQaWVjZXMpe1xuXHRcdFx0cGllY2UuYXR0ciA/Pz0gW107XG5cdFx0XHRpZihwaWVjZS51bml0ICYmIHBpZWNlLnVuaXQgIT09IFwi5oiQXCIpIHBpZWNlLmJhc2UgPSBwaWVjZTtcblx0XHR9XG5cdFx0Lyog5oiQ6aeS44Gu44OH44O844K/44KS5ZCI5oiQICovXG5cdFx0Zm9yKGNvbnN0IFtfLCBwaWVjZV0gb2YgZXhQaWVjZXMpe1xuXHRcdFx0aWYoIXBpZWNlLnByb21vIHx8IHR5cGVvZihwaWVjZS5wcm9tbykgIT09IFwic3RyaW5nXCIpIGNvbnRpbnVlO1xuXHRcdFx0Y29uc3QgcHJvbW9LZXlzID0gWy4uLnBpZWNlLnByb21vXTtcblx0XHRcdHBpZWNlLnByb21vID0ge307XG5cdFx0XHRmb3IoY29uc3Qga2V5IG9mIHByb21vS2V5cyl7XG5cdFx0XHRcdGNvbnN0IHByb21vID0gZXhQaWVjZXMuZ2V0KGtleSk7XG5cdFx0XHRcdHByb21vLmF0dHIucHVzaChcInByb21vdGVkXCIpO1xuXHRcdFx0XHRwcm9tby51bml0ID0gXCLmiJBcIjtcblx0XHRcdFx0cGllY2UucHJvbW9ba2V5XSA9IHByb21vO1xuXHRcdFx0XHRleFBpZWNlcy5zZXQoa2V5LHsuLi5waWVjZSwgLi4ucHJvbW99KTtcblx0XHRcdH07XG5cdFx0fVxuXHRcdC8vIOmnkuOCkuOCr+ODqeOCueOCquODluOCuOOCp+OCr+ODiOOBq+WkieaPm1xuXHRcdFsuLi5leFBpZWNlc10uZm9yRWFjaCgoW2tleSwgcGllY2VdLCBpKT0+e1xuXHRcdFx0cGllY2UuaWQgPSBpO1xuXHRcdFx0cGllY2UuY2hhciA9IGtleTtcblx0XHRcdGV4UGllY2VzLnNldChrZXksIG5ldyBQaWVjZShjdHgsIHBpZWNlLCBvcHRpb24pKTtcblx0XHR9KTtcblx0XHRjb25zdCBleFBpZWNlc09iaiA9IE9iamVjdC5mcm9tRW50cmllcyhleFBpZWNlcyk7XG5cdFx0Ly8g44Ko44Kk44Oq44Ki44K544Gu44OH44O844K/44KS57Wx5ZCIXG5cdFx0Zm9yKGNvbnN0IFtrZXksIHBpZWNlXSBvZiBleFBpZWNlcyl7XG5cdFx0XHRwaWVjZS5hbGlhcy5mb3JFYWNoKChhbGlhc0tleSwgaSk9Pntcblx0XHRcdFx0Y29uc3QgYWxpYXMgPSBwaWVjZS5jbG9uZSgpO1xuXHRcdFx0XHRjb25zdCBkaXNwbGF5ID0gWy4uLmFsaWFzLmRpc3BsYXldO1xuXHRcdFx0XHRhbGlhcy5kaXNwbGF5UHRuID0gaSsxO1xuXHRcdFx0XHRhbGlhcy5kaXNwbGF5ID0gZGlzcGxheTtcblx0XHRcdFx0YWxpYXMuYWxpYXNbaV0gPSBrZXk7XG5cdFx0XHRcdGV4UGllY2VzT2JqW2FsaWFzS2V5XSA9IGFsaWFzO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiBleFBpZWNlc09iajtcblx0fVxuXG5cdC8qKiDmloflrZfliJfjgYvjgonpp5LjgpLlj5blvpdcblx0ICogQHBhcmFtIHtQaWVjZXxQaWVjZUluaXRPcHRpb259IHBpZWNlIC0g6aeSXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0g6aeS5paH5a2X5YiXXG5cdCAqL1xuXHRzdGF0aWMgc3RyaW5nVG9QaWVjZShwaWVjZXMsIHRleHQpe1xuXHRcdGlmICghdGV4dCkgcmV0dXJuIG51bGw7XG5cdFx0Y29uc3QgW2RlZ0NoYXIsIHBpZWNlQ2hhcl0gPSBbLi4udGV4dF07XG5cdFx0Y29uc3QgZGVnID0gUGllY2UuY2hhckRlZ3NbZGVnQ2hhcl07XG5cdFx0aWYoIWRlZyB8fCAhcGllY2VzW3BpZWNlQ2hhcl0pIHJldHVybiBudWxsO1xuXHRcdGNvbnN0IHBpZWNlID0gcGllY2VzW3BpZWNlQ2hhcl0uY2xvbmUoKTtcblx0XHRwaWVjZS5kZWcgPSBkZWc7XG5cdFx0cmV0dXJuIHBpZWNlO1xuXHR9XG5cblx0LyoqIOmnkuOBruS4gOimp+OCkuODquOCueODiOOBp+WPluW+lyAqL1xuXHRzdGF0aWMgcGllY2VzVG9MaXN0KHBpZWNlcyl7XG5cdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKHBpZWNlcylcblx0XHRcdC5zb3J0KChbXyx7aWQ6YX1dLCBbX18se2lkOmJ9XSk9PlxuXHRcdFx0XHRNYXRoLnNpZ24oYS1iKSk7XG5cdH1cblxuXHQvKiog6aeS44Gu6KeS5bqmKGRlZy9yYWQpXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuXHQgKi9cblx0c2V0IGRlZyh2YWx1ZSl7XG5cdFx0dGhpcy5yYWQgPSB2YWx1ZSUzNjAqTWF0aC5QSS8xODA7XG5cdH1cblx0Z2V0IGRlZygpe1xuXHRcdHJldHVybiB0aGlzLnJhZCUzNjAvKE1hdGguUEkvMTgwKTtcblx0fVxuXG5cdC8qKiDlt6blgbTjga7luqfmqJkgKi9cblx0Z2V0IGxlZnQoKXtcblx0XHRyZXR1cm4gdGhpcy5jZW50ZXItdGhpcy5zaXplKjAuOC8yO1xuXHR9XG5cdC8qKiDkuIrlgbTjga7luqfmqJkgKi9cblx0Z2V0IHRvcCgpe1xuXHRcdHJldHVybiB0aGlzLm1pZGRsZS10aGlzLnNpemUvMjtcblx0fVxuXHQvKiog5Y+z5YG044Gu5bqn5qiZICovXG5cdGdldCByaWdodCgpe1xuXHRcdHJldHVybiB0aGlzLmNlbnRlcit0aGlzLnNpemUqMC44LzI7XG5cdH1cblx0LyoqIOS4i+WBtOOBruW6p+aomSAqL1xuXHRnZXQgYm90dG9tKCl7XG5cdFx0cmV0dXJuIHRoaXMubWlkZGxlK3RoaXMuc2l6ZS8yO1xuXHR9XG5cblx0LyoqIOaLoeWkp+eOh+OCkuWPluW+l1xuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cblx0Z2V0IHpvb20oKXtcblx0XHRsZXQgem9vbSA9dGhpcy5zaXplLzEwMDtcblx0XHRpZih0aGlzLnVzZVJhbmtTaXplKVxuXHRcdFx0em9vbSAqPSBQaWVjZS5yYW5rUmF0aW9bdGhpcy5yYW5rXTtcblx0XHRyZXR1cm4gem9vbTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge2FueX0gY3R4IC0gQ2FudmFz5o+P55S744Kz44Oz44OG44Kt44K544OIXG5cdCAqIEBwYXJhbSB7UGllY2V8UGllY2VJbml0T3B0aW9ufSBwaWVjZSAtIOmnklxuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uIC0g44Kq44OX44K344On44OzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb24uZGlzcGxheVB0biAtIOihqOekuuaWh+Wtl+WIl+OCkuWkieabtCgx44CcKVxuXHQgKiBAcGFyYW0ge251bWJlcn0gb3B0aW9uLmRlZyAtIOmnkuOBruinkuW6plxuXHQgKiBAcGFyYW0ge251bWJlcn0gb3B0aW9uLnNpemUgLSDpp5Ljga7lpKfjgY3jgZVcblx0ICogQHBhcmFtIHtib29sZWFufSBvcHRpb24udXNlUmFua1NpemUgLSDpp5Ljga7lpKfjgY3jgZXjgpLmoLzjga7pgZXjgYTjgaflpInmm7TjgZnjgovjgYtcblx0ICogQHBhcmFtIHtib29sZWFufSBvcHRpb24uaXNEcmF3U2hhZG93IC0g6aeS44Gu5b2x44Gu5o+P5YaZ5pyJ54ShXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9uLmlzTW92ZWQgLSDliJ3lm57np7vli5XmuIjjgb/jgYvlkKbjgYtcblx0ICovXG5cdGNvbnN0cnVjdG9yKGN0eCwgcGllY2UsIG9wdGlvbj17fSl7XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZGlzcGxheVB0bj0wLFxuXHRcdFx0ZGVnPTAsXG5cdFx0XHRzaXplPVBpZWNlLnNpemUsXG5cdFx0XHR1c2VSYW5rU2l6ZT1QaWVjZS51c2VSYW5rU2l6ZSxcblx0XHRcdGlzRHJhd1NoYWRvdz1QaWVjZS5pc0RyYXdTaGFkb3csXG5cdFx0XHRpc01vdmVkPWZhbHNlXG5cdFx0fSA9IG9wdGlvbjtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHBpZWNlKTtcblx0XHR0aGlzLmN0eCA9IGN0eDtcblx0XHR0aGlzLmRpc3BsYXkgPz89IFtcIlwiXTtcblx0XHR0aGlzLmltZ1NyYyA/Pz0gbnVsbDtcblx0XHR0aGlzLmFsaWFzID0gWy4uLnRoaXMuYWxpYXMgPz8gXCJcIl07XG5cdFx0dGhpcy5kaXNwbGF5UHRuID0gZGlzcGxheVB0bjtcblx0XHR0aGlzLmdhbWUgPSBnYW1lc1t0aGlzLmdhbWVOYW1lXTtcblx0XHR0aGlzLmNvc3QgPSBwaWVjZUNvc3RbdGhpcy5jaGFyXSA/PyAxO1xuXHRcdHRoaXMuY2VudGVyID0gMDtcblx0XHR0aGlzLm1pZGRsZSA9IDA7XG5cdFx0dGhpcy5kZWcgPSBkZWc7XG5cdFx0dGhpcy5zaXplID0gc2l6ZTtcblx0XHR0aGlzLnVzZVJhbmtTaXplID0gdXNlUmFua1NpemU7XG5cdFx0dGhpcy5pc0RyYXdTaGFkb3cgPSBpc0RyYXdTaGFkb3c7XG5cdFx0dGhpcy5pc1JvdGF0ZUltZyA/Pz0gdHJ1ZTtcblx0XHR0aGlzLmlzTW92ZWQgPSBpc01vdmVkO1xuXHRcdHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xuXHRcdHRoaXMuYXR0ciA/Pz0gW107XG5cdFx0dHJ5e1xuXHRcdFx0T2JqZWN0LmVudHJpZXModGhpcy5yYW5nZSkuZm9yRWFjaCgoW2tleSwgcm5nXSk9Pntcblx0XHRcdFx0aWYoQXJyYXkuaXNBcnJheShybmcpKSByZXR1cm47XG5cdFx0XHRcdHRoaXMucmFuZ2Vba2V5XSA9IHBpZWNlUmFuZ2Vbcm5nXS5tYXAocm93PT5bLi4ucm93XSlcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRjYXRjaChlKXtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XG5cdFx0XHR0aHJvdyBwaWVjZTtcblx0XHR9XG5cdH1cblxuXHQvKiog6aeS44KS44Kv44Ot44O844OzXG5cdCAqIEByZXR1cm5zIFBpZWNlXG5cdCAqL1xuXHRjbG9uZSgpe1xuXHRcdGNvbnN0IHtkaXNwbGF5UHRuLCBkZWcsIHNpemUsIGlzTW92ZWR9ID0gdGhpcztcblx0XHRyZXR1cm4gbmV3IFBpZWNlKHRoaXMuY3R4LCB7Li4udGhpc30sIHtkaXNwbGF5UHRuLCBkZWcsIHNpemUsIGlzTW92ZWR9KTtcblx0fVxuXG5cdC8qKiDpp5LjgpLooajov5TjgZkgKi9cblx0dHVybkZyb250KCl7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLmJhc2UpO1xuXHR9XG5cblx0LyoqIOODl+ODreODouODvOOCt+ODp+ODs1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY2hhciAtIOaIkOOCiuWFiOOBruaWh+Wtl1xuXHQgKi9cblx0cHJvbW90aW9uKGNoYXIpe1xuXHRcdGNvbnN0IHtwcm9tb30gPSB0aGlzO1xuXG5cdFx0aWYoIXByb21vKSB0aHJvdyBFcnJvcihgcHJvbW89JHtjaGFyfSwgTm90IHBsb21vdGUgcGllY2UuYCk7XG5cdFx0aWYoIXByb21vIGluIHByb21vKSB0aHJvdyBFcnJvcihgcHJvbW89JHtjaGFyfSwgUGxvbW90ZSBrZXkgaXMgbWlzc2luZy5gKTtcblx0XHRpZih0aGlzLmhhc0F0dHIoXCJwcm9tb3RlZFwiKSkgdGhyb3cgRXJyb3IoYHByb21vPSR7Y2hhcn0sIFByb21vdGVkIHBpZWNlLmApO1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgcHJvbW9bY2hhcl0pO1xuXHRcdHRoaXMuY2hhciA9IGNoYXI7XG5cdH1cblxuXHQvKiog5bGe5oCn44Gu5a2Y5Zyo44KS56K66KqNXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyTmFtZSAtIOWxnuaAp+WQjVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdGhhc0F0dHIoYXR0ck5hbWUpe1xuXHRcdHJldHVybiB0aGlzLmF0dHIuaW5jbHVkZXMoYXR0ck5hbWUpO1xuXHR9XG5cblx0LyoqIOW6p+aomeOBjOmnkuOBq+WQq+OBvuOCjOOCi+OBi+WIpOWumlxuXHQgKiBAcGFyYW0ge251bWJlcn0geCAtIFjluqfmqJlcblx0ICogQHBhcmFtIHtudW1iZXJ9IHkgLSBZ5bqn5qiZXG5cdCAqL1xuXHRjaGVja1JhbmdlTW91c2UoeCwgeSl7XG5cdFx0cmV0dXJuIChcblx0XHRcdHRoaXMubGVmdCA8PSB4ICYmIHggPCB0aGlzLnJpZ2h0ICYmXG5cdFx0XHR0aGlzLnRvcCA8PSB5ICYmIHkgPCB0aGlzLmJvdHRvbVxuXHRcdCk7XG5cdH1cblxuXHQvKiog56e75YuV56+E5Zuy44KS5Zue6Lui44GX44Gm5Y+W5b6XICovXG5cdGdldFJhbmdlKCl7XG5cdFx0Y29uc3QgZGVnID0gMHx0aGlzLmRlZztcblx0XHRjb25zdCByYW5nZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5yYW5nZSkpO1xuXHRcdE9iamVjdC5rZXlzKHJhbmdlKS5mb3JFYWNoKGtleT0+e1xuXHRcdFx0aWYoZGVnID09PSAwKSByZXR1cm47XG5cdFx0XHRpZighWzkwLCAxODAsIDI3MF0uaW5jbHVkZXMoZGVnKSkgdGhyb3cgRXJyb3IoYGRlZz0ke2RlZ30sIGRlZyBuZWVkIG11bHRpcGxlIG9mIDkwLmApO1xuXHRcdFx0aWYoWzkwLCAyNzBdLmluY2x1ZGVzKGRlZykpe1xuXHRcdFx0XHQvLyAy5qyh6YWN5YiX44KS6Lui572uXG5cdFx0XHRcdGNvbnN0IHRyYW5zcG9zZSA9IGEgPT4gYVswXS5tYXAoKF8sIGMpID0+IGEubWFwKHIgPT4gcltjXSkpO1xuXHRcdFx0XHRyYW5nZVtrZXldID0gdHJhbnNwb3NlKHJhbmdlW2tleV0pO1xuXHRcdFx0fVxuXHRcdFx0aWYoWzE4MCwgMjcwXS5pbmNsdWRlcyhkZWcpKXtcblx0XHRcdFx0cmFuZ2Vba2V5XS5yZXZlcnNlKCk7XG5cdFx0XHR9XG5cdFx0XHRyYW5nZVtrZXldLmZvckVhY2gocm93PT57XG5cdFx0XHRcdGlmKFs5MCwgMTgwXS5pbmNsdWRlcyhkZWcpKSByb3cucmV2ZXJzZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHJhbmdlO1xuXHR9XG5cblx0LyoqIOmnki/jg57jgrnjgq/jgpLmj4/lhpkgKi9cblx0YXN5bmMgZHJhdygpe1xuXHRcdGNvbnN0IHNlbGVjdENvbG9yID0gXCIjRkYwMDAwNTVcIjtcblx0XHRpZih0aGlzLmltZ1NyYyAmJiBjYW52YXNJbWFnZS5pbXBvcnRlZCl7XG5cdFx0XHR0aGlzLmRyYXdJbWFnZSgpO1xuXHRcdFx0aWYodGhpcy5pc1NlbGVjdGVkKSB0aGlzLmRyYXdNYXNrSW1hZ2Uoc2VsZWN0Q29sb3IpO1xuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0dGhpcy5kcmF3UGllY2UoKTtcblx0XHRcdGlmKHRoaXMuaXNTZWxlY3RlZCkgdGhpcy5kcmF3TWFzayhzZWxlY3RDb2xvcik7XG5cdFx0fVxuXHR9XG5cblx0LyoqIOmnkueUu+WDj+OCkuaPj+WGmSAqL1xuXHRkcmF3SW1hZ2UoKXtcblx0XHRjb25zdCB7Y3R4LCBzaXplfSA9IHRoaXM7XG5cblx0XHRjb25zdCBzcmMgPSB0aGlzLmltZ1NyY1t0aGlzLmRpc3BsYXlQdG5dO1xuXHRcdGNvbnN0IGltYWdlID0gY2FudmFzSW1hZ2UuaW1hZ2VzW3NyY107XG5cdFx0aWYoIWltYWdlKSByZXR1cm47XG5cblx0XHRjdHguc2F2ZSgpO1xuXHRcdGN0eC50cmFuc2xhdGUodGhpcy5jZW50ZXIsIHRoaXMubWlkZGxlKTtcblx0XHRpZih0aGlzLmlzUm90YXRlSW1nKSBjdHgucm90YXRlKHRoaXMucmFkKTtcblxuXHRcdGxldCBpbWdXaWR0aCwgaW1nSGVpZ2h0O1xuXHRcdGlmKGltYWdlLndpZHRoKjAuOSA8IGltYWdlLmhlaWdodCl7XG5cdFx0XHRpbWdXaWR0aCA9IGltYWdlLndpZHRoL2ltYWdlLmhlaWdodCpzaXplXG5cdFx0XHRpbWdIZWlnaHQgPSBzaXplO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGltZ1dpZHRoID0gc2l6ZTtcblx0XHRcdGltZ0hlaWdodCA9IGltYWdlLmhlaWdodC9pbWFnZS53aWR0aCpzaXplO1xuXHRcdH1cblx0XHRjdHguZHJhd0ltYWdlKGltYWdlLCAtaW1nV2lkdGgvMiwgLWltZ0hlaWdodC8yLCBpbWdXaWR0aCwgaW1nSGVpZ2h0KTtcblx0XHRjdHgucmVzdG9yZSgpO1xuXHR9XG5cblx0LyoqIOmnkueUu+WDj+OBq+ODnuOCueOCr+OCkuaPj+WGmVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSDjgqvjg6njg7zjgqjjg5Xjgqfjgq/jg4jjga7oibJcblx0ICovXG5cdGRyYXdNYXNrSW1hZ2UoY29sb3Ipe1xuXHRcdGNvbnN0IHtjdHgsIHNpemV9ID0gdGhpcztcblxuXHRcdGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcblx0XHRjdHguc2F2ZSgpO1xuXHRcdGNvbnN0IGltZ1dpZHRoID0gc2l6ZSowLjk7XG5cdFx0Y29uc3QgaW1nSGVpZ2h0ID0gc2l6ZTtcblxuXHRcdGN0eC50cmFuc2xhdGUodGhpcy5jZW50ZXIsIHRoaXMubWlkZGxlKTtcblx0XHRjdHguZmlsbFJlY3QoLWltZ1dpZHRoLzIsIC1pbWdIZWlnaHQvMiwgaW1nV2lkdGgsIGltZ0hlaWdodCk7XG5cdFx0Y3R4LnJlc3RvcmUoKTtcblx0fVxuXG5cdC8qKiDlsIbmo4vpp5Ljga7lpJblvaLjg5HjgrnjgpLkvZzmiJBcblx0ICogQHBhcmFtIHtudW1iZXJ9IHpvb20gLSDpp5Ljga7mi6HlpKfnjodcblx0ICovXG5cdG1ha2VQYXRoKHpvb20pe1xuXHRcdGNvbnN0IHtjdHh9ID0gdGhpcztcblxuXHRcdGN0eC50cmFuc2xhdGUodGhpcy5jZW50ZXIsIHRoaXMubWlkZGxlKTtcblx0XHRjdHgucm90YXRlKHRoaXMucmFkKTtcblxuXHRcdC8qIOWkluaeoOOCkuaPj+WGmSAqL1xuXHRcdGN0eC5iZWdpblBhdGgoKTtcblx0XHRjdHgubW92ZVRvKC0zMCp6b29tLC00MCp6b29tKTtcblx0XHRjdHgubGluZVRvKCAgMCp6b29tLC01MCp6b29tKTtcblx0XHRjdHgubGluZVRvKCAzMCp6b29tLC00MCp6b29tKTtcblx0XHRjdHgubGluZVRvKCA0NSp6b29tLCA1MCp6b29tKTtcblx0XHRjdHgubGluZVRvKC00NSp6b29tLCA1MCp6b29tKTtcblx0XHRjdHguY2xvc2VQYXRoKCk7XG5cdH1cblxuXHQvKiog6aeS44Gu5b2x44KS5o+P5YaZXG5cdCogQHBhcmFtIHtudW1iZXJ9IHpvb20gLSDpp5Ljga7mi6HlpKfnjodcblx0Ki9cbiAgIGRyYXdQaWVjZVNoYWRvdyh6b29tKXtcblx0XHRpZighdGhpcy5pc0RyYXdTaGFkb3cpIHJldHVybjtcblx0XHRjb25zdCB7Y3R4fSA9IHRoaXM7XG5cblx0XHRjdHguc2F2ZSgpO1xuXHRcdGN0eC50cmFuc2xhdGUoMCwgMTAqem9vbSk7XG5cdFx0dGhpcy5kcmF3TWFzayhcIiMwMDAwMDA2NlwiKTtcblx0XHRjdHgucmVzdG9yZSgpO1xuXHR9XG5cblx0LyoqIOmnkuOCkuaPj+WGmSAqL1xuXHRkcmF3UGllY2UoKXtcblx0XHRjb25zdCB7Y3R4LCBnYW1lLCB6b29tfSA9IHRoaXM7XG5cblx0XHRsZXQgZm9udENvbG9yLCBiYWNrZ3JvdW5kQ29sb3IsIGJvcmRlckNvbG9yO1xuXHRcdGlmKHRoaXMuaGFzQXR0cihcInByb21vdGVkXCIpKXtcblx0XHRcdGZvbnRDb2xvciA9IGdhbWUucHJvbW90ZUZvbnRDb2xvciA/PyBnYW1lLmZvbnRDb2xvciA/PyBcIiMwMDAwMDBcIjtcblx0XHRcdGJhY2tncm91bmRDb2xvciA9IGdhbWUucHJvbW90ZUJhY2tncm91bmRDb2xvciA/PyBnYW1lLmJhY2tncm91bmRDb2xvciA/PyBcIiNGRkZGRkZcIixcblx0XHRcdGJvcmRlckNvbG9yID0gZ2FtZS5wcm9tb3RlQm9yZGVyQ29sb3IgPz8gZ2FtZS5ib3JkZXJDb2xvciA/PyBcIiNGRjMzMDBcIjtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRmb250Q29sb3IgPSBnYW1lLmZvbnRDb2xvciA/PyBcIiMwMDAwMDBcIjtcblx0XHRcdGJhY2tncm91bmRDb2xvciA9IGdhbWUuYmFja2dyb3VuZENvbG9yID8/IFwiI0ZGRkZGRlwiLFxuXHRcdFx0Ym9yZGVyQ29sb3IgPSBnYW1lLmJvcmRlckNvbG9yID8/IFwiIzc3Nzc3N1wiO1xuXHRcdH1cblxuXHRcdGN0eC5zdHJva2VTdHlsZSA9IGJvcmRlckNvbG9yO1xuXHRcdGN0eC5maWxsU3R5bGUgPSBiYWNrZ3JvdW5kQ29sb3I7XG5cdFx0Y3R4LmxpbmVXaWR0aCA9IDgqem9vbTtcblx0XHR0aGlzLmRyYXdQaWVjZVNoYWRvdyh6b29tKTtcblx0XHRjdHguc2F2ZSgpO1xuXHRcdHRoaXMubWFrZVBhdGgoem9vbSk7XG5cdFx0Y3R4LnN0cm9rZSgpO1xuXHRcdGN0eC5maWxsKCk7XG5cblx0XHQvKiDmloflrZfjgpLmj4/lhpkgKi9cblx0XHRjdHguZmlsbFN0eWxlID0gZm9udENvbG9yO1xuXHRcdGNvbnN0IHRleHQgPSBbLi4uXCJcIit0aGlzLmRpc3BsYXlbdGhpcy5kaXNwbGF5UHRuXV07XG5cdFx0Y29uc3QgZm9udFNpemUgPSA0MCp6b29tO1xuXHRcdGN0eC5mb250ID0gYCR7Zm9udFNpemV9cHggJHtjYW52YXNGb250Lm5hbWVzfWA7XG5cdFx0Y3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG5cblx0XHR0ZXh0LmZvckVhY2goKHYsaSk9Pntcblx0XHRcdGNvbnN0IGhlaWdodCA9IHRleHQubGVuZ3RoID09PSAxPyBmb250U2l6ZS8yOiBpKmZvbnRTaXplO1xuXHRcdFx0Y3R4LmZpbGxUZXh0KHYsIDAsIGhlaWdodCk7XG5cdFx0fSk7XG5cdFx0Y3R4LnJlc3RvcmUoKTtcblx0fVxuXG5cdC8qKiDpp5Ljgavjg57jgrnjgq/jgpLmj4/lhplcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0g44Kr44Op44O844Ko44OV44Kn44Kv44OI44Gu6ImyXG5cdCAqL1xuXHRkcmF3TWFzayhjb2xvcil7XG5cdFx0Y29uc3Qge2N0eCwgem9vbX0gPSB0aGlzO1xuXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuXHRcdGN0eC5zYXZlKCk7XG5cdFx0dGhpcy5tYWtlUGF0aCh6b29tKTtcblx0XHRjdHguZmlsbCgpO1xuXG5cdFx0Y3R4LnJlc3RvcmUoKTtcblx0fVxuXG5cdC8qKiDmloflrZfliJflvaLlvI/jgaflj5blvpcgKi9cblx0dG9TdHJpbmcoKXtcblx0XHRyZXR1cm4gUGllY2UuZGVnQ2hhcnNbdGhpcy5kZWddICsgdGhpcy5jaGFyO1xuXHR9XG59XG5cbi8vIOODl+ODrOOCpOODpOODvOihqOekuuOBi+OCieinkuW6puOCkuWPluW+l1xuT2JqZWN0LmVudHJpZXMoUGllY2UuZGVnQ2hhcnMpXG5cdC5mb3JFYWNoKChba2V5LCB2YWx1ZV0pPT57XG5cdFx0UGllY2UuY2hhckRlZ3NbdmFsdWVdID0ga2V5O1xuXHR9KTtcbiIsImltcG9ydCB7Qm9hcmR9IGZyb20gXCIuL2JvYXJkLmpzXCI7XG5pbXBvcnQge1BpZWNlfSBmcm9tIFwiLi9waWVjZS5qc1wiO1xuXG4vLyDnp7vli5Xnr4Tlm7Ljgqrjg5fjgrfjg6fjg7NcbmNvbnN0IHJhbmdlT3B0aW9ucyA9IFtcblx0W1wiZGVmYXVsdFwiLCB7aXNBdHRhY2s6IGZhbHNlfV0sXG5cdFtcImF0dGFja1wiLCB7aXNBdHRhY2s6IHRydWV9XSxcblx0W1wic3RhcnRcIiwge2lzQXR0YWNrOiBmYWxzZX1dLFxuXHRbXCJjYXN0bGluZ1wiLCB7aXNBdHRhY2s6IGZhbHNlfV0sXG5cdFtcImVuUGFzc2FudFwiLCB7aXNBdHRhY2s6IHRydWV9XSxcblx0W1wicGFsYWNlU2xhc2hcIiwge2lzQXR0YWNrOiBmYWxzZX1dLFxuXHRbXCJwYWxhY2VTbGFzaFwiLCB7aXNBdHRhY2s6IHRydWV9XVxuXTtcblxuLy8g6LW354K55paH5a2X44Gu5a6a576pXG5jb25zdCBjZW50ZXJDaGFycyA9IFtcblx0W1wiT1wiLCB7aXNPd246IHRydWV9XSxcblx0W1wib1wiLCB7fV1cbl07XG5cbi8vIOenu+WLleevhOWbsuaWh+Wtl+OBruimquWtkOmWouS/glxuLyoqIOeCueenu+WLleOCquODl+OCt+ODp+ODs1xuICogQHR5cGUge09iamVjdDxrZXk6IHN0cmluZywge2NoaWxkOiBzdHJpbmdbXX0+W119XG4gKiBAcGFyYW0ga2V5IC0g56e75YuV56+E5Zuy44KS5a6a576p44GZ44KL5paH5a2XXG4gKiBAcGFyYW0ge251bWJlcn0gbW92ZXMtIOmAsuihjOWPr+iDveOBquODnuOCueaVsFxuICovXG5jb25zdCBwb2ludENoYXJzID0gW1xuXHRbXCJvXCJdLFxuXHRbXCJBXCIsIHtjaGlsZDogW1wiYVwiXX1dLFxuXHRbXCJCXCIsIHtjaGlsZDogW1wiYlwiXX1dLFxuXHRbXCJDXCIsIHtjaGlsZDogW1wiY1wiXX1dLFxuXHRbXCJEXCIsIHtjaGlsZDogW1wiZFwiXX1dLFxuXHRbXCJFXCIsIHtjaGlsZDogW1wiYVwiLCBcImVcIl19XSxcblx0W1wiRlwiLCB7Y2hpbGQ6IFtcImFcIiwgXCJmXCJdfV0sXG5cdFtcIkdcIiwge2NoaWxkOiBbXCJiXCIsIFwiZ1wiXX1dLFxuXHRbXCJIXCIsIHtjaGlsZDogW1wiYlwiLCBcImhcIl19XSxcblx0W1wiSVwiLCB7Y2hpbGQ6IFtcImNcIiwgXCJpXCJdfV0sXG5cdFtcIkpcIiwge2NoaWxkOiBbXCJjXCIsIFwialwiXX1dLFxuXHRbXCJLXCIsIHtjaGlsZDogW1wiZFwiLCBcImtcIl19XSxcblx0W1wiTFwiLCB7Y2hpbGQ6IFtcImRcIiwgXCJsXCJdfV1cbl07XG5cbi8qKiDnm7Tnt5rnp7vli5Xjgqrjg5fjgrfjg6fjg7NcbiAqIEB0eXBlIHtPYmplY3Q8a2V5OiBzdHJpbmcsIHtqbXBzOiBudW1iZXIsIG1vdmVzOiBudW1iZXJ9PltdfVxuICogQHBhcmFtIGtleSAtIOenu+WLleevhOWbsuOCkuWumue+qeOBmeOCi+aWh+Wtl1xuICogQHBhcmFtIGptcHMgLSDlv4XopoHjgarjgrjjg6Pjg7Pjg5flm57mlbBcbiAqIEBwYXJhbSBtb3Zlcy0g6YCy6KGM5Y+v6IO944Gq44Oe44K55pWwXG4gKi9cbmNvbnN0IGxpbmVyQ2hhcnMgPSBbXG5cdFtcIipcIiwge31dLFxuXHRbXCIrXCIsIHtqbXBzOiAxfV0sXG5cdFtcInxcIiwge2ptcHM6IDEsIG1vdmVzOiAxfV1cbl07XG5mb3IobGV0IGk9MTtpPD05O2krKylcblx0bGluZXJDaGFycy5wdXNoKFtcIlwiK2ksIHttb3ZlczogaX1dKTtcblxuLyoqIHJhbmdl44Gu5Y6f54K55bqn5qiZ44KS5Y+W5b6XXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSByYW5nZSAtIOenu+WLleevhOWbsuaDheWgsVxuICovXG5mdW5jdGlvbiBnZXRPcmlnaW4ocmFuZ2Upe1xuXHRjb25zdCBvTGlzdCA9IFtdO1xuXHRsZXQgb3duWCwgb3duWTtcblx0Zm9yKGxldCByWT0wO3JZPHJhbmdlLmxlbmd0aDtyWSsrKXtcblx0XHRmb3IobGV0IHJYPTA7clg8cmFuZ2VbclldLmxlbmd0aDtyWCsrKXtcblx0XHRcdGNvbnN0IHJDaGFyID0gcmFuZ2VbclldW3JYXTtcblx0XHRcdGZvcihsZXQgW2tleSwge2lzT3dufV0gb2YgY2VudGVyQ2hhcnMpe1xuXHRcdFx0XHRpZihyQ2hhciAhPT0ga2V5KSBjb250aW51ZTtcblx0XHRcdFx0b0xpc3QucHVzaCh7aXNPd24sIG9YOiByWCwgb1k6IHJZfSk7XG5cdFx0XHRcdGlmKGlzT3duKSBbb3duWCwgb3duWV0gPSBbclgsIHJZXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIG9MaXN0Lm1hcChvPT57XG5cdFx0by5vZmZzZXRYID0gby5vWC1vd25YO1xuXHRcdG8ub2Zmc2V0WSA9IG8ub1ktb3duWTtcblx0XHRyZXR1cm4gbztcblx0fSk7XG59XG5cbi8qKiDpp5Ljga7np7vli5XliKTlrppcbiAqIEBwYXJhbSB7Qm9hcmR9IGJvYXJkIC0g44Oc44O844OJXG4gKiBAcGFyYW0ge1BpZWNlfSBwaWVjZSAtIOmnklxuICogQHBhcmFtIHtudW1iZXJ9IHBYIC0g44Oe44K555uu44Gu5YiXXG4gKiBAcGFyYW0ge251bWJlcn0gcFkgLSDjg57jgrnnm67jga7ooYxcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1RhcmdldChib2FyZCwgcGllY2UsIHBYLCBwWSl7XG5cdGNvbnN0IHtmaWVsZCwgeUxlbiwgZW5QYXNzYW50fSA9IGJvYXJkO1xuXG5cdC8qKiDjg57jgrnnm67luqfmqJnjgYzjg5zjg7zjg4nnr4Tlm7LlhoXjgYvliKTlrppcblx0ICogQHBhcmFtIHtudW1iZXJ9IHggLSDliKTlrprjgZnjgovjg57jgrnnm67jga7liJdcblx0ICogQHBhcmFtIHtudW1iZXJ9IHkgLSDliKTlrprjgZnjgovjg57jgrnnm67jga7ooYxcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRmdW5jdGlvbiBpbkZpZWxkKHgsIHkpe1xuXHRcdHJldHVybiBmaWVsZFt5XSAmJiBmaWVsZFt5XVt4XSAmJiAhZmllbGRbeV1beF0uaGFzQXR0cihcImtlZXBPdXRcIik7XG5cdH1cblxuXHQvKiog5YyF5ZCM5aOr44Gn44GC44KL44GLXG5cdCAqIEBwYXJhbSB7UGFuZWx9IHBhbmVsIC0g44Oe44K555uuXG5cdCAqL1xuXHRmdW5jdGlvbiBpc1ZzUG8ocGFuZWwpe1xuXHRcdHJldHVybiBwYW5lbC5waWVjZSAmJiBwaWVjZS5oYXNBdHRyKFwicG9cIikgJiYgcGFuZWwucGllY2UuaGFzQXR0cihcInBvXCIpO1xuXHR9XG5cblx0LyoqIOWvvuixoemnkuOBjOeCruOBp+WPluOCjOOCi+OBi1xuXHQgKiBAcGFyYW0ge1BhbmVsfSBwYW5lbCAtIOODnuOCueebrlxuXHQgKi9cblx0ZnVuY3Rpb24gaXNBdHRhY2tGcm9tUGFvKHBhbmVsKXtcblx0XHRyZXR1cm4gcGFuZWwucGllY2Vcblx0XHRcdCYmICFwaWVjZS5pc01vdmVkXG5cdFx0XHQmJiAhcGFuZWwucGllY2UuaXNNb3ZlZFxuXHRcdFx0JiYgcGllY2UuaGFzQXR0cihcInBhb1wiKVxuXHRcdFx0JiYgcGllY2UuY29zdCA8IHBhbmVsLnBpZWNlLmNvc3Q7XG5cdH1cblxuXHQvKiog56e75YuV5Y+v6IO944GL5Yik5a6aXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNBdHRhY2sgLSDpp5LjgpLlj5blvpflr77osaHjgavlkKvjgoDjgYs/XG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4IC0g5Yik5a6a44GZ44KL44Oe44K555uu44Gu5YiXXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IC0g5Yik5a6a44GZ44KL44Oe44K555uu44Gu6KGMXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSByYW5nZU5hbWUgLSDnp7vli5Xnr4Tlm7Ljga7lrprnvqnlkI1cblx0ICogQHBhcmFtIHtib29sZWFufSBjaGVja1JpdmFsRGVnIC0g5pW144Gu6aeS44Gu44G/44KS56e75YuV5YWI44Go44GZ44KL44GLP1xuXHQgKiBAcmV0dXJucyBib29sZWFuXG5cdCAqL1xuXHRmdW5jdGlvbiBjYW5Nb3ZlKGlzQXR0YWNrLCB4LCB5LCByYW5nZU5hbWU9XCJcIiwgY2hlY2tSaXZhbERlZz10cnVlKXtcblx0XHRpZighZmllbGRbeV0gfHwgIWZpZWxkW3ldW3hdKSByZXR1cm4gZmFsc2U7XG5cdFx0Y29uc3QgcGFuZWwgPSBmaWVsZFt5XVt4XTtcblx0XHRpZighcGFuZWwpIHJldHVybiBmYWxzZTtcblx0XHRpZihpc1ZzUG8ocGFuZWwpKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYoaXNBdHRhY2tGcm9tUGFvKHBhbmVsKSkgcmV0dXJuIGZhbHNlO1xuXHRcdGlmKHJhbmdlTmFtZSA9PT0gXCJlblBhc3NhbnRcIiAmJiAhZW5QYXNzYW50LmlzVGFyZ2V0KHBhbmVsLCBwaWVjZSkpIHJldHVybiBmYWxzZTtcblx0XHRpZihwaWVjZS5oYXNBdHRyKFwiaW5QYWxhY2VcIikgJiYgIXBhbmVsLmhhc0F0dHIoXCJwYWxhY2VcIikpIHJldHVybiBmYWxzZTtcblx0XHRpZihyYW5nZU5hbWUuaW5kZXhPZihcInBhbGFjZVwiKSA9PT0gMCAmJiAhKHBhbmVsLmhhc0F0dHIocmFuZ2VOYW1lKSAmJiBmaWVsZFtwWV1bcFhdLmhhc0F0dHIocmFuZ2VOYW1lKSkpIHJldHVybiBmYWxzZTtcblx0XHRpZihwaWVjZS5oYXNBdHRyKFwidW5Dcm9zc1JpdmVyXCIpICYmIHlMZW4tKDB8eUxlbi8yKSA8PSBib2FyZC5nZXRSb3coeCwgeSwgcGllY2UuZGVnKSkgcmV0dXJuIGZhbHNlO1xuXHRcdGlmKCFpc0F0dGFjaykgcmV0dXJuICFmaWVsZFt5XVt4XS5waWVjZTtcblx0XHRpZighZmllbGRbeV1beF0ucGllY2UpIHJldHVybiBmYWxzZTtcblx0XHRpZihjaGVja1JpdmFsRGVnKSByZXR1cm4gcGllY2UuZGVnICE9PSBmaWVsZFt5XVt4XS5waWVjZS5kZWc7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvKiog5a2Q44Go44Gq44KL56e75YuV56+E5Zuy44Gr6aeS44GM5a2Y5Zyo44GZ44KL44GLXG5cdCAqIEBwYXJhbSB7c3RyaW5nW119IHJhbmdlIC0g56e75YuV56+E5Zuy5oOF5aCxXG5cdCAqIEBwYXJhbSB7c3RyaW5nW119IGNoaWxkIC0g5a2Q44Go44Gq44KL5paH5a2X44Gu5LiA6KanXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNBdHRhY2sgLSDpp5LjgpLlj5blvpflr77osaHjgavlkKvjgoDjgYs/XG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBvWCAtIOenu+WLleevhOWbsuaDheWgseOBruWOn+eCueS9jee9rijooYwpXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBvWSAtIOenu+WLleevhOWbsuaDheWgseOBruWOn+eCueS9jee9rijliJcpXG5cdCAqIEByZXR1cm5zIGJvb2xlYW5cblx0ICovXG5cdGZ1bmN0aW9uIGV4aXN0c0NoaWxkKHJhbmdlLCBjaGlsZCwgaXNBdHRhY2ssIG9YLCBvWSl7XG5cdFx0Zm9yKGNvbnN0IGNoYXIgb2YgY2hpbGQpe1xuXHRcdFx0Zm9yKGxldCByWT0wO3JZPHJhbmdlLmxlbmd0aDtyWSsrKXtcblx0XHRcdFx0Zm9yKGxldCByWD0wO3JYPHJhbmdlW3JZXS5sZW5ndGg7clgrKyl7XG5cdFx0XHRcdFx0Y29uc3QgW3gsIHldID0gW3JYK3BYLW9YLCByWStwWS1vWV07XG5cdFx0XHRcdFx0aWYoXG5cdFx0XHRcdFx0XHQhaW5GaWVsZCh4LCB5KSB8fFxuXHRcdFx0XHRcdFx0Y2FuTW92ZShpc0F0dGFjaywgMHx4LCAwfHksIFwiXCIsIGZhbHNlKSB8fFxuXHRcdFx0XHRcdFx0cmFuZ2VbclldW3JYXSAhPT0gY2hhclxuXHRcdFx0XHRcdCkgY29udGludWU7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWVcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKiog56e75YuV5YWI6KGo56S644KS6Kit5a6aXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSByYW5nZU5hbWUgLSDnp7vli5Xnr4Tlm7Ljga7lrprnvqnlkI1cblx0ICogQHBhcmFtIHtudW1iZXJ9IHggLSDliKTlrprjgZnjgovjg57jgrnnm67jga7liJdcblx0ICogQHBhcmFtIHtudW1iZXJ9IHkgLSDliKTlrprjgZnjgovjg57jgrnnm67jga7ooYxcblx0ICovXG5cdGZ1bmN0aW9uIHNldFRhcmdldChyYW5nZU5hbWUsIHgsIHkpe1xuXHRcdGNvbnN0IHBhbmVsID0gZmllbGRbeV1beF07XG5cdFx0cGFuZWwuYWRkVGFyZ2V0KHJhbmdlTmFtZSk7XG5cdFx0ZW5QYXNzYW50LnNldFRhcmdldChwYW5lbCwgcGllY2UpO1xuXHR9XG5cblx0LyoqIOeCueenu+WLlVxuXHQgKiBAcGFyYW0ge3N0cmluZ1tdfSByYW5nZSAtIOenu+WLleevhOWbsuaDheWgsVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcmFuZ2VOYW1lIC0g56e75YuV56+E5Zuy44Gu5a6a576p5ZCNXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNBdHRhY2sgLSDpp5LjgpLlj5blvpflr77osaHjgavlkKvjgoDjgYs/XG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBvWCAtIOenu+WLleevhOWbsuaDheWgseOBruWOn+eCueS9jee9rijooYwpXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBvWSAtIOenu+WLleevhOWbsuaDheWgseOBruWOn+eCueS9jee9rijliJcpXG5cdCAqL1xuXHRmdW5jdGlvbiBtb3ZlUG9pbnQocmFuZ2UsIFtyYW5nZU5hbWUsIHtpc0F0dGFja31dLCB7b1gsIG9ZLCBpc093bn0pe1xuXHRcdGlmKCFpc093bikgcmV0dXJuO1xuXHRcdGZvcihjb25zdCBbcGFyZW50LCB7Y2hpbGQ9W119PXt9XSBvZiBwb2ludENoYXJzKXtcblx0XHRcdGZvcihsZXQgclk9MDtyWTxyYW5nZS5sZW5ndGg7clkrKyl7XG5cdFx0XHRcdGZvcihsZXQgclg9MDtyWDxyYW5nZVtyWV0ubGVuZ3RoO3JYKyspe1xuXHRcdFx0XHRcdGNvbnN0IFt4LCB5XSA9IFtyWCtwWC1vWCwgclkrcFktb1ldO1xuXHRcdFx0XHRcdGlmKCFpbkZpZWxkKHgsIHkpXG5cdFx0XHRcdFx0XHR8fCAhY2FuTW92ZShpc0F0dGFjaywgeCwgeSwgcmFuZ2VOYW1lKVxuXHRcdFx0XHRcdFx0fHwgcmFuZ2VbclldW3JYXSAhPT0gcGFyZW50XG5cdFx0XHRcdFx0XHR8fCBleGlzdHNDaGlsZChyYW5nZSwgY2hpbGQsIGZhbHNlLCBvWCwgb1kpKSBjb250aW51ZTtcblx0XHRcdFx0XHRzZXRUYXJnZXQocmFuZ2VOYW1lLCB4LCB5KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKiDnm7Tnt5rnp7vli5Vcblx0ICogQHBhcmFtIHtzdHJpbmdbXX0gcmFuZ2UgLSDnp7vli5Xnr4Tlm7Lmg4XloLFcblx0ICogQHBhcmFtIHtzdHJpbmd9IHJhbmdlTmFtZSAtIOenu+WLleevhOWbsuOBruWumue+qeWQjVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQXR0YWNrIC0g6aeS44KS5Y+W5b6X5a++6LGh44Gr5ZCr44KA44GLP1xuXHQgKiBAcGFyYW0ge251bWJlcn0gb1ggLSDnp7vli5Xnr4Tlm7Lmg4XloLHjga7ljp/ngrnkvY3nva4o6KGMKVxuXHQgKiBAcGFyYW0ge251bWJlcn0gb1kgLSDnp7vli5Xnr4Tlm7Lmg4XloLHjga7ljp/ngrnkvY3nva4o5YiXKVxuXHQgKi9cblx0ZnVuY3Rpb24gbW92ZUxpbmVyKHJhbmdlLCBbcmFuZ2VOYW1lLCB7aXNBdHRhY2t9XSwge29YLCBvWSwgaXNPd24sIG9mZnNldFgsIG9mZnNldFl9KXtcblx0XHRpZighaXNPd24gJiYgIWNhbk1vdmUoZmFsc2UsIHBYK29mZnNldFgsIHBZK29mZnNldFkpKSByZXR1cm47XG5cdFx0Zm9yKGNvbnN0IFtjaGFyLCB7am1wcz0wLCBtb3Zlcz0wfT17fV0gb2YgbGluZXJDaGFycyl7XG5cdFx0XHRjb25zdCBpc01vdmVJbmYgPSAhbW92ZXMgfHwgMCA9PT0gbW92ZXM7XG5cdFx0XHQvLyDljp/ngrnjga7lkajlm7I444Oe44K544KS5o6i57SiXG5cdFx0XHRmb3IobGV0IHJZPW9ZLTE7clk8PW9ZKzE7clkrKyl7XG5cdFx0XHRcdGZvcihsZXQgclg9b1gtMTtyWDw9b1grMTtyWCsrKXtcblx0XHRcdFx0XHRpZihyYW5nZVtyWV1bclhdICE9PSBjaGFyIHx8IHJYID09PSBvWCAmJiByWSA9PT0gb1kpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGxldCBqbXBDbnQgPSBqbXBzPyBqbXBzOiAwO1xuXHRcdFx0XHRcdGxldCBtb3ZlQ250ID0gbW92ZXM/IG1vdmVzOiAwO1xuXHRcdFx0XHRcdGNvbnN0IFtpbmNYLCBpbmNZXSA9IFtyWC1vWCwgclktb1ldO1xuXHRcdFx0XHRcdGZvcihsZXQgX3g9cFgsX3k9cFk7Oyl7XG5cdFx0XHRcdFx0XHRfeCs9aW5jWDtcblx0XHRcdFx0XHRcdF95Kz1pbmNZO1xuXHRcdFx0XHRcdFx0Y29uc3QgeD1feCtvZmZzZXRYO1xuXHRcdFx0XHRcdFx0Y29uc3QgeT1feStvZmZzZXRZO1xuXHRcdFx0XHRcdFx0aWYoIWluRmllbGQoeCwgeSkgfHwgIWlzTW92ZUluZiAmJiBtb3ZlQ250ID09PSAwKSBicmVhaztcblx0XHRcdFx0XHRcdGNvbnN0IGlzSnVtcGVkID0gMCA9PT0gam1wQ250O1xuXHRcdFx0XHRcdFx0aWYoaXNKdW1wZWQgJiYgY2FuTW92ZShpc0F0dGFjaywgeCwgeSwgcmFuZ2VOYW1lLCBpc0p1bXBlZCkpe1xuXHRcdFx0XHRcdFx0XHRtb3ZlQ250LS07XG5cdFx0XHRcdFx0XHRcdHNldFRhcmdldChyYW5nZU5hbWUsIHgsIHkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSBpZihqbXBzPDEpe1xuXHRcdFx0XHRcdFx0XHRtb3ZlQ250LS07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zdCBwYW5lbCA9IGZpZWxkW3ldW3hdO1xuXHRcdFx0XHRcdFx0aWYocGFuZWwucGllY2Upe1xuXHRcdFx0XHRcdFx0XHRqbXBDbnQtLTtcblx0XHRcdFx0XHRcdFx0aWYoaXNKdW1wZWQgfHwgaXNWc1BvKHBhbmVsKSkgYnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8g44Oh44Kk44Oz5Yem55CGXG5cdChmdW5jdGlvbigpe1xuXHRcdGNvbnN0IHJhbmdlTWFwID0gcGllY2UuZ2V0UmFuZ2UoKTtcblx0XHRyYW5nZU1hcC5hdHRhY2sgPz89IHJhbmdlTWFwLmRlZmF1bHQ7XG5cdFx0Zm9yKGNvbnN0IHJhbmdlT3B0aW9uIG9mIHJhbmdlT3B0aW9ucyl7XG5cdFx0XHRjb25zdCByYW5nZU5hbWUgPSByYW5nZU9wdGlvblswXTtcblx0XHRcdC8vIOWIneWbnuenu+WLleeiuuiqjVxuXHRcdFx0aWYocGllY2UuaXNNb3ZlZCAmJiBbXCJzdGFydFwiLCBcImNhc3RsaW5nXCJdLmluY2x1ZGVzKHJhbmdlTmFtZSkpIGNvbnRpbnVlO1xuXG5cdFx0XHRjb25zdCByYW5nZSA9IHJhbmdlTWFwW3JhbmdlTmFtZV07XG5cdFx0XHRpZighcmFuZ2UpIGNvbnRpbnVlO1xuXHRcdFx0Zm9yKGNvbnN0IG9yaWdpbiBvZiBnZXRPcmlnaW4ocmFuZ2UpKXtcblx0XHRcdFx0Ly8g54K556e75YuVXG5cdFx0XHRcdG1vdmVQb2ludChyYW5nZSwgcmFuZ2VPcHRpb24sIG9yaWdpbik7XG5cdFx0XHRcdC8vIOebtOe3muenu+WLlVxuXHRcdFx0XHRtb3ZlTGluZXIocmFuZ2UsIHJhbmdlT3B0aW9uLCBvcmlnaW4pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSkoKTtcbn0iLCJpbXBvcnQge0JvYXJkfSBmcm9tIFwiLi9ib2FyZC5qc1wiO1xuaW1wb3J0IHtQYW5lbH0gZnJvbSBcIi4vcGFuZWwuanNcIjtcbmltcG9ydCB7Y2hlY2tUYXJnZXR9IGZyb20gXCIuL2NoZWNrVGFyZ2V0LmpzXCI7XG5cbi8qKiDjg57jgqbjgrnjgrPjg7Pjg4jjg63jg7zjg6tcbiAqIEBwYXJhbSB7Qm9hcmR9IGJvYXJkIC0g55ukXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1SUNvbnRyb2woYm9hcmQpe1xuXHRsZXQgaXNDbGljayA9IGZhbHNlO1xuXHRsZXQgbGFzdFhZID0gW107XG5cdGxldCBzZWxlY3RQYW5lbCA9IG51bGw7XG5cdGxldCBzZWxlY3RTdGFuZCA9IG51bGw7XG5cdGNvbnN0IHtjYW52YXN9ID0gYm9hcmQ7XG5cblx0LyoqIOODnuOCueebruOBq+WvvuOBmeOCi+WHpueQhlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBlIC0g44Kk44OZ44Oz44OI5byV5pWwXG5cdCAqIEBwYXJhbSB7KFxuXHQgKiAgICAgcGFuZWw6IFBhbmVsLFxuXHQgKiAgICAgeDogbnVtYmVyLFxuXHQgKiAgICAgeTogbnVtYmVyLFxuXHQgKiApPT52b2lkfSBmblBhbmVsIC0g44Oe44K555uu44Gu44Kz44O844Or44OQ44OD44Kv6Zai5pWwXG5cdCAqIEBwYXJhbSB7KFxuXHQgKiAgICAgeDogbnVtYmVyLFxuXHQgKiAgICAgeTogbnVtYmVyLFxuXHQgKiApPT52b2lkfSBmbkFmdGVyIC0g5b6M5Yem55CG44Gu44Kz44O844Or44OQ44OD44Kv6Zai5pWwXG4gICAgICovXG5cdGNvbnN0IGZpZWxkUHJvYyA9IChlLCBmblBhbmVsLCBmbkFmdGVyPSgpPT57fSk9Pntcblx0XHRjb25zdCB2aWV3U3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpO1xuXHRcdGNvbnN0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRsZXQgeCA9IGNhbnZhcy53aWR0aC9wYXJzZUZsb2F0KHZpZXdTdHlsZS53aWR0aCk7XG5cdFx0bGV0IHkgPSBjYW52YXMuaGVpZ2h0L3BhcnNlRmxvYXQodmlld1N0eWxlLmhlaWdodCk7XG5cdFx0aWYoZS5jbGllbnRYKXtcblx0XHRcdHggKj0gZS5jbGllbnRYLXJlY3QubGVmdDtcblx0XHRcdHkgKj0gZS5jbGllbnRZLXJlY3QudG9wO1xuXHRcdH1cblx0XHRlbHNlIGlmKDAgPCBlLnRvdWNoZXMubGVuZ3RoKXtcblx0XHRcdGlmKDEgPCBlLnRvdWNoZXMubGVuZ3RoKSByZXR1cm47XG5cdFx0XHR4ICo9IGUudG91Y2hlc1swXS5jbGllbnRYLXJlY3QubGVmdDtcblx0XHRcdHkgKj0gZS50b3VjaGVzWzBdLmNsaWVudFktcmVjdC50b3A7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRbeCwgeV0gPSBsYXN0WFk7XG5cdFx0fVxuXHRcdGJvYXJkLmZpZWxkLmZvckVhY2goKHJvdywgcFkpID0+XG5cdFx0XHRyb3cuZm9yRWFjaCgocGFuZWwsIHBYKSA9PlxuXHRcdFx0XHRmblBhbmVsKHBhbmVsLCB4LCB5LCBwWCwgcFkpKSk7XG5cdFx0Zm5BZnRlcih4LCB5KTtcblx0XHRib2FyZC5kcmF3KCk7XG5cdFx0bGFzdFhZID0gW3gsIHldO1xuXHR9O1xuXG5cdC8qKiDjg4njg6njg4PjgrDplovlp4tcblx0ICogQHBhcmFtIHtFdmVudH0gZSAtIOOCpOODmeODs+ODiOW8leaVsFxuICAgICAqL1xuXHRjb25zdCBkcmFnU3RhcnQgPSBlPT57XG5cdFx0aXNDbGljayA9IHRydWU7XG5cdFx0ZmllbGRQcm9jKGUsXG5cdFx0XHQocGFuZWwsIHgsIHkpPT57XG5cdFx0XHRcdGNvbnN0IHtwaWVjZSwgcFgsIHBZfSA9IHBhbmVsO1xuXG5cdFx0XHRcdGlmKHBpZWNlICYmIHBhbmVsLmNoZWNrUmFuZ2VNb3VzZSh4LCB5KSl7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHBpZWNlLmlzU2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdHNlbGVjdFBhbmVsID0gcGFuZWw7XG5cdFx0XHRcdFx0Y2hlY2tUYXJnZXQoYm9hcmQsIHBpZWNlLCBwWCwgcFkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0KHgsIHkpPT57XG5cdFx0XHRcdGZvcihjb25zdCBbZGVnLCBzdG9ja10gb2YgYm9hcmQuc3RhbmQuc3RvY2tzKXtcblx0XHRcdFx0XHRmb3IobGV0IGk9c3RvY2subGVuZ3RoLTE7MDw9aTtpLS0pe1xuXHRcdFx0XHRcdFx0aWYoIXN0b2NrW2ldLmNoZWNrUmFuZ2VNb3VzZSh4LCB5KSkgY29udGludWU7XG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRzdG9ja1tpXS5pc1NlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHNlbGVjdFN0YW5kID0ge2RlZzpkZWcsIGk6aX07XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KTtcblx0fTtcblxuXHQvKiog44OJ44Op44OD44Kw5LitXG5cdCAqIEBwYXJhbSB7YW55fSBlIC0g44Kk44OZ44Oz44OI5byV5pWwXG5cdCAqL1xuXHRjb25zdCBkcmFnTW92ZSA9IGU9Pntcblx0XHRpZighaXNDbGljayB8fCAhKHNlbGVjdFBhbmVsIHx8IHNlbGVjdFN0YW5kKSkgcmV0dXJuO1xuXHRcdGZpZWxkUHJvYyhlLFxuXHRcdFx0KHBhbmVsLCB4LCB5KT0+e1xuXHRcdFx0XHRwYW5lbC5pc1NlbGVjdGVkID0gcGFuZWwuY2hlY2tSYW5nZU1vdXNlKHgsIHkpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHQvKiog44OJ44Op44OD44Kw57WC5LqGXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGUgLSDjgqTjg5njg7Pjg4jlvJXmlbBcblx0ICovXG5cdGNvbnN0IGRyYWdFbmQgPSBlPT57XG5cdFx0aXNDbGljayA9IGZhbHNlO1xuXHRcdGZpZWxkUHJvYyhlLFxuXHRcdFx0KHBhbmVsLCB4LCB5KT0+e1xuXHRcdFx0XHRpZighcGFuZWwuY2hlY2tSYW5nZU1vdXNlKHgsIHkpKSByZXR1cm47XG5cdFx0XHRcdGlmKHNlbGVjdFBhbmVsKXtcblx0XHRcdFx0XHRib2FyZC5tb3ZlUGllY2Uoc2VsZWN0UGFuZWwsIHBhbmVsKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihzZWxlY3RTdGFuZCAmJiAhcGFuZWwucGllY2Upe1xuXHRcdFx0XHRcdGJvYXJkLnN0YW5kLnJlbGVhc2VQaWVjZShwYW5lbCwgc2VsZWN0U3RhbmQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KTtcblx0XHRmaWVsZFByb2MoZSxcblx0XHRcdHBhbmVsPT57XG5cdFx0XHRcdGlmKHBhbmVsLnBpZWNlKSBwYW5lbC5waWVjZS5pc1NlbGVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdHBhbmVsLmlzU2VsZWN0ZWQgPSBmYWxzZTtcblx0XHRcdFx0cGFuZWwuY2xlYXJUYXJnZXQoKTtcblx0XHRcdH0sXG5cdFx0XHQoKT0+e1xuXHRcdFx0XHRmb3IoY29uc3QgW2RlZywgc3RvY2tdIG9mIGJvYXJkLnN0YW5kLnN0b2Nrcyl7XG5cdFx0XHRcdFx0Zm9yKGxldCBpPXN0b2NrLmxlbmd0aC0xOzA8PWk7aS0tKXtcblx0XHRcdFx0XHRcdHN0b2NrW2ldLmlzU2VsZWN0ZWQgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0c2VsZWN0UGFuZWwgPSBudWxsO1xuXHRcdFx0XHRzZWxlY3RTdGFuZCA9IG51bGw7XG5cdFx0XHR9XG5cdFx0KTtcblx0fTtcblxuXHQvLyDjgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zjgpLkvZzmiJBcblx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZHJhZ1N0YXJ0KTtcblx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZHJhZ01vdmUpO1xuXHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZHJhZ0VuZCk7XG5cdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBkcmFnU3RhcnQpO1xuXHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBkcmFnTW92ZSk7XG5cdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZHJhZ0VuZCk7XG5cblx0LyoqIOOCpOODmeODs+ODiOODquOCueODiuODvOOCkuegtOajhCAqL1xuXHRyZXR1cm4ge1xuXHRcdHJlbW92ZUV2ZW50KCl7XG5cdFx0XHRjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBkcmFnU3RhcnQpO1xuXHRcdFx0Y2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZHJhZ01vdmUpO1xuXHRcdFx0Y2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGRyYWdFbmQpO1xuXHRcdFx0Y2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGRyYWdTdGFydCk7XG5cdFx0XHRjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBkcmFnTW92ZSk7XG5cdFx0XHRjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGRyYWdFbmQpO1xuXHRcdH1cblx0fTtcbn1cbiIsImltcG9ydCB7UGllY2V9IGZyb20gXCIuL3BpZWNlLmpzXCI7XG5cbi8qKiBCT0TlvaLlvI/jga7jgZ/jgoHjga7plqLmlbDlrprnvqnjgarjgakgKi9cbmV4cG9ydCBjbGFzcyBCb2R7XG5cdC8qKiDop5LluqbjgYvjgonpp5Ljga7mloflrZfooajnpLpcblx0ICogQHR5cGUge01hcDxudW1iZXIsIHN0cmluZz59XG5cdCAqL1xuXHRzdGF0aWMgI2RlZzJQaWVjZUNoYXJzID0gbmV3IE1hcChbXG5cdFx0WzAsIFwiIFwiXSxcblx0XHRbOTAsIFwiPlwiXSxcblx0XHRbMTgwLCBcInZcIl0sXG5cdFx0WzI3MCwgXCI8XCJdXG5cdF0pO1xuXG5cdC8qKiDop5LluqbjgYvjgonpp5Ljga7mraPopo/ooajnj77ooajnpLpcblx0ICogQHR5cGUge01hcDxudW1iZXIsIHN0cmluZz59XG5cdCAqL1xuXHRzdGF0aWMgI2RlZzJQaWVjZVJlZ2V4ZXMgPSBuZXcgTWFwKFxuXHRcdFsuLi5Cb2QuI2RlZzJQaWVjZUNoYXJzXVxuXHRcdC5tYXAoKFthLCBiXSk9PlthLCBuZXcgUmVnRXhwKGIsIFwiZ1wiKV0pXG5cdCk7XG5cblx0LyoqIOmnkuOBruaWh+Wtl+OBi+OCieinkuW6puihqOekulxuXHQgKiBAdHlwZSB7TWFwPHN0cmluZywgbnVtYmVyPn1cblx0ICovXG5cdHN0YXRpYyAjcGllY2VDaGFyMkRlZ3MgPSBuZXcgTWFwKFxuXHRcdFsuLi5Cb2QuI2RlZzJQaWVjZUNoYXJzXVxuXHRcdC5tYXAoKFthLCBiXSk9PltiLCBhXSlcblx0KTtcblxuXHQvKiog6KeS5bqm44GL44KJ5oyB6aeS44Gu6KGo6aGM6KGo56S6XG5cdCAqIEB0eXBlIHtNYXA8bnVtYmVyLCBzdHJpbmc+fVxuXHQgKi9cblx0c3RhdGljICNkZWcyU3RhbmRUaXRsZXMgPSBuZXcgTWFwKFtcblx0XHRbMCwgXCLlhYjmiYvjga7mjIHpp5JcIl0sXG5cdFx0WzkwLCBcIuasoeaJi+OBruaMgemnklwiXSxcblx0XHRbMTgwLCBcIuW+jOaJi+OBruaMgemnklwiXSxcblx0XHRbMjcwLCBcIuWbm+aJi+OBruaMgemnklwiXVxuXHRdKTtcblxuXHQvKiog5oyB6aeS44Gu6KGo6aGM44GL44KJ6KeS5bqm6KGo56S6XG5cdCAqIEB0eXBlIHtNYXA8c3RyaW5nLCBudW1iZXI+fVxuXHQgKi9cblx0c3RhdGljICNzdGFuZFRpdGxlMkRlZ3MgPSBuZXcgTWFwKFxuXHRcdFsuLi5Cb2QuI2RlZzJTdGFuZFRpdGxlc11cblx0XHQubWFwKChbYSwgYl0pPT5bYiwgYV0pXG5cdCk7XG5cblx0c3RhdGljICNrYW5JID0gW1wiXCIsXCLkuIBcIixcIuS6jFwiLFwi5LiJXCIsXCLlm5tcIixcIuS6lFwiLFwi5YWtXCIsXCLkuINcIixcIuWFq1wiLFwi5LmdXCJdO1xuXHRzdGF0aWMgI2thblggPSBbXCJcIixcIuWNgVwiLFwi5LqM5Y2BXCIsXCLkuInljYFcIixcIuWbm+WNgVwiLFwi5LqU5Y2BXCIsXCLlha3ljYFcIixcIuS4g+WNgVwiLFwi5YWr5Y2BXCIsXCLkuZ3ljYFcIl07XG5cblx0LyoqIOihjC/mjIHpp5LnlKjjga7mlbDlrZfooajnpLoo5ryi5pWw5a2XKVxuXHQgKiBAcGFyYW0ge251bWJlcn0gbnVtIC0g5pWw5a2XXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gdmlld09uZSAtIOS4gOOCkuihqOekulxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0c3RhdGljICNudW0yS2FuKG51bSwgdmlld09uZT10cnVlKXtcblx0XHRpZighdmlld09uZSAmJiBudW08PTEpIHJldHVybiBcIlwiO1xuXHRcdGNvbnN0IGkgPSBudW0lMTA7XG5cdFx0Y29uc3QgeCA9IDB8bnVtLzEwO1xuXHRcdHJldHVybiBCb2QuI2thblhbeF0rQm9kLiNrYW5JW2ldO1xuXHR9XG5cblx0LyoqIOihjC/mjIHpp5LnlKjjga7mlbDlrZfooajnpLoo5ryi5pWw5a2XKVxuXHQgKiBAcGFyYW0ge251bWJlcn0gbnVtIC0g5pWw5a2XXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gZW1wdHlPbmUgLSDnqbrmloflrZfjgpIx44Go44GZ44KLXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRzdGF0aWMgI2thbjJOdW0oa2FuLCBlbXB0eU9uZT10cnVlKXtcblx0XHRpZihlbXB0eU9uZSAmJiBrYW4gPT09IFwiXCIpIHJldHVybiAxO1xuXHRcdGlmKCFpc05hTihrYW4pKSByZXR1cm4gMHxrYW47XG5cdFx0bGV0IHggPSBCb2QuI2thblguZmluZEluZGV4KGtleT0+XG5cdFx0XHRrZXkgIT09IFwiXCIgJiYgKG5ldyBSZWdFeHAoXCJeXCIra2V5KSkudGVzdChrYW4pXG5cdFx0KTtcblx0XHRpZih4IDwgMCkgeCA9IDA7XG5cdFx0bGV0IGkgPSBCb2QuI2thbkkuZmluZEluZGV4KGtleT0+XG5cdFx0XHRrZXkgIT09IFwiXCIgJiYgKG5ldyBSZWdFeHAoa2V5K1wiJFwiKSkudGVzdChrYW4pXG5cdFx0KTtcblx0XHRpZihpIDwgMCkgaSA9IDA7XG5cdFx0cmV0dXJuIHgqMTAraTtcblx0fVxuXG5cdC8qKiDliJfnlKjjga7mlbDlrZfooajnpLoo5YWo6KeSLzLmoYEpXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBudW0gLSDmlbDlrZdcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdHN0YXRpYyAjbnVtMlplbihudW0pe1xuXHRcdGlmKDEwPD1udW0pIHJldHVybiBudW07XG5cdFx0Y29uc3QgemVuID0gXCLvvJDvvJHvvJLvvJPvvJTvvJXvvJbvvJfvvJjvvJlcIjtcblx0XHRjb25zdCBpID0gbnVtJTEwO1xuXHRcdHJldHVybiB6ZW5baV07XG5cdH1cblxuXHQvKiog44Oe44K555uu44Gu6KGo56S6XG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRzdGF0aWMgI3BhbmVsVGV4dCA9IFwiIOODu1wiO1xuXG5cdC8qKiDpp5Ljga5CT0TooajoqJhcblx0ICogQHBhcmFtIHtQaWVjZX0gcGllY2UgLSDpp5Jcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdHN0YXRpYyAjZ2V0UGllY2VUZXh0KHBpZWNlKXtcblx0XHRpZighcGllY2UpIHJldHVybiBCb2QuI3BhbmVsVGV4dDtcblx0XHRyZXR1cm4gQm9kLiNkZWcyUGllY2VDaGFycy5nZXQocGllY2UuZGVnKStwaWVjZS5jaGFyO1xuXHR9XG5cblx0LyoqIOmnkuWPsOOBrkJPROihqOiomFxuXHQgKiBAcGFyYW0ge1N0YW5kfSBzdGFuZCAtIOmnkuWPsFxuXHQgKiBAcGFyYW0ge251bWJlcn0gZGVnIC0g6KeS5bqmXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRzdGF0aWMgI2dldFN0YW5kVGV4dChzdGFuZCwgZGVnPTApe1xuXHRcdC8vIOmnkuaVsOOCq+OCpuODs+ODiFxuXHRcdGNvbnN0IGNvdW50ZXIgPSBuZXcgTWFwKCk7XG5cdFx0c3RhbmQuc3RvY2tzLmdldChkZWcpLmZvckVhY2goKHtjaGFyfSk9Pntcblx0XHRcdGlmKCFjb3VudGVyLmhhcyhjaGFyKSkgY291bnRlci5zZXQoY2hhciwgMCk7XG5cdFx0XHRjb3VudGVyLnNldChjaGFyLCBjb3VudGVyLmdldChjaGFyKSsxKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gQm9kLiNkZWcyU3RhbmRUaXRsZXMuZ2V0KGRlZykrXCLvvJpcIitcblx0XHRcdFsuLi5jb3VudGVyXS5tYXAoKFtjaGFyLCBjbnRdKT0+XG5cdFx0XHRcdGNoYXIrQm9kLiNudW0yS2FuKGNudCwgZmFsc2UpXG5cdFx0XHQpLmpvaW4oXCIgXCIpO1xuXHR9XG5cblx0LyoqIEJPROW9ouW8j+OBruODhuOCreOCueODiOOCkuODnOODvOODieOBp+aJseOBiOOCi+OCiOOBhuWkieaPm1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEJPROW9ouW8j+OBruODhuOCreOCueODiFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0c3RhdGljIGNvbnZTZXRUZXh0KHRleHQpe1xuXHRcdGNvbnN0IGJvYXJkTGluZXMgPSBbXTtcblx0XHRjb25zdCBzdGFuZExpbmVzID0gW107XG5cdFx0dGV4dC5zcGxpdCgvXFxyfFxcbnxcXHJcXG4vKS5mb3JFYWNoKGxpbmU9Pntcblx0XHRcdGlmKFsuLi5Cb2QuI3N0YW5kVGl0bGUyRGVncy5rZXlzKCldLnNvbWUodGl0bGU9PlxuXHRcdFx0XHRuZXcgUmVnRXhwKGBeJHt0aXRsZX1gKS50ZXN0KGxpbmUpKVxuXHRcdFx0KSBzdGFuZExpbmVzLnB1c2gobGluZSk7XG5cdFx0XHRlbHNlIGJvYXJkTGluZXMucHVzaChsaW5lLnNsaWNlKDEpKVxuXHRcdH0pO1xuXG5cdFx0bGV0IGJvYXJkU3RyID0gYm9hcmRMaW5lcy5zbGljZSgyLCAtMSkuam9pbihcIlxcblwiKTtcblx0XHRCb2QuI2RlZzJQaWVjZVJlZ2V4ZXMuZm9yRWFjaCgoYm9kQ2hhciwgZGVnKT0+e1xuXHRcdFx0Ym9hcmRTdHIgPSBib2FyZFN0ci5yZXBsYWNlKGJvZENoYXIsIFBpZWNlLmRlZ0NoYXJzW2RlZ10pO1xuXHRcdH0pXG5cblx0XHRjb25zdCBzdGFuZFN0ciA9IHN0YW5kTGluZXMuZmxhdE1hcChsaW5lPT57XG5cdFx0XHRjb25zdCBbdGl0bGUsIHBhcmFtU3RyXSA9IGxpbmUuc3BsaXQoL++8mi8pO1xuXHRcdFx0aWYocGFyYW1TdHIgPT09IFwiXCIpIHJldHVybiBcIlwiO1xuXHRcdFx0Y29uc3QgZGVnID0gQm9kLiNzdGFuZFRpdGxlMkRlZ3MuZ2V0KHRpdGxlKTtcblx0XHRcdGNvbnN0IGRlZ0NoYXIgPSBQaWVjZS5kZWdDaGFyc1tkZWddO1xuXHRcdFx0Y29uc3QgcGFyYW1zID0gcGFyYW1TdHJcblx0XHRcdFx0LnNwbGl0KC9cXHMvKVxuXHRcdFx0XHQubWFwKHBhcmFtPT57XG5cdFx0XHRcdFx0Y29uc3QgcGllY2VDaGFyID0gcGFyYW1bMF07XG5cdFx0XHRcdFx0Y29uc3Qga2FuID0gcGFyYW0uc2xpY2UoMSk7XG5cdFx0XHRcdFx0cmV0dXJuIChkZWdDaGFyK3BpZWNlQ2hhcikucmVwZWF0KEJvZC4ja2FuMk51bShrYW4pKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gcGFyYW1zO1xuXHRcdH0pLmpvaW4oXCJcIik7XG5cblx0XHRyZXR1cm4gYCR7Ym9hcmRTdHJ9XFxuJHtzdGFuZFN0cn1gO1xuXHR9XG5cblx0LyoqIEJPROW9ouW8j+ODhuOCreOCueODiOOCkuWPluW+l1xuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0c3RhdGljIGdldFRleHQoYm9hcmQpe1xuXHRcdGNvbnN0IHtmaWVsZCwgeExlbiwgcGxheWVycywgc3RhbmR9ID0gYm9hcmQ7XG5cblx0XHRsZXQgaGVhZGVyID1cblx0XHRcdGAgJHtbLi4uQXJyYXkoeExlbikua2V5cygpXS5tYXAoaT0+YCAke0JvZC4jbnVtMlplbih4TGVuLWkpfWApLmpvaW4oXCJcIil9XFxuYCtcblx0XHRcdGArJHtBcnJheSh4TGVuKS5maWxsKFwiLS0tXCIpLmpvaW4oXCJcIil9K1xcbmA7XG5cdFx0bGV0IGZvb3RlciA9IGBcXG4rJHtBcnJheSh4TGVuKS5maWxsKFwiLS0tXCIpLmpvaW4oXCJcIil9K2A7XG5cdFx0bGV0IHBhbmVsT3V0ZXIgPSBcInxcIjtcblx0XHRsZXQgcGFuZWxTZXAgPSBcIlwiO1xuXHRcdGxldCByb3dTZXAgPSBcIlxcblwiO1xuXHRcdGxldCBzdGFuZEhlYWRlciA9IGAke0JvZC4jZ2V0U3RhbmRUZXh0KHN0YW5kLCAxODApfVxcbmA7XG5cdFx0bGV0IHN0YW5kRm9vdGVyID0gYCR7Qm9kLiNnZXRTdGFuZFRleHQoc3RhbmQsIDApfWA7XG5cdFx0aWYocGxheWVycyAhPT0gMil7XG5cdFx0XHRzdGFuZEhlYWRlciA9IGAke0JvZC4jZ2V0U3RhbmRUZXh0KHN0YW5kLCAyNzApfVxcbmArc3RhbmRIZWFkZXI7XG5cdFx0XHRzdGFuZEZvb3RlciA9IGAke0JvZC4jZ2V0U3RhbmRUZXh0KHN0YW5kLCA5MCl9XFxuYCtzdGFuZEZvb3Rlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0c3RhbmRIZWFkZXIrXG5cdFx0XHRoZWFkZXIrXG5cdFx0XHRmaWVsZC5tYXAoKHJvdywgaSk9PlxuXHRcdFx0XHRwYW5lbE91dGVyK1xuXHRcdFx0XHRyb3cubWFwKHBhbmVsPT5cblx0XHRcdFx0XHRCb2QuI2dldFBpZWNlVGV4dChwYW5lbC5waWVjZSlcblx0XHRcdFx0KS5qb2luKHBhbmVsU2VwKStcblx0XHRcdFx0cGFuZWxPdXRlcitcblx0XHRcdFx0Qm9kLiNudW0yS2FuKGkrMSlcblx0XHRcdCkuam9pbihyb3dTZXApK1xuXHRcdFx0Zm9vdGVyK1wiXFxuXCIrXG5cdFx0XHRzdGFuZEZvb3RlclxuXHRcdCk7XG5cdH1cbn1cbiIsImltcG9ydCB7UGllY2V9IGZyb20gXCIuL3BpZWNlLmpzXCI7XG5pbXBvcnQge0JvZH0gZnJvbSBcIi4vYm9kLmpzXCI7XG5cbi8qKiDnm6Tjga7nrqHnkIbjgq/jg6njgrkgKi9cbmV4cG9ydCBjbGFzcyBTdGFuZHtcblx0LyoqIOmnkuWPsOOBuOOBruinkuW6puOBlOOBqOOBruihqOekuumghlxuXHQgKiBAdHlwZSB7bnVtYmVyW119XG5cdCAqL1xuXHRzdGF0aWMgI2RlZ09yZGVyID0gWzE4MCwgOTAsIDI3MCwgMF07XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7Qm9hcmR9IOODnOODvOODiVxuXHQgKi9cblx0Y29uc3RydWN0b3IoYm9hcmQpe1xuXHRcdHRoaXMuYm9hcmQgPSBib2FyZDtcblx0XHRjb25zdCB7dG9wLCByaWdodCwgYm90dG9tLCB3aWR0aCwgaGVpZ2h0LCBwYW5lbFdpZHRoLCBwYW5lbEhlaWdodCwgeExlbiwgeUxlbn0gPSBib2FyZDtcblxuXHRcdHRoaXMuY2xlYXIoKTtcblx0XHR0aGlzLmxlZnQgPSByaWdodCoxLjAyO1xuXHRcdHRoaXMudG9wID0gdG9wO1xuXHRcdHRoaXMud2lkdGggPSB3aWR0aC8yO1xuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdHRoaXMucmlnaHQgPSB0aGlzLmxlZnQrdGhpcy53aWR0aDtcblx0XHR0aGlzLmJvdHRvbSA9IGJvdHRvbTtcblx0XHR0aGlzLnBpdGNoV2lkdGggPSBwYW5lbFdpZHRoLzI7XG5cdFx0dGhpcy5waXRjaEhlaWdodCA9IHBhbmVsSGVpZ2h0O1xuXHRcdHRoaXMueExlbiA9IHhMZW47XG5cdFx0dGhpcy55TGVuID0geUxlbjtcblx0fVxuXG5cdC8qKiDpp5Llj7DjgpLliJ3mnJ/ljJbjgavjgZnjgosgKi9cblx0Y2xlYXIoKXtcblx0XHR0aGlzLnN0b2NrcyA9IG5ldyBNYXAoU3RhbmQuI2RlZ09yZGVyLm1hcChpPT5baSxbXV0pKTtcblx0fVxuXG5cdC8qKiDmjIHjgaHpp5LjgYvjgonjg5zjg7zjg4nkuIrjgavphY3nva7jgZnjgotcblx0ICogQHBhcmFtIHtQYW5hbH0gdG9QYW5lbGwgLSDphY3nva7lhYjjga7jg5Hjg43jg6tcblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbiAtIOOCquODl+OCt+ODp+ODs1xuXHQgKiBAcGFyYW0ge251bWJlcn0gb3B0aW9uLmRlZyAtIOinkuW6plxuXHQgKiBAcGFyYW0ge251bWJlcn0gb3B0aW9uLmkgLSDphY3nva7jgZnjgovmjIHjgaHpp5Ljga7jgqTjg7Pjg4fjg4Pjgq/jgrlcblx0ICovXG5cdHJlbGVhc2VQaWVjZSh0b1BhbmVsLCBvcHRpb249e30pe1xuXHRcdGlmKHRvUGFuZWwuaGFzQXR0cihcImtlZXBPdXRcIikpIHJldHVybjtcblx0XHRjb25zdCB7ZGVnLCBpfSA9IG9wdGlvblxuXHRcdGNvbnN0IHtib2FyZH0gPSB0aGlzO1xuXHRcdGNvbnN0IHN0b2NrID0gdGhpcy5zdG9ja3MuZ2V0KGRlZyk7XG5cdFx0dG9QYW5lbC5waWVjZSA9IHN0b2NrW2ldO1xuXHRcdHN0b2NrW2ldLmNlbnRlciA9IHRvUGFuZWwuY2VudGVyO1xuXHRcdHN0b2NrW2ldLm1pZGRsZSA9IHRvUGFuZWwubWlkZGxlO1xuXHRcdGJvYXJkLmFkZFJlY29yZCh0b1BhbmVsLCB7ZW5kOiBcIuaJk1wifSk7XG5cdFx0c3RvY2suc3BsaWNlKGksMSk7XG5cdH1cblxuXHQvKiog6aeS5Y+w44Gr6L+95Yqg44GZ44KLXG5cdCAqIEBwYXJhbSB7UGllY2V9IHBpZWNlIC0g6L+95Yqg44GZ44KL6aeSXG5cdCAqL1xuXHRhZGQocGllY2Upe1xuXHRcdGNvbnN0IHN0b2NrID0gdGhpcy5zdG9ja3MuZ2V0KHBpZWNlLmRlZyk7XG5cdFx0cGllY2UudHVybkZyb250KCk7XG5cdFx0c3RvY2sucHVzaChwaWVjZSk7XG5cdFx0c3RvY2suc29ydCgoYSxiKT0+TWF0aC5zaWduKGEuaWQtYi5pZCkpO1xuXHR9XG5cblx0LyoqIOmnkuOCkuaMgeOBoemnkuOBq+OBmeOCi1xuXHQgKiBAcGFyYW0ge1BpZWNlfG51bGx9IHdpbm5lclBpZWNlIC0g56e75YuV44GZ44KL6aeSXG5cdCAqIEBwYXJhbSB7UGllY2V9IGxvc2VyUGllY2UgLSDmjZXnuJvjgZXjgozjgovpp5Jcblx0ICogQHBhcmFtIHtib29sZWFufSBmb3JjZUNhcHR1cmUgLSDlsZ7mgKfjgpLnhKHoppbjgZfjgabmjZXnuJvjgZnjgotcblx0ICogQHBhcmFtIHtib29sZWFufSBmb3JjZUNhbnRDYXB0dXJlIC0g5bGe5oCn44KS54Sh6KaW44GX44Gm5o2V57ib44GX44Gq44GEXG5cdCAqL1xuXHRjYXB0dXJlUGllY2Uod2lubmVyUGllY2UsIGxvc2VyUGllY2UsIGZvcmNlQ2FwdHVyZT1mYWxzZSwgZm9yY2VDYW50Q2FwdHVyZT1mYWxzZSl7XG5cdFx0aWYoZm9yY2VDYW50Q2FwdHVyZVxuXHRcdFx0fHwgIWxvc2VyUGllY2Vcblx0XHRcdHx8ICEoZm9yY2VDYXB0dXJlIHx8IHdpbm5lclBpZWNlLmhhc0F0dHIoXCJjYXB0dXJlXCIpKVxuXHRcdFx0fHwgbG9zZXJQaWVjZS5oYXNBdHRyKFwia2luZ1wiKVxuXHRcdFx0fHwgbG9zZXJQaWVjZS5oYXNBdHRyKFwiY2FudENhcHR1cmVcIilcblx0XHQpIHJldHVybjtcblxuXHRcdGxvc2VyUGllY2UuZGVnID0gd2lubmVyUGllY2UuZGVnO1xuXHRcdGxvc2VyUGllY2UuaXNNb3ZlZCA9IHRydWU7XG5cdFx0dGhpcy5hZGQobG9zZXJQaWVjZSk7XG5cdH1cblxuXHQvKiog55uk44KS5o+P5YaZICovXG5cdGRyYXcoKXtcblx0XHRjb25zdCB7Ym9hcmQsIGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCwgcGl0Y2hXaWR0aCwgcGl0Y2hIZWlnaHR9ID0gdGhpcztcblx0XHRjb25zdCB7Y3R4LCB4TGVuLCB5TGVufSA9IGJvYXJkO1xuXG5cdFx0Ly8g5aSW5p6g44KS5o+P5YaZXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IGJvYXJkLmJhY2tncm91bmRDb2xvcjtcblx0XHRjdHguc3Ryb2tlU3R5bGUgPSBib2FyZC5ib3JkZXJDb2xvcjtcblx0XHRjdHgubGluZVdpZHRoID0gYm9hcmQuYm9yZGVyV2lkdGg7XG5cblx0XHRjdHguc2F2ZSgpO1xuXHRcdGN0eC50cmFuc2xhdGUobGVmdCwgdG9wKTtcblx0XHRjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5cdFx0Y3R4LnN0cm9rZVJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5cdFx0Y3R4LnJlc3RvcmUoKTtcblxuXHRcdC8vIOOBmeOBueOBpuOBrumnkuOCkuihqOekuuevhOWbsuWkluOBuOenu+WLlVxuXHRcdC8qdGhpcy5zdG9ja3MuZmxhdCgpLmZvckVhY2gocGllY2U9Pntcblx0XHRcdHBpZWNlLmNlbnRlciA9IC0xMDAwO1xuXHRcdFx0cGllY2UubWlkZGxlID0gLTEwMDA7XG5cdFx0fSk7Ki9cblx0XHRbLi4udGhpcy5zdG9ja3MudmFsdWVzKCldLmZvckVhY2goKHN0b2NrLCBwbGF5ZXIpPT57XG5cdFx0XHRsZXQgaSA9IDA7XG5cdFx0XHQvLyDmuqLjgozjgZ/loLTlkIjjga/lvozmlrnlhKrlhYjjgafooajnpLpcblx0XHRcdHN0b2NrID0gc3RvY2suc2xpY2UoLXlMZW4vNCp4TGVuKTtcblx0XHRcdGZvcihsZXQgcFk9MHx5TGVuLzQqcGxheWVyO3BZPHlMZW4vNCoocGxheWVyKzEpO3BZKyspe1xuXHRcdFx0XHRmb3IobGV0IHBYPTA7cFg8eExlbjtwWCsrKXtcblx0XHRcdFx0XHRjb25zdCBjZW50ZXIgPSBsZWZ0K3BpdGNoV2lkdGgqKHBYKzEpO1xuXHRcdFx0XHRcdGNvbnN0IG1pZGRsZSA9IHRvcCtwaXRjaEhlaWdodCoocFkrMSk7XG5cdFx0XHRcdFx0Y29uc3QgcGllY2UgPSBzdG9ja1tpKytdO1xuXHRcdFx0XHRcdGlmKHBpZWNlID09IG51bGwpIGJyZWFrO1xuXHRcdFx0XHRcdHBpZWNlLmNlbnRlciA9IGNlbnRlcjtcblx0XHRcdFx0XHRwaWVjZS5taWRkbGUgPSBtaWRkbGU7XG5cdFx0XHRcdFx0cGllY2UuZHJhdygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvKiog6aeS5Y+w44KS44OG44Kt44K544OI5b2i5byP44Gn5Y+W5b6XXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNDb21wYWN0IC0g44Kz44Oz44OR44Kv44OI6KGo56S6XG5cdCAqL1xuXHR0b1N0cmluZyhpc0NvbXBhY3Q9ZmFsc2Upe1xuXHRcdGNvbnN0IHt4TGVufSA9IHRoaXMuYm9hcmQ7XG5cdFx0Y29uc3Qgc3RvY2sgPSBbLi4udGhpcy5zdG9ja3MudmFsdWVzKCldLmZsYXQoKS5maWx0ZXIodj0+dik7XG5cblx0XHRsZXQgaGVhZCA9IDAgPCBzdG9jay5sZW5ndGg/IFwiXFxuXCIrXCLigJVcIi5yZXBlYXQoeExlbioyKStcIlxcblwiOiBcIlwiO1xuXHRcdGxldCB0ZXh0ID0gc3RvY2subWFwKG89PlwiXCIrbykuam9pbihcIlwiKTtcblx0XHRpZighaXNDb21wYWN0KXtcblx0XHRcdGhlYWQgPSBcIlwiO1xuXHRcdFx0Zm9yKGNvbnN0IGNoYXIgb2YgT2JqZWN0LnZhbHVlcyhQaWVjZS5kZWdDaGFycykpe1xuXHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKGNoYXIsIFwiXFxuXCIrYCR7Y2hhcn3mjIHpp5LvvJoke2NoYXJ9YCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBoZWFkK3RleHQ7XG5cdH1cbn1cbiIsImltcG9ydCB7UGFuZWx9IGZyb20gXCIuL3BhbmVsLmpzXCI7XG5pbXBvcnQge1BpZWNlfSBmcm9tIFwiLi9waWVjZS5qc1wiO1xuXG5jb25zdCBkZWdzID0gT2JqZWN0LmtleXMoUGllY2UuZGVnQ2hhcnMpO1xuY29uc3QgZ2V0SW5pdCA9ICgpPT4oe1xuXHRwYW5lbDogbnVsbCxcblx0cGllY2U6IG51bGxcbn0pO1xuXG4vKiog44Ki44Oz44OR44OD44K144Oz5oOF5aCx44Gu566h55CGICovXG5leHBvcnQgY2xhc3MgRW5QYXNzYW50e1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHRoaXMuZGVncyA9IHt9O1xuXHRcdGRlZ3MuZm9yRWFjaChkZWc9PnRoaXMuZGVnc1tkZWddID0gZ2V0SW5pdCgpKTtcblx0fVxuXG5cdC8qKiDjgqLjg7Pjg5Hjg4PjgrXjg7Pmg4XloLHjgpLjgq/jg6rjgqJcblx0ICogQHBhcmFtIHtudW1iZXJ9IGRlZyAtIOOCouODs+ODkeODg+OCteODs+OBleOCjOOBhuOCi+mZo+WWtuOBruinkuW6plxuXHQgKi9cblx0Y2xlYXIoZGVnKXtcblx0XHR0aGlzLmRlZ3NbZGVnXSA9IGdldEluaXQoKTtcblx0fVxuXG5cdC8qKiDjgqLjg7Pjg5Hjg4PjgrXjg7Plr77osaHjgajmiJDjgorjgYbjgovjg57jgrnmg4XloLHjgpLoqJjpjLJcblx0ICogQHBhcmFtIHtQYW5lbH0gcGFuZWwgLSDjgqLjg7Pjg5Hjg4PjgrXjg7Plr77osaHjgajmiJDjgorjgYbjgovjg57jgrnnm65cblx0ICogQHBhcmFtIHtQaWVjZX0gcGllY2UgLSDjgqLjg7Pjg5Hjg4PjgrXjg7Plr77osaHjgajmiJDjgorjgYbjgovpp5Jcblx0ICovXG5cdHNldFRhcmdldChwYW5lbCwgcGllY2Upe1xuXHRcdGlmKHBhbmVsLmhhc1RhcmdldChcInN0YXJ0XCIpICYmIHBpZWNlLmhhc0F0dHIoXCJlblBhc3NhbnRcIikpXG5cdFx0XHR0aGlzLmRlZ3NbcGllY2UuZGVnXS5wYW5lbCA9IHBhbmVsO1xuXHR9XG5cblx0LyoqIOOCouODs+ODkeODg+OCteODs+WvvuixoeOBqOaIkOOCiuOBhuOCi+mnkuaDheWgseOCkuiomOmMslxuXHQgKiBAcGFyYW0ge1BhbmVsfSB0b1BhbmVsIC0g44Ki44Oz44OR44OD44K144Oz5a++6LGh44GL56K66KqN44GZ44KL44Oe44K555uuXG5cdCAqL1xuXHRzZXRNb3ZlZCh0b1BhbmVsKXtcblx0XHRjb25zdCB7cGllY2V9ID0gdG9QYW5lbDtcblx0XHRjb25zdCBlcCA9IHRoaXMuZGVnc1twaWVjZS5kZWddO1xuXHRcdGlmKHBpZWNlICYmIHRvUGFuZWwgPT09IGVwLnBhbmVsKSBlcC5waWVjZSA9IHBpZWNlO1xuXHRcdGVsc2UgdGhpcy5jbGVhcihwaWVjZS5kZWcpO1xuXHR9XG5cblx0LyoqIOOCouODs+ODkeODg+OCteODs+WvvuixoeOBruODnuOCueOBi+eiuuiqjeOBmeOCi1xuXHQgKiBAcGFyYW0ge1BhbmVsfSBwYW5lbCAtIOOCouODs+ODkeODg+OCteODs+WvvuixoeOBqOaIkOOCiuOBhuOCi+ODnuOCueebrlxuXHQgKiBAcGFyYW0ge1BpZWNlfSBwaWVjZSAtIOOCouODs+ODkeODg+OCteODs+WvvuixoeOBqOaIkOOCiuOBhuOCi+mnklxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdGlzVGFyZ2V0KHBhbmVsLCBwaWVjZSl7XG5cdFx0aWYoIXBhbmVsIHx8ICFwYW5lbC5waWVjZSkgcmV0dXJuIHRydWU7XG5cdFx0aWYoIXBhbmVsLnBpZWNlLmhhc0F0dHIoXCJlblBhc3NhbnRcIikpIHJldHVybiBmYWxzZTtcblx0XHRyZXR1cm4gcGFuZWwucGllY2UgPT09IHRoaXMuZGVnc1twYW5lbC5waWVjZS5kZWddLnBpZWNlO1xuXHR9XG59XG4iLCIvKiogQHR5cGVkZWYge2ltcG9ydCgnLi9qc29uJykuQm9hcmRJbml0T3B0aW9ufSBCb2FyZEluaXRPcHRpb24gKi9cbmltcG9ydCB7Y2FudmFzRm9udH0gZnJvbSBcIi4vY2FudmFzRm9udExvYWRlci5qc1wiO1xuaW1wb3J0IHtjYW52YXNJbWFnZX0gZnJvbSBcIi4vY2FudmFzSW1hZ2VMb2FkZXIuanNcIjtcbmltcG9ydCB7ZG93bmxvYWRJbWFnZX0gZnJvbSBcIi4vZG93bmxvYWRJbWFnZS5qc1wiO1xuaW1wb3J0IHt1SUNvbnRyb2x9IGZyb20gXCIuL3VpQ29udHJvbC5qc1wiO1xuaW1wb3J0IHtTdGFuZH0gZnJvbSBcIi4vc3RhbmQuanNcIjtcbmltcG9ydCB7UGFuZWx9IGZyb20gXCIuL3BhbmVsLmpzXCI7XG5pbXBvcnQge1BpZWNlfSBmcm9tIFwiLi9waWVjZS5qc1wiO1xuaW1wb3J0IHtFblBhc3NhbnR9IGZyb20gXCIuL2VuUGFzc2FudC5qc1wiO1xuaW1wb3J0IHtCb2R9IGZyb20gXCIuL2JvZC5qc1wiO1xuaW1wb3J0IHtib2FyZHMsIGdhbWVzfSBmcm9tIFwiLi9qc29uLmpzXCI7XG5cbi8qKiDnm6Tjga7nrqHnkIbjgq/jg6njgrkgKi9cbmV4cG9ydCBjbGFzcyBCb2FyZHtcblx0LyoqIOOCsuODvOODoOOCkuWun+ihjOOBmeOCi1xuXHQgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fX0gY2FudmFzIC0gQ2FudmFz6KaB57SgXG5cdCAqIEBwYXJhbSB7Qm9hcmRJbml0T3B0aW9ufSBvcHRpb24gLSDjg5zjg7zjg4njga7liJ3mnJ/ljJbjgqrjg5fjgrfjg6fjg7Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbi5wbGF5Qm9hcmQgLSDjg5zjg7zjg4njgr/jgqTjg5dcblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbi5wbGF5UGllY2VzIC0g6aeS44K744OD44OIXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb24ucGxheVBpZWNlcy5nYW1lTmFtZSAtIOOCsuODvOODoOWQjSjln7rmupbjgajjgarjgovpp5Ljga7phY3nva7jgrvjg4Pjg4gpXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb24ucGxheVBpZWNlcy5waWVjZVNldCAtIOmnkuOBrumFjee9ruODkeOCv+ODvOODs1xuXHQgKiBAcmV0dXJucyBCb2FyZFxuXHQgKi9cblx0c3RhdGljIHJ1bihjYW52YXMsIG9wdGlvbil7XG5cdFx0Y29uc3Qge3BsYXlCb2FyZCwgcGxheVBpZWNlcywgb25EcmF3ZWR9ID0gb3B0aW9uO1xuXHRcdGNvbnN0IHBsYXllcnMgPSBwbGF5UGllY2VzLnNvbWUoKHtnYW1lTmFtZX0sIGkpPT4xIDwgaSAmJiBnYW1lTmFtZSk/IDQ6IDI7XG5cdFx0Ly8g44Oc44O844OJ44KS55Sf5oiQXG5cdFx0Y29uc3QgYm9hcmQgPSBuZXcgQm9hcmQoY2FudmFzLCBwbGF5Qm9hcmQsIHtcblx0XHRcdC4uLm9wdGlvbixcblx0XHRcdHBsYXllcnMsXG5cdFx0XHRvbkRyYXdlZFxuXHRcdH0pO1xuXHRcdC8vIOmnkuOCkumFjee9rlxuXHRcdHBsYXlQaWVjZXMuZm9yRWFjaCgoe2dhbWVOYW1lLCBwaWVjZVNldH0sIGkpPT57XG5cdFx0XHRpZighZ2FtZU5hbWUpIHJldHVybjtcblx0XHRcdHBpZWNlU2V0ID8/PSBcImRlZmF1bHRcIjtcblx0XHRcdHRyeXtcblx0XHRcdFx0Ym9hcmQucHV0U3RhcnRQaWVjZXMoaSwgZ2FtZU5hbWUsIHBpZWNlU2V0KTtcblx0XHRcdH1cblx0XHRcdGNhdGNoe31cblx0XHR9KTtcblx0XHQvLyDmj4/lhpnjgqTjg5njg7Pjg4jjgpLoqK3lrppcblx0XHRib2FyZC5vbkRyYXdlZCA9IG9uRHJhd2VkO1xuXHRcdHJldHVybiBib2FyZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAdHlwZWRlZiB7XCJvdmVyZmxvd1wifFwiaG9yaXpvbnRhbFwifFwidmVydGljYWxcInxcInBhcmVudE92ZXJmbG93XCJ8XCJwYXJlbnRIb3Jpem9udGFsXCJ8XCJwYXJlbnRWZXJ0aWNhbFwifG51bGx9IGNhbnZhc0ZpdFxuXHQgKi9cblx0LyoqXG5cdCAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhcyAtIENhbnZhc+imgee0oFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGxheUJvYXJkIC0g44Oc44O844OJ44K/44Kk44OXXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwbGF5ZXJzIC0g44OX44Os44Kk44Ok44O85Lq65pWwKDIgb3IgNClcblx0ICogQHBhcmFtIHtCb2FyZEluaXRPcHRpb259IG9wdGlvbiAtIOODnOODvOODieOBruWIneacn+WMluOCquODl+OCt+ODp+ODs1xuXHQgKi9cblx0Y29uc3RydWN0b3IoY2FudmFzLCBwbGF5Qm9hcmQsIG9wdGlvbil7XG5cdFx0Y29uc3Qge1xuXHRcdFx0cGxheWVycz0yLFxuXHRcdFx0Y2FudmFzV2lkdGg9dW5kZWZpbmVkLFxuXHRcdFx0Y2FudmFzSGVpZ2h0PXVuZGVmaW5lZCxcblx0XHRcdGNhbnZhc0ZpdD1cIm92ZXJmbG93XCIsXG5cdFx0XHRib2FyZExlZnQ9NSxcblx0XHRcdGJvYXJkVG9wPTUsXG5cdFx0XHRwYW5lbFdpZHRoPTUwLFxuXHRcdFx0cGFuZWxIZWlnaHQ9MHxwYW5lbFdpZHRoKjEuMSxcblx0XHRcdHBpZWNlU2l6ZT0wfHBhbmVsV2lkdGgqMC45LFxuXHRcdFx0dXNlUmFua1NpemUgPSB0cnVlLFxuXHRcdFx0aXNEcmF3U2hhZG93ID0gdHJ1ZSxcblx0XHRcdGJvcmRlcldpZHRoPU1hdGgubWluKHBhbmVsV2lkdGgsIHBhbmVsSGVpZ2h0KS8zMCxcblx0XHRcdHVzZVN0YW5kPWZhbHNlLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yPVwiIzAwMDAwMDAwXCIsXG5cdFx0XHRhdXRvRHJhd2luZz10cnVlLFxuXHRcdFx0b25EcmF3ZWQsXG5cdFx0XHRvbkdhbWVPdmVyPWk9PmFsZXJ0KGDjg5fjg6zjgqTjg6Tjg7wke2krMX3jga7mlZfljJfjgafjgZnjgIJgKSxcblx0XHRcdGZyZWVNb2RlPWZhbHNlXG5cdFx0fSA9IG9wdGlvbjtcblx0XHQvLyDliJ3mnJ/ljJZcblx0XHRjb25zdCBjYW52YXNGb250QXN5bmMgPSBjYW52YXNGb250LmltcG9ydEFzeW5jKCk7XG5cdFx0Y29uc3QgY2FudmFzSW1hZ2VBc3luYyA9IGNhbnZhc0ltYWdlLmltcG9ydEFzeW5jKCk7XG5cdFx0dGhpcy5jYW52YXMgPSBjYW52YXM7XG5cdFx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblx0XHRjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cdFx0dGhpcy5jdHggPSBjdHg7XG5cblx0XHR0aGlzLnBpZWNlcyA9IFBpZWNlLmdldFBpZWNlcyhjdHgsIHtcblx0XHRcdHNpemU6IHBpZWNlU2l6ZSxcblx0XHRcdHVzZVJhbmtTaXplLFxuXHRcdFx0aXNEcmF3U2hhZG93XG5cdFx0fSk7XG5cblx0XHQvLyDjg5zjg7zjg4nmg4XloLFcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIGJvYXJkc1twbGF5Qm9hcmRdKTtcblx0XHRpZighWzIsIDRdLmluY2x1ZGVzKHBsYXllcnMpKSB0aHJvdyBFcnJvcihgcGxheWVycz0ke3BsYXllcnN9LCBwbGF5ZXJzIG5lZWQgMiBvciA0LmApO1xuXHRcdHRoaXMucGxheWVycyA9IHBsYXllcnM7XG5cdFx0dGhpcy5sZWZ0ID0gYm9hcmRMZWZ0O1xuXHRcdHRoaXMudG9wID0gYm9hcmRUb3A7XG5cdFx0dGhpcy5wYW5lbFdpZHRoID0gcGFuZWxXaWR0aDtcblx0XHR0aGlzLnBhbmVsSGVpZ2h0ID0gcGFuZWxIZWlnaHQ7XG5cdFx0dGhpcy5ib3JkZXJXaWR0aCA9IGJvcmRlcldpZHRoO1xuXHRcdHRoaXMucGllY2VTaXplID0gcGllY2VTaXplO1xuXHRcdHRoaXMuY2FudmFzQmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yO1xuXG5cdFx0Ly8g44Oe44K555uu44OH44O844K/44KS5qeL56+JXG5cdFx0dGhpcy5maWVsZCA9IHRoaXMuZmllbGQubWFwKChyb3csIHBZKT0+XG5cdFx0XHRbLi4ucm93XS5tYXAoKGNoYXIsIHBYKT0+e1xuXHRcdFx0XHRjb25zdCBjZW50ZXIgPSBib2FyZExlZnQrcGFuZWxXaWR0aCoocFgrMSk7XG5cdFx0XHRcdGNvbnN0IG1pZGRsZSA9IGJvYXJkVG9wK3BhbmVsSGVpZ2h0KihwWSsxKVxuXHRcdFx0XHRyZXR1cm4gbmV3IFBhbmVsKGN0eCwgY2hhciwgY2VudGVyLCBtaWRkbGUsIHBhbmVsV2lkdGgsIHBhbmVsSGVpZ2h0LCBib3JkZXJXaWR0aCwgcFgsIHBZKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0XHR0aGlzLnhMZW4gPSB0aGlzLmZpZWxkWzBdLmxlbmd0aDtcblx0XHR0aGlzLnlMZW4gPSB0aGlzLmZpZWxkLmxlbmd0aDtcblx0XHR0aGlzLndpZHRoID0gdGhpcy5wYW5lbFdpZHRoKih0aGlzLnhMZW4rMSk7XG5cdFx0dGhpcy5oZWlnaHQgPSB0aGlzLnBhbmVsSGVpZ2h0Kih0aGlzLnlMZW4rMSk7XG5cdFx0dGhpcy5yaWdodCA9IGJvYXJkTGVmdCt0aGlzLndpZHRoO1xuXHRcdHRoaXMuYm90dG9tID0gYm9hcmRUb3ArdGhpcy5oZWlnaHQ7XG5cdFx0dGhpcy5zdGFuZCA9IG5ldyBTdGFuZCh0aGlzKTtcblx0XHRjYW52YXMud2lkdGggPSBjYW52YXNXaWR0aCA/PyAodXNlU3RhbmQ/IHRoaXMuc3RhbmQucmlnaHQ6IHRoaXMucmlnaHQpKzU7XG5cdFx0Y2FudmFzLmhlaWdodCA9IGNhbnZhc0hlaWdodCA/PyB0aGlzLmJvdHRvbSs1O1xuXHRcdC8vIOOCreODo+ODs+ODkOOCueOCteOCpOOCuuiqv+aVtFxuXHRcdGNvbnN0IHtzdHlsZX0gPSBjYW52YXM7XG5cdFx0aWYoY2FudmFzRml0ID09PSBcIm92ZXJmbG93XCIpe1xuXHRcdFx0aWYoc3R5bGUubWF4V2lkdGggPT09IFwiXCIpIHN0eWxlLm1heFdpZHRoID0gXCI5N3Z3XCI7XG5cdFx0XHRpZihzdHlsZS5tYXhIZWlnaHQgPT09IFwiXCIpIHN0eWxlLm1heEhlaWdodCA9IFwiOTd2aFwiO1xuXHRcdH1cblx0XHRlbHNlIGlmKGNhbnZhc0ZpdCA9PT0gXCJob3Jpem9udGFsXCIpe1xuXHRcdFx0aWYoc3R5bGUud2lkdGggPT09IFwiXCIpIHN0eWxlLndpZHRoID0gXCI5N3Z3XCI7XG5cdFx0fVxuXHRcdGVsc2UgaWYoY2FudmFzRml0ID09PSBcInZlcnRpY2FsXCIpe1xuXHRcdFx0aWYoc3R5bGUuaGVpZ2h0ID09PSBcIlwiKSBzdHlsZS5oZWlnaHQgPSBcIjk3dmhcIjtcblx0XHR9XG5cdFx0ZWxzZSBpZihjYW52YXNGaXQgPT09IFwicGFyZW50T3ZlcmZsb3dcIil7XG5cdFx0XHRpZihzdHlsZS5tYXhXaWR0aCA9PT0gXCJcIikgc3R5bGUubWF4V2lkdGggPSBcIjEwMCVcIjtcblx0XHRcdGlmKHN0eWxlLm1heEhlaWdodCA9PT0gXCJcIikgc3R5bGUubWF4SGVpZ2h0ID0gXCIxMDAlXCI7XG5cdFx0fVxuXHRcdGVsc2UgaWYoY2FudmFzRml0ID09PSBcInBhcmVudEhvcml6b250YWxcIil7XG5cdFx0XHRpZihzdHlsZS53aWR0aCA9PT0gXCJcIikgc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcblx0XHR9XG5cdFx0ZWxzZSBpZihjYW52YXNGaXQgPT09IFwicGFyZW50VmVydGljYWxcIil7XG5cdFx0XHRpZihzdHlsZS5oZWlnaHQgPT09IFwiXCIpIHN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuXHRcdH1cblxuXHRcdC8vIOaPj+WGmeabtOaWsOioreWumlxuXHRcdHRoaXMuYXV0b0RyYXdpbmcgPSBhdXRvRHJhd2luZztcblx0XHRpZihhdXRvRHJhd2luZyl7XG5cdFx0XHRjYW52YXNGb250QXN5bmMudGhlbigoKT0+dGhpcy5kcmF3KCkpO1xuXHRcdFx0Y2FudmFzSW1hZ2VBc3luYy50aGVuKCgpPT50aGlzLmRyYXcoKSk7XG5cdFx0XHR0aGlzLmRyYXcoKTtcblx0XHR9XG5cdFx0dGhpcy5vbkRyYXdlZCA9IG9uRHJhd2VkO1xuXHRcdHRoaXMub25HYW1lT3ZlciA9IG9uR2FtZU92ZXI7XG5cdFx0LyoqICAqL1xuXHRcdHRoaXMuZ2FtZUFsaXZlcyA9IG5ldyBNYXAoXG5cdFx0XHRbLi4uQXJyYXkodGhpcy5wbGF5ZXJzKS5rZXlzKCldXG5cdFx0XHQubWFwKGk9Plt0aGlzLiNkZWdOb3JtYWwoaSksIHRydWVdKVxuXHRcdCk7XG5cdFx0dGhpcy5mcmVlTW9kZSA9IGZyZWVNb2RlO1xuXG5cdFx0dGhpcy5yZWNvcmQgPSBbXTtcblx0XHR0aGlzLnVpQ29udHJvbCA9IHVJQ29udHJvbCh0aGlzKTtcblx0XHR0aGlzLmVuUGFzc2FudCA9IG5ldyBFblBhc3NhbnQoKTtcblx0fVxuXG5cdC8qKiDjg5zjg7zjg4njgpLplonjgZjjgosgKi9cblx0Y2xvc2UoKXtcblx0XHR0aGlzLnVpQ29udHJvbC5yZW1vdmVFdmVudCgpO1xuXHR9XG5cblx0LyoqIOinkuW6puOCkuato+imj+WMllxuXHQgKiBAcGFyYW0ge251bWJlcn0gcGxheWVhSWRPckRlZyAtIOODl+ODrOOCpOODpOODvOeVquWPt+OBvuOBn+OBr+inkuW6plxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cblx0I2RlZ05vcm1hbChwbGF5ZWFJZE9yRGVnKXtcblx0XHRsZXQgZGVnID0gcGxheWVhSWRPckRlZztcblx0XHRpZigwIDwgZGVnICYmIGRlZyA8IDQpIGRlZyA9IDB8ZGVnKjM2MC90aGlzLnBsYXllcnM7XG5cdFx0ZG97ZGVnID0gKGRlZyszNjApJTM2MH0gd2hpbGUoZGVnPDApO1xuXHRcdHJldHVybiBkZWc7XG5cdH1cblxuXHQvKiog6aeS6YWN572u44KS5Zue6LuiXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBkZWcgLSDlm57ou6Lop5IgKDkw44Gu5YCN5pWwKVxuXHQgKi9cblx0cm90YXRlRmllbGQoZGVnKXtcblx0XHRjb25zdCB7eExlbiwgeUxlbn0gPSB0aGlzO1xuXG5cdFx0ZGVnID0gdGhpcy4jZGVnTm9ybWFsKGRlZyk7XG5cdFx0aWYoZGVnID09PSAwKSByZXR1cm47XG5cdFx0aWYoIVs5MCwgMTgwLCAyNzBdLmluY2x1ZGVzKGRlZykpIHRocm93IEVycm9yKGBkZWc9JHtkZWd9LCBkZWcgbmVlZCBtdWx0aXBsZSBvZiA5MC5gKTtcblx0XHRpZihbOTAsIDI3MF0uaW5jbHVkZXMoZGVnKSl7XG5cdFx0XHQvLyAy5qyh6YWN5YiX44KS6Lui572uXG5cdFx0XHRjb25zdCB0cmFuc3Bvc2UgPSBhID0+IGFbMF0ubWFwKChfLCBjKSA9PiBhLm1hcChyID0+IHJbY10pKTtcblx0XHRcdGlmKHhMZW4gIT09IHlMZW4pIHRocm93IEVycm9yKGBjb2xzPSR7eExlbn0gIT0gcm93cz0ke3lMZW59LCBOb3Qgcm93cyA9IGNvbHMuYCk7XG5cdFx0XHR0aGlzLmZpZWxkID0gdHJhbnNwb3NlKHRoaXMuZmllbGQpO1xuXHRcdH1cblx0XHRpZihbMTgwLCAyNzBdLmluY2x1ZGVzKGRlZykpe1xuXHRcdFx0dGhpcy5maWVsZC5yZXZlcnNlKCk7XG5cdFx0fVxuXHRcdHRoaXMuZmllbGQuZm9yRWFjaChyb3c9Pntcblx0XHRcdHJvdy5mb3JFYWNoKHBhbmVsPT57XG5cdFx0XHRcdGlmKCFwYW5lbC5waWVjZSkgcmV0dXJuO1xuXHRcdFx0XHRwYW5lbC5waWVjZS5kZWcgKz0gZGVnO1xuXHRcdFx0fSk7XG5cdFx0XHRpZihbOTAsIDE4MF0uaW5jbHVkZXMoZGVnKSkgcm93LnJldmVyc2UoKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKiDpp5Ljga7liJ3mnJ/phY3nva5cblx0ICogQHBhcmFtIHtudW1iZXJ9IHBsYXllcklkIC0g44OX44Os44Kk44Ok44O855Wq5Y+3XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBnYW1lTmFtZSAtIOOCsuODvOODoOWQjSjln7rmupbjgajjgarjgovpp5Ljga7phY3nva7jgrvjg4Pjg4gpXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwaWVjZVNldCAtIOmnkuOBrumFjee9ruODkeOCv+ODvOODs1xuXHQgKi9cblx0cHV0U3RhcnRQaWVjZXMocGxheWVySWQsIGdhbWVOYW1lLCBwaWVjZVNldD1cImRlZmF1bHRcIil7XG5cdFx0Y29uc3Qge3BpZWNlc30gPSB0aGlzO1xuXG5cdFx0Y29uc3QgZGVnID0gdGhpcy4jZGVnTm9ybWFsKHBsYXllcklkKTtcblx0XHR0aGlzLnJvdGF0ZUZpZWxkKGRlZyk7XG5cdFx0Y29uc3QgcG9zID0gZ2FtZXNbZ2FtZU5hbWVdLnBvc2l0aW9uW3RoaXMueExlbl1bcGllY2VTZXRdO1xuXHRcdGlmKCFwb3MpIHRocm93IEVycm9yKGBnYW1lc1tcIiR7Z2FtZU5hbWV9XCJdLnBvc2l0aW9uW1wiJHt0aGlzLnhMZW59XCJdW1wiJHtwaWVjZVNldH1cIl1pcyBudWxsLmApO1xuXHRcdHBvcy5mb3JFYWNoKChyb3csIGkpPT57XG5cdFx0XHRpZihyb3cubGVuZ3RoIDwgdGhpcy54TGVuKSB0aHJvdyBFcnJvcihyb3cuam9pbihcIlwiKSk7XG5cdFx0XHRjb25zdCBwWSA9IGkrdGhpcy55TGVuIC0gcG9zLmxlbmd0aDtcblx0XHRcdFsuLi5yb3ddLmZvckVhY2goKGNoYXIsIHBYKT0+e1xuXHRcdFx0XHRpZighcGllY2VzW2NoYXJdKSByZXR1cm47XG5cdFx0XHRcdGNvbnN0IHBpZWNlID0gcGllY2VzW2NoYXJdLmNsb25lKCk7XG5cdFx0XHRcdGNvbnN0IHBhbmVsID0gdGhpcy5maWVsZFtwWV1bcFhdO1xuXHRcdFx0XHRwaWVjZS5jZW50ZXIgPSBwYW5lbC5jZW50ZXI7XG5cdFx0XHRcdHBpZWNlLm1pZGRsZSA9IHBhbmVsLm1pZGRsZTtcblx0XHRcdFx0cGFuZWwucGllY2UgPSBwaWVjZTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHRoaXMucm90YXRlRmllbGQoLWRlZyk7XG5cdFx0aWYodGhpcy5hdXRvRHJhd2luZykgdGhpcy5kcmF3KCk7XG5cdH1cblxuXHQvKiog6aeS44Gu6YWN572uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwaWVjZSAtIOmnkuOBruihqOePvuaWh+Wtl1xuXHQgKiBAcGFyYW0ge251bWJlcn0gcFggLSBY5pa55ZCR6YWN572u5L2N572uKOODnuOCueebruWfuua6lilcblx0ICogQHBhcmFtIHtudW1iZXJ9IHBZIC0gWeaWueWQkemFjee9ruS9jee9rijjg57jgrnnm67ln7rmupYpXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwbGF5ZWFJZE9yRGVnIC0g44OX44Os44Kk44Ok44O855Wq5Y+344G+44Gf44Gv6aeS44Gu6YWN572u6KeSXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb24gLSDjgqrjg5fjgrfjg6fjg7Ncblx0ICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbi5kaXNwbGF5UHRuIC0g6KGo56S65paH5a2X5YiX44KS5aSJ5pu0KDHjgJwpXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9uLmlzTW92ZWQgLSDliJ3lm57np7vli5XmuIjjgb/jgYvlkKbjgYtcblx0ICovXG5cdHB1dE5ld1BpZWNlKHBpZWNlLCBwWCwgcFksIHBsYXllYUlkT3JEZWcsIG9wdGlvbj17fSl7XG5cdFx0Y29uc3Qge2Rpc3BsYXlQdG49MCwgaXNNb3ZlZD1mYWxzZX0gPSBvcHRpb247XG5cdFx0Y29uc3Qge3BpZWNlc30gPSB0aGlzO1xuXG5cdFx0Y29uc3QgZGVnID0gdGhpcy4jZGVnTm9ybWFsKHBsYXllYUlkT3JEZWcpO1xuXHRcdGlmKHR5cGVvZiBwaWVjZSA9PT0gXCJzdHJpbmdcIil7XG5cdFx0XHRwaWVjZSA9IG5ldyBQaWVjZSh0aGlzLmN0eCwgcGllY2VzW3BpZWNlXSwge2Rpc3BsYXlQdG4sIGRlZywgaXNNb3ZlZH0pO1xuXHRcdH1cblx0XHRjb25zdCBwYW5lbCA9IHRoaXMuZmllbGRbcFldW3BYXTtcblx0XHRwaWVjZS5jZW50ZXIgPSBwYW5lbC5jZW50ZXI7XG5cdFx0cGllY2UubWlkZGxlID0gcGFuZWwubWlkZGxlO1xuXHRcdHBhbmVsLnBpZWNlID0gcGllY2U7XG5cdFx0aWYodGhpcy5hdXRvRHJhd2luZykgdGhpcy5kcmF3KCk7XG5cdH1cblxuXHQvKiog5paH5a2X5YiX44GL44KJ6aeS44KS6YWN572uXG5cdCAqIHtzdHJpbmd9IHRleHQgLSDpp5LphY3nva7jgpLooajjgZnmloflrZfliJdcblx0ICovXG5cdHNldFRleHRQaWVjZXModGV4dCl7XG5cdFx0Y29uc3Qge2ZpZWxkLCBwaWVjZXMsIHhMZW4sIHlMZW59ID0gdGhpcztcblxuXHRcdGNvbnN0IHN0YW5kVGl0bGUgPSBcIuaMgemnku+8mlwiO1xuXHRcdC8vIEJPROW9ouW8j1xuXHRcdGlmKDA8dGV4dC5pbmRleE9mKHN0YW5kVGl0bGUpKSB0ZXh0ID0gQm9kLmNvbnZTZXRUZXh0KHRleHQpO1xuXG5cdFx0Ly8g5o6S6Zmk44GZ44KL6KiY5Y+3XG5cdFx0Y29uc3Qgbm9pc2VzID0gXCLilI/ilIHilK/ilJPilJfilLfilJvilIPilILilKDilIDilLzilKjigJVcIjtcblxuXHRcdC8vIOmFjeWIl+WkieaPm1xuXHRcdGNvbnN0IHRleHRzID0gW3RleHRdLmNvbmNhdChcblx0XHRcdFx0Wy4uLm5vaXNlc10sXG5cdFx0XHRcdE9iamVjdC52YWx1ZXMoUGllY2UuZGVnQ2hhcnMpLm1hcChjPT5cIlxcblwiK2Mrc3RhbmRUaXRsZSlcblx0XHRcdCkucmVkdWNlKFxuXHRcdFx0XHQodGV4dCxjaGFyKT0+XG5cdFx0XHRcdFx0dGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAoY2hhcixcImdcIiksIFwiXCIpXG5cdFx0XHQpLnJlcGxhY2UoL1xcblxcbi9nLCBcIlxcblwiKVxuXHRcdFx0LnJlcGxhY2UoL+OAgC9nLCBcIuODu1wiKVxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnNwbGl0KC9cXG4vKVxuXHRcdFx0Lm1hcChcblx0XHRcdFx0cm93PT5yb3cubWF0Y2goLy57Mn0vZykpO1xuXG5cdFx0Ly8g44Oc44O844OJ44Gr6aeS44KS6YWN572uXG5cdFx0Zm9yKGxldCBwWT0wO3BZPHlMZW47cFkrKyl7XG5cdFx0XHRmb3IobGV0IHBYPTA7cFg8eExlbjtwWCsrKXtcblx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdGNvbnN0IHRleHQgPSB0ZXh0c1twWV1bcFhdO1xuXHRcdFx0XHRcdGNvbnN0IHBpZWNlID0gUGllY2Uuc3RyaW5nVG9QaWVjZShwaWVjZXMsIHRleHQpO1xuXHRcdFx0XHRcdHBpZWNlLmNlbnRlciA9IGZpZWxkW3BZXVtwWF0uY2VudGVyO1xuXHRcdFx0XHRcdHBpZWNlLm1pZGRsZSA9IGZpZWxkW3BZXVtwWF0ubWlkZGxlO1xuXHRcdFx0XHRcdGZpZWxkW3BZXVtwWF0ucGllY2UgPSBwaWVjZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXRjaChleCl7XG5cdFx0XHRcdFx0ZmllbGRbcFldW3BYXS5waWVjZSA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyDmjIHjgaHpp5LjgpLphY3nva5cblx0XHR0aGlzLnN0YW5kLmNsZWFyKCk7XG5cdFx0Y29uc3Qgc3RhbmRUZXh0cyA9IHRleHRzW3lMZW5dO1xuXHRcdGlmKHN0YW5kVGV4dHMpe1xuXHRcdFx0c3RhbmRUZXh0cy5mb3JFYWNoKHRleHQ9Pntcblx0XHRcdFx0Y29uc3QgcGllY2UgPSBQaWVjZS5zdHJpbmdUb1BpZWNlKHBpZWNlcywgdGV4dCk7XG5cdFx0XHRcdGlmKCFwaWVjZSkgcmV0dXJuO1xuXHRcdFx0XHR0aGlzLnN0YW5kLmFkZChwaWVjZSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYodGhpcy5hdXRvRHJhd2luZykgdGhpcy5kcmF3KCk7XG5cdH1cblxuXHQvKiog6KeS5bqm5Z+65rqW44Gu44Oe44K555uu44Gu6KGM44KS5Y+W5b6X44GZ44KLXG5cdCAqIEBwYXJhbSB7UGFuZWx9IHBhbmVsIC0g44Oe44K555uuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBkZWcgLSDop5LluqZcblx0ICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldERlZyAtIOijnOato+inkuW6plxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cblx0Z2V0Um93KHBYLCBwWSwgZGVnLCBvZmZzZXREZWc9MCl7XG5cdFx0Y29uc3Qge3hMZW4sIHlMZW59ID0gdGhpcztcblxuXHRcdGRlZyA9IHRoaXMuI2RlZ05vcm1hbChkZWcrb2Zmc2V0RGVnKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0ZGVnID09PSAwPyB5TGVuLTEtcFk6XG5cdFx0XHRkZWcgPT09IDkwPyBwWDpcblx0XHRcdGRlZyA9PT0gMTgwPyBwWTpcblx0XHRcdGRlZyA9PT0gMjcwPyB4TGVuLTEtcFg6XG5cdFx0XHQtMVxuXHRcdCk7XG5cdH1cblxuXHQvKiog6KeS5bqm5Z+65rqW44Gu44Oe44K555uu44Gu5YiX44KS5Y+W5b6X44GZ44KLXG5cdCAqIEBwYXJhbSB7UGFuZWx9IHBhbmVsIC0g44Oe44K555uuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBkZWcgLSDop5LluqZcblx0ICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldERlZyAtIOijnOato+inkuW6plxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cblx0Z2V0Q29sKHBYLCBwWSwgZGVnLCBvZmZzZXREZWc9MCl7XG5cdFx0Y29uc3Qge3hMZW4sIHlMZW59ID0gdGhpcztcblxuXHRcdGRlZyA9IHRoaXMuI2RlZ05vcm1hbChkZWcrb2Zmc2V0RGVnKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0ZGVnID09PSAwPyBwWDpcblx0XHRcdGRlZyA9PT0gOTA/IHlMZW4tMS1wWTpcblx0XHRcdGRlZyA9PT0gMTgwPyB4TGVuLTEtcFg6XG5cdFx0XHRkZWcgPT09IDI3MD8gcFk6XG5cdFx0XHQtMVxuXHRcdCk7XG5cdH1cblxuXHQvKiog44OX44Ot44Oi44O844K344On44Oz44Ko44Oq44Ki5YaF44Gn44GC44KL44GL5Yik5YilXG5cdCAqIEBwYXJhbSB7UGFuZWx9IHBhbmVsIC0g44Oe44K555uuXG5cdCAqL1xuXHRjaGVja0NhblByb21vKHBhbmVsKXtcblx0XHRjb25zdCB7eUxlbn0gPSB0aGlzO1xuXHRcdGNvbnN0IHtwaWVjZSwgcFgsIHBZfSA9IHBhbmVsO1xuXHRcdGNvbnN0IHtkZWd9ID0gcGllY2U7XG5cblx0XHRjb25zdCBbcHJvbW9MaW5lLCBmb3JjZVByb21vTGluZV0gPSBbXG5cdFx0XHRwaWVjZS5nYW1lLnByb21vTGluZSxcblx0XHRcdHBpZWNlLmZvcmNlUHJvbW9MaW5lXG5cdFx0XS5tYXAobGluZT0+eUxlbi1saW5lLSgwfHRoaXMucHJvbW9MaW5lT2Zmc2V0KSk7XG5cblx0XHRsZXQgcm93O1xuXHRcdGlmKCF0aGlzLnNpZGVQcm9tbyl7XG5cdFx0XHRyb3cgPSB0aGlzLmdldFJvdyhwWCwgcFksIGRlZyk7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHRyb3cgPSBNYXRoLm1heChcblx0XHRcdFx0Li4uT2JqZWN0LmtleXMoUGllY2UuZGVnQ2hhcnMpXG5cdFx0XHRcdC5tYXAoZD0+MHxkKVxuXHRcdFx0XHQuZmlsdGVyKGQ9PmQhPT1kZWcpXG5cdFx0XHRcdC5tYXAoXG5cdFx0XHRcdFx0ZD0+dGhpcy5nZXRSb3cocFgsIHBZLCBkLCAxODApXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRjYW5Qcm9tbzogcHJvbW9MaW5lIDw9IHJvdyxcblx0XHRcdGZvcmNlUHJvbW86IGZvcmNlUHJvbW9MaW5lIDw9IHJvd1xuXHRcdH07XG5cdH1cblxuXHQvKiog5pWX5YyX44GX44Gf44OX44Os44Kk44Ok44O844GM5a2Y5Zyo44GZ44KL44GL56K66KqN44GX44CB44Kk44OZ44Oz44OI44KS55m655Sf44GV44Gb44KLICovXG5cdCNlbWl0R2FtZU92ZXIoKXtcblx0XHRbLi4udGhpcy5nYW1lQWxpdmVzXS5mb3JFYWNoKChbZGVnLCBnYW1lQWxpdmVdLCBpKT0+e1xuXHRcdFx0aWYoIWdhbWVBbGl2ZSkgcmV0dXJuO1xuXHRcdFx0aWYodGhpcy5maWVsZC5zb21lKHJvdz0+XG5cdFx0XHRcdHJvdy5zb21lKCh7cGllY2V9KT0+XG5cdFx0XHRcdFx0cGllY2Vcblx0XHRcdFx0XHQmJiBwaWVjZS5kZWcgPT09IGRlZ1xuXHRcdFx0XHRcdCYmIHBpZWNlLmhhc0F0dHIoXCJraW5nXCIpXG5cdFx0XHRcdClcblx0XHRcdCkpIHJldHVybjtcblx0XHRcdHRoaXMuZ2FtZUFsaXZlcy5zZXQoZGVnLCBmYWxzZSk7XG5cdFx0XHR0aGlzLm9uR2FtZU92ZXIoaSk7XG5cdFx0fSlcblx0fVxuXG5cdC8qKiDjg5fjg63jg6Ljg7zjgrfjg6fjg7Plh6bnkIZcblx0ICogQHBhcmFtIHtQYW5lbH0gZnJvbVBhbmVsIC0g56e75YuV5YWD44Gu44Oe44K555uuXG5cdCAqIEBwYXJhbSB7UGFuZWx9IHRvUGFuZWwgLSDpgbjmip7kuK3jga7jg57jgrnnm65cblx0ICogQHBhcmFtIHtib29sZWFufSBjYW5Qcm9tbyAtIOaIkOOCi+OBk+OBqOOBjOOBp+OBjeOCi1xuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGZvcmNlUHJvbW8gLSDmiJDjgorjgpLlvLfliLbjgZnjgotcblx0ICovXG5cdCNwcm9tb0RpYWxvZyhmcm9tUGFuZWwsIHRvUGFuZWwsIGNhblByb21vLCBmb3JjZVByb21vKXtcblx0XHRjb25zdCB7ZnJlZU1vZGV9ID0gdGhpcztcblx0XHRjb25zdCB7cGllY2V9ID0gdG9QYW5lbDtcblxuXHRcdC8vIOODl+ODreODouODvOOCt+ODp+ODs+WHpueQhlxuXHRcdGlmKCFwaWVjZS5wcm9tbyB8fCBwaWVjZS5oYXNBdHRyKFwicHJvbW90ZWRcIikgfHwgIWNhblByb21vKXtcblx0XHRcdHRoaXMuYWRkUmVjb3JkKHRvUGFuZWwsIHtmcm9tUGFuZWx9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0ZG97XG5cdFx0XHRmb3IoY29uc3QgW2NoYXIsIHtuYW1lfV0gb2YgT2JqZWN0LmVudHJpZXMocGllY2UucHJvbW8pKXtcblx0XHRcdFx0aWYoY29uZmlybShg5oiQ44KK44G+44GZ44GLP1xuXHQke3BpZWNlLmNoYXJ9OiR7cGllY2UubmFtZX1cblx044CA4oaTXG5cdCR7Y2hhcn06JHtuYW1lfWApKXtcblx0XHRcdFx0XHR0aGlzLmFkZFJlY29yZCh0b1BhbmVsLCB7ZnJvbVBhbmVsLCBlbmQ6XCLmiJBcIn0pO1xuXHRcdFx0XHRcdHBpZWNlLnByb21vdGlvbihjaGFyKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IHdoaWxlKCFmcmVlTW9kZSAmJiBmb3JjZVByb21vKTtcblx0XHR0aGlzLmFkZFJlY29yZCh0b1BhbmVsLCB7ZnJvbVBhbmVsLCBlbmQ6XCLkuI3miJBcIn0pO1xuXHR9XG5cblx0LyoqIOmnkuOCkuenu+WLlVxuXHQgKiBAcGFyYW0ge1BhbmVsfSBmcm9tUGFuZWwgLSDnp7vli5XlhYPjga7jg57jgrnnm65cblx0ICogQHBhcmFtIHtQYW5lbH0gdG9QYW5lbCAtIOmBuOaKnuS4reOBruODnuOCueebrlxuXHQgKi9cblx0bW92ZVBpZWNlKGZyb21QYW5lbCwgdG9QYW5lbCl7XG5cdFx0Y29uc3Qge3N0YW5kLCBmcmVlTW9kZSwgZW5QYXNzYW50fSA9IHRoaXM7XG5cblx0XHRpZighZnJvbVBhbmVsXG5cdFx0XHR8fCB0b1BhbmVsLmhhc0F0dHIoXCJrZWVwT3V0XCIpXG5cdFx0XHR8fCB0b1BhbmVsLnBpZWNlID09PSBmcm9tUGFuZWwucGllY2Vcblx0XHRcdHx8IHRvUGFuZWwucGllY2U/LmRlZyA9PT0gZnJvbVBhbmVsLnBpZWNlLmRlZ1xuXHRcdFx0fHwgIXRoaXMuZnJlZU1vZGUgJiYgIXRvUGFuZWwuaXNUYXJnZXRcblx0XHQpIHJldHVybjtcblxuXHRcdGxldCB7Y2FuUHJvbW8sIGZvcmNlUHJvbW99ID0gdGhpcy5jaGVja0NhblByb21vKGZyb21QYW5lbCk7XG5cblx0XHRzdGFuZC5jYXB0dXJlUGllY2UoXG5cdFx0XHRmcm9tUGFuZWwucGllY2UsXG5cdFx0XHR0b1BhbmVsLnBpZWNlLFxuXHRcdFx0dG9QYW5lbC5oYXNBdHRyKFwiY2FwdHVyZVwiKSxcblx0XHRcdHRvUGFuZWwuaGFzQXR0cihcImNhbnRDYXB0dXJlXCIpXG5cdFx0KTtcblxuXHRcdHRvUGFuZWwucGllY2UgPSBmcm9tUGFuZWwucGllY2U7XG5cdFx0ZnJvbVBhbmVsLnBpZWNlID0gbnVsbDtcblxuXHRcdGNvbnN0IHtwaWVjZX0gPSB0b1BhbmVsO1xuXHRcdHBpZWNlLmNlbnRlciA9IHRvUGFuZWwuY2VudGVyO1xuXHRcdHBpZWNlLm1pZGRsZSA9IHRvUGFuZWwubWlkZGxlO1xuXHRcdHBpZWNlLmlzTW92ZWQgPSB0cnVlO1xuXG5cdFx0Y29uc3QgYWZ0ZXJQcm9tbyA9IHRoaXMuY2hlY2tDYW5Qcm9tbyh0b1BhbmVsKTtcblx0XHRjYW5Qcm9tbyB8fD0gYWZ0ZXJQcm9tby5jYW5Qcm9tbztcblx0XHRmb3JjZVByb21vIHx8PSBhZnRlclByb21vLmZvcmNlUHJvbW87XG5cblx0XHQvLyDjgqLjg7Pjg5Hjg4PjgrXjg7Ncblx0XHRlblBhc3NhbnQuc2V0TW92ZWQodG9QYW5lbCk7XG5cblx0XHQvLyDjg5fjg63jg6Ljg7zjgrfjg6fjg7Plh6bnkIZcblx0XHR0aGlzLiNwcm9tb0RpYWxvZyhmcm9tUGFuZWwsIHRvUGFuZWwsIGNhblByb21vLCBmb3JjZVByb21vKTtcblxuXHRcdC8vIOODl+ODrOOCpOODpOODvOOBruOCsuODvOODoOOCquODvOODkOODvOWIpOWumlxuXHRcdHRoaXMuI2VtaXRHYW1lT3ZlcigpO1xuXHR9XG5cblx0LyoqIOaji+itnOOCkui/veiomFxuXHQgKiBAcGFyYW0ge1BhbmVsfSB0b1BhbmVsIC0g56e75YuV5YWI44Gu44Oe44K555uuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb24gLSDjgqrjg5fjgrfjg6fjg7Ncblx0ICogQHBhcmFtIHtQYW5lbH0gb3B0aW9uLmZyb21QYW5lbCAtIOenu+WLleWFg+OBruODnuOCueebrlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uLmVuZCAtIOOCquODl+OCt+ODp+ODsz3miJB85LiN5oiQfOaJk1xuXHQgKi9cblx0YWRkUmVjb3JkKHRvUGFuZWwsIG9wdGlvbj17fSl7XG5cdFx0Y29uc3Qge2Zyb21QYW5lbCwgZW5kPVwiXCJ9ID0gb3B0aW9uO1xuXHRcdGNvbnN0IHtwaWVjZX0gPSB0b1BhbmVsO1xuXG5cdFx0dGhpcy5yZWNvcmQucHVzaCh7XG5cdFx0XHR0bzoge1xuXHRcdFx0XHRwWDogdG9QYW5lbC5wWCxcblx0XHRcdFx0cFk6IHRvUGFuZWwucFksXG5cdFx0XHR9LFxuXHRcdFx0ZnJvbToge1xuXHRcdFx0XHRwWDogZnJvbVBhbmVsPy5wWCxcblx0XHRcdFx0cFk6IGZyb21QYW5lbD8ucFlcblx0XHRcdH0sXG5cdFx0XHRkZWc6IHBpZWNlLmRlZyxcblx0XHRcdHBpZWNlQ2hhcjogcGllY2UuY2hhcixcblx0XHRcdGVuZFxuXHRcdH0pO1xuXHR9XG5cblx0LyoqIOaji+itnOOCkuODhuOCreOCueODiOOBp+WPluW+l1xuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0Z2V0VGV4dFJlY29yZCgpe1xuXHRcdGNvbnN0IGdldFBYID0gKHtwWH0pPT4gcFg9PW51bGw/IFwiKlwiOiAodGhpcy54TGVuLXBYKS50b1N0cmluZygzNik7XG5cdFx0Y29uc3QgZ2V0UFkgPSAoe3BZfSk9PiBwWT09bnVsbD8gXCIqXCI6IChwWSsxKS50b1N0cmluZygzNik7XG5cdFx0cmV0dXJuIHRoaXMucmVjb3JkLm1hcChcblx0XHRcdCh7dG8sIGZyb20sIGRlZywgcGllY2VDaGFyLCBlbmR9KT0+YCR7XG5cdFx0XHRcdFBpZWNlLmRlZ0NoYXJzW2RlZ119JHtcblx0XHRcdFx0Z2V0UFgodG8pfSR7XG5cdFx0XHRcdGdldFBZKHRvKX0ke1xuXHRcdFx0XHRwaWVjZUNoYXJ9JHtcblx0XHRcdFx0ZW5kfSAoJHtcblx0XHRcdFx0Z2V0UFgoZnJvbSl9JHtcblx0XHRcdFx0Z2V0UFkoZnJvbSl9KWBcblx0XHQpLmpvaW4oXCJcXG5cIik7XG5cdH1cblxuXHQvKiog55uk44KS5o+P5YaZICovXG5cdGRyYXcoKXtcblx0XHRjb25zdCB7Y3R4LCBjYW52YXMsIGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCwgcGFuZWxXaWR0aCwgcGFuZWxIZWlnaHR9ID0gdGhpcztcblxuXHRcdC8vIOaPj+WGmeOCkuWIneacn+WMllxuXHRcdGN0eC5yZXN0b3JlKCk7XG5cdFx0Y3R4LnNhdmUoKTtcblx0XHRjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cdFx0Y3R4LmZpbGxTdHlsZSA9IHRoaXMuY2FudmFzQmFja2dyb3VuZENvbG9yO1xuXHRcdGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG5cdFx0Ly8g5aSW5p6g44KS5o+P5YaZXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IHRoaXMuYmFja2dyb3VuZENvbG9yO1xuXHRcdGN0eC5saW5lV2lkdGggPSB0aGlzLmJvcmRlcldpZHRoO1xuXHRcdGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuYm9yZGVyQ29sb3I7XG5cblx0XHRjdHguc2F2ZSgpO1xuXHRcdGN0eC50cmFuc2xhdGUobGVmdCwgdG9wKTtcblx0XHRjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5cdFx0Y3R4LnN0cm9rZVJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5cdFx0Y3R4LnRyYW5zbGF0ZShwYW5lbFdpZHRoLzIsIHBhbmVsSGVpZ2h0LzIpO1xuXHRcdGN0eC5zdHJva2VSZWN0KDAsIDAsIHdpZHRoLXBhbmVsV2lkdGgsIGhlaWdodC1wYW5lbEhlaWdodCk7XG5cdFx0Y3R4LnJlc3RvcmUoKTtcblx0XHR0aGlzLnN0YW5kLmRyYXcoKTtcblxuXHRcdC8vIOODnuOCueebruOCkuaPj+WGmVxuXHRcdHRoaXMuZmllbGQuZm9yRWFjaChyb3c9Pntcblx0XHRcdHJvdy5mb3JFYWNoKHBhbmVsPT57XG5cdFx0XHRcdHBhbmVsLmRyYXcoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdGlmKHRoaXMub25EcmF3ZWQpIHRoaXMub25EcmF3ZWQodGhpcyk7XG5cdH1cblxuXHQvKiog6aeS6YWN572u44KS44OG44Kt44K544OI44Gn5Y+W5b6XXG5cdCAqIEBwYXJhbSB7XCJkZWZhdWx0XCJ8XCJjb21wYWN0XCJ8XCJib2RcIn0gaXNDb21wYWN0IC0g44OG44Kt44K544OI5b2i5byPXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRnZXRUZXh0KG1vZGU9XCJkZWZhdWx0XCIpe1xuXHRcdHJldHVybiBtb2RlID09PSBcImJvZFwiP1xuXHRcdFx0Qm9kLmdldFRleHQodGhpcyk6XG5cdFx0XHR0aGlzLnRvU3RyaW5nKG1vZGUgPT09IFwiY29tcGFjdFwiKTtcblx0fVxuXG5cdC8qKiDpp5LphY3nva7jgpLjg4bjgq3jgrnjg4jjgaflj5blvpdcblx0ICogQHBhcmFtIHtib29sZWFufSBpc0NvbXBhY3QgLSDjgrPjg7Pjg5Hjgq/jg4jooajnpLpcblx0ICovXG5cdHRvU3RyaW5nKGlzQ29tcGFjdD1mYWxzZSl7XG5cdFx0Y29uc3Qge3hMZW59ID0gdGhpcztcblxuXHRcdGxldCBoZWFkZXIgPSBcIlwiO1xuXHRcdGxldCBmb290ZXIgPSBcIlwiO1xuXHRcdGxldCBwYW5lbE91dGVyID0gXCJcIjtcblx0XHRsZXQgcGFuZWxTZXAgPSBcIlwiO1xuXHRcdGxldCByb3dTZXAgPSBcIlxcblwiO1xuXG5cdFx0aWYoIWlzQ29tcGFjdCl7XG5cdFx0XHRoZWFkZXIgPSBg4pSPJHtBcnJheSh4TGVuKS5maWxsKFwi4pSB4pSBXCIpLmpvaW4oXCLilK9cIil94pSTXFxuYDtcblx0XHRcdGZvb3RlciA9IGBcXG7ilJcke0FycmF5KHhMZW4pLmZpbGwoXCLilIHilIFcIikuam9pbihcIuKUt1wiKX3ilJtgO1xuXHRcdFx0cGFuZWxPdXRlciA9IFwi4pSDXCI7XG5cdFx0XHRwYW5lbFNlcCA9IFwi4pSCXCI7XG5cdFx0XHRyb3dTZXAgPSBgXFxu4pSgJHtBcnJheSh4TGVuKS5maWxsKFwi4pSA4pSAXCIpLmpvaW4oXCLilLxcIil94pSoXFxuYDtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0aGVhZGVyK1xuXHRcdFx0dGhpcy5maWVsZC5tYXAocm93PT5cblx0XHRcdFx0cGFuZWxPdXRlcitcblx0XHRcdFx0cm93Lm1hcChwYW5lbD0+XG5cdFx0XHRcdFx0XCJcIisocGFuZWwucGllY2UgPz8gcGFuZWwudG9TdHJpbmcoaXNDb21wYWN0KSlcblx0XHRcdFx0KS5qb2luKHBhbmVsU2VwKStcblx0XHRcdFx0cGFuZWxPdXRlclxuXHRcdFx0KS5qb2luKHJvd1NlcCkrXG5cdFx0XHRmb290ZXIrXG5cdFx0XHR0aGlzLnN0YW5kLnRvU3RyaW5nKGlzQ29tcGFjdClcblx0XHQpO1xuXHR9XG5cblx0LyoqIOeUu+WDj+OCkuWPluW+l1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgLSDjg5XjgqHjgqTjg6vlkI1cblx0ICogQHBhcmFtIHtzdHJpbmd9IGV4dCAtIOaLoeW8teWtkFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cblx0ICovXG5cdGFzeW5jIGRvd25sb2FkSW1hZ2UoZmlsZU5hbWUsIGV4dCl7XG5cdFx0YXdhaXQgZG93bmxvYWRJbWFnZSh0aGlzLmNhbnZhcywgZmlsZU5hbWUsIGV4dCk7XG5cdH1cbn1cbiJdLCJuYW1lcyI6WyJjYW52YXNGb250IiwiZ2FtZVNvZnQiLCJnYW1lcyIsImJvYXJkcyIsInBhbmVscyIsInBpZWNlcyIsInBpZWNlUmFuZ2UiLCJwaWVjZUNvc3QiLCJiYXNlIiwiaW1wb3J0SnNvbiIsIm5hbWUiLCJ4aHIiLCJqc29uIiwiZ2V0Q2hhcnMiLCJkaXNwbGF5VGV4dCIsImRpc3BsYXkiLCJnb29nbGVVcmwiLCJjaGFycyIsInVuaXF1ZSIsIm8iLCJmb250TmFtZSIsImZvbnRXZWlnaHQiLCJmb250TmFtZVBsdXMiLCJmb250VXJsIiwicmVzIiwibWF0Y2hVcmxzIiwidXJsIiwiZm9udEZhY2UiLCJfIiwibG9hZEltYWdlIiwic3JjIiwicmVzb2x2ZSIsImltYWdlIiwiaW1nU3JjcyIsImltZ1NyYyIsImNhbnZhc0ltYWdlIiwiZ2V0TWltZSIsImV4dCIsImRvd25sb2FkSW1hZ2UiLCJjYW52YXMiLCJmaWxlTmFtZSIsInVybFR5cGUiLCJtaW1lIiwiYSIsIlBhbmVsIiwiI2lzU2VsZWN0ZWQiLCIjdGFyZ2V0UmFuZ2VzIiwiY3R4IiwiY2hhciIsImNlbnRlciIsIm1pZGRsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyV2lkdGgiLCJwWCIsInBZIiwidmFsdWUiLCJyYW5nZU5hbWUiLCJhdHRyTmFtZSIsIngiLCJ5Iiwic2VsZWN0Q29sb3IiLCJ0YXJnZXRDb2xvciIsImxlZnQiLCJ0b3AiLCJ0ZXh0Um90YXRlIiwicmFkIiwiZm9udFNpemUiLCJjb2xvciIsImlzQ29tcGFjdCIsIlBpZWNlIiwib3B0aW9uIiwiZXhQaWVjZXMiLCJwaWVjZSIsInByb21vS2V5cyIsImtleSIsInByb21vIiwiaSIsImV4UGllY2VzT2JqIiwiYWxpYXNLZXkiLCJhbGlhcyIsInRleHQiLCJkZWdDaGFyIiwicGllY2VDaGFyIiwiZGVnIiwiX18iLCJiIiwiem9vbSIsImRpc3BsYXlQdG4iLCJzaXplIiwidXNlUmFua1NpemUiLCJpc0RyYXdTaGFkb3ciLCJpc01vdmVkIiwicm5nIiwicm93IiwiZSIsInJhbmdlIiwidHJhbnNwb3NlIiwiYyIsInIiLCJpbWdXaWR0aCIsImltZ0hlaWdodCIsImdhbWUiLCJmb250Q29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsInYiLCJyYW5nZU9wdGlvbnMiLCJjZW50ZXJDaGFycyIsInBvaW50Q2hhcnMiLCJsaW5lckNoYXJzIiwiZ2V0T3JpZ2luIiwib0xpc3QiLCJvd25YIiwib3duWSIsInJZIiwiclgiLCJyQ2hhciIsImlzT3duIiwiY2hlY2tUYXJnZXQiLCJib2FyZCIsImZpZWxkIiwieUxlbiIsImVuUGFzc2FudCIsImluRmllbGQiLCJpc1ZzUG8iLCJwYW5lbCIsImlzQXR0YWNrRnJvbVBhbyIsImNhbk1vdmUiLCJpc0F0dGFjayIsImNoZWNrUml2YWxEZWciLCJleGlzdHNDaGlsZCIsImNoaWxkIiwib1giLCJvWSIsInNldFRhcmdldCIsIm1vdmVQb2ludCIsInBhcmVudCIsIm1vdmVMaW5lciIsIm9mZnNldFgiLCJvZmZzZXRZIiwiam1wcyIsIm1vdmVzIiwiaXNNb3ZlSW5mIiwiam1wQ250IiwibW92ZUNudCIsImluY1giLCJpbmNZIiwiX3giLCJfeSIsImlzSnVtcGVkIiwicmFuZ2VNYXAiLCJyYW5nZU9wdGlvbiIsIm9yaWdpbiIsInVJQ29udHJvbCIsImlzQ2xpY2siLCJsYXN0WFkiLCJzZWxlY3RQYW5lbCIsInNlbGVjdFN0YW5kIiwiZmllbGRQcm9jIiwiZm5QYW5lbCIsImZuQWZ0ZXIiLCJ2aWV3U3R5bGUiLCJyZWN0IiwiZHJhZ1N0YXJ0Iiwic3RvY2siLCJkcmFnTW92ZSIsImRyYWdFbmQiLCJCb2QiLCIjZGVnMlBpZWNlQ2hhcnMiLCIjZGVnMlBpZWNlUmVnZXhlcyIsIiNwaWVjZUNoYXIyRGVncyIsIiNkZWcyU3RhbmRUaXRsZXMiLCIjc3RhbmRUaXRsZTJEZWdzIiwiI2thbkkiLCIja2FuWCIsIiNudW0yS2FuIiwibnVtIiwidmlld09uZSIsIiNrYW4yTnVtIiwia2FuIiwiZW1wdHlPbmUiLCIjbnVtMlplbiIsInplbiIsIiNwYW5lbFRleHQiLCIjZ2V0UGllY2VUZXh0IiwiI2dldFN0YW5kVGV4dCIsInN0YW5kIiwiY291bnRlciIsImNudCIsImJvYXJkTGluZXMiLCJzdGFuZExpbmVzIiwibGluZSIsInRpdGxlIiwiYm9hcmRTdHIiLCJib2RDaGFyIiwic3RhbmRTdHIiLCJwYXJhbVN0ciIsInBhcmFtIiwieExlbiIsInBsYXllcnMiLCJoZWFkZXIiLCJmb290ZXIiLCJwYW5lbE91dGVyIiwicGFuZWxTZXAiLCJyb3dTZXAiLCJzdGFuZEhlYWRlciIsInN0YW5kRm9vdGVyIiwiU3RhbmQiLCIjZGVnT3JkZXIiLCJyaWdodCIsImJvdHRvbSIsInBhbmVsV2lkdGgiLCJwYW5lbEhlaWdodCIsInRvUGFuZWwiLCJ3aW5uZXJQaWVjZSIsImxvc2VyUGllY2UiLCJmb3JjZUNhcHR1cmUiLCJmb3JjZUNhbnRDYXB0dXJlIiwicGl0Y2hXaWR0aCIsInBpdGNoSGVpZ2h0IiwicGxheWVyIiwiaGVhZCIsImRlZ3MiLCJnZXRJbml0IiwiRW5QYXNzYW50IiwiZXAiLCJCb2FyZCIsInBsYXlCb2FyZCIsInBsYXlQaWVjZXMiLCJvbkRyYXdlZCIsImdhbWVOYW1lIiwicGllY2VTZXQiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImNhbnZhc0ZpdCIsImJvYXJkTGVmdCIsImJvYXJkVG9wIiwicGllY2VTaXplIiwidXNlU3RhbmQiLCJhdXRvRHJhd2luZyIsIm9uR2FtZU92ZXIiLCJmcmVlTW9kZSIsImNhbnZhc0ZvbnRBc3luYyIsImNhbnZhc0ltYWdlQXN5bmMiLCJzdHlsZSIsIiNkZWdOb3JtYWwiLCJwbGF5ZWFJZE9yRGVnIiwicGxheWVySWQiLCJwb3MiLCJzdGFuZFRpdGxlIiwidGV4dHMiLCJzdGFuZFRleHRzIiwib2Zmc2V0RGVnIiwicHJvbW9MaW5lIiwiZm9yY2VQcm9tb0xpbmUiLCJkIiwiI2VtaXRHYW1lT3ZlciIsImdhbWVBbGl2ZSIsIiNwcm9tb0RpYWxvZyIsImZyb21QYW5lbCIsImNhblByb21vIiwiZm9yY2VQcm9tbyIsImFmdGVyUHJvbW8iLCJlbmQiLCJnZXRQWCIsImdldFBZIiwidG8iLCJmcm9tIiwibW9kZSJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBZUEsSUFBQTtBQUFBLEVBQ2QsT0FBUztBQUFBLElBQ1IsQ0FBQyxpQkFBaUIsR0FBRztBQUFBLElBQ3JCLENBQUMsY0FBYyxHQUFHO0FBQUEsSUFDbEIsQ0FBQyx1QkFBdUIsR0FBRztBQUFBLElBQzNCLENBQUMscUJBQXFCLEdBQUc7QUFBQSxJQUN6QixDQUFDLGNBQWMsR0FBRztBQUFBLElBQ2xCLENBQUMsaUJBQWlCLEdBQUc7QUFBQSxFQUNyQjtBQUNGLEdDVGVDLEtBQUE7QUFBQSxFQUNkLE9BQVM7QUFBQSxJQUNSLE1BQVE7QUFBQSxJQUNSLFNBQVc7QUFBQSxJQUNYLEtBQU87QUFBQSxJQUNQLE1BQVE7QUFBQSxJQUNSLFdBQWE7QUFBQSxJQUNiLFVBQVk7QUFBQSxJQUNaLFlBQWM7QUFBQSxNQUNiLEVBQUMsVUFBWSxNQUFNLFVBQVksVUFBUztBQUFBLE1BQ3hDLEVBQUMsVUFBWSxNQUFNLFVBQVksS0FBSTtBQUFBLElBQ25DO0FBQUEsRUFDRDtBQUFBLEVBQ0QsT0FBUztBQUFBLElBQ1IsTUFBUTtBQUFBLElBQ1IsU0FBVztBQUFBLElBQ1gsS0FBTztBQUFBLElBQ1AsTUFBUTtBQUFBLElBQ1IsV0FBYTtBQUFBLElBQ2IsVUFBWTtBQUFBLElBQ1osWUFBYztBQUFBLE1BQ2IsRUFBQyxVQUFZLE9BQU8sVUFBWSxVQUFTO0FBQUEsTUFDekMsRUFBQyxVQUFZLE9BQU8sVUFBWSxLQUFJO0FBQUEsSUFDcEM7QUFBQSxFQUNEO0FBQUEsRUFDRCxRQUFVO0FBQUEsSUFDVCxNQUFRO0FBQUEsSUFDUixTQUFXO0FBQUEsSUFDWCxLQUFPO0FBQUEsSUFDUCxNQUFRO0FBQUEsSUFDUixXQUFhO0FBQUEsSUFDYixVQUFZO0FBQUEsSUFDWixZQUFjO0FBQUEsTUFDYixFQUFDLFVBQVksU0FBUyxVQUFZLFVBQVM7QUFBQSxNQUMzQyxFQUFDLFVBQVksU0FBUyxVQUFZLEtBQUk7QUFBQSxJQUN0QztBQUFBLEVBQ0Q7QUFBQSxFQUNELFFBQVU7QUFBQSxJQUNULE1BQVE7QUFBQSxJQUNSLFNBQVc7QUFBQSxJQUNYLEtBQU87QUFBQSxJQUNQLE1BQVE7QUFBQSxJQUNSLFdBQWE7QUFBQSxJQUNiLFVBQVk7QUFBQSxJQUNaLFlBQWM7QUFBQSxNQUNiLEVBQUMsVUFBWSxRQUFRLFVBQVksVUFBUztBQUFBLE1BQzFDLEVBQUMsVUFBWSxRQUFRLFVBQVksS0FBSTtBQUFBLElBQ3JDO0FBQUEsRUFDRDtBQUFBLEVBQ0QsUUFBVTtBQUFBLElBQ1QsTUFBUTtBQUFBLElBQ1IsU0FBVztBQUFBLElBQ1gsS0FBTztBQUFBLElBQ1AsTUFBUTtBQUFBLElBQ1IsV0FBYTtBQUFBLElBQ2IsVUFBWTtBQUFBLElBQ1osWUFBYztBQUFBLE1BQ2IsRUFBQyxVQUFZLFVBQVUsVUFBWSxVQUFTO0FBQUEsTUFDNUMsRUFBQyxVQUFZLFVBQVUsVUFBWSxLQUFJO0FBQUEsSUFDdkM7QUFBQSxFQUNEO0FBQUEsRUFDRCxZQUFjO0FBQUEsSUFDYixNQUFRO0FBQUEsSUFDUixTQUFXO0FBQUEsSUFDWCxLQUFPO0FBQUEsSUFDUCxNQUFRO0FBQUEsSUFDUixXQUFhO0FBQUEsSUFDYixVQUFZO0FBQUEsSUFDWixZQUFjO0FBQUEsTUFDYixFQUFDLFVBQVksVUFBVSxVQUFZLFVBQVM7QUFBQSxNQUM1QyxFQUFDLFVBQVksVUFBVSxVQUFZLEtBQUk7QUFBQSxJQUN2QztBQUFBLEVBQ0Q7QUFBQSxFQUNELGNBQWdCO0FBQUEsSUFDZixNQUFRO0FBQUEsSUFDUixTQUFXO0FBQUEsSUFDWCxLQUFPO0FBQUEsSUFDUCxNQUFRO0FBQUEsSUFDUixXQUFhO0FBQUEsSUFDYixVQUFZO0FBQUEsSUFDWixZQUFjO0FBQUEsTUFDYixFQUFDLFVBQVksWUFBWSxVQUFZLFVBQVM7QUFBQSxNQUM5QyxFQUFDLFVBQVksWUFBWSxVQUFZLFVBQVM7QUFBQSxJQUM5QztBQUFBLEVBQ0Q7QUFBQSxFQUNELFdBQWE7QUFBQSxJQUNaLE1BQVE7QUFBQSxJQUNSLFNBQVc7QUFBQSxJQUNYLEtBQU87QUFBQSxJQUNQLE1BQVE7QUFBQSxJQUNSLFdBQWE7QUFBQSxJQUNiLFVBQVk7QUFBQSxJQUNaLFlBQWM7QUFBQSxNQUNiLEVBQUMsVUFBWSxNQUFNLFVBQVksTUFBSztBQUFBLE1BQ3BDLEVBQUMsVUFBWSxNQUFNLFVBQVksTUFBSztBQUFBLElBQ3BDO0FBQUEsRUFDRDtBQUFBLEVBQ0QsVUFBWTtBQUFBLElBQ1gsTUFBUTtBQUFBLElBQ1IsU0FBVztBQUFBLElBQ1gsS0FBTztBQUFBLElBQ1AsTUFBUTtBQUFBLElBQ1IsV0FBYTtBQUFBLElBQ2IsVUFBWTtBQUFBLElBQ1osWUFBYztBQUFBLE1BQ2IsRUFBQyxVQUFZLE1BQU0sVUFBWSxNQUFLO0FBQUEsTUFDcEMsRUFBQyxVQUFZLE1BQU0sVUFBWSxRQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNEO0FBQUEsRUFDRCxjQUFnQjtBQUFBLElBQ2YsTUFBUTtBQUFBLElBQ1IsU0FBVztBQUFBLElBQ1gsS0FBTztBQUFBLElBQ1AsTUFBUTtBQUFBLElBQ1IsV0FBYTtBQUFBLElBQ2IsVUFBWTtBQUFBLElBQ1osWUFBYztBQUFBLE1BQ2IsRUFBQyxVQUFZLE9BQU8sVUFBWSxlQUFjO0FBQUEsTUFDOUMsRUFBQyxVQUFZLE9BQU8sVUFBWSxpQkFBZ0I7QUFBQSxJQUNoRDtBQUFBLEVBQ0Q7QUFBQSxFQUNELHNCQUF3QjtBQUFBLElBQ3ZCLE1BQVE7QUFBQSxJQUNSLFNBQVc7QUFBQSxJQUNYLEtBQU87QUFBQSxJQUNQLE1BQVE7QUFBQSxJQUNSLFdBQWE7QUFBQSxJQUNiLFVBQVk7QUFBQSxJQUNaLFlBQWM7QUFBQSxNQUNiLEVBQUMsVUFBWSxPQUFPLFVBQVksZ0JBQWU7QUFBQSxNQUMvQyxFQUFDLFVBQVksT0FBTyxVQUFZLGtCQUFpQjtBQUFBLElBQ2pEO0FBQUEsRUFDRDtBQUFBLEVBQ0QsU0FBVztBQUFBLElBQ1YsTUFBUTtBQUFBLElBQ1IsU0FBVztBQUFBLElBQ1gsS0FBTztBQUFBLElBQ1AsTUFBUTtBQUFBLElBQ1IsV0FBYTtBQUFBLElBQ2IsVUFBWTtBQUFBLElBQ1osWUFBYztBQUFBLE1BQ2IsRUFBQyxVQUFZLE1BQU0sVUFBWSxVQUFTO0FBQUEsTUFDeEMsRUFBQyxVQUFZLE1BQU0sVUFBWSxLQUFJO0FBQUEsSUFDbkM7QUFBQSxFQUNEO0FBQUEsRUFDRCxjQUFnQjtBQUFBLElBQ2YsTUFBUTtBQUFBLElBQ1IsU0FBVztBQUFBLElBQ1gsS0FBTztBQUFBLElBQ1AsTUFBUTtBQUFBLElBQ1IsV0FBYTtBQUFBLElBQ2IsVUFBWTtBQUFBLElBQ1osWUFBYztBQUFBLE1BQ2IsRUFBQyxVQUFZLE1BQU0sVUFBWSxNQUFLO0FBQUEsTUFDcEMsRUFBQyxVQUFZLE1BQU0sVUFBWSxRQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNEO0FBQUEsRUFDRCxVQUFZO0FBQUEsSUFDWCxNQUFRO0FBQUEsSUFDUixTQUFXO0FBQUEsSUFDWCxLQUFPO0FBQUEsSUFDUCxNQUFRO0FBQUEsSUFDUixXQUFhO0FBQUEsSUFDYixVQUFZO0FBQUEsSUFDWixZQUFjO0FBQUEsTUFDYixFQUFDLFVBQVksTUFBTSxVQUFZLE1BQUs7QUFBQSxNQUNwQyxFQUFDLFVBQVksTUFBTSxVQUFZLFFBQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Q7QUFBQSxFQUNELGVBQWlCO0FBQUEsSUFDaEIsTUFBUTtBQUFBLElBQ1IsU0FBVztBQUFBLElBQ1gsS0FBTztBQUFBLElBQ1AsTUFBUTtBQUFBLElBQ1IsV0FBYTtBQUFBLElBQ2IsVUFBWTtBQUFBLElBQ1osWUFBYztBQUFBLE1BQ2IsRUFBQyxVQUFZLE1BQU0sVUFBWSxPQUFNO0FBQUEsTUFDckMsRUFBQyxVQUFZLE1BQU0sVUFBWSxPQUFNO0FBQUEsSUFDckM7QUFBQSxFQUNEO0FBQUEsRUFDRCxlQUFpQjtBQUFBLElBQ2hCLE1BQVE7QUFBQSxJQUNSLFNBQVc7QUFBQSxJQUNYLEtBQU87QUFBQSxJQUNQLE1BQVE7QUFBQSxJQUNSLFdBQWE7QUFBQSxJQUNiLFVBQVk7QUFBQSxJQUNaLFlBQWM7QUFBQSxNQUNiLEVBQUMsVUFBWSxNQUFNLFVBQVksT0FBTTtBQUFBLE1BQ3JDLEVBQUMsVUFBWSxNQUFNLFVBQVksT0FBTTtBQUFBLElBQ3JDO0FBQUEsRUFDRDtBQUFBLEVBQ0QsZUFBaUI7QUFBQSxJQUNoQixNQUFRO0FBQUEsSUFDUixTQUFXO0FBQUEsSUFDWCxLQUFPO0FBQUEsSUFDUCxNQUFRO0FBQUEsSUFDUixXQUFhO0FBQUEsSUFDYixVQUFZO0FBQUEsSUFDWixZQUFjO0FBQUEsTUFDYixFQUFDLFVBQVksTUFBTSxVQUFZLE9BQU07QUFBQSxNQUNyQyxFQUFDLFVBQVksTUFBTSxVQUFZLE9BQU07QUFBQSxJQUNyQztBQUFBLEVBQ0Q7QUFBQSxFQUNELGNBQWdCO0FBQUEsSUFDZixNQUFRO0FBQUEsSUFDUixTQUFXO0FBQUEsSUFDWCxLQUFPO0FBQUEsSUFDUCxNQUFRO0FBQUEsSUFDUixXQUFhO0FBQUEsSUFDYixVQUFZO0FBQUEsSUFDWixZQUFjO0FBQUEsTUFDYixFQUFDLFVBQVksTUFBTSxVQUFZLFlBQVc7QUFBQSxNQUMxQyxFQUFDLFVBQVksTUFBTSxVQUFZLGNBQWE7QUFBQSxJQUM1QztBQUFBLEVBQ0Q7QUFBQSxFQUNELGVBQWlCO0FBQUEsSUFDaEIsTUFBUTtBQUFBLElBQ1IsU0FBVztBQUFBLElBQ1gsS0FBTztBQUFBLElBQ1AsTUFBUTtBQUFBLElBQ1IsV0FBYTtBQUFBLElBQ2IsVUFBWTtBQUFBLElBQ1osWUFBYztBQUFBLE1BQ2IsRUFBQyxVQUFZLE1BQU0sVUFBWSxZQUFXO0FBQUEsTUFDMUMsRUFBQyxVQUFZLE1BQU0sVUFBWSxjQUFhO0FBQUEsSUFDNUM7QUFBQSxFQUNEO0FBQUEsRUFDRCxpQkFBbUI7QUFBQSxJQUNsQixNQUFRO0FBQUEsSUFDUixTQUFXO0FBQUEsSUFDWCxLQUFPO0FBQUEsSUFDUCxNQUFRO0FBQUEsSUFDUixXQUFhO0FBQUEsSUFDYixVQUFZO0FBQUEsSUFDWixZQUFjO0FBQUEsTUFDYixFQUFDLFVBQVksTUFBTSxVQUFZLFlBQVc7QUFBQSxNQUMxQyxFQUFDLFVBQVksTUFBTSxVQUFZLGNBQWE7QUFBQSxJQUM1QztBQUFBLEVBQ0Q7QUFBQSxFQUNELGtCQUFvQjtBQUFBLElBQ25CLE1BQVE7QUFBQSxJQUNSLFNBQVc7QUFBQSxJQUNYLEtBQU87QUFBQSxJQUNQLE1BQVE7QUFBQSxJQUNSLFdBQWE7QUFBQSxJQUNiLFVBQVk7QUFBQSxJQUNaLFlBQWM7QUFBQSxNQUNiLEVBQUMsVUFBWSxNQUFNLFVBQVksWUFBVztBQUFBLE1BQzFDLEVBQUMsVUFBWSxNQUFNLFVBQVksY0FBYTtBQUFBLElBQzVDO0FBQUEsRUFDRDtBQUFBLEVBQ0QsaUJBQW1CO0FBQUEsSUFDbEIsTUFBUTtBQUFBLElBQ1IsU0FBVztBQUFBLElBQ1gsS0FBTztBQUFBLElBQ1AsTUFBUTtBQUFBLElBQ1IsV0FBYTtBQUFBLElBQ2IsVUFBWTtBQUFBLElBQ1osWUFBYztBQUFBLE1BQ2IsRUFBQyxVQUFZLE1BQU0sVUFBWSxZQUFXO0FBQUEsTUFDMUMsRUFBQyxVQUFZLE1BQU0sVUFBWSxjQUFhO0FBQUEsSUFDNUM7QUFBQSxFQUNEO0FBQUEsRUFDRCxrQkFBb0I7QUFBQSxJQUNuQixNQUFRO0FBQUEsSUFDUixTQUFXO0FBQUEsSUFDWCxLQUFPO0FBQUEsSUFDUCxNQUFRO0FBQUEsSUFDUixXQUFhO0FBQUEsSUFDYixVQUFZO0FBQUEsSUFDWixZQUFjO0FBQUEsTUFDYixFQUFDLFVBQVksTUFBTSxVQUFZLFlBQVc7QUFBQSxNQUMxQyxFQUFDLFVBQVksTUFBTSxVQUFZLGNBQWE7QUFBQSxJQUM1QztBQUFBLEVBQ0Q7QUFBQSxFQUNELGFBQWU7QUFBQSxJQUNkLE1BQVE7QUFBQSxJQUNSLFNBQVc7QUFBQSxJQUNYLEtBQU87QUFBQSxJQUNQLE1BQVE7QUFBQSxJQUNSLFdBQWE7QUFBQSxJQUNiLFVBQVk7QUFBQSxJQUNaLFlBQWM7QUFBQSxNQUNiLEVBQUMsVUFBWSxNQUFNLFVBQVksV0FBVTtBQUFBLE1BQ3pDLEVBQUMsVUFBWSxNQUFNLFVBQVksYUFBWTtBQUFBLElBQzNDO0FBQUEsRUFDRDtBQUFBLEVBQ0QsY0FBZ0I7QUFBQSxJQUNmLE1BQVE7QUFBQSxJQUNSLFNBQVc7QUFBQSxJQUNYLEtBQU87QUFBQSxJQUNQLE1BQVE7QUFBQSxJQUNSLFdBQWE7QUFBQSxJQUNiLFVBQVk7QUFBQSxJQUNaLFlBQWM7QUFBQSxNQUNiLEVBQUMsVUFBWSxNQUFNLFVBQVksV0FBVTtBQUFBLE1BQ3pDLEVBQUMsVUFBWSxNQUFNLFVBQVksYUFBWTtBQUFBLElBQzNDO0FBQUEsRUFDRDtBQUFBLEVBQ0QsaUJBQW1CO0FBQUEsSUFDbEIsTUFBUTtBQUFBLElBQ1IsU0FBVztBQUFBLElBQ1gsS0FBTztBQUFBLElBQ1AsTUFBUTtBQUFBLElBQ1IsV0FBYTtBQUFBLElBQ2IsVUFBWTtBQUFBLElBQ1osWUFBYztBQUFBLE1BQ2IsRUFBQyxVQUFZLE1BQU0sVUFBWSxZQUFXO0FBQUEsTUFDMUMsRUFBQyxVQUFZLE1BQU0sVUFBWSxjQUFhO0FBQUEsSUFDNUM7QUFBQSxFQUNEO0FBQUEsRUFDRCxrQkFBb0I7QUFBQSxJQUNuQixNQUFRO0FBQUEsSUFDUixTQUFXO0FBQUEsSUFDWCxLQUFPO0FBQUEsSUFDUCxNQUFRO0FBQUEsSUFDUixXQUFhO0FBQUEsSUFDYixVQUFZO0FBQUEsSUFDWixZQUFjO0FBQUEsTUFDYixFQUFDLFVBQVksTUFBTSxVQUFZLFlBQVc7QUFBQSxNQUMxQyxFQUFDLFVBQVksTUFBTSxVQUFZLGNBQWE7QUFBQSxJQUM1QztBQUFBLEVBQ0Q7QUFBQSxFQUNELGdCQUFrQjtBQUFBLElBQ2pCLE1BQVE7QUFBQSxJQUNSLFNBQVc7QUFBQSxJQUNYLEtBQU87QUFBQSxJQUNQLE1BQVE7QUFBQSxJQUNSLFdBQWE7QUFBQSxJQUNiLFVBQVk7QUFBQSxJQUNaLFlBQWM7QUFBQSxNQUNiLEVBQUMsVUFBWSxNQUFNLFVBQVksWUFBVztBQUFBLE1BQzFDLEVBQUMsVUFBWSxNQUFNLFVBQVksY0FBYTtBQUFBLElBQzVDO0FBQUEsRUFDRDtBQUFBLEVBQ0QsaUJBQW1CO0FBQUEsSUFDbEIsTUFBUTtBQUFBLElBQ1IsU0FBVztBQUFBLElBQ1gsS0FBTztBQUFBLElBQ1AsTUFBUTtBQUFBLElBQ1IsV0FBYTtBQUFBLElBQ2IsVUFBWTtBQUFBLElBQ1osWUFBYztBQUFBLE1BQ2IsRUFBQyxVQUFZLE1BQU0sVUFBWSxZQUFXO0FBQUEsTUFDMUMsRUFBQyxVQUFZLE1BQU0sVUFBWSxjQUFhO0FBQUEsSUFDNUM7QUFBQSxFQUNEO0FBQUEsRUFDRCxnQkFBa0I7QUFBQSxJQUNqQixNQUFRO0FBQUEsSUFDUixTQUFXO0FBQUEsSUFDWCxLQUFPO0FBQUEsSUFDUCxNQUFRO0FBQUEsSUFDUixXQUFhO0FBQUEsSUFDYixVQUFZO0FBQUEsSUFDWixZQUFjO0FBQUEsTUFDYixFQUFDLFVBQVksTUFBTSxVQUFZLGlCQUFnQjtBQUFBLE1BQy9DLEVBQUMsVUFBWSxNQUFNLFVBQVksbUJBQWtCO0FBQUEsSUFDakQ7QUFBQSxFQUNEO0FBQUEsRUFDRCxpQkFBbUI7QUFBQSxJQUNsQixNQUFRO0FBQUEsSUFDUixTQUFXO0FBQUEsSUFDWCxLQUFPO0FBQUEsSUFDUCxNQUFRO0FBQUEsSUFDUixXQUFhO0FBQUEsSUFDYixVQUFZO0FBQUEsSUFDWixZQUFjO0FBQUEsTUFDYixFQUFDLFVBQVksTUFBTSxVQUFZLGlCQUFnQjtBQUFBLE1BQy9DLEVBQUMsVUFBWSxNQUFNLFVBQVksbUJBQWtCO0FBQUEsSUFDakQ7QUFBQSxFQUNEO0FBQUEsRUFDRCxjQUFnQjtBQUFBLElBQ2YsTUFBUTtBQUFBLElBQ1IsU0FBVztBQUFBLElBQ1gsS0FBTztBQUFBLElBQ1AsTUFBUTtBQUFBLElBQ1IsV0FBYTtBQUFBLElBQ2IsVUFBWTtBQUFBLElBQ1osWUFBYztBQUFBLE1BQ2IsRUFBQyxVQUFZLE1BQU0sVUFBWSxPQUFNO0FBQUEsTUFDckMsRUFBQyxVQUFZLE1BQU0sVUFBWSxTQUFRO0FBQUEsSUFDdkM7QUFBQSxFQUNEO0FBQUEsRUFDRCxZQUFjO0FBQUEsSUFDYixNQUFRO0FBQUEsSUFDUixTQUFXO0FBQUEsSUFDWCxLQUFPO0FBQUEsSUFDUCxNQUFRO0FBQUEsSUFDUixXQUFhO0FBQUEsSUFDYixVQUFZO0FBQUEsSUFDWixZQUFjO0FBQUEsTUFDYixFQUFDLFVBQVksT0FBTyxVQUFZLFVBQVM7QUFBQSxNQUN6QyxFQUFDLFVBQVksT0FBTyxVQUFZLEtBQUk7QUFBQSxJQUNwQztBQUFBLEVBQ0Q7QUFBQSxFQUNELGdCQUFrQjtBQUFBLElBQ2pCLE1BQVE7QUFBQSxJQUNSLFNBQVc7QUFBQSxJQUNYLEtBQU87QUFBQSxJQUNQLE1BQVE7QUFBQSxJQUNSLFdBQWE7QUFBQSxJQUNiLFVBQVk7QUFBQSxJQUNaLFlBQWM7QUFBQSxNQUNiLEVBQUMsVUFBWSxPQUFPLFVBQVksVUFBUztBQUFBLE1BQ3pDLEVBQUMsVUFBWSxPQUFPLFVBQVksS0FBSTtBQUFBLElBQ3BDO0FBQUEsRUFDRDtBQUFBLEVBQ0QsaUJBQW1CO0FBQUEsSUFDbEIsTUFBUTtBQUFBLElBQ1IsU0FBVztBQUFBLElBQ1gsS0FBTztBQUFBLElBQ1AsTUFBUTtBQUFBLElBQ1IsV0FBYTtBQUFBLElBQ2IsVUFBWTtBQUFBLElBQ1osWUFBYztBQUFBLE1BQ2IsRUFBQyxVQUFZLE9BQU8sVUFBWSxZQUFXO0FBQUEsTUFDM0MsRUFBQyxVQUFZLE9BQU8sVUFBWSxjQUFhO0FBQUEsSUFDN0M7QUFBQSxFQUNEO0FBQUEsRUFDRCxZQUFjO0FBQUEsSUFDYixNQUFRO0FBQUEsSUFDUixTQUFXO0FBQUEsSUFDWCxLQUFPO0FBQUEsSUFDUCxNQUFRO0FBQUEsSUFDUixXQUFhO0FBQUEsSUFDYixVQUFZO0FBQUEsSUFDWixZQUFjO0FBQUEsTUFDYixFQUFDLFVBQVksT0FBTyxVQUFZLFVBQVM7QUFBQSxNQUN6QyxFQUFDLFVBQVksT0FBTyxVQUFZLFlBQVc7QUFBQSxJQUMzQztBQUFBLEVBQ0Q7QUFBQSxFQUNELHNCQUF3QjtBQUFBLElBQ3ZCLE1BQVE7QUFBQSxJQUNSLFNBQVc7QUFBQSxJQUNYLEtBQU87QUFBQSxJQUNQLE1BQVE7QUFBQSxJQUNSLFdBQWE7QUFBQSxJQUNiLFVBQVk7QUFBQSxJQUNaLFlBQWM7QUFBQSxNQUNiLEVBQUMsVUFBWSxZQUFZLFVBQVksVUFBUztBQUFBLE1BQzlDLEVBQUMsVUFBWSxZQUFZLFVBQVksVUFBUztBQUFBLElBQzlDO0FBQUEsRUFDRDtBQUFBLEVBQ0QsYUFBZTtBQUFBLElBQ2QsTUFBUTtBQUFBLElBQ1IsU0FBVztBQUFBLElBQ1gsS0FBTztBQUFBLElBQ1AsTUFBUTtBQUFBLElBQ1IsV0FBYTtBQUFBLElBQ2IsVUFBWTtBQUFBLElBQ1osWUFBYztBQUFBLE1BQ2IsRUFBQyxVQUFZLE1BQU0sVUFBWSxPQUFNO0FBQUEsTUFDckMsRUFBQyxVQUFZLE1BQU0sVUFBWSxTQUFRO0FBQUEsSUFDdkM7QUFBQSxFQUNEO0FBQUEsRUFDRCxhQUFlO0FBQUEsSUFDZCxNQUFRO0FBQUEsSUFDUixTQUFXO0FBQUEsSUFDWCxLQUFPO0FBQUEsSUFDUCxNQUFRO0FBQUEsSUFDUixXQUFhO0FBQUEsSUFDYixVQUFZO0FBQUEsSUFDWixZQUFjO0FBQUEsTUFDYixFQUFDLFVBQVksTUFBTSxVQUFZLE9BQU07QUFBQSxNQUNyQyxFQUFDLFVBQVksTUFBTSxVQUFZLFNBQVE7QUFBQSxJQUN2QztBQUFBLEVBQ0Q7QUFBQSxFQUNELFVBQVk7QUFBQSxJQUNYLE1BQVE7QUFBQSxJQUNSLFNBQVc7QUFBQSxJQUNYLEtBQU87QUFBQSxJQUNQLE1BQVE7QUFBQSxJQUNSLFdBQWE7QUFBQSxJQUNiLFVBQVk7QUFBQSxJQUNaLFlBQWM7QUFBQSxNQUNiLEVBQUMsVUFBWSxNQUFNLFVBQVksTUFBSztBQUFBLE1BQ3BDLEVBQUMsVUFBWSxNQUFNLFVBQVksUUFBTztBQUFBLElBQ3RDO0FBQUEsRUFDRDtBQUFBLEVBQ0QsY0FBZ0I7QUFBQSxJQUNmLE1BQVE7QUFBQSxJQUNSLFNBQVc7QUFBQSxJQUNYLEtBQU87QUFBQSxJQUNQLE1BQVE7QUFBQSxJQUNSLFdBQWE7QUFBQSxJQUNiLFVBQVk7QUFBQSxJQUNaLFlBQWM7QUFBQSxNQUNiLEVBQUMsVUFBWSxPQUFPLFVBQVksZ0JBQWU7QUFBQSxNQUMvQyxFQUFDLFVBQVksT0FBTyxVQUFZLGtCQUFpQjtBQUFBLElBQ2pEO0FBQUEsRUFDRDtBQUFBLEVBQ0QsU0FBVztBQUFBLElBQ1YsTUFBUTtBQUFBLElBQ1IsU0FBVztBQUFBLElBQ1gsS0FBTztBQUFBLElBQ1AsTUFBUTtBQUFBLElBQ1IsV0FBYTtBQUFBLElBQ2IsVUFBWTtBQUFBLElBQ1osWUFBYztBQUFBLE1BQ2IsRUFBQyxVQUFZLE1BQU0sVUFBWSxLQUFJO0FBQUEsTUFDbkMsRUFBQyxVQUFZLE1BQU0sVUFBWSxLQUFJO0FBQUEsTUFDbkMsRUFBQyxVQUFZLE1BQU0sVUFBWSxLQUFJO0FBQUEsTUFDbkMsRUFBQyxVQUFZLE1BQU0sVUFBWSxLQUFJO0FBQUEsSUFDbkM7QUFBQSxFQUNEO0FBQUEsRUFDRCxTQUFXO0FBQUEsSUFDVixNQUFRO0FBQUEsSUFDUixTQUFXO0FBQUEsSUFDWCxLQUFPO0FBQUEsSUFDUCxNQUFRO0FBQUEsSUFDUixXQUFhO0FBQUEsSUFDYixVQUFZO0FBQUEsSUFDWixZQUFjO0FBQUEsTUFDYixFQUFDLFVBQVksT0FBTyxVQUFZLEtBQUk7QUFBQSxNQUNwQyxFQUFDLFVBQVksT0FBTyxVQUFZLEtBQUk7QUFBQSxNQUNwQyxFQUFDLFVBQVksT0FBTyxVQUFZLEtBQUk7QUFBQSxNQUNwQyxFQUFDLFVBQVksT0FBTyxVQUFZLEtBQUk7QUFBQSxJQUNwQztBQUFBLEVBQ0Q7QUFBQSxFQUNELFNBQVc7QUFBQSxJQUNWLE1BQVE7QUFBQSxJQUNSLFNBQVc7QUFBQSxJQUNYLEtBQU87QUFBQSxJQUNQLE1BQVE7QUFBQSxJQUNSLFdBQWE7QUFBQSxJQUNiLFVBQVk7QUFBQSxJQUNaLFlBQWM7QUFBQSxNQUNiLEVBQUMsVUFBWSxNQUFNLFVBQVksS0FBSTtBQUFBLE1BQ25DLEVBQUMsVUFBWSxNQUFNLFVBQVksS0FBSTtBQUFBLE1BQ25DLEVBQUMsVUFBWSxNQUFNLFVBQVksS0FBSTtBQUFBLE1BQ25DLEVBQUMsVUFBWSxNQUFNLFVBQVksS0FBSTtBQUFBLElBQ25DO0FBQUEsRUFDRDtBQUFBLEVBQ0QsV0FBYTtBQUFBLElBQ1osTUFBUTtBQUFBLElBQ1IsU0FBVztBQUFBLElBQ1gsS0FBTztBQUFBLElBQ1AsTUFBUTtBQUFBLElBQ1IsV0FBYTtBQUFBLElBQ2IsVUFBWTtBQUFBLElBQ1osWUFBYztBQUFBLE1BQ2IsRUFBQyxVQUFZLFVBQVUsVUFBWSxLQUFJO0FBQUEsTUFDdkMsRUFBQyxVQUFZLFVBQVUsVUFBWSxLQUFJO0FBQUEsTUFDdkMsRUFBQyxVQUFZLFVBQVUsVUFBWSxLQUFJO0FBQUEsTUFDdkMsRUFBQyxVQUFZLFVBQVUsVUFBWSxLQUFJO0FBQUEsSUFDdkM7QUFBQSxFQUNEO0FBQ0YsR0NyaUJlQyxJQUFBO0FBQUEsRUFDZCxJQUFNO0FBQUEsSUFDTCxTQUFXO0FBQUEsSUFDWCxXQUFhO0FBQUEsSUFDYixpQkFBbUI7QUFBQSxJQUNuQixXQUFhO0FBQUEsSUFDYixVQUFZO0FBQUEsTUFDWCxHQUFLO0FBQUEsUUFDSixTQUFXO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxNQUFNO0FBQUEsVUFDTDtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLE1BQ0QsR0FBSztBQUFBLFFBQ0osS0FBTztBQUFBLFVBQ047QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLE1BQ0QsR0FBSztBQUFBLFFBQ0osU0FBVztBQUFBLFVBQ1Y7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELE1BQU07QUFBQSxVQUNMO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxNQUFRO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxNQUNELEdBQUs7QUFBQSxRQUNKLFNBQVc7QUFBQSxVQUNWO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxNQUFNO0FBQUEsVUFDTDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsYUFBYTtBQUFBLFVBQ1o7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELGVBQWU7QUFBQSxVQUNkO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxhQUFhO0FBQUEsVUFDWjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsZUFBZTtBQUFBLFVBQ2Q7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELGFBQWE7QUFBQSxVQUNaO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxlQUFlO0FBQUEsVUFDZDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsYUFBYTtBQUFBLFVBQ1o7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELGVBQWU7QUFBQSxVQUNkO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxZQUFZO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsY0FBYztBQUFBLFVBQ2I7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELFlBQVk7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxjQUFjO0FBQUEsVUFDYjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsYUFBYTtBQUFBLFVBQ1o7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELGVBQWU7QUFBQSxVQUNkO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxhQUFhO0FBQUEsVUFDWjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsZUFBZTtBQUFBLFVBQ2Q7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELGFBQWE7QUFBQSxVQUNaO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxlQUFlO0FBQUEsVUFDZDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsYUFBYTtBQUFBLFVBQ1o7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELGVBQWU7QUFBQSxVQUNkO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxrQkFBa0I7QUFBQSxVQUNqQjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0Qsb0JBQW9CO0FBQUEsVUFDbkI7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELGtCQUFrQjtBQUFBLFVB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QkFBbUI7QUFBQSxJQUNuQixVQUFZO0FBQUEsTUFDWCxHQUFLO0FBQUEsUUFDSixTQUFXO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELE1BQU07QUFBQSxVQUNMO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsTUFBUTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxRQUFVO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELE1BQVE7QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsUUFBVTtBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxNQUFRO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELFFBQVU7QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxNQUNELEdBQUs7QUFBQSxRQUNKLFNBQVc7QUFBQSxVQUNWO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsTUFBTTtBQUFBLFVBQ0w7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxNQUFRO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELFFBQVU7QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsTUFBUTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxRQUFVO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELE1BQVE7QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsUUFBVTtBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLE1BQ0QsSUFBTTtBQUFBLFFBQ0wsSUFBTTtBQUFBLFVBQ0w7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNEO0FBQUEsTUFDRCxJQUFNO0FBQUEsUUFDTCxJQUFNO0FBQUEsVUFDTDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxNQUNELElBQU07QUFBQSxRQUNMLElBQU07QUFBQSxVQUNMO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBQ0QsUUFBVTtBQUFBLElBQ1QsU0FBVztBQUFBLElBQ1gsV0FBYTtBQUFBLElBQ2IsaUJBQW1CO0FBQUEsSUFDbkIsV0FBYTtBQUFBLElBQ2IsVUFBWTtBQUFBLE1BQ1gsR0FBSztBQUFBLFFBQ0osU0FBVztBQUFBLFVBQ1Y7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELE1BQU07QUFBQSxVQUNMO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLE1BQ0QsR0FBSztBQUFBLFFBQ0osU0FBVztBQUFBLFVBQ1Y7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELE1BQU07QUFBQSxVQUNMO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLE1BQ0QsSUFBTTtBQUFBLFFBQ0wsSUFBTTtBQUFBLFVBQ0w7QUFBQSxVQUNBO0FBQUEs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SixNQUFRO0FBQUEsSUFDUixTQUFXLENBQUMsSUFBSTtBQUFBLElBQ2hCLFVBQVk7QUFBQSxJQUNaLFdBQWE7QUFBQSxJQUNiLE1BQVE7QUFBQSxJQUNSLE1BQVEsQ0FBQyxTQUFTO0FBQUEsSUFDbEIsT0FBUztBQUFBLE1BQ1IsU0FBVztBQUFBLElBQ1g7QUFBQSxFQUNEO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixTQUFXLENBQUMsSUFBSTtBQUFBLElBQ2hCLFVBQVk7QUFBQSxJQUNaLFdBQWE7QUFBQSxJQUNiLE1BQVE7QUFBQSxJQUNSLE1BQVEsQ0FBQyxTQUFTO0FBQUEsSUFDbEIsT0FBUztBQUFBLE1BQ1IsU0FBVztBQUFBLElBQ1g7QUFBQSxFQUNEO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixTQUFXLENBQUMsSUFBSTtBQUFBLElBQ2hCLFVBQVk7QUFBQSxJQUNaLFdBQWE7QUFBQSxJQUNiLE1BQVE7QUFBQSxJQUNSLE1BQVEsQ0FBQyxTQUFTO0FBQUEsSUFDbEIsT0FBUztBQUFBLE1BQ1IsU0FBVztBQUFBLElBQ1g7QUFBQSxJQUNELE9BQVM7QUFBQSxFQUNUO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixTQUFXLENBQUMsSUFBSTtBQUFBLElBQ2hCLFVBQVk7QUFBQSxJQUNaLFdBQWE7QUFBQSxJQUNiLE1BQVE7QUFBQSxJQUNSLE1BQVEsQ0FBQyxTQUFTO0FBQUEsSUFDbEIsT0FBUztBQUFBLE1BQ1IsU0FBVztBQUFBLElBQ1g7QUFBQSxJQUNELE9BQVM7QUFBQSxFQUNUO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixTQUFXLENBQUMsSUFBSTtBQUFBLElBQ2hCLFVBQVk7QUFBQSxJQUNaLFdBQWE7QUFBQSxJQUNiLE1BQVE7QUFBQSxJQUNSLE1BQVEsQ0FBQyxTQUFTO0FBQUEsSUFDbEIsT0FBUztBQUFBLE1BQ1IsU0FBVztBQUFBLElBQ1g7QUFBQSxFQUNEO0FBQUEsRUFD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QUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFDRixHQzVsQmVDLElBQUE7QUFBQSxFQUNkLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQUs7QUFBQSxFQUNMLEdBQU07QUFBQSxFQUNOLEdBQU07QUFBQSxFQUNOLEdBQU07QUFBQSxFQUNOLEdBQU07QUFBQSxFQUNOLEdBQU07QUFBQSxFQUNOLEdBQU07QUFBQSxFQUNOLEdBQU07QUFBQSxFQUNOLEdBQU07QUFBQSxFQUNOLEdBQU07QUFBQSxFQUNOLEdBQU07QUFBQSxFQUNOLEdBQU07QUFBQSxFQUNOLEdBQU07QUFBQSxFQUNOLEdBQU07QUFBQSxFQUNOLEdBQU07QUFBQSxFQUNOLEdBQU07QUFBQSxFQUNOLEdBQU07QUFBQSxFQUNOLEdBQU07QUFBQSxFQUNOLEdBQU07QUFBQSxFQUNOLEdBQU07QUFB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
