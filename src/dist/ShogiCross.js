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
        const i = t.replace(/ /g, "+"), r = `${p}${i}:wght@${s}&text=${e}`, n = await fetch(r);
        if (!n.ok)
          return;
        const S = (await n.text()).match(/url\(.+?\)/g);
        if (!S)
          throw new Error("Not found font.");
        for (const o of S) {
          const d = new FontFace(`${t}${a}`, o);
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
    await new Promise((n) => p.toBlob(n), s)
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
  constructor(e, a, t, s, i, r, n, l, S) {
    Object.assign(this, D[a]), this.ctx = e, this.center = t, this.middle = s, this.width = i, this.height = r, this.left = t - i / 2, this.top = s - r / 2, this.right = t + i / 2, this.bottom = s + r / 2, this.borderWidth = n, this.pX = l, this.pY = S, this.selectColor ??= "#FF000066", this.targetColor ??= "#00FF0066", this.attr ??= [], this.piece = null, this.isSelected = !1, this.clearTarget();
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
    const { ctx: e, left: a, top: t, center: s, middle: i, width: r, height: n, displayText: l, textRotate: S } = this;
    if (e.fillStyle = this.backgroundColor, e.strokeStyle = this.borderColor, e.lineWidth = this.borderWidth, e.save(), e.translate(a, t), e.fillRect(0, 0, r, n), this.intersect ? (e.lineWidth = this.borderWidth, e.beginPath(), e.moveTo(r / 2, 0), e.lineTo(r / 2, n), e.moveTo(0, n / 2), e.lineTo(r, n / 2), e.closePath(), e.stroke()) : e.strokeRect(0, 0, r, n), e.lineWidth = this.borderWidth / 2, e.beginPath(), this.borderSlashLeft && (e.moveTo(0, 0), e.lineTo(r, n)), this.borderSlashRight && (e.moveTo(r, 0), e.lineTo(0, n)), e.closePath(), e.stroke(), e.restore(), l) {
      e.save(), e.translate(s, i), e.fillStyle = this.borderColor;
      const o = S ? S * Math.PI / 180 : 0;
      e.rotate(o);
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
  /** プレイヤー表示から角度を取得
  * @type {Object<string, number>}
   */
  static charDegs = Object.fromEntries(
    Object.entries(y.degChars).map(([e, a]) => [a, e])
  );
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
      const n = [...r.promo];
      r.promo = {};
      for (const l of n) {
        const S = t.get(l);
        S.attr.push("promoted"), S.unit = "成", r.promo[l] = S, t.set(l, { ...r, ...S });
      }
    }
    [...t].forEach(([i, r], n) => {
      r.id = n, r.char = i, t.set(i, new y(e, r, a));
    });
    const s = Object.fromEntries(t);
    for (const [i, r] of t)
      r.alias.forEach((n, l) => {
        const S = r.clone(), o = [...S.display];
        S.displayPtn = l + 1, S.display = o, s[n] = S;
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
      useRankSize: n = y.useRankSize,
      isDrawShadow: l = y.isDrawShadow,
      isMoved: S = !1
    } = t;
    Object.assign(this, a), this.ctx = e, this.display ??= [""], this.imgSrc ??= null, this.alias = [...this.alias ?? ""], this.displayPtn = s, this.game = z[this.gameName], this.cost = Z[this.char] ?? 1, this.center = 0, this.middle = 0, this.deg = i, this.size = r, this.useRankSize = n, this.isDrawShadow = l, this.isRotateImg ??= !0, this.isMoved = S, this.isSelected = !1, this.attr ??= [];
    try {
      Object.entries(this.range).forEach(([o, d]) => {
        Array.isArray(d) || (this.range[o] = V[d].map((m) => [...m]));
      });
    } catch (o) {
      throw console.error(o), a;
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
          const s = (i) => i[0].map((r, n) => i.map((l) => l[n]));
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
    const n = [..."" + this.display[this.displayPtn]], l = 40 * t;
    e.font = `${l}px ${M.names}`, e.textAlign = "center", n.forEach((S, o) => {
      const d = n.length === 1 ? l / 2 : o * l;
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
  /** 文字列形式で取得
   * @param {boolean} isAlias - エイリアス表示
   */
  toString(e = !1) {
    const { displayPtn: a } = this, t = !e || a === 0 ? this.char : this.alias[a - 1];
    return y.degChars[this.deg] + t;
  }
}
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
      for (let [n, { isOwn: l }] of de)
        r === n && (e.push({ isOwn: l, oX: i, oY: s }), l && ([a, t] = [i, s]));
    }
  return e.map((s) => (s.offsetX = s.oX - a, s.offsetY = s.oY - t, s));
}
function me(p, e, a, t) {
  const { field: s, yLen: i, enPassant: r } = p;
  function n(c, g) {
    return s[g] && s[g][c] && !s[g][c].hasAttr("keepOut");
  }
  function l(c) {
    return c.piece && e.hasAttr("po") && c.piece.hasAttr("po");
  }
  function S(c) {
    return c.piece && !e.isMoved && !c.piece.isMoved && e.hasAttr("pao") && e.cost < c.piece.cost;
  }
  function o(c, g, A, h = "", C = !0) {
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
          if (!(!n(E, k) || o(A, 0 | E, 0 | k, "", !1) || c[b][x] !== w))
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
            !n(f, N) || !o(A, f, N, g) || c[E][k] !== b || d(c, x, !1, h, C) || m(g, f, N);
          }
  }
  function W(c, [g, { isAttack: A }], { oX: h, oY: C, isOwn: w, offsetX: b, offsetY: x }) {
    if (!(!w && !o(!1, a + b, t + x)))
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
              if (!n(R, $) || !N && F === 0)
                break;
              const G = L === 0;
              G && o(A, R, $, g, G) ? (F--, m(g, R, $)) : k < 1 && F--;
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
  const { canvas: i } = p, r = (o, d, m = () => {
  }) => {
    const u = window.getComputedStyle(i), W = o.target.getBoundingClientRect();
    let c = i.width / parseFloat(u.width), g = i.height / parseFloat(u.height);
    if (o.clientX)
      c *= o.clientX - W.left, g *= o.clientY - W.top;
    else if (0 < o.touches.length) {
      if (1 < o.touches.length)
        return;
      c *= o.touches[0].clientX - W.left, g *= o.touches[0].clientY - W.top;
    } else
      o.preventDefault(), [c, g] = a;
    p.field.forEach((A, h) => A.forEach((C, w) => d(C, c, g, w, h))), m(c, g), p.draw(), a = [c, g];
  }, n = (o) => {
    e = !0, r(
      o,
      (d, m, u) => {
        const { piece: W, pX: c, pY: g } = d;
        W && d.checkRangeMouse(m, u) && (o.preventDefault(), W.isSelected = !0, t = d, me(p, W, c, g));
      },
      (d, m) => {
        for (const [u, W] of p.stand.stocks)
          for (let c = W.length - 1; 0 <= c; c--)
            if (W[c].checkRangeMouse(d, m)) {
              o.preventDefault(), W[c].isSelected = !0, s = { deg: u, i: c };
              return;
            }
      }
    );
  }, l = (o) => {
    !e || !(t || s) || r(
      o,
      (d, m, u) => {
        d.isSelected = d.checkRangeMouse(m, u);
      }
    );
  }, S = (o) => {
    e = !1, r(
      o,
      (d, m, u) => {
        d.checkRangeMouse(m, u) && (t && p.movePiece(t, d), s && !d.piece && p.stand.releasePiece(d, s));
      }
    ), r(
      o,
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
  return i.addEventListener("mousedown", n), i.addEventListener("mousemove", l), i.addEventListener("mouseup", S), i.addEventListener("touchstart", n), i.addEventListener("touchmove", l), i.addEventListener("touchend", S), {
    removeEvent() {
      i.removeEventListener("mousedown", n), i.removeEventListener("mousemove", l), i.removeEventListener("mouseup", S), i.removeEventListener("touchstart", n), i.removeEventListener("touchmove", l), i.removeEventListener("touchend", S);
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
  static #i = new Map(
    [...B.#e].map(([e, a]) => [a, e])
  );
  /** 角度から持駒の表題表示
   * @type {Map<number, string>}
   */
  static #t = /* @__PURE__ */ new Map([
    [0, "先手の持駒"],
    [90, "次手の持駒"],
    [180, "後手の持駒"],
    [270, "四手の持駒"]
  ]);
  /** 持駒の表題から角度表示
   * @type {Map<string, number>}
   */
  static #r = new Map(
    [...B.#t].map(([e, a]) => [a, e])
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
  static #s(e, a = 0) {
    const t = /* @__PURE__ */ new Map();
    return e.stocks.get(a).forEach(({ char: s }) => {
      t.has(s) || t.set(s, 0), t.set(s, t.get(s) + 1);
    }), B.#t.get(a) + "：" + [...t].map(
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
      [...B.#r.keys()].some((n) => new RegExp(`^${n}`).test(r)) ? t.push(r) : a.push(r.slice(1));
    });
    let s = a.slice(2, -1).join(`
`);
    B.#a.forEach((r, n) => {
      s = s.replace(r, y.degChars[n]);
    });
    const i = t.flatMap((r) => {
      const [n, l] = r.split(/：/);
      if (l === "")
        return "";
      const S = B.#r.get(n), o = y.degChars[S];
      return l.split(/\s/).map((m) => {
        const u = m[0], W = m.slice(1);
        return (o + u).repeat(B.#S(W));
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
`, n = `
+${Array(t).fill("---").join("")}+`, l = "|", S = "", o = `
`, d = `${B.#s(i, 180)}
`, m = `${B.#s(i, 0)}`;
    return s !== 2 && (d = `${B.#s(i, 270)}
` + d, m = `${B.#s(i, 90)}
` + m), d + r + a.map(
      (u, W) => l + u.map(
        (c) => B.#p(c.piece)
      ).join(S) + l + B.#l(W + 1)
    ).join(o) + n + `
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
    const { top: a, right: t, bottom: s, width: i, height: r, panelWidth: n, panelHeight: l, xLen: S, yLen: o } = e;
    this.clear(), this.left = t * 1.02, this.top = a, this.width = i / 2, this.height = r, this.right = this.left + this.width, this.bottom = s, this.pitchWidth = n / 2, this.pitchHeight = l, this.xLen = S, this.yLen = o;
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
    e.piece = r[s], r[s].center = e.center, r[s].middle = e.middle, i.addRecord({ toPanel: e, end: "打" }), r.splice(s, 1);
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
    const { board: e, left: a, top: t, width: s, height: i, pitchWidth: r, pitchHeight: n } = this, { ctx: l, xLen: S, yLen: o } = e;
    l.fillStyle = e.backgroundColor, l.strokeStyle = e.borderColor, l.lineWidth = e.borderWidth, l.save(), l.translate(a, t), l.fillRect(0, 0, s, i), l.strokeRect(0, 0, s, i), l.restore(), [...this.stocks.values()].forEach((d, m) => {
      let u = 0;
      d = d.slice(-o / 4 * S);
      for (let W = 0 | o / 4 * m; W < o / 4 * (m + 1); W++)
        for (let c = 0; c < S; c++) {
          const g = a + r * (c + 1), A = t + n * (W + 1), h = d[u++];
          if (h == null)
            break;
          h.center = g, h.middle = A, h.draw();
        }
    });
  }
  /** 駒台をテキスト形式で取得
   * @param {boolean} isCompact - コンパクト表示
   * @param {boolean} isAlias - エイリアス表示
   */
  toString(e = !1, a = !1) {
    const { xLen: t } = this.board, s = [...this.stocks.values()].flat().filter((n) => n);
    let i = 0 < s.length ? `
` + "―".repeat(t * 2) + `
` : "", r = s.map((n) => n.toString(a)).join("");
    if (!e) {
      i = "";
      for (const n of Object.values(y.degChars))
        r = r.replace(n, `
${n}持駒：${n}`);
    }
    return i + r;
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
  /** 盤面の記録
   * @typedef {Object} Record
   * @prop {Object} from
   * @prop {number} from.pX
   * @prop {number} from.pY
   * @prop {Object} to
   * @prop {number} to.pX
   * @prop {number} to.pY
   * @prop {number} deg
   * @prop {string} pieceChar
   * @prop {string} end
   * @prop {string} fieldText
   * @prop {string[][]} fieldMoved
   */
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
    const { playBoard: t, playPieces: s, onDrawed: i } = a, r = s.some(({ gameName: l }, S) => 1 < S && l) ? 4 : 2, n = new _(e, t, {
      ...a,
      players: r,
      onDrawed: i
    });
    return s.forEach(({ gameName: l, pieceSet: S }, o) => {
      if (l) {
        S ??= "default";
        try {
          n.putStartPieces(o, l, S);
        } catch {
        }
      }
    }), n.onDrawed = i, n;
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
      canvasFit: n = "overflow",
      boardLeft: l = 5,
      boardTop: S = 5,
      panelWidth: o = 50,
      panelHeight: d = 0 | o * 1.1,
      pieceSize: m = 0 | o * 0.9,
      useRankSize: u = !0,
      isDrawShadow: W = !0,
      borderWidth: c = Math.min(o, d) / 30,
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
    this.players = s, this.left = l, this.top = S, this.panelWidth = o, this.panelHeight = d, this.borderWidth = c, this.pieceSize = m, this.canvasBackgroundColor = A, this.field = this.field.map(
      (N, X) => [...N].map((P, L) => {
        const F = l + o * (L + 1), I = S + d * (X + 1);
        return new le(k, P, F, I, o, d, c, L, X);
      })
    ), this.xLen = this.field[0].length, this.yLen = this.field.length, this.width = this.panelWidth * (this.xLen + 1), this.height = this.panelHeight * (this.yLen + 1), this.right = l + this.width, this.bottom = S + this.height, this.stand = new H(this), e.width = i ?? (g ? this.stand.right : this.right) + 5, e.height = r ?? this.bottom + 5;
    const { style: f } = e;
    n === "overflow" ? (f.maxWidth === "" && (f.maxWidth = "97vw"), f.maxHeight === "" && (f.maxHeight = "97vh")) : n === "horizontal" ? f.width === "" && (f.width = "97vw") : n === "vertical" ? f.height === "" && (f.height = "97vh") : n === "parentOverflow" ? (f.maxWidth === "" && (f.maxWidth = "100%"), f.maxHeight === "" && (f.maxHeight = "100%")) : n === "parentHorizontal" ? f.width === "" && (f.width = "100%") : n === "parentVertical" && f.height === "" && (f.height = "100%"), this.autoDrawing = h, h && (x.then(() => this.draw()), E.then(() => this.draw()), this.draw()), this.onDrawed = C, this.onGameOver = w, this.gameAlives = new Map(
      [...Array(this.players).keys()].map((N) => [this.#e(N), !0])
    ), this.freeMode = b, this.record = [], this.turn = 0, this.uiControl = ge(this), this.enPassant = new he();
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
        const s = (i) => i[0].map((r, n) => i.map((l) => l[n]));
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
    r.forEach((n, l) => {
      if (n.length < this.xLen)
        throw Error(n.join(""));
      const S = l + this.yLen - r.length;
      [...n].forEach((o, d) => {
        if (!s[o])
          return;
        const m = s[o].clone(), u = this.field[S][d];
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
    const { displayPtn: r = 0, isMoved: n = !1 } = i, { pieces: l } = this, S = this.#e(s);
    typeof e == "string" && (e = new y(this.ctx, l[e], { displayPtn: r, deg: S, isMoved: n }));
    const o = this.field[t][a];
    e.center = o.center, e.middle = o.middle, o.piece = e, this.autoDrawing && this.draw();
  }
  /** 文字列から駒を配置
   * {string} text - 駒配置を表す文字列
   */
  setTextPieces(e) {
    const { field: a, pieces: t, xLen: s, yLen: i } = this, r = "持駒：";
    0 < e.indexOf(r) && (e = B.convSetText(e));
    const l = [e].concat(
      [..."┏━┯┓┗┷┛┃│┠─┼┨―"],
      Object.values(y.degChars).map((o) => `
` + o + r)
    ).reduce(
      (o, d) => o.replace(new RegExp(d, "g"), "")
    ).replace(/\n\n/g, `
`).replace(/　/g, "・").trim().split(/\n/).map(
      (o) => o.match(/.{2}/g)
    );
    for (let o = 0; o < i; o++)
      for (let d = 0; d < s; d++)
        try {
          const m = l[o][d], u = y.stringToPiece(t, m);
          u.center = a[o][d].center, u.middle = a[o][d].middle, a[o][d].piece = u;
        } catch {
          a[o][d].piece = null;
        }
    this.stand.clear();
    const S = l[i];
    S && S.forEach((o) => {
      const d = y.stringToPiece(t, o);
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
    const { yLen: a } = this, { piece: t, pX: s, pY: i } = e, { deg: r } = t, [n, l] = [
      t.game.promoLine,
      t.forcePromoLine
    ].map((o) => a - o - (0 | this.promoLineOffset));
    let S;
    return this.sidePromo ? S = Math.max(
      ...Object.keys(y.degChars).map((o) => 0 | o).filter((o) => o !== r).map(
        (o) => this.getRow(s, i, o, 180)
      )
    ) : S = this.getRow(s, i, r), {
      canPromo: n <= S,
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
  #i(e, a, t, s) {
    const { freeMode: i } = this, { piece: r } = a;
    if (!r.promo || r.hasAttr("promoted") || !t) {
      this.addRecord({ fromPanel: e, toPanel: a });
      return;
    }
    do
      for (const [n, { name: l }] of Object.entries(r.promo))
        if (confirm(`成りますか?
${r.char}:${r.name}
　↓
${n}:${l}`)) {
          this.addRecord({ fromPanel: e, toPanel: a, end: "成" }), r.promotion(n);
          return;
        }
    while (!i && s);
    this.addRecord({ fromPanel: e, toPanel: a, end: "不成" });
  }
  /** 駒を移動
   * @param {Panel} fromPanel - 移動元のマス目
   * @param {Panel} toPanel - 選択中のマス目
   */
  movePiece(e, a) {
    const { stand: t, freeMode: s, enPassant: i } = this;
    if (!e || a.hasAttr("keepOut") || a.piece === e.piece || a.piece?.deg === e.piece.deg || !s && !a.isTarget)
      return;
    let { canPromo: r, forcePromo: n } = this.checkCanPromo(e);
    t.capturePiece(
      e.piece,
      a.piece,
      a.hasAttr("capture"),
      a.hasAttr("cantCapture")
    ), a.piece = e.piece, e.piece = null;
    const { piece: l } = a;
    l.center = a.center, l.middle = a.middle, l.isMoved = !0;
    const S = this.checkCanPromo(a);
    r ||= S.canPromo, n ||= S.forcePromo, i.setMoved(a), this.#i(e, a, r, n), this.#a();
  }
  /** 棋譜を追記
   * @param {Panel} toPanel - 移動先のマス目
   * @param {Object} option - オプション
   * @param {Panel} option.fromPanel - 移動元のマス目
   * @param {string} option.end - オプション=成|不成|打
   */
  addRecord(e = {}) {
    const { record: a } = this, { fromPanel: t = {}, toPanel: s = {}, end: i = "", inc: r = 1 } = e, { piece: n = {} } = s;
    this.turn += r, a[this.turn] = {
      from: {
        pX: t.pX,
        pY: t.pY
      },
      to: {
        pX: s.pX,
        pY: s.pY
      },
      deg: n.deg,
      pieceChar: n.char,
      end: i,
      fieldText: this.getText("compact", !0),
      fieldMoved: this.field.map(
        (l) => l.map(
          ({ piece: S }) => S?.isMoved
        )
      )
    }, 0 < r && a.splice(this.turn + 1);
  }
  /** 記録の参照手数を切り替える
   * @param {number} - 切り替えたい手数の差分
   */
  #t(e) {
    const { record: a } = this;
    if (!a[this.turn + e])
      return;
    this.turn += e;
    const { fieldText: t, fieldMoved: s } = a[this.turn];
    this.setTextPieces(t), this.field.forEach(
      (i, r) => i.forEach(({ piece: n }, l) => {
        n && (n.isMoved = s[r][l]);
      })
    );
  }
  /** 記録の手を戻す */
  undoRecord() {
    this.#t(-1);
  }
  /** 記録の手を進める */
  redoRecord() {
    this.#t(1);
  }
  /** 棋譜をテキストで取得
   * @returns {string}
   */
  getTextRecord() {
    const e = ({ pX: t }) => t == null ? "*" : (this.xLen - t).toString(36), a = ({ pY: t }) => t == null ? "*" : (t + 1).toString(36);
    return this.record.slice(1, this.turn + 1).map(
      ({ to: t, from: s, deg: i, pieceChar: r, end: n }, l) => `${l}: ${y.degChars[i]}${e(t)}${a(t)}${r}${n} (${e(s)}${a(s)})`
    ).join(`
`);
  }
  /** 盤を描写 */
  draw() {
    const { ctx: e, canvas: a, left: t, top: s, width: i, height: r, panelWidth: n, panelHeight: l } = this;
    this.turn === 0 && this.addRecord({ inc: 0 }), e.restore(), e.save(), e.clearRect(0, 0, a.width, a.height), e.fillStyle = this.canvasBackgroundColor, e.fillRect(0, 0, a.width, a.height), e.fillStyle = this.backgroundColor, e.lineWidth = this.borderWidth, e.strokeStyle = this.borderColor, e.save(), e.translate(t, s), e.fillRect(0, 0, i, r), e.strokeRect(0, 0, i, r), e.translate(n / 2, l / 2), e.strokeRect(0, 0, i - n, r - l), e.restore(), this.stand.draw(), this.field.forEach((S) => {
      S.forEach((o) => {
        o.draw();
      });
    }), this.onDrawed && this.onDrawed(this);
  }
  /** 駒配置をテキストで取得
   * @param {"default"|"compact"|"bod"} isCompact - テキスト形式
   * @param {boolean} isAlias - エイリアス表示
   * @returns {string}
   */
  getText(e = "default", a = !1) {
    return e === "bod" ? B.getText(this) : this.toString(e === "compact", a);
  }
  /** 駒配置をテキストで取得
   * @param {boolean} isCompact - コンパクト表示
   * @param {boolean} isAlias - エイリアス表示
   */
  toString(e = !1, a = !1) {
    const { xLen: t } = this;
    let s = "", i = "", r = "", n = "", l = `
`;
    return e || (s = `┏${Array(t).fill("━━").join("┯")}┓
`, i = `
┗${Array(t).fill("━━").join("┷")}┛`, r = "┃", n = "│", l = `
┠${Array(t).fill("──").join("┼")}┨
`), s + this.field.map(
      (S) => r + S.map(
        (o) => o.piece?.toString(a) ?? o.toString(e)
      ).join(n) + r
    ).join(l) + i + this.stand.toString(e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvZ2lDcm9zcy5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL1Nob2dpQ3Jvc3MvZGF0YS9jYW52YXNGb250LmpzIiwiLi4vc3JjL1Nob2dpQ3Jvc3MvZGF0YS9nYW1lU29mdC5qcyIsIi4uL3NyYy9TaG9naUNyb3NzL2RhdGEvZ2FtZXMuanMiLCIuLi9zcmMvU2hvZ2lDcm9zcy9kYXRhL2JvYXJkcy5qcyIsIi4uL3NyYy9TaG9naUNyb3NzL2RhdGEvcGFuZWxzLmpzIiwiLi4vc3JjL1Nob2dpQ3Jvc3MvZGF0YS9waWVjZXMuanMiLCIuLi9zcmMvU2hvZ2lDcm9zcy9kYXRhL3BpZWNlUmFuZ2UuanMiLCIuLi9zcmMvU2hvZ2lDcm9zcy9kYXRhL3BpZWNlQ29zdC5qcyIsIi4uL3NyYy9TaG9naUNyb3NzL2NvcmUvanNvbi94aHIuanMiLCIuLi9zcmMvU2hvZ2lDcm9zcy9jb3JlL2pzb24uanMiLCIuLi9zcmMvU2hvZ2lDcm9zcy9jb3JlL2NhbnZhc0ZvbnRMb2FkZXIuanMiLCIuLi9zcmMvU2hvZ2lDcm9zcy9jb3JlL2NhbnZhc0ltYWdlTG9hZGVyLmpzIiwiLi4vc3JjL1Nob2dpQ3Jvc3MvY29yZS9kb3dubG9hZEltYWdlLmpzIiwiLi4vc3JjL1Nob2dpQ3Jvc3MvY29yZS9wYW5lbC5qcyIsIi4uL3NyYy9TaG9naUNyb3NzL2NvcmUvcGllY2UuanMiLCIuLi9zcmMvU2hvZ2lDcm9zcy9jb3JlL2NoZWNrVGFyZ2V0LmpzIiwiLi4vc3JjL1Nob2dpQ3Jvc3MvY29yZS91aUNvbnRyb2wuanMiLCIuLi9zcmMvU2hvZ2lDcm9zcy9jb3JlL2JvZC5qcyIsIi4uL3NyYy9TaG9naUNyb3NzL2NvcmUvc3RhbmQuanMiLCIuLi9zcmMvU2hvZ2lDcm9zcy9jb3JlL2VuUGFzc2FudC5qcyIsIi4uL3NyYy9TaG9naUNyb3NzL2NvcmUvYm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuXHRcImZvbnRzXCI6IFtcblx0XHRbXCJOb3RvIFNlcmlmIEpQXCIsIDkwMF0sXG5cdFx0W1wiTm90byBFbW9qaVwiLCA0MDBdLFxuXHRcdFtcIk5vdG8gU2FucyBTeW1ib2xzIDJcIiwgNDAwXSxcblx0XHRbXCJOb3RvIFNhbnMgU3ltYm9sc1wiLCA0MDBdLFxuXHRcdFtcIk5vdG8gU2VyaWZcIiwgOTAwXSxcblx0XHRbXCJOb3RvIFNlcmlmIFRDXCIsIDkwMF1cblx0XVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRcInNob2dpXCI6IHtcblx0XHRcIm5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIuS4gOiIrOeahOOBquWwhuaji+OAguacrOWwhuaji+OBqOOCguWRvOOBsOOCjOOCi+OAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiB0cnVlLFxuXHRcdFwicGxheVBpZWNlc1wiOiBbXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwiZGVmYXVsdFwifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCIycFwifVxuXHRcdF1cblx0fSxcblx0XCJjaGVzc1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OB44Kn44K5XCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi44OB44Kn44K5XCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2phLndpa2lwZWRpYS5vcmcvd2lraS8lRTMlODMlODElRTMlODIlQTclRTMlODIlQjlcIixcblx0XHRcImRlc2NcIjogXCLopb/mtIvjga7lsIbmo4vpoZ7jgILopb/mtIvlsIbmo4vjgajjgoLlkbzjgbDjgozjgovjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuODgeOCp+OCuVwiLFxuXHRcdFwidXNlU3RhbmRcIjogZmFsc2UsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsIFwicGllY2VTZXRcIjogXCJkZWZhdWx0XCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIiwgXCJwaWVjZVNldFwiOiBcIjJwXCJ9XG5cdFx0XVxuXHR9LFxuXHRcInhpYW5ncVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44K344Oj44Oz44OB44O8XCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi44K344Oj44Oz44OB44O8XCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2phLndpa2lwZWRpYS5vcmcvd2lraS8lRTMlODIlQjclRTMlODMlQTMlRTMlODMlQjMlRTMlODMlODElRTMlODMlQkNcIixcblx0XHRcImRlc2NcIjogXCLkuK3lm73jga7lsIbmo4vpoZ7jgILosaHmo4vjgIHkuK3lm73lsIbmo4vjgajjgoLlkbzjgbDjgozjgovjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuOCt+ODo+ODs+ODgeODvFwiLFxuXHRcdFwidXNlU3RhbmRcIjogZmFsc2UsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44K344Oj44Oz44OB44O8XCIsIFwicGllY2VTZXRcIjogXCJkZWZhdWx0XCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLjgrfjg6Pjg7Pjg4Hjg7xcIiwgXCJwaWVjZVNldFwiOiBcIjJwXCJ9XG5cdFx0XVxuXHR9LFxuXHRcImphbmdnaVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OB44Oj44Oz44KuXCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi44OB44Oj44Oz44KuXCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2phLndpa2lwZWRpYS5vcmcvd2lraS8lRTMlODMlODElRTMlODMlQTMlRTMlODMlQjMlRTMlODIlQUVcIixcblx0XHRcImRlc2NcIjogXCLmnJ3prq7ljYrls7bjga7lsIbmo4vpoZ7jgILmnJ3prq7lsIbmo4vjgajjgoLlkbzjgbDjgozjgovjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuODgeODo+ODs+OCrlwiLFxuXHRcdFwidXNlU3RhbmRcIjogZmFsc2UsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44OB44Oj44Oz44KuXCIsIFwicGllY2VTZXRcIjogXCJkZWZhdWx0XCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLjg4Hjg6Pjg7Pjgq5cIiwgXCJwaWVjZVNldFwiOiBcIjJwXCJ9XG5cdFx0XVxuXHR9LFxuXHRcIm1ha3J1a1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Oe44O844Kv44Or44OD44KvXCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi44Oe44O844Kv44Or44OD44KvXCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2phLndpa2lwZWRpYS5vcmcvd2lraS8lRTMlODMlOUUlRTMlODMlQkMlRTMlODIlQUYlRTMlODMlQUIlRTMlODMlODMlRTMlODIlQUZcIixcblx0XHRcImRlc2NcIjogXCLjgr/jgqTjga7lsIbmo4vpoZ7jgILjgr/jgqTlsIbmo4vjgajjgoLlkbzjgbDjgozjgovjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuODnuODvOOCr+ODq+ODg+OCr1wiLFxuXHRcdFwidXNlU3RhbmRcIjogZmFsc2UsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44Oe44O844Kv44Or44OD44KvXCIsIFwicGllY2VTZXRcIjogXCJkZWZhdWx0XCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLjg57jg7zjgq/jg6vjg4Pjgq9cIiwgXCJwaWVjZVNldFwiOiBcIjJwXCJ9XG5cdFx0XVxuXHR9LFxuXHRcImNoYXR1cmFuZ2FcIjoge1xuXHRcdFwibmFtZVwiOiBcIuODgeODo+ODiOODqeODs+OCrFwiLFxuXHRcdFwidmFyaWFudFwiOiBcIuODgeODo+ODiOODqeODs+OCrFwiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9qYS53aWtpcGVkaWEub3JnL3dpa2kvJUUzJTgzJTgxJUUzJTgzJUEzJUUzJTgzJTg4JUUzJTgzJUE5JUUzJTgzJUIzJUUzJTgyJUFDXCIsXG5cdFx0XCJkZXNjXCI6IFwi5Y6f5Yid44Gu5bCG5qOL6aGe44CC6Kmz57Sw44Gq44Or44O844Or44Gv5aSx44KP44KM44Gm44GE44KL44CCXCIsXG5cdFx0XCJwbGF5Qm9hcmRcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcInVzZVN0YW5kXCI6IGZhbHNlLFxuXHRcdFwicGxheVBpZWNlc1wiOiBbXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuODgeODo+ODiOODqeODs+OCrFwiLCBcInBpZWNlU2V0XCI6IFwiZGVmYXVsdFwifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44OB44Oj44OI44Op44Oz44KsXCIsIFwicGllY2VTZXRcIjogXCIycFwifVxuXHRcdF1cblx0fSxcblx0XCJkb2J1dHN1U2hvZ2lcIjoge1xuXHRcdFwibmFtZVwiOiBcIuOBqeOBhuOBtuOBpOOBl+OCh+OBhuOBjlwiLFxuXHRcdFwidmFyaWFudFwiOiBcIuOBqeOBhuOBtuOBpOOBl+OCh+OBhuOBjlwiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuc2lsdmVyc3Rhci5jby5qcC8wMnByb2R1Y3RzL2RvYnV0c3VzaG9naS9zd2l0Y2gvYW5pbWFsLmh0bWxcIixcblx0XHRcImRlc2NcIjogXCLlhaXploDnlKjjgajjgZfjgabogIPmoYjjgZXjgozjgZ/lsIbmo4vjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuOBqeOBhuOBtuOBpOOBl+OCh+OBhuOBjlwiLFxuXHRcdFwidXNlU3RhbmRcIjogdHJ1ZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLjganjgYbjgbbjgaTjgZfjgofjgYbjgY5cIiwgXCJwaWVjZVNldFwiOiBcImRlZmF1bHRcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuOBqeOBhuOBtuOBpOOBl+OCh+OBhuOBjlwiLCBcInBpZWNlU2V0XCI6IFwiZGVmYXVsdFwifVxuXHRcdF1cblx0fSxcblx0XCJ0b3JpU2hvZ2lcIjoge1xuXHRcdFwibmFtZVwiOiBcIuemveWwhuaji1wiLFxuXHRcdFwidmFyaWFudFwiOiBcIuemveWwhuaji1wiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9qYS53aWtpcGVkaWEub3JnL3dpa2kvJUU3JUE2JUJEJUU1JUIwJTg2JUU2JUEzJThCXCIsXG5cdFx0XCJkZXNjXCI6IFwi6bOl44Gu5ZCN44Gu6aeS44KS5L2/55So44GZ44KL5bCG5qOL44CC54m55q6K44Gq5YuV44GN44KS44GZ44KL6aeS44GM5aSa44GE44CCXCIsXG5cdFx0XCJwbGF5Qm9hcmRcIjogXCLlsIbmo4s3eDdcIixcblx0XHRcInVzZVN0YW5kXCI6IHRydWUsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLnpr3lsIbmo4tcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi56a95bCG5qOLXCJ9XG5cdFx0XVxuXHR9LFxuXHRcImNodVNob2dpXCI6IHtcblx0XHRcIm5hbWVcIjogXCLkuK3lsIbmo4tcIixcblx0XHRcInZhcmlhbnRcIjogXCLkuK3lsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNCVCOCVBRCVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIuePvuWcqOOBp+OCguODl+ODrOOCpOOBleOCjOOCi+OBk+OBqOOBruOBguOCi+WPpOWwhuaji+OBruS4gOeoruOAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5Y+k5bCG5qOLMTJ4MTJcIixcblx0XHRcInVzZVN0YW5kXCI6IGZhbHNlLFxuXHRcdFwicGxheVBpZWNlc1wiOiBbXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi5Lit5bCG5qOLXCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIuS4reWwhuajizJwXCJ9XG5cdFx0XVxuXHR9LFxuXHRcImdyYW50QWNlZHJleFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwiR3JhbnQgQWNlZHJleFwiLFxuXHRcdFwidmFyaWFudFwiOiBcIkdyYW50IEFjZWRyZXhcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vd3d3LmNoZXNzdmFyaWFudHMub3JnL3J1bGVzL2dyYW50YWNlZHJleFwiLFxuXHRcdFwiZGVzY1wiOiBcIuWPpOODgeOCp+OCueOBruS4gOeoruOAgueJueauiuOBquWLleOBjeOCkuOBmeOCi+mnkuOBjOWkmuOBhOOAguODl+ODreODouODvOOCt+ODp+ODs+WFiOOBr+acrOadpeOBr+aVtemZo+OBruWIsOedgOWIl+OBrumnkuOBqOOBquOCiyjmnKrlrp/oo4Up44CCXCIsXG5cdFx0XCJwbGF5Qm9hcmRcIjogXCLjg4HjgqfjgrkxMngxMlwiLFxuXHRcdFwidXNlU3RhbmRcIjogZmFsc2UsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsIFwicGllY2VTZXRcIjogXCJHcmFudEFjZWRyZXhcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLCBcInBpZWNlU2V0XCI6IFwiR3JhbnRBY2VkcmV4MnBcIn1cblx0XHRdXG5cdH0sXG5cdFwiY291cmllckNoZXNzQWR2YW5jZWRcIjoge1xuXHRcdFwibmFtZVwiOiBcIuOCr+ODvOODquOCqOODgeOCp+OCuSjlrprlvaLphY3nva4pXCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi44Kv44O844Oq44Ko44OB44Kn44K5KOWumuW9oumFjee9rilcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvdXJpZXJfY2hlc3NcIixcblx0XHRcImRlc2NcIjogXCLlj6Tjg4Hjgqfjgrnjga7kuIDnqK7jgILjg5Pjgrfjg6fjg4Pjg5fjgavnrYnjgZfjgYTotbDjgorpp5Io44Kv44O844Oq44KoKeOBjOWIneOCgeOBpuS9v+eUqOOBleOCjOOBn+OAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi44OB44Kn44K5MTJ4OFwiLFxuXHRcdFwidXNlU3RhbmRcIjogZmFsc2UsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsIFwicGllY2VTZXRcIjogXCLjgq/jg7zjg6rjgqjjg4Hjgqfjgrko5a6a5b2i6YWN572uKVwifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsIFwicGllY2VTZXRcIjogXCLjgq/jg7zjg6rjgqjjg4Hjgqfjgrko5a6a5b2i6YWN572uKTJwXCJ9XG5cdFx0XVxuXHR9LFxuXHRcImU1U2hvZ2lcIjoge1xuXHRcdFwibmFtZVwiOiBcIjXkupTlsIbmo4tcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLzUlRTQlQkElOTQlRTUlQjAlODYlRTYlQTMlOEJcIixcblx0XHRcImRlc2NcIjogXCLnsKHnlaXljJbjgZXjgozjgZ/lsIbmo4vjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuWwhuajizV4NVwiLFxuXHRcdFwidXNlU3RhbmRcIjogdHJ1ZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcImRlZmF1bHRcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwiMnBcIn1cblx0XHRdXG5cdH0sXG5cdFwiYXNha3VyYVNob2dpXCI6IHtcblx0XHRcIm5hbWVcIjogXCLmnJ3lgInosaHmo4tcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNSVCMCU4RiVFNSVCMCU4NiVFNiVBMyU4QiMlRTYlOUMlOUQlRTUlODAlODklRTglQjElQTElRTYlQTMlOEJcIixcblx0XHRcImRlc2NcIjogXCLmjIHjgaHpp5LjgYzkvb/nlKjjgafjgY3jgovlsI/lsIbmo4vjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuWwhuaji1wiLFxuXHRcdFwidXNlU3RhbmRcIjogdHJ1ZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIuWwj+Wwhuaji1wifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlsI/lsIbmo4sycFwifVxuXHRcdF1cblx0fSxcblx0XCJzaG9TaG9naVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5bCP5bCG5qOLXCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2phLndpa2lwZWRpYS5vcmcvd2lraS8lRTUlQjAlOEYlRTUlQjAlODYlRTYlQTMlOEJcIixcblx0XHRcImRlc2NcIjogXCLkuK3lsIbmo4vjgYvjgonpp5LjgpLlj5bjgorlhaXjgozjgabljp/ngrnlm57luLDjgZfjgZ/lubPlronlsIbmo4vjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuWwhuaji1wiLFxuXHRcdFwidXNlU3RhbmRcIjogZmFsc2UsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlsI/lsIbmo4tcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi5bCP5bCG5qOLMnBcIn1cblx0XHRdXG5cdH0sXG5cdFwiaGVpYW5TaG9naTh4OFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5bmz5a6J5bCG5qOLKDh4OClcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNSVCOSVCMyVFNSVBRSU4OSVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIuiomOmMsuOBjOaui+OCi+acgOWPpOOBruaXpeacrOOBruWwhuaji+OAguebpOOBruWkp+OBjeOBleOBq+e3kuiqrOOBguOCi+OAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5Y+k5bCG5qOLOHg4XCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiBmYWxzZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIuW5s+WuieWwhuaji1wifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlubPlronlsIbmo4tcIn1cblx0XHRdXG5cdH0sXG5cdFwiaGVpYW5TaG9naTl4OFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5bmz5a6J5bCG5qOLKDl4OClcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNSVCOSVCMyVFNSVBRSU4OSVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIjl4OOODnuOCueOBqOaDs+WumuOBl+OBn+aZguOBruW5s+WuieWwhuaji+OAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5Y+k5bCG5qOLOXg4XCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiBmYWxzZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIuW5s+WuieWwhuaji1wifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlubPlronlsIbmo4tcIn1cblx0XHRdXG5cdH0sXG5cdFwiaGVpYW5TaG9naTl4OVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5bmz5a6J5bCG5qOLKDl4OSlcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNSVCOSVCMyVFNSVBRSU4OSVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIjl4OeODnuOCueOBqOaDs+WumuOBl+OBn+aZguOBruW5s+WuieWwhuaji+OAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5Y+k5bCG5qOLOXg5XCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiBmYWxzZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIuW5s+WuieWwhuaji1wifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlubPlronlsIbmo4tcIn1cblx0XHRdXG5cdH0sXG5cdFwia3lvU2hvZ2lMZWZ0XCI6IHtcblx0XHRcIm5hbWVcIjogXCLkuqzlsIbmo4so5bem5Lqs6YWN572uKVwiLFxuXHRcdFwidmFyaWFudFwiOiBcIuWwhuaji1wiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9qYS53aWtpcGVkaWEub3JnL3dpa2kvJUU0JUJBJUFDJUU1JUIwJTg2JUU2JUEzJThCXCIsXG5cdFx0XCJkZXNjXCI6IFwi5Lqs57+U44Go6YqF5bCG44KS6L+95Yqg44GX44Gf5bCG5qOL44CC5bem5Y+z44Gu6YWN572u44GM5a2Y5Zyo44CCXCIsXG5cdFx0XCJwbGF5Qm9hcmRcIjogXCLlsIbmo4sxMHgxMFwiLFxuXHRcdFwidXNlU3RhbmRcIjogdHJ1ZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIuS6rOWwhuajiyjlt6bkuqzphY3nva4pXCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIuS6rOWwhuajiyjlt6bkuqzphY3nva4pMnBcIn1cblx0XHRdXG5cdH0sXG5cdFwia3lvU2hvZ2lSaWdodFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5Lqs5bCG5qOLKOWPs+S6rOmFjee9rilcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNCVCQSVBQyVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIuS6rOWwhuaji+OBruWPs+WBtOOBq+S6rOOCkue9ruOBj+ODkeOCv+ODvOODs+OAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5bCG5qOLMTB4MTBcIixcblx0XHRcInVzZVN0YW5kXCI6IHRydWUsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLkuqzlsIbmo4so5Y+z5Lqs6YWN572uKVwifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLkuqzlsIbmo4so5Y+z5Lqs6YWN572uKTJwXCJ9XG5cdFx0XVxuXHR9LFxuXHRcInNob0t5b1Nob2dpTGVmdFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5bCP5Lqs5bCG5qOLKOW3pue9ruaPmylcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNCVCQSVBQyVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIuahgummrOOCkuS6rOe/lOOBuOe9ruOBjeaPm+OBiOOBn+acrOWwhuaji+OAguW3puWPs+OBrumFjee9ruOBjOWtmOWcqOOAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiB0cnVlLFxuXHRcdFwicGxheVBpZWNlc1wiOiBbXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi5bCP5Lqs5bCG5qOLKOW3pue9ruaPmylcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi5bCP5Lqs5bCG5qOLKOW3pue9ruaPmykycFwifVxuXHRcdF1cblx0fSxcblx0XCJzaG9LeW9TaG9naVJpZ2h0XCI6IHtcblx0XHRcIm5hbWVcIjogXCLlsI/kuqzlsIbmo4so5Y+z572u5o+bKVwiLFxuXHRcdFwidmFyaWFudFwiOiBcIuWwhuaji1wiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9qYS53aWtpcGVkaWEub3JnL3dpa2kvJUU0JUJBJUFDJUU1JUIwJTg2JUU2JUEzJThCXCIsXG5cdFx0XCJkZXNjXCI6IFwi5bCP5Lqs5bCG5qOL44Gu5Y+z572u5o+b44OR44K/44O844Oz44CCXCIsXG5cdFx0XCJwbGF5Qm9hcmRcIjogXCLlsIbmo4tcIixcblx0XHRcInVzZVN0YW5kXCI6IHRydWUsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlsI/kuqzlsIbmo4so5Y+z572u5o+bKVwifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlsI/kuqzlsIbmo4so5Y+z572u5o+bKTJwXCJ9XG5cdFx0XVxuXHR9LFxuXHRcInNhbnNoYVNob2dpTGVmdFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5bGx6LuK5bCG5qOLKOW3pue9ruaPmylcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNCVCQSVBQyVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIummmei7iuOCkuWxsei7iuOBuOe9ruOBjeaPm+OBiOOBn+acrOWwhuaji+OAguW3puWPs+OBrumFjee9ruOBjOWtmOWcqOOAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiB0cnVlLFxuXHRcdFwicGxheVBpZWNlc1wiOiBbXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi5bGx6LuK5bCG5qOLKOW3pue9ruaPmylcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi5bGx6LuK5bCG5qOLKOW3pue9ruaPmykycFwifVxuXHRcdF1cblx0fSxcblx0XCJzYW5zaGFTaG9naVJpZ2h0XCI6IHtcblx0XHRcIm5hbWVcIjogXCLlsbHou4rlsIbmo4so5Y+z572u5o+bKVwiLFxuXHRcdFwidmFyaWFudFwiOiBcIuWwhuaji1wiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9qYS53aWtpcGVkaWEub3JnL3dpa2kvJUU0JUJBJUFDJUU1JUIwJTg2JUU2JUEzJThCXCIsXG5cdFx0XCJkZXNjXCI6IFwi5bGx6LuK5bCG5qOL44Gu5Y+z572u5o+b44OR44K/44O844Oz44CCXCIsXG5cdFx0XCJwbGF5Qm9hcmRcIjogXCLlsIbmo4tcIixcblx0XHRcInVzZVN0YW5kXCI6IHRydWUsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlsbHou4rlsIbmo4so5Y+z572u5o+bKVwifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlsbHou4rlsIbmo4so5Y+z572u5o+bKTJwXCJ9XG5cdFx0XVxuXHR9LFxuXHRcImRvU2hvZ2lMZWZ0XCI6IHtcblx0XHRcIm5hbWVcIjogXCLpioXlsIbmo4so5bem572u5o+bKVwiLFxuXHRcdFwidmFyaWFudFwiOiBcIuWwhuaji1wiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9qYS53aWtpcGVkaWEub3JnL3dpa2kvJUU0JUJBJUFDJUU1JUIwJTg2JUU2JUEzJThCXCIsXG5cdFx0XCJkZXNjXCI6IFwi6YqA5bCG44KS6YqF5bCG44G4572u44GN5o+b44GI44Gf5pys5bCG5qOL44CC5bem5Y+z44Gu6YWN572u44GM5a2Y5Zyo44CCXCIsXG5cdFx0XCJwbGF5Qm9hcmRcIjogXCLlsIbmo4tcIixcblx0XHRcInVzZVN0YW5kXCI6IHRydWUsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLpioXlsIbmo4so5bem572u5o+bKVwifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLpioXlsIbmo4so5bem572u5o+bKTJwXCJ9XG5cdFx0XVxuXHR9LFxuXHRcImRvU2hvZ2lSaWdodFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi6YqF5bCG5qOLKOWPs+e9ruaPmylcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNCVCQSVBQyVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIumKheWwhuaji+OBruWPs+e9ruaPm+ODkeOCv+ODvOODs+OAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiB0cnVlLFxuXHRcdFwicGxheVBpZWNlc1wiOiBbXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi6YqF5bCG5qOLKOWPs+e9ruaPmylcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi6YqF5bCG5qOLKOWPs+e9ruaPmykycFwifVxuXHRcdF1cblx0fSxcblx0XCJraW5zaGlTaG9naUxlZnRcIjoge1xuXHRcdFwibmFtZVwiOiBcIumHkee/heWwhuajiyjlt6bnva7mj5spXCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2phLndpa2lwZWRpYS5vcmcvd2lraS8lRTQlQkElQUMlRTUlQjAlODYlRTYlQTMlOEJcIixcblx0XHRcImRlc2NcIjogXCLph5HlsIbjgpLph5Hnv4Xjgbjnva7jgY3mj5vjgYjjgZ/mnKzlsIbmo4vjgILlt6blj7Pjga7phY3nva7jgYzlrZjlnKjjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuWwhuaji1wiLFxuXHRcdFwidXNlU3RhbmRcIjogdHJ1ZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIumHkee/heWwhuajiyjlt6bnva7mj5spXCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIumHkee/heWwhuajiyjlt6bnva7mj5spMnBcIn1cblx0XHRdXG5cdH0sXG5cdFwia2luc2hpU2hvZ2lSaWdodFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi6YeR57+F5bCG5qOLKOWPs+e9ruaPmylcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNCVCQSVBQyVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIumHkee/heWwhuaji+OBruWPs+e9ruaPm+ODkeOCv+ODvOODs+OAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiB0cnVlLFxuXHRcdFwicGxheVBpZWNlc1wiOiBbXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi6YeR57+F5bCG5qOLKOWPs+e9ruaPmylcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi6YeR57+F5bCG5qOLKOWPs+e9ruaPmykycFwifVxuXHRcdF1cblx0fSxcblx0XCJraW50b1Nob2dpTGVmdFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi6YeR5paX5bCG5qOLKOW3pue9ruaPmylcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNCVCQSVBQyVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIumHkeWwhuOCkumHkee/heOBuOe9ruOBjeaPm+OBiOOBn+acrOWwhuaji+OAguW3puWPs+OBrumFjee9ruOBjOWtmOWcqOOAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiB0cnVlLFxuXHRcdFwicGxheVBpZWNlc1wiOiBbXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi6YeR5paX5bCG5qOLKOW3pue9ruaPmylcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi6YeR5paX5bCG5qOLKOW3pue9ruaPmykycFwifVxuXHRcdF1cblx0fSxcblx0XCJraW50b1Nob2dpUmlnaHRcIjoge1xuXHRcdFwibmFtZVwiOiBcIumHkeaWl+Wwhuajiyjlj7Pnva7mj5spXCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2phLndpa2lwZWRpYS5vcmcvd2lraS8lRTQlQkElQUMlRTUlQjAlODYlRTYlQTMlOEJcIixcblx0XHRcImRlc2NcIjogXCLph5HmlpflsIbmo4vjga7lj7Pnva7mj5vjg5Hjgr/jg7zjg7PjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuWwhuaji1wiLFxuXHRcdFwidXNlU3RhbmRcIjogdHJ1ZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIumHkeaWl+Wwhuajiyjlj7Pnva7mj5spXCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIumHkeaWl+Wwhuajiyjlj7Pnva7mj5spMnBcIn1cblx0XHRdXG5cdH0sXG5cdFwic2hvZ2kzMEFsbExlZnRcIjoge1xuXHRcdFwibmFtZVwiOiBcIuWwhuajizMwKyso5bem57O744OV44Or572u5o+bKVwiLFxuXHRcdFwidmFyaWFudFwiOiBcIuWwhuaji1wiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9qYS53aWtpcGVkaWEub3JnL3dpa2kvJUU0JUJBJUFDJUU1JUIwJTg2JUU2JUEzJThCXCIsXG5cdFx0XCJkZXNjXCI6IFwi5Lqs5bCG5qOL57O744Gu6aeS44Gn6KSH5pWw572u5o+b44GX44Gf5pys5bCG5qOL44CC5bem5Y+z44Gu6YWN572u44GM5a2Y5Zyo44CCXCIsXG5cdFx0XCJwbGF5Qm9hcmRcIjogXCLlsIbmo4tcIixcblx0XHRcInVzZVN0YW5kXCI6IHRydWUsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlsIbmo4szMCsrKOW3puezu+ODleODq+e9ruaPmylcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi5bCG5qOLMzArKyjlt6bns7vjg5Xjg6vnva7mj5spMnBcIn1cblx0XHRdXG5cdH0sXG5cdFwic2hvZ2kzMEFsbFJpZ2h0XCI6IHtcblx0XHRcIm5hbWVcIjogXCLlsIbmo4szMCsrKOWPs+ezu+ODleODq+e9ruaPmylcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNCVCQSVBQyVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIuWwhuajizMwKyvjga7lj7Pnva7mj5vjg5Hjgr/jg7zjg7PjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuWwhuaji1wiLFxuXHRcdFwidXNlU3RhbmRcIjogdHJ1ZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIuWwhuajizMwKyso5Y+z57O744OV44Or572u5o+bKVwifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlsIbmo4szMCsrKOWPs+ezu+ODleODq+e9ruaPmykycFwifVxuXHRcdF1cblx0fSxcblx0XCJva2lzYWtpU2hvZ2lcIjoge1xuXHRcdFwibmFtZVwiOiBcIuW+oeWmg+Wwhuaji1wiLFxuXHRcdFwidmFyaWFudFwiOiBcIuWwhuaji1wiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvT2tpc2FraV9zaG9naVwiLFxuXHRcdFwiZGVzY1wiOiBcIuODgeOCp+OCueOBruimgee0oOOCkuWPluOCiuWFpeOCjOOBn+acrOWwhuaji+OAgummmei7iuOBr+aEj+Wbs+OBl+OBpuWPjei7iuOBqOOBl+OBpuihqOekuuOBl+OBn+OAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5bCG5qOLMTB4MTBcIixcblx0XHRcInVzZVN0YW5kXCI6IHRydWUsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlvqHlpoPlsIbmo4tcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLCBcInBpZWNlU2V0XCI6IFwi5b6h5aaD5bCG5qOLMnBcIn1cblx0XHRdXG5cdH0sXG5cdFwiY3JhenlIb3VzZVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Kv44Os44O844K444O844OP44Km44K5XCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi44OB44Kn44K5XCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2phLndpa2lwZWRpYS5vcmcvd2lraS8lRTMlODIlQUYlRTMlODMlQUMlRTMlODMlQkMlRTMlODIlQjglRTMlODMlQkMlRTMlODMlOEYlRTMlODIlQTYlRTMlODIlQjlcIixcblx0XHRcImRlc2NcIjogXCLmjIHjgaHpp5LjgYzkvb/nlKjjgafjgY3jgovjg4HjgqfjgrnjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuOCr+ODrOODvOOCuOODvOODj+OCpuOCuVwiLFxuXHRcdFwidXNlU3RhbmRcIjogdHJ1ZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIiwgXCJwaWVjZVNldFwiOiBcImRlZmF1bHRcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLCBcInBpZWNlU2V0XCI6IFwiMnBcIn1cblx0XHRdXG5cdH0sXG5cdFwibG9zQWxhbW9zQ2hlc3NcIjoge1xuXHRcdFwibmFtZVwiOiBcIuODreOCueOCouODqeODouOCueODgeOCp+OCuVwiLFxuXHRcdFwidmFyaWFudFwiOiBcIuODgeOCp+OCuVwiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTG9zX0FsYW1vc19jaGVzc1wiLFxuXHRcdFwiZGVzY1wiOiBcIuewoeeVpeWMluOBleOCjOOBn+ODgeOCp+OCueOAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi44OB44Kn44K5Nng2XCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiBmYWxzZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIiwgXCJwaWVjZVNldFwiOiBcImRlZmF1bHRcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLCBcInBpZWNlU2V0XCI6IFwiMnBcIn1cblx0XHRdXG5cdH0sXG5cdFwiY2FwYWJsYW5jYUNoZXNzXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgqvjg5Hjg5bjg6njg7Pjgqvjg4HjgqfjgrlcIixcblx0XHRcInZhcmlhbnRcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NhcGFibGFuY2FfY2hlc3NcIixcblx0XHRcImRlc2NcIjogXCLjg57jg7zjgrfjg6Pjg6so44Ko44Oz44OX44Os44K5KeOAgeOCq+ODvOODh+OCo+ODiuODqyjjg5fjg6rjg7Pjgrvjgrkp44KS6L+95Yqg44GX44Gf44OB44Kn44K544CCXCIsXG5cdFx0XCJwbGF5Qm9hcmRcIjogXCLjg4HjgqfjgrkxMHg4XCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiBmYWxzZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIiwgXCJwaWVjZVNldFwiOiBcIuOCq+ODkeODluODqeODs+OCq+ODgeOCp+OCuVwifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsIFwicGllY2VTZXRcIjogXCLjgqvjg5Hjg5bjg6njg7Pjgqvjg4HjgqfjgrkycFwifVxuXHRcdF1cblx0fSxcblx0XCJncmFuZENoZXNzXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgrDjg6njg7Pjg4njg4HjgqfjgrlcIixcblx0XHRcInZhcmlhbnRcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dyYW5kX0NoZXNzXCIsXG5cdFx0XCJkZXNjXCI6IFwi44Kr44OR44OW44Op44Oz44Kr44OB44Kn44K544Go5ZCM5qeY44Gu6aeS44KS5L2/55So44GZ44KL44GM6YWN572u44GM55Ww44Gq44KL44CCXCIsXG5cdFx0XCJwbGF5Qm9hcmRcIjogXCLjg4HjgqfjgrkxMHgxMFwiLFxuXHRcdFwidXNlU3RhbmRcIjogZmFsc2UsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsIFwicGllY2VTZXRcIjogXCLjgrDjg6njg7Pjg4njg4HjgqfjgrlcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLCBcInBpZWNlU2V0XCI6IFwi44Kw44Op44Oz44OJ44OB44Kn44K5MnBcIn1cblx0XHRdXG5cdH0sXG5cdFwiZ29yb2dvcm9Eb2J1dHN1U2hvZ2lcIjoge1xuXHRcdFwibmFtZVwiOiBcIuOBlOOCjeOBlOOCjeOBqeOBhuOBtuOBpOOBl+OCh+OBhuOBjlwiLFxuXHRcdFwidmFyaWFudFwiOiBcIuOBqeOBhuOBtuOBpOOBl+OCh+OBhuOBjlwiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuc2lsdmVyc3Rhci5jby5qcC8wMnByb2R1Y3RzL2RvYnV0c3VzaG9naS9zd2l0Y2gvZ29yb2dvcm8uaHRtbFwiLFxuXHRcdFwiZGVzY1wiOiBcIuOAjOOBjeOCiuOCk+OAjeOBqOOAjOOBnuOBhuOAjeOBruS7o+OCj+OCiuOBq+OAjOOBhOOBrOOAjSjph5HlsIYp44Go44CM44Gt44GT44CNKOmKgOWwhinjgpLov73liqDjgZfjgZ/jganjgYbjgbbjgaTjgZfjgofjgYbjgY7jgII1NjU25bCG5qOL44Gu44Gp44GG44G244Gk44GX44KH44GG44GO54mI44CCXCIsXG5cdFx0XCJwbGF5Qm9hcmRcIjogXCLjgZTjgo3jgZTjgo3jganjgYbjgbbjgaTjgZfjgofjgYbjgY5cIixcblx0XHRcInVzZVN0YW5kXCI6IHRydWUsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44Gp44GG44G244Gk44GX44KH44GG44GOXCIsIFwicGllY2VTZXRcIjogXCJkZWZhdWx0XCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLjganjgYbjgbbjgaTjgZfjgofjgYbjgY5cIiwgXCJwaWVjZVNldFwiOiBcImRlZmF1bHRcIn1cblx0XHRdXG5cdH0sXG5cdFwic2hpc2hpU2hvZ2lcIjoge1xuXHRcdFwibmFtZVwiOiBcIueNheWtkOWwhuaji1wiLFxuXHRcdFwidmFyaWFudFwiOiBcIuS4reWwhuaji1wiLFxuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZW1yT21FMVhoLXNSOHdBcFRPaWtFZ1hER1ZhQVlyck8vdmlld1wiLFxuXHRcdFwiZGVzY1wiOiBcIuS4reWwhuaji+OCkumBiuOBs+OChOOBmeOBj+OBmeOCi+OCiOOBhuiAg+ahiOOBleOCjOOBn+Wwhuaji+OBruS4gOeoruOAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwi5Y+k5bCG5qOLOXg5XCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiBmYWxzZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIueNheWtkOWwhuaji1wifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLnjYXlrZDlsIbmo4sycFwifVxuXHRcdF1cblx0fSxcblx0XCJoZWlzZWlTaG9naVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5bmz5oiQ5bCG5qOLXCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi5Lit5bCG5qOLXCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwOi8vYWthc2FrYTB4MTYuYmxvZy5mYzIuY29tL2Jsb2ctZW50cnktMTMwLmh0bWxcIixcblx0XHRcImRlc2NcIjogXCLkuK3lsIbmo4vjgpLpgYrjgbPjgoTjgZnjgY/jgZnjgovjgojjgYbogIPmoYjjgZXjgozjgZ/lsIbmo4vjga7kuIDnqK7jgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuWPpOWwhuajizEweDEwXCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiBmYWxzZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIuW5s+aIkOWwhuaji1wifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlubPmiJDlsIbmo4sycFwifVxuXHRcdF1cblx0fSxcblx0XCJkYWlTaG9naVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5aSn5bCG5qOLXCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi5Lit5bCG5qOLXCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2phLndpa2lwZWRpYS5vcmcvd2lraS8lRTUlQTQlQTclRTUlQjAlODYlRTYlQTMlOEJcIixcblx0XHRcImRlc2NcIjogXCLkuK3lsIbmo4vjga7npZblhYjjgajjgZXjgozjgovlj6TlsIbmo4vjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuWPpOWwhuajizE1eDE1XCIsXG5cdFx0XCJ1c2VTdGFuZFwiOiBmYWxzZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcIuWkp+Wwhuaji1wifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsIFwicGllY2VTZXRcIjogXCLlpKflsIbmo4sycFwifVxuXHRcdF1cblx0fSxcblx0XCJjb3VyaWVyQ2hlc3NcIjoge1xuXHRcdFwibmFtZVwiOiBcIuOCr+ODvOODquOCqOODgeOCp+OCuSjliJ3mnJ/phY3nva4pXCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi44Kv44O844Oq44Ko44OB44Kn44K5KOWumuW9oumFjee9rilcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvdXJpZXJfY2hlc3NcIixcblx0XHRcImRlc2NcIjogXCLjgq/jg7zjg6rjgqjjg4Hjgqfjgrnjga7lrprlvaLnp7vli5XjgpLooYzjgo/jgarjgYTphY3nva7jgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuODgeOCp+OCuTEyeDhcIixcblx0XHRcInVzZVN0YW5kXCI6IGZhbHNlLFxuXHRcdFwicGxheVBpZWNlc1wiOiBbXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLCBcInBpZWNlU2V0XCI6IFwi44Kv44O844Oq44Ko44OB44Kn44K5KOWIneacn+mFjee9rilcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLCBcInBpZWNlU2V0XCI6IFwi44Kv44O844Oq44Ko44OB44Kn44K5KOWIneacn+mFjee9rikycFwifVxuXHRcdF1cblx0fSxcblx0XCJwNFNob2dpXCI6IHtcblx0XHRcIm5hbWVcIjogXCLlm5vkurrlsIbmo4tcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNSU5QiU5QiVFNCVCQSVCQSVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIjTkurrnlKjjga7lsIbmo4vjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuWwhuaji1wiLFxuXHRcdFwidXNlU3RhbmRcIjogdHJ1ZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcInA0XCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcInA0XCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcInA0XCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcInA0XCJ9XG5cdFx0XVxuXHR9LFxuXHRcInA0Q2hlc3NcIjoge1xuXHRcdFwibmFtZVwiOiBcIjTkurrjg4HjgqfjgrlcIixcblx0XHRcInZhcmlhbnRcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0ZvdXItcGxheWVyX2NoZXNzXCIsXG5cdFx0XCJkZXNjXCI6IFwiNOS6uueUqOOBruODgeOCp+OCueOAglwiLFxuXHRcdFwicGxheUJvYXJkXCI6IFwiNOS6uuODgeOCp+OCuVwiLFxuXHRcdFwidXNlU3RhbmRcIjogZmFsc2UsXG5cdFx0XCJwbGF5UGllY2VzXCI6IFtcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsIFwicGllY2VTZXRcIjogXCJwNFwifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsIFwicGllY2VTZXRcIjogXCJwNFwifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsIFwicGllY2VTZXRcIjogXCJwNFwifSxcblx0XHRcdHtcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsIFwicGllY2VTZXRcIjogXCJwNFwifVxuXHRcdF1cblx0fSxcblx0XCJnNFNob2dpXCI6IHtcblx0XHRcIm5hbWVcIjogXCLlm5vnpZ7lsIbmo4tcIixcblx0XHRcInZhcmlhbnRcIjogXCLlsIbmo4tcIixcblx0XHRcInVybFwiOiBcImh0dHBzOi8vamEud2lraXBlZGlhLm9yZy93aWtpLyVFNSU5QiU5QiVFNyVBNSU5RSVFNSVCMCU4NiVFNiVBMyU4QlwiLFxuXHRcdFwiZGVzY1wiOiBcIuODhuODrOODk+eUqOOBruS8geeUu+OBqOOBl+OBpuiAg+ahiOOBleOCjOOBnzTkurrnlKjjga7lsIbmo4vjgIJcIixcblx0XHRcInBsYXlCb2FyZFwiOiBcIuWbm+elnuWwhuaji1wiLFxuXHRcdFwidXNlU3RhbmRcIjogdHJ1ZSxcblx0XHRcInBsYXlQaWVjZXNcIjogW1xuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcInA0XCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcInA0XCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcInA0XCJ9LFxuXHRcdFx0e1wiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIiwgXCJwaWVjZVNldFwiOiBcInA0XCJ9XG5cdFx0XVxuXHR9LFxuXHRcImNoYXR1cmFqaVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OB44Oj44OI44Op44K4XCIsXG5cdFx0XCJ2YXJpYW50XCI6IFwi44OB44Oj44OI44Op44Oz44KsXCIsXG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2phLndpa2lwZWRpYS5vcmcvd2lraS8lRTMlODMlODElRTMlODMlQTMlRTMlODMlODglRTMlODMlQTklRTMlODIlQjhcIixcblx0XHRcImRlc2NcIjogXCLjg4Hjg6Pjg4jjg6njg7Pjgqzjga405Lq655So44Gu44OQ44Oq44Ko44O844K344On44Oz44CC44OA44Kk44K544Gn5YuV44GL44GZ6aeS44KS5rG644KB44Gm44GE44Gf44CCXCIsXG5cdFx0XCJwbGF5Qm9hcmRcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcInVzZVN0YW5kXCI6IGZhbHNlLFxuXHRcdFwicGxheVBpZWNlc1wiOiBbXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuODgeODo+ODiOODqeODs+OCrFwiLCBcInBpZWNlU2V0XCI6IFwicDRcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuODgeODo+ODiOODqeODs+OCrFwiLCBcInBpZWNlU2V0XCI6IFwicDRcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuODgeODo+ODiOODqeODs+OCrFwiLCBcInBpZWNlU2V0XCI6IFwicDRcIn0sXG5cdFx0XHR7XCJnYW1lTmFtZVwiOiBcIuODgeODo+ODiOODqeODs+OCrFwiLCBcInBpZWNlU2V0XCI6IFwicDRcIn1cblx0XHRdXG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcblx0XCLlsIbmo4tcIjoge1xuXHRcdFwiZW5nbGlzaFwiOiBcIlNob2dpXCIsXG5cdFx0XCJmb250Q29sb3JcIjogXCIjMDAwMDAwXCIsXG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZEREFBXCIsXG5cdFx0XCJwcm9tb0xpbmVcIjogMyxcblx0XHRcInBvc2l0aW9uXCI6IHtcblx0XHRcdFwiNVwiOiB7XG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBbXG5cdFx0XHRcdFx0XCLmranjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIueOiemHkemKgOinkumjm1wiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiMnBcIjogW1xuXHRcdFx0XHRcdFwi5q2p44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLnmofph5HpioDop5Lpo5tcIlxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCI3XCI6IHtcblx0XHRcdFx0XCLnpr3lsIbmo4tcIjogW1xuXHRcdFx0XHRcdFwi44O744O744O744O754eV44O744O7XCIsXG5cdFx0XHRcdFx0XCLnh5Xnh5Xnh5Xnh5Xnh5Xnh5Xnh5VcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+m3ueODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi6baJ6ZuJ6ba06bWs6ba06ZuJ5LqrXCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiOFwiOiB7XG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+ODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5qGC6YqA546J6YeR6YqA5qGC6aaZXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCIycFwiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+ODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5qGC6YqA55qH6YeR6YqA5qGC6aaZXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLlubPlronlsIbmo4tcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIummmeahgumKgOeOiemHkemKgOahgummmVwiXG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcIjlcIjoge1xuXHRcdFx0XHRcImRlZmF1bHRcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7tcIixcblx0XHRcdFx0XHRcIummmeahgumKgOmHkeeOiemHkemKgOahgummmVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiMnBcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7tcIixcblx0XHRcdFx0XHRcIummmeahgumKgOmHkeeah+mHkemKgOahgummmVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5bCP5Lqs5bCG5qOLKOW3pue9ruaPmylcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7tcIixcblx0XHRcdFx0XHRcIummmeS6rOmKgOmHkeeOiemHkemKgOahgummmVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5bCP5Lqs5bCG5qOLKOW3pue9ruaPmykycFwiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+ODu+ODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5Lqs6YqA6YeR55qH6YeR6YqA5qGC6aaZXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLlsI/kuqzlsIbmo4so5Y+z572u5o+bKVwiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+ODu+ODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5qGC6YqA6YeR546J6YeR6YqA5Lqs6aaZXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLlsI/kuqzlsIbmo4so5Y+z572u5o+bKTJwXCI6IFtcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi44O76KeS44O744O744O744O744O76aOb44O7XCIsXG5cdFx0XHRcdFx0XCLpppnmoYLpioDph5Hnmofph5HpioDkuqzppplcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuWxsei7iuWwhuajiyjlt6bnva7mj5spXCI6IFtcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi44O76KeS44O744O744O744O744O76aOb44O7XCIsXG5cdFx0XHRcdFx0XCLlsbHmoYLpioDph5Hnjonph5HpioDmoYLppplcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuWxsei7iuWwhuajiyjlt6bnva7mj5spMnBcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7tcIixcblx0XHRcdFx0XHRcIuWxseahgumKgOmHkeeah+mHkemKgOahgummmVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5bGx6LuK5bCG5qOLKOWPs+e9ruaPmylcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7tcIixcblx0XHRcdFx0XHRcIummmeahgumKgOmHkeeOiemHkemKgOahguWxsVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5bGx6LuK5bCG5qOLKOWPs+e9ruaPmykycFwiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+ODu+ODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5qGC6YqA6YeR55qH6YeR6YqA5qGC5bGxXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLpioXlsIbmo4so5bem572u5o+bKVwiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+ODu+ODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5qGC6YqF6YeR546J6YeR6YqA5qGC6aaZXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLpioXlsIbmo4so5bem572u5o+bKTJwXCI6IFtcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi44O76KeS44O744O744O744O744O76aOb44O7XCIsXG5cdFx0XHRcdFx0XCLpppnmoYLpioXph5Hnmofph5HpioDmoYLppplcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIumKheWwhuajiyjlj7Pnva7mj5spXCI6IFtcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi44O76KeS44O744O744O744O744O76aOb44O7XCIsXG5cdFx0XHRcdFx0XCLpppnmoYLpioDph5Hnjonph5HpioXmoYLppplcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIumKheWwhuajiyjlj7Pnva7mj5spMnBcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7tcIixcblx0XHRcdFx0XHRcIummmeahgumKgOmHkeeah+mHkemKheahgummmVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi6YeR57+F5bCG5qOLKOW3pue9ruaPmylcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7tcIixcblx0XHRcdFx0XHRcIummmeahgumKgOe/heeOiemHkemKgOahgummmVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi6YeR57+F5bCG5qOLKOW3pue9ruaPmykycFwiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+ODu+ODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5qGC6YqA57+F55qH6YeR6YqA5qGC6aaZXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLph5Hnv4XlsIbmo4so5Y+z572u5o+bKVwiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+ODu+ODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5qGC6YqA6YeR546J57+F6YqA5qGC6aaZXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLph5Hnv4XlsIbmo4so5Y+z572u5o+bKTJwXCI6IFtcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi44O76KeS44O744O744O744O744O76aOb44O7XCIsXG5cdFx0XHRcdFx0XCLpppnmoYLpioDph5Hnmofnv4XpioDmoYLppplcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIumHkeaWl+Wwhuajiyjlt6bnva7mj5spXCI6IFtcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi44O76KeS44O744O744O744O744O76aOb44O7XCIsXG5cdFx0XHRcdFx0XCLpppnmoYLpioDmlpfnjonph5HpioDmoYLppplcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIumHkeaWl+Wwhuajiyjlt6bnva7mj5spMnBcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7tcIixcblx0XHRcdFx0XHRcIummmeahgumKgOaWl+eah+mHkemKgOahgummmVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi6YeR5paX5bCG5qOLKOWPs+e9ruaPmylcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7tcIixcblx0XHRcdFx0XHRcIummmeahgumKgOmHkeeOieaWl+mKgOahgummmVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi6YeR5paX5bCG5qOLKOWPs+e9ruaPmykycFwiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+ODu+ODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5qGC6YqA6YeR55qH5paX6YqA5qGC6aaZXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLlsIbmo4szMCsrKOW3puezu+ODleODq+e9ruaPmylcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7tcIixcblx0XHRcdFx0XHRcIuWxseS6rOmKhee/heeOiemHkemKgOahgummmVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5bCG5qOLMzArKyjlt6bns7vjg5Xjg6vnva7mj5spMnBcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7tcIixcblx0XHRcdFx0XHRcIuWxseS6rOmKhee/heeah+mHkemKgOahgummmVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5bCG5qOLMzArKyjlj7Pns7vjg5Xjg6vnva7mj5spXCI6IFtcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi44O76KeS44O744O744O744O744O76aOb44O7XCIsXG5cdFx0XHRcdFx0XCLpppnmoYLpioDph5Hnjonnv4XpioXkuqzlsbFcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuWwhuajizMwKyso5Y+z57O744OV44Or572u5o+bKTJwXCI6IFtcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi44O76KeS44O744O744O744O744O76aOb44O7XCIsXG5cdFx0XHRcdFx0XCLpppnmoYLpioDph5Hnmofnv4XpioXkuqzlsbFcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuWwj+Wwhuaji1wiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+mGieODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5qGC6YqA6YeR546J6YeR6YqA5qGC6aaZXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLlsI/lsIbmo4sycFwiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+mGieODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5qGC6YqA6YeR55qH6YeR6YqA5qGC6aaZXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLnjYXlrZDlsIbmo4tcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vnorzjg7vnjYXphonlpZTjg7vnq5zjg7tcIixcblx0XHRcdFx0XHRcIummqOm6kuiJrumHoeeOiemHoeiJrumzs+mmqFwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi542F5a2Q5bCG5qOLMnBcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vnorzjg7vnjYXphonlpZTjg7vnq5zjg7tcIixcblx0XHRcdFx0XHRcIummqOm6kuiJrumHoeeah+mHoeiJrumzs+mmqFwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi56a95bCG5qOLXCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+ODu+ODu+eHleODu+ODu1wiLFxuXHRcdFx0XHRcdFwi54eV54eV54eV54eV54eV54eV54eV54eV54eVXCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vpt7njg7vpt7njg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIum2iembiem2tOODu+m1rOODu+m2tOmbieS6q1wiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwicDRcIjogW1xuXHRcdFx0XHRcdFwi44O744O744O744O75q2p44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vmranpo5vmranjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+mKgOmHkeeOiemHkemKgOODu+ODu1wiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5bmz5a6J5bCG5qOLXCI6IFtcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi44O744O744O744O744O744O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLpppnmoYLpioDph5Hnjonph5HpioDmoYLppplcIlxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCIxMFwiOiB7XG5cdFx0XHRcdFwi5Lqs5bCG5qOLKOW3puS6rOmFjee9rilcIjogW1xuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLjg7vop5Ljg7vjg7vjg7vpioXjg7vjg7vpo5vjg7tcIixcblx0XHRcdFx0XHRcIummmeahguS6rOmKgOmHkeeOiemHkemKgOahgummmVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5Lqs5bCG5qOLKOW3puS6rOmFjee9rikycFwiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+ODu+mKheODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5qGC5Lqs6YqA6YeR55qH6YeR6YqA5qGC6aaZXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLkuqzlsIbmo4so5Y+z5Lqs6YWN572uKVwiOiBbXG5cdFx0XHRcdFx0XCLmranmranmranmranmranmranmranmranmranmralcIixcblx0XHRcdFx0XHRcIuODu+inkuODu+ODu+mKheODu+ODu+ODu+mjm+ODu1wiLFxuXHRcdFx0XHRcdFwi6aaZ5qGC6YqA6YeR546J6YeR6YqA5Lqs5qGC6aaZXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLkuqzlsIbmo4so5Y+z5Lqs6YWN572uKTJwXCI6IFtcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi44O76KeS44O744O76YqF44O744O744O76aOb44O7XCIsXG5cdFx0XHRcdFx0XCLpppnmoYLpioDph5Hnmofph5HpioDkuqzmoYLppplcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuW5s+aIkOWwhuaji1wiOiBbXG5cdFx0XHRcdFx0XCLjg7vjg7vku7Ljg7vjg7vjg7vjg7vku7Ljg7vjg7tcIixcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi5qiq6aOb6KeS44O7542F5aWU44O76KeS6aOb5qiqXCIsXG5cdFx0XHRcdFx0XCLnq6rpupLoia7ph6Hnjonphonph6Hoia7ps7Pnq6pcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuW5s+aIkOWwhuajizJwXCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+S7suODu+ODu+ODu+ODu+S7suODu+ODu1wiLFxuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLmqKrpo5vop5Ljg7vnjYXlpZTjg7vop5Lpo5vmqKpcIixcblx0XHRcdFx0XHRcIuerqum6kuiJrumHoeeah+mGiemHoeiJrumzs+erqlwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5b6h5aaD5bCG5qOLXCI6IFtcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi44O76KeS44O744O744O744O744O744O76aOb44O7XCIsXG5cdFx0XHRcdFx0XCLov5Tot7PpioDph5HlpbPnjonph5HpioDot7Pov5RcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuW+oeWmg+WwhuajizJwXCI6IFtcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi44O76KeS44O744O744O744O744O744O76aOb44O7XCIsXG5cdFx0XHRcdFx0XCLov5Tot7PpioDph5HlpbPnmofph5HpioDot7Pov5RcIlxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCIxMlwiOiB7XG5cdFx0XHRcdFwi5Lit5bCG5qOLXCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+S7suODu+ODu+ODu+ODu+S7suODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLmqKrnq6rpo5vnorznq5znjYXlpZTnq5znorzpo5vnq6rmqKpcIixcblx0XHRcdFx0XHRcIuWPjeODu+inkuODu+iZjum6kumzs+iZjuODu+inkuODu+WPjVwiLFxuXHRcdFx0XHRcdFwi6aao54yb5ZCM6Imu6Yeh546J6YaJ6Yeh6Imu5ZCM54yb6aaoXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLkuK3lsIbmo4sycFwiOiBbXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vku7Ljg7vjg7vjg7vjg7vku7Ljg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuatqeatqeatqeatqeatqeatqeatqeatqeatqeatqeatqeatqVwiLFxuXHRcdFx0XHRcdFwi5qiq56uq6aOb56K856uc542F5aWU56uc56K86aOb56uq5qiqXCIsXG5cdFx0XHRcdFx0XCLlj43jg7vop5Ljg7vomY7pupLps7PomY7jg7vop5Ljg7vlj41cIixcblx0XHRcdFx0XHRcIummqOeMm+WQjOiJrumHoeeah+mGiemHoeiJruWQjOeMm+mmqFwiXG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcIjE0XCI6IHtcblx0XHRcdFx0XCJwNFwiOiBbXG5cblx0XHRcdFx0XHRcIuODu+ODu+ODu+atqeatqeatqeatqeatqeatqeatqeatqeODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O76KeS44O744O744O744O76aOb44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vpppnmoYLpioDnjonph5HpioDmoYLpppnjg7vjg7vjg7tcIlxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCIxNVwiOiB7XG5cdFx0XHRcdFwicDRcIjogW1xuXHRcdFx0XHRcdFwi44O744O744O75q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p44O744O744O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+mmmeahgumKgOmHkeeOiemHkemKgOahgummmeODu+ODu+ODu1wiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5aSn5bCG5qOLXCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+S7suODu+ODu+ODu+ODu+ODu+S7suODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLpo5vngKfmqKrnq6rop5Lnorznq5zlpZTnq5znorzop5Lnq6rmqKrngKfpo5tcIixcblx0XHRcdFx0XHRcIuODu+S4keODu+WXlOODu+eLvOm6kueNhemzs+eLvOODu+WXlOODu+S4keODu1wiLFxuXHRcdFx0XHRcdFwi5Y+N44O754yr44O754yb44O76JmO6YaJ6JmO44O754yb44O754yr44O75Y+NXCIsXG5cdFx0XHRcdFx0XCLppqjmoYLnn7PpiYTlkIzoia7ph6Hnjonph6Hoia7lkIzpiYTnn7PmoYLppqhcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuWkp+WwhuajizJwXCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+S7suODu+ODu+ODu+ODu+ODu+S7suODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2pXCIsXG5cdFx0XHRcdFx0XCLpo5vngKfmqKrnq6rop5Lnorznq5zlpZTnq5znorzop5Lnq6rmqKrngKfpo5tcIixcblx0XHRcdFx0XHRcIuODu+S4keODu+WXlOODu+eLvOm6kueNhemzs+eLvOODu+WXlOODu+S4keODu1wiLFxuXHRcdFx0XHRcdFwi5Y+N44O754yr44O754yb44O76JmO6YaJ6JmO44O754yb44O754yr44O75Y+NXCIsXG5cdFx0XHRcdFx0XCLppqjmoYLnn7PpiYTlkIzoia7ph6Hnmofph6Hoia7lkIzpiYTnn7PmoYLppqhcIlxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCIxN1wiOiB7XG5cdFx0XHRcdFwicDRcIjogW1xuXHRcdFx0XHRcdFwi44O744O744O744O75q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p5q2p44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vop5Ljg7vjg7vjg7vjg7vjg7vpo5vjg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+mmmeahgumKgOmHkeeOiemHkemKgOahgummmeODu+ODu+ODu+ODu1wiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdFwi44OB44Kn44K5XCI6IHtcblx0XHRcImVuZ2xpc2hcIjogXCJDaGVzc1wiLFxuXHRcdFwiZm9udENvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwMDAwMFwiLFxuXHRcdFwicHJvbW9MaW5lXCI6IDEsXG5cdFx0XCJwb3NpdGlvblwiOiB7XG5cdFx0XHRcIjZcIjoge1xuXHRcdFx0XHRcImRlZmF1bHRcIjogW1xuXHRcdFx0XHRcdFwi5LiY5LiY5LiY5LiY5LiY5LiYXCIsXG5cdFx0XHRcdFx0XCLloZTpqI7lkI7njovpqI7loZRcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIjJwXCI6IFtcblx0XHRcdFx0XHRcIuS4mOS4mOS4mOS4mOS4mOS4mFwiLFxuXHRcdFx0XHRcdFwi5aGU6aiO5bid5ZCO6aiO5aGUXCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiOFwiOiB7XG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBbXG5cdFx0XHRcdFx0XCLlhbXlhbXlhbXlhbXlhbXlhbXlhbXlhbVcIixcblx0XHRcdFx0XHRcIuWhlOmojuiBluWQjueOi+iBlumojuWhlFwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiMnBcIjogW1xuXHRcdFx0XHRcdFwi5YW15YW15YW15YW15YW15YW15YW15YW1XCIsXG5cdFx0XHRcdFx0XCLloZTpqI7ogZbluJ3lkI7ogZbpqI7loZRcIlxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCI5XCI6IHtcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFtcblx0XHRcdFx0XHRcIuWFteWFteWFteWFteWFteWFteWFteWFteWFtVwiLFxuXHRcdFx0XHRcdFwi5aGU6aiO6IGW5ZCO44O7546L6IGW6aiO5aGUXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCIycFwiOiBbXG5cdFx0XHRcdFx0XCLlhbXlhbXlhbXlhbXlhbXlhbXlhbXlhbXlhbVcIixcblx0XHRcdFx0XHRcIuWhlOmojuiBluW4neODu+WQjuiBlumojuWhlFwiXG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcIjEwXCI6IHtcblx0XHRcdFx0XCLjgqvjg5Hjg5bjg6njg7Pjgqvjg4HjgqfjgrlcIjogW1xuXHRcdFx0XHRcdFwi5rWc5rWc5rWc5rWc5rWc5rWc5rWc5rWc5rWc5rWcXCIsXG5cdFx0XHRcdFx0XCLloZTpqI7pp67ogZblkI7lm73ogZbpp4bpqI7loZRcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuOCq+ODkeODluODqeODs+OCq+ODgeOCp+OCuTJwXCI6IFtcblx0XHRcdFx0XHRcIua1nOa1nOa1nOa1nOa1nOa1nOa1nOa1nOa1nOa1nFwiLFxuXHRcdFx0XHRcdFwi5aGU6aiO6aeG6IGW5ZyL5ZCO6IGW6aeu6aiO5aGUXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLjgrDjg6njg7Pjg4njg4HjgqfjgrlcIjogW1xuXHRcdFx0XHRcdFwi5rWc5rWc5rWc5rWc5rWc5rWc5rWc5rWc5rWc5rWcXCIsXG5cdFx0XHRcdFx0XCLjg7vpqI7ogZblkI7njovpp4bpp67ogZbpqI7jg7tcIixcblx0XHRcdFx0XHRcIuWhlOODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+WhlFwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi44Kw44Op44Oz44OJ44OB44Kn44K5MnBcIjogW1xuXHRcdFx0XHRcdFwi5rWc5rWc5rWc5rWc5rWc5rWc5rWc5rWc5rWc5rWcXCIsXG5cdFx0XHRcdFx0XCLjg7vpqI7ogZbpp67pp4bluJ3lkI7ogZbpqI7jg7tcIixcblx0XHRcdFx0XHRcIuWhlOODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+WhlFwiXG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcIjEyXCI6IHtcblx0XHRcdFx0XCJHcmFudEFjZWRyZXhcIjogW1xuXHRcdFx0XHRcdFwi5qK55qK55qK55qK55qK55qK55qK55qK55qK55qK55qK55qK5XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi56Cm5bir54qA6bqf6bCQ6bS75ZGI6bCQ6bqf54qA5bir56CmXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJHcmFudEFjZWRyZXgycFwiOiBbXG5cdFx0XHRcdFx0XCLmornmornmornmornmornmornmornmornmornmornmornmorlcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O744O744O744O744O744O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLnoKbluKvnioDpup/psJDpgJ7ptLvpsJDpup/nioDluKvnoKZcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuOCr+ODvOODquOCqOODgeOCp+OCuSjliJ3mnJ/phY3nva4pXCI6IFtcblx0XHRcdFx0XHRcIumLsumLsumLsumLsumLsumLsumLsumLsumLsumLsumLsumLslwiLFxuXHRcdFx0XHRcdFwi56Cm6aiO5bCE5L2/6LOi6ZaP5aa+5L2v5L2/5bCE6aiO56CmXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLjgq/jg7zjg6rjgqjjg4Hjgqfjgrko5Yid5pyf6YWN572uKTJwXCI6IFtcblx0XHRcdFx0XHRcIumLsumLsumLsumLsumLsumLsumLsumLsumLsumLsumLsumLslwiLFxuXHRcdFx0XHRcdFwi56Cm6aiO5bCE5L2/5L2v5aa+5r2k6LOi5L2/5bCE6aiO56CmXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLjgq/jg7zjg6rjgqjjg4Hjgqfjgrko5a6a5b2i6YWN572uKVwiOiBbXG5cdFx0XHRcdFx0XCLpi7Ljg7vjg7vjg7vjg7vjg7vpi7Ljg7vjg7vjg7vjg7vpi7JcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+ODu+ODu+WmvuODu+ODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O76Yuy6Yuy6Yuy6Yuy6Yuy44O76Yuy6Yuy6Yuy6Yuy44O7XCIsXG5cdFx0XHRcdFx0XCLnoKbpqI7lsITkvb/os6Lplo/jg7vkva/kvb/lsITpqI7noKZcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuOCr+ODvOODquOCqOODgeOCp+OCuSjlrprlvaLphY3nva4pMnBcIjogW1xuXHRcdFx0XHRcdFwi6Yuy44O744O744O744O76Yuy44O744O744O744O744O76YuyXCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vlpr7jg7vjg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuODu+mLsumLsumLsumLsuODu+mLsumLsumLsumLsumLsuODu1wiLFxuXHRcdFx0XHRcdFwi56Cm6aiO5bCE5L2/5L2v44O75r2k6LOi5L2/5bCE6aiO56CmXCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiMTRcIjoge1xuXHRcdFx0XHRcInA0XCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+WFteWFteWFteWFteWFteWFteWFteWFteODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O75aGU6aiO6IGW5ZCO546L6IGW6aiO5aGU44O744O744O7XCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiMTVcIjoge1xuXHRcdFx0XHRcInA0XCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+WFteWFteWFteWFteWFteWFteWFteWFteWFteODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O75aGU6aiO6IGW5ZCO44O7546L6IGW6aiO5aGU44O744O744O7XCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiMTdcIjoge1xuXHRcdFx0XHRcInA0XCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+WFteWFteWFteWFteWFteWFteWFteWFteWFteODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O75aGU6aiO6IGW5ZCO44O7546L6IGW6aiO5aGU44O744O744O744O7XCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0XCLjgrfjg6Pjg7Pjg4Hjg7xcIjoge1xuXHRcdFwiZW5nbGlzaFwiOiBcIlhpYW5ncWlcIixcblx0XHRcImZvbnRDb2xvclwiOiBcIiNCQjExMDBcIixcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkRENzdcIixcblx0XHRcInByb21vTGluZVwiOiA0LFxuXHRcdFwicG9zaXRpb25cIjoge1xuXHRcdFx0XCI4XCI6IHtcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFtcblx0XHRcdFx0XHRcIuWNkuODu+WNkuWNkuODu+WNkuODu+WNklwiLFxuXHRcdFx0XHRcdFwi44O754Ku44O744O744O744O754Ku44O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuS/pemmruebuOW4peS7leebuOmmruS/pVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiMnBcIjogW1xuXHRcdFx0XHRcdFwi5Y2S44O75Y2S44O75Y2S5Y2S44O75Y2SXCIsXG5cdFx0XHRcdFx0XCLjg7vngq7jg7vjg7vjg7vjg7vngq7jg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi5L+l6aau55u45LuV5bCH55u46aau5L+lXCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiOVwiOiB7XG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBbXG5cdFx0XHRcdFx0XCLljZLjg7vljZLjg7vljZLjg7vljZLjg7vljZJcIixcblx0XHRcdFx0XHRcIuODu+eCruODu+ODu+ODu+ODu+ODu+eCruODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O744O744O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLkv6Xppq7nm7jku5XluKXku5Xnm7jppq7kv6VcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIjJwXCI6IFtcblx0XHRcdFx0XHRcIuWNkuODu+WNkuODu+WNkuODu+WNkuODu+WNklwiLFxuXHRcdFx0XHRcdFwi44O754Ku44O744O744O744O744O754Ku44O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuS/pemmruebuOS7leWwh+S7leebuOmmruS/pVwiXG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcIjE0XCI6IHtcblx0XHRcdFx0XCJwNFwiOiBbXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vljZLjg7vljZLljZLjg7vljZLjg7vljZLjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+eCruODu+ODu+ODu+ODu+eCruODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O75L+l55u46aau5bil5LuV6aau55u45L+l44O744O744O7XCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiMTVcIjoge1xuXHRcdFx0XHRcInA0XCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+WNkuODu+WNkuODu+WNkuODu+WNkuODu+WNkuODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O754Ku44O744O744O744O744O754Ku44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vkv6Xnm7jppq7ku5XluKXku5Xppq7nm7jkv6Xjg7vjg7vjg7tcIlxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCIxN1wiOiB7XG5cdFx0XHRcdFwicDRcIjogW1xuXHRcdFx0XHRcdFwi44O744O744O744O75Y2S44O75Y2S44O75Y2S44O75Y2S44O75Y2S44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vngq7jg7vjg7vjg7vjg7vjg7vngq7jg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O75L+l6aau55u45LuV5bil5LuV55u46aau5L+l44O744O744O744O7XCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0XCLjg4Hjg6Pjg7Pjgq5cIjoge1xuXHRcdFwiZW5nbGlzaFwiOiBcIkphbmdnaVwiLFxuXHRcdFwiZm9udENvbG9yXCI6IFwiIzAwODgwMFwiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuXHRcdFwicG9zaXRpb25cIjoge1xuXHRcdFx0XCI4XCI6IHtcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFtcblx0XHRcdFx0XHRcIuWNhuODu+WNhuWNhuODu+WNhuODu+WNhlwiLFxuXHRcdFx0XHRcdFwi44O75YyF44O744O744O744O75YyF44O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vmpZrjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIui7iummreixoeODu+Wjq+ixoemmrei7ilwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiMnBcIjogW1xuXHRcdFx0XHRcdFwi5Y2G44O75Y2G44O75Y2G5Y2G44O75Y2GXCIsXG5cdFx0XHRcdFx0XCLjg7vljIXjg7vjg7vjg7vjg7vljIXjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+a8ouODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi6LuK6aat6LGh5aOr44O76LGh6aat6LuKXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLlt6bosaHphY3nva5cIjogW1xuXHRcdFx0XHRcdFwi5Y2G44O75Y2G5Y2G44O75Y2G44O75Y2GXCIsXG5cdFx0XHRcdFx0XCLjg7vljIXjg7vjg7vjg7vjg7vljIXjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+almuODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi6LuK6LGh6aat44O75aOr6LGh6aat6LuKXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLlt6bosaHphY3nva4ycFwiOiBbXG5cdFx0XHRcdFx0XCLljYbjg7vljYbjg7vljYbljYbjg7vljYZcIixcblx0XHRcdFx0XHRcIuODu+WMheODu+ODu+ODu+ODu+WMheODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O75ryi44O744O744O7XCIsXG5cdFx0XHRcdFx0XCLou4rosaHppq3lo6vjg7vosaHppq3ou4pcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuWPs+ixoemFjee9rlwiOiBbXG5cdFx0XHRcdFx0XCLljYbjg7vljYbljYbjg7vljYbjg7vljYZcIixcblx0XHRcdFx0XHRcIuODu+WMheODu+ODu+ODu+ODu+WMheODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O75qWa44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLou4rppq3osaHjg7vlo6vppq3osaHou4pcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuWPs+ixoemFjee9rjJwXCI6IFtcblx0XHRcdFx0XHRcIuWNhuODu+WNhuODu+WNhuWNhuODu+WNhlwiLFxuXHRcdFx0XHRcdFwi44O75YyF44O744O744O744O75YyF44O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vmvKLjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIui7iummreixoeWjq+ODu+mmreixoei7ilwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5aSW6LGh6YWN572uXCI6IFtcblx0XHRcdFx0XHRcIuWNhuODu+WNhuWNhuODu+WNhuODu+WNhlwiLFxuXHRcdFx0XHRcdFwi44O75YyF44O744O744O744O75YyF44O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vmpZrjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIui7iuixoemmreODu+Wjq+mmreixoei7ilwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5aSW6LGh6YWN572uMnBcIjogW1xuXHRcdFx0XHRcdFwi5Y2G44O75Y2G44O75Y2G5Y2G44O75Y2GXCIsXG5cdFx0XHRcdFx0XCLjg7vljIXjg7vjg7vjg7vjg7vljIXjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+a8ouODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi6LuK6LGh6aat5aOr44O76aat6LGh6LuKXCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiOVwiOiB7XG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBbXG5cdFx0XHRcdFx0XCLljYbjg7vljYbjg7vljYbjg7vljYbjg7vljYZcIixcblx0XHRcdFx0XHRcIuODu+WMheODu+ODu+ODu+ODu+ODu+WMheODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O75qWa44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLou4rppq3osaHlo6vjg7vlo6vosaHppq3ou4pcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIjJwXCI6IFtcblx0XHRcdFx0XHRcIuWNhuODu+WNhuODu+WNhuODu+WNhuODu+WNhlwiLFxuXHRcdFx0XHRcdFwi44O75YyF44O744O744O744O744O75YyF44O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vmvKLjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIui7iummreixoeWjq+ODu+Wjq+ixoemmrei7ilwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5bem6LGh6YWN572uXCI6IFtcblx0XHRcdFx0XHRcIuWNhuODu+WNhuODu+WNhuODu+WNhuODu+WNhlwiLFxuXHRcdFx0XHRcdFwi44O75YyF44O744O744O744O744O75YyF44O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vmpZrjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIui7iuixoemmreWjq+ODu+Wjq+ixoemmrei7ilwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwi5bem6LGh6YWN572uMnBcIjogW1xuXHRcdFx0XHRcdFwi5Y2G44O75Y2G44O75Y2G44O75Y2G44O75Y2GXCIsXG5cdFx0XHRcdFx0XCLjg7vljIXjg7vjg7vjg7vjg7vjg7vljIXjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+a8ouODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi6LuK6LGh6aat5aOr44O75aOr6LGh6aat6LuKXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLlj7PosaHphY3nva5cIjogW1xuXHRcdFx0XHRcdFwi5Y2G44O75Y2G44O75Y2G44O75Y2G44O75Y2GXCIsXG5cdFx0XHRcdFx0XCLjg7vljIXjg7vjg7vjg7vjg7vjg7vljIXjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+almuODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi6LuK6aat6LGh5aOr44O75aOr6aat6LGh6LuKXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCLlj7PosaHphY3nva4ycFwiOiBbXG5cdFx0XHRcdFx0XCLljYbjg7vljYbjg7vljYbjg7vljYbjg7vljYZcIixcblx0XHRcdFx0XHRcIuODu+WMheODu+ODu+ODu+ODu+ODu+WMheODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O75ryi44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLou4rppq3osaHlo6vjg7vlo6vppq3osaHou4pcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuWkluixoemFjee9rlwiOiBbXG5cdFx0XHRcdFx0XCLljYbjg7vljYbjg7vljYbjg7vljYbjg7vljYZcIixcblx0XHRcdFx0XHRcIuODu+WMheODu+ODu+ODu+ODu+ODu+WMheODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O75qWa44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLou4rosaHppq3lo6vjg7vlo6vppq3osaHou4pcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIuWkluixoemFjee9rjJwXCI6IFtcblx0XHRcdFx0XHRcIuWNhuODu+WNhuODu+WNhuODu+WNhuODu+WNhlwiLFxuXHRcdFx0XHRcdFwi44O75YyF44O744O744O744O744O75YyF44O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vmvKLjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIui7iuixoemmreWjq+ODu+Wjq+mmreixoei7ilwiXG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcIjE0XCI6IHtcblx0XHRcdFx0XCJwNFwiOiBbXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vljYbjg7vljYbljYbjg7vljYbjg7vljYbjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+WMheODu+almuODu+ODu+WMheODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O76LuK6LGh6aat44O75aOr6aat6LGh6LuK44O744O744O7XCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiMTVcIjoge1xuXHRcdFx0XHRcInA0XCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+WNhuODu+WNhuODu+WNhuODu+WNhuODu+WNhuODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O75YyF44O744O75qWa44O744O75YyF44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vou4rosaHppq3lo6vjg7vlo6vppq3osaHou4rjg7vjg7vjg7tcIlxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCIxN1wiOiB7XG5cdFx0XHRcdFwicDRcIjogW1xuXHRcdFx0XHRcdFwi44O744O744O744O75Y2G44O75Y2G44O75Y2G44O75Y2G44O75Y2G44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vljIXjg7vjg7vjg7vjg7vjg7vljIXjg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+almuODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O76LuK6aat6LGh5aOr44O75aOr6LGh6aat6LuK44O744O744O744O7XCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0XCLjg57jg7zjgq/jg6vjg4Pjgq9cIjoge1xuXHRcdFwiZW5nbGlzaFwiOiBcIk1ha3J1a1wiLFxuXHRcdFwiZm9udENvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0NDMjIyMlwiLFxuXHRcdFwicHJvbW9MaW5lXCI6IDMsXG5cdFx0XCJwb3NpdGlvblwiOiB7XG5cdFx0XHRcIjhcIjoge1xuXHRcdFx0XHRcImRlZmF1bHRcIjogW1xuXHRcdFx0XHRcdFwi6LKd6LKd6LKd6LKd6LKd6LKd6LKd6LKdXCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuiIueeRquagueWQm+eoruagueeRquiIuVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiMnBcIjogW1xuXHRcdFx0XHRcdFwi6LKd6LKd6LKd6LKd6LKd6LKd6LKd6LKdXCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuiIueeRquagueWFrOeoruagueeRquiIuVwiXG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcIjlcIjoge1xuXHRcdFx0XHRcImRlZmF1bHRcIjogW1xuXHRcdFx0XHRcdFwi6LKd6LKd6LKd6LKd6LKd6LKd6LKd6LKd6LKdXCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuiIueeRquagueeoruWQm+eoruagueeRquiIuVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiMnBcIjogW1xuXHRcdFx0XHRcdFwi6LKd6LKd6LKd6LKd6LKd6LKd6LKd6LKd6LKdXCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuiIueeRquagueeoruWFrOeoruagueeRquiIuVwiXG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcIjE0XCI6IHtcblx0XHRcdFx0XCJwNFwiOiBbXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vosp3osp3osp3osp3osp3osp3osp3osp3jg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O76Ii555Gq5qC55ZCb56iu5qC555Gq6Ii544O744O744O7XCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiMTVcIjoge1xuXHRcdFx0XHRcInA0XCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+iyneiyneiyneiyneiyneiyneiyneiyneiyneODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O744O744O744O744O744O744O744O744O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7voiLnnkarmoLnnqK7lkJvnqK7moLnnkaroiLnjg7vjg7vjg7tcIlxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCIxN1wiOiB7XG5cdFx0XHRcdFwicDRcIjogW1xuXHRcdFx0XHRcdFwi44O744O744O744O76LKd6LKd6LKd6LKd6LKd6LKd6LKd6LKd6LKd44O744O744O744O7XCIsXG5cdFx0XHRcdFx0XCLjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+iIueeRquagueeoruWQm+eoruagueeRquiIueODu+ODu+ODu+ODu1wiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdFwi44OB44Oj44OI44Op44Oz44KsXCI6IHtcblx0XHRcImVuZ2xpc2hcIjogXCJDaGF0dXJhbmdhXCIsXG5cdFx0XCJmb250Q29sb3JcIjogXCIjNjY2NjY2XCIsXG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkVFXCIsXG5cdFx0XCJwcm9tb0xpbmVcIjogLTEsXG5cdFx0XCJwb3NpdGlvblwiOiB7XG5cdFx0XHRcIjhcIjoge1xuXHRcdFx0XHRcImRlZmF1bHRcIjogW1xuXHRcdFx0XHRcdFwi5pyo54Gr5aSp5aSu5aSn5aSp54Gr5pyoXCIsXG5cdFx0XHRcdFx0XCLmiKbljYjlg4/kuLvoh6Plg4/ljYjmiKZcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIjJwXCI6IFtcblx0XHRcdFx0XHRcIuacqOeBq+WkqeWkruWkp+WkqeeBq+acqFwiLFxuXHRcdFx0XHRcdFwi5oim5Y2I5YOP5p+x6Iej5YOP5Y2I5oimXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJwNFwiOiBbXG5cdFx0XHRcdFx0XCLnn6LngavmnKzlpK7jg7vjg7vjg7vjg7tcIixcblx0XHRcdFx0XHRcIuiIn+WNiOixleS4u+ODu+ODu+ODu+ODu1wiXG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcIjlcIjoge1xuXHRcdFx0XHRcImRlZmF1bHRcIjogW1xuXHRcdFx0XHRcdFwi5pyo54Gr5aSp5aSn5aSu5aSn5aSp54Gr5pyoXCIsXG5cdFx0XHRcdFx0XCLmiKbljYjlg4/oh6PkuLvoh6Plg4/ljYjmiKZcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIjJwXCI6IFtcblx0XHRcdFx0XHRcIuacqOeBq+WkqeWkp+WkruWkp+WkqeeBq+acqFwiLFxuXHRcdFx0XHRcdFwi5oim5Y2I5YOP6Iej5p+x6Iej5YOP5Y2I5oimXCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiMTRcIjoge1xuXHRcdFx0XHRcInA0XCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+acqOeBq+WkqeWkruWkp+WkqeeBq+acqOODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O75oim5Y2I5YOP5Li76Iej5YOP5Y2I5oim44O744O744O7XCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiMTVcIjoge1xuXHRcdFx0XHRcInA0XCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+acqOeBq+WkqeWkp+WkruWkp+WkqeeBq+acqOODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O75oim5Y2I5YOP6Iej5Li76Iej5YOP5Y2I5oim44O744O744O7XCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiMTdcIjoge1xuXHRcdFx0XHRcInA0XCI6IFtcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+acqOeBq+WkqeWkp+WkruWkp+WkqeeBq+acqOODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44O744O744O744O75oim5Y2I5YOP6Iej5Li76Iej5YOP5Y2I5oim44O744O744O744O7XCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0XCLjganjgYbjgbbjgaTjgZfjgofjgYbjgY5cIjoge1xuXHRcdFwiZW5nbGlzaFwiOiBcIkRvYnV0c3VTaG9naVwiLFxuXHRcdFwiZm9udENvbG9yXCI6IFwiIzY2NjY2NlwiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0REQ0NGRlwiLFxuXHRcdFwicHJvbW9MaW5lXCI6IC0zLFxuXHRcdFwicG9zaXRpb25cIjoge1xuXHRcdFx0XCIzXCI6IHtcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFtcblx0XHRcdFx0XHRcIuODu+OBsuODu1wiLFxuXHRcdFx0XHRcdFwi44GN44Op44GeXCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiNVwiOiB7XG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBbXG5cdFx0XHRcdFx0XCLjg7vjgbLjgbLjgbLjg7tcIixcblx0XHRcdFx0XHRcIuODu+ODu+ODu+ODu+ODu1wiLFxuXHRcdFx0XHRcdFwi44Gt44GE44KJ44GE44GtXCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRcIuWwhuaji1wiOiB7XG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRUVDQzg4XCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiMzMzMzMzNcIixcblx0XHRcImZpZWxkXCI6IFtcblx0XHRcdFwiU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NcIlxuXHRcdF1cblx0fSxcblx0XCLjg4HjgqfjgrlcIjoge1xuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzQ0NDQ0NFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMDAwMDAwXCIsXG5cdFx0XCJmaWVsZFwiOiBbXG5cdFx0XHRcIldCV0JXQldCXCIsXG5cdFx0XHRcIkJXQldCV0JXXCIsXG5cdFx0XHRcIldCV0JXQldCXCIsXG5cdFx0XHRcIkJXQldCV0JXXCIsXG5cdFx0XHRcIldCV0JXQldCXCIsXG5cdFx0XHRcIkJXQldCV0JXXCIsXG5cdFx0XHRcIldCV0JXQldCXCIsXG5cdFx0XHRcIkJXQldCV0JXXCJcblx0XHRdXG5cdH0sXG5cdFwi44K344Oj44Oz44OB44O8XCI6IHtcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuXHRcdFwicHJvbW9MaW5lT2Zmc2V0XCI6IDEsXG5cdFx0XCJmaWVsZFwiOiBbXG5cdFx0XHRcIlNTUzwjPlNTU1wiLFxuXHRcdFx0XCJTU1MjKiNTU1NcIixcblx0XHRcdFwiU1NTPiM8U1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1wiLFxuXHRcdFx0XCI9PT09PT09XT1cIixcblx0XHRcdFwiPVs9PT09PT09XCIsXG5cdFx0XHRcIlNTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1M8Iz5TU1NcIixcblx0XHRcdFwiU1NTIyojU1NTXCIsXG5cdFx0XHRcIlNTUz4jPFNTU1wiXG5cdFx0XVxuXHR9LFxuXHRcIuODgeODo+ODs+OCrlwiOiB7XG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRUVDQzg4XCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiMzMzMzMzNcIixcblx0XHRcInByb21vTGluZU9mZnNldFwiOiAxLFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCJTU1M8Iz5TU1NcIixcblx0XHRcdFwiU1NTIyojU1NTXCIsXG5cdFx0XHRcIlNTUz4jPFNTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NcIixcblx0XHRcdFwiU1NTPCM+U1NTXCIsXG5cdFx0XHRcIlNTUyMqI1NTU1wiLFxuXHRcdFx0XCJTU1M+IzxTU1NcIlxuXHRcdF1cblx0fSxcblx0XCLjg57jg7zjgq/jg6vjg4Pjgq9cIjoge1xuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzc3NTU0NFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMDAwMDAwXCIsXG5cdFx0XCJmaWVsZFwiOiBbXG5cdFx0XHRcIk1NTU1NTU1NXCIsXG5cdFx0XHRcIk1NTU1NTU1NXCIsXG5cdFx0XHRcIk1NTU1NTU1NXCIsXG5cdFx0XHRcIk1NTU1NTU1NXCIsXG5cdFx0XHRcIk1NTU1NTU1NXCIsXG5cdFx0XHRcIk1NTU1NTU1NXCIsXG5cdFx0XHRcIk1NTU1NTU1NXCIsXG5cdFx0XHRcIk1NTU1NTU1NXCJcblx0XHRdXG5cdH0sXG5cdFwi44Gp44GG44G244Gk44GX44KH44GG44GOXCI6IHtcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRERcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiI0ZGREQ5OVwiLFxuXHRcdFwicHJvbW9MaW5lT2Zmc2V0XCI6IC0yLFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCJERERcIixcblx0XHRcdFwiJCQkXCIsXG5cdFx0XHRcIiQkJFwiLFxuXHRcdFx0XCJkZGRcIlxuXHRcdF1cblx0fSxcblx0XCLlsIbmo4s1eDVcIjoge1xuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0VFQ0M4OFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMzMzMzMzXCIsXG5cdFx0XCJwcm9tb0xpbmVPZmZzZXRcIjogLTIsXG5cdFx0XCJmaWVsZFwiOiBbXG5cdFx0XHRcIlNTU1NTXCIsXG5cdFx0XHRcIlNTU1NTXCIsXG5cdFx0XHRcIlNTU1NTXCIsXG5cdFx0XHRcIlNTU1NTXCIsXG5cdFx0XHRcIlNTU1NTXCJcblx0XHRdXG5cdH0sXG5cdFwi5bCG5qOLN3g3XCI6IHtcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuXHRcdFwicHJvbW9MaW5lT2Zmc2V0XCI6IC0xLFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCJTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTXCJcblx0XHRdXG5cdH0sXG5cdFwi5bCG5qOLMTB4MTBcIjoge1xuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0VFQ0M4OFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMzMzMzMzXCIsXG5cdFx0XCJmaWVsZFwiOiBbXG5cdFx0XHRcIlNTU1NTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1NcIlxuXHRcdF1cblx0fSxcblx0XCLjg4Hjgqfjgrk2eDZcIjoge1xuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzQ0NDQ0NFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMDAwMDAwXCIsXG5cdFx0XCJmaWVsZFwiOiBbXG5cdFx0XHRcIldCV0JXQlwiLFxuXHRcdFx0XCJCV0JXQldcIixcblx0XHRcdFwiV0JXQldCXCIsXG5cdFx0XHRcIkJXQldCV1wiLFxuXHRcdFx0XCJXQldCV0JcIixcblx0XHRcdFwiQldCV0JXXCJcblx0XHRdXG5cdH0sXG5cdFwi44OB44Kn44K5MTB4OFwiOiB7XG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNDQ0NDQ0XCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiMwMDAwMDBcIixcblx0XHRcImZpZWxkXCI6IFtcblx0XHRcdFwiV0JXQldCV0JXQlwiLFxuXHRcdFx0XCJCV0JXQldCV0JXXCIsXG5cdFx0XHRcIldCV0JXQldCV0JcIixcblx0XHRcdFwiQldCV0JXQldCV1wiLFxuXHRcdFx0XCJXQldCV0JXQldCXCIsXG5cdFx0XHRcIkJXQldCV0JXQldcIixcblx0XHRcdFwiV0JXQldCV0JXQlwiLFxuXHRcdFx0XCJCV0JXQldCV0JXXCJcblx0XHRdXG5cdH0sXG5cdFwi44OB44Kn44K5MTB4MTBcIjoge1xuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzQ0NDQ0NFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMDAwMDAwXCIsXG5cdFx0XCJwcm9tb0xpbmVPZmZzZXRcIjogMixcblx0XHRcImZpZWxkXCI6IFtcblx0XHRcdFwiV0JXQldCV0JXQlwiLFxuXHRcdFx0XCJCV0JXQldCV0JXXCIsXG5cdFx0XHRcIldCV0JXQldCV0JcIixcblx0XHRcdFwiQldCV0JXQldCV1wiLFxuXHRcdFx0XCJXQldCV0JXQldCXCIsXG5cdFx0XHRcIkJXQldCV0JXQldcIixcblx0XHRcdFwiV0JXQldCV0JXQlwiLFxuXHRcdFx0XCJCV0JXQldCV0JXXCIsXG5cdFx0XHRcIldCV0JXQldCV0JcIixcblx0XHRcdFwiQldCV0JXQldCV1wiXG5cdFx0XVxuXHR9LFxuXHRcIuODgeOCp+OCuTEyeDhcIjoge1xuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzQ0NDQ0NFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMDAwMDAwXCIsXG5cdFx0XCJmaWVsZFwiOiBbXG5cdFx0XHRcIldCV0JXQldCV0JXQlwiLFxuXHRcdFx0XCJCV0JXQldCV0JXQldcIixcblx0XHRcdFwiV0JXQldCV0JXQldCXCIsXG5cdFx0XHRcIkJXQldCV0JXQldCV1wiLFxuXHRcdFx0XCJXQldCV0JXQldCV0JcIixcblx0XHRcdFwiQldCV0JXQldCV0JXXCIsXG5cdFx0XHRcIldCV0JXQldCV0JXQlwiLFxuXHRcdFx0XCJCV0JXQldCV0JXQldcIlxuXHRcdF1cblx0fSxcblx0XCLjg4HjgqfjgrkxMngxMlwiOiB7XG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNDQ0NDQ0XCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiMwMDAwMDBcIixcblx0XHRcImZpZWxkXCI6IFtcblx0XHRcdFwiV0JXQldCV0JXQldCXCIsXG5cdFx0XHRcIkJXQldCV0JXQldCV1wiLFxuXHRcdFx0XCJXQldCV0JXQldCV0JcIixcblx0XHRcdFwiQldCV0JXQldCV0JXXCIsXG5cdFx0XHRcIldCV0JXQldCV0JXQlwiLFxuXHRcdFx0XCJCV0JXQldCV0JXQldcIixcblx0XHRcdFwiV0JXQldCV0JXQldCXCIsXG5cdFx0XHRcIkJXQldCV0JXQldCV1wiLFxuXHRcdFx0XCJXQldCV0JXQldCV0JcIixcblx0XHRcdFwiQldCV0JXQldCV0JXXCIsXG5cdFx0XHRcIldCV0JXQldCV0JXQlwiLFxuXHRcdFx0XCJCV0JXQldCV0JXQldcIlxuXHRcdF1cblx0fSxcblx0XCLjgZTjgo3jgZTjgo3jganjgYbjgbbjgaTjgZfjgofjgYbjgY5cIjoge1xuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZERFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjRkZERDk5XCIsXG5cdFx0XCJwcm9tb0xpbmVPZmZzZXRcIjogLTEsXG5cdFx0XCJmaWVsZFwiOiBbXG5cdFx0XHRcIjQ0NDQ0XCIsXG5cdFx0XHRcIjQ0NDQ0XCIsXG5cdFx0XHRcIiQkJCQkXCIsXG5cdFx0XHRcIiQkJCQkXCIsXG5cdFx0XHRcImRkZGRkXCIsXG5cdFx0XHRcImRkZGRkXCJcblx0XHRdXG5cdH0sXG5cdFwi5Y+k5bCG5qOLOHg4XCI6IHtcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCJzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc1wiXG5cdFx0XVxuXHR9LFxuXHRcIuWPpOWwhuajizl4OFwiOiB7XG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRUVDQzg4XCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiMzMzMzMzNcIixcblx0XHRcImZpZWxkXCI6IFtcblx0XHRcdFwic3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc1wiXG5cblx0XHRdXG5cdH0sXG5cdFwi5Y+k5bCG5qOLOXg5XCI6IHtcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCJzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc1wiXG5cdFx0XVxuXHR9LFxuXHRcIuWPpOWwhuajizEweDEwXCI6IHtcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuXHRcdFwicHJvbW9MaW5lT2Zmc2V0XCI6IDEsXG5cdFx0XCJmaWVsZFwiOiBbXG5cdFx0XHRcInNzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc3NcIlxuXHRcdF1cblx0fSxcblx0XCLlj6TlsIbmo4sxMngxMlwiOiB7XG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRUVDQzg4XCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiMzMzMzMzNcIixcblx0XHRcInByb21vTGluZU9mZnNldFwiOiAxLFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCJzc3Nzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc3Nzc1wiXG5cdFx0XVxuXHR9LFxuXHRcIuWPpOWwhuajizE1eDE1XCI6IHtcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuXHRcdFwicHJvbW9MaW5lT2Zmc2V0XCI6IDIsXG5cdFx0XCJmaWVsZFwiOiBbXG5cdFx0XHRcInNzc3Nzc3Nzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3Nzc3Nzc3NzXCIsXG5cdFx0XHRcInNzc3Nzc3Nzc3Nzc3Nzc1wiLFxuXHRcdFx0XCJzc3Nzc3Nzc3Nzc3Nzc3NcIixcblx0XHRcdFwic3Nzc3Nzc3Nzc3Nzc3NzXCJcblx0XHRdXG5cdH0sXG5cdFwi44Kv44Os44O844K444O844OP44Km44K5XCI6IHtcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiM0NDQ0NDRcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzAwMDAwMFwiLFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCJ3Yndid2J3YlwiLFxuXHRcdFx0XCJid2J3Yndid1wiLFxuXHRcdFx0XCJ3Yndid2J3YlwiLFxuXHRcdFx0XCJid2J3Yndid1wiLFxuXHRcdFx0XCJ3Yndid2J3YlwiLFxuXHRcdFx0XCJid2J3Yndid1wiLFxuXHRcdFx0XCJ3Yndid2J3YlwiLFxuXHRcdFx0XCJid2J3Yndid1wiXG5cdFx0XVxuXHR9LFxuXHRcIjTkurrjg4HjgqfjgrlcIjoge1xuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzQ0NDQ0NFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMDAwMDAwXCIsXG5cdFx0XCJwcm9tb0xpbmVPZmZzZXRcIjogNixcblx0XHRcImZpZWxkXCI6IFtcblx0XHRcdFwiLi4uQldCV0JXQlcuLi5cIixcblx0XHRcdFwiLi4uV0JXQldCV0IuLi5cIixcblx0XHRcdFwiLi4uQldCV0JXQlcuLi5cIixcblx0XHRcdFwiQldCV0JXQldCV0JXQldcIixcblx0XHRcdFwiV0JXQldCV0JXQldCV0JcIixcblx0XHRcdFwiQldCV0JXQldCV0JXQldcIixcblx0XHRcdFwiV0JXQldCV0JXQldCV0JcIixcblx0XHRcdFwiQldCV0JXQldCV0JXQldcIixcblx0XHRcdFwiV0JXQldCV0JXQldCV0JcIixcblx0XHRcdFwiQldCV0JXQldCV0JXQldcIixcblx0XHRcdFwiV0JXQldCV0JXQldCV0JcIixcblx0XHRcdFwiLi4uV0JXQldCV0IuLi5cIixcblx0XHRcdFwiLi4uQldCV0JXQlcuLi5cIixcblx0XHRcdFwiLi4uV0JXQldCV0IuLi5cIlxuXHRcdF1cblx0fSxcblx0XCLlm5vnpZ7lsIbmo4tcIjoge1xuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0VFQ0M4OFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMzMzMzMzXCIsXG5cdFx0XCJzaWRlUHJvbW9cIjogdHJ1ZSxcblx0XHRcImZpZWxkXCI6IFtcblx0XHRcdFwiLi4uU1NTU1NTU1NTLi4uXCIsXG5cdFx0XHRcIi4uLlNTU1NTU1NTUy4uLlwiLFxuXHRcdFx0XCIuLi5TU1NTU1NTU1MuLi5cIixcblx0XHRcdFwiU1NTU1NTU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NTU1NTU1NcIixcblx0XHRcdFwiLi4uU1NTU1NTU1NTLi4uXCIsXG5cdFx0XHRcIi4uLlNTU1NTU1NTUy4uLlwiLFxuXHRcdFx0XCIuLi5TU1NTU1NTU1MuLi5cIlxuXHRcdF1cblx0fSxcblx0XCLjgq/jg63jgrk4eDhcIjoge1xuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0VFQ0M4OFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMzMzMzMzXCIsXG5cdFx0XCJmaWVsZFwiOiBbXG5cdFx0XHRcIldCVzwjPlNTXCIsXG5cdFx0XHRcIkJXQiMqI1NTXCIsXG5cdFx0XHRcIldCVz4jPFNTXCIsXG5cdFx0XHRcIj09PT09PV09XCIsXG5cdFx0XHRcIj1bPT09PT09XCIsXG5cdFx0XHRcIlNTPCM+QldCXCIsXG5cdFx0XHRcIlNTIyojV0JXXCIsXG5cdFx0XHRcIlNTPiM8QldCXCJcblx0XHRdXG5cdH0sXG5cdFwi44Kv44Ot44K5OXg5XCI6IHtcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCJYU1g8Iz5YU1hcIixcblx0XHRcdFwiU1hTIyojU1hTXCIsXG5cdFx0XHRcIlhTWD4jPFhTWFwiLFxuXHRcdFx0XCJTU1NTU1NTU1NcIixcblx0XHRcdFwiPVs9PT09PV09XCIsXG5cdFx0XHRcIlNTU1NTU1NTU1wiLFxuXHRcdFx0XCJYU1g8Iz5YU1hcIixcblx0XHRcdFwiU1hTIyojU1hTXCIsXG5cdFx0XHRcIlhTWD4jPFhTWFwiXG5cdFx0XVxuXHR9LFxuXHRcIuOCr+ODreOCuTExeDExXCI6IHtcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCJCV0JXPCM+U1hTWFwiLFxuXHRcdFx0XCJXQldCIyojWFNYU1wiLFxuXHRcdFx0XCJCV0JXPiM8U1hTWFwiLFxuXHRcdFx0XCJTU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCI9Wz09PT09PT1dPVwiLFxuXHRcdFx0XCJTU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCJYU1hTPCM+V0JXQlwiLFxuXHRcdFx0XCJTWFNYIyojQldCV1wiLFxuXHRcdFx0XCJYU1hTPiM8V0JXQlwiXG5cdFx0XVxuXHR9LFxuXHRcIuOCr+ODreOCuTEyeDEyXCI6IHtcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCJCV0JXPCM+WFNYU1hcIixcblx0XHRcdFwiV0JXQiMqI1NYU1hTXCIsXG5cdFx0XHRcIkJXQlc+IzxYU1hTWFwiLFxuXHRcdFx0XCJTU1NTU1NTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1NTU1NTXCIsXG5cdFx0XHRcIj09PT09PT09PT1dPVwiLFxuXHRcdFx0XCI9Wz09PT09PT09PT1cIixcblx0XHRcdFwiU1NTU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCJYU1hTWDwjPldCV0JcIixcblx0XHRcdFwiU1hTWFMjKiNCV0JXXCIsXG5cdFx0XHRcIlhTWFNYPiM8V0JXQlwiXG5cdFx0XVxuXHR9LFxuXHRcIuOCr+ODreOCuTEzeDEzXCI6IHtcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCJCV0JXQjwjPlhTWFNYXCIsXG5cdFx0XHRcIldCV0JXIyojU1hTWFNcIixcblx0XHRcdFwiQldCV0I+IzxYU1hTWFwiLFxuXHRcdFx0XCJTU1NTU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlNTU1NTU1NTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCI9Wz09PT09PT09PV09XCIsXG5cdFx0XHRcIlNTU1NTU1NTU1NTU1NcIixcblx0XHRcdFwiU1NTU1NTU1NTU1NTU1wiLFxuXHRcdFx0XCJTU1NTU1NTU1NTU1NTXCIsXG5cdFx0XHRcIlhTWFNYPCM+QldCV0JcIixcblx0XHRcdFwiU1hTWFMjKiNXQldCV1wiLFxuXHRcdFx0XCJYU1hTWD4jPEJXQldCXCJcblx0XHRdXG5cdH0sXG5cdFwiNOS6uueUqOOCr+ODreOCuTjliJdcIjoge1xuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzQ0NDQ0NFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMDAwMDAwXCIsXG5cdFx0XCJwcm9tb0xpbmVPZmZzZXRcIjogNixcblx0XHRcImZpZWxkXCI6IFtcblx0XHRcdFwiLi4uWFNYPCM+WFMuLi5cIixcblx0XHRcdFwiLi4uU1hTIyojU1guLi5cIixcblx0XHRcdFwiLi4uWFNYPiM8WFMuLi5cIixcblx0XHRcdFwiWFNYV0JXQldCV0JTWFNcIixcblx0XHRcdFwiU1hTQldCV0JXQldYU1hcIixcblx0XHRcdFwiPCM+V0I9PT1dV0JTWFNcIixcblx0XHRcdFwiIyojQlc9PT09Qlc8Iz5cIixcblx0XHRcdFwiPiM8V0I9PT09V0IjKiNcIixcblx0XHRcdFwiU1hTQldbPT09Qlc+IzxcIixcblx0XHRcdFwiWFNYV0JXQldCV0JTWFNcIixcblx0XHRcdFwiU1hTQldCV0JXQldYU1hcIixcblx0XHRcdFwiLi4uU1g8Iz5YU1guLi5cIixcblx0XHRcdFwiLi4uWFMjKiNTWFMuLi5cIixcblx0XHRcdFwiLi4uU1g+IzxYU1guLi5cIlxuXHRcdF1cblx0fSxcblx0XCI05Lq655So44Kv44Ot44K5OeWIl1wiOiB7XG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRUVDQzg4XCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiMzMzMzMzNcIixcblx0XHRcInByb21vTGluZU9mZnNldFwiOiA2LFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCIuLi5YU1g8Iz5YU1guLi5cIixcblx0XHRcdFwiLi4uU1hTIyojU1hTLi4uXCIsXG5cdFx0XHRcIi4uLlhTWD4jPFhTWC4uLlwiLFxuXHRcdFx0XCJYU1hCV0JXQldCV0JYU1hcIixcblx0XHRcdFwiU1hTV0JXQldCV0JXU1hTXCIsXG5cdFx0XHRcIlhTWEJXQj09XUJXQlhTWFwiLFxuXHRcdFx0XCI8Iz5XQj09PT09Qlc8Iz5cIixcblx0XHRcdFwiIyojQlc9PT09PVdCIyojXCIsXG5cdFx0XHRcIj4jPFdCPT09PT1CVz4jPFwiLFxuXHRcdFx0XCJYU1hCV0JbPT1CV0JYU1hcIixcblx0XHRcdFwiU1hTV0JXQldCV0JXU1hTXCIsXG5cdFx0XHRcIlhTWEJXQldCV0JXQlhTWFwiLFxuXHRcdFx0XCIuLi5YU1g8Iz5YU1guLi5cIixcblx0XHRcdFwiLi4uU1hTIyojU1hTLi4uXCIsXG5cdFx0XHRcIi4uLlhTWD4jPFhTWC4uLlwiXG5cdFx0XVxuXHR9LFxuXHRcIjTkurrnlKjjgq/jg63jgrk55YiXNOihjFwiOiB7XG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRUVDQzg4XCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiMzMzMzMzNcIixcblx0XHRcInByb21vTGluZU9mZnNldFwiOiA2LFxuXHRcdFwiZmllbGRcIjogW1xuXHRcdFx0XCIuLi4uWFNYPCM+WFNYLi4uLlwiLFxuXHRcdFx0XCIuLi4uU1hTIyojU1hTLi4uLlwiLFxuXHRcdFx0XCIuLi4uWFNYPiM8WFNYLi4uLlwiLFxuXHRcdFx0XCIuLi4uU1hTWFNYU1hTLi4uLlwiLFxuXHRcdFx0XCJYU1hTQldCV0JXQldCU1hTWFwiLFxuXHRcdFx0XCJTWFNYV0JXQldCV0JXWFNYU1wiLFxuXHRcdFx0XCJYU1hTQldCPT1dQldCU1hTWFwiLFxuXHRcdFx0XCI8Iz5YV0I9PT09PUJXWDwjPlwiLFxuXHRcdFx0XCIjKiNTQlc9PT09PVdCUyMqI1wiLFxuXHRcdFx0XCI+IzxYV0I9PT09PUJXWD4jPFwiLFxuXHRcdFx0XCJYU1hTQldCWz09QldCU1hTWFwiLFxuXHRcdFx0XCJTWFNYV0JXQldCV0JXWFNYU1wiLFxuXHRcdFx0XCJYU1hTQldCV0JXQldCU1hTWFwiLFxuXHRcdFx0XCIuLi4uU1hTWFNYU1hTLi4uLlwiLFxuXHRcdFx0XCIuLi4uWFNYPCM+WFNYLi4uLlwiLFxuXHRcdFx0XCIuLi4uU1hTIyojU1hTLi4uLlwiLFxuXHRcdFx0XCIuLi4uWFNYPiM8WFNYLi4uLlwiXG5cdFx0XVxuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG5cdFwiU1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJ0ZXh0XCI6IFwi44CA44CAXCIsXG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRUVDQzg4XCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiMzMzMzMzNcIlxuXHR9LFxuXHRcInNcIjoge1xuXHRcdFwibmFtZVwiOiBcIuWPpOWwhuajiyjmjIHjgaHpp5LjgarjgZcpXCIsXG5cdFx0XCJ0ZXh0XCI6IFwi44CA44CAXCIsXG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRUVDQzg4XCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiMzMzMzMzNcIixcblx0XHRcImF0dHJcIjogW1wiY2FudENhcHR1cmVcIl1cblx0fSxcblx0XCJYXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgq/jg63jgrnnlKjpu5JcIixcblx0XHRcInRleHRcIjogXCLjgIDjgIBcIixcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNCQjc3NDRcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiXG5cdH0sXG5cdFwiTVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Oe44O844Kv44Or44OD44KvXCIsXG5cdFx0XCJ0ZXh0XCI6IFwi44CA44CAXCIsXG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNzc1NTQ0XCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiNDQ0NDQ0NcIlxuXHR9LFxuXHRcIldcIjoge1xuXHRcdFwibmFtZVwiOiBcIuODgeOCp+OCueeZvVwiLFxuXHRcdFwidGV4dFwiOiBcIuOAgOOAgFwiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0NDQ0NDQ1wiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMzMzMzMzNzdcIlxuXHR9LFxuXHRcIkJcIjoge1xuXHRcdFwibmFtZVwiOiBcIuODgeOCp+OCuem7klwiLFxuXHRcdFwidGV4dFwiOiBcIuOAgOOAgFwiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzQ0NDQ0NFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjQ0NDQ0NDNzdcIlxuXHR9LFxuXHRcIndcIjoge1xuXHRcdFwibmFtZVwiOiBcIuODgeOCp+OCueeZvSjjgq/jg6zjg7zjgrjjg7zjg4/jgqbjgrkpXCIsXG5cdFx0XCJ0ZXh0XCI6IFwi44CA44CAXCIsXG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjQ0NDQ0NDXCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiMzMzMzMzM3N1wiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdXG5cdH0sXG5cdFwiYlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OB44Kn44K56buSKOaMgeOBoemnkuOBguOCiilcIixcblx0XHRcInRleHRcIjogXCLjgIDjgIBcIixcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiM0NDQ0NDRcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiI0NDQ0NDQzc3XCIsXG5cdFx0XCJhdHRyXCI6IFtcImNhcHR1cmVcIl1cblx0fSxcblx0XCIrXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgrfjg6Pjg7Pjg4Hjg7wo5Lqk54K5KVwiLFxuXHRcdFwidGV4dFwiOiBcIuOAgOOAgFwiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0VFQ0M4OFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMzMzMzMzXCIsXG5cdFx0XCJpbnRlcnNlY3RcIjogdHJ1ZVxuXHR9LFxuXHRcIiRcIjoge1xuXHRcdFwibmFtZVwiOiBcIuOBqeOBhuOBtuOBpOOBl+OCh+OBhuOBjuWcsFwiLFxuXHRcdFwidGV4dFwiOiBcIuOAgOOAgFwiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZERFwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjRkZCQjc3XCJcblx0fSxcblx0XCJEXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjganjgYbjgbbjgaTjgZfjgofjgYbjgY7nqbpcIixcblx0XHRcInRleHRcIjogXCLjgIDjgIBcIixcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNBQURERkZcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiI0ZGQkI3N1wiXG5cdH0sXG5cdFwiNFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Gp44GG44G244Gk44GX44KH44GG44GO5aSVXCIsXG5cdFx0XCJ0ZXh0XCI6IFwi44CA44CAXCIsXG5cdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZEREFBXCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiNGRkJCNzdcIlxuXHR9LFxuXHRcImRcIjoge1xuXHRcdFwibmFtZVwiOiBcIuOBqeOBhuOBtuOBpOOBl+OCh+OBhuOBjuajrlwiLFxuXHRcdFwidGV4dFwiOiBcIuOAgOOAgFwiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0RERkZBQVwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjRkZCQjc3XCJcblx0fSxcblx0XCI9XCI6IHtcblx0XHRcIm5hbWVcIjogXCLmsrPnlYxcIixcblx0XHRcInRleHRcIjogXCLvvJ3vvJ1cIixcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMjIxMTQ0XCJcblx0fSxcblx0XCJbXCI6IHtcblx0XHRcIm5hbWVcIjogXCLmsrPnlYzlt6blrZdcIixcblx0XHRcInRleHRcIjogXCLvvJ3vvJ1cIixcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMjIxMTQ0XCIsXG5cdFx0XCJkaXNwbGF5VGV4dFwiOiBcIuays1wiLFxuXHRcdFwidGV4dFJvdGF0ZVwiOiAtOTBcblx0fSxcblx0XCJdXCI6IHtcblx0XHRcIm5hbWVcIjogXCLmsrPnlYzlj7PlrZdcIixcblx0XHRcInRleHRcIjogXCLvvJ3vvJ1cIixcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNFRUNDODhcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMjIxMTQ0XCIsXG5cdFx0XCJkaXNwbGF5VGV4dFwiOiBcIueVjFwiLFxuXHRcdFwidGV4dFJvdGF0ZVwiOiA5MFxuXHR9LFxuXHRcIiNcIjoge1xuXHRcdFwibmFtZVwiOiBcIuS5neWurlwiLFxuXHRcdFwidGV4dFwiOiBcIuOAgO+8mlwiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0NDOTk2NlwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMzMzMzMzXCIsXG5cdFx0XCJhdHRyXCI6IFtcInBhbGFjZVwiXVxuXHR9LFxuXHRcIjxcIjoge1xuXHRcdFwibmFtZVwiOiBcIuS5neWuruW3plwiLFxuXHRcdFwidGV4dFwiOiBcIuOAgO+8vFwiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0NDOTk2NlwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMzMzMzMzXCIsXG5cdFx0XCJib3JkZXJTbGFzaExlZnRcIjogdHJ1ZSxcblx0XHRcImF0dHJcIjogW1wicGFsYWNlXCIsIFwicGFsYWNlU2xhc2hcIl1cblx0fSxcblx0XCI+XCI6IHtcblx0XHRcIm5hbWVcIjogXCLkuZ3lrq7lj7NcIixcblx0XHRcInRleHRcIjogXCLjgIDvvI9cIixcblx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNDQzk5NjZcIixcblx0XHRcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuXHRcdFwiYm9yZGVyU2xhc2hSaWdodFwiOiB0cnVlLFxuXHRcdFwiYXR0clwiOiBbXCJwYWxhY2VcIiwgXCJwYWxhY2VTbGFzaFwiXVxuXHR9LFxuXHRcIipcIjoge1xuXHRcdFwibmFtZVwiOiBcIuS5neWuruS4rVwiLFxuXHRcdFwidGV4dFwiOiBcIuOAgOKAu1wiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0NDOTk2NlwiLFxuXHRcdFwiYm9yZGVyQ29sb3JcIjogXCIjMzMzMzMzXCIsXG5cdFx0XCJib3JkZXJTbGFzaExlZnRcIjogdHJ1ZSxcblx0XHRcImJvcmRlclNsYXNoUmlnaHRcIjogdHJ1ZSxcblx0XHRcImF0dHJcIjogW1wicGFsYWNlXCIsIFwicGFsYWNlU2xhc2hcIl1cblx0fSxcblx0XCIuXCI6e1xuXHRcdFwibmFtZVwiOiBcIueri+WFpeemgeatolwiLFxuXHRcdFwidGV4dFwiOiBcIu+8g++8g1wiLFxuXHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwMDAwMDAwXCIsXG5cdFx0XCJib3JkZXJDb2xvclwiOiBcIiMwMDAwMDAwMFwiLFxuXHRcdFwiYXR0clwiOiBbXCJrZWVwT3V0XCJdXG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcblx0XCLmralcIjoge1xuXHRcdFwibmFtZVwiOiBcIuatqeWFtVwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLmranlhbVcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIuWFtVwiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwiZm9yY2VQcm9tb0xpbmVcIjogMSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuatqVwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi44GoXCJcblx0fSxcblx0XCLmoYJcIjoge1xuXHRcdFwibmFtZVwiOiBcIuahgummrFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLmoYLppqxcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIummrFwiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwiZm9yY2VQcm9tb0xpbmVcIjogMixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuahglwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi5ZytXCJcblx0fSxcblx0XCLpioBcIjoge1xuXHRcdFwibmFtZVwiOiBcIumKgOWwhlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpioDlsIZcIiwgXCLpioDlsIdcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIuixoVwiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6YqAXCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLlhahcIlxuXHR9LFxuXHRcIuinklwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi6KeS6KGMXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuinkuihjFwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi6LGhXCIsXG5cdFx0XCJhdHRyXCI6IFtcImNhcHR1cmVcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLogZZcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIummrFwiXG5cdH0sXG5cdFwi6aaZXCI6IHtcblx0XHRcIm5hbWVcIjogXCLpppnou4pcIixcblx0XHRcImRpc3BsYXlcIjogW1wi6aaZ6LuKXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLou4pcIixcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcImZvcmNlUHJvbW9MaW5lXCI6IDEsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLppplcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIuadj1wiXG5cdH0sXG5cdFwi6aObXCI6IHtcblx0XHRcIm5hbWVcIjogXCLpo5vou4pcIixcblx0XHRcImRpc3BsYXlcIjogW1wi6aOb6LuKXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLou4pcIixcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIui7ilwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi6b6NXCJcblx0fSxcblx0XCLph5FcIjoge1xuXHRcdFwibmFtZVwiOiBcIumHkeWwhlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLph5HlsIdcIiwgXCLph5HlsIZcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIuiHo1wiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6YeRXCJcblx0XHR9XG5cdH0sXG5cdFwi546JXCI6IHtcblx0XHRcIm5hbWVcIjogXCLnjonlsIZcIixcblx0XHRcImRpc3BsYXlcIjogW1wi546J5bCHXCIsIFwi546L5bCHXCIsIFwi546J5bCGXCIsIFwi546L5bCGXCJdLFxuXHRcdFwiYWxpYXNcIjogXCLnmodcIixcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi546LXCIsXG5cdFx0XCJhdHRyXCI6IFtcImtpbmdcIiwgXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi546LXCJcblx0XHR9XG5cdH0sXG5cdFwi5YW1XCI6IHtcblx0XHRcIm5hbWVcIjogXCLjg53jg7zjg7NcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4pmf5YW1XCIsIFwi4pmZ5YW1XCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcInVuaXRcIjogXCLlhbVcIixcblx0XHRcImF0dHJcIjogW1wiZW5QYXNzYW50XCJdLFxuXHRcdFwiZm9yY2VQcm9tb0xpbmVcIjogMSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuatqVwiLFxuXHRcdFx0XCJzdGFydFwiOiBcIuS6jFwiLFxuXHRcdFx0XCJhdHRhY2tcIjogXCLlhbVcIixcblx0XHRcdFwiZW5QYXNzYW50XCI6IFwi6YCaXCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLlpoPpqI/ln47lg6dcIlxuXHR9LFxuXHRcIumojlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OK44Kk44OIXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuKZnumojlwiLCBcIuKZmOmojlwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsXG5cdFx0XCJ1bml0XCI6IFwi6aasXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpqI5cIlxuXHRcdH1cblx0fSxcblx0XCLogZZcIjoge1xuXHRcdFwibmFtZVwiOiBcIuODk+OCt+ODp+ODg+ODl1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLimZ3ogZZcIiwgXCLimZfogZZcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLFxuXHRcdFwidW5pdFwiOiBcIuixoVwiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6IGWXCJcblx0XHR9XG5cdH0sXG5cdFwi5aGUXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjg6vjg7zjgq9cIixcblx0XHRcImRpc3BsYXlcIjogW1wi4pmc5aGUXCIsIFwi4pmW5aGUXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcInVuaXRcIjogXCLou4pcIixcblx0XHRcImF0dHJcIjogW1wiY2FzdGxpbmdSb29rXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6LuKXCIsXG5cdFx0XHRcImNhc3RsaW5nXCI6IFwi5aGUXCJcblx0XHR9XG5cdH0sXG5cdFwi5ZCOXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgq/jgqTjg7zjg7NcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4pmb5ZCOXCIsIFwi4pmV5ZCOXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcInVuaXRcIjogXCLoh6NcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuWQjlwiXG5cdFx0fVxuXHR9LFxuXHRcIueOi1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Kt44Oz44KwXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuKZmueOi1wiLCBcIuKZlOeOi1wiXSxcblx0XHRcImFsaWFzXCI6IFwi5bidXCIsXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLFxuXHRcdFwidW5pdFwiOiBcIueOi1wiLFxuXHRcdFwiYXR0clwiOiBbXCJraW5nXCIsIFwiY2FzdGxpbmdLaW5nXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi546LXCIsXG5cdFx0XHRcImNhc3RsaW5nXCI6IFwi5Z+OXCJcblx0XHR9XG5cdH0sXG5cdFwi5Y2SXCI6IHtcblx0XHRcIm5hbWVcIjogXCLljZJcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4peL5Y2SXCIsIFwi4peL5YW1XCIsIFwi5Y2SXCIsIFwi5YW1XCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjgrfjg6Pjg7Pjg4Hjg7xcIixcblx0XHRcInVuaXRcIjogXCLlhbVcIixcblx0XHRcImZvcmNlUHJvbW9MaW5lXCI6IDQsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLmralcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIueOh1wiXG5cdH0sXG5cdFwi54KuXCI6IHtcblx0XHRcIm5hbWVcIjogXCLngq5cIixcblx0XHRcImRpc3BsYXlcIjogW1wi4peL54KuXCIsIFwi4peL56CyXCIsIFwi54KuXCIsIFwi56CyXCJdLFxuXHRcdFwiYWxpYXNcIjogXCLnoLJcIixcblx0XHRcImdhbWVOYW1lXCI6IFwi44K344Oj44Oz44OB44O8XCIsXG5cdFx0XCJ1bml0XCI6IFwi56CyXCIsXG5cdFx0XCJhdHRyXCI6IFtcInBhb1wiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIui7ilwiLFxuXHRcdFx0XCJhdHRhY2tcIjogXCLnoLJcIlxuXHRcdH1cblx0fSxcblx0XCLppq5cIjoge1xuXHRcdFwibmFtZVwiOiBcIuWCjFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLil4vlgoxcIiwgXCLil4vlgoxcIiwgXCLil4vppqxcIiwgXCLlgoxcIiwgXCLppqxcIl0sXG5cdFx0XCJhbGlhc1wiOiBcIuWCjFwiLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjgrfjg6Pjg7Pjg4Hjg7xcIixcblx0XHRcInVuaXRcIjogXCLppqxcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIummrlwiXG5cdFx0fVxuXHR9LFxuXHRcIuebuFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi55u4XCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuKXi+ebuFwiLCBcIuKXi+ixoVwiLCBcIuebuFwiLCBcIuixoVwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44K344Oj44Oz44OB44O8XCIsXG5cdFx0XCJ1bml0XCI6IFwi6LGhXCIsXG5cdFx0XCJhdHRyXCI6IFtcInVuQ3Jvc3NSaXZlclwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuebuFwiXG5cdFx0fVxuXHR9LFxuXHRcIuS/pVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5L+lXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuKXi+S/pVwiLCBcIuKXi+i7ilwiLCBcIuS/pVwiLCBcIui7ilwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44K344Oj44Oz44OB44O8XCIsXG5cdFx0XCJ1bml0XCI6IFwi6LuKXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLou4pcIlxuXHRcdH1cblx0fSxcblx0XCLku5VcIjoge1xuXHRcdFwibmFtZVwiOiBcIuS7lVwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLil4vku5VcIiwgXCLil4vlo6tcIiwgXCLku5VcIiwgXCLlo6tcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuOCt+ODo+ODs+ODgeODvFwiLFxuXHRcdFwidW5pdFwiOiBcIuiHo1wiLFxuXHRcdFwiYXR0clwiOiBbXCJpblBhbGFjZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwicGFsYWNlU2xhc2hcIjogXCLjgZ5cIlxuXHRcdH1cblx0fSxcblx0XCLluKVcIjoge1xuXHRcdFwibmFtZVwiOiBcIuW4pVwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLiipXluKVcIiwgXCLiipXlsIdcIiwgXCLluKVcIiwgXCLlsIdcIl0sXG5cdFx0XCJhbGlhc1wiOiBcIuWwh1wiLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjgrfjg6Pjg7Pjg4Hjg7xcIixcblx0XHRcInVuaXRcIjogXCLnjotcIixcblx0XHRcImF0dHJcIjogW1wia2luZ1wiLCBcImluUGFsYWNlXCIsIFwiY2FudFNlZUtpbmdcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLjgY1cIlxuXHRcdH1cblx0fSxcblx0XCLljYZcIjoge1xuXHRcdFwibmFtZVwiOiBcIuWNklwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLirKHljYZcIiwgXCLirKHljZJcIiwgXCLljYZcIiwgXCLljZJcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeODo+ODs+OCrlwiLFxuXHRcdFwidW5pdFwiOiBcIuWFtVwiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi5Y2SXCIsXG5cdFx0XHRcInBhbGFjZVNsYXNoXCI6IFwi5YW1XCJcblx0XHR9XG5cdH0sXG5cdFwi5YyFXCI6IHtcblx0XHRcIm5hbWVcIjogXCLljIVcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4qyh5YyFXCIsIFwi5YyFXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4Hjg6Pjg7Pjgq5cIixcblx0XHRcInVuaXRcIjogXCLnoLJcIixcblx0XHRcImF0dHJcIjogW1wicG9cIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLnoLJcIixcblx0XHRcdFwicGFsYWNlU2xhc2hcIjogXCLlvJNcIlxuXHRcdH1cblx0fSxcblx0XCLppq1cIjoge1xuXHRcdFwibmFtZVwiOiBcIummrFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLirKHpqaxcIiwgXCLirKHpqaxcIiwgXCLirKHppq1cIiwgXCLirKHppqxcIiwgXCLpqaxcIiwgXCLppq1cIiwgXCLppqxcIl0sXG5cdFx0XCJhbGlhc1wiOiBcIumprFwiLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4Hjg6Pjg7Pjgq5cIixcblx0XHRcInVuaXRcIjogXCLppqxcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIummrlwiXG5cdFx0fVxuXHR9LFxuXHRcIuixoVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi6LGhXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuKsoeixoVwiLCBcIuixoVwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44OB44Oj44Oz44KuXCIsXG5cdFx0XCJ1bml0XCI6IFwi6LGhXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLosaFcIlxuXHRcdH1cblx0fSxcblx0XCLou4pcIjoge1xuXHRcdFwibmFtZVwiOiBcIui7ilwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLirKHovaZcIiwgXCLirKHovaZcIiwgXCLirKHou4pcIiwgXCLovaZcIiwgXCLou4pcIl0sXG5cdFx0XCJhbGlhc1wiOiBcIui9plwiLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4Hjg6Pjg7Pjgq5cIixcblx0XHRcInVuaXRcIjogXCLou4pcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIui7ilwiLFxuXHRcdFx0XCJwYWxhY2VTbGFzaFwiOiBcIuiBllwiXG5cdFx0fVxuXHR9LFxuXHRcIuWjq1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5aOrXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuKsoeWjq1wiLCBcIuWjq1wiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44OB44Oj44Oz44KuXCIsXG5cdFx0XCJ1bml0XCI6IFwi6IejXCIsXG5cdFx0XCJhdHRyXCI6IFtcImluUGFsYWNlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi44GNXCIsXG5cdFx0XHRcInBhbGFjZVNsYXNoXCI6IFwi44GeXCJcblx0XHR9XG5cdH0sXG5cdFwi5qWaXCI6IHtcblx0XHRcIm5hbWVcIjogXCLmpZpcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4o+j5qWaXCIsIFwi4o+j5ryiXCIsIFwi5qWaXCIsIFwi5ryiXCJdLFxuXHRcdFwiYWxpYXNcIjogXCLmvKJcIixcblx0XHRcImdhbWVOYW1lXCI6IFwi44OB44Oj44Oz44KuXCIsXG5cdFx0XCJ1bml0XCI6IFwi546LXCIsXG5cdFx0XCJhdHRyXCI6IFtcImtpbmdcIiwgXCJpblBhbGFjZVwiLCBcImJpa2phbmdcIiwgXCJ1c2VQYXNzXCIsIFwic3dhcEhvcnNlRWxlcGhhbnRcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLjgY1cIixcblx0XHRcdFwicGFsYWNlU2xhc2hcIjogXCLjgZ5cIlxuXHRcdH1cblx0fSxcblx0XCLosp1cIjoge1xuXHRcdFwibmFtZVwiOiBcIuODk+OColwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLim4Losp1cIiwgXCLil47osp1cIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODnuODvOOCr+ODq+ODg+OCr1wiLFxuXHRcdFwidW5pdFwiOiBcIuWFtVwiLFxuXHRcdFwiZm9yY2VQcm9tb0xpbmVcIjogMSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuatqVwiLFxuXHRcdFx0XCJhdHRhY2tcIjogXCLlhbVcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIuiytFwiXG5cdH0sXG5cdFwi55GqXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjg57jg7xcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+QtOeRqlwiLCBcIvCfpoTnkapcIiwgXCLwn6aT55GqXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg57jg7zjgq/jg6vjg4Pjgq9cIixcblx0XHRcInVuaXRcIjogXCLppqxcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumojlwiXG5cdFx0fVxuXHR9LFxuXHRcIuaguVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Kz44O844OzXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIs6U5qC5XCIsIFwi8J+nhOaguVwiLCBcIuKPj+aguVwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44Oe44O844Kv44Or44OD44KvXCIsXG5cdFx0XCJ1bml0XCI6IFwi6LGhXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpioBcIlxuXHRcdH1cblx0fSxcblx0XCLoiLlcIjoge1xuXHRcdFwibmFtZVwiOiBcIuODq+OCouODvFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLir4roiLlcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODnuODvOOCr+ODq+ODg+OCr1wiLFxuXHRcdFwidW5pdFwiOiBcIui7ilwiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6LuKXCJcblx0XHR9XG5cdH0sXG5cdFwi56iuXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjg6Hjg4Pjg4hcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4pa056iuXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg57jg7zjgq/jg6vjg4Pjgq9cIixcblx0XHRcInVuaXRcIjogXCLoh6NcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuOBnlwiLFxuXHRcdFx0XCJzdGFydFwiOiBcIuW8kFwiXG5cdFx0fVxuXHR9LFxuXHRcIuWQm1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Kv44OzXCIsXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODnuODvOOCr+ODq+ODg+OCr1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLilrLlkJtcIiwgXCLilrPlkJtcIiwgXCLilrLlhaxcIiwgXCLilrPlhaxcIl0sXG5cdFx0XCJhbGlhc1wiOiBcIuWFrFwiLFxuXHRcdFwidW5pdFwiOiBcIueOi1wiLFxuXHRcdFwiYXR0clwiOiBbXCJraW5nXCIsIFwiY291bnRpbmdSdWxlc1wiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuOBnlwiXG5cdFx0fVxuXHR9LFxuXHRcIueBq1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OR44OA44O844OG44KjXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfl6HkurpcIiwgXCLwn5eh54GrXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4Hjg6Pjg4jjg6njg7PjgqxcIixcblx0XHRcInVuaXRcIjogXCLlhbVcIixcblx0XHRcImZvcmNlUHJvbW9MaW5lXCI6IDEsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLmralcIixcblx0XHRcdFwiYXR0YWNrXCI6IFwi5YW1XCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLmnbVcIlxuXHR9LFxuXHRcIuWkqVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OR44OA44O844OG44KjXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfl6HkurpcIiwgXCLwn5eh5aSpXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4Hjg6Pjg4jjg6njg7PjgqxcIixcblx0XHRcInVuaXRcIjogXCLlhbVcIixcblx0XHRcImZvcmNlUHJvbW9MaW5lXCI6IDEsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLmralcIixcblx0XHRcdFwiYXR0YWNrXCI6IFwi5YW1XCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLmqaFcIlxuXHR9LFxuXHRcIuacqFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OR44OA44O844OG44KjXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfl6HkurpcIiwgXCLwn5eh5pyoXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4Hjg6Pjg4jjg6njg7PjgqxcIixcblx0XHRcInVuaXRcIjogXCLlhbVcIixcblx0XHRcImZvcmNlUHJvbW9MaW5lXCI6IDEsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLmralcIixcblx0XHRcdFwiYXR0YWNrXCI6IFwi5YW1XCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLmiLBcIlxuXHR9LFxuXHRcIuWkp1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OR44OA44O844OG44KjXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfl6HkurpcIiwgXCLwn5eh5aSnXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4Hjg6Pjg4jjg6njg7PjgqxcIixcblx0XHRcInVuaXRcIjogXCLlhbVcIixcblx0XHRcImZvcmNlUHJvbW9MaW5lXCI6IDEsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLmralcIixcblx0XHRcdFwiYXR0YWNrXCI6IFwi5YW1XCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLlt6hcIlxuXHR9LFxuXHRcIuWkrlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OR44OA44O844OG44KjXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfl6HkurpcIiwgXCLwn5eh5Lq6XCIsIFwi8J+XoeWkrlwiXSxcblx0XHRcImFsaWFzXCI6IFwi5Lq6XCIsXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeODo+ODiOODqeODs+OCrFwiLFxuXHRcdFwidW5pdFwiOiBcIuWFtVwiLFxuXHRcdFwiZm9yY2VQcm9tb0xpbmVcIjogMSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuatqVwiLFxuXHRcdFx0XCJhdHRhY2tcIjogXCLlhbVcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIuW+gFwiXG5cdH0sXG5cdFwi5Y2IXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgqLjgrfjg6Xjg69cIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+QjuWNiFwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44OB44Oj44OI44Op44Oz44KsXCIsXG5cdFx0XCJ1bml0XCI6IFwi6aasXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpqI5cIlxuXHRcdH1cblx0fSxcblx0XCLlg49cIjoge1xuXHRcdFwibmFtZVwiOiBcIuOCrOOCuOODo1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn5CY5YOPXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4Hjg6Pjg4jjg6njg7PjgqxcIixcblx0XHRcInVuaXRcIjogXCLosaFcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuWDj1wiXG5cdFx0fVxuXHR9LFxuXHRcIuaIplwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Op44K/XCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfm57miKZcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeODo+ODiOODqeODs+OCrFwiLFxuXHRcdFwidW5pdFwiOiBcIui7ilwiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6LuKXCJcblx0XHR9XG5cdH0sXG5cdFwi6IejXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjg57jg7Pjg4jjg6pcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4pqU6IejXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4Hjg6Pjg4jjg6njg7PjgqxcIixcblx0XHRcInVuaXRcIjogXCLoh6NcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuOBnlwiXG5cdFx0fVxuXHR9LFxuXHRcIuS4u1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Op44O844K444OjXCIsXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeODo+ODiOODqeODs+OCrFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn5GR5Li7XCIsIFwi8J+boeS4u1wiLCBcIvCfm6Hmn7FcIl0sXG5cdFx0XCJhbGlhc1wiOiBcIuafsVwiLFxuXHRcdFwidW5pdFwiOiBcIueOi1wiLFxuXHRcdFwiYXR0clwiOiBbXCJraW5nXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi546LXCJcblx0XHR9XG5cdH0sXG5cdFwi44GyXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgbLjgojjgZNcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+QpOOBslwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44Gp44GG44G244Gk44GX44KH44GG44GOXCIsXG5cdFx0XCJ1bml0XCI6IFwi5YW1XCIsXG5cdFx0XCJhdHRyXCI6IFtcImNhcHR1cmVcIl0sXG5cdFx0XCJmb3JjZVByb21vTGluZVwiOiAxLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi5q2pXCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLjgatcIlxuXHR9LFxuXHRcIuOBnlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Ge44GGXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfkJjjgZ5cIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuOBqeOBhuOBtuOBpOOBl+OCh+OBhuOBjlwiLFxuXHRcdFwidW5pdFwiOiBcIuixoVwiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi44GeXCJcblx0XHR9XG5cdH0sXG5cdFwi44GNXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgY3jgorjgpNcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+mkuOBjVwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44Gp44GG44G244Gk44GX44KH44GG44GOXCIsXG5cdFx0XCJ1bml0XCI6IFwi6LuKXCIsXG5cdFx0XCJhdHRyXCI6IFtcImNhcHR1cmVcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLjgY1cIlxuXHRcdH1cblx0fSxcblx0XCLjg6lcIjoge1xuXHRcdFwibmFtZVwiOiBcIuODqeOCpOOCquODs1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn6aB44OpXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjganjgYbjgbbjgaTjgZfjgofjgYbjgY5cIixcblx0XHRcInVuaXRcIjogXCLnjotcIixcblx0XHRcImF0dHJcIjogW1wia2luZ1wiLCBcImNhcHR1cmVcIiwgXCJydWxlVGhyb3VnaFwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIueOi1wiXG5cdFx0fVxuXHR9LFxuXHRcIueHlVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi54eVXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIueHlVwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLnpr3lsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLlhbVcIixcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcImZvcmNlUHJvbW9MaW5lXCI6IDMsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLmralcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIum0iFwiXG5cdH0sXG5cdFwi6ZuJXCI6IHtcblx0XHRcIm5hbWVcIjogXCLpm4lcIixcblx0XHRcImRpc3BsYXlcIjogW1wi6ZuJXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuemveWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIummrFwiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6ZuJXCJcblx0XHR9XG5cdH0sXG5cdFwi6ba0XCI6IHtcblx0XHRcIm5hbWVcIjogXCLpioDlsIZcIixcblx0XHRcImRpc3BsYXlcIjogW1wi6ba0XCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuemveWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIuixoVwiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi54ybXCJcblx0XHR9XG5cdH0sXG5cdFwi6baJXCI6IHtcblx0XHRcIm5hbWVcIjogXCLptoko5bemKVwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLlt6bptolcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi56a95bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi6LuKXCIsXG5cdFx0XCJhdHRyXCI6IFtcImNhcHR1cmVcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLptolcIlxuXHRcdH1cblx0fSxcblx0XCLkuqtcIjoge1xuXHRcdFwibmFtZVwiOiBcIum2iSjlj7MpXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuWPs+m2iVwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLnpr3lsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLou4pcIixcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuS6q1wiXG5cdFx0fVxuXHR9LFxuXHRcIum3uVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi6be5XCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIum3uVwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLnpr3lsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLoh6NcIixcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcImZvcmNlUHJvbW9MaW5lXCI6IDMsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpholcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIumblVwiXG5cdH0sXG5cdFwi6bWsXCI6IHtcblx0XHRcIm5hbWVcIjogXCLptaxcIixcblx0XHRcImRpc3BsYXlcIjogW1wi6bWsXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuemveWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIueOi1wiLFxuXHRcdFwiYXR0clwiOiBbXCJraW5nXCIsIFwiY2FwdHVyZVwiLCBcInR3b1N3YWxsb3dzXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi546LXCJcblx0XHR9XG5cdH0sXG5cdFwi5LqsXCI6IHtcblx0XHRcIm5hbWVcIjogXCLkuqznv5RcIixcblx0XHRcImRpc3BsYXlcIjogW1wi5Lqs57+UXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuS6rOWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIummrFwiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwiZm9yY2VQcm9tb0xpbmVcIjogMyxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuS6rFwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi5bm+XCJcblx0fSxcblx0XCLpioVcIjoge1xuXHRcdFwibmFtZVwiOiBcIumKheWwhlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpioXlsIZcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5Lqs5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi6LGhXCIsXG5cdFx0XCJhdHRyXCI6IFtcImNhcHR1cmVcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpioVcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIuOBhlwiXG5cdH0sXG5cdFwi5bGxXCI6IHtcblx0XHRcIm5hbWVcIjogXCLlsbHou4pcIixcblx0XHRcImRpc3BsYXlcIjogW1wi5bGx6LuKXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuS6rOWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIui7ilwiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi5bGxXCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLjgZVcIlxuXHR9LFxuXHRcIue/hVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi6YeR57+FXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIumHkee/hVwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLkuqzlsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLoh6NcIixcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIue/hVwiXG5cdFx0fVxuXHR9LFxuXHRcIuaWl1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi6YeR5paXXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIumHkeaWl1wiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLkuqzlsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLoh6NcIixcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuaWl1wiXG5cdFx0fVxuXHR9LFxuXHRcIui3s1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi6Lez6aasXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIui3s+mmrFwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLlvqHlpoPlsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLppqxcIixcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumojlwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi5ZCrXCJcblx0fSxcblx0XCLov5RcIjoge1xuXHRcdFwibmFtZVwiOiBcIuWPjei7ilwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLlj43ou4pcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5b6h5aaD5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi6LuKXCIsXG5cdFx0XCJhdHRyXCI6IFtcImNhcHR1cmVcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLlj41cIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIuS9mVwiXG5cdH0sXG5cdFwi5aWzXCI6IHtcblx0XHRcIm5hbWVcIjogXCLlpoPlsIZcIixcblx0XHRcImRpc3BsYXlcIjogW1wi5aaD5bCHXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuW+oeWmg+Wwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIuiHo1wiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi5ZCOXCJcblx0XHR9XG5cdH0sXG5cdFwi6YaJXCI6IHtcblx0XHRcIm5hbWVcIjogXCLphonosaFcIixcblx0XHRcImRpc3BsYXlcIjogW1wi6YaJ6LGhXCJdLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5pyd5YCJ6LGh5qOLXCIsXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIuiHo1wiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCIsIFwiY2FudENhcHR1cmVcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpholcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIuWkqlwiXG5cdH0sXG5cdFwi5LiYXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjg53jg7zjg7NcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4pmf5YW1XCIsIFwi4pmZ5YW1XCIsIFwi4pmf5LiYXCIsIFwi4pmZ5LiYXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuODreOCueOCouODqeODouOCueODgeOCp+OCuVwiLFxuXHRcdFwidW5pdFwiOiBcIuWFtVwiLFxuXHRcdFwiZm9yY2VQcm9tb0xpbmVcIjogMSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuatqVwiLFxuXHRcdFx0XCJhdHRhY2tcIjogXCLlhbVcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIuWmg+moj+WfjlwiXG5cdH0sXG5cdFwi5rWcXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjg53jg7zjg7NcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4pmf5YW1XCIsIFwi4pmZ5YW1XCIsIFwi4pmf5rWcXCIsIFwi4pmZ5rWcXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuOCq+ODkeODluODqeODs+OCq+ODgeOCp+OCuVwiLFxuXHRcdFwidW5pdFwiOiBcIuWFtVwiLFxuXHRcdFwiYXR0clwiOiBbXCJlblBhc3NhbnRcIl0sXG5cdFx0XCJmb3JjZVByb21vTGluZVwiOiAxLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi5q2pXCIsXG5cdFx0XHRcInN0YXJ0XCI6IFwi5LqMXCIsXG5cdFx0XHRcImF0dGFja1wiOiBcIuWFtVwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi5aaD6aeI6aeB6aiP5Z+O5YOnXCJcblx0fSxcblx0XCLpp65cIjoge1xuXHRcdFwibmFtZVwiOiBcIuOCq+ODvOODh+OCo+ODiuODq1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn6mT6aeuXCIsIFwi8J+pkOmnrlwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLjgqvjg5Hjg5bjg6njg7Pjgqvjg4HjgqfjgrlcIixcblx0XHRcInVuaXRcIjogXCLoh6NcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumnrlwiXG5cdFx0fVxuXHR9LFxuXHRcIumnhlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Oe44O844K344Oj44OrXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfqZLpp4ZcIiwgXCLwn6mP6aeGXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuOCq+ODkeODluODqeODs+OCq+ODgeOCp+OCuVwiLFxuXHRcdFwidW5pdFwiOiBcIuiHo1wiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6aeGXCJcblx0XHR9XG5cdH0sXG5cdFwi5Zu9XCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgq3jg7PjgrBcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4pma546LXCIsIFwi4pmU546LXCJdLFxuXHRcdFwiYWxpYXNcIjogXCLlnItcIixcblx0XHRcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLjgqvjg5Hjg5bjg6njg7Pjgqvjg4HjgqfjgrlcIixcblx0XHRcInVuaXRcIjogXCLnjotcIixcblx0XHRcImF0dHJcIjogW1wia2luZ1wiLCBcImNhc3RsaW5nS2luZ1wiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIueOi1wiLFxuXHRcdFx0XCJjYXN0bGluZ1wiOiBcIuWbvVwiXG5cdFx0fVxuXHR9LFxuXHRcIuefolwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OR44OA44O844OG44KjXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfl6HkurpcIiwgXCLwn5eh55+iXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4Hjg6Pjg4jjg6njg7PjgqxcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuODgeODo+ODiOODqeOCuFwiLFxuXHRcdFwidW5pdFwiOiBcIuWFtVwiLFxuXHRcdFwiZm9yY2VQcm9tb0xpbmVcIjogMSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuatqVwiLFxuXHRcdFx0XCJhdHRhY2tcIjogXCLlhbVcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIuiItlwiXG5cdH0sXG5cdFwi5pysXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjg5Hjg4Djg7zjg4bjgqNcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+XoeS6ulwiLCBcIvCfl6HmnKxcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeODo+ODiOODqeODs+OCrFwiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi44OB44Oj44OI44Op44K4XCIsXG5cdFx0XCJ1bml0XCI6IFwi5YW1XCIsXG5cdFx0XCJmb3JjZVByb21vTGluZVwiOiAxLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi5q2pXCIsXG5cdFx0XHRcImF0dGFja1wiOiBcIuWFtVwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi6LGqXCJcblx0fSxcblx0XCLoiJ9cIjoge1xuXHRcdFwibmFtZVwiOiBcIuODreODvOOCq1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLim7XoiJ9cIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeODo+ODiOODqeODs+OCrFwiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi44OB44Oj44OI44Op44K4XCIsXG5cdFx0XCJ1bml0XCI6IFwi6LGhXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLlg49cIlxuXHRcdH1cblx0fSxcblx0XCLosZVcIjoge1xuXHRcdFwibmFtZVwiOiBcIuODj+OCueODhuOCo+ODvFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn5CY6LGVXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4Hjg6Pjg4jjg6njg7PjgqxcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuODgeODo+ODiOODqeOCuFwiLFxuXHRcdFwidW5pdFwiOiBcIui7ilwiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6LuKXCJcblx0XHR9XG5cdH0sXG5cdFwi44GtXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjga3jgZNcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+QseOBrVwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44Gp44GG44G244Gk44GX44KH44GG44GOXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLjgZTjgo3jgZTjgo3jganjgYbjgbbjgaTjgZfjgofjgYbjgY5cIixcblx0XHRcInVuaXRcIjogXCLosaFcIixcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumKgFwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi44ONXCJcblx0fSxcblx0XCLjgYRcIjoge1xuXHRcdFwibmFtZVwiOiBcIuOBhOOBrFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn5C244GEXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjganjgYbjgbbjgaTjgZfjgofjgYbjgY5cIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuOBlOOCjeOBlOOCjeOBqeOBhuOBtuOBpOOBl+OCh+OBhuOBjlwiLFxuXHRcdFwidW5pdFwiOiBcIuiHo1wiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6YeRXCJcblx0XHR9XG5cdH0sXG5cdFwi44KJXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjg6njgqTjgqrjg7NcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+mgeODqVwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44Gp44GG44G244Gk44GX44KH44GG44GOXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLjgZTjgo3jgZTjgo3jganjgYbjgbbjgaTjgZfjgofjgYbjgY5cIixcblx0XHRcInVuaXRcIjogXCLnjotcIixcblx0XHRcImF0dHJcIjogW1wia2luZ1wiLCBcImNhcHR1cmVcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLnjotcIlxuXHRcdH1cblx0fSxcblx0XCLku7JcIjoge1xuXHRcdFwibmFtZVwiOiBcIuS7suS6ulwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLku7LkurpcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5Lit5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi5YW1XCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLku7JcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIumFlFwiXG5cdH0sXG5cdFwi5ZCMXCI6IHtcblx0XHRcIm5hbWVcIjogXCLpioXlsIZcIixcblx0XHRcImRpc3BsYXlcIjogW1wi6YqF5bCGXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuS4reWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIuiHo1wiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi5q2pXCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLpu4RcIlxuXHR9LFxuXHRcIuiJrlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi6YqA5bCGXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIumKgOWwhlwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLkuK3lsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLosaFcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumKgFwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi5aCFXCJcblx0fSxcblx0XCLph6FcIjoge1xuXHRcdFwibmFtZVwiOiBcIumHkeWwhlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLph5HlsIdcIiwgXCLph5HlsIZcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5Lit5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi6IejXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLph5FcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIuWNh1wiXG5cdH0sXG5cdFwi54ybXCI6IHtcblx0XHRcIm5hbWVcIjogXCLnjJvosblcIixcblx0XHRcImRpc3BsYXlcIjogW1wi54yb6LG5XCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuS4reWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIuixoVwiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi54ybXCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLmobdcIlxuXHR9LFxuXHRcIummqFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi6aaZ6LuKXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIummmei7ilwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLkuK3lsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLou4pcIixcblx0XHRcImZvcmNlUHJvbW9MaW5lXCI6IDEsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLppplcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIumnklwiXG5cdH0sXG5cdFwi5Y+NXCI6IHtcblx0XHRcIm5hbWVcIjogXCLlj43ou4pcIixcblx0XHRcImRpc3BsYXlcIjogW1wi5Y+N6LuKXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuS4reWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIui7ilwiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi5Y+NXCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLpr6hcIlxuXHR9LFxuXHRcIuiZjlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi55uy6JmOXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuebsuiZjlwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLkuK3lsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLosaFcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuiZjlwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi6bm/XCJcblx0fSxcblx0XCLpupJcIjoge1xuXHRcdFwibmFtZVwiOiBcIum6kum6n1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpupLpup9cIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5Lit5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi6aasXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpupJcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIumwpFwiXG5cdH0sXG5cdFwi6bOzXCI6IHtcblx0XHRcIm5hbWVcIjogXCLps7Plh7BcIixcblx0XHRcImRpc3BsYXlcIjogW1wi6bOz5YewXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuS4reWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIuixoVwiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6bOzXCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLljYlcIlxuXHR9LFxuXHRcIuaoqlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5qiq6KGMXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuaoquihjFwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLkuK3lsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLou4pcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuaoqlwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi54yqXCJcblx0fSxcblx0XCLnq6pcIjoge1xuXHRcdFwibmFtZVwiOiBcIuerquihjFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLnq6rooYxcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5Lit5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi6LuKXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLnq6pcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIueJm1wiXG5cdH0sXG5cdFwi56K8XCI6IHtcblx0XHRcIm5hbWVcIjogXCLnq5zppqxcIixcblx0XHRcImRpc3BsYXlcIjogW1wi56uc6aasXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuS4reWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIuiHo1wiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6aasXCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLpt4JcIlxuXHR9LFxuXHRcIuernFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi56uc546LXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuernOeOi1wiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLkuK3lsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLoh6NcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuernFwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi6beyXCJcblx0fSxcblx0XCLlpZRcIjoge1xuXHRcdFwibmFtZVwiOiBcIuWllOi1sFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLlpZTotbBcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5Lit5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi6IejXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLlkI5cIlxuXHRcdH1cblx0fSxcblx0XCLnjYVcIjoge1xuXHRcdFwibmFtZVwiOiBcIueNheWtkFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLnjYXlrZBcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5Lit5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi6IejXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLnjYVcIlxuXHRcdH1cblx0fSxcblx0XCLnn7NcIjoge1xuXHRcdFwibmFtZVwiOiBcIuefs+WwhlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLnn7PlsIZcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5aSn5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi5YW1XCIsXG5cdFx0XCJmb3JjZVByb21vTGluZVwiOiAxLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi5YW1XCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLpiZBcIlxuXHR9LFxuXHRcIumJhFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi6YmE5bCGXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIumQteWwhlwiLCBcIumQteWwhlwiLCBcIumJhOWwhlwiXSxcblx0XHRcImFsaWFzXCI6IFwi6ZC1XCIsXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5aSn5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi5YW1XCIsXG5cdFx0XCJmb3JjZVByb21vTGluZVwiOiAxLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6YmEXCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLpi7xcIlxuXHR9LFxuXHRcIueMq1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi54yr5YiEXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIueMq+WIhFwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLlpKflsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLosaFcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuOBnlwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi6YyoXCJcblx0fSxcblx0XCLngKdcIjoge1xuXHRcdFwibmFtZVwiOiBcIumjm+m+jVwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpo5vpvo1cIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5aSn5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi6LGhXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLngKdcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIumMhlwiXG5cdH0sXG5cdFwi5ZeUXCI6IHtcblx0XHRcIm5hbWVcIjogXCLll5TnjKpcIixcblx0XHRcImRpc3BsYXlcIjogW1wi5ZeU54yqXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLlsIbmo4tcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuWkp+Wwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIui7ilwiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi44GNXCJcblx0XHR9LFxuXHRcdFwicHJvbW9cIjogXCLpjq1cIlxuXHR9LFxuXHRcIuS4kVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi54yb54mbXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIueMm+eJm1wiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi5bCG5qOLXCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLlpKflsIbmo4tcIixcblx0XHRcInVuaXRcIjogXCLou4pcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuS4kVwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi6YiVXCJcblx0fSxcblx0XCLni7xcIjoge1xuXHRcdFwibmFtZVwiOiBcIuaCqueLvFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLmgqrni7xcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi5aSn5bCG5qOLXCIsXG5cdFx0XCJ1bml0XCI6IFwi6IejXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLni7xcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIueLglwiXG5cdH0sXG5cdFwi5qK5XCI6IHtcblx0XHRcIm5hbWVcIjogXCLjg53jg7zjg7NcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4pmf5YW1XCIsIFwi4pmZ5YW1XCIsIFwi4pmf5qK5XCIsIFwi4pmZ5qK5XCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIkdyYW50QWNlZHJleFwiLFxuXHRcdFwidW5pdFwiOiBcIuWFtVwiLFxuXHRcdFwiZm9yY2VQcm9tb0xpbmVcIjogMSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuatqVwiLFxuXHRcdFx0XCJhdHRhY2tcIjogXCLlhbVcIlxuXHRcdH0sXG5cdFx0XCJwcm9tb1wiOiBcIuevqemBsum6i+m9tuWhnum1ulwiXG5cdH0sXG5cdFwi5birXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjg6njgqTjgqrjg7NcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+mgeW4q1wiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCJHcmFudEFjZWRyZXhcIixcblx0XHRcInVuaXRcIjogXCLppqxcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuW4q1wiXG5cdFx0fVxuXHR9LFxuXHRcIueKgFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Om44OL44Kz44O844OzXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfpo/nioBcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwiR3JhbnRBY2VkcmV4XCIsXG5cdFx0XCJ1bml0XCI6IFwi6aasXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLnioBcIlxuXHRcdH1cblx0fSxcblx0XCLpup9cIjoge1xuXHRcdFwibmFtZVwiOiBcIuOCuOODqeODlVwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn6aS6bqfXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIkdyYW50QWNlZHJleFwiLFxuXHRcdFwidW5pdFwiOiBcIuixoVwiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6bqfXCJcblx0XHR9XG5cdH0sXG5cdFwi6bCQXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgrPjgqvjg4jjg6rjgrlcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+QiumwkFwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCJHcmFudEFjZWRyZXhcIixcblx0XHRcInVuaXRcIjogXCLosaFcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuiBllwiXG5cdFx0fVxuXHR9LFxuXHRcIuegplwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Or44O844KvXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuKZnOegplwiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCJHcmFudEFjZWRyZXhcIixcblx0XHRcInVuaXRcIjogXCLou4pcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIui7ilwiXG5cdFx0fVxuXHR9LFxuXHRcIum0u1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Ki44Oz44KrXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfpoXptLtcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwiR3JhbnRBY2VkcmV4XCIsXG5cdFx0XCJ1bml0XCI6IFwi6IejXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLptLtcIlxuXHRcdH1cblx0fSxcblx0XCLlkYhcIjoge1xuXHRcdFwibmFtZVwiOiBcIuOCreODs+OCsFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLimZrnjotcIiwgXCLimZTnjotcIl0sXG5cdFx0XCJhbGlhc1wiOiBcIumAnlwiLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcImV4cGFuc2lvblwiOlwiR3JhbnRBY2VkcmV4XCIsXG5cdFx0XCJ1bml0XCI6IFwi546LXCIsXG5cdFx0XCJhdHRyXCI6IFtcImtpbmdcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLnjotcIixcblx0XHRcdFwic3RhcnRcIjogXCLlkYhcIlxuXHRcdH1cblx0fSxcblx0XCLpi7JcIjoge1xuXHRcdFwibmFtZVwiOiBcIuOCveODq+ODgOODvOODiFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLimZ/lhbVcIiwgXCLimZnlhbVcIiwgXCLimZ/pi7JcIiwgXCLimZnpi7JcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi44Kv44O844Oq44Ko44OB44Kn44K5XCIsXG5cdFx0XCJ1bml0XCI6IFwi5YW1XCIsXG5cdFx0XCJmb3JjZVByb21vTGluZVwiOiAxLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi5q2pXCIsXG5cdFx0XHRcImF0dGFja1wiOiBcIuWFtVwiXG5cdFx0fSxcblx0XHRcInByb21vXCI6IFwi56ulXCJcblx0fSxcblx0XCLlsIRcIjoge1xuXHRcdFwibmFtZVwiOiBcIuOCt+ODpeODg+ODhOOCp1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn4+55bCEXCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuOCr+ODvOODquOCqOODgeOCp+OCuVwiLFxuXHRcdFwidW5pdFwiOiBcIuixoVwiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi5YOPXCJcblx0XHR9XG5cdH0sXG5cdFwi5L2/XCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgq/jg7zjg6rjgqhcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4qi65L2/XCJdLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuOCr+ODvOODquOCqOODgeOCp+OCuVwiLFxuXHRcdFwidW5pdFwiOiBcIuixoVwiLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6IGWXCJcblx0XHR9XG5cdH0sXG5cdFwi5L2vXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgrfjg6Xjg6njgqTjg5JcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+OreS9r1wiXSxcblx0XHRcImdhbWVOYW1lXCI6IFwi44OB44Kn44K5XCIsXG5cdFx0XCJleHBhbnNpb25cIjogXCLjgq/jg7zjg6rjgqjjg4HjgqfjgrlcIixcblx0XHRcInVuaXRcIjogXCLou4pcIixcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuOBjVwiXG5cdFx0fVxuXHR9LFxuXHRcIuizolwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44Oe44OzXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfjpPos6JcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi44Kv44O844Oq44Ko44OB44Kn44K5XCIsXG5cdFx0XCJ1bml0XCI6IFwi6IejXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLnjotcIlxuXHRcdH1cblx0fSxcblx0XCLlpr5cIjoge1xuXHRcdFwibmFtZVwiOiBcIuOCseODvOODi+OCruODs1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLimZvlpr5cIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuODgeOCp+OCuVwiLFxuXHRcdFwiZXhwYW5zaW9uXCI6IFwi44Kv44O844Oq44Ko44OB44Kn44K5XCIsXG5cdFx0XCJ1bml0XCI6IFwi6IejXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLjgZ5cIlxuXHRcdH1cblx0fSxcblx0XCLplo9cIjoge1xuXHRcdFwibmFtZVwiOiBcIuOCseODvOODi+ODklwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLimZrnjotcIiwgXCLimZTnjotcIl0sXG5cdFx0XCJhbGlhc1wiOiBcIua9pFwiLFxuXHRcdFwiZ2FtZU5hbWVcIjogXCLjg4HjgqfjgrlcIixcblx0XHRcImV4cGFuc2lvblwiOiBcIuOCr+ODvOODquOCqOODgeOCp+OCuVwiLFxuXHRcdFwidW5pdFwiOiBcIueOi1wiLFxuXHRcdFwiYXR0clwiOiBbXCJraW5nXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi546LXCJcblx0XHR9XG5cdH0sXG5cdFwi44GoXCI6IHtcblx0XHRcIm5hbWVcIjogXCLjgajph5FcIixcblx0XHRcImRpc3BsYXlcIjogW1wi44GoXCIsIFwi5LiqXCJdLFxuXHRcdFwiYWxpYXNcIjogXCLkuKpcIixcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumHkVwiXG5cdFx0fVxuXHR9LFxuXHRcIuadj1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5oiQ6aaZXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuS7nVwiLCBcIuS7nVwiLCBcIuadj1wiXSxcblx0XHRcImFsaWFzXCI6IFwi5LudXCIsXG5cdFx0XCJhdHRyXCI6IFtcImNhcHR1cmVcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLph5FcIlxuXHRcdH1cblx0fSxcblx0XCLlnK1cIjoge1xuXHRcdFwibmFtZVwiOiBcIuaIkOahglwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLku4pcIiwgXCLku4pcIiwgXCLlnK1cIl0sXG5cdFx0XCJhbGlhc1wiOiBcIuS7ilwiLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6YeRXCJcblx0XHR9XG5cdH0sXG5cdFwi5YWoXCI6IHtcblx0XHRcIm5hbWVcIjogXCLmiJDpioBcIixcblx0XHRcImRpc3BsYXlcIjogW1wi5YWoXCJdLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6YeRXCJcblx0XHR9XG5cdH0sXG5cdFwi6aasXCI6IHtcblx0XHRcIm5hbWVcIjogXCLpvo3ppqxcIixcblx0XHRcImRpc3BsYXlcIjogW1wi6b6N6aasXCIsIFwi56uc6aasXCJdLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6aasXCJcblx0XHR9XG5cdH0sXG5cdFwi6b6NXCI6IHtcblx0XHRcIm5hbWVcIjogXCLpvo3njotcIixcblx0XHRcImRpc3BsYXlcIjogW1wi6b6N546LXCIsIFwi6b6N546LXCIsIFwi56uc546LXCJdLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi56ucXCJcblx0XHR9XG5cdH0sXG5cdFwi5aaDXCI6IHtcblx0XHRcIm5hbWVcIjogXCJQ44Kv44Kk44O844OzXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuKZleWmg1wiLCBcIuKZm+Wmg1wiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuWQjlwiXG5cdFx0fVxuXHR9LFxuXHRcIumoj1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwiUOODiuOCpOODiFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLimZjpqI9cIiwgXCLimZ7pqI9cIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpqI5cIlxuXHRcdH1cblx0fSxcblx0XCLln45cIjoge1xuXHRcdFwibmFtZVwiOiBcIlDjg6vjg7zjgq9cIixcblx0XHRcImRpc3BsYXlcIjogW1wi4pmW5Z+OXCIsIFwi4pmc5Z+OXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6LuKXCJcblx0XHR9XG5cdH0sXG5cdFwi5YOnXCI6IHtcblx0XHRcIm5hbWVcIjogXCJQ44OT44K344On44OD44OXXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuKZl+WDp1wiLCBcIuKZneWDp1wiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuiBllwiXG5cdFx0fVxuXHR9LFxuXHRcIueOh1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5oiQ5Y2SXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuKKlueOh1wiLCBcIuKKluWNklwiLCBcIuKKluWFtVwiLCBcIueOh1wiLCBcIuWNklwiLCBcIuWFtVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuWNklwiXG5cdFx0fVxuXHR9LFxuXHRcIuiytFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OT44Ki44Ks44O844KkXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuKbgOiytFwiLCBcIuKbgOePoFwiLCBcIuKXieiytFwiLCBcIuKXieePoFwiXSxcblx0XHRcImFsaWFzXCI6IFwi54+gXCIsXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLjgZ5cIlxuXHRcdH1cblx0fSxcblx0XCLmnbVcIjoge1xuXHRcdFwibmFtZVwiOiBcIlDjgqLjgrfjg6Xjg69cIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+QjuadtVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumojlwiXG5cdFx0fVxuXHR9LFxuXHRcIuapoVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwiUOOCrOOCuOODo1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn5CY5qmhXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi5YOPXCJcblx0XHR9XG5cdH0sXG5cdFwi5oiwXCI6IHtcblx0XHRcIm5hbWVcIjogXCJQ44Op44K/XCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfm57miLBcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLou4pcIlxuXHRcdH1cblx0fSxcblx0XCLlt6hcIjoge1xuXHRcdFwibmFtZVwiOiBcIlDjg57jg7Pjg4jjg6pcIixcblx0XHRcImRpc3BsYXlcIjogW1wi4pqU5beoXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi44GeXCJcblx0XHR9XG5cdH0sXG5cdFwi5b6AXCI6IHtcblx0XHRcIm5hbWVcIjogXCJQ44Op44O844K444OjXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCflLHlvoBcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLnjotcIlxuXHRcdH1cblx0fSxcblx0XCLjgatcIjoge1xuXHRcdFwibmFtZVwiOiBcIuOBq+OCj+OBqOOCilwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn5CU44GrXCJdLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6YeRXCJcblx0XHR9XG5cdH0sXG5cdFwi6bSIXCI6IHtcblx0XHRcIm5hbWVcIjogXCLptIhcIixcblx0XHRcImRpc3BsYXlcIjogW1wi6bSIXCJdLFxuXHRcdFwiYXR0clwiOiBbXCJjYXB0dXJlXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi6bSIXCJcblx0XHR9XG5cdH0sXG5cdFwi5bemXCI6IHtcblx0XHRcIm5hbWVcIjogXCLlt6Yo6baJKVwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLlt6ZcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIui7ilwiLFxuXHRcdFwiYXR0clwiOiBbXCJwcm9tb3RlZFwiXSxcblx0XHRcInJhbmdlXCI6IHt9XG5cdH0sXG5cdFwi5Y+zXCI6IHtcblx0XHRcIm5hbWVcIjogXCLlj7Mo6baJKVwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLlj7NcIl0sXG5cdFx0XCJnYW1lTmFtZVwiOiBcIuWwhuaji1wiLFxuXHRcdFwidW5pdFwiOiBcIui7ilwiLFxuXHRcdFwiYXR0clwiOiBbXCJwcm9tb3RlZFwiXSxcblx0XHRcInJhbmdlXCI6IHt9XG5cdH0sXG5cdFwi6ZuVXCI6IHtcblx0XHRcIm5hbWVcIjogXCLptbBcIixcblx0XHRcImRpc3BsYXlcIjogW1wi6bWwXCIsIFwi6bWwXCJdLFxuXHRcdFwiYWxpYXNcIjogXCLptbBcIixcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumblVwiXG5cdFx0fVxuXHR9LFxuXHRcIuW5vlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5oiQ5LqsXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuOBjVwiXSxcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumHkVwiXG5cdFx0fVxuXHR9LFxuXHRcIuOBhlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5oiQ6YqFXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuOBhlwiXSxcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumHkVwiXG5cdFx0fVxuXHR9LFxuXHRcIuOBlVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5oiQ5bGxXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuOBlVwiXSxcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumHkVwiXG5cdFx0fVxuXHR9LFxuXHRcIuWkqlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5aSq5a2QXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuWkquWtkFwiXSxcblx0XHRcImF0dHJcIjogW1wia2luZ1wiLCBcImNhcHR1cmVcIiwgXCJjYW50Q2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIueOi1wiXG5cdFx0fVxuXHR9LFxuXHRcIuS9mVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5oiQ5Y+NXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuS9mVwiXSxcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumHkVwiXG5cdFx0fVxuXHR9LFxuXHRcIuWQq1wiOiB7XG5cdFx0XCJuYW1lXCI6IFwi5oiQ6LezXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIuWQq1wiXSxcblx0XHRcImF0dHJcIjogW1wiY2FwdHVyZVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumHkVwiXG5cdFx0fVxuXHR9LFxuXHRcIumngVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwiUOOCq+ODvOODh+OCo+ODiuODq1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn6mQ6aeBXCIsIFwi8J+pk+mngVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumnrlwiXG5cdFx0fVxuXHR9LFxuXHRcIumniFwiOiB7XG5cdFx0XCJuYW1lXCI6IFwiUOODnuODvOOCt+ODo+ODq1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn6mP6aeIXCIsIFwi8J+pkumniFwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIumnhlwiXG5cdFx0fVxuXHR9LFxuXHRcIuiItlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwiUOODreODvOOCq1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLim7XoiLZcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLlg49cIlxuXHRcdH1cblx0fSxcblx0XCLosapcIjoge1xuXHRcdFwibmFtZVwiOiBcIlDjg4/jgrnjg4bjgqPjg7xcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+QmOixqlwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIui7ilwiXG5cdFx0fVxuXHR9LFxuXHRcIuODjVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwi44OR44Ov44O844Ki44OD44OX44Gt44GTXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfmLrjg41cIl0sXG5cdFx0XCJhdHRyXCI6IFtcImNhcHR1cmVcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLph5FcIlxuXHRcdH1cblx0fSxcblx0XCLljYdcIjoge1xuXHRcdFwibmFtZVwiOiBcIumHkemjm+i7ilwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLph5Hpo5tcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLou4pcIlxuXHRcdH1cblx0fSxcblx0XCLloIVcIjoge1xuXHRcdFwibmFtZVwiOiBcIumKgOerquihjFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpioDnq6pcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLnq6pcIlxuXHRcdH1cblx0fSxcblx0XCLpu4RcIjoge1xuXHRcdFwibmFtZVwiOiBcIumKheaoquihjFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpioXmqKpcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLmqKpcIlxuXHRcdH1cblx0fSxcblx0XCLmobdcIjoge1xuXHRcdFwibmFtZVwiOiBcIuWwj+inklwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLlsI/op5JcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLogZZcIlxuXHRcdH1cblx0fSxcblx0XCLpp5JcIjoge1xuXHRcdFwibmFtZVwiOiBcIueZvemnklwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLnmb3pp5JcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpp5JcIlxuXHRcdH1cblx0fSxcblx0XCLpr6hcIjoge1xuXHRcdFwibmFtZVwiOiBcIumvqOmvolwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpr6jpr6JcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpr6hcIlxuXHRcdH1cblx0fSxcblx0XCLpub9cIjoge1xuXHRcdFwibmFtZVwiOiBcIumjm+m5v1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpo5vpub9cIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpub9cIlxuXHRcdH1cblx0fSxcblx0XCLpsKRcIjoge1xuXHRcdFwibmFtZVwiOiBcIum6kueNheWtkFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpupLnjYVcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLnjYVcIlxuXHRcdH1cblx0fSxcblx0XCLljYlcIjoge1xuXHRcdFwibmFtZVwiOiBcIumzs+WllOi1sFwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLps7PlpZRcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLlkI5cIlxuXHRcdH1cblx0fSxcblx0XCLphZRcIjoge1xuXHRcdFwibmFtZVwiOiBcIumFlOixoVwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLphZTosaFcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpholcIlxuXHRcdH1cblx0fSxcblx0XCLnjKpcIjoge1xuXHRcdFwibmFtZVwiOiBcIuWllOeMqlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLlpZTnjKpcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLnjKpcIlxuXHRcdH1cblx0fSxcblx0XCLniZtcIjoge1xuXHRcdFwibmFtZVwiOiBcIumjm+eJm1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpo5vniZtcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLniZtcIlxuXHRcdH1cblx0fSxcblx0XCLpt4JcIjoge1xuXHRcdFwibmFtZVwiOiBcIuinkum3uVwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLop5Lpt7lcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpt4JcIlxuXHRcdH1cblx0fSxcblx0XCLpt7JcIjoge1xuXHRcdFwibmFtZVwiOiBcIumjm+m3slwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpo5vpt7JcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpt7JcIlxuXHRcdH1cblx0fSxcblx0XCLpiZBcIjoge1xuXHRcdFwibmFtZVwiOiBcIuefs+mHkeWwhlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLnn7Pph5FcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLph5FcIlxuXHRcdH1cblx0fSxcblx0XCLpi7xcIjoge1xuXHRcdFwibmFtZVwiOiBcIumHkeWwhlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpiYTph5FcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLph5FcIlxuXHRcdH1cblx0fSxcblx0XCLpjKhcIjoge1xuXHRcdFwibmFtZVwiOiBcIueMq+mHkeWwhlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLnjKvph5FcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLph5FcIlxuXHRcdH1cblx0fSxcblx0XCLpjIZcIjoge1xuXHRcdFwibmFtZVwiOiBcIum+jemHkeWwhlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLpvo3ph5FcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLph5FcIlxuXHRcdH1cblx0fSxcblx0XCLpjq1cIjoge1xuXHRcdFwibmFtZVwiOiBcIuWXlOmHkeWwhlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLll5Tph5FcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLph5FcIlxuXHRcdH1cblx0fSxcblx0XCLpiJVcIjoge1xuXHRcdFwibmFtZVwiOiBcIueJm+mHkeWwhlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLniZvph5FcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLph5FcIlxuXHRcdH1cblx0fSxcblx0XCLni4JcIjoge1xuXHRcdFwibmFtZVwiOiBcIueLvOmHkeWwhlwiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLni7zph5FcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLph5FcIlxuXHRcdH1cblx0fSxcblx0XCLnr6lcIjoge1xuXHRcdFwibmFtZVwiOiBcIlDjg6njgqTjgqrjg7NcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+mgeevqVwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuW4q1wiXG5cdFx0fVxuXHR9LFxuXHRcIumBslwiOiB7XG5cdFx0XCJuYW1lXCI6IFwiUOODpuODi+OCs+ODvOODs1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLwn6aP6YGyXCJdLFxuXHRcdFwicmFuZ2VcIjoge1xuXHRcdFx0XCJkZWZhdWx0XCI6IFwi54qAXCJcblx0XHR9XG5cdH0sXG5cdFwi6bqLXCI6IHtcblx0XHRcIm5hbWVcIjogXCJQ44K444Op44OVXCIsXG5cdFx0XCJkaXNwbGF5XCI6IFtcIvCfppLpuotcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLpup9cIlxuXHRcdH1cblx0fSxcblx0XCLpvbZcIjoge1xuXHRcdFwibmFtZVwiOiBcIlDjgrPjgqvjg4jjg6rjgrlcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+Qium9tlwiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIuiBllwiXG5cdFx0fVxuXHR9LFxuXHRcIuWhnlwiOiB7XG5cdFx0XCJuYW1lXCI6IFwiUOODq+ODvOOCr1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLimZbloZ5cIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLou4pcIlxuXHRcdH1cblx0fSxcblx0XCLptbpcIjoge1xuXHRcdFwibmFtZVwiOiBcIlDjgqLjg7PjgqtcIixcblx0XHRcImRpc3BsYXlcIjogW1wi8J+mhem0u1wiXSxcblx0XHRcInJhbmdlXCI6IHtcblx0XHRcdFwiZGVmYXVsdFwiOiBcIum0u1wiXG5cdFx0fVxuXHR9LFxuXHRcIuerpVwiOiB7XG5cdFx0XCJuYW1lXCI6IFwiUOOCseODvOODi+OCruODs1wiLFxuXHRcdFwiZGlzcGxheVwiOiBbXCLimZXnq6VcIl0sXG5cdFx0XCJyYW5nZVwiOiB7XG5cdFx0XHRcImRlZmF1bHRcIjogXCLjgZ5cIlxuXHRcdH1cblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRcIuOAh1wiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi5PLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLmralcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uQS4uLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi5YW1XCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uQS5BLi5cIixcblx0XHRcIi4uLk8uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIuS6jFwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi5BLi4uXCIsXG5cdFx0XCIuLi5hLi4uXCIsXG5cdFx0XCIuLi5PLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLpgJpcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi5BT0EuLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi5byQXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLkEuLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLk8uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIuWNklwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi5BLi4uXCIsXG5cdFx0XCIuLkFPQS4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLptIhcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLkEuLi5BLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uQS4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi5LuyXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLkEuLi5cIixcblx0XHRcIi4uLk8uLi5cIixcblx0XHRcIi4uLkEuLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIumJhFwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLkFBQS4uXCIsXG5cdFx0XCIuLi5PLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLmoYJcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi5BLkEuLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi5LqsXCI6IFtcblx0XHRcIi4uQS5BLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLk8uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIumojlwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLkEuQS4uXCIsXG5cdFx0XCIuQS4uLkEuXCIsXG5cdFx0XCIuLi5PLi4uXCIsXG5cdFx0XCIuQS4uLkEuXCIsXG5cdFx0XCIuLkEuQS4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLppq5cIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi5BLkEuLlwiLFxuXHRcdFwiLkQuYS5CLlwiLFxuXHRcdFwiLi5kT2IuLlwiLFxuXHRcdFwiLkQuYy5CLlwiLFxuXHRcdFwiLi5DLkMuLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi6ZuJXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLkEuLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLk8uLi5cIixcblx0XHRcIi4uQS5BLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIuW4q1wiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLkFBQS4uXCIsXG5cdFx0XCIuQS4uLkEuXCIsXG5cdFx0XCIuQS5PLkEuXCIsXG5cdFx0XCIuQS4uLkEuXCIsXG5cdFx0XCIuLkFBQS4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLnioBcIjogW1xuXHRcdFwiLiouLi4qLlwiLFxuXHRcdFwiKi5vLm8uKlwiLFxuXHRcdFwiLm8uLi5vLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLm8uLi5vLlwiLFxuXHRcdFwiKi5vLm8uKlwiLFxuXHRcdFwiLiouLi4qLlwiXG5cdF0sXG5cdFwi44GeXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uQS5BLi5cIixcblx0XHRcIi4uLk8uLi5cIixcblx0XHRcIi4uQS5BLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIumKgFwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLkFBQS4uXCIsXG5cdFx0XCIuLi5PLi4uXCIsXG5cdFx0XCIuLkEuQS4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLlg49cIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLkEuLi5BLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLkEuLi5BLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi55u4XCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi5BLi4uQi5cIixcblx0XHRcIi4uYS5iLi5cIixcblx0XHRcIi4uLk8uLi5cIixcblx0XHRcIi4uZC5jLi5cIixcblx0XHRcIi5ELi4uQy5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIuixoVwiOiBbXG5cdFx0XCIuRS4uLkYuXCIsXG5cdFx0XCJMLmUuZi5HXCIsXG5cdFx0XCIubC5hLmcuXCIsXG5cdFx0XCIuLmRPYi4uXCIsXG5cdFx0XCIuay5jLmguXCIsXG5cdFx0XCJLLmouaS5IXCIsXG5cdFx0XCIuSi4uLkkuXCJcblx0XSxcblx0XCLpupJcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uQS4uLlwiLFxuXHRcdFwiLi5BLkEuLlwiLFxuXHRcdFwiLkEuTy5BLlwiLFxuXHRcdFwiLi5BLkEuLlwiLFxuXHRcdFwiLi4uQS4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi6bOzXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi5BLi4uQS5cIixcblx0XHRcIi4uLkEuLi5cIixcblx0XHRcIi4uQU9BLi5cIixcblx0XHRcIi4uLkEuLi5cIixcblx0XHRcIi5BLi4uQS5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIuiBllwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLiouKi4uXCIsXG5cdFx0XCIuLi5PLi4uXCIsXG5cdFx0XCIuLiouKi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLpup9cIjogW1xuXHRcdFwiLkEuLi5BLlwiLFxuXHRcdFwiQS4uLi4uQVwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiQS4uLi4uQVwiLFxuXHRcdFwiLkEuLi5BLlwiXG5cdF0sXG5cdFwi54CnXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uMi4yLi5cIixcblx0XHRcIi4uLk8uLi5cIixcblx0XHRcIi4uMi4yLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLjgY1cIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uQS4uLlwiLFxuXHRcdFwiLi5BT0EuLlwiLFxuXHRcdFwiLi4uQS4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi6aaZXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLiouLi5cIixcblx0XHRcIi4uLk8uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIui7ilwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4qLi4uXCIsXG5cdFx0XCIuLipPKi4uXCIsXG5cdFx0XCIuLi4qLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLnoLJcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uKy4uLlwiLFxuXHRcdFwiLi4rTysuLlwiLFxuXHRcdFwiLi4uKy4uLlwiLFxuXHRcdFwiLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLlvJNcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4rLisuLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLi4rLisuLlwiLFxuXHRcdFwiLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLlj41cIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uKi4uLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLi4uKi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi6baJXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLiouLi5cIixcblx0XHRcIi4uLk8uLi5cIixcblx0XHRcIi4uQS4qLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIuS6q1wiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4qLi4uXCIsXG5cdFx0XCIuLi5PLi4uXCIsXG5cdFx0XCIuLiouQS4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLmqKpcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uQS4uLlwiLFxuXHRcdFwiLi4qTyouLlwiLFxuXHRcdFwiLi4uQS4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi56uqXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLiouLi5cIixcblx0XHRcIi4uQU9BLi5cIixcblx0XHRcIi4uLiouLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIuS4kVwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4yLi4uXCIsXG5cdFx0XCIuLjJPMi4uXCIsXG5cdFx0XCIuLi4yLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLlsbFcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uQS4uLlwiLFxuXHRcdFwiLi4uKi4uLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi6bS7XCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uKi4qLi5cIixcblx0XHRcIi4qby5vKi5cIixcblx0XHRcIi4uLk8uLi5cIixcblx0XHRcIi4qby5vKi5cIixcblx0XHRcIi4uKi4qLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIumHkVwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLkFBQS4uXCIsXG5cdFx0XCIuLkFPQS4uXCIsXG5cdFx0XCIuLi5BLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLpioVcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi5BQUEuLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLi4uQS4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi6aasXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uKkEqLi5cIixcblx0XHRcIi4uQU9BLi5cIixcblx0XHRcIi4uKkEqLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIuernFwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLkEqQS4uXCIsXG5cdFx0XCIuLipPKi4uXCIsXG5cdFx0XCIuLkEqQS4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLpholcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi5BQUEuLlwiLFxuXHRcdFwiLi5BT0EuLlwiLFxuXHRcdFwiLi5BLkEuLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi5ZCOXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uKioqLi5cIixcblx0XHRcIi4uKk8qLi5cIixcblx0XHRcIi4uKioqLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIumnhlwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLkEuQS4uXCIsXG5cdFx0XCIuQS4qLkEuXCIsXG5cdFx0XCIuLipPKi4uXCIsXG5cdFx0XCIuQS4qLkEuXCIsXG5cdFx0XCIuLkEuQS4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLpp65cIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi5BLkEuLlwiLFxuXHRcdFwiLkEqLipBLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLkEqLipBLlwiLFxuXHRcdFwiLi5BLkEuLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi6ZuVXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uKkEqLi5cIixcblx0XHRcIi4uQU9BLi5cIixcblx0XHRcIi4uMioyLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIueMm1wiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLkFBQS4uXCIsXG5cdFx0XCIuLi5PLi4uXCIsXG5cdFx0XCIuLkFBQS4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLomY5cIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi5BLkEuLlwiLFxuXHRcdFwiLi5BT0EuLlwiLFxuXHRcdFwiLi5BQUEuLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi542FXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi5BQUFBQS5cIixcblx0XHRcIi5BQUFBQS5cIixcblx0XHRcIi5BQU9BQS5cIixcblx0XHRcIi5BQUFBQS5cIixcblx0XHRcIi5BQUFBQS5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIumnklwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLioqKi4uXCIsXG5cdFx0XCIuLi5PLi4uXCIsXG5cdFx0XCIuLi4qLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLpr6hcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uKi4uLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLi4qKiouLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi6bm/XCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uQSpBLi5cIixcblx0XHRcIi4uQU9BLi5cIixcblx0XHRcIi4uQSpBLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIueMqlwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLiouKi4uXCIsXG5cdFx0XCIuLipPKi4uXCIsXG5cdFx0XCIuLiouKi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLniZtcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4qKiouLlwiLFxuXHRcdFwiLi4uTy4uLlwiLFxuXHRcdFwiLi4qKiouLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi6beCXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLkEuLi5cIixcblx0XHRcIi4uKkEqLi5cIixcblx0XHRcIi4uKk8qLi5cIixcblx0XHRcIi4uKioqLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIum3slwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuQS4uLkEuXCIsXG5cdFx0XCIuLkEqQS4uXCIsXG5cdFx0XCIuLipPKi4uXCIsXG5cdFx0XCIuLioqKi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLni7xcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi5BQUEuLlwiLFxuXHRcdFwiLi5BT0EuLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi57+FXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uQUFBLi5cIixcblx0XHRcIi4uQU9BLi5cIixcblx0XHRcIi4uQUEuLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIuaWl1wiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLkFBQS4uXCIsXG5cdFx0XCIuLkFPQS4uXCIsXG5cdFx0XCIuLi5BQS4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLnjotcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi5BQUEuLlwiLFxuXHRcdFwiLi5BT0EuLlwiLFxuXHRcdFwiLi5BQUEuLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi5Z+OXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi5CYk9hQS5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdLFxuXHRcIuWbvVwiOiBbXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCJCYmJPYWFBXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCIsXG5cdFx0XCIuLi4uLi4uXCJcblx0XSxcblx0XCLloZRcIjogW1xuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi58T3wuLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiLFxuXHRcdFwiLi4uLi4uLlwiXG5cdF0sXG5cdFwi5ZGIXCI6IFtcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi5BLkEuQS5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi5BLk8uQS5cIixcblx0XHRcIi4uLi4uLi5cIixcblx0XHRcIi5BLkEuQS5cIixcblx0XHRcIi4uLi4uLi5cIlxuXHRdXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuXHRcIuWls1wiOiA1NCxcblx0XCLnjYVcIjogNDQsXG5cdFwi5ZCOXCI6IDM2LFxuXHRcIuWllFwiOiAzNixcblx0XCLpp4ZcIjogMzYsXG5cdFwi6aeuXCI6IDM0LFxuXHRcIum6n1wiOiAzMixcblx0XCLptLtcIjogMzIsXG5cdFwi6aObXCI6IDI4LFxuXHRcIuernFwiOiAyOCxcblx0XCLnorxcIjogMjQsXG5cdFwi5aGUXCI6IDIyLFxuXHRcIui7ilwiOiAyMixcblx0XCLkv6VcIjogMjAsXG5cdFwi6Ii5XCI6IDIwLFxuXHRcIuaIplwiOiAyMCxcblx0XCLosZVcIjogMjAsXG5cdFwi6KeSXCI6IDIwLFxuXHRcIui3s1wiOiAyMCxcblx0XCLnoKZcIjogMjAsXG5cdFwi6YaJXCI6IDE4LFxuXHRcIum3uVwiOiAxOCxcblx0XCLptolcIjogMTgsXG5cdFwi5LqrXCI6IDE4LFxuXHRcIue/hVwiOiAxNixcblx0XCLmlpdcIjogMTYsXG5cdFwi6L+UXCI6IDE2LFxuXHRcIuiBllwiOiAxNCxcblx0XCLpqI5cIjogMTQsXG5cdFwi55GqXCI6IDE0LFxuXHRcIuWNiFwiOiAxNCxcblx0XCLph5FcIjogMTQsXG5cdFwi5qiqXCI6IDE0LFxuXHRcIuerqlwiOiAxNCxcblx0XCLpupJcIjogMTQsXG5cdFwi6bOzXCI6IDE0LFxuXHRcIuOBhFwiOiAxNCxcblx0XCLptrRcIjogMTQsXG5cdFwi6bCQXCI6IDE0LFxuXHRcIumKgFwiOiAxMixcblx0XCLngq5cIjogMTIsXG5cdFwi44GtXCI6IDEyLFxuXHRcIuWPjVwiOiAxMixcblx0XCLomY5cIjogMTIsXG5cdFwi5YyFXCI6IDEwLFxuXHRcIuaguVwiOiAxMCxcblx0XCLlg49cIjogMTAsXG5cdFwi6IifXCI6IDEwLFxuXHRcIumHoVwiOiAxMCxcblx0XCLpm4lcIjogMTAsXG5cdFwi5qGCXCI6ICA4LFxuXHRcIuS6rFwiOiAgOCxcblx0XCLpioVcIjogIDgsXG5cdFwi5bGxXCI6ICA4LFxuXHRcIummrlwiOiAgOCxcblx0XCLppq1cIjogIDgsXG5cdFwi6aaoXCI6ICA4LFxuXHRcIueMm1wiOiAgOCxcblx0XCLppplcIjogIDcsXG5cdFwi56iuXCI6ICA3LFxuXHRcIuiHo1wiOiAgNyxcblx0XCLjgY1cIjogIDcsXG5cdFwi44GeXCI6ICA3LFxuXHRcIuWQjFwiOiAgNyxcblx0XCLosaFcIjogIDUsXG5cdFwi5aOrXCI6ICA1LFxuXHRcIuebuFwiOiAgNCxcblx0XCLku5VcIjogIDQsXG5cdFwi5Y2GXCI6ICA0LFxuXHRcIuS7slwiOiAgNCxcblx0XCLmralcIjogIDMsXG5cdFwi5YW1XCI6ICAzLFxuXHRcIua1nFwiOiAgMyxcblx0XCLjgbJcIjogIDIsXG5cdFwi54eVXCI6ICAyLFxuXHRcIuS4mFwiOiAgMixcblx0XCLmorlcIjogIDIsXG5cdFwi6LKdXCI6ICAyLFxuXHRcIuWNklwiOiAgMixcblx0XCLngatcIjogIDIsXG5cdFwi5aSpXCI6ICAyLFxuXHRcIuefolwiOiAgMixcblx0XCLmnKhcIjogIDIsXG5cdFwi5pysXCI6ICAyLFxuXHRcIuWkp1wiOiAgMixcblx0XCLlpK5cIjogIDIsXG5cdFwi44OpXCI6ICAwLFxuXHRcIum1rFwiOiAtNCxcblx0XCLnjolcIjogLTgsXG5cdFwi44KJXCI6IC04LFxuXHRcIueOi1wiOi0xMixcblx0XCLlm71cIjotMTIsXG5cdFwi5ZGIXCI6LTEyLFxuXHRcIuWQm1wiOi0xNixcblx0XCLkuLtcIjotMTgsXG5cdFwi5qWaXCI6LTI0LFxuXHRcIuW4pVwiOi0yOFxufVxuIiwiY29uc3QgYmFzZSA9ICcuL2pzb24vU2hvZ2lDcm9zcy8nO1xuZnVuY3Rpb24gaW1wb3J0SnNvbihuYW1lKSB7XG5cdGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHR4aHIub3BlbihcIkdFVFwiLCBgJHtiYXNlfSR7bmFtZX0uanNvbmAsIGZhbHNlKTtcblx0eGhyLnNlbmQoKTtcblx0aWYoeGhyLnN0YXR1cyA9PT0gMjAwKVxuXHRcdHJldHVybiBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuXHRlbHNlXG5cdFx0cmV0dXJuIHt9O1xufVxuXG5leHBvcnQgY29uc3QganNvbiA9IHtcblx0Y2FudmFzRm9udDogaW1wb3J0SnNvbihcImNhbnZhc0ZvbnRcIiksXG5cdGdhbWVTb2Z0OiBpbXBvcnRKc29uKFwiZ2FtZVNvZnRcIiksXG5cdGdhbWVzOiBpbXBvcnRKc29uKFwiZ2FtZXNcIiksXG5cdGJvYXJkczogaW1wb3J0SnNvbihcImJvYXJkc1wiKSxcblx0cGFuZWxzOiBpbXBvcnRKc29uKFwicGFuZWxzXCIpLFxuXHRwaWVjZXM6IGltcG9ydEpzb24oXCJwaWVjZXNcIiksXG5cdHBpZWNlUmFuZ2U6IGltcG9ydEpzb24oXCJwaWVjZVJhbmdlXCIpLFxuXHRwaWVjZUNvc3Q6IGltcG9ydEpzb24oXCJwaWVjZUNvc3RcIilcbn07XG4iLCIvKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IENhbnZhc0ZvbnRcbiAqIEBwcm9wIHt7Zm9udE5hbWU6IHN0cmluZywgZm9udFdlaWdodDogbnVtYmVyfVtdfSBmb250cyAtIHtmb250TmFtZTog44OV44Kp44Oz44OI5ZCNLCBmb250V2VpZ2h0OiDjg5Xjgqnjg7Pjg4jjga7lpKrjgZV9XG4gKi9cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gR2FtZVNvZnRcbiAqIEBwcm9wIHtzdHJpbmd9IG5hbWUgLSDjgrLjg7zjg6DlkI1cbiAqIEBwcm9wIHtzdHJpbmd9IHBsYXlCb2FyZCAtIOS9v+eUqOOBmeOCi+ODnOODvOODieWQjVxuICogQHByb3Age2Jvb2xlYW59IHVzZVN0YW5kIC0g6aeS5Y+w44Gu5L2/55So5pyJ54ShXG4gKiBAcHJvcCB7e2dhbWVOYW1lOiBzdHJpbmcsIHBpZWNlU2V0OiBzdHJpbmd9W119IHBsYXlQaWVjZXMgLSB7Z2FtZU5hbWU6IOOCsuODvOODoOWQjSwgcGllY2VTZXQ6IOmnkuOCu+ODg+ODiOOBruWQjeensH1cbiAqL1xuLyoqXG4gKiBAdHlwZWRlZiBHYW1lXG4gKiBAcHJvcCB7c3RyaW5nfSBlbmdsaXNoIC0g6Iux6Kqe5ZCNXG4gKiBAcHJvcCB7c3RyaW5nfSBmb250Q29sb3IgLSDpp5Ljga7jg5Xjgqnjg7Pjg4joibJcbiAqIEBwcm9wIHtzdHJpbmd9IHByb21vdGVGb250Q29sb3IgLSDmiJDpp5Ljga7jg5Xjgqnjg7Pjg4joibJcbiAqIEBwcm9wIHtzdHJpbmd9IGJhY2tncm91bmRDb2xvciAtIOmnkuOBruiJslxuICogQHByb3Age3N0cmluZ30gcHJvbW90ZUJhY2tncm91bmRDb2xvciAtIOaIkOmnkuOBruiJslxuICogQHByb3Age3N0cmluZ30gYm9yZGVyQ29sb3IgLSDpp5Ljga7mnqDoibJcbiAqIEBwcm9wIHtzdHJpbmd9IHByb21vdGVCYWNrZ3JvdW5kQ29sb3IgLSDmiJDpp5Ljga7mnqDoibJcbiAqIEBwcm9wIHtudW1iZXJ9IHByb21vTGluZSAtIOODl+ODreODouODvOOCt+ODp+ODs+ODqeOCpOODsyjmiJDjgorjga7mrrUpXG4gKiBAcHJvcCB7T2JqZWN0PHN0cmluZywgT2JqZWN0PHN0cmluZywgc3RyaW5nW10+Pn0gcG9zaXRpb24gLSDpp5Ljga7phY3nva7jg4fjg7zjgr9cbiAqL1xuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBCb2FyZEluaXRPcHRpb24gLSDjg5zjg7zjg4njga7liJ3mnJ/ljJbjgqrjg5fjgrfjg6fjg7NcbiAqIEBwcm9wIHtudW1iZXJ9IGNhbnZhc1dpZHRoIC0gQ2FudmFz5bmFXG4gKiBAcHJvcCB7bnVtYmVyfSBjYW52YXNIZWlnaHQgLSBDYW52YXPpq5jjgZVcbiAqIEBwcm9wIHtjYW52YXNGaXR9IGNhbnZhc0ZpdCAtIENhbnZhc+OCteOCpOOCuuOBruiHquWLleiqv+aVtFxuICogQHByb3Age251bWJlcn0gYm9hcmRMZWZ0IC0g5o+P5YaZ44GZ44KLWOW6p+aomVxuICogQHByb3Age251bWJlcn0gYm9hcmRUb3AgLSDmj4/lhpnjgZnjgotZ5bqn5qiZXG4gKiBAcHJvcCB7bnVtYmVyfSBwYW5lbFdpZHRoIC0g44Oe44K555uu5bmFXG4gKiBAcHJvcCB7bnVtYmVyfSBwYW5lbEhlaWdodCAtIOODnuOCueebrumrmOOBlVxuICogQHByb3Age251bWJlcn0gcGllY2VTaXplIC0g6aeS44Gu5aSn44GN44GVXG4gKiBAcHJvcCB7Ym9vbGVhbn0gdXNlUmFua1NpemUgLSDpp5Ljga7lpKfjgY3jgZXjgpLmoLzjga7pgZXjgYTjgaflpInmm7TjgZnjgotcbiAqIEBwcm9wIHtib29sZWFufSBpc0RyYXdTaGFkb3cgLSDpp5Ljga7lvbHjga7mj4/lhpnmnInnhKFcbiAqIEBwcm9wIHtudW1iZXJ9IGJvcmRlcldpZHRoIC0g5p6g57ea5aSq44GVXG4gKiBAcHJvcCB7Ym9vbGVhbn0gdXNlU3RhbmQgLSDpp5Llj7Djga7kvb/nlKjmnInnhKFcbiAqIEBwcm9wIHtzdHJpbmd9IGJhY2tncm91bmRDb2xvciAtIOiDjOaZr+iJsijjg4fjg5Xjgqnjg6vjg4jnhKHoibIpXG4gKiBAcHJvcCB7Ym9vbGVhbn0gYXV0b0RyYXdpbmcgLSDmj4/lhpnjga7oh6rli5Xmm7TmlrDmnInnhKFcbiAqIEBwcm9wIHsoQm9hcmQpPT52b2lkfSBvbkRyYXdlZCAtIOaPj+WGmeOCpOODmeODs+ODiFxuICogQHByb3AgeyhpKT0+dm9pZH0gb25HYW1lT3ZlciAtIOOCsuODvOODoOOCquODvOODkOODvOOCpOODmeODs+ODiFxuICogQHByb3Age2Jvb2xlYW59IGZyZWVNb2RlIC0g44OV44Oq44O844Oi44O844OJ5pyJ5Yq55YyWL+eEoeWKueWMllxuICovXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBhbmVsSW5pdE9wdGlvbiAtIOODnuOCueebruOBruWIneacn+WMluOCquODl+OCt+ODp+ODs1xuICogQHByb3Age3N0cmluZ30gbmFtZSAtIOODnuOCueebruOBruWQjeWJjVxuICogQHByb3Age3N0cmluZ30gdGV4dCAtIOODnOODvOODieihqOekuuaWh+Wtl+WIl1xuICogQHByb3Age3N0cmluZ30gYmFja2dyb3VuZENvbG9yIC0g44Oe44K555uu44Gu6ImyXG4gKiBAcHJvcCB7c3RyaW5nfSBib3JkZXJDb2xvciAtIOaeoOiJsuWPiuOBs+ODleOCqeODs+ODiOiJslxuICogQHByb3Age3N0cmluZ30gc2VsZWN0Q29sb3IgLSDpgbjmip7jgZfjgZ/mmYLjga7oibJcbiAqIEBwcm9wIHtzdHJpbmd9IHRhcmdldENvbG9yIC0g6aeS44KS6YG45oqe44GX44Gf5pmC44Gu6ImyXG4gKiBAcHJvcCB7c3RyaW5nfSBkaXNwbGF5VGV4dCAtIOihqOekuuOBmeOCi+aWh+Wtlygx5paH5a2XKVxuICogQHByb3Age251bWJlcn0gdGV4dFJvdGF0ZSAtIOihqOekuuOBmeOCi+aWh+Wtl+OBruWbnui7ouinkihkZWcpXG4gKiBAcHJvcCB7Ym9vbGVhbn0gYm9yZGVyU2xhc2hMZWZ0IC0g5bem5pac57eaKO+8vCnjga7mnInnhKFcbiAqIEBwcm9wIHtib29sZWFufSBib3JkZXJTbGFzaFJpZ2h0IC0g5Y+z5pac57eaKO+8jynjga7mnInnhKFcbiAqIEBwcm9wIHtib29sZWFufSBpbnRlcnNlY3QgLSDkuqTngrnjgpLkuK3lv4PjgajjgZnjgotcbiAqIEBwcm9wIHtzdHJpbmdbXX0gYXR0ciAtIOODnuOCueebruOBruapn+iDveOBruWxnuaAp1xuICovXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBpZWNlSW5pdE9wdGlvbiAtIOmnkuOBruWIneacn+WMluOCquODl+OCt+ODp+ODs1xuICogQHByb3Age3N0cmluZ30gbmFtZSAtIOmnkuOBruWQjeWJjVxuICogQHByb3Age3N0cmluZ1tdfSBkaXNwbGF5IC0g6aeS44Gr6KGo56S644GZ44KL5paH5a2X5YiXKDHjgIEy5paH5a2XKeOBrumFjeWIl1xuICogQHByb3Age3N0cmluZ30gaW1nU3JjIC0g6aeS44Go44GX44Gm6KGo56S644GZ44KL55S75YOP44OR44K544Gu6YWN5YiXXG4gKiBAcHJvcCB7Ym9vbGVhbn1pc1JvdGF0ZUltZyAtIOmBjueUu+WDj+OCkuioreWumuOBmeOCi+WgtOWQiOWbnui7ouOBmeOCi+OBi1xuICogQHByb3Age3N0cmluZ30gYWxpYXMgLSDjgq3jg7zjga7liKXlkI3jgajjgZfjgablrprjgoHjgovmloflrZfjga7pm4blkIjooahcbiAqIEBwcm9wIHtzdHJpbmd9IGdhbWVOYW1lIC0g6aeS44Gr5a++5b+c44GZ44KL44Ky44O844Og5ZCNXG4gKiBAcHJvcCB7c3RyaW5nfSBleHBhbnNpb24gLSDjgrLjg7zjg6DlkI3jga7ntLDliIbpoZ5cbiAqIEBwcm9wIHtcIuWFtVwifFwi6aasXCJ8XCLosaFcInxcIui7ilwifFwi6IejXCJ8XCLnjotcInxcIuaIkFwifSB1bml0IC0g6aeS44Gu5YW156iuXG4gKiBAcHJvcCB7bnVtYmVyfWZvcmNlUHJvbW9MaW5lIC0g6KGM44GN44Gp44GT44KN44Gu44Gq44GE6aeS44Go44Gq44KL5q61XG4gKiBAcHJvcCB7T2JqZWN0fSByYW5nZSAtIOmnkuOBruenu+WLleevhOWbslxuICogQHByb3Age3N0cmluZ1tdfSByYW5nZS5kZWZhdWx0IC0g6YCa5bi45pmC44Gu56e75YuV56+E5ZuyXG4gKiBAcHJvcCB7c3RyaW5nW119IHJhbmdlLmF0dGFjayAtIOmnkuWPluW+l+aZguOBruenu+WLleevhOWbslxuICogQHByb3Age3N0cmluZ1tdfSByYW5nZS5zdGFydCAtIOWIneWbnuOBruOBv+OBruenu+WLleevhOWbslxuICogQHByb3Age3N0cmluZ1tdfSByYW5nZS5jYXN0bGluZyAtIOOCreODo+OCueODquODs+OCsOaZguOBruenu+WLleevhOWbslxuICogQHByb3Age3N0cmluZ1tdfSByYW5nZS5lblBhc3NhbnQgLSDjgqLjg7Pjg5Hjg4PjgrXjg7PmmYLjga7np7vli5Xnr4Tlm7JcbiAqIEBwcm9wIHtzdHJpbmdbXX0gcmFuZ2UucGFsYWNlU2xhc2ggLSDkuZ3lrq7lhoXjgafjga7np7vli5Xnr4Tlm7JcbiAqIEBwcm9wIHtzdHJpbmd9IHByb21vIC0g44OX44Ot44Oi44O844K344On44Oz5YWI44Gu6aeS44Gu5LiA5paH5a2X6KGo6KiYXG4gKiBAcHJvcCB7c3RyaW5nW119IGF0dHIgLSDpp5Ljga7mqZ/og73jga7jg6rjgrnjg4hcbiAqL1xuXG5pbXBvcnQgY2FudmFzRm9udCBmcm9tIFwiLi4vZGF0YS9jYW52YXNGb250LmpzXCI7XG5pbXBvcnQgZ2FtZVNvZnQgZnJvbSBcIi4uL2RhdGEvZ2FtZVNvZnQuanNcIjtcbmltcG9ydCBnYW1lcyBmcm9tIFwiLi4vZGF0YS9nYW1lcy5qc1wiO1xuaW1wb3J0IGJvYXJkcyBmcm9tIFwiLi4vZGF0YS9ib2FyZHMuanNcIjtcbmltcG9ydCBwYW5lbHMgZnJvbSBcIi4uL2RhdGEvcGFuZWxzLmpzXCI7XG5pbXBvcnQgcGllY2VzIGZyb20gXCIuLi9kYXRhL3BpZWNlcy5qc1wiO1xuaW1wb3J0IHBpZWNlUmFuZ2UgZnJvbSBcIi4uL2RhdGEvcGllY2VSYW5nZS5qc1wiO1xuaW1wb3J0IHBpZWNlQ29zdCBmcm9tIFwiLi4vZGF0YS9waWVjZUNvc3QuanNcIjtcbmltcG9ydCB7anNvbn0gZnJvbSBcIi4vanNvbi94aHIuanNcIjtcblxuZXhwb3J0IHtcblx0LyoqIENhbnZhc+eUqOOBrkdvb2dsZeODleOCqeODs+ODiOaDheWgsVxuXHQgKiBAdHlwZSB7Q2FudmFzRm9udH1cblx0ICovXG5cdGNhbnZhc0ZvbnQsXG5cblx0LyoqIOOCsuODvOODoOaDheWgsSjjg5zjg7zjg4kr6aeSKeOBruODl+ODquOCu+ODg+ODiFxuXHQgKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgR2FtZVNvZnQ+fVxuXHQgKi9cblx0Z2FtZVNvZnQsXG5cblx0LyoqIOOCsuODvOODoOOBrueorumhnuOBq+WFsemAmuOBmeOCi+mnkuaDheWgseOChOmnkumFjee9ruaDheWgsVxuXHQgKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgR2FtZT59XG5cdCAqL1xuXHRnYW1lcyxcblxuXHQvKipcblx0ICog44Oc44O844OJ44Gu5qeL5oiQ5oOF5aCxXG5cdCAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBCb2FyZEluaXRPcHRpb24+fVxuXHQgKi9cblx0Ym9hcmRzLFxuXG5cdC8qKlxuXHQgKiDjg5zjg7zjg4nkuK3jga7jg57jgrnnm67mg4XloLFcblx0ICogQHR5cGUge09iamVjdDxzdHJpbmcsIFBhbmVsSW5pdE9wdGlvbn1cblx0ICovXG5cdHBhbmVscyxcblxuXHQvKipcblx0ICog6aeS5oOF5aCxXG5cdCAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBQaWVjZUluaXRPcHRpb24+fVxuXHQgKi9cblx0cGllY2VzLFxuXG5cdC8qKlxuXHQgKiBAdHlwZWRlZiB7c3RyaW5nW119IFBpZWNlUmFuZ2Ug6aeS44Gu56e75YuV56+E5ZuyXG5cdCAqL1xuXHQvKipcblx0ICog6aeS44Gu56e75YuV56+E5ZuyXG5cdCAqIEB0eXBle09iamVjdDxzdHJpbmcsIFBpZWNlUmFuZ2U+fVxuXHQgKi9cblx0cGllY2VSYW5nZSxcblxuXHQvKipcblx0ICog6aeS44Gu5L6h5YCkXG5cdCAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBudW1iZXI+fVxuXHQgKi9cblx0cGllY2VDb3N0XG59XG5cbk9iamVjdC5hc3NpZ24oY2FudmFzRm9udCwganNvbi5jYW52YXNGb250KTtcbk9iamVjdC5hc3NpZ24oZ2FtZVNvZnQsIGpzb24uZ2FtZVNvZnQpO1xuT2JqZWN0LmFzc2lnbihnYW1lcywganNvbi5nYW1lcyk7XG5PYmplY3QuYXNzaWduKGJvYXJkcywganNvbi5ib2FyZHMpO1xuT2JqZWN0LmFzc2lnbihwYW5lbHMsIGpzb24ucGFuZWxzKTtcbk9iamVjdC5hc3NpZ24ocGllY2VzLCBqc29uLnBpZWNlcyk7XG5PYmplY3QuYXNzaWduKHBpZWNlUmFuZ2UsIGpzb24ucGllY2VSYW5nZSk7XG5PYmplY3QuYXNzaWduKHBpZWNlQ29zdCwganNvbi5waWVjZUNvc3QpO1xuIiwiaW1wb3J0IHtjYW52YXNGb250LCBwYW5lbHMsIHBpZWNlc30gZnJvbSBcIi4vanNvbi5qc1wiO1xuZXhwb3J0IHtjYW52YXNGb250fTtcblxuLyoqIOiqreOBv+i+vOOCgOaWh+Wtl+OBruS4gOimp+OCkuWPluW+l1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuY29uc3QgZ2V0Q2hhcnMgPSAoKSA9PiBbLi4uXG5cdG5ldyBTZXQoWy4uLlxuXHRcdE9iamVjdC52YWx1ZXMocGFuZWxzKS5tYXAoKHtkaXNwbGF5VGV4dH0pPT5kaXNwbGF5VGV4dCkuam9pbihcIlwiKStcblx0XHRPYmplY3QudmFsdWVzKHBpZWNlcykubWFwKCh7ZGlzcGxheX0pPT5kaXNwbGF5PyBkaXNwbGF5LmpvaW4oXCJcIik6IFwiXCIpLmpvaW4oXCJcIilcblx0XSlcbl0uc29ydCgpLmpvaW4oXCJcIik7XG5cbi8qKiBDYW52YXPnlKjjg5Xjgqnjg7Pjg4jnrqHnkIYgKi9cbk9iamVjdC5hc3NpZ24oY2FudmFzRm9udCwge1xuXHQvKiog6Kqt44G/6L6844G/5riI44G/44Gn44GC44KL44GLPyAqL1xuXHRpbXBvcnRlZDogZmFsc2UsXG5cblx0LyoqIOiqreOBv+i+vOOCgOODleOCqeODs+ODiOOBruS4gOimpyhcIixcIuWMuuWIh+OCiilcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdG5hbWVzOiBcIlwiLFxuXG5cdC8qKiDjg5Xjgqnjg7Pjg4jjga7oqq3jgb/ovrzjgb9cblx0ICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG5cdCAqL1xuXHRhc3luYyBpbXBvcnRBc3luYygpe1xuXHRcdGlmKHRoaXMuaW1wb3J0ZWQpIHJldHVybjtcblx0XHRjb25zdCBnb29nbGVVcmwgPSBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9XCI7XG5cdFx0Y29uc3QgY2hhcnMgPSBnZXRDaGFycygpO1xuXHRcdGNvbnN0IHVuaXF1ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCk7XG5cdFx0dGhpcy5uYW1lcyA9IGNhbnZhc0ZvbnQuZm9udHMubWFwKG89PmBcIiR7b1swXX0ke3VuaXF1ZX1cImApLmpvaW4oXCIsXCIpK1wiLHNlcmlmXCI7XG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKFxuXHRcdFx0Y2FudmFzRm9udC5mb250cy5tYXAoYXN5bmMgKFtmb250TmFtZSwgZm9udFdlaWdodF0pPT57XG5cdFx0XHRcdGNvbnN0IGZvbnROYW1lUGx1cyA9IGZvbnROYW1lLnJlcGxhY2UoLyAvZywgXCIrXCIpO1xuXHRcdFx0XHRjb25zdCBmb250VXJsID0gYCR7Z29vZ2xlVXJsfSR7Zm9udE5hbWVQbHVzfTp3Z2h0QCR7Zm9udFdlaWdodH0mdGV4dD0ke2NoYXJzfWA7XG5cdFx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGZvbnRVcmwpO1xuXHRcdFx0XHRpZighcmVzLm9rKSByZXR1cm47XG5cdFx0XHRcdGNvbnN0IGNzcyA9IGF3YWl0IHJlcy50ZXh0KCk7XG5cdFx0XHRcdGNvbnN0IG1hdGNoVXJscyA9IGNzcy5tYXRjaCgvdXJsXFwoLis/XFwpL2cpO1xuXHRcdFx0XHRpZighbWF0Y2hVcmxzKSB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgZm91bmQgZm9udC5cIik7XG5cblx0XHRcdFx0Zm9yIChjb25zdCB1cmwgb2YgbWF0Y2hVcmxzKSB7XG5cdFx0XHRcdFx0Y29uc3QgZm9udEZhY2UgPSBuZXcgRm9udEZhY2UoYCR7Zm9udE5hbWV9JHt1bmlxdWV9YCwgdXJsKTtcblx0XHRcdFx0XHRkb2N1bWVudC5mb250cy5hZGQoZm9udEZhY2UpO1xuXHRcdFx0XHRcdGF3YWl0IGZvbnRGYWNlLmxvYWQoKS5jYXRjaCgoKT0+e30pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdCkudGhlbihfPT50aGlzLmltcG9ydGVkID0gdHJ1ZSk7XG5cdH1cbn0pO1xuIiwiaW1wb3J0IHtwYW5lbHMsIHBpZWNlc30gZnJvbSBcIi4vanNvbi5qc1wiO1xuXG4vKiog55S75YOP6Kqt44G/6L6844G/5Yem55CGXG4gKiBAcGFyYW0ge3N0cmluZ30gc3JjIC0g55S75YOP44OR44K5XG4gKiBAcmV0dXJucyBQcm9taXNlPEltYWdlPlxuICovXG5mdW5jdGlvbiBsb2FkSW1hZ2Uoc3JjKXtcblx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmU9Pntcblx0XHRjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXHRcdGltYWdlLnNyYyA9IHNyYztcblx0XHRpbWFnZS5vbmxvYWQgPSAoKT0+cmVzb2x2ZShpbWFnZSk7XG5cdH0pO1xufVxuXG4vKiog6Kqt44G/6L6844KA55S75YOP44OR44K544Gu5LiA6KanXG4gKiBAdHlwZSB7c3RyaW5nW119XG4gKi9cbmNvbnN0IGltZ1NyY3MgPSBbLi4ubmV3IFNldChcblx0T2JqZWN0LnZhbHVlcyhwYW5lbHMpLmZsYXRNYXAoKHtpbWdTcmN9KT0+aW1nU3JjPz9bXSlcblx0LmNvbmNhdChPYmplY3QudmFsdWVzKHBpZWNlcykuZmxhdE1hcCgoe2ltZ1NyY30pPT5pbWdTcmM/P1tdKSlcbildO1xuXG4vKiogQ2FudmFz55So55S75YOP44Gu566h55CGICovXG5leHBvcnQgY29uc3QgY2FudmFzSW1hZ2UgPSB7XG5cdC8qKiDoqq3jgb/ovrzjgb/muIjjgb/jgafjgYLjgovjgYs/ICovXG5cdGltcG9ydGVkOiBmYWxzZSxcblxuXHQvKiog6Kqt44G/6L6844KT44Gg55S75YOP44OH44O844K/XG5cdCAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBJbWFnZT59XG5cdCAqL1xuXHRpbWFnZXM6IHt9LFxuXG5cdC8qKiDnlLvlg4/jga7oqq3jgb/ovrzjgb9cblx0ICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG5cdCAqL1xuXHRhc3luYyBpbXBvcnRBc3luYygpe1xuXHRcdGlmKHRoaXMuaW1wb3J0ZWQpIHJldHVybjtcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoXG5cdFx0XHRpbWdTcmNzLm1hcChhc3luYyBzcmM9Pntcblx0XHRcdFx0dGhpcy5pbWFnZXNbc3JjXSA9IGF3YWl0IGxvYWRJbWFnZShzcmMpO1xuXHRcdFx0fSlcblx0XHQpLnRoZW4oXz0+dGhpcy5pbXBvcnRlZCA9IHRydWUpXG5cdH1cbn07XG5cbiIsImNvbnN0IGdldE1pbWUgPSAoZXh0KT0+XG5cdFwiaW1hZ2UvXCIrZXh0LnJlcGxhY2UoXCJqcGdcIiwgXCJqcGVnXCIpO1xuXG4vKiog44Kt44Oj44Oz44OQ44K544Gu55S75YOP44KS5Y+W5b6X44GZ44KLXG4gKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fX0gY2FudmFzIC0gQ2FudmFz6KaB57SgXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgLSDlj5blvpfjgZnjgovjg5XjgqHjgqTjg6vlkI0o5ouh5by15a2Q44KS6Zmk44GPKVxuICogQHBhcmFtIHtzdHJpbmd9IGV4dCAtIOaLoeW8teWtkFxuICogQHBhcmFtIHtcImJhc2U2NFwifFwiYmxvYlwifSB1cmxUeXBlIC0g55Sf5oiQVVJM44K/44Kk44OXXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRvd25sb2FkSW1hZ2UoY2FudmFzLCBmaWxlTmFtZT1cImltYWdlXCIsIGV4dD1cInBuZ1wiLCB1cmxUeXBlPVwiYmFzZTY0XCIpe1xuXHRjb25zdCBtaW1lID0gZ2V0TWltZShleHQpO1xuXHRjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGxldCB1cmw7XG5cdGlmKHVybFR5cGUgPT09IFwiYmxvYlwiKVxuXHRcdHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoXG5cdFx0XHRhd2FpdCBuZXcgUHJvbWlzZShyZXM9PmNhbnZhcy50b0Jsb2IocmVzKSwgbWltZSkpO1xuXHRlbHNlXG5cdFx0dXJsID0gY2FudmFzLnRvRGF0YVVSTChtaW1lKTtcblx0YS5ocmVmID0gdXJsO1xuXHRhLmRvd25sb2FkID0gYCR7ZmlsZU5hbWV9LiR7ZXh0fWA7XG5cdGEuY2xpY2soKTtcblx0aWYodXJsVHlwZSA9PT0gXCJibG9iXCIpIFVSTC5yZXZva2VPYmplY3RVUkwoYS5ocmVmKTtcbn1cbiIsImltcG9ydCB7Y2FudmFzRm9udH0gZnJvbSBcIi4vY2FudmFzRm9udExvYWRlci5qc1wiO1xuaW1wb3J0IHtjYW52YXNJbWFnZX0gZnJvbSBcIi4vY2FudmFzSW1hZ2VMb2FkZXIuanNcIjtcbmltcG9ydCB7cGFuZWxzfSBmcm9tIFwiLi9qc29uLmpzXCI7XG5cbi8qKiDjg57jgrnnm67jga7nrqHnkIbjgq/jg6njgrkgKi9cbmV4cG9ydCBjbGFzcyBQYW5lbHtcblx0I2lzU2VsZWN0ZWQ7XG5cdCN0YXJnZXRSYW5nZXM7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7YW55fSBjdHggLSBDYW52YXPmj4/nlLvjgrPjg7Pjg4bjgq3jgrnjg4hcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNoYXIgLSDjg57jgrnnm67jgpLnpLrjgZnmloflrZdcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNlbnRlciAtIOaPj+WGmeOBmeOCi1jluqfmqJko5Lit5b+D5Y6f54K5KVxuXHQgKiBAcGFyYW0ge251bWJlcn0gbWlkZGxlIC0g5o+P5YaZ44GZ44KLWeW6p+aomSjkuK3lv4Pljp/ngrkpXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIOODnuOCueebruW5hVxuXHQgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IC0g44Oe44K555uu6auY44GVXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBib3JkZXJXaWR0aCAtIOaeoOe3muOBruWkquOBlVxuXHQgKiBAcGFyYW0ge251bWJlcn0gcFggLSDjg5zjg7zjg4nkuIrjga7jg57jgrnnm67jga7liJdcblx0ICogQHBhcmFtIHtudW1iZXJ9IHBZIC0g44Oc44O844OJ5LiK44Gu44Oe44K555uu44Gu6KGMXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihjdHgsIGNoYXIsIGNlbnRlciwgbWlkZGxlLCB3aWR0aCwgaGVpZ2h0LCBib3JkZXJXaWR0aCwgcFgsIHBZKXtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHBhbmVsc1tjaGFyXSk7XG5cdFx0dGhpcy5jdHggPSBjdHg7XG5cdFx0dGhpcy5jZW50ZXIgPSBjZW50ZXI7XG5cdFx0dGhpcy5taWRkbGUgPSBtaWRkbGU7XG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdHRoaXMubGVmdCA9IGNlbnRlci13aWR0aC8yO1xuXHRcdHRoaXMudG9wID0gbWlkZGxlLWhlaWdodC8yO1xuXHRcdHRoaXMucmlnaHQgPSBjZW50ZXIrd2lkdGgvMjtcblx0XHR0aGlzLmJvdHRvbSA9IG1pZGRsZStoZWlnaHQvMjtcblx0XHR0aGlzLmJvcmRlcldpZHRoID0gYm9yZGVyV2lkdGg7XG5cdFx0dGhpcy5wWCA9IHBYO1xuXHRcdHRoaXMucFkgPSBwWTtcblx0XHR0aGlzLnNlbGVjdENvbG9yID8/PSBcIiNGRjAwMDA2NlwiO1xuXHRcdHRoaXMudGFyZ2V0Q29sb3IgPz89IFwiIzAwRkYwMDY2XCI7XG5cdFx0dGhpcy5hdHRyID8/PSBbXTtcblx0XHR0aGlzLnBpZWNlID0gbnVsbDtcblx0XHR0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcblx0XHR0aGlzLmNsZWFyVGFyZ2V0KCk7XG5cdH1cblxuXHQvKiog44Oe44K555uu44Gu6YG45oqe54q25oWLXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcblx0ICovXG5cdHNldCBpc1NlbGVjdGVkKHZhbHVlKXtcblx0XHR0aGlzLiNpc1NlbGVjdGVkID0gdGhpcy5oYXNBdHRyKFwia2VlcE91dFwiKT8gZmFsc2U6IHZhbHVlO1xuXHR9XG5cdGdldCBpc1NlbGVjdGVkKCl7XG5cdFx0cmV0dXJuIHRoaXMuI2lzU2VsZWN0ZWQ7XG5cdH1cblxuXHQvKiog44Oe44K555uu44Gu56e75YuV5Y+v6IO95Yik5a6aXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcblx0ICovXG5cdGdldCBpc1RhcmdldCgpe1xuXHRcdHJldHVybiAwIDwgdGhpcy4jdGFyZ2V0UmFuZ2VzLmxlbmd0aDtcblx0fVxuXG5cdC8qKiDjg57jgrnnm67jga7np7vli5XlhYjmg4XloLHjgpLjgq/jg6rjgqIgKi9cblx0Y2xlYXJUYXJnZXQoKXtcblx0XHR0aGlzLiN0YXJnZXRSYW5nZXMgPSBbXTtcblx0fVxuXG5cdC8qKiDjg57jgrnnm67jga7np7vli5XlhYjmg4XloLHjgpLov73liqBcblx0ICogQHBhcmFtIHtzdHJpbmd9IHJhbmdlTmFtZSAtIOenu+WLleWFiOaDheWgsVxuXHQgKi9cbiAgIGFkZFRhcmdldChyYW5nZU5hbWUpe1xuXHRcdHRoaXMuI3RhcmdldFJhbmdlcy5wdXNoKHJhbmdlTmFtZSk7XG5cdH1cblxuXHQvKiog44Oe44K555uu44GM56e75YuV5YWI5oOF5aCx44KS5oyB44Gj44Gm44GE44KL44GL5Yik5a6aXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSByYW5nZU5hbWUgLSDnp7vli5XlhYjmg4XloLFcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRoYXNUYXJnZXQocmFuZ2VOYW1lKXtcblx0XHRyZXR1cm4gdGhpcy4jdGFyZ2V0UmFuZ2VzLmluY2x1ZGVzKHJhbmdlTmFtZSk7XG5cdH1cblxuXHQvKiog5bGe5oCn44Gu5a2Y5Zyo44KS56K66KqNXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyTmFtZSAtIOWxnuaAp+WQjVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdGhhc0F0dHIoYXR0ck5hbWUpe1xuXHRcdHJldHVybiB0aGlzLmF0dHIuaW5jbHVkZXMoYXR0ck5hbWUpO1xuXHR9XG5cdC8qKiDluqfmqJnjgYzjg57jgrnnm67jgavlkKvjgb7jgozjgovjgYvliKTlrppcblx0ICogQHBhcmFtIHtudW1iZXJ9IHggLSBY5bqn5qiZXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gWeW6p+aomVxuXHQgKi9cblx0Y2hlY2tSYW5nZU1vdXNlKHgsIHkpe1xuXHRcdHJldHVybiAoXG5cdFx0XHR0aGlzLmxlZnQgPD0geCAmJiB4IDwgdGhpcy5yaWdodCAmJlxuXHRcdFx0dGhpcy50b3AgPD0geSAmJiB5IDwgdGhpcy5ib3R0b21cblx0XHQpO1xuXHR9XG5cblx0LyoqIOODnuOCueebri/jg57jgrnjgq8v6aeS44KS5o+P5YaZICovXG5cdGRyYXcoKXtcblx0XHRjb25zdCB7c2VsZWN0Q29sb3IsIHRhcmdldENvbG9yfSA9IHRoaXM7XG5cblx0XHRpZih0aGlzLmltZ1NyYyAmJiBjYW52YXNJbWFnZS5pbXBvcnRlZClcblx0XHRcdHRoaXMuZHJhd0ltYWdlKCk7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5kcmF3UGFuZWwoKTtcblx0XHRpZih0aGlzLmlzU2VsZWN0ZWQpIHRoaXMuZHJhd01hc2soc2VsZWN0Q29sb3IpO1xuXHRcdGlmKHRoaXMuaXNUYXJnZXQpIHRoaXMuZHJhd01hc2sodGFyZ2V0Q29sb3IpO1xuXHRcdHRoaXMucGllY2U/LmRyYXcoKTtcblx0fVxuXG5cdC8qKiDjg57jgrnnm67nlLvlg4/jgpLmj4/lhpkgKi9cblx0ZHJhd0ltYWdlKCl7XG5cdFx0Y29uc3Qge2N0eH0gPSB0aGlzO1xuXG5cdFx0Y29uc3Qgc3JjID0gdGhpcy5pbWdTcmM7XG5cdFx0Y29uc3QgaW1hZ2UgPSBjYW52YXNJbWFnZS5pbWFnZXNbc3JjXTtcblx0XHRpZighaW1hZ2UpIHJldHVybjtcblxuXHRcdGN0eC5zYXZlKCk7XG5cdFx0Y3R4LnRyYW5zbGF0ZSh0aGlzLmxlZnQsIHRoaXMudG9wKTtcblx0XHRjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cdFx0Y3R4LnJlc3RvcmUoKTtcblx0fVxuXG5cdC8qKiDjg57jgrnnm67jgpLmj4/lhpkgKi9cblx0ZHJhd1BhbmVsKCl7XG5cdFx0Y29uc3Qge2N0eCwgbGVmdCwgdG9wLCBjZW50ZXIsIG1pZGRsZSwgd2lkdGgsIGhlaWdodCwgZGlzcGxheVRleHQsIHRleHRSb3RhdGV9ID0gdGhpcztcblxuXHRcdGN0eC5maWxsU3R5bGUgPSB0aGlzLmJhY2tncm91bmRDb2xvcjtcblx0XHRjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmJvcmRlckNvbG9yO1xuXHRcdGN0eC5saW5lV2lkdGggPSB0aGlzLmJvcmRlcldpZHRoO1xuXG5cdFx0Y3R4LnNhdmUoKTtcblx0XHRjdHgudHJhbnNsYXRlKGxlZnQsIHRvcCk7XG5cdFx0Y3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuXHRcdC8vIOS6pOeCueOCkuaPj+WGmVxuXHRcdGlmKHRoaXMuaW50ZXJzZWN0KXtcblx0XHRcdGN0eC5saW5lV2lkdGggPSB0aGlzLmJvcmRlcldpZHRoO1xuXHRcdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRcdFx0Y3R4Lm1vdmVUbyh3aWR0aC8yLCAwKTtcblx0XHRcdGN0eC5saW5lVG8od2lkdGgvMiwgaGVpZ2h0KTtcblx0XHRcdGN0eC5tb3ZlVG8oMCwgaGVpZ2h0LzIpO1xuXHRcdFx0Y3R4LmxpbmVUbyh3aWR0aCwgaGVpZ2h0LzIpO1xuXHRcdFx0Y3R4LmNsb3NlUGF0aCgpO1xuXHRcdFx0Y3R4LnN0cm9rZSgpO1xuXHRcdH1cblx0XHQvLyDjg57jgrnnm67jgpLmj4/lhplcblx0XHRlbHNle1xuXHRcdFx0Y3R4LnN0cm9rZVJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5cdFx0fVxuXG5cdFx0Ly8g5pac57ea44KS5o+P5YaZXG5cdFx0Y3R4LmxpbmVXaWR0aCA9IHRoaXMuYm9yZGVyV2lkdGgvMjtcblx0XHRjdHguYmVnaW5QYXRoKCk7XG5cdFx0aWYodGhpcy5ib3JkZXJTbGFzaExlZnQpe1xuXHRcdFx0Y3R4Lm1vdmVUbygwLCAwKTtcblx0XHRcdGN0eC5saW5lVG8od2lkdGgsIGhlaWdodCk7XG5cdFx0fVxuXHRcdGlmKHRoaXMuYm9yZGVyU2xhc2hSaWdodCl7XG5cdFx0XHRjdHgubW92ZVRvKHdpZHRoLCAwKTtcblx0XHRcdGN0eC5saW5lVG8oMCwgaGVpZ2h0KTtcblx0XHR9XG5cdFx0Y3R4LmNsb3NlUGF0aCgpO1xuXHRcdGN0eC5zdHJva2UoKTtcblx0XHRjdHgucmVzdG9yZSgpO1xuXG5cdFx0Ly8g5paH5a2X44KS5o+P5YaZXG5cdFx0aWYoZGlzcGxheVRleHQpe1xuXHRcdFx0Y3R4LnNhdmUoKTtcblx0XHRcdGN0eC50cmFuc2xhdGUoY2VudGVyLCBtaWRkbGUpO1xuXHRcdFx0Y3R4LmZpbGxTdHlsZSA9IHRoaXMuYm9yZGVyQ29sb3I7XG5cblx0XHRcdGNvbnN0IHJhZCA9IHRleHRSb3RhdGU/IHRleHRSb3RhdGUqTWF0aC5QSS8xODA6IDA7XG5cdFx0XHRjdHgucm90YXRlKHJhZCk7XG5cblx0XHRcdGNvbnN0IGZvbnRTaXplID0gTWF0aC5taW4odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpKjAuNjtcblx0XHRcdGN0eC5mb250ID0gYCR7Zm9udFNpemV9cHggJHtjYW52YXNGb250Lm5hbWVzfWA7XG5cblx0XHRcdGNvbnN0IHdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KGRpc3BsYXlUZXh0KS53aWR0aDtcblx0XHRcdGNvbnN0IGhlaWdodCA9IGZvbnRTaXplLzIqMC44O1xuXHRcdFx0Y3R4LmZpbGxUZXh0KGRpc3BsYXlUZXh0LCAtd2lkdGgvMiwgaGVpZ2h0KTtcblx0XHRcdGN0eC5yZXN0b3JlKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqIOODnuOCueebruOBq+ODnuOCueOCr+OCkuaPj+WGmVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSDjgqvjg6njg7zjgqjjg5Xjgqfjgq/jg4jjga7oibJcblx0ICovXG5cdGRyYXdNYXNrKGNvbG9yKXtcblx0XHRjb25zdCB7Y3R4fSA9IHRoaXM7XG5cblx0XHRjdHguZmlsbFN0eWxlID0gY29sb3I7XG5cblx0XHQvLyDjg57jgrnnm67jgpLmj4/lhplcblx0XHRjdHguZmlsbFJlY3QodGhpcy5sZWZ0LCB0aGlzLnRvcCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXHR9XG5cblx0LyoqIOODnuOCueebruOCkuODhuOCreOCueODiOW9ouW8j+OBp+WPluW+l1xuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQ29tcGFjdCAtIOOCs+ODs+ODkeOCr+ODiOihqOekulxuXHQgKi9cblx0dG9TdHJpbmcoaXNDb21wYWN0PWZhbHNlKXtcblx0XHRyZXR1cm4gIWlzQ29tcGFjdD9cblx0XHRcdHRoaXMudGV4dDpcblx0XHRcdGDvvZwke3RoaXMudGV4dC5zbGljZSgtMSkucmVwbGFjZSgv44CAL2csIFwi44O7XCIpfWA7XG5cdH1cbn1cbiIsIi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2pzb24nKS5QaWVjZUluaXRPcHRpb259IFBpZWNlSW5pdE9wdGlvbiAqL1xuaW1wb3J0IHtjYW52YXNGb250fSBmcm9tIFwiLi9jYW52YXNGb250TG9hZGVyLmpzXCI7XG5pbXBvcnQge2NhbnZhc0ltYWdlfSBmcm9tIFwiLi9jYW52YXNJbWFnZUxvYWRlci5qc1wiO1xuaW1wb3J0IHtnYW1lcywgcGllY2VzLCBwaWVjZVJhbmdlLCBwaWVjZUNvc3R9IGZyb20gXCIuL2pzb24uanNcIjtcblxuLyoqIOmnkuOBrueuoeeQhuOCr+ODqeOCuSAqL1xuZXhwb3J0IGNsYXNzIFBpZWNle1xuXHQvKiog5o+P5YaZ44K144Kk44K6XG5cdCAqIEB0eXBlIHtudW1iZXJ9XG5cdCAqL1xuXHRzdGF0aWMgc2l6ZSA9IDQ1O1xuXG5cdC8qKiDmoLzjga7pgZXjgYTjgavjgojjgaPjgabpp5Ljga7lpKfjgY3jgZXjgpLlpInmm7TjgZnjgovjgYtcblx0ICogQHR5cGUge2Jvb2xlYW59XG5cdCAqL1xuXHRzdGF0aWMgdXNlUmFua1NpemUgPSB0cnVlO1xuXG5cdC8qKiDlvbHjga7mj4/lhpnmnInnhKFcblx0ICogQHR5cGUge2Jvb2xlYW59XG5cdCAqL1xuXHRzdGF0aWMgaXNEcmF3U2hhZG93ID0gdHJ1ZTtcblxuXHQvKiog44OG44Kt44K544OI5Ye65Yqb5pmC44Gu44OX44Os44Kk44Ok44O86KGo56S6XG5cdCAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBzdHJpbmc+fVxuXHQgKi9cblx0c3RhdGljIGRlZ0NoYXJzID0ge1xuXHRcdDA6IFwi4payXCIsXG5cdFx0OTA6IFwi4omrXCIsXG5cdFx0MTgwOiBcIuKWvVwiLFxuXHRcdDI3MDogXCLvvJxcIlxuXHR9O1xuXG5cdC8qKiDjg5fjg6zjgqTjg6Tjg7zooajnpLrjgYvjgonop5LluqbjgpLlj5blvpdcblx0KiBAdHlwZSB7T2JqZWN0PHN0cmluZywgbnVtYmVyPn1cblx0ICovXG5cdHN0YXRpYyBjaGFyRGVncyA9IE9iamVjdC5mcm9tRW50cmllcyhcblx0XHRPYmplY3QuZW50cmllcyhQaWVjZS5kZWdDaGFycylcblx0XHRcdC5tYXAoKFtrZXksIHZhbHVlXSk9Plt2YWx1ZSwga2V5XSkpO1xuXG5cdC8qKiDjgrXjgqTjgrrlpInmm7ToqK3lrprlgKRcblx0ICogQHR5cGUge09iamVjdDxzdHJpbmcsIG51bWJlcj59XG5cdCAqL1xuXHRzdGF0aWMgcmFua1JhdGlvID0ge1xuXHRcdFwiS1JcIjogMSxcblx0XHRcIlNSXCI6IDAuOTY1LFxuXHRcdFwiUlwiOiAwLjkzNSxcblx0XHRcIlVDXCI6IDAuOTAsXG5cdFx0XCJDXCI6IDAuODY1XG5cdH1cblxuXHQvKiog6aeS44Gu5q616ZqO5Yil5L6h5YCk44KS5Y+W5b6XICovXG5cdGdldCByYW5rKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdHRoaXMuY29zdCA8PSAwPyBcIktSXCI6XG5cdFx0XHQyMCA8PSB0aGlzLmNvc3Q/IFwiU1JcIjpcblx0XHRcdDEwIDw9IHRoaXMuY29zdD8gXCJSXCI6XG5cdFx0XHQ1IDw9IHRoaXMuY29zdD8gXCJVQ1wiOlxuXHRcdFx0XCJDXCJcblx0XHQpO1xuXHR9XG5cblxuXHQvKiog6aeS44OH44O844K/44KS5Yid5pyf5YyWXG5cdCAqIEBwYXJhbSB7YW55fSBjdHggLSBDYW52YXPmj4/nlLvjgrPjg7Pjg4bjgq3jgrnjg4hcblx0ICogQHBhcmFtIHtQaWVjZXxQaWVjZUluaXRPcHRpb259IG9wdGlvbiAtIOmnkuOBruWIneacn+WMluOCquODl+OCt+ODp+ODs1xuXHQgKi9cblx0c3RhdGljIGdldFBpZWNlcyhjdHgsIG9wdGlvbj17fSl7XG5cdFx0Y29uc3QgZXhQaWVjZXMgPSBuZXcgTWFwKE9iamVjdC5lbnRyaWVzKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocGllY2VzKSkpKTtcblxuXHRcdC8qIOODh+ODvOOCv+OCkuijnOWujCAqL1xuXHRcdGZvcihjb25zdCBbXywgcGllY2VdIG9mIGV4UGllY2VzKXtcblx0XHRcdHBpZWNlLmF0dHIgPz89IFtdO1xuXHRcdFx0aWYocGllY2UudW5pdCAmJiBwaWVjZS51bml0ICE9PSBcIuaIkFwiKSBwaWVjZS5iYXNlID0gcGllY2U7XG5cdFx0fVxuXHRcdC8qIOaIkOmnkuOBruODh+ODvOOCv+OCkuWQiOaIkCAqL1xuXHRcdGZvcihjb25zdCBbXywgcGllY2VdIG9mIGV4UGllY2VzKXtcblx0XHRcdGlmKCFwaWVjZS5wcm9tbyB8fCB0eXBlb2YocGllY2UucHJvbW8pICE9PSBcInN0cmluZ1wiKSBjb250aW51ZTtcblx0XHRcdGNvbnN0IHByb21vS2V5cyA9IFsuLi5waWVjZS5wcm9tb107XG5cdFx0XHRwaWVjZS5wcm9tbyA9IHt9O1xuXHRcdFx0Zm9yKGNvbnN0IGtleSBvZiBwcm9tb0tleXMpe1xuXHRcdFx0XHRjb25zdCBwcm9tbyA9IGV4UGllY2VzLmdldChrZXkpO1xuXHRcdFx0XHRwcm9tby5hdHRyLnB1c2goXCJwcm9tb3RlZFwiKTtcblx0XHRcdFx0cHJvbW8udW5pdCA9IFwi5oiQXCI7XG5cdFx0XHRcdHBpZWNlLnByb21vW2tleV0gPSBwcm9tbztcblx0XHRcdFx0ZXhQaWVjZXMuc2V0KGtleSwgey4uLnBpZWNlLCAuLi5wcm9tb30pO1xuXHRcdFx0fTtcblx0XHR9XG5cdFx0Ly8g6aeS44KS44Kv44Op44K544Kq44OW44K444Kn44Kv44OI44Gr5aSJ5o+bXG5cdFx0Wy4uLmV4UGllY2VzXS5mb3JFYWNoKChba2V5LCBwaWVjZV0sIGkpPT57XG5cdFx0XHRwaWVjZS5pZCA9IGk7XG5cdFx0XHRwaWVjZS5jaGFyID0ga2V5O1xuXHRcdFx0ZXhQaWVjZXMuc2V0KGtleSwgbmV3IFBpZWNlKGN0eCwgcGllY2UsIG9wdGlvbikpO1xuXHRcdH0pO1xuXHRcdGNvbnN0IGV4UGllY2VzT2JqID0gT2JqZWN0LmZyb21FbnRyaWVzKGV4UGllY2VzKTtcblx0XHQvLyDjgqjjgqTjg6rjgqLjgrnjga7jg4fjg7zjgr/jgpLntbHlkIhcblx0XHRmb3IoY29uc3QgW2tleSwgcGllY2VdIG9mIGV4UGllY2VzKXtcblx0XHRcdHBpZWNlLmFsaWFzLmZvckVhY2goKGFsaWFzS2V5LCBpKT0+e1xuXHRcdFx0XHRjb25zdCBhbGlhcyA9IHBpZWNlLmNsb25lKCk7XG5cdFx0XHRcdGNvbnN0IGRpc3BsYXkgPSBbLi4uYWxpYXMuZGlzcGxheV07XG5cdFx0XHRcdGFsaWFzLmRpc3BsYXlQdG4gPSBpKzE7XG5cdFx0XHRcdGFsaWFzLmRpc3BsYXkgPSBkaXNwbGF5O1xuXHRcdFx0XHRleFBpZWNlc09ialthbGlhc0tleV0gPSBhbGlhcztcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gZXhQaWVjZXNPYmo7XG5cdH1cblxuXHQvKiog5paH5a2X5YiX44GL44KJ6aeS44KS5Y+W5b6XXG5cdCAqIEBwYXJhbSB7UGllY2V8UGllY2VJbml0T3B0aW9ufSBwaWVjZSAtIOmnklxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIOmnkuaWh+Wtl+WIl1xuXHQgKi9cblx0c3RhdGljIHN0cmluZ1RvUGllY2UocGllY2VzLCB0ZXh0KXtcblx0XHRpZiAoIXRleHQpIHJldHVybiBudWxsO1xuXHRcdGNvbnN0IFtkZWdDaGFyLCBwaWVjZUNoYXJdID0gWy4uLnRleHRdO1xuXHRcdGNvbnN0IGRlZyA9IFBpZWNlLmNoYXJEZWdzW2RlZ0NoYXJdO1xuXHRcdGlmKCFkZWcgfHwgIXBpZWNlc1twaWVjZUNoYXJdKSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCBwaWVjZSA9IHBpZWNlc1twaWVjZUNoYXJdLmNsb25lKCk7XG5cdFx0cGllY2UuZGVnID0gZGVnO1xuXHRcdHJldHVybiBwaWVjZTtcblx0fVxuXG5cdC8qKiDpp5Ljga7kuIDopqfjgpLjg6rjgrnjg4jjgaflj5blvpcgKi9cblx0c3RhdGljIHBpZWNlc1RvTGlzdChwaWVjZXMpe1xuXHRcdHJldHVybiBPYmplY3QuZW50cmllcyhwaWVjZXMpXG5cdFx0XHQuc29ydCgoW18se2lkOmF9XSwgW19fLHtpZDpifV0pPT5cblx0XHRcdFx0TWF0aC5zaWduKGEtYikpO1xuXHR9XG5cblx0LyoqIOmnkuOBruinkuW6pihkZWcvcmFkKVxuXHQgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcblx0ICovXG5cdHNldCBkZWcodmFsdWUpe1xuXHRcdHRoaXMucmFkID0gdmFsdWUlMzYwKk1hdGguUEkvMTgwO1xuXHR9XG5cdGdldCBkZWcoKXtcblx0XHRyZXR1cm4gdGhpcy5yYWQlMzYwLyhNYXRoLlBJLzE4MCk7XG5cdH1cblxuXHQvKiog5bem5YG044Gu5bqn5qiZICovXG5cdGdldCBsZWZ0KCl7XG5cdFx0cmV0dXJuIHRoaXMuY2VudGVyLXRoaXMuc2l6ZSowLjgvMjtcblx0fVxuXHQvKiog5LiK5YG044Gu5bqn5qiZICovXG5cdGdldCB0b3AoKXtcblx0XHRyZXR1cm4gdGhpcy5taWRkbGUtdGhpcy5zaXplLzI7XG5cdH1cblx0LyoqIOWPs+WBtOOBruW6p+aomSAqL1xuXHRnZXQgcmlnaHQoKXtcblx0XHRyZXR1cm4gdGhpcy5jZW50ZXIrdGhpcy5zaXplKjAuOC8yO1xuXHR9XG5cdC8qKiDkuIvlgbTjga7luqfmqJkgKi9cblx0Z2V0IGJvdHRvbSgpe1xuXHRcdHJldHVybiB0aGlzLm1pZGRsZSt0aGlzLnNpemUvMjtcblx0fVxuXG5cdC8qKiDmi6HlpKfnjofjgpLlj5blvpdcblx0ICogQHJldHVybnMge251bWJlcn1cblx0ICovXG5cdGdldCB6b29tKCl7XG5cdFx0bGV0IHpvb20gPXRoaXMuc2l6ZS8xMDA7XG5cdFx0aWYodGhpcy51c2VSYW5rU2l6ZSlcblx0XHRcdHpvb20gKj0gUGllY2UucmFua1JhdGlvW3RoaXMucmFua107XG5cdFx0cmV0dXJuIHpvb207XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHthbnl9IGN0eCAtIENhbnZhc+aPj+eUu+OCs+ODs+ODhuOCreOCueODiFxuXHQgKiBAcGFyYW0ge1BpZWNlfFBpZWNlSW5pdE9wdGlvbn0gcGllY2UgLSDpp5Jcblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbiAtIOOCquODl+OCt+ODp+ODs1xuXHQgKiBAcGFyYW0ge251bWJlcn0gb3B0aW9uLmRpc3BsYXlQdG4gLSDooajnpLrmloflrZfliJfjgpLlpInmm7QoMeOAnClcblx0ICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbi5kZWcgLSDpp5Ljga7op5LluqZcblx0ICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbi5zaXplIC0g6aeS44Gu5aSn44GN44GVXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9uLnVzZVJhbmtTaXplIC0g6aeS44Gu5aSn44GN44GV44KS5qC844Gu6YGV44GE44Gn5aSJ5pu044GZ44KL44GLXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9uLmlzRHJhd1NoYWRvdyAtIOmnkuOBruW9seOBruaPj+WGmeacieeEoVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5pc01vdmVkIC0g5Yid5Zue56e75YuV5riI44G/44GL5ZCm44GLXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihjdHgsIHBpZWNlLCBvcHRpb249e30pe1xuXHRcdGNvbnN0IHtcblx0XHRcdGRpc3BsYXlQdG49MCxcblx0XHRcdGRlZz0wLFxuXHRcdFx0c2l6ZT1QaWVjZS5zaXplLFxuXHRcdFx0dXNlUmFua1NpemU9UGllY2UudXNlUmFua1NpemUsXG5cdFx0XHRpc0RyYXdTaGFkb3c9UGllY2UuaXNEcmF3U2hhZG93LFxuXHRcdFx0aXNNb3ZlZD1mYWxzZVxuXHRcdH0gPSBvcHRpb247XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBwaWVjZSk7XG5cdFx0dGhpcy5jdHggPSBjdHg7XG5cdFx0dGhpcy5kaXNwbGF5ID8/PSBbXCJcIl07XG5cdFx0dGhpcy5pbWdTcmMgPz89IG51bGw7XG5cdFx0dGhpcy5hbGlhcyA9IFsuLi50aGlzLmFsaWFzID8/IFwiXCJdO1xuXHRcdHRoaXMuZGlzcGxheVB0biA9IGRpc3BsYXlQdG47XG5cdFx0dGhpcy5nYW1lID0gZ2FtZXNbdGhpcy5nYW1lTmFtZV07XG5cdFx0dGhpcy5jb3N0ID0gcGllY2VDb3N0W3RoaXMuY2hhcl0gPz8gMTtcblx0XHR0aGlzLmNlbnRlciA9IDA7XG5cdFx0dGhpcy5taWRkbGUgPSAwO1xuXHRcdHRoaXMuZGVnID0gZGVnO1xuXHRcdHRoaXMuc2l6ZSA9IHNpemU7XG5cdFx0dGhpcy51c2VSYW5rU2l6ZSA9IHVzZVJhbmtTaXplO1xuXHRcdHRoaXMuaXNEcmF3U2hhZG93ID0gaXNEcmF3U2hhZG93O1xuXHRcdHRoaXMuaXNSb3RhdGVJbWcgPz89IHRydWU7XG5cdFx0dGhpcy5pc01vdmVkID0gaXNNb3ZlZDtcblx0XHR0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcblx0XHR0aGlzLmF0dHIgPz89IFtdO1xuXHRcdHRyeXtcblx0XHRcdE9iamVjdC5lbnRyaWVzKHRoaXMucmFuZ2UpLmZvckVhY2goKFtrZXksIHJuZ10pPT57XG5cdFx0XHRcdGlmKEFycmF5LmlzQXJyYXkocm5nKSkgcmV0dXJuO1xuXHRcdFx0XHR0aGlzLnJhbmdlW2tleV0gPSBwaWVjZVJhbmdlW3JuZ10ubWFwKHJvdz0+Wy4uLnJvd10pXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Y2F0Y2goZSl7XG5cdFx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHRcdFx0dGhyb3cgcGllY2U7XG5cdFx0fVxuXHR9XG5cblx0LyoqIOmnkuOCkuOCr+ODreODvOODs1xuXHQgKiBAcmV0dXJucyBQaWVjZVxuXHQgKi9cblx0Y2xvbmUoKXtcblx0XHRjb25zdCB7ZGlzcGxheVB0biwgZGVnLCBzaXplLCBpc01vdmVkfSA9IHRoaXM7XG5cdFx0cmV0dXJuIG5ldyBQaWVjZSh0aGlzLmN0eCwgey4uLnRoaXN9LCB7ZGlzcGxheVB0biwgZGVnLCBzaXplLCBpc01vdmVkfSk7XG5cdH1cblxuXHQvKiog6aeS44KS6KGo6L+U44GZICovXG5cdHR1cm5Gcm9udCgpe1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5iYXNlKTtcblx0fVxuXG5cdC8qKiDjg5fjg63jg6Ljg7zjgrfjg6fjg7Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IGNoYXIgLSDmiJDjgorlhYjjga7mloflrZdcblx0ICovXG5cdHByb21vdGlvbihjaGFyKXtcblx0XHRjb25zdCB7cHJvbW99ID0gdGhpcztcblxuXHRcdGlmKCFwcm9tbykgdGhyb3cgRXJyb3IoYHByb21vPSR7Y2hhcn0sIE5vdCBwbG9tb3RlIHBpZWNlLmApO1xuXHRcdGlmKCFwcm9tbyBpbiBwcm9tbykgdGhyb3cgRXJyb3IoYHByb21vPSR7Y2hhcn0sIFBsb21vdGUga2V5IGlzIG1pc3NpbmcuYCk7XG5cdFx0aWYodGhpcy5oYXNBdHRyKFwicHJvbW90ZWRcIikpIHRocm93IEVycm9yKGBwcm9tbz0ke2NoYXJ9LCBQcm9tb3RlZCBwaWVjZS5gKTtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHByb21vW2NoYXJdKTtcblx0XHR0aGlzLmNoYXIgPSBjaGFyO1xuXHR9XG5cblx0LyoqIOWxnuaAp+OBruWtmOWcqOOCkueiuuiqjVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYXR0ck5hbWUgLSDlsZ7mgKflkI1cblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRoYXNBdHRyKGF0dHJOYW1lKXtcblx0XHRyZXR1cm4gdGhpcy5hdHRyLmluY2x1ZGVzKGF0dHJOYW1lKTtcblx0fVxuXG5cdC8qKiDluqfmqJnjgYzpp5LjgavlkKvjgb7jgozjgovjgYvliKTlrppcblx0ICogQHBhcmFtIHtudW1iZXJ9IHggLSBY5bqn5qiZXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gWeW6p+aomVxuXHQgKi9cblx0Y2hlY2tSYW5nZU1vdXNlKHgsIHkpe1xuXHRcdHJldHVybiAoXG5cdFx0XHR0aGlzLmxlZnQgPD0geCAmJiB4IDwgdGhpcy5yaWdodCAmJlxuXHRcdFx0dGhpcy50b3AgPD0geSAmJiB5IDwgdGhpcy5ib3R0b21cblx0XHQpO1xuXHR9XG5cblx0LyoqIOenu+WLleevhOWbsuOCkuWbnui7ouOBl+OBpuWPluW+lyAqL1xuXHRnZXRSYW5nZSgpe1xuXHRcdGNvbnN0IGRlZyA9IDB8dGhpcy5kZWc7XG5cdFx0Y29uc3QgcmFuZ2UgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucmFuZ2UpKTtcblx0XHRPYmplY3Qua2V5cyhyYW5nZSkuZm9yRWFjaChrZXk9Pntcblx0XHRcdGlmKGRlZyA9PT0gMCkgcmV0dXJuO1xuXHRcdFx0aWYoIVs5MCwgMTgwLCAyNzBdLmluY2x1ZGVzKGRlZykpIHRocm93IEVycm9yKGBkZWc9JHtkZWd9LCBkZWcgbmVlZCBtdWx0aXBsZSBvZiA5MC5gKTtcblx0XHRcdGlmKFs5MCwgMjcwXS5pbmNsdWRlcyhkZWcpKXtcblx0XHRcdFx0Ly8gMuasoemFjeWIl+OCkui7oue9rlxuXHRcdFx0XHRjb25zdCB0cmFuc3Bvc2UgPSBhID0+IGFbMF0ubWFwKChfLCBjKSA9PiBhLm1hcChyID0+IHJbY10pKTtcblx0XHRcdFx0cmFuZ2Vba2V5XSA9IHRyYW5zcG9zZShyYW5nZVtrZXldKTtcblx0XHRcdH1cblx0XHRcdGlmKFsxODAsIDI3MF0uaW5jbHVkZXMoZGVnKSl7XG5cdFx0XHRcdHJhbmdlW2tleV0ucmV2ZXJzZSgpO1xuXHRcdFx0fVxuXHRcdFx0cmFuZ2Vba2V5XS5mb3JFYWNoKHJvdz0+e1xuXHRcdFx0XHRpZihbOTAsIDE4MF0uaW5jbHVkZXMoZGVnKSkgcm93LnJldmVyc2UoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHJldHVybiByYW5nZTtcblx0fVxuXG5cdC8qKiDpp5Iv44Oe44K544Kv44KS5o+P5YaZICovXG5cdGFzeW5jIGRyYXcoKXtcblx0XHRjb25zdCBzZWxlY3RDb2xvciA9IFwiI0ZGMDAwMDU1XCI7XG5cdFx0aWYodGhpcy5pbWdTcmMgJiYgY2FudmFzSW1hZ2UuaW1wb3J0ZWQpe1xuXHRcdFx0dGhpcy5kcmF3SW1hZ2UoKTtcblx0XHRcdGlmKHRoaXMuaXNTZWxlY3RlZCkgdGhpcy5kcmF3TWFza0ltYWdlKHNlbGVjdENvbG9yKTtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdHRoaXMuZHJhd1BpZWNlKCk7XG5cdFx0XHRpZih0aGlzLmlzU2VsZWN0ZWQpIHRoaXMuZHJhd01hc2soc2VsZWN0Q29sb3IpO1xuXHRcdH1cblx0fVxuXG5cdC8qKiDpp5LnlLvlg4/jgpLmj4/lhpkgKi9cblx0ZHJhd0ltYWdlKCl7XG5cdFx0Y29uc3Qge2N0eCwgc2l6ZX0gPSB0aGlzO1xuXG5cdFx0Y29uc3Qgc3JjID0gdGhpcy5pbWdTcmNbdGhpcy5kaXNwbGF5UHRuXTtcblx0XHRjb25zdCBpbWFnZSA9IGNhbnZhc0ltYWdlLmltYWdlc1tzcmNdO1xuXHRcdGlmKCFpbWFnZSkgcmV0dXJuO1xuXG5cdFx0Y3R4LnNhdmUoKTtcblx0XHRjdHgudHJhbnNsYXRlKHRoaXMuY2VudGVyLCB0aGlzLm1pZGRsZSk7XG5cdFx0aWYodGhpcy5pc1JvdGF0ZUltZykgY3R4LnJvdGF0ZSh0aGlzLnJhZCk7XG5cblx0XHRsZXQgaW1nV2lkdGgsIGltZ0hlaWdodDtcblx0XHRpZihpbWFnZS53aWR0aCowLjkgPCBpbWFnZS5oZWlnaHQpe1xuXHRcdFx0aW1nV2lkdGggPSBpbWFnZS53aWR0aC9pbWFnZS5oZWlnaHQqc2l6ZVxuXHRcdFx0aW1nSGVpZ2h0ID0gc2l6ZTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpbWdXaWR0aCA9IHNpemU7XG5cdFx0XHRpbWdIZWlnaHQgPSBpbWFnZS5oZWlnaHQvaW1hZ2Uud2lkdGgqc2l6ZTtcblx0XHR9XG5cdFx0Y3R4LmRyYXdJbWFnZShpbWFnZSwgLWltZ1dpZHRoLzIsIC1pbWdIZWlnaHQvMiwgaW1nV2lkdGgsIGltZ0hlaWdodCk7XG5cdFx0Y3R4LnJlc3RvcmUoKTtcblx0fVxuXG5cdC8qKiDpp5LnlLvlg4/jgavjg57jgrnjgq/jgpLmj4/lhplcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0g44Kr44Op44O844Ko44OV44Kn44Kv44OI44Gu6ImyXG5cdCAqL1xuXHRkcmF3TWFza0ltYWdlKGNvbG9yKXtcblx0XHRjb25zdCB7Y3R4LCBzaXplfSA9IHRoaXM7XG5cblx0XHRjdHguZmlsbFN0eWxlID0gY29sb3I7XG5cdFx0Y3R4LnNhdmUoKTtcblx0XHRjb25zdCBpbWdXaWR0aCA9IHNpemUqMC45O1xuXHRcdGNvbnN0IGltZ0hlaWdodCA9IHNpemU7XG5cblx0XHRjdHgudHJhbnNsYXRlKHRoaXMuY2VudGVyLCB0aGlzLm1pZGRsZSk7XG5cdFx0Y3R4LmZpbGxSZWN0KC1pbWdXaWR0aC8yLCAtaW1nSGVpZ2h0LzIsIGltZ1dpZHRoLCBpbWdIZWlnaHQpO1xuXHRcdGN0eC5yZXN0b3JlKCk7XG5cdH1cblxuXHQvKiog5bCG5qOL6aeS44Gu5aSW5b2i44OR44K544KS5L2c5oiQXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB6b29tIC0g6aeS44Gu5ouh5aSn546HXG5cdCAqL1xuXHRtYWtlUGF0aCh6b29tKXtcblx0XHRjb25zdCB7Y3R4fSA9IHRoaXM7XG5cblx0XHRjdHgudHJhbnNsYXRlKHRoaXMuY2VudGVyLCB0aGlzLm1pZGRsZSk7XG5cdFx0Y3R4LnJvdGF0ZSh0aGlzLnJhZCk7XG5cblx0XHQvKiDlpJbmnqDjgpLmj4/lhpkgKi9cblx0XHRjdHguYmVnaW5QYXRoKCk7XG5cdFx0Y3R4Lm1vdmVUbygtMzAqem9vbSwtNDAqem9vbSk7XG5cdFx0Y3R4LmxpbmVUbyggIDAqem9vbSwtNTAqem9vbSk7XG5cdFx0Y3R4LmxpbmVUbyggMzAqem9vbSwtNDAqem9vbSk7XG5cdFx0Y3R4LmxpbmVUbyggNDUqem9vbSwgNTAqem9vbSk7XG5cdFx0Y3R4LmxpbmVUbygtNDUqem9vbSwgNTAqem9vbSk7XG5cdFx0Y3R4LmNsb3NlUGF0aCgpO1xuXHR9XG5cblx0LyoqIOmnkuOBruW9seOCkuaPj+WGmVxuXHQqIEBwYXJhbSB7bnVtYmVyfSB6b29tIC0g6aeS44Gu5ouh5aSn546HXG5cdCovXG4gICBkcmF3UGllY2VTaGFkb3coem9vbSl7XG5cdFx0aWYoIXRoaXMuaXNEcmF3U2hhZG93KSByZXR1cm47XG5cdFx0Y29uc3Qge2N0eH0gPSB0aGlzO1xuXG5cdFx0Y3R4LnNhdmUoKTtcblx0XHRjdHgudHJhbnNsYXRlKDAsIDEwKnpvb20pO1xuXHRcdHRoaXMuZHJhd01hc2soXCIjMDAwMDAwNjZcIik7XG5cdFx0Y3R4LnJlc3RvcmUoKTtcblx0fVxuXG5cdC8qKiDpp5LjgpLmj4/lhpkgKi9cblx0ZHJhd1BpZWNlKCl7XG5cdFx0Y29uc3Qge2N0eCwgZ2FtZSwgem9vbX0gPSB0aGlzO1xuXG5cdFx0bGV0IGZvbnRDb2xvciwgYmFja2dyb3VuZENvbG9yLCBib3JkZXJDb2xvcjtcblx0XHRpZih0aGlzLmhhc0F0dHIoXCJwcm9tb3RlZFwiKSl7XG5cdFx0XHRmb250Q29sb3IgPSBnYW1lLnByb21vdGVGb250Q29sb3IgPz8gZ2FtZS5mb250Q29sb3IgPz8gXCIjMDAwMDAwXCI7XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSBnYW1lLnByb21vdGVCYWNrZ3JvdW5kQ29sb3IgPz8gZ2FtZS5iYWNrZ3JvdW5kQ29sb3IgPz8gXCIjRkZGRkZGXCIsXG5cdFx0XHRib3JkZXJDb2xvciA9IGdhbWUucHJvbW90ZUJvcmRlckNvbG9yID8/IGdhbWUuYm9yZGVyQ29sb3IgPz8gXCIjRkYzMzAwXCI7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0Zm9udENvbG9yID0gZ2FtZS5mb250Q29sb3IgPz8gXCIjMDAwMDAwXCI7XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSBnYW1lLmJhY2tncm91bmRDb2xvciA/PyBcIiNGRkZGRkZcIixcblx0XHRcdGJvcmRlckNvbG9yID0gZ2FtZS5ib3JkZXJDb2xvciA/PyBcIiM3Nzc3NzdcIjtcblx0XHR9XG5cblx0XHRjdHguc3Ryb2tlU3R5bGUgPSBib3JkZXJDb2xvcjtcblx0XHRjdHguZmlsbFN0eWxlID0gYmFja2dyb3VuZENvbG9yO1xuXHRcdGN0eC5saW5lV2lkdGggPSA4Knpvb207XG5cdFx0dGhpcy5kcmF3UGllY2VTaGFkb3coem9vbSk7XG5cdFx0Y3R4LnNhdmUoKTtcblx0XHR0aGlzLm1ha2VQYXRoKHpvb20pO1xuXHRcdGN0eC5zdHJva2UoKTtcblx0XHRjdHguZmlsbCgpO1xuXG5cdFx0Lyog5paH5a2X44KS5o+P5YaZICovXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IGZvbnRDb2xvcjtcblx0XHRjb25zdCB0ZXh0ID0gWy4uLlwiXCIrdGhpcy5kaXNwbGF5W3RoaXMuZGlzcGxheVB0bl1dO1xuXHRcdGNvbnN0IGZvbnRTaXplID0gNDAqem9vbTtcblx0XHRjdHguZm9udCA9IGAke2ZvbnRTaXplfXB4ICR7Y2FudmFzRm9udC5uYW1lc31gO1xuXHRcdGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuXG5cdFx0dGV4dC5mb3JFYWNoKCh2LGkpPT57XG5cdFx0XHRjb25zdCBoZWlnaHQgPSB0ZXh0Lmxlbmd0aCA9PT0gMT8gZm9udFNpemUvMjogaSpmb250U2l6ZTtcblx0XHRcdGN0eC5maWxsVGV4dCh2LCAwLCBoZWlnaHQpO1xuXHRcdH0pO1xuXHRcdGN0eC5yZXN0b3JlKCk7XG5cdH1cblxuXHQvKiog6aeS44Gr44Oe44K544Kv44KS5o+P5YaZXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIOOCq+ODqeODvOOCqOODleOCp+OCr+ODiOOBruiJslxuXHQgKi9cblx0ZHJhd01hc2soY29sb3Ipe1xuXHRcdGNvbnN0IHtjdHgsIHpvb219ID0gdGhpcztcblxuXHRcdGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcblx0XHRjdHguc2F2ZSgpO1xuXHRcdHRoaXMubWFrZVBhdGgoem9vbSk7XG5cdFx0Y3R4LmZpbGwoKTtcblxuXHRcdGN0eC5yZXN0b3JlKCk7XG5cdH1cblxuXHQvKiog5paH5a2X5YiX5b2i5byP44Gn5Y+W5b6XXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNBbGlhcyAtIOOCqOOCpOODquOCouOCueihqOekulxuXHQgKi9cblx0dG9TdHJpbmcoaXNBbGlhcz1mYWxzZSl7XG5cdFx0Y29uc3Qge2Rpc3BsYXlQdG59ID0gdGhpcztcblxuXHRcdGNvbnN0IGNoYXIgPSAhaXNBbGlhcyB8fCBkaXNwbGF5UHRuID09PSAwP1xuXHRcdFx0dGhpcy5jaGFyOlxuXHRcdFx0dGhpcy5hbGlhc1tkaXNwbGF5UHRuLTFdO1xuXHRcdHJldHVybiBQaWVjZS5kZWdDaGFyc1t0aGlzLmRlZ10gKyBjaGFyO1xuXHR9XG59XG4iLCJpbXBvcnQge0JvYXJkfSBmcm9tIFwiLi9ib2FyZC5qc1wiO1xuaW1wb3J0IHtQaWVjZX0gZnJvbSBcIi4vcGllY2UuanNcIjtcblxuLy8g56e75YuV56+E5Zuy44Kq44OX44K344On44OzXG5jb25zdCByYW5nZU9wdGlvbnMgPSBbXG5cdFtcImRlZmF1bHRcIiwge2lzQXR0YWNrOiBmYWxzZX1dLFxuXHRbXCJhdHRhY2tcIiwge2lzQXR0YWNrOiB0cnVlfV0sXG5cdFtcInN0YXJ0XCIsIHtpc0F0dGFjazogZmFsc2V9XSxcblx0W1wiY2FzdGxpbmdcIiwge2lzQXR0YWNrOiBmYWxzZX1dLFxuXHRbXCJlblBhc3NhbnRcIiwge2lzQXR0YWNrOiB0cnVlfV0sXG5cdFtcInBhbGFjZVNsYXNoXCIsIHtpc0F0dGFjazogZmFsc2V9XSxcblx0W1wicGFsYWNlU2xhc2hcIiwge2lzQXR0YWNrOiB0cnVlfV1cbl07XG5cbi8vIOi1t+eCueaWh+Wtl+OBruWumue+qVxuY29uc3QgY2VudGVyQ2hhcnMgPSBbXG5cdFtcIk9cIiwge2lzT3duOiB0cnVlfV0sXG5cdFtcIm9cIiwge31dXG5dO1xuXG4vLyDnp7vli5Xnr4Tlm7LmloflrZfjga7opqrlrZDplqLkv4Jcbi8qKiDngrnnp7vli5Xjgqrjg5fjgrfjg6fjg7NcbiAqIEB0eXBlIHtPYmplY3Q8a2V5OiBzdHJpbmcsIHtjaGlsZDogc3RyaW5nW119PltdfVxuICogQHBhcmFtIGtleSAtIOenu+WLleevhOWbsuOCkuWumue+qeOBmeOCi+aWh+Wtl1xuICogQHBhcmFtIHtudW1iZXJ9IG1vdmVzLSDpgLLooYzlj6/og73jgarjg57jgrnmlbBcbiAqL1xuY29uc3QgcG9pbnRDaGFycyA9IFtcblx0W1wib1wiXSxcblx0W1wiQVwiLCB7Y2hpbGQ6IFtcImFcIl19XSxcblx0W1wiQlwiLCB7Y2hpbGQ6IFtcImJcIl19XSxcblx0W1wiQ1wiLCB7Y2hpbGQ6IFtcImNcIl19XSxcblx0W1wiRFwiLCB7Y2hpbGQ6IFtcImRcIl19XSxcblx0W1wiRVwiLCB7Y2hpbGQ6IFtcImFcIiwgXCJlXCJdfV0sXG5cdFtcIkZcIiwge2NoaWxkOiBbXCJhXCIsIFwiZlwiXX1dLFxuXHRbXCJHXCIsIHtjaGlsZDogW1wiYlwiLCBcImdcIl19XSxcblx0W1wiSFwiLCB7Y2hpbGQ6IFtcImJcIiwgXCJoXCJdfV0sXG5cdFtcIklcIiwge2NoaWxkOiBbXCJjXCIsIFwiaVwiXX1dLFxuXHRbXCJKXCIsIHtjaGlsZDogW1wiY1wiLCBcImpcIl19XSxcblx0W1wiS1wiLCB7Y2hpbGQ6IFtcImRcIiwgXCJrXCJdfV0sXG5cdFtcIkxcIiwge2NoaWxkOiBbXCJkXCIsIFwibFwiXX1dXG5dO1xuXG4vKiog55u057ea56e75YuV44Kq44OX44K344On44OzXG4gKiBAdHlwZSB7T2JqZWN0PGtleTogc3RyaW5nLCB7am1wczogbnVtYmVyLCBtb3ZlczogbnVtYmVyfT5bXX1cbiAqIEBwYXJhbSBrZXkgLSDnp7vli5Xnr4Tlm7LjgpLlrprnvqnjgZnjgovmloflrZdcbiAqIEBwYXJhbSBqbXBzIC0g5b+F6KaB44Gq44K444Oj44Oz44OX5Zue5pWwXG4gKiBAcGFyYW0gbW92ZXMtIOmAsuihjOWPr+iDveOBquODnuOCueaVsFxuICovXG5jb25zdCBsaW5lckNoYXJzID0gW1xuXHRbXCIqXCIsIHt9XSxcblx0W1wiK1wiLCB7am1wczogMX1dLFxuXHRbXCJ8XCIsIHtqbXBzOiAxLCBtb3ZlczogMX1dXG5dO1xuZm9yKGxldCBpPTE7aTw9OTtpKyspXG5cdGxpbmVyQ2hhcnMucHVzaChbXCJcIitpLCB7bW92ZXM6IGl9XSk7XG5cbi8qKiByYW5nZeOBruWOn+eCueW6p+aomeOCkuWPluW+l1xuICogQHBhcmFtIHtzdHJpbmdbXX0gcmFuZ2UgLSDnp7vli5Xnr4Tlm7Lmg4XloLFcbiAqL1xuZnVuY3Rpb24gZ2V0T3JpZ2luKHJhbmdlKXtcblx0Y29uc3Qgb0xpc3QgPSBbXTtcblx0bGV0IG93blgsIG93blk7XG5cdGZvcihsZXQgclk9MDtyWTxyYW5nZS5sZW5ndGg7clkrKyl7XG5cdFx0Zm9yKGxldCByWD0wO3JYPHJhbmdlW3JZXS5sZW5ndGg7clgrKyl7XG5cdFx0XHRjb25zdCByQ2hhciA9IHJhbmdlW3JZXVtyWF07XG5cdFx0XHRmb3IobGV0IFtrZXksIHtpc093bn1dIG9mIGNlbnRlckNoYXJzKXtcblx0XHRcdFx0aWYockNoYXIgIT09IGtleSkgY29udGludWU7XG5cdFx0XHRcdG9MaXN0LnB1c2goe2lzT3duLCBvWDogclgsIG9ZOiByWX0pO1xuXHRcdFx0XHRpZihpc093bikgW293blgsIG93blldID0gW3JYLCByWV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBvTGlzdC5tYXAobz0+e1xuXHRcdG8ub2Zmc2V0WCA9IG8ub1gtb3duWDtcblx0XHRvLm9mZnNldFkgPSBvLm9ZLW93blk7XG5cdFx0cmV0dXJuIG87XG5cdH0pO1xufVxuXG4vKiog6aeS44Gu56e75YuV5Yik5a6aXG4gKiBAcGFyYW0ge0JvYXJkfSBib2FyZCAtIOODnOODvOODiVxuICogQHBhcmFtIHtQaWVjZX0gcGllY2UgLSDpp5JcbiAqIEBwYXJhbSB7bnVtYmVyfSBwWCAtIOODnuOCueebruOBruWIl1xuICogQHBhcmFtIHtudW1iZXJ9IHBZIC0g44Oe44K555uu44Gu6KGMXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tUYXJnZXQoYm9hcmQsIHBpZWNlLCBwWCwgcFkpe1xuXHRjb25zdCB7ZmllbGQsIHlMZW4sIGVuUGFzc2FudH0gPSBib2FyZDtcblxuXHQvKiog44Oe44K555uu5bqn5qiZ44GM44Oc44O844OJ56+E5Zuy5YaF44GL5Yik5a6aXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4IC0g5Yik5a6a44GZ44KL44Oe44K555uu44Gu5YiXXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IC0g5Yik5a6a44GZ44KL44Oe44K555uu44Gu6KGMXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0ZnVuY3Rpb24gaW5GaWVsZCh4LCB5KXtcblx0XHRyZXR1cm4gZmllbGRbeV0gJiYgZmllbGRbeV1beF0gJiYgIWZpZWxkW3ldW3hdLmhhc0F0dHIoXCJrZWVwT3V0XCIpO1xuXHR9XG5cblx0LyoqIOWMheWQjOWjq+OBp+OBguOCi+OBi1xuXHQgKiBAcGFyYW0ge1BhbmVsfSBwYW5lbCAtIOODnuOCueebrlxuXHQgKi9cblx0ZnVuY3Rpb24gaXNWc1BvKHBhbmVsKXtcblx0XHRyZXR1cm4gcGFuZWwucGllY2UgJiYgcGllY2UuaGFzQXR0cihcInBvXCIpICYmIHBhbmVsLnBpZWNlLmhhc0F0dHIoXCJwb1wiKTtcblx0fVxuXG5cdC8qKiDlr77osaHpp5LjgYzngq7jgaflj5bjgozjgovjgYtcblx0ICogQHBhcmFtIHtQYW5lbH0gcGFuZWwgLSDjg57jgrnnm65cblx0ICovXG5cdGZ1bmN0aW9uIGlzQXR0YWNrRnJvbVBhbyhwYW5lbCl7XG5cdFx0cmV0dXJuIHBhbmVsLnBpZWNlXG5cdFx0XHQmJiAhcGllY2UuaXNNb3ZlZFxuXHRcdFx0JiYgIXBhbmVsLnBpZWNlLmlzTW92ZWRcblx0XHRcdCYmIHBpZWNlLmhhc0F0dHIoXCJwYW9cIilcblx0XHRcdCYmIHBpZWNlLmNvc3QgPCBwYW5lbC5waWVjZS5jb3N0O1xuXHR9XG5cblx0LyoqIOenu+WLleWPr+iDveOBi+WIpOWumlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQXR0YWNrIC0g6aeS44KS5Y+W5b6X5a++6LGh44Gr5ZCr44KA44GLP1xuXHQgKiBAcGFyYW0ge251bWJlcn0geCAtIOWIpOWumuOBmeOCi+ODnuOCueebruOBruWIl1xuXHQgKiBAcGFyYW0ge251bWJlcn0geSAtIOWIpOWumuOBmeOCi+ODnuOCueebruOBruihjFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcmFuZ2VOYW1lIC0g56e75YuV56+E5Zuy44Gu5a6a576p5ZCNXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gY2hlY2tSaXZhbERlZyAtIOaVteOBrumnkuOBruOBv+OCkuenu+WLleWFiOOBqOOBmeOCi+OBiz9cblx0ICogQHJldHVybnMgYm9vbGVhblxuXHQgKi9cblx0ZnVuY3Rpb24gY2FuTW92ZShpc0F0dGFjaywgeCwgeSwgcmFuZ2VOYW1lPVwiXCIsIGNoZWNrUml2YWxEZWc9dHJ1ZSl7XG5cdFx0aWYoIWZpZWxkW3ldIHx8ICFmaWVsZFt5XVt4XSkgcmV0dXJuIGZhbHNlO1xuXHRcdGNvbnN0IHBhbmVsID0gZmllbGRbeV1beF07XG5cdFx0aWYoIXBhbmVsKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYoaXNWc1BvKHBhbmVsKSkgcmV0dXJuIGZhbHNlO1xuXHRcdGlmKGlzQXR0YWNrRnJvbVBhbyhwYW5lbCkpIHJldHVybiBmYWxzZTtcblx0XHRpZihyYW5nZU5hbWUgPT09IFwiZW5QYXNzYW50XCIgJiYgIWVuUGFzc2FudC5pc1RhcmdldChwYW5lbCwgcGllY2UpKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYocGllY2UuaGFzQXR0cihcImluUGFsYWNlXCIpICYmICFwYW5lbC5oYXNBdHRyKFwicGFsYWNlXCIpKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYocmFuZ2VOYW1lLmluZGV4T2YoXCJwYWxhY2VcIikgPT09IDAgJiYgIShwYW5lbC5oYXNBdHRyKHJhbmdlTmFtZSkgJiYgZmllbGRbcFldW3BYXS5oYXNBdHRyKHJhbmdlTmFtZSkpKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYocGllY2UuaGFzQXR0cihcInVuQ3Jvc3NSaXZlclwiKSAmJiB5TGVuLSgwfHlMZW4vMikgPD0gYm9hcmQuZ2V0Um93KHgsIHksIHBpZWNlLmRlZykpIHJldHVybiBmYWxzZTtcblx0XHRpZighaXNBdHRhY2spIHJldHVybiAhZmllbGRbeV1beF0ucGllY2U7XG5cdFx0aWYoIWZpZWxkW3ldW3hdLnBpZWNlKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYoY2hlY2tSaXZhbERlZykgcmV0dXJuIHBpZWNlLmRlZyAhPT0gZmllbGRbeV1beF0ucGllY2UuZGVnO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0LyoqIOWtkOOBqOOBquOCi+enu+WLleevhOWbsuOBq+mnkuOBjOWtmOWcqOOBmeOCi+OBi1xuXHQgKiBAcGFyYW0ge3N0cmluZ1tdfSByYW5nZSAtIOenu+WLleevhOWbsuaDheWgsVxuXHQgKiBAcGFyYW0ge3N0cmluZ1tdfSBjaGlsZCAtIOWtkOOBqOOBquOCi+aWh+Wtl+OBruS4gOimp1xuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQXR0YWNrIC0g6aeS44KS5Y+W5b6X5a++6LGh44Gr5ZCr44KA44GLP1xuXHQgKiBAcGFyYW0ge251bWJlcn0gb1ggLSDnp7vli5Xnr4Tlm7Lmg4XloLHjga7ljp/ngrnkvY3nva4o6KGMKVxuXHQgKiBAcGFyYW0ge251bWJlcn0gb1kgLSDnp7vli5Xnr4Tlm7Lmg4XloLHjga7ljp/ngrnkvY3nva4o5YiXKVxuXHQgKiBAcmV0dXJucyBib29sZWFuXG5cdCAqL1xuXHRmdW5jdGlvbiBleGlzdHNDaGlsZChyYW5nZSwgY2hpbGQsIGlzQXR0YWNrLCBvWCwgb1kpe1xuXHRcdGZvcihjb25zdCBjaGFyIG9mIGNoaWxkKXtcblx0XHRcdGZvcihsZXQgclk9MDtyWTxyYW5nZS5sZW5ndGg7clkrKyl7XG5cdFx0XHRcdGZvcihsZXQgclg9MDtyWDxyYW5nZVtyWV0ubGVuZ3RoO3JYKyspe1xuXHRcdFx0XHRcdGNvbnN0IFt4LCB5XSA9IFtyWCtwWC1vWCwgclkrcFktb1ldO1xuXHRcdFx0XHRcdGlmKFxuXHRcdFx0XHRcdFx0IWluRmllbGQoeCwgeSkgfHxcblx0XHRcdFx0XHRcdGNhbk1vdmUoaXNBdHRhY2ssIDB8eCwgMHx5LCBcIlwiLCBmYWxzZSkgfHxcblx0XHRcdFx0XHRcdHJhbmdlW3JZXVtyWF0gIT09IGNoYXJcblx0XHRcdFx0XHQpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdHJldHVybiB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqIOenu+WLleWFiOihqOekuuOCkuioreWumlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcmFuZ2VOYW1lIC0g56e75YuV56+E5Zuy44Gu5a6a576p5ZCNXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4IC0g5Yik5a6a44GZ44KL44Oe44K555uu44Gu5YiXXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IC0g5Yik5a6a44GZ44KL44Oe44K555uu44Gu6KGMXG5cdCAqL1xuXHRmdW5jdGlvbiBzZXRUYXJnZXQocmFuZ2VOYW1lLCB4LCB5KXtcblx0XHRjb25zdCBwYW5lbCA9IGZpZWxkW3ldW3hdO1xuXHRcdHBhbmVsLmFkZFRhcmdldChyYW5nZU5hbWUpO1xuXHRcdGVuUGFzc2FudC5zZXRUYXJnZXQocGFuZWwsIHBpZWNlKTtcblx0fVxuXG5cdC8qKiDngrnnp7vli5Vcblx0ICogQHBhcmFtIHtzdHJpbmdbXX0gcmFuZ2UgLSDnp7vli5Xnr4Tlm7Lmg4XloLFcblx0ICogQHBhcmFtIHtzdHJpbmd9IHJhbmdlTmFtZSAtIOenu+WLleevhOWbsuOBruWumue+qeWQjVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQXR0YWNrIC0g6aeS44KS5Y+W5b6X5a++6LGh44Gr5ZCr44KA44GLP1xuXHQgKiBAcGFyYW0ge251bWJlcn0gb1ggLSDnp7vli5Xnr4Tlm7Lmg4XloLHjga7ljp/ngrnkvY3nva4o6KGMKVxuXHQgKiBAcGFyYW0ge251bWJlcn0gb1kgLSDnp7vli5Xnr4Tlm7Lmg4XloLHjga7ljp/ngrnkvY3nva4o5YiXKVxuXHQgKi9cblx0ZnVuY3Rpb24gbW92ZVBvaW50KHJhbmdlLCBbcmFuZ2VOYW1lLCB7aXNBdHRhY2t9XSwge29YLCBvWSwgaXNPd259KXtcblx0XHRpZighaXNPd24pIHJldHVybjtcblx0XHRmb3IoY29uc3QgW3BhcmVudCwge2NoaWxkPVtdfT17fV0gb2YgcG9pbnRDaGFycyl7XG5cdFx0XHRmb3IobGV0IHJZPTA7clk8cmFuZ2UubGVuZ3RoO3JZKyspe1xuXHRcdFx0XHRmb3IobGV0IHJYPTA7clg8cmFuZ2VbclldLmxlbmd0aDtyWCsrKXtcblx0XHRcdFx0XHRjb25zdCBbeCwgeV0gPSBbclgrcFgtb1gsIHJZK3BZLW9ZXTtcblx0XHRcdFx0XHRpZighaW5GaWVsZCh4LCB5KVxuXHRcdFx0XHRcdFx0fHwgIWNhbk1vdmUoaXNBdHRhY2ssIHgsIHksIHJhbmdlTmFtZSlcblx0XHRcdFx0XHRcdHx8IHJhbmdlW3JZXVtyWF0gIT09IHBhcmVudFxuXHRcdFx0XHRcdFx0fHwgZXhpc3RzQ2hpbGQocmFuZ2UsIGNoaWxkLCBmYWxzZSwgb1gsIG9ZKSkgY29udGludWU7XG5cdFx0XHRcdFx0c2V0VGFyZ2V0KHJhbmdlTmFtZSwgeCwgeSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiog55u057ea56e75YuVXG5cdCAqIEBwYXJhbSB7c3RyaW5nW119IHJhbmdlIC0g56e75YuV56+E5Zuy5oOF5aCxXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSByYW5nZU5hbWUgLSDnp7vli5Xnr4Tlm7Ljga7lrprnvqnlkI1cblx0ICogQHBhcmFtIHtib29sZWFufSBpc0F0dGFjayAtIOmnkuOCkuWPluW+l+WvvuixoeOBq+WQq+OCgOOBiz9cblx0ICogQHBhcmFtIHtudW1iZXJ9IG9YIC0g56e75YuV56+E5Zuy5oOF5aCx44Gu5Y6f54K55L2N572uKOihjClcblx0ICogQHBhcmFtIHtudW1iZXJ9IG9ZIC0g56e75YuV56+E5Zuy5oOF5aCx44Gu5Y6f54K55L2N572uKOWIlylcblx0ICovXG5cdGZ1bmN0aW9uIG1vdmVMaW5lcihyYW5nZSwgW3JhbmdlTmFtZSwge2lzQXR0YWNrfV0sIHtvWCwgb1ksIGlzT3duLCBvZmZzZXRYLCBvZmZzZXRZfSl7XG5cdFx0aWYoIWlzT3duICYmICFjYW5Nb3ZlKGZhbHNlLCBwWCtvZmZzZXRYLCBwWStvZmZzZXRZKSkgcmV0dXJuO1xuXHRcdGZvcihjb25zdCBbY2hhciwge2ptcHM9MCwgbW92ZXM9MH09e31dIG9mIGxpbmVyQ2hhcnMpe1xuXHRcdFx0Y29uc3QgaXNNb3ZlSW5mID0gIW1vdmVzIHx8IDAgPT09IG1vdmVzO1xuXHRcdFx0Ly8g5Y6f54K544Gu5ZGo5ZuyOOODnuOCueOCkuaOoue0olxuXHRcdFx0Zm9yKGxldCByWT1vWS0xO3JZPD1vWSsxO3JZKyspe1xuXHRcdFx0XHRmb3IobGV0IHJYPW9YLTE7clg8PW9YKzE7clgrKyl7XG5cdFx0XHRcdFx0aWYocmFuZ2VbclldW3JYXSAhPT0gY2hhciB8fCByWCA9PT0gb1ggJiYgclkgPT09IG9ZKSBjb250aW51ZTtcblx0XHRcdFx0XHRsZXQgam1wQ250ID0gam1wcz8gam1wczogMDtcblx0XHRcdFx0XHRsZXQgbW92ZUNudCA9IG1vdmVzPyBtb3ZlczogMDtcblx0XHRcdFx0XHRjb25zdCBbaW5jWCwgaW5jWV0gPSBbclgtb1gsIHJZLW9ZXTtcblx0XHRcdFx0XHRmb3IobGV0IF94PXBYLF95PXBZOzspe1xuXHRcdFx0XHRcdFx0X3grPWluY1g7XG5cdFx0XHRcdFx0XHRfeSs9aW5jWTtcblx0XHRcdFx0XHRcdGNvbnN0IHg9X3grb2Zmc2V0WDtcblx0XHRcdFx0XHRcdGNvbnN0IHk9X3krb2Zmc2V0WTtcblx0XHRcdFx0XHRcdGlmKCFpbkZpZWxkKHgsIHkpIHx8ICFpc01vdmVJbmYgJiYgbW92ZUNudCA9PT0gMCkgYnJlYWs7XG5cdFx0XHRcdFx0XHRjb25zdCBpc0p1bXBlZCA9IDAgPT09IGptcENudDtcblx0XHRcdFx0XHRcdGlmKGlzSnVtcGVkICYmIGNhbk1vdmUoaXNBdHRhY2ssIHgsIHksIHJhbmdlTmFtZSwgaXNKdW1wZWQpKXtcblx0XHRcdFx0XHRcdFx0bW92ZUNudC0tO1xuXHRcdFx0XHRcdFx0XHRzZXRUYXJnZXQocmFuZ2VOYW1lLCB4LCB5KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2UgaWYoam1wczwxKXtcblx0XHRcdFx0XHRcdFx0bW92ZUNudC0tO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y29uc3QgcGFuZWwgPSBmaWVsZFt5XVt4XTtcblx0XHRcdFx0XHRcdGlmKHBhbmVsLnBpZWNlKXtcblx0XHRcdFx0XHRcdFx0am1wQ250LS07XG5cdFx0XHRcdFx0XHRcdGlmKGlzSnVtcGVkIHx8IGlzVnNQbyhwYW5lbCkpIGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIOODoeOCpOODs+WHpueQhlxuXHQoZnVuY3Rpb24oKXtcblx0XHRjb25zdCByYW5nZU1hcCA9IHBpZWNlLmdldFJhbmdlKCk7XG5cdFx0cmFuZ2VNYXAuYXR0YWNrID8/PSByYW5nZU1hcC5kZWZhdWx0O1xuXHRcdGZvcihjb25zdCByYW5nZU9wdGlvbiBvZiByYW5nZU9wdGlvbnMpe1xuXHRcdFx0Y29uc3QgcmFuZ2VOYW1lID0gcmFuZ2VPcHRpb25bMF07XG5cdFx0XHQvLyDliJ3lm57np7vli5Xnorroqo1cblx0XHRcdGlmKHBpZWNlLmlzTW92ZWQgJiYgW1wic3RhcnRcIiwgXCJjYXN0bGluZ1wiXS5pbmNsdWRlcyhyYW5nZU5hbWUpKSBjb250aW51ZTtcblxuXHRcdFx0Y29uc3QgcmFuZ2UgPSByYW5nZU1hcFtyYW5nZU5hbWVdO1xuXHRcdFx0aWYoIXJhbmdlKSBjb250aW51ZTtcblx0XHRcdGZvcihjb25zdCBvcmlnaW4gb2YgZ2V0T3JpZ2luKHJhbmdlKSl7XG5cdFx0XHRcdC8vIOeCueenu+WLlVxuXHRcdFx0XHRtb3ZlUG9pbnQocmFuZ2UsIHJhbmdlT3B0aW9uLCBvcmlnaW4pO1xuXHRcdFx0XHQvLyDnm7Tnt5rnp7vli5Vcblx0XHRcdFx0bW92ZUxpbmVyKHJhbmdlLCByYW5nZU9wdGlvbiwgb3JpZ2luKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pKCk7XG59IiwiaW1wb3J0IHtCb2FyZH0gZnJvbSBcIi4vYm9hcmQuanNcIjtcbmltcG9ydCB7UGFuZWx9IGZyb20gXCIuL3BhbmVsLmpzXCI7XG5pbXBvcnQge2NoZWNrVGFyZ2V0fSBmcm9tIFwiLi9jaGVja1RhcmdldC5qc1wiO1xuXG4vKiog44Oe44Km44K544Kz44Oz44OI44Ot44O844OrXG4gKiBAcGFyYW0ge0JvYXJkfSBib2FyZCAtIOebpFxuICovXG5leHBvcnQgZnVuY3Rpb24gdUlDb250cm9sKGJvYXJkKXtcblx0bGV0IGlzQ2xpY2sgPSBmYWxzZTtcblx0bGV0IGxhc3RYWSA9IFtdO1xuXHRsZXQgc2VsZWN0UGFuZWwgPSBudWxsO1xuXHRsZXQgc2VsZWN0U3RhbmQgPSBudWxsO1xuXHRjb25zdCB7Y2FudmFzfSA9IGJvYXJkO1xuXG5cdC8qKiDjg57jgrnnm67jgavlr77jgZnjgovlh6bnkIZcblx0ICogQHBhcmFtIHtFdmVudH0gZSAtIOOCpOODmeODs+ODiOW8leaVsFxuXHQgKiBAcGFyYW0geyhcblx0ICogICAgIHBhbmVsOiBQYW5lbCxcblx0ICogICAgIHg6IG51bWJlcixcblx0ICogICAgIHk6IG51bWJlcixcblx0ICogKT0+dm9pZH0gZm5QYW5lbCAtIOODnuOCueebruOBruOCs+ODvOODq+ODkOODg+OCr+mWouaVsFxuXHQgKiBAcGFyYW0geyhcblx0ICogICAgIHg6IG51bWJlcixcblx0ICogICAgIHk6IG51bWJlcixcblx0ICogKT0+dm9pZH0gZm5BZnRlciAtIOW+jOWHpueQhuOBruOCs+ODvOODq+ODkOODg+OCr+mWouaVsFxuICAgICAqL1xuXHRjb25zdCBmaWVsZFByb2MgPSAoZSwgZm5QYW5lbCwgZm5BZnRlcj0oKT0+e30pPT57XG5cdFx0Y29uc3Qgdmlld1N0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoY2FudmFzKTtcblx0XHRjb25zdCByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0bGV0IHggPSBjYW52YXMud2lkdGgvcGFyc2VGbG9hdCh2aWV3U3R5bGUud2lkdGgpO1xuXHRcdGxldCB5ID0gY2FudmFzLmhlaWdodC9wYXJzZUZsb2F0KHZpZXdTdHlsZS5oZWlnaHQpO1xuXHRcdGlmKGUuY2xpZW50WCl7XG5cdFx0XHR4ICo9IGUuY2xpZW50WC1yZWN0LmxlZnQ7XG5cdFx0XHR5ICo9IGUuY2xpZW50WS1yZWN0LnRvcDtcblx0XHR9XG5cdFx0ZWxzZSBpZigwIDwgZS50b3VjaGVzLmxlbmd0aCl7XG5cdFx0XHRpZigxIDwgZS50b3VjaGVzLmxlbmd0aCkgcmV0dXJuO1xuXHRcdFx0eCAqPSBlLnRvdWNoZXNbMF0uY2xpZW50WC1yZWN0LmxlZnQ7XG5cdFx0XHR5ICo9IGUudG91Y2hlc1swXS5jbGllbnRZLXJlY3QudG9wO1xuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0W3gsIHldID0gbGFzdFhZO1xuXHRcdH1cblx0XHRib2FyZC5maWVsZC5mb3JFYWNoKChyb3csIHBZKSA9PlxuXHRcdFx0cm93LmZvckVhY2goKHBhbmVsLCBwWCkgPT5cblx0XHRcdFx0Zm5QYW5lbChwYW5lbCwgeCwgeSwgcFgsIHBZKSkpO1xuXHRcdGZuQWZ0ZXIoeCwgeSk7XG5cdFx0Ym9hcmQuZHJhdygpO1xuXHRcdGxhc3RYWSA9IFt4LCB5XTtcblx0fTtcblxuXHQvKiog44OJ44Op44OD44Kw6ZaL5aeLXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGUgLSDjgqTjg5njg7Pjg4jlvJXmlbBcbiAgICAgKi9cblx0Y29uc3QgZHJhZ1N0YXJ0ID0gZT0+e1xuXHRcdGlzQ2xpY2sgPSB0cnVlO1xuXHRcdGZpZWxkUHJvYyhlLFxuXHRcdFx0KHBhbmVsLCB4LCB5KT0+e1xuXHRcdFx0XHRjb25zdCB7cGllY2UsIHBYLCBwWX0gPSBwYW5lbDtcblxuXHRcdFx0XHRpZihwaWVjZSAmJiBwYW5lbC5jaGVja1JhbmdlTW91c2UoeCwgeSkpe1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRwaWVjZS5pc1NlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRzZWxlY3RQYW5lbCA9IHBhbmVsO1xuXHRcdFx0XHRcdGNoZWNrVGFyZ2V0KGJvYXJkLCBwaWVjZSwgcFgsIHBZKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCh4LCB5KT0+e1xuXHRcdFx0XHRmb3IoY29uc3QgW2RlZywgc3RvY2tdIG9mIGJvYXJkLnN0YW5kLnN0b2Nrcyl7XG5cdFx0XHRcdFx0Zm9yKGxldCBpPXN0b2NrLmxlbmd0aC0xOzA8PWk7aS0tKXtcblx0XHRcdFx0XHRcdGlmKCFzdG9ja1tpXS5jaGVja1JhbmdlTW91c2UoeCwgeSkpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0c3RvY2tbaV0uaXNTZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRzZWxlY3RTdGFuZCA9IHtkZWc6ZGVnLCBpOml9O1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cdH07XG5cblx0LyoqIOODieODqeODg+OCsOS4rVxuXHQgKiBAcGFyYW0ge2FueX0gZSAtIOOCpOODmeODs+ODiOW8leaVsFxuXHQgKi9cblx0Y29uc3QgZHJhZ01vdmUgPSBlPT57XG5cdFx0aWYoIWlzQ2xpY2sgfHwgIShzZWxlY3RQYW5lbCB8fCBzZWxlY3RTdGFuZCkpIHJldHVybjtcblx0XHRmaWVsZFByb2MoZSxcblx0XHRcdChwYW5lbCwgeCwgeSk9Pntcblx0XHRcdFx0cGFuZWwuaXNTZWxlY3RlZCA9IHBhbmVsLmNoZWNrUmFuZ2VNb3VzZSh4LCB5KTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0LyoqIOODieODqeODg+OCsOe1guS6hlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBlIC0g44Kk44OZ44Oz44OI5byV5pWwXG5cdCAqL1xuXHRjb25zdCBkcmFnRW5kID0gZT0+e1xuXHRcdGlzQ2xpY2sgPSBmYWxzZTtcblx0XHRmaWVsZFByb2MoZSxcblx0XHRcdChwYW5lbCwgeCwgeSk9Pntcblx0XHRcdFx0aWYoIXBhbmVsLmNoZWNrUmFuZ2VNb3VzZSh4LCB5KSkgcmV0dXJuO1xuXHRcdFx0XHRpZihzZWxlY3RQYW5lbCl7XG5cdFx0XHRcdFx0Ym9hcmQubW92ZVBpZWNlKHNlbGVjdFBhbmVsLCBwYW5lbCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoc2VsZWN0U3RhbmQgJiYgIXBhbmVsLnBpZWNlKXtcblx0XHRcdFx0XHRib2FyZC5zdGFuZC5yZWxlYXNlUGllY2UocGFuZWwsIHNlbGVjdFN0YW5kKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cdFx0ZmllbGRQcm9jKGUsXG5cdFx0XHRwYW5lbD0+e1xuXHRcdFx0XHRpZihwYW5lbC5waWVjZSkgcGFuZWwucGllY2UuaXNTZWxlY3RlZCA9IGZhbHNlO1xuXHRcdFx0XHRwYW5lbC5pc1NlbGVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdHBhbmVsLmNsZWFyVGFyZ2V0KCk7XG5cdFx0XHR9LFxuXHRcdFx0KCk9Pntcblx0XHRcdFx0Zm9yKGNvbnN0IFtkZWcsIHN0b2NrXSBvZiBib2FyZC5zdGFuZC5zdG9ja3Mpe1xuXHRcdFx0XHRcdGZvcihsZXQgaT1zdG9jay5sZW5ndGgtMTswPD1pO2ktLSl7XG5cdFx0XHRcdFx0XHRzdG9ja1tpXS5pc1NlbGVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGVjdFBhbmVsID0gbnVsbDtcblx0XHRcdFx0c2VsZWN0U3RhbmQgPSBudWxsO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH07XG5cblx0Ly8g44Kk44OZ44Oz44OI44Oq44K544OK44O844KS5L2c5oiQXG5cdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGRyYWdTdGFydCk7XG5cdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGRyYWdNb3ZlKTtcblx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGRyYWdFbmQpO1xuXHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZHJhZ1N0YXJ0KTtcblx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgZHJhZ01vdmUpO1xuXHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGRyYWdFbmQpO1xuXG5cdC8qKiDjgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zjgpLnoLTmo4QgKi9cblx0cmV0dXJuIHtcblx0XHRyZW1vdmVFdmVudCgpe1xuXHRcdFx0Y2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZHJhZ1N0YXJ0KTtcblx0XHRcdGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGRyYWdNb3ZlKTtcblx0XHRcdGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBkcmFnRW5kKTtcblx0XHRcdGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBkcmFnU3RhcnQpO1xuXHRcdFx0Y2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgZHJhZ01vdmUpO1xuXHRcdFx0Y2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBkcmFnRW5kKTtcblx0XHR9XG5cdH07XG59XG4iLCJpbXBvcnQge1BpZWNlfSBmcm9tIFwiLi9waWVjZS5qc1wiO1xuXG4vKiogQk9E5b2i5byP44Gu44Gf44KB44Gu6Zai5pWw5a6a576p44Gq44GpICovXG5leHBvcnQgY2xhc3MgQm9ke1xuXHQvKiog6KeS5bqm44GL44KJ6aeS44Gu5paH5a2X6KGo56S6XG5cdCAqIEB0eXBlIHtNYXA8bnVtYmVyLCBzdHJpbmc+fVxuXHQgKi9cblx0c3RhdGljICNkZWcyUGllY2VDaGFycyA9IG5ldyBNYXAoW1xuXHRcdFswLCBcIiBcIl0sXG5cdFx0WzkwLCBcIj5cIl0sXG5cdFx0WzE4MCwgXCJ2XCJdLFxuXHRcdFsyNzAsIFwiPFwiXVxuXHRdKTtcblxuXHQvKiog6KeS5bqm44GL44KJ6aeS44Gu5q2j6KaP6KGo54++6KGo56S6XG5cdCAqIEB0eXBlIHtNYXA8bnVtYmVyLCBzdHJpbmc+fVxuXHQgKi9cblx0c3RhdGljICNkZWcyUGllY2VSZWdleGVzID0gbmV3IE1hcChcblx0XHRbLi4uQm9kLiNkZWcyUGllY2VDaGFyc11cblx0XHQubWFwKChbYSwgYl0pPT5bYSwgbmV3IFJlZ0V4cChiLCBcImdcIildKVxuXHQpO1xuXG5cdC8qKiDpp5Ljga7mloflrZfjgYvjgonop5LluqbooajnpLpcblx0ICogQHR5cGUge01hcDxzdHJpbmcsIG51bWJlcj59XG5cdCAqL1xuXHRzdGF0aWMgI3BpZWNlQ2hhcjJEZWdzID0gbmV3IE1hcChcblx0XHRbLi4uQm9kLiNkZWcyUGllY2VDaGFyc11cblx0XHQubWFwKChbYSwgYl0pPT5bYiwgYV0pXG5cdCk7XG5cblx0LyoqIOinkuW6puOBi+OCieaMgemnkuOBruihqOmhjOihqOekulxuXHQgKiBAdHlwZSB7TWFwPG51bWJlciwgc3RyaW5nPn1cblx0ICovXG5cdHN0YXRpYyAjZGVnMlN0YW5kVGl0bGVzID0gbmV3IE1hcChbXG5cdFx0WzAsIFwi5YWI5omL44Gu5oyB6aeSXCJdLFxuXHRcdFs5MCwgXCLmrKHmiYvjga7mjIHpp5JcIl0sXG5cdFx0WzE4MCwgXCLlvozmiYvjga7mjIHpp5JcIl0sXG5cdFx0WzI3MCwgXCLlm5vmiYvjga7mjIHpp5JcIl1cblx0XSk7XG5cblx0LyoqIOaMgemnkuOBruihqOmhjOOBi+OCieinkuW6puihqOekulxuXHQgKiBAdHlwZSB7TWFwPHN0cmluZywgbnVtYmVyPn1cblx0ICovXG5cdHN0YXRpYyAjc3RhbmRUaXRsZTJEZWdzID0gbmV3IE1hcChcblx0XHRbLi4uQm9kLiNkZWcyU3RhbmRUaXRsZXNdXG5cdFx0Lm1hcCgoW2EsIGJdKT0+W2IsIGFdKVxuXHQpO1xuXG5cdHN0YXRpYyAja2FuSSA9IFtcIlwiLFwi5LiAXCIsXCLkuoxcIixcIuS4iVwiLFwi5ZubXCIsXCLkupRcIixcIuWFrVwiLFwi5LiDXCIsXCLlhatcIixcIuS5nVwiXTtcblx0c3RhdGljICNrYW5YID0gW1wiXCIsXCLljYFcIixcIuS6jOWNgVwiLFwi5LiJ5Y2BXCIsXCLlm5vljYFcIixcIuS6lOWNgVwiLFwi5YWt5Y2BXCIsXCLkuIPljYFcIixcIuWFq+WNgVwiLFwi5Lmd5Y2BXCJdO1xuXG5cdC8qKiDooYwv5oyB6aeS55So44Gu5pWw5a2X6KGo56S6KOa8ouaVsOWtlylcblx0ICogQHBhcmFtIHtudW1iZXJ9IG51bSAtIOaVsOWtl1xuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHZpZXdPbmUgLSDkuIDjgpLooajnpLpcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdHN0YXRpYyAjbnVtMkthbihudW0sIHZpZXdPbmU9dHJ1ZSl7XG5cdFx0aWYoIXZpZXdPbmUgJiYgbnVtPD0xKSByZXR1cm4gXCJcIjtcblx0XHRjb25zdCBpID0gbnVtJTEwO1xuXHRcdGNvbnN0IHggPSAwfG51bS8xMDtcblx0XHRyZXR1cm4gQm9kLiNrYW5YW3hdK0JvZC4ja2FuSVtpXTtcblx0fVxuXG5cdC8qKiDooYwv5oyB6aeS55So44Gu5pWw5a2X6KGo56S6KOa8ouaVsOWtlylcblx0ICogQHBhcmFtIHtudW1iZXJ9IG51bSAtIOaVsOWtl1xuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGVtcHR5T25lIC0g56m65paH5a2X44KSMeOBqOOBmeOCi1xuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0c3RhdGljICNrYW4yTnVtKGthbiwgZW1wdHlPbmU9dHJ1ZSl7XG5cdFx0aWYoZW1wdHlPbmUgJiYga2FuID09PSBcIlwiKSByZXR1cm4gMTtcblx0XHRpZighaXNOYU4oa2FuKSkgcmV0dXJuIDB8a2FuO1xuXHRcdGxldCB4ID0gQm9kLiNrYW5YLmZpbmRJbmRleChrZXk9PlxuXHRcdFx0a2V5ICE9PSBcIlwiICYmIChuZXcgUmVnRXhwKFwiXlwiK2tleSkpLnRlc3Qoa2FuKVxuXHRcdCk7XG5cdFx0aWYoeCA8IDApIHggPSAwO1xuXHRcdGxldCBpID0gQm9kLiNrYW5JLmZpbmRJbmRleChrZXk9PlxuXHRcdFx0a2V5ICE9PSBcIlwiICYmIChuZXcgUmVnRXhwKGtleStcIiRcIikpLnRlc3Qoa2FuKVxuXHRcdCk7XG5cdFx0aWYoaSA8IDApIGkgPSAwO1xuXHRcdHJldHVybiB4KjEwK2k7XG5cdH1cblxuXHQvKiog5YiX55So44Gu5pWw5a2X6KGo56S6KOWFqOinki8y5qGBKVxuXHQgKiBAcGFyYW0ge251bWJlcn0gbnVtIC0g5pWw5a2XXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRzdGF0aWMgI251bTJaZW4obnVtKXtcblx0XHRpZigxMDw9bnVtKSByZXR1cm4gbnVtO1xuXHRcdGNvbnN0IHplbiA9IFwi77yQ77yR77yS77yT77yU77yV77yW77yX77yY77yZXCI7XG5cdFx0Y29uc3QgaSA9IG51bSUxMDtcblx0XHRyZXR1cm4gemVuW2ldO1xuXHR9XG5cblx0LyoqIOODnuOCueebruOBruihqOekulxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0c3RhdGljICNwYW5lbFRleHQgPSBcIiDjg7tcIjtcblxuXHQvKiog6aeS44GuQk9E6KGo6KiYXG5cdCAqIEBwYXJhbSB7UGllY2V9IHBpZWNlIC0g6aeSXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRzdGF0aWMgI2dldFBpZWNlVGV4dChwaWVjZSl7XG5cdFx0aWYoIXBpZWNlKSByZXR1cm4gQm9kLiNwYW5lbFRleHQ7XG5cdFx0cmV0dXJuIEJvZC4jZGVnMlBpZWNlQ2hhcnMuZ2V0KHBpZWNlLmRlZykrcGllY2UuY2hhcjtcblx0fVxuXG5cdC8qKiDpp5Llj7Djga5CT0TooajoqJhcblx0ICogQHBhcmFtIHtTdGFuZH0gc3RhbmQgLSDpp5Llj7Bcblx0ICogQHBhcmFtIHtudW1iZXJ9IGRlZyAtIOinkuW6plxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0c3RhdGljICNnZXRTdGFuZFRleHQoc3RhbmQsIGRlZz0wKXtcblx0XHQvLyDpp5LmlbDjgqvjgqbjg7Pjg4hcblx0XHRjb25zdCBjb3VudGVyID0gbmV3IE1hcCgpO1xuXHRcdHN0YW5kLnN0b2Nrcy5nZXQoZGVnKS5mb3JFYWNoKCh7Y2hhcn0pPT57XG5cdFx0XHRpZighY291bnRlci5oYXMoY2hhcikpIGNvdW50ZXIuc2V0KGNoYXIsIDApO1xuXHRcdFx0Y291bnRlci5zZXQoY2hhciwgY291bnRlci5nZXQoY2hhcikrMSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIEJvZC4jZGVnMlN0YW5kVGl0bGVzLmdldChkZWcpK1wi77yaXCIrXG5cdFx0XHRbLi4uY291bnRlcl0ubWFwKChbY2hhciwgY250XSk9PlxuXHRcdFx0XHRjaGFyK0JvZC4jbnVtMkthbihjbnQsIGZhbHNlKVxuXHRcdFx0KS5qb2luKFwiIFwiKTtcblx0fVxuXG5cdC8qKiBCT0TlvaLlvI/jga7jg4bjgq3jgrnjg4jjgpLjg5zjg7zjg4njgafmibHjgYjjgovjgojjgYblpInmj5tcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBCT0TlvaLlvI/jga7jg4bjgq3jgrnjg4hcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdHN0YXRpYyBjb252U2V0VGV4dCh0ZXh0KXtcblx0XHRjb25zdCBib2FyZExpbmVzID0gW107XG5cdFx0Y29uc3Qgc3RhbmRMaW5lcyA9IFtdO1xuXHRcdHRleHQuc3BsaXQoL1xccnxcXG58XFxyXFxuLykuZm9yRWFjaChsaW5lPT57XG5cdFx0XHRpZihbLi4uQm9kLiNzdGFuZFRpdGxlMkRlZ3Mua2V5cygpXS5zb21lKHRpdGxlPT5cblx0XHRcdFx0bmV3IFJlZ0V4cChgXiR7dGl0bGV9YCkudGVzdChsaW5lKSlcblx0XHRcdCkgc3RhbmRMaW5lcy5wdXNoKGxpbmUpO1xuXHRcdFx0ZWxzZSBib2FyZExpbmVzLnB1c2gobGluZS5zbGljZSgxKSlcblx0XHR9KTtcblxuXHRcdGxldCBib2FyZFN0ciA9IGJvYXJkTGluZXMuc2xpY2UoMiwgLTEpLmpvaW4oXCJcXG5cIik7XG5cdFx0Qm9kLiNkZWcyUGllY2VSZWdleGVzLmZvckVhY2goKGJvZENoYXIsIGRlZyk9Pntcblx0XHRcdGJvYXJkU3RyID0gYm9hcmRTdHIucmVwbGFjZShib2RDaGFyLCBQaWVjZS5kZWdDaGFyc1tkZWddKTtcblx0XHR9KVxuXG5cdFx0Y29uc3Qgc3RhbmRTdHIgPSBzdGFuZExpbmVzLmZsYXRNYXAobGluZT0+e1xuXHRcdFx0Y29uc3QgW3RpdGxlLCBwYXJhbVN0cl0gPSBsaW5lLnNwbGl0KC/vvJovKTtcblx0XHRcdGlmKHBhcmFtU3RyID09PSBcIlwiKSByZXR1cm4gXCJcIjtcblx0XHRcdGNvbnN0IGRlZyA9IEJvZC4jc3RhbmRUaXRsZTJEZWdzLmdldCh0aXRsZSk7XG5cdFx0XHRjb25zdCBkZWdDaGFyID0gUGllY2UuZGVnQ2hhcnNbZGVnXTtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHBhcmFtU3RyXG5cdFx0XHRcdC5zcGxpdCgvXFxzLylcblx0XHRcdFx0Lm1hcChwYXJhbT0+e1xuXHRcdFx0XHRcdGNvbnN0IHBpZWNlQ2hhciA9IHBhcmFtWzBdO1xuXHRcdFx0XHRcdGNvbnN0IGthbiA9IHBhcmFtLnNsaWNlKDEpO1xuXHRcdFx0XHRcdHJldHVybiAoZGVnQ2hhcitwaWVjZUNoYXIpLnJlcGVhdChCb2QuI2thbjJOdW0oa2FuKSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHBhcmFtcztcblx0XHR9KS5qb2luKFwiXCIpO1xuXG5cdFx0cmV0dXJuIGAke2JvYXJkU3RyfVxcbiR7c3RhbmRTdHJ9YDtcblx0fVxuXG5cdC8qKiBCT0TlvaLlvI/jg4bjgq3jgrnjg4jjgpLlj5blvpdcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdHN0YXRpYyBnZXRUZXh0KGJvYXJkKXtcblx0XHRjb25zdCB7ZmllbGQsIHhMZW4sIHBsYXllcnMsIHN0YW5kfSA9IGJvYXJkO1xuXG5cdFx0bGV0IGhlYWRlciA9XG5cdFx0XHRgICR7Wy4uLkFycmF5KHhMZW4pLmtleXMoKV0ubWFwKGk9PmAgJHtCb2QuI251bTJaZW4oeExlbi1pKX1gKS5qb2luKFwiXCIpfVxcbmArXG5cdFx0XHRgKyR7QXJyYXkoeExlbikuZmlsbChcIi0tLVwiKS5qb2luKFwiXCIpfStcXG5gO1xuXHRcdGxldCBmb290ZXIgPSBgXFxuKyR7QXJyYXkoeExlbikuZmlsbChcIi0tLVwiKS5qb2luKFwiXCIpfStgO1xuXHRcdGxldCBwYW5lbE91dGVyID0gXCJ8XCI7XG5cdFx0bGV0IHBhbmVsU2VwID0gXCJcIjtcblx0XHRsZXQgcm93U2VwID0gXCJcXG5cIjtcblx0XHRsZXQgc3RhbmRIZWFkZXIgPSBgJHtCb2QuI2dldFN0YW5kVGV4dChzdGFuZCwgMTgwKX1cXG5gO1xuXHRcdGxldCBzdGFuZEZvb3RlciA9IGAke0JvZC4jZ2V0U3RhbmRUZXh0KHN0YW5kLCAwKX1gO1xuXHRcdGlmKHBsYXllcnMgIT09IDIpe1xuXHRcdFx0c3RhbmRIZWFkZXIgPSBgJHtCb2QuI2dldFN0YW5kVGV4dChzdGFuZCwgMjcwKX1cXG5gK3N0YW5kSGVhZGVyO1xuXHRcdFx0c3RhbmRGb290ZXIgPSBgJHtCb2QuI2dldFN0YW5kVGV4dChzdGFuZCwgOTApfVxcbmArc3RhbmRGb290ZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdHN0YW5kSGVhZGVyK1xuXHRcdFx0aGVhZGVyK1xuXHRcdFx0ZmllbGQubWFwKChyb3csIGkpPT5cblx0XHRcdFx0cGFuZWxPdXRlcitcblx0XHRcdFx0cm93Lm1hcChwYW5lbD0+XG5cdFx0XHRcdFx0Qm9kLiNnZXRQaWVjZVRleHQocGFuZWwucGllY2UpXG5cdFx0XHRcdCkuam9pbihwYW5lbFNlcCkrXG5cdFx0XHRcdHBhbmVsT3V0ZXIrXG5cdFx0XHRcdEJvZC4jbnVtMkthbihpKzEpXG5cdFx0XHQpLmpvaW4ocm93U2VwKStcblx0XHRcdGZvb3RlcitcIlxcblwiK1xuXHRcdFx0c3RhbmRGb290ZXJcblx0XHQpO1xuXHR9XG59XG4iLCJpbXBvcnQge1BpZWNlfSBmcm9tIFwiLi9waWVjZS5qc1wiO1xuaW1wb3J0IHtCb2R9IGZyb20gXCIuL2JvZC5qc1wiO1xuXG4vKiog55uk44Gu566h55CG44Kv44Op44K5ICovXG5leHBvcnQgY2xhc3MgU3RhbmR7XG5cdC8qKiDpp5Llj7Djgbjjga7op5LluqbjgZTjgajjga7ooajnpLrpoIZcblx0ICogQHR5cGUge251bWJlcltdfVxuXHQgKi9cblx0c3RhdGljICNkZWdPcmRlciA9IFsxODAsIDkwLCAyNzAsIDBdO1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0JvYXJkfSDjg5zjg7zjg4lcblx0ICovXG5cdGNvbnN0cnVjdG9yKGJvYXJkKXtcblx0XHR0aGlzLmJvYXJkID0gYm9hcmQ7XG5cdFx0Y29uc3Qge3RvcCwgcmlnaHQsIGJvdHRvbSwgd2lkdGgsIGhlaWdodCwgcGFuZWxXaWR0aCwgcGFuZWxIZWlnaHQsIHhMZW4sIHlMZW59ID0gYm9hcmQ7XG5cblx0XHR0aGlzLmNsZWFyKCk7XG5cdFx0dGhpcy5sZWZ0ID0gcmlnaHQqMS4wMjtcblx0XHR0aGlzLnRvcCA9IHRvcDtcblx0XHR0aGlzLndpZHRoID0gd2lkdGgvMjtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHR0aGlzLnJpZ2h0ID0gdGhpcy5sZWZ0K3RoaXMud2lkdGg7XG5cdFx0dGhpcy5ib3R0b20gPSBib3R0b207XG5cdFx0dGhpcy5waXRjaFdpZHRoID0gcGFuZWxXaWR0aC8yO1xuXHRcdHRoaXMucGl0Y2hIZWlnaHQgPSBwYW5lbEhlaWdodDtcblx0XHR0aGlzLnhMZW4gPSB4TGVuO1xuXHRcdHRoaXMueUxlbiA9IHlMZW47XG5cdH1cblxuXHQvKiog6aeS5Y+w44KS5Yid5pyf5YyW44Gr44GZ44KLICovXG5cdGNsZWFyKCl7XG5cdFx0dGhpcy5zdG9ja3MgPSBuZXcgTWFwKFN0YW5kLiNkZWdPcmRlci5tYXAoaT0+W2ksW11dKSk7XG5cdH1cblxuXHQvKiog5oyB44Gh6aeS44GL44KJ44Oc44O844OJ5LiK44Gr6YWN572u44GZ44KLXG5cdCAqIEBwYXJhbSB7UGFuYWx9IHRvUGFuZWxsIC0g6YWN572u5YWI44Gu44OR44ON44OrXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb24gLSDjgqrjg5fjgrfjg6fjg7Ncblx0ICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbi5kZWcgLSDop5LluqZcblx0ICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbi5pIC0g6YWN572u44GZ44KL5oyB44Gh6aeS44Gu44Kk44Oz44OH44OD44Kv44K5XG5cdCAqL1xuXHRyZWxlYXNlUGllY2UodG9QYW5lbCwgb3B0aW9uPXt9KXtcblx0XHRpZih0b1BhbmVsLmhhc0F0dHIoXCJrZWVwT3V0XCIpKSByZXR1cm47XG5cdFx0Y29uc3Qge2RlZywgaX0gPSBvcHRpb25cblx0XHRjb25zdCB7Ym9hcmR9ID0gdGhpcztcblx0XHRjb25zdCBzdG9jayA9IHRoaXMuc3RvY2tzLmdldChkZWcpO1xuXHRcdHRvUGFuZWwucGllY2UgPSBzdG9ja1tpXTtcblx0XHRzdG9ja1tpXS5jZW50ZXIgPSB0b1BhbmVsLmNlbnRlcjtcblx0XHRzdG9ja1tpXS5taWRkbGUgPSB0b1BhbmVsLm1pZGRsZTtcblx0XHRib2FyZC5hZGRSZWNvcmQoe3RvUGFuZWwsIGVuZDogXCLmiZNcIn0pO1xuXHRcdHN0b2NrLnNwbGljZShpLDEpO1xuXHR9XG5cblx0LyoqIOmnkuWPsOOBq+i/veWKoOOBmeOCi1xuXHQgKiBAcGFyYW0ge1BpZWNlfSBwaWVjZSAtIOi/veWKoOOBmeOCi+mnklxuXHQgKi9cblx0YWRkKHBpZWNlKXtcblx0XHRjb25zdCBzdG9jayA9IHRoaXMuc3RvY2tzLmdldChwaWVjZS5kZWcpO1xuXHRcdHBpZWNlLnR1cm5Gcm9udCgpO1xuXHRcdHN0b2NrLnB1c2gocGllY2UpO1xuXHRcdHN0b2NrLnNvcnQoKGEsYik9Pk1hdGguc2lnbihhLmlkLWIuaWQpKTtcblx0fVxuXG5cdC8qKiDpp5LjgpLmjIHjgaHpp5LjgavjgZnjgotcblx0ICogQHBhcmFtIHtQaWVjZXxudWxsfSB3aW5uZXJQaWVjZSAtIOenu+WLleOBmeOCi+mnklxuXHQgKiBAcGFyYW0ge1BpZWNlfSBsb3NlclBpZWNlIC0g5o2V57ib44GV44KM44KL6aeSXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gZm9yY2VDYXB0dXJlIC0g5bGe5oCn44KS54Sh6KaW44GX44Gm5o2V57ib44GZ44KLXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gZm9yY2VDYW50Q2FwdHVyZSAtIOWxnuaAp+OCkueEoeimluOBl+OBpuaNlee4m+OBl+OBquOBhFxuXHQgKi9cblx0Y2FwdHVyZVBpZWNlKHdpbm5lclBpZWNlLCBsb3NlclBpZWNlLCBmb3JjZUNhcHR1cmU9ZmFsc2UsIGZvcmNlQ2FudENhcHR1cmU9ZmFsc2Upe1xuXHRcdGlmKGZvcmNlQ2FudENhcHR1cmVcblx0XHRcdHx8ICFsb3NlclBpZWNlXG5cdFx0XHR8fCAhKGZvcmNlQ2FwdHVyZSB8fCB3aW5uZXJQaWVjZS5oYXNBdHRyKFwiY2FwdHVyZVwiKSlcblx0XHRcdHx8IGxvc2VyUGllY2UuaGFzQXR0cihcImtpbmdcIilcblx0XHRcdHx8IGxvc2VyUGllY2UuaGFzQXR0cihcImNhbnRDYXB0dXJlXCIpXG5cdFx0KSByZXR1cm47XG5cblx0XHRsb3NlclBpZWNlLmRlZyA9IHdpbm5lclBpZWNlLmRlZztcblx0XHRsb3NlclBpZWNlLmlzTW92ZWQgPSB0cnVlO1xuXHRcdHRoaXMuYWRkKGxvc2VyUGllY2UpO1xuXHR9XG5cblx0LyoqIOebpOOCkuaPj+WGmSAqL1xuXHRkcmF3KCl7XG5cdFx0Y29uc3Qge2JvYXJkLCBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQsIHBpdGNoV2lkdGgsIHBpdGNoSGVpZ2h0fSA9IHRoaXM7XG5cdFx0Y29uc3Qge2N0eCwgeExlbiwgeUxlbn0gPSBib2FyZDtcblxuXHRcdC8vIOWkluaeoOOCkuaPj+WGmVxuXHRcdGN0eC5maWxsU3R5bGUgPSBib2FyZC5iYWNrZ3JvdW5kQ29sb3I7XG5cdFx0Y3R4LnN0cm9rZVN0eWxlID0gYm9hcmQuYm9yZGVyQ29sb3I7XG5cdFx0Y3R4LmxpbmVXaWR0aCA9IGJvYXJkLmJvcmRlcldpZHRoO1xuXG5cdFx0Y3R4LnNhdmUoKTtcblx0XHRjdHgudHJhbnNsYXRlKGxlZnQsIHRvcCk7XG5cdFx0Y3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuXHRcdGN0eC5zdHJva2VSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuXHRcdGN0eC5yZXN0b3JlKCk7XG5cblx0XHQvLyDjgZnjgbnjgabjga7pp5LjgpLooajnpLrnr4Tlm7LlpJbjgbjnp7vli5Vcblx0XHQvKnRoaXMuc3RvY2tzLmZsYXQoKS5mb3JFYWNoKHBpZWNlPT57XG5cdFx0XHRwaWVjZS5jZW50ZXIgPSAtMTAwMDtcblx0XHRcdHBpZWNlLm1pZGRsZSA9IC0xMDAwO1xuXHRcdH0pOyovXG5cdFx0Wy4uLnRoaXMuc3RvY2tzLnZhbHVlcygpXS5mb3JFYWNoKChzdG9jaywgcGxheWVyKT0+e1xuXHRcdFx0bGV0IGkgPSAwO1xuXHRcdFx0Ly8g5rqi44KM44Gf5aC05ZCI44Gv5b6M5pa55YSq5YWI44Gn6KGo56S6XG5cdFx0XHRzdG9jayA9IHN0b2NrLnNsaWNlKC15TGVuLzQqeExlbik7XG5cdFx0XHRmb3IobGV0IHBZPTB8eUxlbi80KnBsYXllcjtwWTx5TGVuLzQqKHBsYXllcisxKTtwWSsrKXtcblx0XHRcdFx0Zm9yKGxldCBwWD0wO3BYPHhMZW47cFgrKyl7XG5cdFx0XHRcdFx0Y29uc3QgY2VudGVyID0gbGVmdCtwaXRjaFdpZHRoKihwWCsxKTtcblx0XHRcdFx0XHRjb25zdCBtaWRkbGUgPSB0b3ArcGl0Y2hIZWlnaHQqKHBZKzEpO1xuXHRcdFx0XHRcdGNvbnN0IHBpZWNlID0gc3RvY2tbaSsrXTtcblx0XHRcdFx0XHRpZihwaWVjZSA9PSBudWxsKSBicmVhaztcblx0XHRcdFx0XHRwaWVjZS5jZW50ZXIgPSBjZW50ZXI7XG5cdFx0XHRcdFx0cGllY2UubWlkZGxlID0gbWlkZGxlO1xuXHRcdFx0XHRcdHBpZWNlLmRyYXcoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0LyoqIOmnkuWPsOOCkuODhuOCreOCueODiOW9ouW8j+OBp+WPluW+l1xuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQ29tcGFjdCAtIOOCs+ODs+ODkeOCr+ODiOihqOekulxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQWxpYXMgLSDjgqjjgqTjg6rjgqLjgrnooajnpLpcblx0ICovXG5cdHRvU3RyaW5nKGlzQ29tcGFjdD1mYWxzZSwgaXNBbGlhcz1mYWxzZSl7XG5cdFx0Y29uc3Qge3hMZW59ID0gdGhpcy5ib2FyZDtcblx0XHRjb25zdCBzdG9jayA9IFsuLi50aGlzLnN0b2Nrcy52YWx1ZXMoKV0uZmxhdCgpLmZpbHRlcih2PT52KTtcblxuXHRcdGxldCBoZWFkID0gMCA8IHN0b2NrLmxlbmd0aD8gXCJcXG5cIitcIuKAlVwiLnJlcGVhdCh4TGVuKjIpK1wiXFxuXCI6IFwiXCI7XG5cdFx0bGV0IHRleHQgPSBzdG9jay5tYXAocD0+cC50b1N0cmluZyhpc0FsaWFzKSkuam9pbihcIlwiKTtcblx0XHRpZighaXNDb21wYWN0KXtcblx0XHRcdGhlYWQgPSBcIlwiO1xuXHRcdFx0Zm9yKGNvbnN0IGNoYXIgb2YgT2JqZWN0LnZhbHVlcyhQaWVjZS5kZWdDaGFycykpe1xuXHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKGNoYXIsIFwiXFxuXCIrYCR7Y2hhcn3mjIHpp5LvvJoke2NoYXJ9YCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBoZWFkK3RleHQ7XG5cdH1cbn1cbiIsImltcG9ydCB7UGFuZWx9IGZyb20gXCIuL3BhbmVsLmpzXCI7XG5pbXBvcnQge1BpZWNlfSBmcm9tIFwiLi9waWVjZS5qc1wiO1xuXG5jb25zdCBkZWdzID0gT2JqZWN0LmtleXMoUGllY2UuZGVnQ2hhcnMpO1xuY29uc3QgZ2V0SW5pdCA9ICgpPT4oe1xuXHRwYW5lbDogbnVsbCxcblx0cGllY2U6IG51bGxcbn0pO1xuXG4vKiog44Ki44Oz44OR44OD44K144Oz5oOF5aCx44Gu566h55CGICovXG5leHBvcnQgY2xhc3MgRW5QYXNzYW50e1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHRoaXMuZGVncyA9IHt9O1xuXHRcdGRlZ3MuZm9yRWFjaChkZWc9PnRoaXMuZGVnc1tkZWddID0gZ2V0SW5pdCgpKTtcblx0fVxuXG5cdC8qKiDjgqLjg7Pjg5Hjg4PjgrXjg7Pmg4XloLHjgpLjgq/jg6rjgqJcblx0ICogQHBhcmFtIHtudW1iZXJ9IGRlZyAtIOOCouODs+ODkeODg+OCteODs+OBleOCjOOBhuOCi+mZo+WWtuOBruinkuW6plxuXHQgKi9cblx0Y2xlYXIoZGVnKXtcblx0XHR0aGlzLmRlZ3NbZGVnXSA9IGdldEluaXQoKTtcblx0fVxuXG5cdC8qKiDjgqLjg7Pjg5Hjg4PjgrXjg7Plr77osaHjgajmiJDjgorjgYbjgovjg57jgrnmg4XloLHjgpLoqJjpjLJcblx0ICogQHBhcmFtIHtQYW5lbH0gcGFuZWwgLSDjgqLjg7Pjg5Hjg4PjgrXjg7Plr77osaHjgajmiJDjgorjgYbjgovjg57jgrnnm65cblx0ICogQHBhcmFtIHtQaWVjZX0gcGllY2UgLSDjgqLjg7Pjg5Hjg4PjgrXjg7Plr77osaHjgajmiJDjgorjgYbjgovpp5Jcblx0ICovXG5cdHNldFRhcmdldChwYW5lbCwgcGllY2Upe1xuXHRcdGlmKHBhbmVsLmhhc1RhcmdldChcInN0YXJ0XCIpICYmIHBpZWNlLmhhc0F0dHIoXCJlblBhc3NhbnRcIikpXG5cdFx0XHR0aGlzLmRlZ3NbcGllY2UuZGVnXS5wYW5lbCA9IHBhbmVsO1xuXHR9XG5cblx0LyoqIOOCouODs+ODkeODg+OCteODs+WvvuixoeOBqOaIkOOCiuOBhuOCi+mnkuaDheWgseOCkuiomOmMslxuXHQgKiBAcGFyYW0ge1BhbmVsfSB0b1BhbmVsIC0g44Ki44Oz44OR44OD44K144Oz5a++6LGh44GL56K66KqN44GZ44KL44Oe44K555uuXG5cdCAqL1xuXHRzZXRNb3ZlZCh0b1BhbmVsKXtcblx0XHRjb25zdCB7cGllY2V9ID0gdG9QYW5lbDtcblx0XHRjb25zdCBlcCA9IHRoaXMuZGVnc1twaWVjZS5kZWddO1xuXHRcdGlmKHBpZWNlICYmIHRvUGFuZWwgPT09IGVwLnBhbmVsKSBlcC5waWVjZSA9IHBpZWNlO1xuXHRcdGVsc2UgdGhpcy5jbGVhcihwaWVjZS5kZWcpO1xuXHR9XG5cblx0LyoqIOOCouODs+ODkeODg+OCteODs+WvvuixoeOBruODnuOCueOBi+eiuuiqjeOBmeOCi1xuXHQgKiBAcGFyYW0ge1BhbmVsfSBwYW5lbCAtIOOCouODs+ODkeODg+OCteODs+WvvuixoeOBqOaIkOOCiuOBhuOCi+ODnuOCueebrlxuXHQgKiBAcGFyYW0ge1BpZWNlfSBwaWVjZSAtIOOCouODs+ODkeODg+OCteODs+WvvuixoeOBqOaIkOOCiuOBhuOCi+mnklxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdGlzVGFyZ2V0KHBhbmVsLCBwaWVjZSl7XG5cdFx0aWYoIXBhbmVsIHx8ICFwYW5lbC5waWVjZSkgcmV0dXJuIHRydWU7XG5cdFx0aWYoIXBhbmVsLnBpZWNlLmhhc0F0dHIoXCJlblBhc3NhbnRcIikpIHJldHVybiBmYWxzZTtcblx0XHRyZXR1cm4gcGFuZWwucGllY2UgPT09IHRoaXMuZGVnc1twYW5lbC5waWVjZS5kZWddLnBpZWNlO1xuXHR9XG59XG4iLCIvKiogQHR5cGVkZWYge2ltcG9ydCgnLi9qc29uJykuQm9hcmRJbml0T3B0aW9ufSBCb2FyZEluaXRPcHRpb24gKi9cbmltcG9ydCB7Y2FudmFzRm9udH0gZnJvbSBcIi4vY2FudmFzRm9udExvYWRlci5qc1wiO1xuaW1wb3J0IHtjYW52YXNJbWFnZX0gZnJvbSBcIi4vY2FudmFzSW1hZ2VMb2FkZXIuanNcIjtcbmltcG9ydCB7ZG93bmxvYWRJbWFnZX0gZnJvbSBcIi4vZG93bmxvYWRJbWFnZS5qc1wiO1xuaW1wb3J0IHt1SUNvbnRyb2x9IGZyb20gXCIuL3VpQ29udHJvbC5qc1wiO1xuaW1wb3J0IHtTdGFuZH0gZnJvbSBcIi4vc3RhbmQuanNcIjtcbmltcG9ydCB7UGFuZWx9IGZyb20gXCIuL3BhbmVsLmpzXCI7XG5pbXBvcnQge1BpZWNlfSBmcm9tIFwiLi9waWVjZS5qc1wiO1xuaW1wb3J0IHtFblBhc3NhbnR9IGZyb20gXCIuL2VuUGFzc2FudC5qc1wiO1xuaW1wb3J0IHtCb2R9IGZyb20gXCIuL2JvZC5qc1wiO1xuaW1wb3J0IHtib2FyZHMsIGdhbWVzfSBmcm9tIFwiLi9qc29uLmpzXCI7XG5cbi8qKiDnm6Tjga7nrqHnkIbjgq/jg6njgrkgKi9cbmV4cG9ydCBjbGFzcyBCb2FyZHtcblx0LyoqIOebpOmdouOBruiomOmMslxuXHQgKiBAdHlwZWRlZiB7T2JqZWN0fSBSZWNvcmRcblx0ICogQHByb3Age09iamVjdH0gZnJvbVxuXHQgKiBAcHJvcCB7bnVtYmVyfSBmcm9tLnBYXG5cdCAqIEBwcm9wIHtudW1iZXJ9IGZyb20ucFlcblx0ICogQHByb3Age09iamVjdH0gdG9cblx0ICogQHByb3Age251bWJlcn0gdG8ucFhcblx0ICogQHByb3Age251bWJlcn0gdG8ucFlcblx0ICogQHByb3Age251bWJlcn0gZGVnXG5cdCAqIEBwcm9wIHtzdHJpbmd9IHBpZWNlQ2hhclxuXHQgKiBAcHJvcCB7c3RyaW5nfSBlbmRcblx0ICogQHByb3Age3N0cmluZ30gZmllbGRUZXh0XG5cdCAqIEBwcm9wIHtzdHJpbmdbXVtdfSBmaWVsZE1vdmVkXG5cdCAqL1xuXG5cdC8qKiDjgrLjg7zjg6DjgpLlrp/ooYzjgZnjgotcblx0ICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH19IGNhbnZhcyAtIENhbnZhc+imgee0oFxuXHQgKiBAcGFyYW0ge0JvYXJkSW5pdE9wdGlvbn0gb3B0aW9uIC0g44Oc44O844OJ44Gu5Yid5pyf5YyW44Kq44OX44K344On44OzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb24ucGxheUJvYXJkIC0g44Oc44O844OJ44K/44Kk44OXXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb24ucGxheVBpZWNlcyAtIOmnkuOCu+ODg+ODiFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uLnBsYXlQaWVjZXMuZ2FtZU5hbWUgLSDjgrLjg7zjg6DlkI0o5Z+65rqW44Go44Gq44KL6aeS44Gu6YWN572u44K744OD44OIKVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uLnBsYXlQaWVjZXMucGllY2VTZXQgLSDpp5Ljga7phY3nva7jg5Hjgr/jg7zjg7Ncblx0ICogQHJldHVybnMgQm9hcmRcblx0ICovXG5cdHN0YXRpYyBydW4oY2FudmFzLCBvcHRpb24pe1xuXHRcdGNvbnN0IHtwbGF5Qm9hcmQsIHBsYXlQaWVjZXMsIG9uRHJhd2VkfSA9IG9wdGlvbjtcblx0XHRjb25zdCBwbGF5ZXJzID0gcGxheVBpZWNlcy5zb21lKCh7Z2FtZU5hbWV9LCBpKT0+MSA8IGkgJiYgZ2FtZU5hbWUpPyA0OiAyO1xuXHRcdC8vIOODnOODvOODieOCkueUn+aIkFxuXHRcdGNvbnN0IGJvYXJkID0gbmV3IEJvYXJkKGNhbnZhcywgcGxheUJvYXJkLCB7XG5cdFx0XHQuLi5vcHRpb24sXG5cdFx0XHRwbGF5ZXJzLFxuXHRcdFx0b25EcmF3ZWRcblx0XHR9KTtcblx0XHQvLyDpp5LjgpLphY3nva5cblx0XHRwbGF5UGllY2VzLmZvckVhY2goKHtnYW1lTmFtZSwgcGllY2VTZXR9LCBpKT0+e1xuXHRcdFx0aWYoIWdhbWVOYW1lKSByZXR1cm47XG5cdFx0XHRwaWVjZVNldCA/Pz0gXCJkZWZhdWx0XCI7XG5cdFx0XHR0cnl7XG5cdFx0XHRcdGJvYXJkLnB1dFN0YXJ0UGllY2VzKGksIGdhbWVOYW1lLCBwaWVjZVNldCk7XG5cdFx0XHR9XG5cdFx0XHRjYXRjaHt9XG5cdFx0fSk7XG5cdFx0Ly8g5o+P5YaZ44Kk44OZ44Oz44OI44KS6Kit5a6aXG5cdFx0Ym9hcmQub25EcmF3ZWQgPSBvbkRyYXdlZDtcblx0XHRyZXR1cm4gYm9hcmQ7XG5cdH1cblxuXHQvKipcblx0ICogQHR5cGVkZWYge1wib3ZlcmZsb3dcInxcImhvcml6b250YWxcInxcInZlcnRpY2FsXCJ8XCJwYXJlbnRPdmVyZmxvd1wifFwicGFyZW50SG9yaXpvbnRhbFwifFwicGFyZW50VmVydGljYWxcInxudWxsfSBjYW52YXNGaXRcblx0ICovXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBjYW52YXMgLSBDYW52YXPopoHntKBcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBsYXlCb2FyZCAtIOODnOODvOODieOCv+OCpOODl1xuXHQgKiBAcGFyYW0ge251bWJlcn0gcGxheWVycyAtIOODl+ODrOOCpOODpOODvOS6uuaVsCgyIG9yIDQpXG5cdCAqIEBwYXJhbSB7Qm9hcmRJbml0T3B0aW9ufSBvcHRpb24gLSDjg5zjg7zjg4njga7liJ3mnJ/ljJbjgqrjg5fjgrfjg6fjg7Ncblx0ICovXG5cdGNvbnN0cnVjdG9yKGNhbnZhcywgcGxheUJvYXJkLCBvcHRpb24pe1xuXHRcdGNvbnN0IHtcblx0XHRcdHBsYXllcnM9Mixcblx0XHRcdGNhbnZhc1dpZHRoPXVuZGVmaW5lZCxcblx0XHRcdGNhbnZhc0hlaWdodD11bmRlZmluZWQsXG5cdFx0XHRjYW52YXNGaXQ9XCJvdmVyZmxvd1wiLFxuXHRcdFx0Ym9hcmRMZWZ0PTUsXG5cdFx0XHRib2FyZFRvcD01LFxuXHRcdFx0cGFuZWxXaWR0aD01MCxcblx0XHRcdHBhbmVsSGVpZ2h0PTB8cGFuZWxXaWR0aCoxLjEsXG5cdFx0XHRwaWVjZVNpemU9MHxwYW5lbFdpZHRoKjAuOSxcblx0XHRcdHVzZVJhbmtTaXplID0gdHJ1ZSxcblx0XHRcdGlzRHJhd1NoYWRvdyA9IHRydWUsXG5cdFx0XHRib3JkZXJXaWR0aD1NYXRoLm1pbihwYW5lbFdpZHRoLCBwYW5lbEhlaWdodCkvMzAsXG5cdFx0XHR1c2VTdGFuZD1mYWxzZSxcblx0XHRcdGJhY2tncm91bmRDb2xvcj1cIiMwMDAwMDAwMFwiLFxuXHRcdFx0YXV0b0RyYXdpbmc9dHJ1ZSxcblx0XHRcdG9uRHJhd2VkLFxuXHRcdFx0b25HYW1lT3Zlcj1pPT5hbGVydChg44OX44Os44Kk44Ok44O8JHtpKzF944Gu5pWX5YyX44Gn44GZ44CCYCksXG5cdFx0XHRmcmVlTW9kZT1mYWxzZVxuXHRcdH0gPSBvcHRpb247XG5cdFx0Ly8g5Yid5pyf5YyWXG5cdFx0Y29uc3QgY2FudmFzRm9udEFzeW5jID0gY2FudmFzRm9udC5pbXBvcnRBc3luYygpO1xuXHRcdGNvbnN0IGNhbnZhc0ltYWdlQXN5bmMgPSBjYW52YXNJbWFnZS5pbXBvcnRBc3luYygpO1xuXHRcdHRoaXMuY2FudmFzID0gY2FudmFzO1xuXHRcdGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXHRcdHRoaXMuY3R4ID0gY3R4O1xuXG5cdFx0dGhpcy5waWVjZXMgPSBQaWVjZS5nZXRQaWVjZXMoY3R4LCB7XG5cdFx0XHRzaXplOiBwaWVjZVNpemUsXG5cdFx0XHR1c2VSYW5rU2l6ZSxcblx0XHRcdGlzRHJhd1NoYWRvd1xuXHRcdH0pO1xuXG5cdFx0Ly8g44Oc44O844OJ5oOF5aCxXG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBib2FyZHNbcGxheUJvYXJkXSk7XG5cdFx0aWYoIVsyLCA0XS5pbmNsdWRlcyhwbGF5ZXJzKSkgdGhyb3cgRXJyb3IoYHBsYXllcnM9JHtwbGF5ZXJzfSwgcGxheWVycyBuZWVkIDIgb3IgNC5gKTtcblx0XHR0aGlzLnBsYXllcnMgPSBwbGF5ZXJzO1xuXHRcdHRoaXMubGVmdCA9IGJvYXJkTGVmdDtcblx0XHR0aGlzLnRvcCA9IGJvYXJkVG9wO1xuXHRcdHRoaXMucGFuZWxXaWR0aCA9IHBhbmVsV2lkdGg7XG5cdFx0dGhpcy5wYW5lbEhlaWdodCA9IHBhbmVsSGVpZ2h0O1xuXHRcdHRoaXMuYm9yZGVyV2lkdGggPSBib3JkZXJXaWR0aDtcblx0XHR0aGlzLnBpZWNlU2l6ZSA9IHBpZWNlU2l6ZTtcblx0XHR0aGlzLmNhbnZhc0JhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvcjtcblxuXHRcdC8vIOODnuOCueebruODh+ODvOOCv+OCkuani+eviVxuXHRcdHRoaXMuZmllbGQgPSB0aGlzLmZpZWxkLm1hcCgocm93LCBwWSk9PlxuXHRcdFx0Wy4uLnJvd10ubWFwKChjaGFyLCBwWCk9Pntcblx0XHRcdFx0Y29uc3QgY2VudGVyID0gYm9hcmRMZWZ0K3BhbmVsV2lkdGgqKHBYKzEpO1xuXHRcdFx0XHRjb25zdCBtaWRkbGUgPSBib2FyZFRvcCtwYW5lbEhlaWdodCoocFkrMSlcblx0XHRcdFx0cmV0dXJuIG5ldyBQYW5lbChjdHgsIGNoYXIsIGNlbnRlciwgbWlkZGxlLCBwYW5lbFdpZHRoLCBwYW5lbEhlaWdodCwgYm9yZGVyV2lkdGgsIHBYLCBwWSk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdFx0dGhpcy54TGVuID0gdGhpcy5maWVsZFswXS5sZW5ndGg7XG5cdFx0dGhpcy55TGVuID0gdGhpcy5maWVsZC5sZW5ndGg7XG5cdFx0dGhpcy53aWR0aCA9IHRoaXMucGFuZWxXaWR0aCoodGhpcy54TGVuKzEpO1xuXHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5wYW5lbEhlaWdodCoodGhpcy55TGVuKzEpO1xuXHRcdHRoaXMucmlnaHQgPSBib2FyZExlZnQrdGhpcy53aWR0aDtcblx0XHR0aGlzLmJvdHRvbSA9IGJvYXJkVG9wK3RoaXMuaGVpZ2h0O1xuXHRcdHRoaXMuc3RhbmQgPSBuZXcgU3RhbmQodGhpcyk7XG5cdFx0Y2FudmFzLndpZHRoID0gY2FudmFzV2lkdGggPz8gKHVzZVN0YW5kPyB0aGlzLnN0YW5kLnJpZ2h0OiB0aGlzLnJpZ2h0KSs1O1xuXHRcdGNhbnZhcy5oZWlnaHQgPSBjYW52YXNIZWlnaHQgPz8gdGhpcy5ib3R0b20rNTtcblx0XHQvLyDjgq3jg6Pjg7Pjg5DjgrnjgrXjgqTjgrroqr/mlbRcblx0XHRjb25zdCB7c3R5bGV9ID0gY2FudmFzO1xuXHRcdGlmKGNhbnZhc0ZpdCA9PT0gXCJvdmVyZmxvd1wiKXtcblx0XHRcdGlmKHN0eWxlLm1heFdpZHRoID09PSBcIlwiKSBzdHlsZS5tYXhXaWR0aCA9IFwiOTd2d1wiO1xuXHRcdFx0aWYoc3R5bGUubWF4SGVpZ2h0ID09PSBcIlwiKSBzdHlsZS5tYXhIZWlnaHQgPSBcIjk3dmhcIjtcblx0XHR9XG5cdFx0ZWxzZSBpZihjYW52YXNGaXQgPT09IFwiaG9yaXpvbnRhbFwiKXtcblx0XHRcdGlmKHN0eWxlLndpZHRoID09PSBcIlwiKSBzdHlsZS53aWR0aCA9IFwiOTd2d1wiO1xuXHRcdH1cblx0XHRlbHNlIGlmKGNhbnZhc0ZpdCA9PT0gXCJ2ZXJ0aWNhbFwiKXtcblx0XHRcdGlmKHN0eWxlLmhlaWdodCA9PT0gXCJcIikgc3R5bGUuaGVpZ2h0ID0gXCI5N3ZoXCI7XG5cdFx0fVxuXHRcdGVsc2UgaWYoY2FudmFzRml0ID09PSBcInBhcmVudE92ZXJmbG93XCIpe1xuXHRcdFx0aWYoc3R5bGUubWF4V2lkdGggPT09IFwiXCIpIHN0eWxlLm1heFdpZHRoID0gXCIxMDAlXCI7XG5cdFx0XHRpZihzdHlsZS5tYXhIZWlnaHQgPT09IFwiXCIpIHN0eWxlLm1heEhlaWdodCA9IFwiMTAwJVwiO1xuXHRcdH1cblx0XHRlbHNlIGlmKGNhbnZhc0ZpdCA9PT0gXCJwYXJlbnRIb3Jpem9udGFsXCIpe1xuXHRcdFx0aWYoc3R5bGUud2lkdGggPT09IFwiXCIpIHN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG5cdFx0fVxuXHRcdGVsc2UgaWYoY2FudmFzRml0ID09PSBcInBhcmVudFZlcnRpY2FsXCIpe1xuXHRcdFx0aWYoc3R5bGUuaGVpZ2h0ID09PSBcIlwiKSBzdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcblx0XHR9XG5cblx0XHQvLyDmj4/lhpnmm7TmlrDoqK3lrppcblx0XHR0aGlzLmF1dG9EcmF3aW5nID0gYXV0b0RyYXdpbmc7XG5cdFx0aWYoYXV0b0RyYXdpbmcpe1xuXHRcdFx0Y2FudmFzRm9udEFzeW5jLnRoZW4oKCk9PnRoaXMuZHJhdygpKTtcblx0XHRcdGNhbnZhc0ltYWdlQXN5bmMudGhlbigoKT0+dGhpcy5kcmF3KCkpO1xuXHRcdFx0dGhpcy5kcmF3KCk7XG5cdFx0fVxuXHRcdHRoaXMub25EcmF3ZWQgPSBvbkRyYXdlZDtcblx0XHR0aGlzLm9uR2FtZU92ZXIgPSBvbkdhbWVPdmVyO1xuXHRcdHRoaXMuZ2FtZUFsaXZlcyA9IG5ldyBNYXAoXG5cdFx0XHRbLi4uQXJyYXkodGhpcy5wbGF5ZXJzKS5rZXlzKCldXG5cdFx0XHQubWFwKGk9Plt0aGlzLiNkZWdOb3JtYWwoaSksIHRydWVdKVxuXHRcdCk7XG5cdFx0dGhpcy5mcmVlTW9kZSA9IGZyZWVNb2RlO1xuXG5cdFx0LyoqIOOCsuODvOODoOOBruiomOmMslxuXHRcdCAqIEB0eXBlIHtSZWNvcmRbXX1cblx0XHQgKi9cblx0XHR0aGlzLnJlY29yZCA9IFtdO1xuXHRcdC8qKiDjgrLjg7zjg6Djga7jgr/jg7zjg7Ncblx0XHQgKiBAdHlwZSB7bnVtYmVyfVxuXHRcdCAqL1xuXHRcdHRoaXMudHVybiA9IDA7XG5cdFx0dGhpcy51aUNvbnRyb2wgPSB1SUNvbnRyb2wodGhpcyk7XG5cdFx0dGhpcy5lblBhc3NhbnQgPSBuZXcgRW5QYXNzYW50KCk7XG5cdH1cblxuXHQvKiog44Oc44O844OJ44KS6ZaJ44GY44KLICovXG5cdGNsb3NlKCl7XG5cdFx0dGhpcy51aUNvbnRyb2wucmVtb3ZlRXZlbnQoKTtcblx0fVxuXG5cdC8qKiDop5LluqbjgpLmraPopo/ljJZcblx0ICogQHBhcmFtIHtudW1iZXJ9IHBsYXllYUlkT3JEZWcgLSDjg5fjg6zjgqTjg6Tjg7znlarlj7fjgb7jgZ/jga/op5LluqZcblx0ICogQHJldHVybnMge251bWJlcn1cblx0ICovXG5cdCNkZWdOb3JtYWwocGxheWVhSWRPckRlZyl7XG5cdFx0bGV0IGRlZyA9IHBsYXllYUlkT3JEZWc7XG5cdFx0aWYoMCA8IGRlZyAmJiBkZWcgPCA0KSBkZWcgPSAwfGRlZyozNjAvdGhpcy5wbGF5ZXJzO1xuXHRcdGRve2RlZyA9IChkZWcrMzYwKSUzNjB9IHdoaWxlKGRlZzwwKTtcblx0XHRyZXR1cm4gZGVnO1xuXHR9XG5cblx0LyoqIOmnkumFjee9ruOCkuWbnui7olxuXHQgKiBAcGFyYW0ge251bWJlcn0gZGVnIC0g5Zue6Lui6KeSICg5MOOBruWAjeaVsClcblx0ICovXG5cdHJvdGF0ZUZpZWxkKGRlZyl7XG5cdFx0Y29uc3Qge3hMZW4sIHlMZW59ID0gdGhpcztcblxuXHRcdGRlZyA9IHRoaXMuI2RlZ05vcm1hbChkZWcpO1xuXHRcdGlmKGRlZyA9PT0gMCkgcmV0dXJuO1xuXHRcdGlmKCFbOTAsIDE4MCwgMjcwXS5pbmNsdWRlcyhkZWcpKSB0aHJvdyBFcnJvcihgZGVnPSR7ZGVnfSwgZGVnIG5lZWQgbXVsdGlwbGUgb2YgOTAuYCk7XG5cdFx0aWYoWzkwLCAyNzBdLmluY2x1ZGVzKGRlZykpe1xuXHRcdFx0Ly8gMuasoemFjeWIl+OCkui7oue9rlxuXHRcdFx0Y29uc3QgdHJhbnNwb3NlID0gYSA9PiBhWzBdLm1hcCgoXywgYykgPT4gYS5tYXAociA9PiByW2NdKSk7XG5cdFx0XHRpZih4TGVuICE9PSB5TGVuKSB0aHJvdyBFcnJvcihgY29scz0ke3hMZW59ICE9IHJvd3M9JHt5TGVufSwgTm90IHJvd3MgPSBjb2xzLmApO1xuXHRcdFx0dGhpcy5maWVsZCA9IHRyYW5zcG9zZSh0aGlzLmZpZWxkKTtcblx0XHR9XG5cdFx0aWYoWzE4MCwgMjcwXS5pbmNsdWRlcyhkZWcpKXtcblx0XHRcdHRoaXMuZmllbGQucmV2ZXJzZSgpO1xuXHRcdH1cblx0XHR0aGlzLmZpZWxkLmZvckVhY2gocm93PT57XG5cdFx0XHRyb3cuZm9yRWFjaChwYW5lbD0+e1xuXHRcdFx0XHRpZighcGFuZWwucGllY2UpIHJldHVybjtcblx0XHRcdFx0cGFuZWwucGllY2UuZGVnICs9IGRlZztcblx0XHRcdH0pO1xuXHRcdFx0aWYoWzkwLCAxODBdLmluY2x1ZGVzKGRlZykpIHJvdy5yZXZlcnNlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKiog6aeS44Gu5Yid5pyf6YWN572uXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwbGF5ZXJJZCAtIOODl+ODrOOCpOODpOODvOeVquWPt1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gZ2FtZU5hbWUgLSDjgrLjg7zjg6DlkI0o5Z+65rqW44Go44Gq44KL6aeS44Gu6YWN572u44K744OD44OIKVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGllY2VTZXQgLSDpp5Ljga7phY3nva7jg5Hjgr/jg7zjg7Ncblx0ICovXG5cdHB1dFN0YXJ0UGllY2VzKHBsYXllcklkLCBnYW1lTmFtZSwgcGllY2VTZXQ9XCJkZWZhdWx0XCIpe1xuXHRcdGNvbnN0IHtwaWVjZXN9ID0gdGhpcztcblxuXHRcdGNvbnN0IGRlZyA9IHRoaXMuI2RlZ05vcm1hbChwbGF5ZXJJZCk7XG5cdFx0dGhpcy5yb3RhdGVGaWVsZChkZWcpO1xuXHRcdGNvbnN0IHBvcyA9IGdhbWVzW2dhbWVOYW1lXS5wb3NpdGlvblt0aGlzLnhMZW5dW3BpZWNlU2V0XTtcblx0XHRpZighcG9zKSB0aHJvdyBFcnJvcihgZ2FtZXNbXCIke2dhbWVOYW1lfVwiXS5wb3NpdGlvbltcIiR7dGhpcy54TGVufVwiXVtcIiR7cGllY2VTZXR9XCJdaXMgbnVsbC5gKTtcblx0XHRwb3MuZm9yRWFjaCgocm93LCBpKT0+e1xuXHRcdFx0aWYocm93Lmxlbmd0aCA8IHRoaXMueExlbikgdGhyb3cgRXJyb3Iocm93LmpvaW4oXCJcIikpO1xuXHRcdFx0Y29uc3QgcFkgPSBpK3RoaXMueUxlbiAtIHBvcy5sZW5ndGg7XG5cdFx0XHRbLi4ucm93XS5mb3JFYWNoKChjaGFyLCBwWCk9Pntcblx0XHRcdFx0aWYoIXBpZWNlc1tjaGFyXSkgcmV0dXJuO1xuXHRcdFx0XHRjb25zdCBwaWVjZSA9IHBpZWNlc1tjaGFyXS5jbG9uZSgpO1xuXHRcdFx0XHRjb25zdCBwYW5lbCA9IHRoaXMuZmllbGRbcFldW3BYXTtcblx0XHRcdFx0cGllY2UuY2VudGVyID0gcGFuZWwuY2VudGVyO1xuXHRcdFx0XHRwaWVjZS5taWRkbGUgPSBwYW5lbC5taWRkbGU7XG5cdFx0XHRcdHBhbmVsLnBpZWNlID0gcGllY2U7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHR0aGlzLnJvdGF0ZUZpZWxkKC1kZWcpO1xuXHRcdGlmKHRoaXMuYXV0b0RyYXdpbmcpIHRoaXMuZHJhdygpO1xuXHR9XG5cblx0LyoqIOmnkuOBrumFjee9rlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGllY2UgLSDpp5Ljga7ooajnj77mloflrZdcblx0ICogQHBhcmFtIHtudW1iZXJ9IHBYIC0gWOaWueWQkemFjee9ruS9jee9rijjg57jgrnnm67ln7rmupYpXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwWSAtIFnmlrnlkJHphY3nva7kvY3nva4o44Oe44K555uu5Z+65rqWKVxuXHQgKiBAcGFyYW0ge251bWJlcn0gcGxheWVhSWRPckRlZyAtIOODl+ODrOOCpOODpOODvOeVquWPt+OBvuOBn+OBr+mnkuOBrumFjee9ruinklxuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uIC0g44Kq44OX44K344On44OzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb24uZGlzcGxheVB0biAtIOihqOekuuaWh+Wtl+WIl+OCkuWkieabtCgx44CcKVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5pc01vdmVkIC0g5Yid5Zue56e75YuV5riI44G/44GL5ZCm44GLXG5cdCAqL1xuXHRwdXROZXdQaWVjZShwaWVjZSwgcFgsIHBZLCBwbGF5ZWFJZE9yRGVnLCBvcHRpb249e30pe1xuXHRcdGNvbnN0IHtkaXNwbGF5UHRuPTAsIGlzTW92ZWQ9ZmFsc2V9ID0gb3B0aW9uO1xuXHRcdGNvbnN0IHtwaWVjZXN9ID0gdGhpcztcblxuXHRcdGNvbnN0IGRlZyA9IHRoaXMuI2RlZ05vcm1hbChwbGF5ZWFJZE9yRGVnKTtcblx0XHRpZih0eXBlb2YgcGllY2UgPT09IFwic3RyaW5nXCIpe1xuXHRcdFx0cGllY2UgPSBuZXcgUGllY2UodGhpcy5jdHgsIHBpZWNlc1twaWVjZV0sIHtkaXNwbGF5UHRuLCBkZWcsIGlzTW92ZWR9KTtcblx0XHR9XG5cdFx0Y29uc3QgcGFuZWwgPSB0aGlzLmZpZWxkW3BZXVtwWF07XG5cdFx0cGllY2UuY2VudGVyID0gcGFuZWwuY2VudGVyO1xuXHRcdHBpZWNlLm1pZGRsZSA9IHBhbmVsLm1pZGRsZTtcblx0XHRwYW5lbC5waWVjZSA9IHBpZWNlO1xuXHRcdGlmKHRoaXMuYXV0b0RyYXdpbmcpIHRoaXMuZHJhdygpO1xuXHR9XG5cblx0LyoqIOaWh+Wtl+WIl+OBi+OCiemnkuOCkumFjee9rlxuXHQgKiB7c3RyaW5nfSB0ZXh0IC0g6aeS6YWN572u44KS6KGo44GZ5paH5a2X5YiXXG5cdCAqL1xuXHRzZXRUZXh0UGllY2VzKHRleHQpe1xuXHRcdGNvbnN0IHtmaWVsZCwgcGllY2VzLCB4TGVuLCB5TGVufSA9IHRoaXM7XG5cblx0XHRjb25zdCBzdGFuZFRpdGxlID0gXCLmjIHpp5LvvJpcIjtcblx0XHQvLyBCT0TlvaLlvI9cblx0XHRpZigwPHRleHQuaW5kZXhPZihzdGFuZFRpdGxlKSkgdGV4dCA9IEJvZC5jb252U2V0VGV4dCh0ZXh0KTtcblxuXHRcdC8vIOaOkumZpOOBmeOCi+iomOWPt1xuXHRcdGNvbnN0IG5vaXNlcyA9IFwi4pSP4pSB4pSv4pST4pSX4pS34pSb4pSD4pSC4pSg4pSA4pS84pSo4oCVXCI7XG5cblx0XHQvLyDphY3liJflpInmj5tcblx0XHRjb25zdCB0ZXh0cyA9IFt0ZXh0XS5jb25jYXQoXG5cdFx0XHRcdFsuLi5ub2lzZXNdLFxuXHRcdFx0XHRPYmplY3QudmFsdWVzKFBpZWNlLmRlZ0NoYXJzKS5tYXAoYz0+XCJcXG5cIitjK3N0YW5kVGl0bGUpXG5cdFx0XHQpLnJlZHVjZShcblx0XHRcdFx0KHRleHQsY2hhcik9PlxuXHRcdFx0XHRcdHRleHQucmVwbGFjZShuZXcgUmVnRXhwKGNoYXIsXCJnXCIpLCBcIlwiKVxuXHRcdFx0KS5yZXBsYWNlKC9cXG5cXG4vZywgXCJcXG5cIilcblx0XHRcdC5yZXBsYWNlKC/jgIAvZywgXCLjg7tcIilcblx0XHRcdC50cmltKClcblx0XHRcdC5zcGxpdCgvXFxuLylcblx0XHRcdC5tYXAoXG5cdFx0XHRcdHJvdz0+cm93Lm1hdGNoKC8uezJ9L2cpKTtcblxuXHRcdC8vIOODnOODvOODieOBq+mnkuOCkumFjee9rlxuXHRcdGZvcihsZXQgcFk9MDtwWTx5TGVuO3BZKyspe1xuXHRcdFx0Zm9yKGxldCBwWD0wO3BYPHhMZW47cFgrKyl7XG5cdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRjb25zdCB0ZXh0ID0gdGV4dHNbcFldW3BYXTtcblx0XHRcdFx0XHRjb25zdCBwaWVjZSA9IFBpZWNlLnN0cmluZ1RvUGllY2UocGllY2VzLCB0ZXh0KTtcblx0XHRcdFx0XHRwaWVjZS5jZW50ZXIgPSBmaWVsZFtwWV1bcFhdLmNlbnRlcjtcblx0XHRcdFx0XHRwaWVjZS5taWRkbGUgPSBmaWVsZFtwWV1bcFhdLm1pZGRsZTtcblx0XHRcdFx0XHRmaWVsZFtwWV1bcFhdLnBpZWNlID0gcGllY2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2F0Y2goZXgpe1xuXHRcdFx0XHRcdGZpZWxkW3BZXVtwWF0ucGllY2UgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8g5oyB44Gh6aeS44KS6YWN572uXG5cdFx0dGhpcy5zdGFuZC5jbGVhcigpO1xuXHRcdGNvbnN0IHN0YW5kVGV4dHMgPSB0ZXh0c1t5TGVuXTtcblx0XHRpZihzdGFuZFRleHRzKXtcblx0XHRcdHN0YW5kVGV4dHMuZm9yRWFjaCh0ZXh0PT57XG5cdFx0XHRcdGNvbnN0IHBpZWNlID0gUGllY2Uuc3RyaW5nVG9QaWVjZShwaWVjZXMsIHRleHQpO1xuXHRcdFx0XHRpZighcGllY2UpIHJldHVybjtcblx0XHRcdFx0dGhpcy5zdGFuZC5hZGQocGllY2UpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGlmKHRoaXMuYXV0b0RyYXdpbmcpIHRoaXMuZHJhdygpO1xuXHR9XG5cblx0LyoqIOinkuW6puWfuua6luOBruODnuOCueebruOBruihjOOCkuWPluW+l+OBmeOCi1xuXHQgKiBAcGFyYW0ge1BhbmVsfSBwYW5lbCAtIOODnuOCueebrlxuXHQgKiBAcGFyYW0ge251bWJlcn0gZGVnIC0g6KeS5bqmXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXREZWcgLSDoo5zmraPop5LluqZcblx0ICogQHJldHVybnMge251bWJlcn1cblx0ICovXG5cdGdldFJvdyhwWCwgcFksIGRlZywgb2Zmc2V0RGVnPTApe1xuXHRcdGNvbnN0IHt4TGVuLCB5TGVufSA9IHRoaXM7XG5cblx0XHRkZWcgPSB0aGlzLiNkZWdOb3JtYWwoZGVnK29mZnNldERlZyk7XG5cdFx0cmV0dXJuIChcblx0XHRcdGRlZyA9PT0gMD8geUxlbi0xLXBZOlxuXHRcdFx0ZGVnID09PSA5MD8gcFg6XG5cdFx0XHRkZWcgPT09IDE4MD8gcFk6XG5cdFx0XHRkZWcgPT09IDI3MD8geExlbi0xLXBYOlxuXHRcdFx0LTFcblx0XHQpO1xuXHR9XG5cblx0LyoqIOinkuW6puWfuua6luOBruODnuOCueebruOBruWIl+OCkuWPluW+l+OBmeOCi1xuXHQgKiBAcGFyYW0ge1BhbmVsfSBwYW5lbCAtIOODnuOCueebrlxuXHQgKiBAcGFyYW0ge251bWJlcn0gZGVnIC0g6KeS5bqmXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXREZWcgLSDoo5zmraPop5LluqZcblx0ICogQHJldHVybnMge251bWJlcn1cblx0ICovXG5cdGdldENvbChwWCwgcFksIGRlZywgb2Zmc2V0RGVnPTApe1xuXHRcdGNvbnN0IHt4TGVuLCB5TGVufSA9IHRoaXM7XG5cblx0XHRkZWcgPSB0aGlzLiNkZWdOb3JtYWwoZGVnK29mZnNldERlZyk7XG5cdFx0cmV0dXJuIChcblx0XHRcdGRlZyA9PT0gMD8gcFg6XG5cdFx0XHRkZWcgPT09IDkwPyB5TGVuLTEtcFk6XG5cdFx0XHRkZWcgPT09IDE4MD8geExlbi0xLXBYOlxuXHRcdFx0ZGVnID09PSAyNzA/IHBZOlxuXHRcdFx0LTFcblx0XHQpO1xuXHR9XG5cblx0LyoqIOODl+ODreODouODvOOCt+ODp+ODs+OCqOODquOCouWGheOBp+OBguOCi+OBi+WIpOWIpVxuXHQgKiBAcGFyYW0ge1BhbmVsfSBwYW5lbCAtIOODnuOCueebrlxuXHQgKi9cblx0Y2hlY2tDYW5Qcm9tbyhwYW5lbCl7XG5cdFx0Y29uc3Qge3lMZW59ID0gdGhpcztcblx0XHRjb25zdCB7cGllY2UsIHBYLCBwWX0gPSBwYW5lbDtcblx0XHRjb25zdCB7ZGVnfSA9IHBpZWNlO1xuXG5cdFx0Y29uc3QgW3Byb21vTGluZSwgZm9yY2VQcm9tb0xpbmVdID0gW1xuXHRcdFx0cGllY2UuZ2FtZS5wcm9tb0xpbmUsXG5cdFx0XHRwaWVjZS5mb3JjZVByb21vTGluZVxuXHRcdF0ubWFwKGxpbmU9PnlMZW4tbGluZS0oMHx0aGlzLnByb21vTGluZU9mZnNldCkpO1xuXG5cdFx0bGV0IHJvdztcblx0XHRpZighdGhpcy5zaWRlUHJvbW8pe1xuXHRcdFx0cm93ID0gdGhpcy5nZXRSb3cocFgsIHBZLCBkZWcpO1xuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0cm93ID0gTWF0aC5tYXgoXG5cdFx0XHRcdC4uLk9iamVjdC5rZXlzKFBpZWNlLmRlZ0NoYXJzKVxuXHRcdFx0XHQubWFwKGQ9PjB8ZClcblx0XHRcdFx0LmZpbHRlcihkPT5kIT09ZGVnKVxuXHRcdFx0XHQubWFwKFxuXHRcdFx0XHRcdGQ9PnRoaXMuZ2V0Um93KHBYLCBwWSwgZCwgMTgwKVxuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2FuUHJvbW86IHByb21vTGluZSA8PSByb3csXG5cdFx0XHRmb3JjZVByb21vOiBmb3JjZVByb21vTGluZSA8PSByb3dcblx0XHR9O1xuXHR9XG5cblx0LyoqIOaVl+WMl+OBl+OBn+ODl+ODrOOCpOODpOODvOOBjOWtmOWcqOOBmeOCi+OBi+eiuuiqjeOBl+OAgeOCpOODmeODs+ODiOOCkueZuueUn+OBleOBm+OCiyAqL1xuXHQjZW1pdEdhbWVPdmVyKCl7XG5cdFx0Wy4uLnRoaXMuZ2FtZUFsaXZlc10uZm9yRWFjaCgoW2RlZywgZ2FtZUFsaXZlXSwgaSk9Pntcblx0XHRcdGlmKCFnYW1lQWxpdmUpIHJldHVybjtcblx0XHRcdGlmKHRoaXMuZmllbGQuc29tZShyb3c9PlxuXHRcdFx0XHRyb3cuc29tZSgoe3BpZWNlfSk9PlxuXHRcdFx0XHRcdHBpZWNlXG5cdFx0XHRcdFx0JiYgcGllY2UuZGVnID09PSBkZWdcblx0XHRcdFx0XHQmJiBwaWVjZS5oYXNBdHRyKFwia2luZ1wiKVxuXHRcdFx0XHQpXG5cdFx0XHQpKSByZXR1cm47XG5cdFx0XHR0aGlzLmdhbWVBbGl2ZXMuc2V0KGRlZywgZmFsc2UpO1xuXHRcdFx0dGhpcy5vbkdhbWVPdmVyKGkpO1xuXHRcdH0pXG5cdH1cblxuXHQvKiog44OX44Ot44Oi44O844K344On44Oz5Yem55CGXG5cdCAqIEBwYXJhbSB7UGFuZWx9IGZyb21QYW5lbCAtIOenu+WLleWFg+OBruODnuOCueebrlxuXHQgKiBAcGFyYW0ge1BhbmVsfSB0b1BhbmVsIC0g6YG45oqe5Lit44Gu44Oe44K555uuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gY2FuUHJvbW8gLSDmiJDjgovjgZPjgajjgYzjgafjgY3jgotcblx0ICogQHBhcmFtIHtib29sZWFufSBmb3JjZVByb21vIC0g5oiQ44KK44KS5by35Yi244GZ44KLXG5cdCAqL1xuXHQjcHJvbW9EaWFsb2coZnJvbVBhbmVsLCB0b1BhbmVsLCBjYW5Qcm9tbywgZm9yY2VQcm9tbyl7XG5cdFx0Y29uc3Qge2ZyZWVNb2RlfSA9IHRoaXM7XG5cdFx0Y29uc3Qge3BpZWNlfSA9IHRvUGFuZWw7XG5cblx0XHQvLyDjg5fjg63jg6Ljg7zjgrfjg6fjg7Plh6bnkIZcblx0XHRpZighcGllY2UucHJvbW8gfHwgcGllY2UuaGFzQXR0cihcInByb21vdGVkXCIpIHx8ICFjYW5Qcm9tbyl7XG5cdFx0XHR0aGlzLmFkZFJlY29yZCh7ZnJvbVBhbmVsLCB0b1BhbmVsfSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGRve1xuXHRcdFx0Zm9yKGNvbnN0IFtjaGFyLCB7bmFtZX1dIG9mIE9iamVjdC5lbnRyaWVzKHBpZWNlLnByb21vKSl7XG5cdFx0XHRcdGlmKGNvbmZpcm0oYOaIkOOCiuOBvuOBmeOBiz9cbiR7cGllY2UuY2hhcn06JHtwaWVjZS5uYW1lfVxu44CA4oaTXG4ke2NoYXJ9OiR7bmFtZX1gKSl7XG5cdFx0XHRcdFx0dGhpcy5hZGRSZWNvcmQoe2Zyb21QYW5lbCwgdG9QYW5lbCwgZW5kOlwi5oiQXCJ9KTtcblx0XHRcdFx0XHRwaWVjZS5wcm9tb3Rpb24oY2hhcik7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSB3aGlsZSghZnJlZU1vZGUgJiYgZm9yY2VQcm9tbyk7XG5cdFx0dGhpcy5hZGRSZWNvcmQoe2Zyb21QYW5lbCwgdG9QYW5lbCwgZW5kOlwi5LiN5oiQXCJ9KTtcblx0fVxuXG5cdC8qKiDpp5LjgpLnp7vli5Vcblx0ICogQHBhcmFtIHtQYW5lbH0gZnJvbVBhbmVsIC0g56e75YuV5YWD44Gu44Oe44K555uuXG5cdCAqIEBwYXJhbSB7UGFuZWx9IHRvUGFuZWwgLSDpgbjmip7kuK3jga7jg57jgrnnm65cblx0ICovXG5cdG1vdmVQaWVjZShmcm9tUGFuZWwsIHRvUGFuZWwpe1xuXHRcdGNvbnN0IHtzdGFuZCwgZnJlZU1vZGUsIGVuUGFzc2FudH0gPSB0aGlzO1xuXG5cdFx0aWYoIWZyb21QYW5lbFxuXHRcdFx0fHwgdG9QYW5lbC5oYXNBdHRyKFwia2VlcE91dFwiKVxuXHRcdFx0fHwgdG9QYW5lbC5waWVjZSA9PT0gZnJvbVBhbmVsLnBpZWNlXG5cdFx0XHR8fCB0b1BhbmVsLnBpZWNlPy5kZWcgPT09IGZyb21QYW5lbC5waWVjZS5kZWdcblx0XHRcdHx8ICFmcmVlTW9kZSAmJiAhdG9QYW5lbC5pc1RhcmdldFxuXHRcdCkgcmV0dXJuO1xuXG5cdFx0bGV0IHtjYW5Qcm9tbywgZm9yY2VQcm9tb30gPSB0aGlzLmNoZWNrQ2FuUHJvbW8oZnJvbVBhbmVsKTtcblxuXHRcdHN0YW5kLmNhcHR1cmVQaWVjZShcblx0XHRcdGZyb21QYW5lbC5waWVjZSxcblx0XHRcdHRvUGFuZWwucGllY2UsXG5cdFx0XHR0b1BhbmVsLmhhc0F0dHIoXCJjYXB0dXJlXCIpLFxuXHRcdFx0dG9QYW5lbC5oYXNBdHRyKFwiY2FudENhcHR1cmVcIilcblx0XHQpO1xuXG5cdFx0dG9QYW5lbC5waWVjZSA9IGZyb21QYW5lbC5waWVjZTtcblx0XHRmcm9tUGFuZWwucGllY2UgPSBudWxsO1xuXG5cdFx0Y29uc3Qge3BpZWNlfSA9IHRvUGFuZWw7XG5cdFx0cGllY2UuY2VudGVyID0gdG9QYW5lbC5jZW50ZXI7XG5cdFx0cGllY2UubWlkZGxlID0gdG9QYW5lbC5taWRkbGU7XG5cdFx0cGllY2UuaXNNb3ZlZCA9IHRydWU7XG5cblx0XHRjb25zdCBhZnRlclByb21vID0gdGhpcy5jaGVja0NhblByb21vKHRvUGFuZWwpO1xuXHRcdGNhblByb21vIHx8PSBhZnRlclByb21vLmNhblByb21vO1xuXHRcdGZvcmNlUHJvbW8gfHw9IGFmdGVyUHJvbW8uZm9yY2VQcm9tbztcblxuXHRcdC8vIOOCouODs+ODkeODg+OCteODs1xuXHRcdGVuUGFzc2FudC5zZXRNb3ZlZCh0b1BhbmVsKTtcblxuXHRcdC8vIOODl+ODreODouODvOOCt+ODp+ODs+WHpueQhlxuXHRcdHRoaXMuI3Byb21vRGlhbG9nKGZyb21QYW5lbCwgdG9QYW5lbCwgY2FuUHJvbW8sIGZvcmNlUHJvbW8pO1xuXG5cdFx0Ly8g44OX44Os44Kk44Ok44O844Gu44Ky44O844Og44Kq44O844OQ44O85Yik5a6aXG5cdFx0dGhpcy4jZW1pdEdhbWVPdmVyKCk7XG5cdH1cblxuXHQvKiog5qOL6K2c44KS6L+96KiYXG5cdCAqIEBwYXJhbSB7UGFuZWx9IHRvUGFuZWwgLSDnp7vli5XlhYjjga7jg57jgrnnm65cblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbiAtIOOCquODl+OCt+ODp+ODs1xuXHQgKiBAcGFyYW0ge1BhbmVsfSBvcHRpb24uZnJvbVBhbmVsIC0g56e75YuV5YWD44Gu44Oe44K555uuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb24uZW5kIC0g44Kq44OX44K344On44OzPeaIkHzkuI3miJB85omTXG5cdCAqL1xuXHRhZGRSZWNvcmQob3B0aW9uPXt9KXtcblx0XHRjb25zdCB7cmVjb3JkfSA9IHRoaXM7XG5cdFx0Y29uc3Qge2Zyb21QYW5lbD17fSwgdG9QYW5lbD17fSwgZW5kPVwiXCIsIGluYz0xfSA9IG9wdGlvbjtcblx0XHRjb25zdCB7cGllY2U9e319ID0gdG9QYW5lbDtcblxuXHRcdHRoaXMudHVybiArPSBpbmM7XG5cdFx0cmVjb3JkW3RoaXMudHVybl0gPSB7XG5cdFx0XHRmcm9tOiB7XG5cdFx0XHRcdHBYOiBmcm9tUGFuZWwucFgsXG5cdFx0XHRcdHBZOiBmcm9tUGFuZWwucFlcblx0XHRcdH0sXG5cdFx0XHR0bzoge1xuXHRcdFx0XHRwWDogdG9QYW5lbC5wWCxcblx0XHRcdFx0cFk6IHRvUGFuZWwucFksXG5cdFx0XHR9LFxuXHRcdFx0ZGVnOiBwaWVjZS5kZWcsXG5cdFx0XHRwaWVjZUNoYXI6IHBpZWNlLmNoYXIsXG5cdFx0XHRlbmQsXG5cdFx0XHRmaWVsZFRleHQ6IHRoaXMuZ2V0VGV4dChcImNvbXBhY3RcIiwgdHJ1ZSksXG5cdFx0XHRmaWVsZE1vdmVkOiB0aGlzLmZpZWxkLm1hcChyb3c9PlxuXHRcdFx0XHRyb3cubWFwKCh7cGllY2V9KT0+XG5cdFx0XHRcdFx0cGllY2U/LmlzTW92ZWRcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdH07XG5cdFx0aWYoMCA8IGluYykgcmVjb3JkLnNwbGljZSh0aGlzLnR1cm4rMSk7XG5cdH1cblxuXHQvKiog6KiY6Yyy44Gu5Y+C54Wn5omL5pWw44KS5YiH44KK5pu/44GI44KLXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSAtIOWIh+OCiuabv+OBiOOBn+OBhOaJi+aVsOOBruW3ruWIhlxuXHQgKi9cblx0I3N3aXRjaFJlY29yZChpbmMpe1xuXHRcdGNvbnN0IHtyZWNvcmR9ID0gdGhpcztcblx0XHRpZighcmVjb3JkW3RoaXMudHVybitpbmNdKSByZXR1cm47XG5cblx0XHR0aGlzLnR1cm4gKz0gaW5jO1xuXHRcdGNvbnN0IHtmaWVsZFRleHQsIGZpZWxkTW92ZWR9ID0gcmVjb3JkW3RoaXMudHVybl07XG5cdFx0dGhpcy5zZXRUZXh0UGllY2VzKGZpZWxkVGV4dCk7XG5cdFx0dGhpcy5maWVsZC5mb3JFYWNoKChyb3csIHkpPT5cblx0XHRcdHJvdy5mb3JFYWNoKCh7cGllY2V9LCB4KT0+e1xuXHRcdFx0XHRpZighcGllY2UpIHJldHVybjtcblx0XHRcdFx0cGllY2UuaXNNb3ZlZCA9IGZpZWxkTW92ZWRbeV1beF07XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHQvKiog6KiY6Yyy44Gu5omL44KS5oi744GZICovXG5cdHVuZG9SZWNvcmQoKXtcblx0XHR0aGlzLiNzd2l0Y2hSZWNvcmQoLTEpO1xuXHR9XG5cblx0LyoqIOiomOmMsuOBruaJi+OCkumAsuOCgeOCiyAqL1xuXHRyZWRvUmVjb3JkKCl7XG5cdFx0dGhpcy4jc3dpdGNoUmVjb3JkKDEpO1xuXHR9XG5cblx0LyoqIOaji+itnOOCkuODhuOCreOCueODiOOBp+WPluW+l1xuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0Z2V0VGV4dFJlY29yZCgpe1xuXHRcdGNvbnN0IGdldFBYID0gKHtwWH0pPT4gcFggPT0gbnVsbD8gXCIqXCI6ICh0aGlzLnhMZW4tcFgpLnRvU3RyaW5nKDM2KTtcblx0XHRjb25zdCBnZXRQWSA9ICh7cFl9KT0+IHBZID09IG51bGw/IFwiKlwiOiAocFkrMSkudG9TdHJpbmcoMzYpO1xuXHRcdHJldHVybiB0aGlzLnJlY29yZC5zbGljZSgxLCB0aGlzLnR1cm4rMSkubWFwKFxuXHRcdFx0KHt0bywgZnJvbSwgZGVnLCBwaWVjZUNoYXIsIGVuZH0sIGkpPT5gJHtcblx0XHRcdFx0aX06ICR7XG5cdFx0XHRcdFBpZWNlLmRlZ0NoYXJzW2RlZ119JHtcblx0XHRcdFx0Z2V0UFgodG8pfSR7XG5cdFx0XHRcdGdldFBZKHRvKX0ke1xuXHRcdFx0XHRwaWVjZUNoYXJ9JHtcblx0XHRcdFx0ZW5kfSAoJHtcblx0XHRcdFx0Z2V0UFgoZnJvbSl9JHtcblx0XHRcdFx0Z2V0UFkoZnJvbSl9KWBcblx0XHQpLmpvaW4oXCJcXG5cIik7XG5cdH1cblxuXHQvKiog55uk44KS5o+P5YaZICovXG5cdGRyYXcoKXtcblx0XHRjb25zdCB7Y3R4LCBjYW52YXMsIGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCwgcGFuZWxXaWR0aCwgcGFuZWxIZWlnaHR9ID0gdGhpcztcblxuXHRcdC8v5pyA5Yid44Gu6KiY6YyyXG5cdFx0aWYodGhpcy50dXJuID09PSAwKSB0aGlzLmFkZFJlY29yZCh7aW5jOiAwfSk7XG5cblx0XHQvLyDmj4/lhpnjgpLliJ3mnJ/ljJZcblx0XHRjdHgucmVzdG9yZSgpO1xuXHRcdGN0eC5zYXZlKCk7XG5cdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXHRcdGN0eC5maWxsU3R5bGUgPSB0aGlzLmNhbnZhc0JhY2tncm91bmRDb2xvcjtcblx0XHRjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuXHRcdC8vIOWkluaeoOOCkuaPj+WGmVxuXHRcdGN0eC5maWxsU3R5bGUgPSB0aGlzLmJhY2tncm91bmRDb2xvcjtcblx0XHRjdHgubGluZVdpZHRoID0gdGhpcy5ib3JkZXJXaWR0aDtcblx0XHRjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmJvcmRlckNvbG9yO1xuXG5cdFx0Y3R4LnNhdmUoKTtcblx0XHRjdHgudHJhbnNsYXRlKGxlZnQsIHRvcCk7XG5cdFx0Y3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuXHRcdGN0eC5zdHJva2VSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuXHRcdGN0eC50cmFuc2xhdGUocGFuZWxXaWR0aC8yLCBwYW5lbEhlaWdodC8yKTtcblx0XHRjdHguc3Ryb2tlUmVjdCgwLCAwLCB3aWR0aC1wYW5lbFdpZHRoLCBoZWlnaHQtcGFuZWxIZWlnaHQpO1xuXHRcdGN0eC5yZXN0b3JlKCk7XG5cdFx0dGhpcy5zdGFuZC5kcmF3KCk7XG5cblx0XHQvLyDjg57jgrnnm67jgpLmj4/lhplcblx0XHR0aGlzLmZpZWxkLmZvckVhY2gocm93PT57XG5cdFx0XHRyb3cuZm9yRWFjaChwYW5lbD0+e1xuXHRcdFx0XHRwYW5lbC5kcmF3KCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRpZih0aGlzLm9uRHJhd2VkKSB0aGlzLm9uRHJhd2VkKHRoaXMpO1xuXHR9XG5cblx0LyoqIOmnkumFjee9ruOCkuODhuOCreOCueODiOOBp+WPluW+l1xuXHQgKiBAcGFyYW0ge1wiZGVmYXVsdFwifFwiY29tcGFjdFwifFwiYm9kXCJ9IGlzQ29tcGFjdCAtIOODhuOCreOCueODiOW9ouW8j1xuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQWxpYXMgLSDjgqjjgqTjg6rjgqLjgrnooajnpLpcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGdldFRleHQobW9kZT1cImRlZmF1bHRcIiwgaXNBbGlhcz1mYWxzZSl7XG5cdFx0cmV0dXJuIG1vZGUgPT09IFwiYm9kXCI/XG5cdFx0XHRCb2QuZ2V0VGV4dCh0aGlzKTpcblx0XHRcdHRoaXMudG9TdHJpbmcobW9kZSA9PT0gXCJjb21wYWN0XCIsIGlzQWxpYXMpO1xuXHR9XG5cblx0LyoqIOmnkumFjee9ruOCkuODhuOCreOCueODiOOBp+WPluW+l1xuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQ29tcGFjdCAtIOOCs+ODs+ODkeOCr+ODiOihqOekulxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQWxpYXMgLSDjgqjjgqTjg6rjgqLjgrnooajnpLpcblx0ICovXG5cdHRvU3RyaW5nKGlzQ29tcGFjdD1mYWxzZSwgaXNBbGlhcz1mYWxzZSl7XG5cdFx0Y29uc3Qge3hMZW59ID0gdGhpcztcblxuXHRcdGxldCBoZWFkZXIgPSBcIlwiO1xuXHRcdGxldCBmb290ZXIgPSBcIlwiO1xuXHRcdGxldCBwYW5lbE91dGVyID0gXCJcIjtcblx0XHRsZXQgcGFuZWxTZXAgPSBcIlwiO1xuXHRcdGxldCByb3dTZXAgPSBcIlxcblwiO1xuXG5cdFx0aWYoIWlzQ29tcGFjdCl7XG5cdFx0XHRoZWFkZXIgPSBg4pSPJHtBcnJheSh4TGVuKS5maWxsKFwi4pSB4pSBXCIpLmpvaW4oXCLilK9cIil94pSTXFxuYDtcblx0XHRcdGZvb3RlciA9IGBcXG7ilJcke0FycmF5KHhMZW4pLmZpbGwoXCLilIHilIFcIikuam9pbihcIuKUt1wiKX3ilJtgO1xuXHRcdFx0cGFuZWxPdXRlciA9IFwi4pSDXCI7XG5cdFx0XHRwYW5lbFNlcCA9IFwi4pSCXCI7XG5cdFx0XHRyb3dTZXAgPSBgXFxu4pSgJHtBcnJheSh4TGVuKS5maWxsKFwi4pSA4pSAXCIpLmpvaW4oXCLilLxcIil94pSoXFxuYDtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0aGVhZGVyK1xuXHRcdFx0dGhpcy5maWVsZC5tYXAocm93PT5cblx0XHRcdFx0cGFuZWxPdXRlcitcblx0XHRcdFx0cm93Lm1hcChwYW5lbD0+XG5cdFx0XHRcdFx0cGFuZWwucGllY2U/LnRvU3RyaW5nKGlzQWxpYXMpID8/IHBhbmVsLnRvU3RyaW5nKGlzQ29tcGFjdClcblx0XHRcdFx0KS5qb2luKHBhbmVsU2VwKStcblx0XHRcdFx0cGFuZWxPdXRlclxuXHRcdFx0KS5qb2luKHJvd1NlcCkrXG5cdFx0XHRmb290ZXIrXG5cdFx0XHR0aGlzLnN0YW5kLnRvU3RyaW5nKGlzQ29tcGFjdClcblx0XHQpO1xuXHR9XG5cblx0LyoqIOeUu+WDj+OCkuWPluW+l1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgLSDjg5XjgqHjgqTjg6vlkI1cblx0ICogQHBhcmFtIHtzdHJpbmd9IGV4dCAtIOaLoeW8teWtkFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cblx0ICovXG5cdGFzeW5jIGRvd25sb2FkSW1hZ2UoZmlsZU5hbWUsIGV4dCl7XG5cdFx0YXdhaXQgZG93bmxvYWRJbWFnZSh0aGlzLmNhbnZhcywgZmlsZU5hbWUsIGV4dCk7XG5cdH1cbn1cbiJdLCJuYW1lcyI6WyJjYW52YXNGb250IiwiZ2FtZVNvZnQiLCJnYW1lcyIsImJvYXJkcyIsInBhbmVscyIsInBpZWNlcyIsInBpZWNlUmFuZ2UiLCJwaWVjZUNvc3QiLCJiYXNlIiwiaW1wb3J0SnNvbiIsIm5hbWUiLCJ4aHIiLCJqc29uIiwiZ2V0Q2hhcnMiLCJkaXNwbGF5VGV4dCIsImRpc3BsYXkiLCJnb29nbGVVcmwiLCJjaGFycyIsInVuaXF1ZSIsIm8iLCJmb250TmFtZSIsImZvbnRXZWlnaHQiLCJmb250TmFtZVBsdXMiLCJmb250VXJsIiwicmVzIiwibWF0Y2hVcmxzIiwidXJsIiwiZm9udEZhY2UiLCJfIiwibG9hZEltYWdlIiwic3JjIiwicmVzb2x2ZSIsImltYWdlIiwiaW1nU3JjcyIsImltZ1NyYyIsImNhbnZhc0ltYWdlIiwiZ2V0TWltZSIsImV4dCIsImRvd25sb2FkSW1hZ2UiLCJjYW52YXMiLCJmaWxlTmFtZSIsInVybFR5cGUiLCJtaW1lIiwiYSIsIlBhbmVsIiwiI2lzU2VsZWN0ZWQiLCIjdGFyZ2V0UmFuZ2VzIiwiY3R4IiwiY2hhciIsImNlbnRlciIsIm1pZGRsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyV2lkdGgiLCJwWCIsInBZIiwidmFsdWUiLCJyYW5nZU5hbWUiLCJhdHRyTmFtZSIsIngiLCJ5Iiwic2VsZWN0Q29sb3IiLCJ0YXJnZXRDb2xvciIsImxlZnQiLCJ0b3AiLCJ0ZXh0Um90YXRlIiwicmFkIiwiZm9udFNpemUiLCJjb2xvciIsImlzQ29tcGFjdCIsIlBpZWNlIiwia2V5Iiwib3B0aW9uIiwiZXhQaWVjZXMiLCJwaWVjZSIsInByb21vS2V5cyIsInByb21vIiwiaSIsImV4UGllY2VzT2JqIiwiYWxpYXNLZXkiLCJhbGlhcyIsInRleHQiLCJkZWdDaGFyIiwicGllY2VDaGFyIiwiZGVnIiwiX18iLCJiIiwiem9vbSIsImRpc3BsYXlQdG4iLCJzaXplIiwidXNlUmFua1NpemUiLCJpc0RyYXdTaGFkb3ciLCJpc01vdmVkIiwicm5nIiwicm93IiwiZSIsInJhbmdlIiwidHJhbnNwb3NlIiwiYyIsInIiLCJpbWdXaWR0aCIsImltZ0hlaWdodCIsImdhbWUiLCJmb250Q29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsInYiLCJpc0FsaWFzIiwicmFuZ2VPcHRpb25zIiwiY2VudGVyQ2hhcnMiLCJwb2ludENoYXJzIiwibGluZXJDaGFycyIsImdldE9yaWdpbiIsIm9MaXN0Iiwib3duWCIsIm93blkiLCJyWSIsInJYIiwickNoYXIiLCJpc093biIsImNoZWNrVGFyZ2V0IiwiYm9hcmQiLCJmaWVsZCIsInlMZW4iLCJlblBhc3NhbnQiLCJpbkZpZWxkIiwiaXNWc1BvIiwicGFuZWwiLCJpc0F0dGFja0Zyb21QYW8iLCJjYW5Nb3ZlIiwiaXNBdHRhY2siLCJjaGVja1JpdmFsRGVnIiwiZXhpc3RzQ2hpbGQiLCJjaGlsZCIsIm9YIiwib1kiLCJzZXRUYXJnZXQiLCJtb3ZlUG9pbnQiLCJwYXJlbnQiLCJtb3ZlTGluZXIiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImptcHMiLCJtb3ZlcyIsImlzTW92ZUluZiIsImptcENudCIsIm1vdmVDbnQiLCJpbmNYIiwiaW5jWSIsIl94IiwiX3kiLCJpc0p1bXBlZCIsInJhbmdlTWFwIiwicmFuZ2VPcHRpb24iLCJvcmlnaW4iLCJ1SUNvbnRyb2wiLCJpc0NsaWNrIiwibGFzdFhZIiwic2VsZWN0UGFuZWwiLCJzZWxlY3RTdGFuZCIsImZpZWxkUHJvYyIsImZuUGFuZWwiLCJmbkFmdGVyIiwidmlld1N0eWxlIiwicmVjdCIsImRyYWdTdGFydCIsInN0b2NrIiwiZHJhZ01vdmUiLCJkcmFnRW5kIiwiQm9kIiwiI2RlZzJQaWVjZUNoYXJzIiwiI2RlZzJQaWVjZVJlZ2V4ZXMiLCIjcGllY2VDaGFyMkRlZ3MiLCIjZGVnMlN0YW5kVGl0bGVzIiwiI3N0YW5kVGl0bGUyRGVncyIsIiNrYW5JIiwiI2thblgiLCIjbnVtMkthbiIsIm51bSIsInZpZXdPbmUiLCIja2FuMk51bSIsImthbiIsImVtcHR5T25lIiwiI251bTJaZW4iLCJ6ZW4iLCIjcGFuZWxUZXh0IiwiI2dldFBpZWNlVGV4dCIsIiNnZXRTdGFuZFRleHQiLCJzdGFuZCIsImNvdW50ZXIiLCJjbnQiLCJib2FyZExpbmVzIiwic3RhbmRMaW5lcyIsImxpbmUiLCJ0aXRsZSIsImJvYXJkU3RyIiwiYm9kQ2hhciIsInN0YW5kU3RyIiwicGFyYW1TdHIiLCJwYXJhbSIsInhMZW4iLCJwbGF5ZXJzIiwiaGVhZGVyIiwiZm9vdGVyIiwicGFuZWxPdXRlciIsInBhbmVsU2VwIiwicm93U2VwIiwic3RhbmRIZWFkZXIiLCJzdGFuZEZvb3RlciIsIlN0YW5kIiwiI2RlZ09yZGVyIiwicmlnaHQiLCJib3R0b20iLCJwYW5lbFdpZHRoIiwicGFuZWxIZWlnaHQiLCJ0b1BhbmVsIiwid2lubmVyUGllY2UiLCJsb3NlclBpZWNlIiwiZm9yY2VDYXB0dXJlIiwiZm9yY2VDYW50Q2FwdHVyZSIsInBpdGNoV2lkdGgiLCJwaXRjaEhlaWdodCIsInBsYXllciIsImhlYWQiLCJwIiwiZGVncyIsImdldEluaXQiLCJFblBhc3NhbnQiLCJlcCIsIkJvYXJkIiwicGxheUJvYXJkIiwicGxheVBpZWNlcyIsIm9uRHJhd2VkIiwiZ2FtZU5hbWUiLCJwaWVjZVNldCIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiY2FudmFzRml0IiwiYm9hcmRMZWZ0IiwiYm9hcmRUb3AiLCJwaWVjZVNpemUiLCJ1c2VTdGFuZCIsImF1dG9EcmF3aW5nIiwib25HYW1lT3ZlciIsImZyZWVNb2RlIiwiY2FudmFzRm9udEFzeW5jIiwiY2FudmFzSW1hZ2VBc3luYyIsInN0eWxlIiwiI2RlZ05vcm1hbCIsInBsYXllYUlkT3JEZWciLCJwbGF5ZXJJZCIsInBvcyIsInN0YW5kVGl0bGUiLCJ0ZXh0cyIsInN0YW5kVGV4dHMiLCJvZmZzZXREZWciLCJwcm9tb0xpbmUiLCJmb3JjZVByb21vTGluZSIsImQiLCIjZW1pdEdhbWVPdmVyIiwiZ2FtZUFsaXZlIiwiI3Byb21vRGlhbG9nIiwiZnJvbVBhbmVsIiwiY2FuUHJvbW8iLCJmb3JjZVByb21vIiwiYWZ0ZXJQcm9tbyIsInJlY29yZCIsImVuZCIsImluYyIsIiNzd2l0Y2hSZWNvcmQiLCJmaWVsZFRleHQiLCJmaWVsZE1vdmVkIiwiZ2V0UFgiLCJnZXRQWSIsInRvIiwiZnJvbSIsIm1vZGUiXSwibWFwcGluZ3MiOiJBQUFBLE1BQWVBLElBQUE7QUFBQSxFQUNkLE9BQVM7QUFBQSxJQUNSLENBQUMsaUJBQWlCLEdBQUc7QUFBQSxJQUNyQixDQUFD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YUFBYTtBQUFBLFVBQ1o7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELGVBQWU7QUFBQSxVQUNkO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxhQUFhO0FBQUEsVUFDWjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsZUFBZTtBQUFBLFVBQ2Q7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELGFBQWE7QUFBQSxVQUNaO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxlQUFlO0FBQUEsVUFDZDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsWUFBWTtBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELGNBQWM7QUFBQSxVQUNiO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxZQUFZO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsY0FBYztBQUFBLFVBQ2I7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELGFBQWE7QUFBQSxVQUNaO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxlQUFlO0FBQUEsVUFDZDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsYUFBYTtBQUFBLFVBQ1o7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELGVBQWU7QUFBQSxVQUNkO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxhQUFhO0FBQUEsVUFDWjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsZUFBZTtBQUFBLFVBQ2Q7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELGFBQWE7QUFBQSxVQUNaO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxlQUFlO0FBQUEsVUFDZDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0Qsa0JBQWtCO0FBQUEsVUFDakI7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELG9CQUFvQjtBQUFBLFVBQ25CO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxrQkFBa0I7QUFBQSxVQUNqQjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0Qsb0JBQW9CO0FBQUEsVUFDbkI7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELEtBQU87QUFBQSxVQUNOO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxPQUFTO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsTUFBUTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELFFBQVU7QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxLQUFPO0FBQUEsVUFDTjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELElBQU07QUFBQSxVQUNMO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxNQUFRO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxNQUNELElBQU07QUFBQSxRQUNMLGFBQWE7QUFBQSxVQUNaO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxlQUFlO0FBQUEsVUFDZDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsYUFBYTtBQUFBLFVBQ1o7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELGVBQWU7QUFBQSxVQUNkO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxNQUFRO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELFFBQVU7QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsTUFBUTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELFFBQVU7QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLE1BQ0QsSUFBTTtBQUFBLFFBQ0wsS0FBTztBQUFBLFVBQ047QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsT0FBUztBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxNQUNELElBQU07QUFBQSxRQUNMLElBQU07QUFBQSxVQUVMO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLE1BQ0QsSUFBTTtBQUFBLFFBQ0wsSUFBTTtBQUFBLFVBQ0w7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELEtBQU87QUFBQSxVQUNOO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxPQUFTO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxNQUNELElBQU07QUFBQSxRQUNMLElBQU07QUFBQSxVQUNMO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFB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QUFNO0FBQUEsVUFDTDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxNQUNELElBQU07QUFBQSxRQUNMLElBQU07QUFBQSxVQUNMO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBQ0QsTUFBUTtBQUFBLElBQ1AsU0FBVztBQUFBLElBQ1gsV0FBYTtBQUFBLElBQ2IsaUJBQW1CO0FBQUEsSUFDbkIsVUFBWTtBQUFBLE1BQ1gsR0FBSztBQUFBLFFBQ0osU0FBVztBQUFBLFVBQ1Y7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxNQUFNO0FBQUEsVUFDTDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELE1BQVE7QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsUUFBVTtBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxNQUFRO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELFFBQVU7QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsTUFBUTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxRQUFVO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNEO0FBQUEsTUFDRCxHQUFLO0FBQUEsUUFDSixTQUFXO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELE1BQU07QUFBQSxVQUNMO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsTUFBUTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxRQUFVO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELE1BQVE7QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsUUFBVTtBQUFBLFVBQ1Q7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxNQUFRO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELFFBQVU7QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxNQUNELElBQU07QUFBQSxRQUNMLElBQU07QUFBQSxVQUNMO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLE1BQ0QsSUFBTTtBQUFBLFFBQ0wsSUFBTTtBQUFBLFVBQ0w7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNEO0FBQUEsTUFDRCxJQUFNO0FBQUEsUUFDTCxJQUFNO0FBQUEsVUFDTDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUNELFFBQVU7QUFBQSxJQUNULFNBQVc7QUFBQSxJQUNYLFdBQWE7QUFBQSxJQUNiLGlCQUFtQjtBQUFBLElBQ25CLFdBQWE7QUFBQSxJQUNiLFVBQVk7QUFBQSxNQUNYLEdBQUs7QUFBQSxRQUNKLFNBQVc7QUFBQSxVQUNWO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxNQUFNO0FBQUEsVUFDTDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxNQUNELEdBQUs7QUFBQSxRQUNKLFNBQVc7QUFBQSxVQUNWO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRCxNQUFNO0FBQUEsVUFDTDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxNQUNELElBQU07QUFBQSxRQUNMLElBQU07QUFBQSxVQUNMO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLE1BQ0QsSUFBTTtBQUFBLFFBQ0wsSUFBTTtBQUFBLFVBQ0w7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNEO0FBQUEsTUFDRCxJQUFNO0FBQUEsUUFDTCxJQUFNO0FBQUEsVUFDTDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBQ0QsUUFBVTtBQUFBLElBQ1QsU0FBVztBQUFBLElBQ1gsV0FBYTtBQUFBLElBQ2IsaUJBQW1CO0FBQUEsSUFDbkIsV0FBYTtBQUFBLElBQ2IsVUFBWTtBQUFBLE1BQ1gsR0FBSztBQUFBLFFBQ0osU0FBVztBQUFBLFVBQ1Y7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsTUFBTTtBQUFBLFVBQ0w7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0QsSUFBTTtBQUFBLFVBQ0w7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxNQUNELEdBQUs7QUFBQSxRQUNKLFNBQVc7QUFBQSxVQUNWO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNELE1BQU07QUFBQSxVQUNMO0FBQUEsVUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNEO0FBQUEsTUFDRCxJQUFNO0FBQUEsUUFDTCxJQUFNO0FBQUEsVUFDTDtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLE1BQ0QsSUFBTTtBQUFBLFFBQ0wsSUFBTTtBQUFBLFVB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QTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRDtBQUFBLEVBQ0QsTUFBUTtBQUFBLElBQ1AsaUJBQW1CO0FBQUEsSUFDbkIsYUFBZTtBQUFBLElBQ2YsV0FBYTtBQUFBLElBQ2IsT0FBUztBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNEO0FBQUEsRUFDRCxRQUFVO0FBQUEsSUFDVCxpQkFBbUI7QUFBQSxJQUNuQixhQUFlO0FBQUEsSUFDZixPQUFTO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRDtBQUFBLEVBQ0QsUUFBVTtBQUFBLElBQ1QsaUJBQW1CO0FBQUEsSUFDbkIsYUFBZTtBQUFBLElBQ2YsT0FBUztBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNEO0FBQUEsRUFDRCxVQUFZO0FBQUEsSUFDWCxpQkFBbUI7QUFBQSxJQUNuQixhQUFlO0FBQUEsSUFDZixPQUFTO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRDtBQUFBLEVBQ0QsVUFBWTtBQUFBLElBQ1gsaUJBQW1CO0FBQUEsSUFDbkIsYUFBZTtBQUFBLElBQ2YsT0FBUztBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNEO0FBQUEsRUFDRCxVQUFZO0FBQUEsSUFDWCxpQkFBbUI7QUFBQSxJQUNuQixhQUFlO0FBQUEsSUFDZixPQUFTO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNEO0FBQUEsRUFDRCxZQUFZO0FBQUEsSUFDWCxpQkFBbUI7QUFBQSxJQUNuQixhQUFlO0FBQUEsSUFDZixpQkFBbUI7QUFBQSxJQUNuQixPQUFTO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRDtBQUFBLEVBQ0QsWUFBWTtBQUFBLElBQ1gsaUJBQW1CO0FBQUEsSUFDbkIsYUFBZTtBQUFBLElBQ2YsaUJBQW1CO0FBQUEsSUFDbkIsT0FBUztBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNEO0FBQUEsRUFDRCxjQUFjO0FBQUEsSUFDYixpQkFBbUI7QUFBQSxJQUNuQixhQUFlO0FBQUEsSUFDZixpQkFBbUI7QUFBQSxJQUNuQixPQUFTO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRDtBQUNGLEdDaGhCZUMsSUFBQTtBQUFBLEVBQ2QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsTUFBUTtBQUFBLElBQ1IsaUJBQW1CO0FBQUEsSUFDbkIsYUFBZTtBQUFBLEVBQ2Y7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKLE1BQVE7QUFBQSxJQUNSLE1BQVE7QUFBQSxJQUNSLGlCQUFtQjtBQUFBLElBQ25CLGFBQWU7QUFBQSxJQUNmLE1BQVEsQ0FBQyxhQUFhO0FBQUEsRUFDdEI7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKLE1BQVE7QUFBQSxJQUNSLE1BQVE7QUFBQSxJQUNSLGlCQUFtQjtBQUFBLElBQ25CLGFBQWU7QUFBQSxFQUNmO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixNQUFRO0FBQUEsSUFDUixpQkFBbUI7QUFBQSxJQUNuQixhQUFlO0FBQUEsRUFDZjtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsTUFBUTtBQUFBLElBQ1IsaUJBQW1CO0FBQUEsSUFDbkIsYUFBZTtBQUFBLEVBQ2Y7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKLE1BQVE7QUFBQSxJQUNSLE1BQVE7QUFBQSxJQUNSLGlCQUFtQjtBQUFBLElBQ25CLGFBQWU7QUFBQSxFQUNmO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixNQUFRO0FBQUEsSUFDUixpQkFBbUI7QUFBQSxJQUNuQixhQUFlO0FBQUEsSUFDZixNQUFRLENBQUMsU0FBUztBQUFBLEVBQ2xCO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixNQUFRO0FBQUEsSUFDUixpQkFBbUI7QUFBQSxJQUNuQixhQUFlO0FBQUEsSUFDZixNQUFRLENBQUMsU0FBUztBQUFBLEVBQ2xCO0FBQUEsRUFDRCxLQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixNQUFRO0FBQUEsSUFDUixpQkFBbUI7QUFBQSxJQUNuQixhQUFlO0FBQUEsSUFDZixXQUFhO0FBQUEsRUFDYjtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsTUFBUTtBQUFBLElBQ1IsaUJBQW1CO0FBQUEsSUFDbkIsYUFBZTtBQUFBLEVBQ2Y7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKLE1BQVE7QUFBQSxJQUNSLE1BQVE7QUFBQSxJQUNSLGlCQUFtQjtBQUFBLElBQ25CLGFBQWU7QUFBQSxFQUNmO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixNQUFRO0FBQUEsSUFDUixpQkFBbUI7QUFBQSxJQUNuQixhQUFlO0FBQUEsRUFDZjtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsTUFBUTtBQUFBLElBQ1IsaUJBQW1CO0FBQUEsSUFDbkIsYUFBZTtBQUFBLEVBQ2Y7QUFBQSxFQUNELEtBQUs7QUFBQSxJQUNKLE1BQVE7QUFBQSxJQUNSLE1BQVE7QUFBQSxJQUNSLGlCQUFtQjtBQUFBLElBQ25CLGFBQWU7QUFBQSxFQUNmO0FBQUEsRUFDRCxLQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixNQUFRO0FBQUEsSUFDUixpQkFBbUI7QUFBQSxJQUNuQixhQUFlO0FBQUEsSUFDZixhQUFlO0FBQUEsSUFDZixZQUFjO0FBQUEsRUFDZDtBQUFBLEVBQ0QsS0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsTUFBUTtBQUFBLElBQ1IsaUJBQW1CO0FBQUEsSUFDbkIsYUFBZTtBQUFBLElBQ2YsYUFBZTtBQUFBLElBQ2YsWUFBYztBQUFBLEVBQ2Q7QUFBQSxFQUNELEtBQUs7QUFBQSxJQUNKLE1BQVE7QUFBQSxJQUNSLE1BQVE7QUFBQSxJQUNSLGlCQUFtQjtBQUFBLElBQ25CLGFBQWU7QUFBQSxJQUNmLE1BQVEsQ0FBQyxRQUFRO0FBQUEsRUFDakI7QUFBQSxFQUNELEtBQUs7QUFBQSxJQUNKLE1BQVE7QUFBQSxJQUNSLE1BQVE7QUFBQSxJQUNSLGlCQUFtQjtBQUFBLElBQ25CLGFBQWU7QUFBQSxJQUNmLGlCQUFtQjtBQUFBLElBQ25CLE1BQVEsQ0FBQyxVQUFVLGFBQWE7QUFBQSxFQUNoQztBQUFBLEVBQ0QsS0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsTUFBUTtBQUFBLElBQ1IsaUJBQW1CO0FBQUEsSUFDbkIsYUFBZTtBQUFBLElBQ2Ysa0JBQW9CO0FBQUEsSUFDcEIsTUFBUSxDQUFDLFVBQVUsYUFBYTtBQUFBLEVBQ2hDO0FBQUEsRUFDRCxLQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixNQUFRO0FBQUEsSUFDUixpQkFBbUI7QUFBQSxJQUNuQixhQUFlO0FBQUEsSUFDZixpQkFBbUI7QUFBQSxJQUNuQixrQkFBb0I7QUFBQSxJQUNwQixNQUFRLENBQUMsVUFBVSxhQUFhO0FBQUEsRUFDaEM7QUFBQSxFQUNELEtBQUk7QUFBQSxJQUNILE1BQVE7QUFBQSxJQUNSLE1BQVE7QUFBQSxJQUNSLGlCQUFtQjtBQUFBLElBQ25CLGFBQWU7QUFBQSxJQUNmLE1BQVEsQ0FBQyxTQUFTO0FBQUEsRUFDbEI7QUFDRixHQ2hKZUMsSUFBQTtBQUFBLEVBQ2QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLElBQUk7QUFBQSxJQUNoQixVQUFZO0FBQUEsSUFDWixNQUFRO0FBQUEsSUFDUixNQUFRLENBQUMsU0FBUztBQUFBLElBQ2xCLGdCQUFrQjtBQUFBLElBQ2xCLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxJQUNYO0FBQUEsSUFDRCxPQUFTO0FBQUEsRUFDVDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLElBQUk7QUFBQSxJQUNoQixVQUFZO0FBQUEsSUFDWixNQUFRO0FBQUEsSUFDUixNQUFRLENBQUMsU0FBUztBQUFBLElBQ2xCLGdCQUFrQjtBQUFBLElBQ2xCLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxJQUNYO0FBQUEsSUFDRCxPQUFTO0FBQUEsRUFDVDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLE1BQU0sSUFBSTtBQUFBLElBQ3RCLFVBQVk7QUFBQSxJQUNaLE1BQVE7QUFBQSxJQUNSLE1BQVEsQ0FBQyxTQUFTO0FBQUEsSUFDbEIsT0FBUztBQUFBLE1BQ1IsU0FBVztBQUFBLElBQ1g7QUFBQSxJQUNELE9BQVM7QUFBQSxFQUNUO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixTQUFXLENBQUMsSUFBSTtBQUFBLElBQ2hCLFVBQVk7QUFBQSxJQUNaLE1BQVE7QUFBQSxJQUNSLE1BQVEsQ0FBQyxTQUFTO0FBQUEsSUFDbEIsT0FBUztBQUFBLE1BQ1IsU0FBVztBQUFBLElBQ1g7QUFBQSxJQUNELE9BQVM7QUFBQSxFQUNUO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixTQUFXLENBQUMsSUFBSTtBQUFBLElBQ2hCLFVBQVk7QUFBQSxJQUNaLE1BQVE7QUFBQSxJQUNSLE1BQVEsQ0FBQyxTQUFTO0FBQUEsSUFDbEIsZ0JBQWtCO0FBQUEsSUFDbEIsT0FBUztBQUFBLE1BQ1IsU0FBVztBQUFBLElBQ1g7QUFBQSxJQUNELE9BQVM7QUFBQSxFQUNUO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixTQUFXLENBQUMsSUFBSTtBQUFBLElBQ2hCLFVBQVk7QUFBQSxJQUNaLE1BQVE7QUFBQSxJQUNSLE1BQVEsQ0FBQyxTQUFTO0FBQUEsSUFDbEIsT0FBUztBQUFBLE1BQ1IsU0FBVztBQUFBLElBQ1g7QUFBQSxJQUNELE9BQVM7QUFBQSxFQUNUO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixTQUFXLENBQUMsTUFBTSxJQUFJO0FBQUEsSUFDdEIsVUFBWTtBQUFBLElBQ1osTUFBUTtBQUFBLElBQ1IsTUFBUSxDQUFDLFNBQVM7QUFBQSxJQUNsQixPQUFTO0FBQUEsTUFDUixTQUFXO0FBQUEsSUFDWDtBQUFBLEVBQ0Q7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKLE1BQVE7QUFBQSxJQUNSLFNBQVcsQ0FBQyxNQUFNLE1BQU0sTUFBTSxJQUFJO0FBQUEsSUFDbEMsT0FBUztBQUFBLElBQ1QsVUFBWTtBQUFBLElBQ1osTUFBUTtBQUFBLElBQ1IsTUFBUSxDQUFDLFFBQVEsU0FBUztBQUFBLElBQzFCLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxJQUNYO0FBQUEsRUFDRDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLE1BQU0sSUFBSTtBQUFBLElBQ3RCLFVBQVk7QUFBQSxJQUNaLE1BQVE7QUFBQSxJQUNSLE1BQVEsQ0FBQyxXQUFXO0FBQUEsSUFDcEIsZ0JBQWtCO0FBQUEsSUFDbEIsT0FBUztBQUFBLE1BQ1IsU0FBVztBQUFBLE1BQ1gsT0FBUztBQUFBLE1BQ1QsUUFBVTtBQUFBLE1BQ1YsV0FBYTtBQUFBLElBQ2I7QUFBQSxJQUNELE9BQVM7QUFBQSxFQUNUO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixTQUFXLENBQUMsTUFBTSxJQUFJO0FBQUEsSUFDdEIsVUFBWTtBQUFBLElBQ1osTUFBUTtBQUFBLElBQ1IsT0FBUztBQUFBLE1BQ1IsU0FBVztBQUFBLElBQ1g7QUFBQSxFQUNEO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixTQUFXLENBQUMsTUFBTSxJQUFJO0FBQUEsSUFDdEIsVUFBWTtBQUFBLElBQ1osTUFBUTtBQUFBLElBQ1IsT0FBUztBQUFBLE1BQ1IsU0FBVztBQUFBLElBQ1g7QUFBQSxFQUNEO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixTQUFXLENBQUMsTUFBTSxJQUFJO0FBQUEsSUFDdEIsVUFBWTtBQUFBLElBQ1osTUFBUTtBQUFBLElBQ1IsTUFBUSxDQUFDLGNBQWM7QUFBQSxJQUN2QixPQUFTO0FBQUEsTUFDUixTQUFXO0FBQUEsTUFDWCxVQUFZO0FBQUEsSUFDWjtBQUFBLEVBQ0Q7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKLE1BQVE7QUFBQSxJQUNSLFNBQVcsQ0FBQyxNQUFNLElBQUk7QUFBQSxJQUN0QixVQUFZO0FBQUEsSUFDWixNQUFRO0FBQUEsSUFDUixPQUFTO0FBQUEsTUFDUixTQUFXO0FBQUEsSUFDWDtBQUFBLEVBQ0Q7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKLE1BQVE7QUFBQSxJQUNSLFNBQVcsQ0FBQyxNQUFNLElBQUk7QUFBQSxJQUN0QixPQUFTO0FBQUEsSUFDVCxVQUFZO0FBQUEsSUFDWixNQUFRO0FBQUEsSUFDUixNQUFRLENBQUMsUUFBUSxjQUFjO0FBQUEsSUFDL0IsT0FBUztBQUFBLE1BQ1IsU0FBVztBQUFBLE1BQ1gsVUFBWTtBQUFBLElBQ1o7QUFBQSxFQUNEO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixTQUFXLENBQUMsTUFBTSxNQUFNLEtBQUssR0FBRztBQUFBLElBQ2hDLFVBQVk7QUFBQSxJQUNaLE1BQVE7QUFBQSxJQUNSLGdCQUFrQjtBQUFBLElBQ2xCLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxJQUNYO0FBQUEsSUFDRCxPQUFTO0FBQUEsRUFDVDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLE1BQU0sTUFBTSxLQUFLLEdBQUc7QUFBQSxJQUNoQyxPQUFTO0FBQUEsSUFDVCxVQUFZO0FBQUEsSUFDWixNQUFRO0FBQUEsSUFDUixNQUFRLENBQUMsS0FBSztBQUFBLElBQ2QsT0FBUztBQUFBLE1BQ1IsU0FBVztBQUFBLE1BQ1gsUUFBVTtBQUFBLElBQ1Y7QUFBQSxFQUNEO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixTQUFXLENBQUMsTUFBTSxNQUFNLE1BQU0sS0FBSyxHQUFHO0FBQUEsSUFDdEMsT0FBUztBQUFBLElBQ1QsVUFBWTtBQUFBLElBQ1osTUFBUTtBQUFBLElBQ1IsT0FBUztBQUFBLE1BQ1IsU0FBVztBQUFBLElBQ1g7QUFBQSxFQUNEO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixTQUFXLENBQUMsTUFBTSxNQUFNLEtBQUssR0FBRztBQUFBLElBQ2hDLFVBQVk7QUFBQSxJQUNaLE1BQVE7QUFBQSxJQUNSLE1BQVEsQ0FBQyxjQUFjO0FBQUEsSUFDdkIsT0FBUztBQUFBLE1BQ1IsU0FBVztBQUFBLElBQ1g7QUFBQSxFQUNEO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixTQUFXLENBQUMsTUFBTSxNQUFNLEtBQUssR0FBRztBQUFBLElBQ2hDLFVBQVk7QUFBQSxJQUNaLE1BQVE7QUFBQSxJQUNSLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxJQUNYO0FBQUEsRUFDRDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLE1BQU0sTUFBTSxLQUFLLEdBQUc7QUFBQSxJQUNoQyxVQUFZO0FBQUEsSUFDWixNQUFRO0FBQUEsSUFDUixNQUFRLENBQUMsVUFBVTtBQUFBLElBQ25CLE9BQVM7QUFBQSxNQUNSLGFBQWU7QUFBQSxJQUNmO0FBQUEsRUFDRDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLE1BQU0sTUFBTSxLQUFLLEdBQUc7QUFBQSxJQUNoQyxPQUFTO0FBQUEsSUFDVCxVQUFZO0FBQUEsSUFDWixNQUFRO0FBQUEsSUFDUixNQUFRLENBQUMsUUFBUSxZQUFZLGFBQWE7QUFBQSxJQUMxQyxPQUFTO0FBQUEsTUFDUixTQUFXO0FBQUEsSUFDWDtBQUFBLEVBQ0Q7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKLE1BQVE7QUFBQSxJQUNSLFNBQVcsQ0FBQyxNQUFNLE1BQU0sS0FBSyxHQUFHO0FBQUEsSUFDaEMsVUFBWTtBQUFBLElBQ1osTUFBUTtBQUFBLElBQ1IsT0FBUztBQUFBLE1BQ1IsU0FBVztBQUFBLE1BQ1gsYUFBZTtBQUFBLElBQ2Y7QUFBQSxFQUNEO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixTQUFXLENBQUMsTUFBTSxHQUFHO0FBQUEsSUFDckIsVUFBWTtBQUFBLElBQ1osTUFBUTtBQUFBLElBQ1IsTUFBUSxDQUFDLElBQUk7QUFBQSxJQUNiLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxNQUNYLGFBQWU7QUFBQSxJQUNmO0FBQUEsRUFDRDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLE1BQU0sTUFBTSxNQUFNLE1BQU0sS0FBSyxLQUFLLEdBQUc7QUFBQSxJQUNqRCxPQUFTO0FBQUEsSUFDVCxVQUFZO0FBQUEsSUFDWixNQUFRO0FBQUEsSUFDUixPQUFTO0FBQUEsTUFDUixTQUFXO0FBQUEsSUFDWDtBQUFBLEVBQ0Q7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKLE1BQVE7QUFBQSxJQUNSLFNBQVcsQ0FBQyxNQUFNLEdBQUc7QUFBQSxJQUNyQixVQUFZO0FBQUEsSUFDWixNQUFRO0FBQUEsSUFDUixPQUFTO0FBQUEsTUFDUixTQUFXO0FBQUEsSUFDWDtBQUFBLEVBQ0Q7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKLE1BQVE7QUFBQSxJQUNSLFNBQVcsQ0FBQyxNQUFNLE1BQU0sTUFBTSxLQUFLLEdBQUc7QUFBQSxJQUN0QyxPQUFTO0FBQUEsSUFDVCxVQUFZO0FBQUEsSUFDWixNQUFRO0FBQUEsSUFDUixPQUFTO0FBQUEsTUFDUixTQUFXO0FBQUEsTUFDWCxhQUFlO0FBQUEsSUFDZjtBQUFBLEVBQ0Q7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKLE1BQVE7QUFBQSxJQUNSLFNBQVcsQ0FBQyxNQUFNLEdBQUc7QUFBQSxJQUNyQixVQUFZO0FBQUEsSUFDWixNQUFRO0FBQUEsSUFDUixNQUFRLENBQUMsVUFBVTtBQUFBLElBQ25CLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxNQUNYLGFBQWU7QUFBQSxJQUNmO0FBQUEsRUFDRDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLE1BQU0sTUFBTSxLQUFLLEdBQUc7QUFBQSxJQUNoQyxPQUFTO0FBQUEsSUFDVCxVQUFZO0FBQUEsSUFDWixNQUFRO0FBQUEsSUFDUixNQUFRLENBQUMsUUFBUSxZQUFZLFdBQVcsV0FBVyxtQkFBbUI7QUFBQSxJQUN0RSxPQUFTO0FBQUEsTUFDUixTQUFXO0FBQUEsTUFDWCxhQUFlO0FBQUEsSUFDZjtBQUFBLEVBQ0Q7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKLE1BQVE7QUFBQSxJQUNSLFNBQVcsQ0FBQyxNQUFNLElBQUk7QUFBQSxJQUN0QixVQUFZO0FBQUEsSUFDWixNQUFRO0FBQUEsSUFDUixnQkFBa0I7QUFBQSxJQUNsQixPQUFTO0FBQUEsTUFDUixTQUFXO0FBQUEsTUFDWCxRQUFVO0FBQUEsSUFDVjtBQUFBLElBQ0QsT0FBUztBQUFBLEVBQ1Q7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKLE1BQVE7QUFBQSxJQUNSLFNBQVcsQ0FBQyxPQUFPLE9BQU8sS0FBSztBQUFBLElBQy9CLFVBQVk7QUFBQSxJQUNaLE1BQVE7QUFBQSxJQUNSLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxJQUNYO0FBQUEsRUFDRDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLE1BQU0sT0FBTyxJQUFJO0FBQUEsSUFDN0IsVUFBWTtBQUFBLElBQ1osTUFBUTtBQUFBLElBQ1IsT0FBUztBQUFBLE1BQ1IsU0FBVztBQUFBLElBQ1g7QUFBQSxFQUNEO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixTQUFXLENBQUMsSUFBSTtBQUFBLElBQ2hCLFVBQVk7QUFBQSxJQUNaLE1BQVE7QUFBQSxJQUNSLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxJQUNYO0FBQUEsRUFDRDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLElBQUk7QUFBQSxJQUNoQixVQUFZO0FBQUEsSUFDWixNQUFRO0FBQUEsSUFDUixPQUFTO0FBQUEsTUFDUixTQUFXO0FBQUEsTUFDWCxPQUFTO0FBQUEsSUFDVDtBQUFBLEVBQ0Q7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKLE1BQVE7QUFBQSxJQUNSLFVBQVk7QUFBQSxJQUNaLFNBQVcsQ0FBQyxNQUFNLE1BQU0sTUFBTSxJQUFJO0FBQUEsSUFDbEMsT0FBUztBQUFBLElBQ1QsTUFBUTtBQUFBLElBQ1IsTUFBUSxDQUFDLFFBQVEsZUFBZTtBQUFBLElBQ2hDLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxJQUNYO0FBQUEsRUFDRDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLE9BQU8sS0FBSztBQUFBLElBQ3hCLFVBQVk7QUFBQSxJQUNaLE1BQVE7QUFBQSxJQUNSLGdCQUFrQjtBQUFBLElBQ2xCLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxNQUNYLFFBQVU7QUFBQSxJQUNWO0FBQUEsSUFDRCxPQUFTO0FBQUEsRUFDVDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLE9BQU8sS0FBSztBQUFBLElBQ3hCLFVBQVk7QUFBQSxJQUNaLE1BQVE7QUFBQSxJQUNSLGdCQUFrQjtBQUFBLElBQ2xCLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxNQUNYLFFBQVU7QUFBQSxJQUNWO0FBQUEsSUFDRCxPQUFTO0FBQUEsRUFDVDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLE9BQU8sS0FBSztBQUFBLElBQ3hCLFVBQVk7QUFBQSxJQUNaLE1BQVE7QUFBQSxJQUNSLGdCQUFrQjtBQUFBLElBQ2xCLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxNQUNYLFFBQVU7QUFBQSxJQUNWO0FBQUEsSUFDRCxPQUFTO0FBQUEsRUFDVDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLE9BQU8sS0FBSztBQUFBLElBQ3hCLFVBQVk7QUFBQSxJQUNaLE1BQVE7QUFBQSxJQUNSLGdCQUFrQjtBQUFBLElBQ2xCLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxNQUNYLFFBQVU7QUFBQSxJQUNWO0FBQUEsSUFDRCxPQUFTO0FBQUEsRUFDVDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLE9BQU8sT0FBTyxLQUFLO0FBQUEsSUFDL0IsT0FBUztBQUFBLElBQ1QsVUFBWTtBQUFBLElBQ1osTUFBUTtBQUFBLElBQ1IsZ0JBQWtCO0FBQUEsSUFDbEIsT0FBUztBQUFBLE1BQ1IsU0FBVztBQUFBLE1BQ1gsUUFBVTtBQUFBLElBQ1Y7QUFBQSxJQUNELE9BQVM7QUFBQSxFQUNUO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixTQUFXLENBQUMsS0FBSztBQUFBLElBQ2pCLFVBQVk7QUFBQSxJQUNaLE1BQVE7QUFBQSxJQUNSLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxJQUNYO0FBQUEsRUFDRDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLEtBQUs7QUFBQSxJQUNqQixVQUFZO0FBQUEsSUFDWixNQUFRO0FBQUEsSUFDUixPQUFTO0FBQUEsTUFDUixTQUFXO0FBQUEsSUFDWDtBQUFBLEVBQ0Q7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKLE1BQVE7QUFBQSxJQUNSLFNBQVcsQ0FBQyxLQUFLO0FBQUEsSUFDakIsVUFBWTtBQUFBLElBQ1osTUFBUTtBQUFBLElBQ1IsT0FBUztBQUFBLE1BQ1IsU0FBVztBQUFBLElBQ1g7QUFBQSxFQUNEO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixTQUFXLENBQUMsSUFBSTtBQUFBLElBQ2hCLFVBQVk7QUFBQSxJQUNaLE1BQVE7QUFBQSxJQUNSLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxJQUNYO0FBQUEsRUFDRDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsVUFBWTtBQUFBLElBQ1osU0FBVyxDQUFDLE9BQU8sT0FBTyxLQUFLO0FBQUEsSUFDL0IsT0FBUztBQUFBLElBQ1QsTUFBUTtBQUFBLElBQ1IsTUFBUSxDQUFDLE1BQU07QUFBQSxJQUNmLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxJQUNYO0FBQUEsRUFDRDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLEtBQUs7QUFBQSxJQUNqQixVQUFZO0FBQUEsSUFDWixNQUFRO0FBQUEsSUFDUixNQUFRLENBQUMsU0FBUztBQUFBLElBQ2xCLGdCQUFrQjtBQUFBLElBQ2xCLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxJQUNYO0FBQUEsSUFDRCxPQUFTO0FBQUEsRUFDVDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLEtBQUs7QUFBQSxJQUNqQixVQUFZO0FBQUEsSUFDWixNQUFRO0FBQUEsSUFDUixNQUFRLENBQUMsU0FBUztBQUFBLElBQ2xCLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxJQUNYO0FBQUEsRUFDRDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLEtBQUs7QUFBQSxJQUNqQixVQUFZO0FBQUEsSUFDWixNQUFRO0FBQUEsSUFDUixNQUFRLENBQUMsU0FBUztBQUFBLElBQ2xCLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxJQUNYO0FBQUEsRUFDRDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLEtBQUs7QUFBQSxJQUNqQixVQUFZO0FBQUEsSUFDWixNQUFRO0FBQUEsSUFDUixNQUFRLENBQUMsUUFBUSxXQUFXLGFBQWE7QUFBQSxJQUN6QyxPQUFTO0FBQUEsTUFDUixTQUFXO0FBQUEsSUFDWDtBQUFBLEVBQ0Q7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKLE1BQVE7QUFBQSxJQUNSLFNBQVcsQ0FBQyxHQUFHO0FBQUEsSUFDZixVQUFZO0FBQUEsSUFDWixXQUFhO0FBQUEsSUFDYixNQUFRO0FBQUEsSUFDUixNQUFRLENBQUMsU0FBUztBQUFBLElBQ2xCLGdCQUFrQjtBQUFBLElBQ2xCLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxJQUNYO0FBQUEsSUFDRCxPQUFTO0FBQUEsRUFDVDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLEdBQUc7QUFBQSxJQUNmLFVBQVk7QUFBQSxJQUNaLFdBQWE7QUFBQSxJQUNiLE1BQVE7QUFBQSxJQUNSLE1BQVEsQ0FBQyxTQUFTO0FBQUEsSUFDbEIsT0FBUztBQUFBLE1BQ1IsU0FBVztBQUFBLElBQ1g7QUFBQSxFQUNEO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSixNQUFRO0FBQUEsSUFDUixTQUFXLENBQUMsR0FBRztBQUFBLElBQ2YsVUFBWTtBQUFBLElBQ1osV0FBYTtBQUFBLElBQ2IsTUFBUTtBQUFBLElBQ1IsTUFBUSxDQUFDLFNBQVM7QUFBQSxJQUNsQixPQUFTO0FBQUEsTUFDUixTQUFXO0FBQUEsSUFDWDtBQUFBLEVBQ0Q7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKLE1BQVE7QUFBQSxJQUNSLFNBQVcsQ0FBQyxJQUFJO0FBQUEsSUFDaEIsVUFBWTtBQUFBLElBQ1osV0FBYTtBQUFBLElBQ2IsTUFBUTtBQUFBLElBQ1IsTUFBUSxDQUFDLFNBQVM7QUFBQSxJQUNsQixPQUFTO0FBQUEsTUFDUixTQUFXO0FBQUEsSUFDWDtBQUFBLEVBQ0Q7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKLE1BQVE7QUFBQSxJQUNSLFNBQVcsQ0FBQyxJQUFJO0FBQUEsSUFDaEIsVUFBWTtBQUFBLElBQ1osV0FBYTtBQUFBLElBQ2IsTUFBUTtBQUFBLElBQ1IsTUFBUSxDQUFDLFNBQVM7QUFBQSxJQUNsQixPQUFTO0FBQUEsTUFDUixTQUFXO0FBQUEsSUFDWDtBQUFBLEVBQ0Q7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKLE1BQVE7QUFBQSxJQUNSLFNBQVcsQ0FBQyxHQUFHO0FBQUEsSUFDZixVQUFZO0FBQUEsSUFDWixXQUFhO0FBQUEsSUFDYixNQUFRO0FBQUEsSUFDUixNQUFRLENBQUMsU0FBUztBQUFBLElBQ2xCLGdCQUFrQjtBQUFBLElBQ2xCLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxJQUNYO0FBQUEsSUFDRCxPQUFTO0FBQUEsRUFDVDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLEdBQUc7QUFBQSxJQUNmLFVBQVk7QUFBQSxJQUNaLFdBQWE7QUFBQSxJQUNiLE1BQVE7QUFBQSxJQUNSLE1BQVEsQ0FBQyxRQUFRLFdBQVcsYUFBYTtBQUFBLElBQ3pDLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxJQUNYO0FBQUEsRUFDRDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLElBQUk7QUFBQSxJQUNoQixVQUFZO0FBQUEsSUFDWixXQUFhO0FBQUEsSUFDYixNQUFRO0FBQUEsSUFDUixNQUFRLENBQUMsU0FBUztBQUFBLElBQ2xCLGdCQUFrQjtBQUFBLElBQ2xCLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxJQUNYO0FBQUEsSUFDRCxPQUFTO0FBQUEsRUFDVDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLElBQUk7QUFBQSxJQUNoQixVQUFZO0FBQUEsSUFDWixXQUFhO0FBQUEsSUFDYixNQUFRO0FBQUEsSUFDUixNQUFRLENBQUMsU0FBUztBQUFBLElBQ2xCLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxJQUNYO0FBQUEsSUFDRCxPQUFTO0FBQUEsRUFDVDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLElBQUk7QUFBQSxJQUNoQixVQUFZO0FBQUEsSUFDWixXQUFhO0FBQUEsSUFDYixNQUFRO0FBQUEsSUFDUixNQUFRLENBQUMsU0FBUztBQUFBLElBQ2xCLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxJQUNYO0FBQUEsSUFDRCxPQUFTO0FBQUEsRUFDVDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLElBQUk7QUFBQSxJQUNoQixVQUFZO0FBQUEsSUFDWixXQUFhO0FBQUEsSUFDYixNQUFRO0FBQUEsSUFDUixNQUFRLENBQUMsU0FBUztBQUFBLElBQ2xCLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxJQUNYO0FBQUEsRUFDRDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLElBQUk7QUFBQSxJQUNoQixVQUFZO0FBQUEsSUFDWixXQUFhO0FBQUEsSUFDYixNQUFRO0FBQUEsSUFDUixNQUFRLENBQUMsU0FBUztBQUFBLElBQ2xCLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxJQUNYO0FBQUEsRUFDRDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLElBQUk7QUFBQSxJQUNoQixVQUFZO0FBQUEsSUFDWixXQUFhO0FBQUEsSUFDYixNQUFRO0FBQUEsSUFDUixNQUFRLENBQUMsU0FBUztBQUFBLElBQ2xCLE9BQVM7QUFBQSxNQUNSLFNBQVc7QUFBQSxJQUNYO0FBQUEsSUFDRCxPQUFTO0FBQUEsRUFDVDtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0osTUFBUTtBQUFBLElBQ1IsU0FBVyxDQUFDLElBQUk7QUFBQSxJQUNoQixVQUFZO0FBQUEsSUFDWixXQUFhO0FBQUEsSUFDYixNQUFRO0FBQUEsSUFDUixNQUFRLENBQUMsU0FBUztBQUFBLElBQ2xCLE9BQVM7QUFBQSxNQUNSLFNBQVc7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QUFBLEVBQ2QsS0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRCxHQUFLO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNELEdBQUs7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0QsR0FBSztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQ0YsR0M1bEJlQyxJQUFBO0FBQUEsRUFDZCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFLO0FBQUEsRUFDTCxHQUFNO0FBQUEsRUFDTixHQUFNO0FBQUEsRUFDTixHQUFNO0FBQUEsRUFDTixHQUFNO0FBQUEsRUFD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
