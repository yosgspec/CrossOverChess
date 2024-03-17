const Q = "./json/ShogiCross/";
function j(f) {
  const t = new XMLHttpRequest();
  if (t.open("GET", `${Q}${f}.json`, !1), t.send(), t.status === 200)
    return JSON.parse(t.responseText);
  throw new Error("Failed to load JSON");
}
const A = j("canvasFont"), pt = j("gameSoft"), K = j("games"), B = j("boards"), H = j("panels"), X = j("pieces"), _ = j("pieceRange"), tt = j("pieceCost"), et = () => [
  .../* @__PURE__ */ new Set([
    ...Object.values(H).map(({ displayText: f }) => f).join("") + Object.values(X).map(({ display: f }) => f ? f.join("") : "").join("")
  ])
].sort().join("");
Object.assign(A, {
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
    const f = "https://fonts.googleapis.com/css2?family=", t = et(), e = (/* @__PURE__ */ new Date()).getTime().toString();
    return this.names = A.fonts.map((s) => `"${s[0]}${e}"`).join(",") + ",serif", Promise.all(
      A.fonts.map(async ([s, i]) => {
        const r = s.replace(/ /g, "+"), n = `${f}${r}:wght@${i}&text=${t}`, a = await fetch(n);
        if (!a.ok)
          return;
        const h = (await a.text()).match(/url\(.+?\)/g);
        if (!h)
          throw new Error("Not found font.");
        for (const o of h) {
          const l = new FontFace(`${s}${e}`, o);
          document.fonts.add(l), await l.load().catch(() => {
          });
        }
      })
    ).then((s) => this.imported = !0);
  }
});
function st(f) {
  return new Promise((t) => {
    const e = new Image();
    e.src = f, e.onload = () => t(e);
  });
}
const it = [...new Set(
  Object.values(H).flatMap(({ imgSrc: f }) => f ?? []).concat(Object.values(X).flatMap(({ imgSrc: f }) => f ?? []))
)], P = {
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
        it.map(async (f) => {
          this.images[f] = await st(f);
        })
      ).then((f) => this.imported = !0);
  }
}, rt = (f) => "image/" + f.replace("jpg", "jpeg");
async function nt(f, t = "image", e = "png", s = "base64") {
  const i = rt(e), r = document.createElement("a");
  let n;
  s === "blob" ? n = URL.createObjectURL(
    await new Promise((a) => f.toBlob(a), i)
  ) : n = f.toDataURL(i), r.href = n, r.download = `${t}.${e}`, r.click(), s === "blob" && URL.revokeObjectURL(r.href);
}
class ot {
  #t;
  #e;
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
  constructor(t, e, s, i, r, n, a, c, h) {
    Object.assign(this, H[e]), this.ctx = t, this.center = s, this.middle = i, this.width = r, this.height = n, this.left = s - r / 2, this.top = i - n / 2, this.right = s + r / 2, this.bottom = i + n / 2, this.borderWidth = a, this.pX = c, this.pY = h, this.selectColor ??= "#FF000066", this.targetColor ??= "#00FF0066", this.piece = null, this.isSelected = !1, this.clearTarget(), this.attr ??= [];
  }
  /** マス目の選択状態
   * @param {boolean} value
   */
  set isSelected(t) {
    this.#t = this.hasAttr("keepOut") ? !1 : t;
  }
  get isSelected() {
    return this.#t;
  }
  /** マス目の移動可能判定
   * @param {boolean} value
   */
  get isTarget() {
    return 0 < this.#e.length;
  }
  /** マス目の移動先情報をクリア */
  clearTarget() {
    this.#e = [];
  }
  /** マス目の移動先情報を追加
   * @param {string} rangeName - 移動先情報
   */
  addTarget(t) {
    this.#e.push(t);
  }
  /** マス目が移動先情報を持っているか判定
   * @param {string} rangeName - 移動先情報
   * @returns {boolean}
   */
  hasTarget(t) {
    return this.#e.includes(t);
  }
  /** 属性の存在を確認
   * @param {string} attrName - 属性名
   * @returns {boolean}
   */
  hasAttr(t) {
    return this.attr.includes(t);
  }
  /** 座標がマス目に含まれるか判定
   * @param {number} x - X座標
   * @param {number} y - Y座標
   */
  checkRangeMouse(t, e) {
    return this.left <= t && t < this.right && this.top <= e && e < this.bottom;
  }
  /** マス目/マスク/駒を描写 */
  draw() {
    const { selectColor: t, targetColor: e } = this;
    this.imgSrc && P.imported ? this.drawImage() : this.drawPanel(), this.isSelected && this.drawMask(t), this.isTarget && this.drawMask(e), this.piece?.draw();
  }
  /** マス目画像を描写 */
  drawImage() {
    const { ctx: t } = this, e = this.imgSrc, s = P.images[e];
    s && (t.save(), t.translate(this.left, this.top), t.drawImage(s, 0, 0, this.width, this.height), t.restore());
  }
  /** マス目を描写 */
  drawPanel() {
    const { ctx: t, left: e, top: s, center: i, middle: r, width: n, height: a, displayText: c, textRotate: h } = this;
    if (t.fillStyle = this.backgroundColor, t.strokeStyle = this.borderColor, t.lineWidth = this.borderWidth, t.save(), t.translate(e, s), t.fillRect(0, 0, n, a), this.intersect ? (t.lineWidth = this.borderWidth, t.beginPath(), t.moveTo(n / 2, 0), t.lineTo(n / 2, a), t.moveTo(0, a / 2), t.lineTo(n, a / 2), t.closePath(), t.stroke()) : t.strokeRect(0, 0, n, a), t.lineWidth = this.borderWidth / 2, t.beginPath(), this.borderSlashLeft && (t.moveTo(0, 0), t.lineTo(n, a)), this.borderSlashRight && (t.moveTo(n, 0), t.lineTo(0, a)), t.closePath(), t.stroke(), t.restore(), c) {
      t.save(), t.translate(i, r), t.fillStyle = this.borderColor;
      const o = h ? h * Math.PI / 180 : 0;
      t.rotate(o);
      const l = Math.min(this.width, this.height) * 0.6;
      t.font = `${l}px ${A.names}`;
      const g = t.measureText(c).width, p = l / 2 * 0.8;
      t.fillText(c, -g / 2, p), t.restore();
    }
  }
  /** マス目にマスクを描写
   * @param {string} color - カラーエフェクトの色
   */
  drawMask(t) {
    const { ctx: e } = this;
    e.fillStyle = t, e.fillRect(this.left, this.top, this.width, this.height);
  }
  /** マス目をテキスト形式で取得
   * @param {boolean} isCompact - コンパクト表示
   */
  toString(t = !1) {
    return t ? `｜${this.text.slice(-1).replace(/　/g, "・")}` : this.text;
  }
}
class x {
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
  static getPieces(t, e = {}) {
    const s = new Map(Object.entries(JSON.parse(JSON.stringify(X))));
    for (const [r, n] of s)
      n.attr ??= [], n.unit && n.unit !== "成" && (n.base = n);
    for (const [r, n] of s) {
      if (!n.promo || typeof n.promo != "string")
        continue;
      const a = [...n.promo];
      n.promo = {};
      for (const c of a) {
        const h = s.get(c);
        h.attr.push("promoted"), h.unit = "成", n.promo[c] = h, s.set(c, { ...n, ...h });
      }
    }
    [...s].forEach(([r, n], a) => {
      n.id = a, n.char = r, s.set(r, new x(t, n, e));
    });
    const i = Object.fromEntries(s);
    for (const [r, n] of s)
      n.alias.forEach((a, c) => {
        const h = n.clone(), o = [...h.display];
        h.displayPtn = c + 1, h.display = o, h.alias[c] = r, i[a] = h;
      });
    return i;
  }
  /** 文字列から駒を取得
   * @param {Piece|PieceInitOption} piece - 駒
   * @param {string} text - 駒文字列
   */
  static stringToPiece(t, e) {
    if (!e)
      return null;
    const [s, i] = [...e], r = x.charDegs[s];
    if (!r || !t[i])
      return null;
    const n = t[i].clone();
    return n.deg = r, n;
  }
  /** 駒の一覧をリストで取得 */
  static piecesToList(t) {
    return Object.entries(t).sort(([e, { id: s }], [i, { id: r }]) => Math.sign(s - r));
  }
  /** 駒の角度(deg/rad)
   * @param {number} value
   */
  set deg(t) {
    this.rad = t % 360 * Math.PI / 180;
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
    let t = this.size / 100;
    return this.useRankSize && (t *= x.rankRatio[this.rank]), t;
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
  constructor(t, e, s = {}) {
    const {
      displayPtn: i = 0,
      deg: r = 0,
      size: n = x.size,
      useRankSize: a = x.useRankSize,
      isDrawShadow: c = x.isDrawShadow,
      isMoved: h = !1
    } = s;
    Object.assign(this, e), this.ctx = t, this.display ??= [""], this.imgSrc ??= null, this.alias = [...this.alias ?? ""], this.displayPtn = i, this.game = K[this.gameName], this.cost = tt[this.char] ?? 1, this.center = 0, this.middle = 0, this.deg = r, this.size = n, this.useRankSize = a, this.isDrawShadow = c, this.isRotateImg ??= !0, this.isMoved = h, this.isSelected = !1, this.attr ??= [];
    try {
      Object.entries(this.range).forEach(([o, l]) => {
        Array.isArray(l) || (this.range[o] = _[l].map((g) => [...g]));
      });
    } catch (o) {
      throw console.error(o), e;
    }
  }
  /** 駒をクローン
   * @returns Piece
   */
  clone() {
    const { displayPtn: t, deg: e, size: s, isMoved: i } = this;
    return new x(this.ctx, { ...this }, { displayPtn: t, deg: e, size: s, isMoved: i });
  }
  /** 駒を表返す */
  turnFront() {
    Object.assign(this, this.base);
  }
  /** プロモーション
   * @param {string} char - 成り先の文字
   */
  promotion(t) {
    const { promo: e } = this;
    if (!e)
      throw Error(`promo=${t}, Not plomote piece.`);
    if (!e in e)
      throw Error(`promo=${t}, Plomote key is missing.`);
    if (this.hasAttr("promoted"))
      throw Error(`promo=${t}, Promoted piece.`);
    Object.assign(this, e[t]), this.char = t;
  }
  /** 属性の存在を確認
   * @param {string} attrName - 属性名
   * @returns {boolean}
   */
  hasAttr(t) {
    return this.attr.includes(t);
  }
  /** 座標が駒に含まれるか判定
   * @param {number} x - X座標
   * @param {number} y - Y座標
   */
  checkRangeMouse(t, e) {
    return this.left <= t && t < this.right && this.top <= e && e < this.bottom;
  }
  /** 移動範囲を回転して取得 */
  getRange() {
    const t = 0 | this.deg, e = JSON.parse(JSON.stringify(this.range));
    return Object.keys(e).forEach((s) => {
      if (t !== 0) {
        if (![90, 180, 270].includes(t))
          throw Error(`deg=${t}, deg need multiple of 90.`);
        if ([90, 270].includes(t)) {
          const i = (r) => r[0].map((n, a) => r.map((c) => c[a]));
          e[s] = i(e[s]);
        }
        [180, 270].includes(t) && e[s].reverse(), e[s].forEach((i) => {
          [90, 180].includes(t) && i.reverse();
        });
      }
    }), e;
  }
  /** 駒/マスクを描写 */
  async draw() {
    const t = "#FF000055";
    this.imgSrc && P.imported ? (this.drawImage(), this.isSelected && this.drawMaskImage(t)) : (this.drawPiece(), this.isSelected && this.drawMask(t));
  }
  /** 駒画像を描写 */
  drawImage() {
    const { ctx: t, size: e } = this, s = this.imgSrc[this.displayPtn], i = P.images[s];
    if (!i)
      return;
    t.save(), t.translate(this.center, this.middle), this.isRotateImg && t.rotate(this.rad);
    let r, n;
    i.width * 0.9 < i.height ? (r = i.width / i.height * e, n = e) : (r = e, n = i.height / i.width * e), t.drawImage(i, -r / 2, -n / 2, r, n), t.restore();
  }
  /** 駒画像にマスクを描写
   * @param {string} color - カラーエフェクトの色
   */
  drawMaskImage(t) {
    const { ctx: e, size: s } = this;
    e.fillStyle = t, e.save();
    const i = s * 0.9, r = s;
    e.translate(this.center, this.middle), e.fillRect(-i / 2, -r / 2, i, r), e.restore();
  }
  /** 将棋駒の外形パスを作成
   * @param {number} zoom - 駒の拡大率
   */
  makePath(t) {
    const { ctx: e } = this;
    e.translate(this.center, this.middle), e.rotate(this.rad), e.beginPath(), e.moveTo(-30 * t, -40 * t), e.lineTo(0 * t, -50 * t), e.lineTo(30 * t, -40 * t), e.lineTo(45 * t, 50 * t), e.lineTo(-45 * t, 50 * t), e.closePath();
  }
  /** 駒の影を描写
  * @param {number} zoom - 駒の拡大率
  */
  drawPieceShadow(t) {
    if (!this.isDrawShadow)
      return;
    const { ctx: e } = this;
    e.save(), e.translate(0, 10 * t), this.drawMask("#00000066"), e.restore();
  }
  /** 駒を描写 */
  drawPiece() {
    const { ctx: t, game: e, zoom: s } = this;
    let i, r, n;
    this.hasAttr("promoted") ? (i = e.promoteFontColor ?? e.fontColor ?? "#000000", r = e.promoteBackgroundColor ?? e.backgroundColor ?? "#FFFFFF", n = e.promoteBorderColor ?? e.borderColor ?? "#FF3300") : (i = e.fontColor ?? "#000000", r = e.backgroundColor ?? "#FFFFFF", n = e.borderColor ?? "#777777"), t.strokeStyle = n, t.fillStyle = r, t.lineWidth = 8 * s, this.drawPieceShadow(s), t.save(), this.makePath(s), t.stroke(), t.fill(), t.fillStyle = i;
    const a = [..."" + this.display[this.displayPtn]], c = 40 * s;
    t.font = `${c}px ${A.names}`, t.textAlign = "center", a.forEach((h, o) => {
      const l = a.length === 1 ? c / 2 : o * c;
      t.fillText(h, 0, l);
    }), t.restore();
  }
  /** 駒にマスクを描写
   * @param {string} color - カラーエフェクトの色
   */
  drawMask(t) {
    const { ctx: e, zoom: s } = this;
    e.fillStyle = t, e.save(), this.makePath(s), e.fill(), e.restore();
  }
  /** 文字列形式で取得 */
  toString() {
    return x.degChars[this.deg] + this.char;
  }
}
Object.entries(x.degChars).forEach(([f, t]) => {
  x.charDegs[t] = f;
});
const at = [
  ["default", { isAttack: !1 }],
  ["attack", { isAttack: !0 }],
  ["start", { isAttack: !1 }],
  ["castling", { isAttack: !1 }],
  ["enPassant", { isAttack: !0 }],
  ["palaceSlash", { isAttack: !1 }],
  ["palaceSlash", { isAttack: !0 }]
], ct = [
  ["O", { isOwn: !0 }],
  ["o", {}]
], ht = [
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
], q = [
  ["*", {}],
  ["+", { jmps: 1 }],
  ["|", { jmps: 1, moves: 1 }]
];
for (let f = 1; f <= 9; f++)
  q.push(["" + f, { moves: f }]);
function lt(f) {
  const t = [];
  let e, s;
  for (let i = 0; i < f.length; i++)
    for (let r = 0; r < f[i].length; r++) {
      const n = f[i][r];
      for (let [a, { isOwn: c }] of ct)
        n === a && (t.push({ isOwn: c, oX: r, oY: i }), c && ([e, s] = [r, i]));
    }
  return t.map((i) => (i.offsetX = i.oX - e, i.offsetY = i.oY - s, i));
}
function dt(f, t, e, s) {
  const { field: i, yLen: r, enPassant: n } = f;
  function a(d, u) {
    return i[u] && i[u][d] && !i[u][d].hasAttr("keepOut");
  }
  function c(d) {
    return d.piece && t.hasAttr("po") && d.piece.hasAttr("po");
  }
  function h(d) {
    return d.piece && !t.isMoved && !d.piece.isMoved && t.hasAttr("pao") && t.cost < d.piece.cost;
  }
  function o(d, u, k, m = "", y = !0) {
    if (!i[k] || !i[k][u])
      return !1;
    const b = i[k][u];
    return !b || c(b) || h(b) || m === "enPassant" && !n.isTarget(b, t) || t.hasAttr("inPalace") && !b.hasAttr("palace") || m.indexOf("palace") === 0 && !(b.hasAttr(m) && i[s][e].hasAttr(m)) || t.hasAttr("unCrossRiver") && r - (0 | r / 2) <= f.getRow(u, k, t.deg) ? !1 : d ? i[k][u].piece ? y ? t.deg !== i[k][u].piece.deg : !0 : !1 : !i[k][u].piece;
  }
  function l(d, u, k, m, y) {
    for (const b of u)
      for (let R = 0; R < d.length; R++)
        for (let L = 0; L < d[R].length; L++) {
          const [E, C] = [L + e - m, R + s - y];
          if (!(!a(E, C) || o(k, 0 | E, 0 | C, "", !1) || d[R][L] !== b))
            return !0;
        }
    return !1;
  }
  function g(d, u, k) {
    const m = i[k][u];
    m.addTarget(d), n.setTarget(m, t);
  }
  function p(d, [u, { isAttack: k }], { oX: m, oY: y, isOwn: b }) {
    if (b)
      for (const [R, { child: L = [] } = {}] of ht)
        for (let E = 0; E < d.length; E++)
          for (let C = 0; C < d[E].length; C++) {
            const [w, $] = [C + e - m, E + s - y];
            !a(w, $) || !o(k, w, $, u) || d[E][C] !== R || l(d, L, !1, m, y) || g(u, w, $);
          }
  }
  function S(d, [u, { isAttack: k }], { oX: m, oY: y, isOwn: b, offsetX: R, offsetY: L }) {
    if (!(!b && !o(!1, e + R, s + L)))
      for (const [E, { jmps: C = 0, moves: w = 0 } = {}] of q) {
        const $ = !w || w === 0;
        for (let M = y - 1; M <= y + 1; M++)
          for (let T = m - 1; T <= m + 1; T++) {
            if (d[M][T] !== E || T === m && M === y)
              continue;
            let O = C || 0, F = w || 0;
            const [I, Z] = [T - m, M - y];
            for (let Y = e, J = s; ; ) {
              Y += I, J += Z;
              const D = Y + R, W = J + L;
              if (!a(D, W) || !$ && F === 0)
                break;
              const z = O === 0;
              z && o(k, D, W, u, z) ? (F--, g(u, D, W)) : C < 1 && F--;
              const N = i[W][D];
              if (N.piece && (O--, z || c(N)))
                break;
            }
          }
      }
  }
  (function() {
    const d = t.getRange();
    d.attack ??= d.default;
    for (const u of at) {
      const k = u[0];
      if (t.isMoved && ["start", "castling"].includes(k))
        continue;
      const m = d[k];
      if (m)
        for (const y of lt(m))
          p(m, u, y), S(m, u, y);
    }
  })();
}
function ft(f) {
  let t = !1, e = [], s = null, i = null;
  const { canvas: r } = f, n = (o, l, g = () => {
  }) => {
    const p = window.getComputedStyle(r), S = o.target.getBoundingClientRect();
    let d = r.width / parseFloat(p.width), u = r.height / parseFloat(p.height);
    if (o.clientX)
      d *= o.clientX - S.left, u *= o.clientY - S.top;
    else if (0 < o.touches.length) {
      if (1 < o.touches.length)
        return;
      d *= o.touches[0].clientX - S.left, u *= o.touches[0].clientY - S.top;
    } else
      o.preventDefault(), [d, u] = e;
    f.field.forEach((k, m) => k.forEach((y, b) => l(y, d, u, b, m))), g(d, u), f.draw(), e = [d, u];
  }, a = (o) => {
    t = !0, n(
      o,
      (l, g, p) => {
        const { piece: S, pX: d, pY: u } = l;
        S && l.checkRangeMouse(g, p) && (o.preventDefault(), S.isSelected = !0, s = l, dt(f, S, d, u));
      },
      (l, g) => {
        for (const [p, S] of f.stand.stocks)
          for (let d = S.length - 1; 0 <= d; d--)
            if (S[d].checkRangeMouse(l, g)) {
              o.preventDefault(), S[d].isSelected = !0, i = { deg: p, i: d };
              return;
            }
      }
    );
  }, c = (o) => {
    !t || !(s || i) || n(
      o,
      (l, g, p) => {
        l.isSelected = l.checkRangeMouse(g, p);
      }
    );
  }, h = (o) => {
    t = !1, n(
      o,
      (l, g, p) => {
        l.checkRangeMouse(g, p) && (s && f.movePiece(s, l), i && !l.piece && f.stand.releasePiece(l, i));
      }
    ), n(
      o,
      (l) => {
        l.piece && (l.piece.isSelected = !1), l.isSelected = !1, l.clearTarget();
      },
      () => {
        for (const [l, g] of f.stand.stocks)
          for (let p = g.length - 1; 0 <= p; p--)
            g[p].isSelected = !1;
        s = null, i = null;
      }
    );
  };
  return r.addEventListener("mousedown", a), r.addEventListener("mousemove", c), r.addEventListener("mouseup", h), r.addEventListener("touchstart", a), r.addEventListener("touchmove", c), r.addEventListener("touchend", h), {
    removeEvent() {
      r.removeEventListener("mousedown", a), r.removeEventListener("mousemove", c), r.removeEventListener("mouseup", h), r.removeEventListener("touchstart", a), r.removeEventListener("touchmove", c), r.removeEventListener("touchend", h);
    }
  };
}
class v {
  /** 角度から駒の文字表示
   * @type {Map<number, string>}
   */
  static #t = /* @__PURE__ */ new Map([
    [0, " "],
    [90, ">"],
    [180, "v"],
    [270, "<"]
  ]);
  /** 角度から駒の正規表現表示
   * @type {Map<number, string>}
   */
  static #e = new Map(
    [...v.#t].map(([t, e]) => [t, new RegExp(e, "g")])
  );
  /** 駒の文字から角度表示
   * @type {Map<string, number>}
   */
  static #i = new Map(
    [...v.#t].map(([t, e]) => [e, t])
  );
  /** 角度から持駒の表題表示
   * @type {Map<number, string>}
   */
  static #r = /* @__PURE__ */ new Map([
    [0, "先手の持駒"],
    [90, "次手の持駒"],
    [180, "後手の持駒"],
    [270, "四手の持駒"]
  ]);
  /** 持駒の表題から角度表示
   * @type {Map<string, number>}
   */
  static #n = new Map(
    [...v.#r].map(([t, e]) => [e, t])
  );
  static #o = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  static #a = ["", "十", "二十", "三十", "四十", "五十", "六十", "七十", "八十", "九十"];
  /** 行/持駒用の数字表示(漢数字)
   * @param {number} num - 数字
   * @param {boolean} viewOne - 一を表示
   * @returns {string}
   */
  static #c(t, e = !0) {
    if (!e && t <= 1)
      return "";
    const s = t % 10, i = 0 | t / 10;
    return v.#a[i] + v.#o[s];
  }
  /** 行/持駒用の数字表示(漢数字)
   * @param {number} num - 数字
   * @param {boolean} emptyOne - 空文字を1とする
   * @returns {string}
   */
  static #h(t, e = !0) {
    if (e && t === "")
      return 1;
    if (!isNaN(t))
      return 0 | t;
    let s = v.#a.findIndex(
      (r) => r !== "" && new RegExp("^" + r).test(t)
    );
    s < 0 && (s = 0);
    let i = v.#o.findIndex(
      (r) => r !== "" && new RegExp(r + "$").test(t)
    );
    return i < 0 && (i = 0), s * 10 + i;
  }
  /** 列用の数字表示(全角/2桁)
   * @param {number} num - 数字
   * @returns {string}
   */
  static #l(t) {
    if (10 <= t)
      return t;
    const e = "０１２３４５６７８９", s = t % 10;
    return e[s];
  }
  /** マス目の表示
   * @type {string}
   */
  static #d = " ・";
  /** 駒のBOD表記
   * @param {Piece} piece - 駒
   * @returns {string}
   */
  static #f(t) {
    return t ? v.#t.get(t.deg) + t.char : v.#d;
  }
  /** 駒台のBOD表記
   * @param {Stand} stand - 駒台
   * @param {number} deg - 角度
   * @returns {string}
   */
  static #s(t, e = 0) {
    const s = /* @__PURE__ */ new Map();
    return t.stocks.get(e).forEach(({ char: i }) => {
      s.has(i) || s.set(i, 0), s.set(i, s.get(i) + 1);
    }), v.#r.get(e) + "：" + [...s].map(
      ([i, r]) => i + v.#c(r, !1)
    ).join(" ");
  }
  /** BOD形式のテキストをボードで扱えるよう変換
   * @param {string} text - BOD形式のテキスト
   * @returns {string}
   */
  static convSetText(t) {
    const e = [], s = [];
    t.split(/\r|\n|\r\n/).forEach((n) => {
      [...v.#n.keys()].some((a) => new RegExp(`^${a}`).test(n)) ? s.push(n) : e.push(n.slice(1));
    });
    let i = e.slice(2, -1).join(`
`);
    v.#e.forEach((n, a) => {
      i = i.replace(n, x.degChars[a]);
    });
    const r = s.flatMap((n) => {
      const [a, c] = n.split(/：/);
      if (c === "")
        return "";
      const h = v.#n.get(a), o = x.degChars[h];
      return c.split(/\s/).map((g) => {
        const p = g[0], S = g.slice(1);
        return (o + p).repeat(v.#h(S));
      });
    }).join("");
    return `${i}
${r}`;
  }
  /** BOD形式テキストを取得
   * @returns {string}
   */
  static getText(t) {
    const { field: e, xLen: s, players: i, stand: r } = t;
    let n = ` ${[...Array(s).keys()].map((p) => ` ${v.#l(s - p)}`).join("")}
+${Array(s).fill("---").join("")}+
`, a = `
+${Array(s).fill("---").join("")}+`, c = "|", h = "", o = `
`, l = `${v.#s(r, 180)}
`, g = `${v.#s(r, 0)}`;
    return i !== 2 && (l = `${v.#s(r, 270)}
` + l, g = `${v.#s(r, 90)}
` + g), l + n + e.map(
      (p, S) => c + p.map(
        (d) => v.#f(d.piece)
      ).join(h) + c + v.#c(S + 1)
    ).join(o) + a + `
` + g;
  }
}
class U {
  /** 駒台への角度ごとの表示順
   * @type {number[]}
   */
  static #t = [180, 90, 270, 0];
  /**
   * @param {Board} ボード
   */
  constructor(t) {
    this.board = t;
    const { top: e, right: s, bottom: i, width: r, height: n, panelWidth: a, panelHeight: c, xLen: h, yLen: o } = t;
    this.clear(), this.left = s * 1.02, this.top = e, this.width = r / 2, this.height = n, this.right = this.left + this.width, this.bottom = i, this.pitchWidth = a / 2, this.pitchHeight = c, this.xLen = h, this.yLen = o;
  }
  /** 駒台を初期化にする */
  clear() {
    this.stocks = new Map(U.#t.map((t) => [t, []]));
  }
  /** 持ち駒からボード上に配置する
   * @param {Panal} toPanell - 配置先のパネル
   * @param {Object} option - オプション
   * @param {number} option.deg - 角度
   * @param {number} option.i - 配置する持ち駒のインデックス
   */
  releasePiece(t, e = {}) {
    const { deg: s, i } = e, { board: r } = this, n = this.stocks.get(s);
    t.piece = n[i], n[i].center = t.center, n[i].middle = t.middle, r.addRecord(t, { end: "打" }), n.splice(i, 1);
  }
  /** 駒台に追加する
   * @param {Piece} piece - 追加する駒
   */
  add(t) {
    const e = this.stocks.get(t.deg);
    t.turnFront(), e.push(t), e.sort((s, i) => Math.sign(s.id - i.id));
  }
  /** 駒を持ち駒にする
   * @param {Piece|null} winnerPiece - 移動する駒
   * @param {Piece} loserPiece - 捕縛される駒
   * @param {boolean} forceCapture - 属性を無視して捕縛する
   * @param {boolean} forceCantCapture - 属性を無視して捕縛しない
   */
  capturePiece(t, e, s = !1, i = !1) {
    i || !e || !(s || t.hasAttr("capture")) || e.hasAttr("king") || e.hasAttr("cantCapture") || (e.deg = t.deg, e.isMoved = !0, this.add(e));
  }
  /** 盤を描写 */
  draw() {
    const { board: t, left: e, top: s, width: i, height: r, pitchWidth: n, pitchHeight: a } = this, { ctx: c, xLen: h, yLen: o } = t;
    c.fillStyle = t.backgroundColor, c.strokeStyle = t.borderColor, c.lineWidth = t.borderWidth, c.save(), c.translate(e, s), c.fillRect(0, 0, i, r), c.strokeRect(0, 0, i, r), c.restore(), [...this.stocks.values()].forEach((l, g) => {
      let p = 0;
      l = l.slice(-o / 4 * h);
      for (let S = 0 | o / 4 * g; S < o / 4 * (g + 1); S++)
        for (let d = 0; d < h; d++) {
          const u = e + n * (d + 1), k = s + a * (S + 1), m = l[p++];
          if (m == null)
            break;
          m.center = u, m.middle = k, m.draw();
        }
    });
  }
  /** 駒台をテキスト形式で取得
   * @param {boolean} isCompact - コンパクト表示
   */
  toString(t = !1) {
    const { xLen: e } = this.board, s = [...this.stocks.values()].flat().filter((n) => n);
    let i = 0 < s.length ? `
` + "―".repeat(e * 2) + `
` : "", r = s.map((n) => "" + n).join("");
    if (!t) {
      i = "";
      for (const n of Object.values(x.degChars))
        r = r.replace(n, `
${n}持駒：${n}`);
    }
    return i + r;
  }
}
const gt = Object.keys(x.degChars), G = () => ({
  panel: null,
  piece: null
});
class ut {
  constructor() {
    this.degs = {}, gt.forEach((t) => this.degs[t] = G());
  }
  /** アンパッサン情報をクリア
   * @param {number} deg - アンパッサンされうる陣営の角度
   */
  clear(t) {
    this.degs[t] = G();
  }
  /** アンパッサン対象と成りうるマス情報を記録
   * @param {Panel} panel - アンパッサン対象と成りうるマス目
   * @param {Piece} piece - アンパッサン対象と成りうる駒
   */
  setTarget(t, e) {
    t.hasTarget("start") && e.hasAttr("enPassant") && (this.degs[e.deg].panel = t);
  }
  /** アンパッサン対象と成りうる駒情報を記録
   * @param {Panel} toPanel - アンパッサン対象か確認するマス目
   */
  setMoved(t) {
    const { piece: e } = t, s = this.degs[e.deg];
    e && t === s.panel ? s.piece = e : this.clear(e.deg);
  }
  /** アンパッサン対象のマスか確認する
   * @param {Panel} panel - アンパッサン対象と成りうるマス目
   * @param {Piece} piece - アンパッサン対象と成りうる駒
   * @returns {boolean}
   */
  isTarget(t, e) {
    return !t || !t.piece ? !0 : t.piece.hasAttr("enPassant") ? t.piece === this.degs[t.piece.deg].piece : !1;
  }
}
class V {
  /** ゲームを実行する
   * @param {HTMLCanvasElement}} canvas - Canvas要素
   * @param {BoardInitOption} option - ボードの初期化オプション
   * @param {string} option.playBoard - ボードタイプ
   * @param {Object} option.playPieces - 駒セット
   * @param {string} option.playPieces.gameName - ゲーム名(基準となる駒の配置セット)
   * @param {string} option.playPieces.pieceSet - 駒の配置パターン
   * @returns Board
   */
  static run(t, e) {
    const { playBoard: s, playPieces: i, onDrawed: r } = e, n = i.some(({ gameName: c }, h) => 1 < h && c) ? 4 : 2, a = new V(t, s, {
      ...e,
      players: n,
      onDrawed: r
    });
    return i.forEach(({ gameName: c, pieceSet: h }, o) => {
      if (c) {
        h ??= "default";
        try {
          a.putStartPieces(o, c, h);
        } catch {
        }
      }
    }), a.onDrawed = r, a;
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
  constructor(t, e, s) {
    const {
      players: i = 2,
      canvasWidth: r = void 0,
      canvasHeight: n = void 0,
      canvasFit: a = "overflow",
      boardLeft: c = 5,
      boardTop: h = 5,
      panelWidth: o = 50,
      panelHeight: l = 0 | o * 1.1,
      pieceSize: g = 0 | o * 0.9,
      useRankSize: p = !0,
      isDrawShadow: S = !0,
      borderWidth: d = Math.min(o, l) / 30,
      useStand: u = !1,
      backgroundColor: k = "#00000000",
      autoDrawing: m = !0,
      onDrawed: y,
      onGameOver: b = ($) => alert(`プレイヤー${$ + 1}の敗北です。`),
      freeMode: R = !1
    } = s, L = A.importAsync(), E = P.importAsync();
    this.canvas = t;
    const C = t.getContext("2d");
    if (C.clearRect(0, 0, t.width, t.height), this.ctx = C, this.pieces = x.getPieces(C, {
      size: g,
      useRankSize: p,
      isDrawShadow: S
    }), Object.assign(this, B[e]), ![2, 4].includes(i))
      throw Error(`players=${i}, players need 2 or 4.`);
    this.players = i, this.left = c, this.top = h, this.panelWidth = o, this.panelHeight = l, this.borderWidth = d, this.pieceSize = g, this.canvasBackgroundColor = k, this.field = this.field.map(
      ($, M) => [...$].map((T, O) => {
        const F = c + o * (O + 1), I = h + l * (M + 1);
        return new ot(C, T, F, I, o, l, d, O, M);
      })
    ), this.xLen = this.field[0].length, this.yLen = this.field.length, this.width = this.panelWidth * (this.xLen + 1), this.height = this.panelHeight * (this.yLen + 1), this.right = c + this.width, this.bottom = h + this.height, this.stand = new U(this), t.width = r ?? (u ? this.stand.right : this.right) + 5, t.height = n ?? this.bottom + 5;
    const { style: w } = t;
    a === "overflow" ? (w.maxWidth === "" && (w.maxWidth = "97vw"), w.maxHeight === "" && (w.maxHeight = "97vh")) : a === "horizontal" ? w.width === "" && (w.width = "97vw") : a === "vertical" ? w.height === "" && (w.height = "97vh") : a === "parentOverflow" ? (w.maxWidth === "" && (w.maxWidth = "100%"), w.maxHeight === "" && (w.maxHeight = "100%")) : a === "parentHorizontal" ? w.width === "" && (w.width = "100%") : a === "parentVertical" && w.height === "" && (w.height = "100%"), this.autoDrawing = m, m && (L.then(() => this.draw()), E.then(() => this.draw()), this.draw()), this.onDrawed = y, this.onGameOver = b, this.gameAlives = new Map(
      [...Array(this.players).keys()].map(($) => [this.#t($), !0])
    ), this.freeMode = R, this.record = [], this.uiControl = ft(this), this.enPassant = new ut();
  }
  /** ボードを閉じる */
  close() {
    this.uiControl.removeEvent();
  }
  /** 角度を正規化
   * @param {number} playeaIdOrDeg - プレイヤー番号または角度
   * @returns {number}
   */
  #t(t) {
    let e = t;
    0 < e && e < 4 && (e = 0 | e * 360 / this.players);
    do
      e = (e + 360) % 360;
    while (e < 0);
    return e;
  }
  /** 駒配置を回転
   * @param {number} deg - 回転角 (90の倍数)
   */
  rotateField(t) {
    const { xLen: e, yLen: s } = this;
    if (t = this.#t(t), t !== 0) {
      if (![90, 180, 270].includes(t))
        throw Error(`deg=${t}, deg need multiple of 90.`);
      if ([90, 270].includes(t)) {
        const i = (r) => r[0].map((n, a) => r.map((c) => c[a]));
        if (e !== s)
          throw Error(`cols=${e} != rows=${s}, Not rows = cols.`);
        this.field = i(this.field);
      }
      [180, 270].includes(t) && this.field.reverse(), this.field.forEach((i) => {
        i.forEach((r) => {
          r.piece && (r.piece.deg += t);
        }), [90, 180].includes(t) && i.reverse();
      });
    }
  }
  /** 駒の初期配置
   * @param {number} playerId - プレイヤー番号
   * @param {string} gameName - ゲーム名(基準となる駒の配置セット)
   * @param {string} pieceSet - 駒の配置パターン
   */
  putStartPieces(t, e, s = "default") {
    const { pieces: i } = this, r = this.#t(t);
    this.rotateField(r);
    const n = K[e].position[this.xLen][s];
    if (!n)
      throw Error(`games["${e}"].position["${this.xLen}"]["${s}"]is null.`);
    n.forEach((a, c) => {
      if (a.length < this.xLen)
        throw Error(a.join(""));
      const h = c + this.yLen - n.length;
      [...a].forEach((o, l) => {
        if (!i[o])
          return;
        const g = i[o].clone(), p = this.field[h][l];
        g.center = p.center, g.middle = p.middle, p.piece = g;
      });
    }), this.rotateField(-r), this.autoDrawing && this.draw();
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
  putNewPiece(t, e, s, i, r = {}) {
    const { displayPtn: n = 0, isMoved: a = !1 } = r, { pieces: c } = this, h = this.#t(i);
    typeof t == "string" && (t = new x(this.ctx, c[t], { displayPtn: n, deg: h, isMoved: a }));
    const o = this.field[s][e];
    t.center = o.center, t.middle = o.middle, o.piece = t, this.autoDrawing && this.draw();
  }
  /** 文字列から駒を配置
   * {string} text - 駒配置を表す文字列
   */
  setTextPieces(t) {
    const { field: e, pieces: s, xLen: i, yLen: r } = this, n = "持駒：";
    0 < t.indexOf(n) && (t = v.convSetText(t));
    const c = [t].concat(
      [..."┏━┯┓┗┷┛┃│┠─┼┨―"],
      Object.values(x.degChars).map((o) => `
` + o + n)
    ).reduce(
      (o, l) => o.replace(new RegExp(l, "g"), "")
    ).replace(/\n\n/g, `
`).replace(/　/g, "・").trim().split(/\n/).map(
      (o) => o.match(/.{2}/g)
    );
    for (let o = 0; o < r; o++)
      for (let l = 0; l < i; l++)
        try {
          const g = c[o][l], p = x.stringToPiece(s, g);
          p.center = e[o][l].center, p.middle = e[o][l].middle, e[o][l].piece = p;
        } catch {
          e[o][l].piece = null;
        }
    this.stand.clear();
    const h = c[r];
    h && h.forEach((o) => {
      const l = x.stringToPiece(s, o);
      l && this.stand.add(l);
    }), this.autoDrawing && this.draw();
  }
  /** 角度基準のマス目の行を取得する
   * @param {Panel} panel - マス目
   * @param {number} deg - 角度
   * @param {number} offsetDeg - 補正角度
   * @returns {number}
   */
  getRow(t, e, s, i = 0) {
    const { xLen: r, yLen: n } = this;
    return s = this.#t(s + i), s === 0 ? n - 1 - e : s === 90 ? t : s === 180 ? e : s === 270 ? r - 1 - t : -1;
  }
  /** 角度基準のマス目の列を取得する
   * @param {Panel} panel - マス目
   * @param {number} deg - 角度
   * @param {number} offsetDeg - 補正角度
   * @returns {number}
   */
  getCol(t, e, s, i = 0) {
    const { xLen: r, yLen: n } = this;
    return s = this.#t(s + i), s === 0 ? t : s === 90 ? n - 1 - e : s === 180 ? r - 1 - t : s === 270 ? e : -1;
  }
  /** プロモーションエリア内であるか判別
   * @param {Panel} panel - マス目
   */
  checkCanPromo(t) {
    const { yLen: e } = this, { piece: s, pX: i, pY: r } = t, { deg: n } = s, [a, c] = [
      s.game.promoLine,
      s.forcePromoLine
    ].map((o) => e - o - (0 | this.promoLineOffset));
    let h;
    return this.sidePromo ? h = Math.max(
      ...Object.keys(x.degChars).map((o) => 0 | o).filter((o) => o !== n).map(
        (o) => this.getRow(i, r, o, 180)
      )
    ) : h = this.getRow(i, r, n), {
      canPromo: a <= h,
      forcePromo: c <= h
    };
  }
  /** 敗北したプレイヤーが存在するか確認し、イベントを発生させる */
  #e() {
    [...this.gameAlives].forEach(([t, e], s) => {
      e && (this.field.some(
        (i) => i.some(
          ({ piece: r }) => r && r.deg === t && r.hasAttr("king")
        )
      ) || (this.gameAlives.set(t, !1), this.onGameOver(s)));
    });
  }
  /** プロモーション処理
   * @param {Panel} fromPanel - 移動元のマス目
   * @param {Panel} toPanel - 選択中のマス目
   * @param {boolean} canPromo - 成ることができる
   * @param {boolean} forcePromo - 成りを強制する
   */
  #i(t, e, s, i) {
    const { freeMode: r } = this, { piece: n } = e;
    if (!n.promo || n.hasAttr("promoted") || !s) {
      this.addRecord(e, { fromPanel: t });
      return;
    }
    do
      for (const [a, { name: c }] of Object.entries(n.promo))
        if (confirm(`成りますか?
	${n.char}:${n.name}
	　↓
	${a}:${c}`)) {
          this.addRecord(e, { fromPanel: t, end: "成" }), n.promotion(a);
          return;
        }
    while (!r && i);
    this.addRecord(e, { fromPanel: t, end: "不成" });
  }
  /** 駒を移動
   * @param {Panel} fromPanel - 移動元のマス目
   * @param {Panel} toPanel - 選択中のマス目
   */
  movePiece(t, e) {
    const { stand: s, freeMode: i, enPassant: r } = this;
    if (!t || e.hasAttr("keepOut") || e.piece === t.piece || e.piece?.deg === t.piece.deg || !this.freeMode && !e.isTarget)
      return;
    let { canPromo: n, forcePromo: a } = this.checkCanPromo(t);
    s.capturePiece(
      t.piece,
      e.piece,
      e.hasAttr("capture"),
      e.hasAttr("cantCapture")
    ), e.piece = t.piece, t.piece = null;
    const { piece: c } = e;
    c.center = e.center, c.middle = e.middle, c.isMoved = !0;
    const h = this.checkCanPromo(e);
    n ||= h.canPromo, a ||= h.forcePromo, r.setMoved(e), this.#i(t, e, n, a), this.#e();
  }
  /** 棋譜を追記
   * @param {Panel} toPanel - 移動先のマス目
   * @param {Object} option - オプション
   * @param {Panel} option.fromPanel - 移動元のマス目
   * @param {string} option.end - オプション=成|不成|打
   */
  addRecord(t, e = {}) {
    const { fromPanel: s, end: i = "" } = e, { piece: r } = t;
    this.record.push({
      to: {
        pX: t.pX,
        pY: t.pY
      },
      from: {
        pX: s?.pX,
        pY: s?.pY
      },
      deg: r.deg,
      pieceChar: r.char,
      end: i
    });
  }
  /** 棋譜をテキストで取得
   * @returns {string}
   */
  getTextRecord() {
    const t = ({ pX: s }) => s == null ? "*" : (this.xLen - s).toString(36), e = ({ pY: s }) => s == null ? "*" : (s + 1).toString(36);
    return this.record.map(
      ({ to: s, from: i, deg: r, pieceChar: n, end: a }) => `${x.degChars[r]}${t(s)}${e(s)}${n}${a} (${t(i)}${e(i)})`
    ).join(`
`);
  }
  /** 盤を描写 */
  draw() {
    const { ctx: t, canvas: e, left: s, top: i, width: r, height: n, panelWidth: a, panelHeight: c } = this;
    t.restore(), t.save(), t.clearRect(0, 0, e.width, e.height), t.fillStyle = this.canvasBackgroundColor, t.fillRect(0, 0, e.width, e.height), t.fillStyle = this.backgroundColor, t.lineWidth = this.borderWidth, t.strokeStyle = this.borderColor, t.save(), t.translate(s, i), t.fillRect(0, 0, r, n), t.strokeRect(0, 0, r, n), t.translate(a / 2, c / 2), t.strokeRect(0, 0, r - a, n - c), t.restore(), this.stand.draw(), this.field.forEach((h) => {
      h.forEach((o) => {
        o.draw();
      });
    }), this.onDrawed && this.onDrawed(this);
  }
  /** 駒配置をテキストで取得
   * @param {"default"|"compact"|"bod"} isCompact - テキスト形式
   * @returns {string}
   */
  getText(t = "default") {
    return t === "bod" ? v.getText(this) : this.toString(t === "compact");
  }
  /** 駒配置をテキストで取得
   * @param {boolean} isCompact - コンパクト表示
   */
  toString(t = !1) {
    const { xLen: e } = this;
    let s = "", i = "", r = "", n = "", a = `
`;
    return t || (s = `┏${Array(e).fill("━━").join("┯")}┓
`, i = `
┗${Array(e).fill("━━").join("┷")}┛`, r = "┃", n = "│", a = `
┠${Array(e).fill("──").join("┼")}┨
`), s + this.field.map(
      (c) => r + c.map(
        (h) => "" + (h.piece ?? h.toString(t))
      ).join(n) + r
    ).join(a) + i + this.stand.toString(t);
  }
  /** 画像を取得
   * @param {string} fileName - ファイル名
   * @param {string} ext - 拡張子
   * @returns {Promise<void>}
   */
  async downloadImage(t, e) {
    await nt(this.canvas, t, e);
  }
}
export {
  V as Board,
  x as Piece,
  B as boards,
  A as canvasFont,
  P as canvasImage,
  pt as gameSoft,
  K as games
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvZ2lDcm9zcy5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL1Nob2dpQ3Jvc3MvY29yZS9qc29uL3hoci5qcyIsIi4uL3NyYy9TaG9naUNyb3NzL2NvcmUvY2FudmFzRm9udExvYWRlci5qcyIsIi4uL3NyYy9TaG9naUNyb3NzL2NvcmUvY2FudmFzSW1hZ2VMb2FkZXIuanMiLCIuLi9zcmMvU2hvZ2lDcm9zcy9jb3JlL2Rvd25sb2FkSW1hZ2UuanMiLCIuLi9zcmMvU2hvZ2lDcm9zcy9jb3JlL3BhbmVsLmpzIiwiLi4vc3JjL1Nob2dpQ3Jvc3MvY29yZS9waWVjZS5qcyIsIi4uL3NyYy9TaG9naUNyb3NzL2NvcmUvY2hlY2tUYXJnZXQuanMiLCIuLi9zcmMvU2hvZ2lDcm9zcy9jb3JlL3VpQ29udHJvbC5qcyIsIi4uL3NyYy9TaG9naUNyb3NzL2NvcmUvYm9kLmpzIiwiLi4vc3JjL1Nob2dpQ3Jvc3MvY29yZS9zdGFuZC5qcyIsIi4uL3NyYy9TaG9naUNyb3NzL2NvcmUvZW5QYXNzYW50LmpzIiwiLi4vc3JjL1Nob2dpQ3Jvc3MvY29yZS9ib2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBiYXNlID0gJy4vanNvbi9TaG9naUNyb3NzLyc7XG5mdW5jdGlvbiBpbXBvcnRKc29uKG5hbWUpIHtcblx0Y29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdHhoci5vcGVuKFwiR0VUXCIsIGAke2Jhc2V9JHtuYW1lfS5qc29uYCwgZmFsc2UpO1xuXHR4aHIuc2VuZCgpO1xuXHRpZih4aHIuc3RhdHVzID09PSAyMDApXG5cdFx0cmV0dXJuIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG5cdGVsc2Vcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBKU09OXCIpO1xufVxuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IENhbnZhc0ZvbnRcbiAqIEBwcm9wIHt7Zm9udE5hbWU6IHN0cmluZywgZm9udFdlaWdodDogbnVtYmVyfVtdfSBmb250cyAtIHtmb250TmFtZTog44OV44Kp44Oz44OI5ZCNLCBmb250V2VpZ2h0OiDjg5Xjgqnjg7Pjg4jjga7lpKrjgZV9XG4gKi9cbi8qKiBDYW52YXPnlKjjga5Hb29nbGXjg5Xjgqnjg7Pjg4jmg4XloLFcbiAqIEB0eXBlIHtDYW52YXNGb250fVxuICovXG5leHBvcnQgY29uc3QgY2FudmFzRm9udCA9IGltcG9ydEpzb24oXCJjYW52YXNGb250XCIpO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEdhbWVTb2Z0XG4gKiBAcHJvcCB7c3RyaW5nfSBuYW1lIC0g44Ky44O844Og5ZCNXG4gKiBAcHJvcCB7c3RyaW5nfSBwbGF5Qm9hcmQgLSDkvb/nlKjjgZnjgovjg5zjg7zjg4nlkI1cbiAqIEBwcm9wIHtib29sZWFufSB1c2VTdGFuZCAtIOmnkuWPsOOBruS9v+eUqOacieeEoVxuICogQHByb3Age3tnYW1lTmFtZTogc3RyaW5nLCBwaWVjZVNldDogc3RyaW5nfVtdfSBwbGF5UGllY2VzIC0ge2dhbWVOYW1lOiDjgrLjg7zjg6DlkI0sIHBpZWNlU2V0OiDpp5Ljgrvjg4Pjg4jjga7lkI3np7B9XG4gKi9cbi8qKiDjgrLjg7zjg6Dmg4XloLEo44Oc44O844OJK+mnkinjga7jg5fjg6rjgrvjg4Pjg4hcbiAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBHYW1lU29mdD59XG4gKi9cbmV4cG9ydCBjb25zdCBnYW1lU29mdCA9IGltcG9ydEpzb24oXCJnYW1lU29mdFwiKTtcblxuLyoqXG4gKiBAdHlwZWRlZiBHYW1lXG4gKiBAcHJvcCB7c3RyaW5nfSBlbmdsaXNoIC0g6Iux6Kqe5ZCNXG4gKiBAcHJvcCB7c3RyaW5nfSBmb250Q29sb3IgLSDpp5Ljga7jg5Xjgqnjg7Pjg4joibJcbiAqIEBwcm9wIHtzdHJpbmd9IHByb21vdGVGb250Q29sb3IgLSDmiJDpp5Ljga7jg5Xjgqnjg7Pjg4joibJcbiAqIEBwcm9wIHtzdHJpbmd9IGJhY2tncm91bmRDb2xvciAtIOmnkuOBruiJslxuICogQHByb3Age3N0cmluZ30gcHJvbW90ZUJhY2tncm91bmRDb2xvciAtIOaIkOmnkuOBruiJslxuICogQHByb3Age3N0cmluZ30gYm9yZGVyQ29sb3IgLSDpp5Ljga7mnqDoibJcbiAqIEBwcm9wIHtzdHJpbmd9IHByb21vdGVCYWNrZ3JvdW5kQ29sb3IgLSDmiJDpp5Ljga7mnqDoibJcbiAqIEBwcm9wIHtudW1iZXJ9IHByb21vTGluZSAtIOODl+ODreODouODvOOCt+ODp+ODs+ODqeOCpOODsyjmiJDjgorjga7mrrUpXG4gKiBAcHJvcCB7T2JqZWN0PHN0cmluZywgT2JqZWN0PHN0cmluZywgc3RyaW5nW10+Pn0gcG9zaXRpb24gLSDpp5Ljga7phY3nva7jg4fjg7zjgr9cbiAqL1xuLyoqIOOCsuODvOODoOOBrueorumhnuOBq+WFsemAmuOBmeOCi+mnkuaDheWgseOChOmnkumFjee9ruaDheWgsVxuICogQHR5cGUge09iamVjdDxzdHJpbmcsIEdhbWU+fVxuICovXG5leHBvcnQgY29uc3QgZ2FtZXMgPSBpbXBvcnRKc29uKFwiZ2FtZXNcIik7XG5cblx0LyoqXG5cdCAqIEB0eXBlZGVmIHtPYmplY3R9IEJvYXJkSW5pdE9wdGlvbiAtIOODnOODvOODieOBruWIneacn+WMluOCquODl+OCt+ODp+ODs1xuXHQgKiBAcHJvcCB7bnVtYmVyfSBjYW52YXNXaWR0aCAtIENhbnZhc+W5hVxuXHQgKiBAcHJvcCB7bnVtYmVyfSBjYW52YXNIZWlnaHQgLSBDYW52YXPpq5jjgZVcblx0ICogQHByb3Age2NhbnZhc0ZpdH0gY2FudmFzRml0IC0gQ2FudmFz44K144Kk44K644Gu6Ieq5YuV6Kq/5pW0XG5cdCAqIEBwcm9wIHtudW1iZXJ9IGJvYXJkTGVmdCAtIOaPj+WGmeOBmeOCi1jluqfmqJlcblx0ICogQHByb3Age251bWJlcn0gYm9hcmRUb3AgLSDmj4/lhpnjgZnjgotZ5bqn5qiZXG5cdCAqIEBwcm9wIHtudW1iZXJ9IHBhbmVsV2lkdGggLSDjg57jgrnnm67luYVcblx0ICogQHByb3Age251bWJlcn0gcGFuZWxIZWlnaHQgLSDjg57jgrnnm67pq5jjgZVcblx0ICogQHByb3Age251bWJlcn0gcGllY2VTaXplIC0g6aeS44Gu5aSn44GN44GVXG5cdCAqIEBwcm9wIHtib29sZWFufSB1c2VSYW5rU2l6ZSAtIOmnkuOBruWkp+OBjeOBleOCkuagvOOBrumBleOBhOOBp+WkieabtOOBmeOCi1xuXHQgKiBAcHJvcCB7Ym9vbGVhbn0gaXNEcmF3U2hhZG93IC0g6aeS44Gu5b2x44Gu5o+P5YaZ5pyJ54ShXG5cdCAqIEBwcm9wIHtudW1iZXJ9IGJvcmRlcldpZHRoIC0g5p6g57ea5aSq44GVXG5cdCAqIEBwcm9wIHtib29sZWFufSB1c2VTdGFuZCAtIOmnkuWPsOOBruS9v+eUqOacieeEoVxuXHQgKiBAcHJvcCB7c3RyaW5nfSBiYWNrZ3JvdW5kQ29sb3IgLSDog4zmma/oibIo44OH44OV44Kp44Or44OI54Sh6ImyKVxuXHQgKiBAcHJvcCB7Ym9vbGVhbn0gYXV0b0RyYXdpbmcgLSDmj4/lhpnjga7oh6rli5Xmm7TmlrDmnInnhKFcblx0ICogQHByb3AgeyhCb2FyZCk9PnZvaWR9IG9uRHJhd2VkIC0g5o+P5YaZ44Kk44OZ44Oz44OIXG5cdCAqIEBwcm9wIHsoaSk9PnZvaWR9IG9uR2FtZU92ZXIgLSDjgrLjg7zjg6Djgqrjg7zjg5Djg7zjgqTjg5njg7Pjg4hcblx0ICogQHByb3Age2Jvb2xlYW59IGZyZWVNb2RlIC0g44OV44Oq44O844Oi44O844OJ5pyJ5Yq55YyWL+eEoeWKueWMllxuXHQgKi9cblx0LyoqXG5cdCAqIOODnOODvOODieOBruani+aIkOaDheWgsVxuXHQgKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgQm9hcmRJbml0T3B0aW9uPn1cblx0ICovXG5leHBvcnQgY29uc3QgYm9hcmRzID0gaW1wb3J0SnNvbihcImJvYXJkc1wiKTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBQYW5lbEluaXRPcHRpb24gLSDjg57jgrnnm67jga7liJ3mnJ/ljJbjgqrjg5fjgrfjg6fjg7NcbiAqIEBwcm9wIHtzdHJpbmd9IG5hbWUgLSDjg57jgrnnm67jga7lkI3liY1cbiAqIEBwcm9wIHtzdHJpbmd9IHRleHQgLSDjg5zjg7zjg4nooajnpLrmloflrZfliJdcbiAqIEBwcm9wIHtzdHJpbmd9IGJhY2tncm91bmRDb2xvciAtIOODnuOCueebruOBruiJslxuICogQHByb3Age3N0cmluZ30gYm9yZGVyQ29sb3IgLSDmnqDoibLlj4rjgbPjg5Xjgqnjg7Pjg4joibJcbiAqIEBwcm9wIHtzdHJpbmd9IHNlbGVjdENvbG9yIC0g6YG45oqe44GX44Gf5pmC44Gu6ImyXG4gKiBAcHJvcCB7c3RyaW5nfSB0YXJnZXRDb2xvciAtIOmnkuOCkumBuOaKnuOBl+OBn+aZguOBruiJslxuICogQHByb3Age3N0cmluZ30gZGlzcGxheVRleHQgLSDooajnpLrjgZnjgovmloflrZcoMeaWh+WtlylcbiAqIEBwcm9wIHtudW1iZXJ9IHRleHRSb3RhdGUgLSDooajnpLrjgZnjgovmloflrZfjga7lm57ou6Lop5IoZGVnKVxuICogQHByb3Age2Jvb2xlYW59IGJvcmRlclNsYXNoTGVmdCAtIOW3puaWnOe3mijvvLwp44Gu5pyJ54ShXG4gKiBAcHJvcCB7Ym9vbGVhbn0gYm9yZGVyU2xhc2hSaWdodCAtIOWPs+aWnOe3mijvvI8p44Gu5pyJ54ShXG4gKiBAcHJvcCB7Ym9vbGVhbn0gaW50ZXJzZWN0IC0g5Lqk54K544KS5Lit5b+D44Go44GZ44KLXG4gKiBAcHJvcCB7c3RyaW5nW119IGF0dHIgLSDjg57jgrnnm67jga7mqZ/og73jga7lsZ7mgKdcbiAqL1xuLyoqXG4gKiDjg5zjg7zjg4nkuK3jga7jg57jgrnnm67mg4XloLFcbiAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBQYW5lbEluaXRPcHRpb259XG4gKi9cbmV4cG9ydCBjb25zdCBwYW5lbHMgPSBpbXBvcnRKc29uKFwicGFuZWxzXCIpO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBpZWNlSW5pdE9wdGlvbiAtIOmnkuOBruWIneacn+WMluOCquODl+OCt+ODp+ODs1xuICogQHByb3Age3N0cmluZ30gbmFtZSAtIOmnkuOBruWQjeWJjVxuICogQHByb3Age3N0cmluZ1tdfSBkaXNwbGF5IC0g6aeS44Gr6KGo56S644GZ44KL5paH5a2X5YiXKDHjgIEy5paH5a2XKeOBrumFjeWIl1xuICogQHByb3Age3N0cmluZ30gaW1nU3JjIC0g6aeS44Go44GX44Gm6KGo56S644GZ44KL55S75YOP44OR44K544Gu6YWN5YiXXG4gKiBAcHJvcCB7Ym9vbGVhbn1pc1JvdGF0ZUltZyAtIOmBjueUu+WDj+OCkuioreWumuOBmeOCi+WgtOWQiOWbnui7ouOBmeOCi+OBi1xuICogQHByb3Age3N0cmluZ30gYWxpYXMgLSDjgq3jg7zjga7liKXlkI3jgajjgZfjgablrprjgoHjgovmloflrZfjga7pm4blkIjooahcbiAqIEBwcm9wIHtzdHJpbmd9IGdhbWVOYW1lIC0g6aeS44Gr5a++5b+c44GZ44KL44Ky44O844Og5ZCNXG4gKiBAcHJvcCB7c3RyaW5nfSBleHBhbnNpb24gLSDjgrLjg7zjg6DlkI3jga7ntLDliIbpoZ5cbiAqIEBwcm9wIHtcIuWFtVwifFwi6aasXCJ8XCLosaFcInxcIui7ilwifFwi6IejXCJ8XCLnjotcInxcIuaIkFwifSB1bml0IC0g6aeS44Gu5YW156iuXG4gKiBAcHJvcCB7bnVtYmVyfWZvcmNlUHJvbW9MaW5lIC0g6KGM44GN44Gp44GT44KN44Gu44Gq44GE6aeS44Go44Gq44KL5q61XG4gKiBAcHJvcCB7T2JqZWN0fSByYW5nZSAtIOmnkuOBruenu+WLleevhOWbslxuICogQHByb3Age3N0cmluZ1tdfSByYW5nZS5kZWZhdWx0IC0g6YCa5bi45pmC44Gu56e75YuV56+E5ZuyXG4gKiBAcHJvcCB7c3RyaW5nW119IHJhbmdlLmF0dGFjayAtIOmnkuWPluW+l+aZguOBruenu+WLleevhOWbslxuICogQHByb3Age3N0cmluZ1tdfSByYW5nZS5zdGFydCAtIOWIneWbnuOBruOBv+OBruenu+WLleevhOWbslxuICogQHByb3Age3N0cmluZ1tdfSByYW5nZS5jYXN0bGluZyAtIOOCreODo+OCueODquODs+OCsOaZguOBruenu+WLleevhOWbslxuICogQHByb3Age3N0cmluZ1tdfSByYW5nZS5lblBhc3NhbnQgLSDjgqLjg7Pjg5Hjg4PjgrXjg7PmmYLjga7np7vli5Xnr4Tlm7JcbiAqIEBwcm9wIHtzdHJpbmdbXX0gcmFuZ2UucGFsYWNlU2xhc2ggLSDkuZ3lrq7lhoXjgafjga7np7vli5Xnr4Tlm7JcbiAqIEBwcm9wIHtzdHJpbmd9IHByb21vIC0g44OX44Ot44Oi44O844K344On44Oz5YWI44Gu6aeS44Gu5LiA5paH5a2X6KGo6KiYXG4gKiBAcHJvcCB7c3RyaW5nW119IGF0dHIgLSDpp5Ljga7mqZ/og73jga7jg6rjgrnjg4hcbiAqL1xuLyoqXG4gKiDpp5Lmg4XloLFcbiAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBQaWVjZUluaXRPcHRpb24+fVxuICovXG5leHBvcnQgY29uc3QgcGllY2VzID0gaW1wb3J0SnNvbihcInBpZWNlc1wiKTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7c3RyaW5nW119IFBpZWNlUmFuZ2Ug6aeS44Gu56e75YuV56+E5ZuyXG4gKi9cbi8qKlxuICog6aeS44Gu56e75YuV56+E5ZuyXG4gKiBAdHlwZXtPYmplY3Q8c3RyaW5nLCBQaWVjZVJhbmdlPn1cbiAqL1xuZXhwb3J0IGNvbnN0IHBpZWNlUmFuZ2UgPSBpbXBvcnRKc29uKFwicGllY2VSYW5nZVwiKTtcblxuLyoqXG4gKiDpp5Ljga7kvqHlgKRcbiAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBudW1iZXI+fVxuICovXG5leHBvcnQgY29uc3QgcGllY2VDb3N0ID0gaW1wb3J0SnNvbihcInBpZWNlQ29zdFwiKTtcbiIsImltcG9ydCB7Y2FudmFzRm9udCwgcGFuZWxzLCBwaWVjZXN9IGZyb20gXCIuL2pzb24uanNcIjtcbmV4cG9ydCB7Y2FudmFzRm9udH07XG5cbi8qKiDoqq3jgb/ovrzjgoDmloflrZfjga7kuIDopqfjgpLlj5blvpdcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmNvbnN0IGdldENoYXJzID0gKCkgPT4gWy4uLlxuXHRuZXcgU2V0KFsuLi5cblx0XHRPYmplY3QudmFsdWVzKHBhbmVscykubWFwKCh7ZGlzcGxheVRleHR9KT0+ZGlzcGxheVRleHQpLmpvaW4oXCJcIikrXG5cdFx0T2JqZWN0LnZhbHVlcyhwaWVjZXMpLm1hcCgoe2Rpc3BsYXl9KT0+ZGlzcGxheT8gZGlzcGxheS5qb2luKFwiXCIpOiBcIlwiKS5qb2luKFwiXCIpXG5cdF0pXG5dLnNvcnQoKS5qb2luKFwiXCIpO1xuXG4vKiogQ2FudmFz55So44OV44Kp44Oz44OI566h55CGICovXG5PYmplY3QuYXNzaWduKGNhbnZhc0ZvbnQsIHtcblx0LyoqIOiqreOBv+i+vOOBv+a4iOOBv+OBp+OBguOCi+OBiz8gKi9cblx0aW1wb3J0ZWQ6IGZhbHNlLFxuXG5cdC8qKiDoqq3jgb/ovrzjgoDjg5Xjgqnjg7Pjg4jjga7kuIDopqcoXCIsXCLljLrliIfjgoopXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRuYW1lczogXCJcIixcblxuXHQvKiog44OV44Kp44Oz44OI44Gu6Kqt44G/6L6844G/XG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuXHQgKi9cblx0YXN5bmMgaW1wb3J0QXN5bmMoKXtcblx0XHRpZih0aGlzLmltcG9ydGVkKSByZXR1cm47XG5cdFx0Y29uc3QgZ29vZ2xlVXJsID0gXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVwiO1xuXHRcdGNvbnN0IGNoYXJzID0gZ2V0Q2hhcnMoKTtcblx0XHRjb25zdCB1bmlxdWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpO1xuXHRcdHRoaXMubmFtZXMgPSBjYW52YXNGb250LmZvbnRzLm1hcChvPT5gXCIke29bMF19JHt1bmlxdWV9XCJgKS5qb2luKFwiLFwiKStcIixzZXJpZlwiO1xuXHRcdHJldHVybiBQcm9taXNlLmFsbChcblx0XHRcdGNhbnZhc0ZvbnQuZm9udHMubWFwKGFzeW5jIChbZm9udE5hbWUsIGZvbnRXZWlnaHRdKT0+e1xuXHRcdFx0XHRjb25zdCBmb250TmFtZVBsdXMgPSBmb250TmFtZS5yZXBsYWNlKC8gL2csIFwiK1wiKTtcblx0XHRcdFx0Y29uc3QgZm9udFVybCA9IGAke2dvb2dsZVVybH0ke2ZvbnROYW1lUGx1c306d2dodEAke2ZvbnRXZWlnaHR9JnRleHQ9JHtjaGFyc31gO1xuXHRcdFx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChmb250VXJsKTtcblx0XHRcdFx0aWYoIXJlcy5vaykgcmV0dXJuO1xuXHRcdFx0XHRjb25zdCBjc3MgPSBhd2FpdCByZXMudGV4dCgpO1xuXHRcdFx0XHRjb25zdCBtYXRjaFVybHMgPSBjc3MubWF0Y2goL3VybFxcKC4rP1xcKS9nKTtcblx0XHRcdFx0aWYoIW1hdGNoVXJscykgdGhyb3cgbmV3IEVycm9yKFwiTm90IGZvdW5kIGZvbnQuXCIpO1xuXG5cdFx0XHRcdGZvciAoY29uc3QgdXJsIG9mIG1hdGNoVXJscykge1xuXHRcdFx0XHRcdGNvbnN0IGZvbnRGYWNlID0gbmV3IEZvbnRGYWNlKGAke2ZvbnROYW1lfSR7dW5pcXVlfWAsIHVybCk7XG5cdFx0XHRcdFx0ZG9jdW1lbnQuZm9udHMuYWRkKGZvbnRGYWNlKTtcblx0XHRcdFx0XHRhd2FpdCBmb250RmFjZS5sb2FkKCkuY2F0Y2goKCk9Pnt9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHQpLnRoZW4oXz0+dGhpcy5pbXBvcnRlZCA9IHRydWUpO1xuXHR9XG59KTtcbiIsImltcG9ydCB7cGFuZWxzLCBwaWVjZXN9IGZyb20gXCIuL2pzb24uanNcIjtcblxuLyoqIOeUu+WDj+iqreOBv+i+vOOBv+WHpueQhlxuICogQHBhcmFtIHtzdHJpbmd9IHNyYyAtIOeUu+WDj+ODkeOCuVxuICogQHJldHVybnMgUHJvbWlzZTxJbWFnZT5cbiAqL1xuZnVuY3Rpb24gbG9hZEltYWdlKHNyYyl7XG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlPT57XG5cdFx0Y29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblx0XHRpbWFnZS5zcmMgPSBzcmM7XG5cdFx0aW1hZ2Uub25sb2FkID0gKCk9PnJlc29sdmUoaW1hZ2UpO1xuXHR9KTtcbn1cblxuLyoqIOiqreOBv+i+vOOCgOeUu+WDj+ODkeOCueOBruS4gOimp1xuICogQHR5cGUge3N0cmluZ1tdfVxuICovXG5jb25zdCBpbWdTcmNzID0gWy4uLm5ldyBTZXQoXG5cdE9iamVjdC52YWx1ZXMocGFuZWxzKS5mbGF0TWFwKCh7aW1nU3JjfSk9PmltZ1NyYz8/W10pXG5cdC5jb25jYXQoT2JqZWN0LnZhbHVlcyhwaWVjZXMpLmZsYXRNYXAoKHtpbWdTcmN9KT0+aW1nU3JjPz9bXSkpXG4pXTtcblxuLyoqIENhbnZhc+eUqOeUu+WDj+OBrueuoeeQhiAqL1xuZXhwb3J0IGNvbnN0IGNhbnZhc0ltYWdlID0ge1xuXHQvKiog6Kqt44G/6L6844G/5riI44G/44Gn44GC44KL44GLPyAqL1xuXHRpbXBvcnRlZDogZmFsc2UsXG5cblx0LyoqIOiqreOBv+i+vOOCk+OBoOeUu+WDj+ODh+ODvOOCv1xuXHQgKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgSW1hZ2U+fVxuXHQgKi9cblx0aW1hZ2VzOiB7fSxcblxuXHQvKiog55S75YOP44Gu6Kqt44G/6L6844G/XG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuXHQgKi9cblx0YXN5bmMgaW1wb3J0QXN5bmMoKXtcblx0XHRpZih0aGlzLmltcG9ydGVkKSByZXR1cm47XG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKFxuXHRcdFx0aW1nU3Jjcy5tYXAoYXN5bmMgc3JjPT57XG5cdFx0XHRcdHRoaXMuaW1hZ2VzW3NyY10gPSBhd2FpdCBsb2FkSW1hZ2Uoc3JjKTtcblx0XHRcdH0pXG5cdFx0KS50aGVuKF89PnRoaXMuaW1wb3J0ZWQgPSB0cnVlKVxuXHR9XG59O1xuXG4iLCJjb25zdCBnZXRNaW1lID0gKGV4dCk9PlxuXHRcImltYWdlL1wiK2V4dC5yZXBsYWNlKFwianBnXCIsIFwianBlZ1wiKTtcblxuLyoqIOOCreODo+ODs+ODkOOCueOBrueUu+WDj+OCkuWPluW+l+OBmeOCi1xuICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH19IGNhbnZhcyAtIENhbnZhc+imgee0oFxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIC0g5Y+W5b6X44GZ44KL44OV44Kh44Kk44Or5ZCNKOaLoeW8teWtkOOCkumZpOOBjylcbiAqIEBwYXJhbSB7c3RyaW5nfSBleHQgLSDmi6HlvLXlrZBcbiAqIEBwYXJhbSB7XCJiYXNlNjRcInxcImJsb2JcIn0gdXJsVHlwZSAtIOeUn+aIkFVSTOOCv+OCpOODl1xuICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkb3dubG9hZEltYWdlKGNhbnZhcywgZmlsZU5hbWU9XCJpbWFnZVwiLCBleHQ9XCJwbmdcIiwgdXJsVHlwZT1cImJhc2U2NFwiKXtcblx0Y29uc3QgbWltZSA9IGdldE1pbWUoZXh0KTtcblx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRsZXQgdXJsO1xuXHRpZih1cmxUeXBlID09PSBcImJsb2JcIilcblx0XHR1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKFxuXHRcdFx0YXdhaXQgbmV3IFByb21pc2UocmVzPT5jYW52YXMudG9CbG9iKHJlcyksIG1pbWUpKTtcblx0ZWxzZVxuXHRcdHVybCA9IGNhbnZhcy50b0RhdGFVUkwobWltZSk7XG5cdGEuaHJlZiA9IHVybDtcblx0YS5kb3dubG9hZCA9IGAke2ZpbGVOYW1lfS4ke2V4dH1gO1xuXHRhLmNsaWNrKCk7XG5cdGlmKHVybFR5cGUgPT09IFwiYmxvYlwiKSBVUkwucmV2b2tlT2JqZWN0VVJMKGEuaHJlZik7XG59XG4iLCJpbXBvcnQge2NhbnZhc0ZvbnR9IGZyb20gXCIuL2NhbnZhc0ZvbnRMb2FkZXIuanNcIjtcbmltcG9ydCB7Y2FudmFzSW1hZ2V9IGZyb20gXCIuL2NhbnZhc0ltYWdlTG9hZGVyLmpzXCI7XG5pbXBvcnQge3BhbmVsc30gZnJvbSBcIi4vanNvbi5qc1wiO1xuXG4vKiog44Oe44K555uu44Gu566h55CG44Kv44Op44K5ICovXG5leHBvcnQgY2xhc3MgUGFuZWx7XG5cdCNpc1NlbGVjdGVkO1xuXHQjdGFyZ2V0UmFuZ2VzO1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge2FueX0gY3R4IC0gQ2FudmFz5o+P55S744Kz44Oz44OG44Kt44K544OIXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyIC0g44Oe44K555uu44KS56S644GZ5paH5a2XXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjZW50ZXIgLSDmj4/lhpnjgZnjgotY5bqn5qiZKOS4reW/g+WOn+eCuSlcblx0ICogQHBhcmFtIHtudW1iZXJ9IG1pZGRsZSAtIOaPj+WGmeOBmeOCi1nluqfmqJko5Lit5b+D5Y6f54K5KVxuXHQgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggLSDjg57jgrnnm67luYVcblx0ICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAtIOODnuOCueebrumrmOOBlVxuXHQgKiBAcGFyYW0ge251bWJlcn0gYm9yZGVyV2lkdGggLSDmnqDnt5rjga7lpKrjgZVcblx0ICogQHBhcmFtIHtudW1iZXJ9IHBYIC0g44Oc44O844OJ5LiK44Gu44Oe44K555uu44Gu5YiXXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwWSAtIOODnOODvOODieS4iuOBruODnuOCueebruOBruihjFxuXHQgKi9cblx0Y29uc3RydWN0b3IoY3R4LCBjaGFyLCBjZW50ZXIsIG1pZGRsZSwgd2lkdGgsIGhlaWdodCwgYm9yZGVyV2lkdGgsIHBYLCBwWSl7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBwYW5lbHNbY2hhcl0pO1xuXHRcdHRoaXMuY3R4ID0gY3R4O1xuXHRcdHRoaXMuY2VudGVyID0gY2VudGVyO1xuXHRcdHRoaXMubWlkZGxlID0gbWlkZGxlO1xuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHR0aGlzLmxlZnQgPSBjZW50ZXItd2lkdGgvMjtcblx0XHR0aGlzLnRvcCA9IG1pZGRsZS1oZWlnaHQvMjtcblx0XHR0aGlzLnJpZ2h0ID0gY2VudGVyK3dpZHRoLzI7XG5cdFx0dGhpcy5ib3R0b20gPSBtaWRkbGUraGVpZ2h0LzI7XG5cdFx0dGhpcy5ib3JkZXJXaWR0aCA9IGJvcmRlcldpZHRoO1xuXHRcdHRoaXMucFggPSBwWDtcblx0XHR0aGlzLnBZID0gcFk7XG5cdFx0dGhpcy5zZWxlY3RDb2xvciA/Pz0gXCIjRkYwMDAwNjZcIjtcblx0XHR0aGlzLnRhcmdldENvbG9yID8/PSBcIiMwMEZGMDA2NlwiO1xuXHRcdHRoaXMucGllY2UgPSBudWxsO1xuXHRcdHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xuXHRcdHRoaXMuY2xlYXJUYXJnZXQoKTtcblx0XHR0aGlzLmF0dHIgPz89IFtdO1xuXHR9XG5cblx0LyoqIOODnuOCueebruOBrumBuOaKnueKtuaFi1xuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG5cdCAqL1xuXHRzZXQgaXNTZWxlY3RlZCh2YWx1ZSl7XG5cdFx0dGhpcy4jaXNTZWxlY3RlZCA9IHRoaXMuaGFzQXR0cihcImtlZXBPdXRcIik/IGZhbHNlOiB2YWx1ZTtcblx0fVxuXHRnZXQgaXNTZWxlY3RlZCgpe1xuXHRcdHJldHVybiB0aGlzLiNpc1NlbGVjdGVkO1xuXHR9XG5cblx0LyoqIOODnuOCueebruOBruenu+WLleWPr+iDveWIpOWumlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG5cdCAqL1xuXHRnZXQgaXNUYXJnZXQoKXtcblx0XHRyZXR1cm4gMCA8IHRoaXMuI3RhcmdldFJhbmdlcy5sZW5ndGg7XG5cdH1cblxuXHQvKiog44Oe44K555uu44Gu56e75YuV5YWI5oOF5aCx44KS44Kv44Oq44KiICovXG5cdGNsZWFyVGFyZ2V0KCl7XG5cdFx0dGhpcy4jdGFyZ2V0UmFuZ2VzID0gW107XG5cdH1cblxuXHQvKiog44Oe44K555uu44Gu56e75YuV5YWI5oOF5aCx44KS6L+95YqgXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSByYW5nZU5hbWUgLSDnp7vli5XlhYjmg4XloLFcblx0ICovXG4gICBhZGRUYXJnZXQocmFuZ2VOYW1lKXtcblx0XHR0aGlzLiN0YXJnZXRSYW5nZXMucHVzaChyYW5nZU5hbWUpO1xuXHR9XG5cblx0LyoqIOODnuOCueebruOBjOenu+WLleWFiOaDheWgseOCkuaMgeOBo+OBpuOBhOOCi+OBi+WIpOWumlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcmFuZ2VOYW1lIC0g56e75YuV5YWI5oOF5aCxXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0aGFzVGFyZ2V0KHJhbmdlTmFtZSl7XG5cdFx0cmV0dXJuIHRoaXMuI3RhcmdldFJhbmdlcy5pbmNsdWRlcyhyYW5nZU5hbWUpO1xuXHR9XG5cblx0LyoqIOWxnuaAp+OBruWtmOWcqOOCkueiuuiqjVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYXR0ck5hbWUgLSDlsZ7mgKflkI1cblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRoYXNBdHRyKGF0dHJOYW1lKXtcblx0XHRyZXR1cm4gdGhpcy5hdHRyLmluY2x1ZGVzKGF0dHJOYW1lKTtcblx0fVxuXHQvKiog5bqn5qiZ44GM44Oe44K555uu44Gr5ZCr44G+44KM44KL44GL5Yik5a6aXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gWOW6p+aomVxuXHQgKiBAcGFyYW0ge251bWJlcn0geSAtIFnluqfmqJlcblx0ICovXG5cdGNoZWNrUmFuZ2VNb3VzZSh4LCB5KXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dGhpcy5sZWZ0IDw9IHggJiYgeCA8IHRoaXMucmlnaHQgJiZcblx0XHRcdHRoaXMudG9wIDw9IHkgJiYgeSA8IHRoaXMuYm90dG9tXG5cdFx0KTtcblx0fVxuXG5cdC8qKiDjg57jgrnnm64v44Oe44K544KvL+mnkuOCkuaPj+WGmSAqL1xuXHRkcmF3KCl7XG5cdFx0Y29uc3Qge3NlbGVjdENvbG9yLCB0YXJnZXRDb2xvcn0gPSB0aGlzO1xuXG5cdFx0aWYodGhpcy5pbWdTcmMgJiYgY2FudmFzSW1hZ2UuaW1wb3J0ZWQpXG5cdFx0XHR0aGlzLmRyYXdJbWFnZSgpO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMuZHJhd1BhbmVsKCk7XG5cdFx0aWYodGhpcy5pc1NlbGVjdGVkKSB0aGlzLmRyYXdNYXNrKHNlbGVjdENvbG9yKTtcblx0XHRpZih0aGlzLmlzVGFyZ2V0KSB0aGlzLmRyYXdNYXNrKHRhcmdldENvbG9yKTtcblx0XHR0aGlzLnBpZWNlPy5kcmF3KCk7XG5cdH1cblxuXHQvKiog44Oe44K555uu55S75YOP44KS5o+P5YaZICovXG5cdGRyYXdJbWFnZSgpe1xuXHRcdGNvbnN0IHtjdHh9ID0gdGhpcztcblxuXHRcdGNvbnN0IHNyYyA9IHRoaXMuaW1nU3JjO1xuXHRcdGNvbnN0IGltYWdlID0gY2FudmFzSW1hZ2UuaW1hZ2VzW3NyY107XG5cdFx0aWYoIWltYWdlKSByZXR1cm47XG5cblx0XHRjdHguc2F2ZSgpO1xuXHRcdGN0eC50cmFuc2xhdGUodGhpcy5sZWZ0LCB0aGlzLnRvcCk7XG5cdFx0Y3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXHRcdGN0eC5yZXN0b3JlKCk7XG5cdH1cblxuXHQvKiog44Oe44K555uu44KS5o+P5YaZICovXG5cdGRyYXdQYW5lbCgpe1xuXHRcdGNvbnN0IHtjdHgsIGxlZnQsIHRvcCwgY2VudGVyLCBtaWRkbGUsIHdpZHRoLCBoZWlnaHQsIGRpc3BsYXlUZXh0LCB0ZXh0Um90YXRlfSA9IHRoaXM7XG5cblx0XHRjdHguZmlsbFN0eWxlID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XG5cdFx0Y3R4LnN0cm9rZVN0eWxlID0gdGhpcy5ib3JkZXJDb2xvcjtcblx0XHRjdHgubGluZVdpZHRoID0gdGhpcy5ib3JkZXJXaWR0aDtcblxuXHRcdGN0eC5zYXZlKCk7XG5cdFx0Y3R4LnRyYW5zbGF0ZShsZWZ0LCB0b3ApO1xuXHRcdGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcblx0XHQvLyDkuqTngrnjgpLmj4/lhplcblx0XHRpZih0aGlzLmludGVyc2VjdCl7XG5cdFx0XHRjdHgubGluZVdpZHRoID0gdGhpcy5ib3JkZXJXaWR0aDtcblx0XHRcdGN0eC5iZWdpblBhdGgoKTtcblx0XHRcdGN0eC5tb3ZlVG8od2lkdGgvMiwgMCk7XG5cdFx0XHRjdHgubGluZVRvKHdpZHRoLzIsIGhlaWdodCk7XG5cdFx0XHRjdHgubW92ZVRvKDAsIGhlaWdodC8yKTtcblx0XHRcdGN0eC5saW5lVG8od2lkdGgsIGhlaWdodC8yKTtcblx0XHRcdGN0eC5jbG9zZVBhdGgoKTtcblx0XHRcdGN0eC5zdHJva2UoKTtcblx0XHR9XG5cdFx0Ly8g44Oe44K555uu44KS5o+P5YaZXG5cdFx0ZWxzZXtcblx0XHRcdGN0eC5zdHJva2VSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuXHRcdH1cblxuXHRcdC8vIOaWnOe3muOCkuaPj+WGmVxuXHRcdGN0eC5saW5lV2lkdGggPSB0aGlzLmJvcmRlcldpZHRoLzI7XG5cdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRcdGlmKHRoaXMuYm9yZGVyU2xhc2hMZWZ0KXtcblx0XHRcdGN0eC5tb3ZlVG8oMCwgMCk7XG5cdFx0XHRjdHgubGluZVRvKHdpZHRoLCBoZWlnaHQpO1xuXHRcdH1cblx0XHRpZih0aGlzLmJvcmRlclNsYXNoUmlnaHQpe1xuXHRcdFx0Y3R4Lm1vdmVUbyh3aWR0aCwgMCk7XG5cdFx0XHRjdHgubGluZVRvKDAsIGhlaWdodCk7XG5cdFx0fVxuXHRcdGN0eC5jbG9zZVBhdGgoKTtcblx0XHRjdHguc3Ryb2tlKCk7XG5cdFx0Y3R4LnJlc3RvcmUoKTtcblxuXHRcdC8vIOaWh+Wtl+OCkuaPj+WGmVxuXHRcdGlmKGRpc3BsYXlUZXh0KXtcblx0XHRcdGN0eC5zYXZlKCk7XG5cdFx0XHRjdHgudHJhbnNsYXRlKGNlbnRlciwgbWlkZGxlKTtcblx0XHRcdGN0eC5maWxsU3R5bGUgPSB0aGlzLmJvcmRlckNvbG9yO1xuXG5cdFx0XHRjb25zdCByYWQgPSB0ZXh0Um90YXRlPyB0ZXh0Um90YXRlKk1hdGguUEkvMTgwOiAwO1xuXHRcdFx0Y3R4LnJvdGF0ZShyYWQpO1xuXG5cdFx0XHRjb25zdCBmb250U2l6ZSA9IE1hdGgubWluKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSowLjY7XG5cdFx0XHRjdHguZm9udCA9IGAke2ZvbnRTaXplfXB4ICR7Y2FudmFzRm9udC5uYW1lc31gO1xuXG5cdFx0XHRjb25zdCB3aWR0aCA9IGN0eC5tZWFzdXJlVGV4dChkaXNwbGF5VGV4dCkud2lkdGg7XG5cdFx0XHRjb25zdCBoZWlnaHQgPSBmb250U2l6ZS8yKjAuODtcblx0XHRcdGN0eC5maWxsVGV4dChkaXNwbGF5VGV4dCwgLXdpZHRoLzIsIGhlaWdodCk7XG5cdFx0XHRjdHgucmVzdG9yZSgpO1xuXHRcdH1cblx0fVxuXG5cdC8qKiDjg57jgrnnm67jgavjg57jgrnjgq/jgpLmj4/lhplcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0g44Kr44Op44O844Ko44OV44Kn44Kv44OI44Gu6ImyXG5cdCAqL1xuXHRkcmF3TWFzayhjb2xvcil7XG5cdFx0Y29uc3Qge2N0eH0gPSB0aGlzO1xuXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuXG5cdFx0Ly8g44Oe44K555uu44KS5o+P5YaZXG5cdFx0Y3R4LmZpbGxSZWN0KHRoaXMubGVmdCwgdGhpcy50b3AsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblx0fVxuXG5cdC8qKiDjg57jgrnnm67jgpLjg4bjgq3jgrnjg4jlvaLlvI/jgaflj5blvpdcblx0ICogQHBhcmFtIHtib29sZWFufSBpc0NvbXBhY3QgLSDjgrPjg7Pjg5Hjgq/jg4jooajnpLpcblx0ICovXG5cdHRvU3RyaW5nKGlzQ29tcGFjdD1mYWxzZSl7XG5cdFx0cmV0dXJuICFpc0NvbXBhY3Q/XG5cdFx0XHR0aGlzLnRleHQ6XG5cdFx0XHRg772cJHt0aGlzLnRleHQuc2xpY2UoLTEpLnJlcGxhY2UoL+OAgC9nLCBcIuODu1wiKX1gO1xuXHR9XG59XG4iLCIvKiogQHR5cGVkZWYge2ltcG9ydCgnLi9qc29uJykuUGllY2VJbml0T3B0aW9ufSBQaWVjZUluaXRPcHRpb24gKi9cbmltcG9ydCB7Y2FudmFzRm9udH0gZnJvbSBcIi4vY2FudmFzRm9udExvYWRlci5qc1wiO1xuaW1wb3J0IHtjYW52YXNJbWFnZX0gZnJvbSBcIi4vY2FudmFzSW1hZ2VMb2FkZXIuanNcIjtcbmltcG9ydCB7Z2FtZXMsIHBpZWNlcywgcGllY2VSYW5nZSwgcGllY2VDb3N0fSBmcm9tIFwiLi9qc29uLmpzXCI7XG5cbi8qKiDpp5Ljga7nrqHnkIbjgq/jg6njgrkgKi9cbmV4cG9ydCBjbGFzcyBQaWVjZXtcblx0LyoqIOaPj+WGmeOCteOCpOOCulxuXHQgKiBAdHlwZSB7bnVtYmVyfVxuXHQgKi9cblx0c3RhdGljIHNpemUgPSA0NTtcblxuXHQvKiog5qC844Gu6YGV44GE44Gr44KI44Gj44Gm6aeS44Gu5aSn44GN44GV44KS5aSJ5pu044GZ44KL44GLXG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0c3RhdGljIHVzZVJhbmtTaXplID0gdHJ1ZTtcblxuXHQvKiog5b2x44Gu5o+P5YaZ5pyJ54ShXG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0c3RhdGljIGlzRHJhd1NoYWRvdyA9IHRydWU7XG5cblx0LyoqIOODhuOCreOCueODiOWHuuWKm+aZguOBruODl+ODrOOCpOODpOODvOihqOekulxuXHQgKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgc3RyaW5nPn1cblx0ICovXG5cdHN0YXRpYyBkZWdDaGFycyA9IHtcblx0XHQwOiBcIuKWslwiLFxuXHRcdDkwOiBcIuKJq1wiLFxuXHRcdDE4MDogXCLilr1cIixcblx0XHQyNzA6IFwi77ycXCJcblx0fTtcblxuXHQvKiog44OX44Os44Kk44Ok44O86KGo56S644GL44KJ6KeS5bqm44KS5Y+W5b6XICovXG5cdHN0YXRpYyBjaGFyRGVncyA9IHt9O1xuXG5cdC8qKiDjgrXjgqTjgrrlpInmm7ToqK3lrprlgKRcblx0ICogQHR5cGUge09iamVjdDxzdHJpbmcsIG51bWJlcj59XG5cdCAqL1xuXHRzdGF0aWMgcmFua1JhdGlvID0ge1xuXHRcdFwiS1JcIjogMSxcblx0XHRcIlNSXCI6IDAuOTY1LFxuXHRcdFwiUlwiOiAwLjkzNSxcblx0XHRcIlVDXCI6IDAuOTAsXG5cdFx0XCJDXCI6IDAuODY1XG5cdH1cblxuXHQvKiog6aeS44Gu5q616ZqO5Yil5L6h5YCk44KS5Y+W5b6XICovXG5cdGdldCByYW5rKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdHRoaXMuY29zdCA8PSAwPyBcIktSXCI6XG5cdFx0XHQyMCA8PSB0aGlzLmNvc3Q/IFwiU1JcIjpcblx0XHRcdDEwIDw9IHRoaXMuY29zdD8gXCJSXCI6XG5cdFx0XHQ1IDw9IHRoaXMuY29zdD8gXCJVQ1wiOlxuXHRcdFx0XCJDXCJcblx0XHQpO1xuXHR9XG5cblxuXHQvKiog6aeS44OH44O844K/44KS5Yid5pyf5YyWXG5cdCAqIEBwYXJhbSB7YW55fSBjdHggLSBDYW52YXPmj4/nlLvjgrPjg7Pjg4bjgq3jgrnjg4hcblx0ICogQHBhcmFtIHtQaWVjZXxQaWVjZUluaXRPcHRpb259IG9wdGlvbiAtIOmnkuOBruWIneacn+WMluOCquODl+OCt+ODp+ODs1xuXHQgKi9cblx0c3RhdGljIGdldFBpZWNlcyhjdHgsIG9wdGlvbj17fSl7XG5cdFx0Y29uc3QgZXhQaWVjZXMgPSBuZXcgTWFwKE9iamVjdC5lbnRyaWVzKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocGllY2VzKSkpKTtcblxuXHRcdC8qIOODh+ODvOOCv+OCkuijnOWujCAqL1xuXHRcdGZvcihjb25zdCBbXywgcGllY2VdIG9mIGV4UGllY2VzKXtcblx0XHRcdHBpZWNlLmF0dHIgPz89IFtdO1xuXHRcdFx0aWYocGllY2UudW5pdCAmJiBwaWVjZS51bml0ICE9PSBcIuaIkFwiKSBwaWVjZS5iYXNlID0gcGllY2U7XG5cdFx0fVxuXHRcdC8qIOaIkOmnkuOBruODh+ODvOOCv+OCkuWQiOaIkCAqL1xuXHRcdGZvcihjb25zdCBbXywgcGllY2VdIG9mIGV4UGllY2VzKXtcblx0XHRcdGlmKCFwaWVjZS5wcm9tbyB8fCB0eXBlb2YocGllY2UucHJvbW8pICE9PSBcInN0cmluZ1wiKSBjb250aW51ZTtcblx0XHRcdGNvbnN0IHByb21vS2V5cyA9IFsuLi5waWVjZS5wcm9tb107XG5cdFx0XHRwaWVjZS5wcm9tbyA9IHt9O1xuXHRcdFx0Zm9yKGNvbnN0IGtleSBvZiBwcm9tb0tleXMpe1xuXHRcdFx0XHRjb25zdCBwcm9tbyA9IGV4UGllY2VzLmdldChrZXkpO1xuXHRcdFx0XHRwcm9tby5hdHRyLnB1c2goXCJwcm9tb3RlZFwiKTtcblx0XHRcdFx0cHJvbW8udW5pdCA9IFwi5oiQXCI7XG5cdFx0XHRcdHBpZWNlLnByb21vW2tleV0gPSBwcm9tbztcblx0XHRcdFx0ZXhQaWVjZXMuc2V0KGtleSx7Li4ucGllY2UsIC4uLnByb21vfSk7XG5cdFx0XHR9O1xuXHRcdH1cblx0XHQvLyDpp5LjgpLjgq/jg6njgrnjgqrjg5bjgrjjgqfjgq/jg4jjgavlpInmj5tcblx0XHRbLi4uZXhQaWVjZXNdLmZvckVhY2goKFtrZXksIHBpZWNlXSwgaSk9Pntcblx0XHRcdHBpZWNlLmlkID0gaTtcblx0XHRcdHBpZWNlLmNoYXIgPSBrZXk7XG5cdFx0XHRleFBpZWNlcy5zZXQoa2V5LCBuZXcgUGllY2UoY3R4LCBwaWVjZSwgb3B0aW9uKSk7XG5cdFx0fSk7XG5cdFx0Y29uc3QgZXhQaWVjZXNPYmogPSBPYmplY3QuZnJvbUVudHJpZXMoZXhQaWVjZXMpO1xuXHRcdC8vIOOCqOOCpOODquOCouOCueOBruODh+ODvOOCv+OCkue1seWQiFxuXHRcdGZvcihjb25zdCBba2V5LCBwaWVjZV0gb2YgZXhQaWVjZXMpe1xuXHRcdFx0cGllY2UuYWxpYXMuZm9yRWFjaCgoYWxpYXNLZXksIGkpPT57XG5cdFx0XHRcdGNvbnN0IGFsaWFzID0gcGllY2UuY2xvbmUoKTtcblx0XHRcdFx0Y29uc3QgZGlzcGxheSA9IFsuLi5hbGlhcy5kaXNwbGF5XTtcblx0XHRcdFx0YWxpYXMuZGlzcGxheVB0biA9IGkrMTtcblx0XHRcdFx0YWxpYXMuZGlzcGxheSA9IGRpc3BsYXk7XG5cdFx0XHRcdGFsaWFzLmFsaWFzW2ldID0ga2V5O1xuXHRcdFx0XHRleFBpZWNlc09ialthbGlhc0tleV0gPSBhbGlhcztcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gZXhQaWVjZXNPYmo7XG5cdH1cblxuXHQvKiog5paH5a2X5YiX44GL44KJ6aeS44KS5Y+W5b6XXG5cdCAqIEBwYXJhbSB7UGllY2V8UGllY2VJbml0T3B0aW9ufSBwaWVjZSAtIOmnklxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIOmnkuaWh+Wtl+WIl1xuXHQgKi9cblx0c3RhdGljIHN0cmluZ1RvUGllY2UocGllY2VzLCB0ZXh0KXtcblx0XHRpZiAoIXRleHQpIHJldHVybiBudWxsO1xuXHRcdGNvbnN0IFtkZWdDaGFyLCBwaWVjZUNoYXJdID0gWy4uLnRleHRdO1xuXHRcdGNvbnN0IGRlZyA9IFBpZWNlLmNoYXJEZWdzW2RlZ0NoYXJdO1xuXHRcdGlmKCFkZWcgfHwgIXBpZWNlc1twaWVjZUNoYXJdKSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCBwaWVjZSA9IHBpZWNlc1twaWVjZUNoYXJdLmNsb25lKCk7XG5cdFx0cGllY2UuZGVnID0gZGVnO1xuXHRcdHJldHVybiBwaWVjZTtcblx0fVxuXG5cdC8qKiDpp5Ljga7kuIDopqfjgpLjg6rjgrnjg4jjgaflj5blvpcgKi9cblx0c3RhdGljIHBpZWNlc1RvTGlzdChwaWVjZXMpe1xuXHRcdHJldHVybiBPYmplY3QuZW50cmllcyhwaWVjZXMpXG5cdFx0XHQuc29ydCgoW18se2lkOmF9XSwgW19fLHtpZDpifV0pPT5cblx0XHRcdFx0TWF0aC5zaWduKGEtYikpO1xuXHR9XG5cblx0LyoqIOmnkuOBruinkuW6pihkZWcvcmFkKVxuXHQgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcblx0ICovXG5cdHNldCBkZWcodmFsdWUpe1xuXHRcdHRoaXMucmFkID0gdmFsdWUlMzYwKk1hdGguUEkvMTgwO1xuXHR9XG5cdGdldCBkZWcoKXtcblx0XHRyZXR1cm4gdGhpcy5yYWQlMzYwLyhNYXRoLlBJLzE4MCk7XG5cdH1cblxuXHQvKiog5bem5YG044Gu5bqn5qiZICovXG5cdGdldCBsZWZ0KCl7XG5cdFx0cmV0dXJuIHRoaXMuY2VudGVyLXRoaXMuc2l6ZSowLjgvMjtcblx0fVxuXHQvKiog5LiK5YG044Gu5bqn5qiZICovXG5cdGdldCB0b3AoKXtcblx0XHRyZXR1cm4gdGhpcy5taWRkbGUtdGhpcy5zaXplLzI7XG5cdH1cblx0LyoqIOWPs+WBtOOBruW6p+aomSAqL1xuXHRnZXQgcmlnaHQoKXtcblx0XHRyZXR1cm4gdGhpcy5jZW50ZXIrdGhpcy5zaXplKjAuOC8yO1xuXHR9XG5cdC8qKiDkuIvlgbTjga7luqfmqJkgKi9cblx0Z2V0IGJvdHRvbSgpe1xuXHRcdHJldHVybiB0aGlzLm1pZGRsZSt0aGlzLnNpemUvMjtcblx0fVxuXG5cdC8qKiDmi6HlpKfnjofjgpLlj5blvpdcblx0ICogQHJldHVybnMge251bWJlcn1cblx0ICovXG5cdGdldCB6b29tKCl7XG5cdFx0bGV0IHpvb20gPXRoaXMuc2l6ZS8xMDA7XG5cdFx0aWYodGhpcy51c2VSYW5rU2l6ZSlcblx0XHRcdHpvb20gKj0gUGllY2UucmFua1JhdGlvW3RoaXMucmFua107XG5cdFx0cmV0dXJuIHpvb207XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHthbnl9IGN0eCAtIENhbnZhc+aPj+eUu+OCs+ODs+ODhuOCreOCueODiFxuXHQgKiBAcGFyYW0ge1BpZWNlfFBpZWNlSW5pdE9wdGlvbn0gcGllY2UgLSDpp5Jcblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbiAtIOOCquODl+OCt+ODp+ODs1xuXHQgKiBAcGFyYW0ge251bWJlcn0gb3B0aW9uLmRpc3BsYXlQdG4gLSDooajnpLrmloflrZfliJfjgpLlpInmm7QoMeOAnClcblx0ICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbi5kZWcgLSDpp5Ljga7op5LluqZcblx0ICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbi5zaXplIC0g6aeS44Gu5aSn44GN44GVXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9uLnVzZVJhbmtTaXplIC0g6aeS44Gu5aSn44GN44GV44KS5qC844Gu6YGV44GE44Gn5aSJ5pu044GZ44KL44GLXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9uLmlzRHJhd1NoYWRvdyAtIOmnkuOBruW9seOBruaPj+WGmeacieeEoVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5pc01vdmVkIC0g5Yid5Zue56e75YuV5riI44G/44GL5ZCm44GLXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihjdHgsIHBpZWNlLCBvcHRpb249e30pe1xuXHRcdGNvbnN0IHtcblx0XHRcdGRpc3BsYXlQdG49MCxcblx0XHRcdGRlZz0wLFxuXHRcdFx0c2l6ZT1QaWVjZS5zaXplLFxuXHRcdFx0dXNlUmFua1NpemU9UGllY2UudXNlUmFua1NpemUsXG5cdFx0XHRpc0RyYXdTaGFkb3c9UGllY2UuaXNEcmF3U2hhZG93LFxuXHRcdFx0aXNNb3ZlZD1mYWxzZVxuXHRcdH0gPSBvcHRpb247XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBwaWVjZSk7XG5cdFx0dGhpcy5jdHggPSBjdHg7XG5cdFx0dGhpcy5kaXNwbGF5ID8/PSBbXCJcIl07XG5cdFx0dGhpcy5pbWdTcmMgPz89IG51bGw7XG5cdFx0dGhpcy5hbGlhcyA9IFsuLi50aGlzLmFsaWFzID8/IFwiXCJdO1xuXHRcdHRoaXMuZGlzcGxheVB0biA9IGRpc3BsYXlQdG47XG5cdFx0dGhpcy5nYW1lID0gZ2FtZXNbdGhpcy5nYW1lTmFtZV07XG5cdFx0dGhpcy5jb3N0ID0gcGllY2VDb3N0W3RoaXMuY2hhcl0gPz8gMTtcblx0XHR0aGlzLmNlbnRlciA9IDA7XG5cdFx0dGhpcy5taWRkbGUgPSAwO1xuXHRcdHRoaXMuZGVnID0gZGVnO1xuXHRcdHRoaXMuc2l6ZSA9IHNpemU7XG5cdFx0dGhpcy51c2VSYW5rU2l6ZSA9IHVzZVJhbmtTaXplO1xuXHRcdHRoaXMuaXNEcmF3U2hhZG93ID0gaXNEcmF3U2hhZG93O1xuXHRcdHRoaXMuaXNSb3RhdGVJbWcgPz89IHRydWU7XG5cdFx0dGhpcy5pc01vdmVkID0gaXNNb3ZlZDtcblx0XHR0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcblx0XHR0aGlzLmF0dHIgPz89IFtdO1xuXHRcdHRyeXtcblx0XHRcdE9iamVjdC5lbnRyaWVzKHRoaXMucmFuZ2UpLmZvckVhY2goKFtrZXksIHJuZ10pPT57XG5cdFx0XHRcdGlmKEFycmF5LmlzQXJyYXkocm5nKSkgcmV0dXJuO1xuXHRcdFx0XHR0aGlzLnJhbmdlW2tleV0gPSBwaWVjZVJhbmdlW3JuZ10ubWFwKHJvdz0+Wy4uLnJvd10pXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Y2F0Y2goZSl7XG5cdFx0XHRjb25zb2xlLmVycm9yKGUpO1xuXHRcdFx0dGhyb3cgcGllY2U7XG5cdFx0fVxuXHR9XG5cblx0LyoqIOmnkuOCkuOCr+ODreODvOODs1xuXHQgKiBAcmV0dXJucyBQaWVjZVxuXHQgKi9cblx0Y2xvbmUoKXtcblx0XHRjb25zdCB7ZGlzcGxheVB0biwgZGVnLCBzaXplLCBpc01vdmVkfSA9IHRoaXM7XG5cdFx0cmV0dXJuIG5ldyBQaWVjZSh0aGlzLmN0eCwgey4uLnRoaXN9LCB7ZGlzcGxheVB0biwgZGVnLCBzaXplLCBpc01vdmVkfSk7XG5cdH1cblxuXHQvKiog6aeS44KS6KGo6L+U44GZICovXG5cdHR1cm5Gcm9udCgpe1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5iYXNlKTtcblx0fVxuXG5cdC8qKiDjg5fjg63jg6Ljg7zjgrfjg6fjg7Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IGNoYXIgLSDmiJDjgorlhYjjga7mloflrZdcblx0ICovXG5cdHByb21vdGlvbihjaGFyKXtcblx0XHRjb25zdCB7cHJvbW99ID0gdGhpcztcblxuXHRcdGlmKCFwcm9tbykgdGhyb3cgRXJyb3IoYHByb21vPSR7Y2hhcn0sIE5vdCBwbG9tb3RlIHBpZWNlLmApO1xuXHRcdGlmKCFwcm9tbyBpbiBwcm9tbykgdGhyb3cgRXJyb3IoYHByb21vPSR7Y2hhcn0sIFBsb21vdGUga2V5IGlzIG1pc3NpbmcuYCk7XG5cdFx0aWYodGhpcy5oYXNBdHRyKFwicHJvbW90ZWRcIikpIHRocm93IEVycm9yKGBwcm9tbz0ke2NoYXJ9LCBQcm9tb3RlZCBwaWVjZS5gKTtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHByb21vW2NoYXJdKTtcblx0XHR0aGlzLmNoYXIgPSBjaGFyO1xuXHR9XG5cblx0LyoqIOWxnuaAp+OBruWtmOWcqOOCkueiuuiqjVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYXR0ck5hbWUgLSDlsZ7mgKflkI1cblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRoYXNBdHRyKGF0dHJOYW1lKXtcblx0XHRyZXR1cm4gdGhpcy5hdHRyLmluY2x1ZGVzKGF0dHJOYW1lKTtcblx0fVxuXG5cdC8qKiDluqfmqJnjgYzpp5LjgavlkKvjgb7jgozjgovjgYvliKTlrppcblx0ICogQHBhcmFtIHtudW1iZXJ9IHggLSBY5bqn5qiZXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gWeW6p+aomVxuXHQgKi9cblx0Y2hlY2tSYW5nZU1vdXNlKHgsIHkpe1xuXHRcdHJldHVybiAoXG5cdFx0XHR0aGlzLmxlZnQgPD0geCAmJiB4IDwgdGhpcy5yaWdodCAmJlxuXHRcdFx0dGhpcy50b3AgPD0geSAmJiB5IDwgdGhpcy5ib3R0b21cblx0XHQpO1xuXHR9XG5cblx0LyoqIOenu+WLleevhOWbsuOCkuWbnui7ouOBl+OBpuWPluW+lyAqL1xuXHRnZXRSYW5nZSgpe1xuXHRcdGNvbnN0IGRlZyA9IDB8dGhpcy5kZWc7XG5cdFx0Y29uc3QgcmFuZ2UgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucmFuZ2UpKTtcblx0XHRPYmplY3Qua2V5cyhyYW5nZSkuZm9yRWFjaChrZXk9Pntcblx0XHRcdGlmKGRlZyA9PT0gMCkgcmV0dXJuO1xuXHRcdFx0aWYoIVs5MCwgMTgwLCAyNzBdLmluY2x1ZGVzKGRlZykpIHRocm93IEVycm9yKGBkZWc9JHtkZWd9LCBkZWcgbmVlZCBtdWx0aXBsZSBvZiA5MC5gKTtcblx0XHRcdGlmKFs5MCwgMjcwXS5pbmNsdWRlcyhkZWcpKXtcblx0XHRcdFx0Ly8gMuasoemFjeWIl+OCkui7oue9rlxuXHRcdFx0XHRjb25zdCB0cmFuc3Bvc2UgPSBhID0+IGFbMF0ubWFwKChfLCBjKSA9PiBhLm1hcChyID0+IHJbY10pKTtcblx0XHRcdFx0cmFuZ2Vba2V5XSA9IHRyYW5zcG9zZShyYW5nZVtrZXldKTtcblx0XHRcdH1cblx0XHRcdGlmKFsxODAsIDI3MF0uaW5jbHVkZXMoZGVnKSl7XG5cdFx0XHRcdHJhbmdlW2tleV0ucmV2ZXJzZSgpO1xuXHRcdFx0fVxuXHRcdFx0cmFuZ2Vba2V5XS5mb3JFYWNoKHJvdz0+e1xuXHRcdFx0XHRpZihbOTAsIDE4MF0uaW5jbHVkZXMoZGVnKSkgcm93LnJldmVyc2UoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHJldHVybiByYW5nZTtcblx0fVxuXG5cdC8qKiDpp5Iv44Oe44K544Kv44KS5o+P5YaZICovXG5cdGFzeW5jIGRyYXcoKXtcblx0XHRjb25zdCBzZWxlY3RDb2xvciA9IFwiI0ZGMDAwMDU1XCI7XG5cdFx0aWYodGhpcy5pbWdTcmMgJiYgY2FudmFzSW1hZ2UuaW1wb3J0ZWQpe1xuXHRcdFx0dGhpcy5kcmF3SW1hZ2UoKTtcblx0XHRcdGlmKHRoaXMuaXNTZWxlY3RlZCkgdGhpcy5kcmF3TWFza0ltYWdlKHNlbGVjdENvbG9yKTtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdHRoaXMuZHJhd1BpZWNlKCk7XG5cdFx0XHRpZih0aGlzLmlzU2VsZWN0ZWQpIHRoaXMuZHJhd01hc2soc2VsZWN0Q29sb3IpO1xuXHRcdH1cblx0fVxuXG5cdC8qKiDpp5LnlLvlg4/jgpLmj4/lhpkgKi9cblx0ZHJhd0ltYWdlKCl7XG5cdFx0Y29uc3Qge2N0eCwgc2l6ZX0gPSB0aGlzO1xuXG5cdFx0Y29uc3Qgc3JjID0gdGhpcy5pbWdTcmNbdGhpcy5kaXNwbGF5UHRuXTtcblx0XHRjb25zdCBpbWFnZSA9IGNhbnZhc0ltYWdlLmltYWdlc1tzcmNdO1xuXHRcdGlmKCFpbWFnZSkgcmV0dXJuO1xuXG5cdFx0Y3R4LnNhdmUoKTtcblx0XHRjdHgudHJhbnNsYXRlKHRoaXMuY2VudGVyLCB0aGlzLm1pZGRsZSk7XG5cdFx0aWYodGhpcy5pc1JvdGF0ZUltZykgY3R4LnJvdGF0ZSh0aGlzLnJhZCk7XG5cblx0XHRsZXQgaW1nV2lkdGgsIGltZ0hlaWdodDtcblx0XHRpZihpbWFnZS53aWR0aCowLjkgPCBpbWFnZS5oZWlnaHQpe1xuXHRcdFx0aW1nV2lkdGggPSBpbWFnZS53aWR0aC9pbWFnZS5oZWlnaHQqc2l6ZVxuXHRcdFx0aW1nSGVpZ2h0ID0gc2l6ZTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpbWdXaWR0aCA9IHNpemU7XG5cdFx0XHRpbWdIZWlnaHQgPSBpbWFnZS5oZWlnaHQvaW1hZ2Uud2lkdGgqc2l6ZTtcblx0XHR9XG5cdFx0Y3R4LmRyYXdJbWFnZShpbWFnZSwgLWltZ1dpZHRoLzIsIC1pbWdIZWlnaHQvMiwgaW1nV2lkdGgsIGltZ0hlaWdodCk7XG5cdFx0Y3R4LnJlc3RvcmUoKTtcblx0fVxuXG5cdC8qKiDpp5LnlLvlg4/jgavjg57jgrnjgq/jgpLmj4/lhplcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0g44Kr44Op44O844Ko44OV44Kn44Kv44OI44Gu6ImyXG5cdCAqL1xuXHRkcmF3TWFza0ltYWdlKGNvbG9yKXtcblx0XHRjb25zdCB7Y3R4LCBzaXplfSA9IHRoaXM7XG5cblx0XHRjdHguZmlsbFN0eWxlID0gY29sb3I7XG5cdFx0Y3R4LnNhdmUoKTtcblx0XHRjb25zdCBpbWdXaWR0aCA9IHNpemUqMC45O1xuXHRcdGNvbnN0IGltZ0hlaWdodCA9IHNpemU7XG5cblx0XHRjdHgudHJhbnNsYXRlKHRoaXMuY2VudGVyLCB0aGlzLm1pZGRsZSk7XG5cdFx0Y3R4LmZpbGxSZWN0KC1pbWdXaWR0aC8yLCAtaW1nSGVpZ2h0LzIsIGltZ1dpZHRoLCBpbWdIZWlnaHQpO1xuXHRcdGN0eC5yZXN0b3JlKCk7XG5cdH1cblxuXHQvKiog5bCG5qOL6aeS44Gu5aSW5b2i44OR44K544KS5L2c5oiQXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB6b29tIC0g6aeS44Gu5ouh5aSn546HXG5cdCAqL1xuXHRtYWtlUGF0aCh6b29tKXtcblx0XHRjb25zdCB7Y3R4fSA9IHRoaXM7XG5cblx0XHRjdHgudHJhbnNsYXRlKHRoaXMuY2VudGVyLCB0aGlzLm1pZGRsZSk7XG5cdFx0Y3R4LnJvdGF0ZSh0aGlzLnJhZCk7XG5cblx0XHQvKiDlpJbmnqDjgpLmj4/lhpkgKi9cblx0XHRjdHguYmVnaW5QYXRoKCk7XG5cdFx0Y3R4Lm1vdmVUbygtMzAqem9vbSwtNDAqem9vbSk7XG5cdFx0Y3R4LmxpbmVUbyggIDAqem9vbSwtNTAqem9vbSk7XG5cdFx0Y3R4LmxpbmVUbyggMzAqem9vbSwtNDAqem9vbSk7XG5cdFx0Y3R4LmxpbmVUbyggNDUqem9vbSwgNTAqem9vbSk7XG5cdFx0Y3R4LmxpbmVUbygtNDUqem9vbSwgNTAqem9vbSk7XG5cdFx0Y3R4LmNsb3NlUGF0aCgpO1xuXHR9XG5cblx0LyoqIOmnkuOBruW9seOCkuaPj+WGmVxuXHQqIEBwYXJhbSB7bnVtYmVyfSB6b29tIC0g6aeS44Gu5ouh5aSn546HXG5cdCovXG4gICBkcmF3UGllY2VTaGFkb3coem9vbSl7XG5cdFx0aWYoIXRoaXMuaXNEcmF3U2hhZG93KSByZXR1cm47XG5cdFx0Y29uc3Qge2N0eH0gPSB0aGlzO1xuXG5cdFx0Y3R4LnNhdmUoKTtcblx0XHRjdHgudHJhbnNsYXRlKDAsIDEwKnpvb20pO1xuXHRcdHRoaXMuZHJhd01hc2soXCIjMDAwMDAwNjZcIik7XG5cdFx0Y3R4LnJlc3RvcmUoKTtcblx0fVxuXG5cdC8qKiDpp5LjgpLmj4/lhpkgKi9cblx0ZHJhd1BpZWNlKCl7XG5cdFx0Y29uc3Qge2N0eCwgZ2FtZSwgem9vbX0gPSB0aGlzO1xuXG5cdFx0bGV0IGZvbnRDb2xvciwgYmFja2dyb3VuZENvbG9yLCBib3JkZXJDb2xvcjtcblx0XHRpZih0aGlzLmhhc0F0dHIoXCJwcm9tb3RlZFwiKSl7XG5cdFx0XHRmb250Q29sb3IgPSBnYW1lLnByb21vdGVGb250Q29sb3IgPz8gZ2FtZS5mb250Q29sb3IgPz8gXCIjMDAwMDAwXCI7XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSBnYW1lLnByb21vdGVCYWNrZ3JvdW5kQ29sb3IgPz8gZ2FtZS5iYWNrZ3JvdW5kQ29sb3IgPz8gXCIjRkZGRkZGXCIsXG5cdFx0XHRib3JkZXJDb2xvciA9IGdhbWUucHJvbW90ZUJvcmRlckNvbG9yID8/IGdhbWUuYm9yZGVyQ29sb3IgPz8gXCIjRkYzMzAwXCI7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0Zm9udENvbG9yID0gZ2FtZS5mb250Q29sb3IgPz8gXCIjMDAwMDAwXCI7XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3IgPSBnYW1lLmJhY2tncm91bmRDb2xvciA/PyBcIiNGRkZGRkZcIixcblx0XHRcdGJvcmRlckNvbG9yID0gZ2FtZS5ib3JkZXJDb2xvciA/PyBcIiM3Nzc3NzdcIjtcblx0XHR9XG5cblx0XHRjdHguc3Ryb2tlU3R5bGUgPSBib3JkZXJDb2xvcjtcblx0XHRjdHguZmlsbFN0eWxlID0gYmFja2dyb3VuZENvbG9yO1xuXHRcdGN0eC5saW5lV2lkdGggPSA4Knpvb207XG5cdFx0dGhpcy5kcmF3UGllY2VTaGFkb3coem9vbSk7XG5cdFx0Y3R4LnNhdmUoKTtcblx0XHR0aGlzLm1ha2VQYXRoKHpvb20pO1xuXHRcdGN0eC5zdHJva2UoKTtcblx0XHRjdHguZmlsbCgpO1xuXG5cdFx0Lyog5paH5a2X44KS5o+P5YaZICovXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IGZvbnRDb2xvcjtcblx0XHRjb25zdCB0ZXh0ID0gWy4uLlwiXCIrdGhpcy5kaXNwbGF5W3RoaXMuZGlzcGxheVB0bl1dO1xuXHRcdGNvbnN0IGZvbnRTaXplID0gNDAqem9vbTtcblx0XHRjdHguZm9udCA9IGAke2ZvbnRTaXplfXB4ICR7Y2FudmFzRm9udC5uYW1lc31gO1xuXHRcdGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuXG5cdFx0dGV4dC5mb3JFYWNoKCh2LGkpPT57XG5cdFx0XHRjb25zdCBoZWlnaHQgPSB0ZXh0Lmxlbmd0aCA9PT0gMT8gZm9udFNpemUvMjogaSpmb250U2l6ZTtcblx0XHRcdGN0eC5maWxsVGV4dCh2LCAwLCBoZWlnaHQpO1xuXHRcdH0pO1xuXHRcdGN0eC5yZXN0b3JlKCk7XG5cdH1cblxuXHQvKiog6aeS44Gr44Oe44K544Kv44KS5o+P5YaZXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIOOCq+ODqeODvOOCqOODleOCp+OCr+ODiOOBruiJslxuXHQgKi9cblx0ZHJhd01hc2soY29sb3Ipe1xuXHRcdGNvbnN0IHtjdHgsIHpvb219ID0gdGhpcztcblxuXHRcdGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcblx0XHRjdHguc2F2ZSgpO1xuXHRcdHRoaXMubWFrZVBhdGgoem9vbSk7XG5cdFx0Y3R4LmZpbGwoKTtcblxuXHRcdGN0eC5yZXN0b3JlKCk7XG5cdH1cblxuXHQvKiog5paH5a2X5YiX5b2i5byP44Gn5Y+W5b6XICovXG5cdHRvU3RyaW5nKCl7XG5cdFx0cmV0dXJuIFBpZWNlLmRlZ0NoYXJzW3RoaXMuZGVnXSArIHRoaXMuY2hhcjtcblx0fVxufVxuXG4vLyDjg5fjg6zjgqTjg6Tjg7zooajnpLrjgYvjgonop5LluqbjgpLlj5blvpdcbk9iamVjdC5lbnRyaWVzKFBpZWNlLmRlZ0NoYXJzKVxuXHQuZm9yRWFjaCgoW2tleSwgdmFsdWVdKT0+e1xuXHRcdFBpZWNlLmNoYXJEZWdzW3ZhbHVlXSA9IGtleTtcblx0fSk7XG4iLCJpbXBvcnQge0JvYXJkfSBmcm9tIFwiLi9ib2FyZC5qc1wiO1xuaW1wb3J0IHtQaWVjZX0gZnJvbSBcIi4vcGllY2UuanNcIjtcblxuLy8g56e75YuV56+E5Zuy44Kq44OX44K344On44OzXG5jb25zdCByYW5nZU9wdGlvbnMgPSBbXG5cdFtcImRlZmF1bHRcIiwge2lzQXR0YWNrOiBmYWxzZX1dLFxuXHRbXCJhdHRhY2tcIiwge2lzQXR0YWNrOiB0cnVlfV0sXG5cdFtcInN0YXJ0XCIsIHtpc0F0dGFjazogZmFsc2V9XSxcblx0W1wiY2FzdGxpbmdcIiwge2lzQXR0YWNrOiBmYWxzZX1dLFxuXHRbXCJlblBhc3NhbnRcIiwge2lzQXR0YWNrOiB0cnVlfV0sXG5cdFtcInBhbGFjZVNsYXNoXCIsIHtpc0F0dGFjazogZmFsc2V9XSxcblx0W1wicGFsYWNlU2xhc2hcIiwge2lzQXR0YWNrOiB0cnVlfV1cbl07XG5cbi8vIOi1t+eCueaWh+Wtl+OBruWumue+qVxuY29uc3QgY2VudGVyQ2hhcnMgPSBbXG5cdFtcIk9cIiwge2lzT3duOiB0cnVlfV0sXG5cdFtcIm9cIiwge31dXG5dO1xuXG4vLyDnp7vli5Xnr4Tlm7LmloflrZfjga7opqrlrZDplqLkv4Jcbi8qKiDngrnnp7vli5Xjgqrjg5fjgrfjg6fjg7NcbiAqIEB0eXBlIHtPYmplY3Q8a2V5OiBzdHJpbmcsIHtjaGlsZDogc3RyaW5nW119PltdfVxuICogQHBhcmFtIGtleSAtIOenu+WLleevhOWbsuOCkuWumue+qeOBmeOCi+aWh+Wtl1xuICogQHBhcmFtIHtudW1iZXJ9IG1vdmVzLSDpgLLooYzlj6/og73jgarjg57jgrnmlbBcbiAqL1xuY29uc3QgcG9pbnRDaGFycyA9IFtcblx0W1wib1wiXSxcblx0W1wiQVwiLCB7Y2hpbGQ6IFtcImFcIl19XSxcblx0W1wiQlwiLCB7Y2hpbGQ6IFtcImJcIl19XSxcblx0W1wiQ1wiLCB7Y2hpbGQ6IFtcImNcIl19XSxcblx0W1wiRFwiLCB7Y2hpbGQ6IFtcImRcIl19XSxcblx0W1wiRVwiLCB7Y2hpbGQ6IFtcImFcIiwgXCJlXCJdfV0sXG5cdFtcIkZcIiwge2NoaWxkOiBbXCJhXCIsIFwiZlwiXX1dLFxuXHRbXCJHXCIsIHtjaGlsZDogW1wiYlwiLCBcImdcIl19XSxcblx0W1wiSFwiLCB7Y2hpbGQ6IFtcImJcIiwgXCJoXCJdfV0sXG5cdFtcIklcIiwge2NoaWxkOiBbXCJjXCIsIFwiaVwiXX1dLFxuXHRbXCJKXCIsIHtjaGlsZDogW1wiY1wiLCBcImpcIl19XSxcblx0W1wiS1wiLCB7Y2hpbGQ6IFtcImRcIiwgXCJrXCJdfV0sXG5cdFtcIkxcIiwge2NoaWxkOiBbXCJkXCIsIFwibFwiXX1dXG5dO1xuXG4vKiog55u057ea56e75YuV44Kq44OX44K344On44OzXG4gKiBAdHlwZSB7T2JqZWN0PGtleTogc3RyaW5nLCB7am1wczogbnVtYmVyLCBtb3ZlczogbnVtYmVyfT5bXX1cbiAqIEBwYXJhbSBrZXkgLSDnp7vli5Xnr4Tlm7LjgpLlrprnvqnjgZnjgovmloflrZdcbiAqIEBwYXJhbSBqbXBzIC0g5b+F6KaB44Gq44K444Oj44Oz44OX5Zue5pWwXG4gKiBAcGFyYW0gbW92ZXMtIOmAsuihjOWPr+iDveOBquODnuOCueaVsFxuICovXG5jb25zdCBsaW5lckNoYXJzID0gW1xuXHRbXCIqXCIsIHt9XSxcblx0W1wiK1wiLCB7am1wczogMX1dLFxuXHRbXCJ8XCIsIHtqbXBzOiAxLCBtb3ZlczogMX1dXG5dO1xuZm9yKGxldCBpPTE7aTw9OTtpKyspXG5cdGxpbmVyQ2hhcnMucHVzaChbXCJcIitpLCB7bW92ZXM6IGl9XSk7XG5cbi8qKiByYW5nZeOBruWOn+eCueW6p+aomeOCkuWPluW+l1xuICogQHBhcmFtIHtzdHJpbmdbXX0gcmFuZ2UgLSDnp7vli5Xnr4Tlm7Lmg4XloLFcbiAqL1xuZnVuY3Rpb24gZ2V0T3JpZ2luKHJhbmdlKXtcblx0Y29uc3Qgb0xpc3QgPSBbXTtcblx0bGV0IG93blgsIG93blk7XG5cdGZvcihsZXQgclk9MDtyWTxyYW5nZS5sZW5ndGg7clkrKyl7XG5cdFx0Zm9yKGxldCByWD0wO3JYPHJhbmdlW3JZXS5sZW5ndGg7clgrKyl7XG5cdFx0XHRjb25zdCByQ2hhciA9IHJhbmdlW3JZXVtyWF07XG5cdFx0XHRmb3IobGV0IFtrZXksIHtpc093bn1dIG9mIGNlbnRlckNoYXJzKXtcblx0XHRcdFx0aWYockNoYXIgIT09IGtleSkgY29udGludWU7XG5cdFx0XHRcdG9MaXN0LnB1c2goe2lzT3duLCBvWDogclgsIG9ZOiByWX0pO1xuXHRcdFx0XHRpZihpc093bikgW293blgsIG93blldID0gW3JYLCByWV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBvTGlzdC5tYXAobz0+e1xuXHRcdG8ub2Zmc2V0WCA9IG8ub1gtb3duWDtcblx0XHRvLm9mZnNldFkgPSBvLm9ZLW93blk7XG5cdFx0cmV0dXJuIG87XG5cdH0pO1xufVxuXG4vKiog6aeS44Gu56e75YuV5Yik5a6aXG4gKiBAcGFyYW0ge0JvYXJkfSBib2FyZCAtIOODnOODvOODiVxuICogQHBhcmFtIHtQaWVjZX0gcGllY2UgLSDpp5JcbiAqIEBwYXJhbSB7bnVtYmVyfSBwWCAtIOODnuOCueebruOBruWIl1xuICogQHBhcmFtIHtudW1iZXJ9IHBZIC0g44Oe44K555uu44Gu6KGMXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tUYXJnZXQoYm9hcmQsIHBpZWNlLCBwWCwgcFkpe1xuXHRjb25zdCB7ZmllbGQsIHlMZW4sIGVuUGFzc2FudH0gPSBib2FyZDtcblxuXHQvKiog44Oe44K555uu5bqn5qiZ44GM44Oc44O844OJ56+E5Zuy5YaF44GL5Yik5a6aXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4IC0g5Yik5a6a44GZ44KL44Oe44K555uu44Gu5YiXXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IC0g5Yik5a6a44GZ44KL44Oe44K555uu44Gu6KGMXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0ZnVuY3Rpb24gaW5GaWVsZCh4LCB5KXtcblx0XHRyZXR1cm4gZmllbGRbeV0gJiYgZmllbGRbeV1beF0gJiYgIWZpZWxkW3ldW3hdLmhhc0F0dHIoXCJrZWVwT3V0XCIpO1xuXHR9XG5cblx0LyoqIOWMheWQjOWjq+OBp+OBguOCi+OBi1xuXHQgKiBAcGFyYW0ge1BhbmVsfSBwYW5lbCAtIOODnuOCueebrlxuXHQgKi9cblx0ZnVuY3Rpb24gaXNWc1BvKHBhbmVsKXtcblx0XHRyZXR1cm4gcGFuZWwucGllY2UgJiYgcGllY2UuaGFzQXR0cihcInBvXCIpICYmIHBhbmVsLnBpZWNlLmhhc0F0dHIoXCJwb1wiKTtcblx0fVxuXG5cdC8qKiDlr77osaHpp5LjgYzngq7jgaflj5bjgozjgovjgYtcblx0ICogQHBhcmFtIHtQYW5lbH0gcGFuZWwgLSDjg57jgrnnm65cblx0ICovXG5cdGZ1bmN0aW9uIGlzQXR0YWNrRnJvbVBhbyhwYW5lbCl7XG5cdFx0cmV0dXJuIHBhbmVsLnBpZWNlXG5cdFx0XHQmJiAhcGllY2UuaXNNb3ZlZFxuXHRcdFx0JiYgIXBhbmVsLnBpZWNlLmlzTW92ZWRcblx0XHRcdCYmIHBpZWNlLmhhc0F0dHIoXCJwYW9cIilcblx0XHRcdCYmIHBpZWNlLmNvc3QgPCBwYW5lbC5waWVjZS5jb3N0O1xuXHR9XG5cblx0LyoqIOenu+WLleWPr+iDveOBi+WIpOWumlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQXR0YWNrIC0g6aeS44KS5Y+W5b6X5a++6LGh44Gr5ZCr44KA44GLP1xuXHQgKiBAcGFyYW0ge251bWJlcn0geCAtIOWIpOWumuOBmeOCi+ODnuOCueebruOBruWIl1xuXHQgKiBAcGFyYW0ge251bWJlcn0geSAtIOWIpOWumuOBmeOCi+ODnuOCueebruOBruihjFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcmFuZ2VOYW1lIC0g56e75YuV56+E5Zuy44Gu5a6a576p5ZCNXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gY2hlY2tSaXZhbERlZyAtIOaVteOBrumnkuOBruOBv+OCkuenu+WLleWFiOOBqOOBmeOCi+OBiz9cblx0ICogQHJldHVybnMgYm9vbGVhblxuXHQgKi9cblx0ZnVuY3Rpb24gY2FuTW92ZShpc0F0dGFjaywgeCwgeSwgcmFuZ2VOYW1lPVwiXCIsIGNoZWNrUml2YWxEZWc9dHJ1ZSl7XG5cdFx0aWYoIWZpZWxkW3ldIHx8ICFmaWVsZFt5XVt4XSkgcmV0dXJuIGZhbHNlO1xuXHRcdGNvbnN0IHBhbmVsID0gZmllbGRbeV1beF07XG5cdFx0aWYoIXBhbmVsKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYoaXNWc1BvKHBhbmVsKSkgcmV0dXJuIGZhbHNlO1xuXHRcdGlmKGlzQXR0YWNrRnJvbVBhbyhwYW5lbCkpIHJldHVybiBmYWxzZTtcblx0XHRpZihyYW5nZU5hbWUgPT09IFwiZW5QYXNzYW50XCIgJiYgIWVuUGFzc2FudC5pc1RhcmdldChwYW5lbCwgcGllY2UpKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYocGllY2UuaGFzQXR0cihcImluUGFsYWNlXCIpICYmICFwYW5lbC5oYXNBdHRyKFwicGFsYWNlXCIpKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYocmFuZ2VOYW1lLmluZGV4T2YoXCJwYWxhY2VcIikgPT09IDAgJiYgIShwYW5lbC5oYXNBdHRyKHJhbmdlTmFtZSkgJiYgZmllbGRbcFldW3BYXS5oYXNBdHRyKHJhbmdlTmFtZSkpKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYocGllY2UuaGFzQXR0cihcInVuQ3Jvc3NSaXZlclwiKSAmJiB5TGVuLSgwfHlMZW4vMikgPD0gYm9hcmQuZ2V0Um93KHgsIHksIHBpZWNlLmRlZykpIHJldHVybiBmYWxzZTtcblx0XHRpZighaXNBdHRhY2spIHJldHVybiAhZmllbGRbeV1beF0ucGllY2U7XG5cdFx0aWYoIWZpZWxkW3ldW3hdLnBpZWNlKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYoY2hlY2tSaXZhbERlZykgcmV0dXJuIHBpZWNlLmRlZyAhPT0gZmllbGRbeV1beF0ucGllY2UuZGVnO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0LyoqIOWtkOOBqOOBquOCi+enu+WLleevhOWbsuOBq+mnkuOBjOWtmOWcqOOBmeOCi+OBi1xuXHQgKiBAcGFyYW0ge3N0cmluZ1tdfSByYW5nZSAtIOenu+WLleevhOWbsuaDheWgsVxuXHQgKiBAcGFyYW0ge3N0cmluZ1tdfSBjaGlsZCAtIOWtkOOBqOOBquOCi+aWh+Wtl+OBruS4gOimp1xuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQXR0YWNrIC0g6aeS44KS5Y+W5b6X5a++6LGh44Gr5ZCr44KA44GLP1xuXHQgKiBAcGFyYW0ge251bWJlcn0gb1ggLSDnp7vli5Xnr4Tlm7Lmg4XloLHjga7ljp/ngrnkvY3nva4o6KGMKVxuXHQgKiBAcGFyYW0ge251bWJlcn0gb1kgLSDnp7vli5Xnr4Tlm7Lmg4XloLHjga7ljp/ngrnkvY3nva4o5YiXKVxuXHQgKiBAcmV0dXJucyBib29sZWFuXG5cdCAqL1xuXHRmdW5jdGlvbiBleGlzdHNDaGlsZChyYW5nZSwgY2hpbGQsIGlzQXR0YWNrLCBvWCwgb1kpe1xuXHRcdGZvcihjb25zdCBjaGFyIG9mIGNoaWxkKXtcblx0XHRcdGZvcihsZXQgclk9MDtyWTxyYW5nZS5sZW5ndGg7clkrKyl7XG5cdFx0XHRcdGZvcihsZXQgclg9MDtyWDxyYW5nZVtyWV0ubGVuZ3RoO3JYKyspe1xuXHRcdFx0XHRcdGNvbnN0IFt4LCB5XSA9IFtyWCtwWC1vWCwgclkrcFktb1ldO1xuXHRcdFx0XHRcdGlmKFxuXHRcdFx0XHRcdFx0IWluRmllbGQoeCwgeSkgfHxcblx0XHRcdFx0XHRcdGNhbk1vdmUoaXNBdHRhY2ssIDB8eCwgMHx5LCBcIlwiLCBmYWxzZSkgfHxcblx0XHRcdFx0XHRcdHJhbmdlW3JZXVtyWF0gIT09IGNoYXJcblx0XHRcdFx0XHQpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdHJldHVybiB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqIOenu+WLleWFiOihqOekuuOCkuioreWumlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcmFuZ2VOYW1lIC0g56e75YuV56+E5Zuy44Gu5a6a576p5ZCNXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4IC0g5Yik5a6a44GZ44KL44Oe44K555uu44Gu5YiXXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5IC0g5Yik5a6a44GZ44KL44Oe44K555uu44Gu6KGMXG5cdCAqL1xuXHRmdW5jdGlvbiBzZXRUYXJnZXQocmFuZ2VOYW1lLCB4LCB5KXtcblx0XHRjb25zdCBwYW5lbCA9IGZpZWxkW3ldW3hdO1xuXHRcdHBhbmVsLmFkZFRhcmdldChyYW5nZU5hbWUpO1xuXHRcdGVuUGFzc2FudC5zZXRUYXJnZXQocGFuZWwsIHBpZWNlKTtcblx0fVxuXG5cdC8qKiDngrnnp7vli5Vcblx0ICogQHBhcmFtIHtzdHJpbmdbXX0gcmFuZ2UgLSDnp7vli5Xnr4Tlm7Lmg4XloLFcblx0ICogQHBhcmFtIHtzdHJpbmd9IHJhbmdlTmFtZSAtIOenu+WLleevhOWbsuOBruWumue+qeWQjVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQXR0YWNrIC0g6aeS44KS5Y+W5b6X5a++6LGh44Gr5ZCr44KA44GLP1xuXHQgKiBAcGFyYW0ge251bWJlcn0gb1ggLSDnp7vli5Xnr4Tlm7Lmg4XloLHjga7ljp/ngrnkvY3nva4o6KGMKVxuXHQgKiBAcGFyYW0ge251bWJlcn0gb1kgLSDnp7vli5Xnr4Tlm7Lmg4XloLHjga7ljp/ngrnkvY3nva4o5YiXKVxuXHQgKi9cblx0ZnVuY3Rpb24gbW92ZVBvaW50KHJhbmdlLCBbcmFuZ2VOYW1lLCB7aXNBdHRhY2t9XSwge29YLCBvWSwgaXNPd259KXtcblx0XHRpZighaXNPd24pIHJldHVybjtcblx0XHRmb3IoY29uc3QgW3BhcmVudCwge2NoaWxkPVtdfT17fV0gb2YgcG9pbnRDaGFycyl7XG5cdFx0XHRmb3IobGV0IHJZPTA7clk8cmFuZ2UubGVuZ3RoO3JZKyspe1xuXHRcdFx0XHRmb3IobGV0IHJYPTA7clg8cmFuZ2VbclldLmxlbmd0aDtyWCsrKXtcblx0XHRcdFx0XHRjb25zdCBbeCwgeV0gPSBbclgrcFgtb1gsIHJZK3BZLW9ZXTtcblx0XHRcdFx0XHRpZighaW5GaWVsZCh4LCB5KVxuXHRcdFx0XHRcdFx0fHwgIWNhbk1vdmUoaXNBdHRhY2ssIHgsIHksIHJhbmdlTmFtZSlcblx0XHRcdFx0XHRcdHx8IHJhbmdlW3JZXVtyWF0gIT09IHBhcmVudFxuXHRcdFx0XHRcdFx0fHwgZXhpc3RzQ2hpbGQocmFuZ2UsIGNoaWxkLCBmYWxzZSwgb1gsIG9ZKSkgY29udGludWU7XG5cdFx0XHRcdFx0c2V0VGFyZ2V0KHJhbmdlTmFtZSwgeCwgeSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiog55u057ea56e75YuVXG5cdCAqIEBwYXJhbSB7c3RyaW5nW119IHJhbmdlIC0g56e75YuV56+E5Zuy5oOF5aCxXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSByYW5nZU5hbWUgLSDnp7vli5Xnr4Tlm7Ljga7lrprnvqnlkI1cblx0ICogQHBhcmFtIHtib29sZWFufSBpc0F0dGFjayAtIOmnkuOCkuWPluW+l+WvvuixoeOBq+WQq+OCgOOBiz9cblx0ICogQHBhcmFtIHtudW1iZXJ9IG9YIC0g56e75YuV56+E5Zuy5oOF5aCx44Gu5Y6f54K55L2N572uKOihjClcblx0ICogQHBhcmFtIHtudW1iZXJ9IG9ZIC0g56e75YuV56+E5Zuy5oOF5aCx44Gu5Y6f54K55L2N572uKOWIlylcblx0ICovXG5cdGZ1bmN0aW9uIG1vdmVMaW5lcihyYW5nZSwgW3JhbmdlTmFtZSwge2lzQXR0YWNrfV0sIHtvWCwgb1ksIGlzT3duLCBvZmZzZXRYLCBvZmZzZXRZfSl7XG5cdFx0aWYoIWlzT3duICYmICFjYW5Nb3ZlKGZhbHNlLCBwWCtvZmZzZXRYLCBwWStvZmZzZXRZKSkgcmV0dXJuO1xuXHRcdGZvcihjb25zdCBbY2hhciwge2ptcHM9MCwgbW92ZXM9MH09e31dIG9mIGxpbmVyQ2hhcnMpe1xuXHRcdFx0Y29uc3QgaXNNb3ZlSW5mID0gIW1vdmVzIHx8IDAgPT09IG1vdmVzO1xuXHRcdFx0Ly8g5Y6f54K544Gu5ZGo5ZuyOOODnuOCueOCkuaOoue0olxuXHRcdFx0Zm9yKGxldCByWT1vWS0xO3JZPD1vWSsxO3JZKyspe1xuXHRcdFx0XHRmb3IobGV0IHJYPW9YLTE7clg8PW9YKzE7clgrKyl7XG5cdFx0XHRcdFx0aWYocmFuZ2VbclldW3JYXSAhPT0gY2hhciB8fCByWCA9PT0gb1ggJiYgclkgPT09IG9ZKSBjb250aW51ZTtcblx0XHRcdFx0XHRsZXQgam1wQ250ID0gam1wcz8gam1wczogMDtcblx0XHRcdFx0XHRsZXQgbW92ZUNudCA9IG1vdmVzPyBtb3ZlczogMDtcblx0XHRcdFx0XHRjb25zdCBbaW5jWCwgaW5jWV0gPSBbclgtb1gsIHJZLW9ZXTtcblx0XHRcdFx0XHRmb3IobGV0IF94PXBYLF95PXBZOzspe1xuXHRcdFx0XHRcdFx0X3grPWluY1g7XG5cdFx0XHRcdFx0XHRfeSs9aW5jWTtcblx0XHRcdFx0XHRcdGNvbnN0IHg9X3grb2Zmc2V0WDtcblx0XHRcdFx0XHRcdGNvbnN0IHk9X3krb2Zmc2V0WTtcblx0XHRcdFx0XHRcdGlmKCFpbkZpZWxkKHgsIHkpIHx8ICFpc01vdmVJbmYgJiYgbW92ZUNudCA9PT0gMCkgYnJlYWs7XG5cdFx0XHRcdFx0XHRjb25zdCBpc0p1bXBlZCA9IDAgPT09IGptcENudDtcblx0XHRcdFx0XHRcdGlmKGlzSnVtcGVkICYmIGNhbk1vdmUoaXNBdHRhY2ssIHgsIHksIHJhbmdlTmFtZSwgaXNKdW1wZWQpKXtcblx0XHRcdFx0XHRcdFx0bW92ZUNudC0tO1xuXHRcdFx0XHRcdFx0XHRzZXRUYXJnZXQocmFuZ2VOYW1lLCB4LCB5KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2UgaWYoam1wczwxKXtcblx0XHRcdFx0XHRcdFx0bW92ZUNudC0tO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y29uc3QgcGFuZWwgPSBmaWVsZFt5XVt4XTtcblx0XHRcdFx0XHRcdGlmKHBhbmVsLnBpZWNlKXtcblx0XHRcdFx0XHRcdFx0am1wQ250LS07XG5cdFx0XHRcdFx0XHRcdGlmKGlzSnVtcGVkIHx8IGlzVnNQbyhwYW5lbCkpIGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIOODoeOCpOODs+WHpueQhlxuXHQoZnVuY3Rpb24oKXtcblx0XHRjb25zdCByYW5nZU1hcCA9IHBpZWNlLmdldFJhbmdlKCk7XG5cdFx0cmFuZ2VNYXAuYXR0YWNrID8/PSByYW5nZU1hcC5kZWZhdWx0O1xuXHRcdGZvcihjb25zdCByYW5nZU9wdGlvbiBvZiByYW5nZU9wdGlvbnMpe1xuXHRcdFx0Y29uc3QgcmFuZ2VOYW1lID0gcmFuZ2VPcHRpb25bMF07XG5cdFx0XHQvLyDliJ3lm57np7vli5Xnorroqo1cblx0XHRcdGlmKHBpZWNlLmlzTW92ZWQgJiYgW1wic3RhcnRcIiwgXCJjYXN0bGluZ1wiXS5pbmNsdWRlcyhyYW5nZU5hbWUpKSBjb250aW51ZTtcblxuXHRcdFx0Y29uc3QgcmFuZ2UgPSByYW5nZU1hcFtyYW5nZU5hbWVdO1xuXHRcdFx0aWYoIXJhbmdlKSBjb250aW51ZTtcblx0XHRcdGZvcihjb25zdCBvcmlnaW4gb2YgZ2V0T3JpZ2luKHJhbmdlKSl7XG5cdFx0XHRcdC8vIOeCueenu+WLlVxuXHRcdFx0XHRtb3ZlUG9pbnQocmFuZ2UsIHJhbmdlT3B0aW9uLCBvcmlnaW4pO1xuXHRcdFx0XHQvLyDnm7Tnt5rnp7vli5Vcblx0XHRcdFx0bW92ZUxpbmVyKHJhbmdlLCByYW5nZU9wdGlvbiwgb3JpZ2luKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pKCk7XG59IiwiaW1wb3J0IHtCb2FyZH0gZnJvbSBcIi4vYm9hcmQuanNcIjtcbmltcG9ydCB7UGFuZWx9IGZyb20gXCIuL3BhbmVsLmpzXCI7XG5pbXBvcnQge2NoZWNrVGFyZ2V0fSBmcm9tIFwiLi9jaGVja1RhcmdldC5qc1wiO1xuXG4vKiog44Oe44Km44K544Kz44Oz44OI44Ot44O844OrXG4gKiBAcGFyYW0ge0JvYXJkfSBib2FyZCAtIOebpFxuICovXG5leHBvcnQgZnVuY3Rpb24gdUlDb250cm9sKGJvYXJkKXtcblx0bGV0IGlzQ2xpY2sgPSBmYWxzZTtcblx0bGV0IGxhc3RYWSA9IFtdO1xuXHRsZXQgc2VsZWN0UGFuZWwgPSBudWxsO1xuXHRsZXQgc2VsZWN0U3RhbmQgPSBudWxsO1xuXHRjb25zdCB7Y2FudmFzfSA9IGJvYXJkO1xuXG5cdC8qKiDjg57jgrnnm67jgavlr77jgZnjgovlh6bnkIZcblx0ICogQHBhcmFtIHtFdmVudH0gZSAtIOOCpOODmeODs+ODiOW8leaVsFxuXHQgKiBAcGFyYW0geyhcblx0ICogICAgIHBhbmVsOiBQYW5lbCxcblx0ICogICAgIHg6IG51bWJlcixcblx0ICogICAgIHk6IG51bWJlcixcblx0ICogKT0+dm9pZH0gZm5QYW5lbCAtIOODnuOCueebruOBruOCs+ODvOODq+ODkOODg+OCr+mWouaVsFxuXHQgKiBAcGFyYW0geyhcblx0ICogICAgIHg6IG51bWJlcixcblx0ICogICAgIHk6IG51bWJlcixcblx0ICogKT0+dm9pZH0gZm5BZnRlciAtIOW+jOWHpueQhuOBruOCs+ODvOODq+ODkOODg+OCr+mWouaVsFxuICAgICAqL1xuXHRjb25zdCBmaWVsZFByb2MgPSAoZSwgZm5QYW5lbCwgZm5BZnRlcj0oKT0+e30pPT57XG5cdFx0Y29uc3Qgdmlld1N0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoY2FudmFzKTtcblx0XHRjb25zdCByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0bGV0IHggPSBjYW52YXMud2lkdGgvcGFyc2VGbG9hdCh2aWV3U3R5bGUud2lkdGgpO1xuXHRcdGxldCB5ID0gY2FudmFzLmhlaWdodC9wYXJzZUZsb2F0KHZpZXdTdHlsZS5oZWlnaHQpO1xuXHRcdGlmKGUuY2xpZW50WCl7XG5cdFx0XHR4ICo9IGUuY2xpZW50WC1yZWN0LmxlZnQ7XG5cdFx0XHR5ICo9IGUuY2xpZW50WS1yZWN0LnRvcDtcblx0XHR9XG5cdFx0ZWxzZSBpZigwIDwgZS50b3VjaGVzLmxlbmd0aCl7XG5cdFx0XHRpZigxIDwgZS50b3VjaGVzLmxlbmd0aCkgcmV0dXJuO1xuXHRcdFx0eCAqPSBlLnRvdWNoZXNbMF0uY2xpZW50WC1yZWN0LmxlZnQ7XG5cdFx0XHR5ICo9IGUudG91Y2hlc1swXS5jbGllbnRZLXJlY3QudG9wO1xuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0W3gsIHldID0gbGFzdFhZO1xuXHRcdH1cblx0XHRib2FyZC5maWVsZC5mb3JFYWNoKChyb3csIHBZKSA9PlxuXHRcdFx0cm93LmZvckVhY2goKHBhbmVsLCBwWCkgPT5cblx0XHRcdFx0Zm5QYW5lbChwYW5lbCwgeCwgeSwgcFgsIHBZKSkpO1xuXHRcdGZuQWZ0ZXIoeCwgeSk7XG5cdFx0Ym9hcmQuZHJhdygpO1xuXHRcdGxhc3RYWSA9IFt4LCB5XTtcblx0fTtcblxuXHQvKiog44OJ44Op44OD44Kw6ZaL5aeLXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGUgLSDjgqTjg5njg7Pjg4jlvJXmlbBcbiAgICAgKi9cblx0Y29uc3QgZHJhZ1N0YXJ0ID0gZT0+e1xuXHRcdGlzQ2xpY2sgPSB0cnVlO1xuXHRcdGZpZWxkUHJvYyhlLFxuXHRcdFx0KHBhbmVsLCB4LCB5KT0+e1xuXHRcdFx0XHRjb25zdCB7cGllY2UsIHBYLCBwWX0gPSBwYW5lbDtcblxuXHRcdFx0XHRpZihwaWVjZSAmJiBwYW5lbC5jaGVja1JhbmdlTW91c2UoeCwgeSkpe1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRwaWVjZS5pc1NlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRzZWxlY3RQYW5lbCA9IHBhbmVsO1xuXHRcdFx0XHRcdGNoZWNrVGFyZ2V0KGJvYXJkLCBwaWVjZSwgcFgsIHBZKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCh4LCB5KT0+e1xuXHRcdFx0XHRmb3IoY29uc3QgW2RlZywgc3RvY2tdIG9mIGJvYXJkLnN0YW5kLnN0b2Nrcyl7XG5cdFx0XHRcdFx0Zm9yKGxldCBpPXN0b2NrLmxlbmd0aC0xOzA8PWk7aS0tKXtcblx0XHRcdFx0XHRcdGlmKCFzdG9ja1tpXS5jaGVja1JhbmdlTW91c2UoeCwgeSkpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0c3RvY2tbaV0uaXNTZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRzZWxlY3RTdGFuZCA9IHtkZWc6ZGVnLCBpOml9O1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cdH07XG5cblx0LyoqIOODieODqeODg+OCsOS4rVxuXHQgKiBAcGFyYW0ge2FueX0gZSAtIOOCpOODmeODs+ODiOW8leaVsFxuXHQgKi9cblx0Y29uc3QgZHJhZ01vdmUgPSBlPT57XG5cdFx0aWYoIWlzQ2xpY2sgfHwgIShzZWxlY3RQYW5lbCB8fCBzZWxlY3RTdGFuZCkpIHJldHVybjtcblx0XHRmaWVsZFByb2MoZSxcblx0XHRcdChwYW5lbCwgeCwgeSk9Pntcblx0XHRcdFx0cGFuZWwuaXNTZWxlY3RlZCA9IHBhbmVsLmNoZWNrUmFuZ2VNb3VzZSh4LCB5KTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0LyoqIOODieODqeODg+OCsOe1guS6hlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBlIC0g44Kk44OZ44Oz44OI5byV5pWwXG5cdCAqL1xuXHRjb25zdCBkcmFnRW5kID0gZT0+e1xuXHRcdGlzQ2xpY2sgPSBmYWxzZTtcblx0XHRmaWVsZFByb2MoZSxcblx0XHRcdChwYW5lbCwgeCwgeSk9Pntcblx0XHRcdFx0aWYoIXBhbmVsLmNoZWNrUmFuZ2VNb3VzZSh4LCB5KSkgcmV0dXJuO1xuXHRcdFx0XHRpZihzZWxlY3RQYW5lbCl7XG5cdFx0XHRcdFx0Ym9hcmQubW92ZVBpZWNlKHNlbGVjdFBhbmVsLCBwYW5lbCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoc2VsZWN0U3RhbmQgJiYgIXBhbmVsLnBpZWNlKXtcblx0XHRcdFx0XHRib2FyZC5zdGFuZC5yZWxlYXNlUGllY2UocGFuZWwsIHNlbGVjdFN0YW5kKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cdFx0ZmllbGRQcm9jKGUsXG5cdFx0XHRwYW5lbD0+e1xuXHRcdFx0XHRpZihwYW5lbC5waWVjZSkgcGFuZWwucGllY2UuaXNTZWxlY3RlZCA9IGZhbHNlO1xuXHRcdFx0XHRwYW5lbC5pc1NlbGVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdHBhbmVsLmNsZWFyVGFyZ2V0KCk7XG5cdFx0XHR9LFxuXHRcdFx0KCk9Pntcblx0XHRcdFx0Zm9yKGNvbnN0IFtkZWcsIHN0b2NrXSBvZiBib2FyZC5zdGFuZC5zdG9ja3Mpe1xuXHRcdFx0XHRcdGZvcihsZXQgaT1zdG9jay5sZW5ndGgtMTswPD1pO2ktLSl7XG5cdFx0XHRcdFx0XHRzdG9ja1tpXS5pc1NlbGVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGVjdFBhbmVsID0gbnVsbDtcblx0XHRcdFx0c2VsZWN0U3RhbmQgPSBudWxsO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH07XG5cblx0Ly8g44Kk44OZ44Oz44OI44Oq44K544OK44O844KS5L2c5oiQXG5cdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGRyYWdTdGFydCk7XG5cdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGRyYWdNb3ZlKTtcblx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGRyYWdFbmQpO1xuXHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZHJhZ1N0YXJ0KTtcblx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgZHJhZ01vdmUpO1xuXHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGRyYWdFbmQpO1xuXG5cdC8qKiDjgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zjgpLnoLTmo4QgKi9cblx0cmV0dXJuIHtcblx0XHRyZW1vdmVFdmVudCgpe1xuXHRcdFx0Y2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZHJhZ1N0YXJ0KTtcblx0XHRcdGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGRyYWdNb3ZlKTtcblx0XHRcdGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBkcmFnRW5kKTtcblx0XHRcdGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBkcmFnU3RhcnQpO1xuXHRcdFx0Y2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgZHJhZ01vdmUpO1xuXHRcdFx0Y2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBkcmFnRW5kKTtcblx0XHR9XG5cdH07XG59XG4iLCJpbXBvcnQge1BpZWNlfSBmcm9tIFwiLi9waWVjZS5qc1wiO1xuXG4vKiogQk9E5b2i5byP44Gu44Gf44KB44Gu6Zai5pWw5a6a576p44Gq44GpICovXG5leHBvcnQgY2xhc3MgQm9ke1xuXHQvKiog6KeS5bqm44GL44KJ6aeS44Gu5paH5a2X6KGo56S6XG5cdCAqIEB0eXBlIHtNYXA8bnVtYmVyLCBzdHJpbmc+fVxuXHQgKi9cblx0c3RhdGljICNkZWcyUGllY2VDaGFycyA9IG5ldyBNYXAoW1xuXHRcdFswLCBcIiBcIl0sXG5cdFx0WzkwLCBcIj5cIl0sXG5cdFx0WzE4MCwgXCJ2XCJdLFxuXHRcdFsyNzAsIFwiPFwiXVxuXHRdKTtcblxuXHQvKiog6KeS5bqm44GL44KJ6aeS44Gu5q2j6KaP6KGo54++6KGo56S6XG5cdCAqIEB0eXBlIHtNYXA8bnVtYmVyLCBzdHJpbmc+fVxuXHQgKi9cblx0c3RhdGljICNkZWcyUGllY2VSZWdleGVzID0gbmV3IE1hcChcblx0XHRbLi4uQm9kLiNkZWcyUGllY2VDaGFyc11cblx0XHQubWFwKChbYSwgYl0pPT5bYSwgbmV3IFJlZ0V4cChiLCBcImdcIildKVxuXHQpO1xuXG5cdC8qKiDpp5Ljga7mloflrZfjgYvjgonop5LluqbooajnpLpcblx0ICogQHR5cGUge01hcDxzdHJpbmcsIG51bWJlcj59XG5cdCAqL1xuXHRzdGF0aWMgI3BpZWNlQ2hhcjJEZWdzID0gbmV3IE1hcChcblx0XHRbLi4uQm9kLiNkZWcyUGllY2VDaGFyc11cblx0XHQubWFwKChbYSwgYl0pPT5bYiwgYV0pXG5cdCk7XG5cblx0LyoqIOinkuW6puOBi+OCieaMgemnkuOBruihqOmhjOihqOekulxuXHQgKiBAdHlwZSB7TWFwPG51bWJlciwgc3RyaW5nPn1cblx0ICovXG5cdHN0YXRpYyAjZGVnMlN0YW5kVGl0bGVzID0gbmV3IE1hcChbXG5cdFx0WzAsIFwi5YWI5omL44Gu5oyB6aeSXCJdLFxuXHRcdFs5MCwgXCLmrKHmiYvjga7mjIHpp5JcIl0sXG5cdFx0WzE4MCwgXCLlvozmiYvjga7mjIHpp5JcIl0sXG5cdFx0WzI3MCwgXCLlm5vmiYvjga7mjIHpp5JcIl1cblx0XSk7XG5cblx0LyoqIOaMgemnkuOBruihqOmhjOOBi+OCieinkuW6puihqOekulxuXHQgKiBAdHlwZSB7TWFwPHN0cmluZywgbnVtYmVyPn1cblx0ICovXG5cdHN0YXRpYyAjc3RhbmRUaXRsZTJEZWdzID0gbmV3IE1hcChcblx0XHRbLi4uQm9kLiNkZWcyU3RhbmRUaXRsZXNdXG5cdFx0Lm1hcCgoW2EsIGJdKT0+W2IsIGFdKVxuXHQpO1xuXG5cdHN0YXRpYyAja2FuSSA9IFtcIlwiLFwi5LiAXCIsXCLkuoxcIixcIuS4iVwiLFwi5ZubXCIsXCLkupRcIixcIuWFrVwiLFwi5LiDXCIsXCLlhatcIixcIuS5nVwiXTtcblx0c3RhdGljICNrYW5YID0gW1wiXCIsXCLljYFcIixcIuS6jOWNgVwiLFwi5LiJ5Y2BXCIsXCLlm5vljYFcIixcIuS6lOWNgVwiLFwi5YWt5Y2BXCIsXCLkuIPljYFcIixcIuWFq+WNgVwiLFwi5Lmd5Y2BXCJdO1xuXG5cdC8qKiDooYwv5oyB6aeS55So44Gu5pWw5a2X6KGo56S6KOa8ouaVsOWtlylcblx0ICogQHBhcmFtIHtudW1iZXJ9IG51bSAtIOaVsOWtl1xuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHZpZXdPbmUgLSDkuIDjgpLooajnpLpcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdHN0YXRpYyAjbnVtMkthbihudW0sIHZpZXdPbmU9dHJ1ZSl7XG5cdFx0aWYoIXZpZXdPbmUgJiYgbnVtPD0xKSByZXR1cm4gXCJcIjtcblx0XHRjb25zdCBpID0gbnVtJTEwO1xuXHRcdGNvbnN0IHggPSAwfG51bS8xMDtcblx0XHRyZXR1cm4gQm9kLiNrYW5YW3hdK0JvZC4ja2FuSVtpXTtcblx0fVxuXG5cdC8qKiDooYwv5oyB6aeS55So44Gu5pWw5a2X6KGo56S6KOa8ouaVsOWtlylcblx0ICogQHBhcmFtIHtudW1iZXJ9IG51bSAtIOaVsOWtl1xuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGVtcHR5T25lIC0g56m65paH5a2X44KSMeOBqOOBmeOCi1xuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0c3RhdGljICNrYW4yTnVtKGthbiwgZW1wdHlPbmU9dHJ1ZSl7XG5cdFx0aWYoZW1wdHlPbmUgJiYga2FuID09PSBcIlwiKSByZXR1cm4gMTtcblx0XHRpZighaXNOYU4oa2FuKSkgcmV0dXJuIDB8a2FuO1xuXHRcdGxldCB4ID0gQm9kLiNrYW5YLmZpbmRJbmRleChrZXk9PlxuXHRcdFx0a2V5ICE9PSBcIlwiICYmIChuZXcgUmVnRXhwKFwiXlwiK2tleSkpLnRlc3Qoa2FuKVxuXHRcdCk7XG5cdFx0aWYoeCA8IDApIHggPSAwO1xuXHRcdGxldCBpID0gQm9kLiNrYW5JLmZpbmRJbmRleChrZXk9PlxuXHRcdFx0a2V5ICE9PSBcIlwiICYmIChuZXcgUmVnRXhwKGtleStcIiRcIikpLnRlc3Qoa2FuKVxuXHRcdCk7XG5cdFx0aWYoaSA8IDApIGkgPSAwO1xuXHRcdHJldHVybiB4KjEwK2k7XG5cdH1cblxuXHQvKiog5YiX55So44Gu5pWw5a2X6KGo56S6KOWFqOinki8y5qGBKVxuXHQgKiBAcGFyYW0ge251bWJlcn0gbnVtIC0g5pWw5a2XXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRzdGF0aWMgI251bTJaZW4obnVtKXtcblx0XHRpZigxMDw9bnVtKSByZXR1cm4gbnVtO1xuXHRcdGNvbnN0IHplbiA9IFwi77yQ77yR77yS77yT77yU77yV77yW77yX77yY77yZXCI7XG5cdFx0Y29uc3QgaSA9IG51bSUxMDtcblx0XHRyZXR1cm4gemVuW2ldO1xuXHR9XG5cblx0LyoqIOODnuOCueebruOBruihqOekulxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0c3RhdGljICNwYW5lbFRleHQgPSBcIiDjg7tcIjtcblxuXHQvKiog6aeS44GuQk9E6KGo6KiYXG5cdCAqIEBwYXJhbSB7UGllY2V9IHBpZWNlIC0g6aeSXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRzdGF0aWMgI2dldFBpZWNlVGV4dChwaWVjZSl7XG5cdFx0aWYoIXBpZWNlKSByZXR1cm4gQm9kLiNwYW5lbFRleHQ7XG5cdFx0cmV0dXJuIEJvZC4jZGVnMlBpZWNlQ2hhcnMuZ2V0KHBpZWNlLmRlZykrcGllY2UuY2hhcjtcblx0fVxuXG5cdC8qKiDpp5Llj7Djga5CT0TooajoqJhcblx0ICogQHBhcmFtIHtTdGFuZH0gc3RhbmQgLSDpp5Llj7Bcblx0ICogQHBhcmFtIHtudW1iZXJ9IGRlZyAtIOinkuW6plxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0c3RhdGljICNnZXRTdGFuZFRleHQoc3RhbmQsIGRlZz0wKXtcblx0XHQvLyDpp5LmlbDjgqvjgqbjg7Pjg4hcblx0XHRjb25zdCBjb3VudGVyID0gbmV3IE1hcCgpO1xuXHRcdHN0YW5kLnN0b2Nrcy5nZXQoZGVnKS5mb3JFYWNoKCh7Y2hhcn0pPT57XG5cdFx0XHRpZighY291bnRlci5oYXMoY2hhcikpIGNvdW50ZXIuc2V0KGNoYXIsIDApO1xuXHRcdFx0Y291bnRlci5zZXQoY2hhciwgY291bnRlci5nZXQoY2hhcikrMSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIEJvZC4jZGVnMlN0YW5kVGl0bGVzLmdldChkZWcpK1wi77yaXCIrXG5cdFx0XHRbLi4uY291bnRlcl0ubWFwKChbY2hhciwgY250XSk9PlxuXHRcdFx0XHRjaGFyK0JvZC4jbnVtMkthbihjbnQsIGZhbHNlKVxuXHRcdFx0KS5qb2luKFwiIFwiKTtcblx0fVxuXG5cdC8qKiBCT0TlvaLlvI/jga7jg4bjgq3jgrnjg4jjgpLjg5zjg7zjg4njgafmibHjgYjjgovjgojjgYblpInmj5tcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBCT0TlvaLlvI/jga7jg4bjgq3jgrnjg4hcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdHN0YXRpYyBjb252U2V0VGV4dCh0ZXh0KXtcblx0XHRjb25zdCBib2FyZExpbmVzID0gW107XG5cdFx0Y29uc3Qgc3RhbmRMaW5lcyA9IFtdO1xuXHRcdHRleHQuc3BsaXQoL1xccnxcXG58XFxyXFxuLykuZm9yRWFjaChsaW5lPT57XG5cdFx0XHRpZihbLi4uQm9kLiNzdGFuZFRpdGxlMkRlZ3Mua2V5cygpXS5zb21lKHRpdGxlPT5cblx0XHRcdFx0bmV3IFJlZ0V4cChgXiR7dGl0bGV9YCkudGVzdChsaW5lKSlcblx0XHRcdCkgc3RhbmRMaW5lcy5wdXNoKGxpbmUpO1xuXHRcdFx0ZWxzZSBib2FyZExpbmVzLnB1c2gobGluZS5zbGljZSgxKSlcblx0XHR9KTtcblxuXHRcdGxldCBib2FyZFN0ciA9IGJvYXJkTGluZXMuc2xpY2UoMiwgLTEpLmpvaW4oXCJcXG5cIik7XG5cdFx0Qm9kLiNkZWcyUGllY2VSZWdleGVzLmZvckVhY2goKGJvZENoYXIsIGRlZyk9Pntcblx0XHRcdGJvYXJkU3RyID0gYm9hcmRTdHIucmVwbGFjZShib2RDaGFyLCBQaWVjZS5kZWdDaGFyc1tkZWddKTtcblx0XHR9KVxuXG5cdFx0Y29uc3Qgc3RhbmRTdHIgPSBzdGFuZExpbmVzLmZsYXRNYXAobGluZT0+e1xuXHRcdFx0Y29uc3QgW3RpdGxlLCBwYXJhbVN0cl0gPSBsaW5lLnNwbGl0KC/vvJovKTtcblx0XHRcdGlmKHBhcmFtU3RyID09PSBcIlwiKSByZXR1cm4gXCJcIjtcblx0XHRcdGNvbnN0IGRlZyA9IEJvZC4jc3RhbmRUaXRsZTJEZWdzLmdldCh0aXRsZSk7XG5cdFx0XHRjb25zdCBkZWdDaGFyID0gUGllY2UuZGVnQ2hhcnNbZGVnXTtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHBhcmFtU3RyXG5cdFx0XHRcdC5zcGxpdCgvXFxzLylcblx0XHRcdFx0Lm1hcChwYXJhbT0+e1xuXHRcdFx0XHRcdGNvbnN0IHBpZWNlQ2hhciA9IHBhcmFtWzBdO1xuXHRcdFx0XHRcdGNvbnN0IGthbiA9IHBhcmFtLnNsaWNlKDEpO1xuXHRcdFx0XHRcdHJldHVybiAoZGVnQ2hhcitwaWVjZUNoYXIpLnJlcGVhdChCb2QuI2thbjJOdW0oa2FuKSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHBhcmFtcztcblx0XHR9KS5qb2luKFwiXCIpO1xuXG5cdFx0cmV0dXJuIGAke2JvYXJkU3RyfVxcbiR7c3RhbmRTdHJ9YDtcblx0fVxuXG5cdC8qKiBCT0TlvaLlvI/jg4bjgq3jgrnjg4jjgpLlj5blvpdcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdHN0YXRpYyBnZXRUZXh0KGJvYXJkKXtcblx0XHRjb25zdCB7ZmllbGQsIHhMZW4sIHBsYXllcnMsIHN0YW5kfSA9IGJvYXJkO1xuXG5cdFx0bGV0IGhlYWRlciA9XG5cdFx0XHRgICR7Wy4uLkFycmF5KHhMZW4pLmtleXMoKV0ubWFwKGk9PmAgJHtCb2QuI251bTJaZW4oeExlbi1pKX1gKS5qb2luKFwiXCIpfVxcbmArXG5cdFx0XHRgKyR7QXJyYXkoeExlbikuZmlsbChcIi0tLVwiKS5qb2luKFwiXCIpfStcXG5gO1xuXHRcdGxldCBmb290ZXIgPSBgXFxuKyR7QXJyYXkoeExlbikuZmlsbChcIi0tLVwiKS5qb2luKFwiXCIpfStgO1xuXHRcdGxldCBwYW5lbE91dGVyID0gXCJ8XCI7XG5cdFx0bGV0IHBhbmVsU2VwID0gXCJcIjtcblx0XHRsZXQgcm93U2VwID0gXCJcXG5cIjtcblx0XHRsZXQgc3RhbmRIZWFkZXIgPSBgJHtCb2QuI2dldFN0YW5kVGV4dChzdGFuZCwgMTgwKX1cXG5gO1xuXHRcdGxldCBzdGFuZEZvb3RlciA9IGAke0JvZC4jZ2V0U3RhbmRUZXh0KHN0YW5kLCAwKX1gO1xuXHRcdGlmKHBsYXllcnMgIT09IDIpe1xuXHRcdFx0c3RhbmRIZWFkZXIgPSBgJHtCb2QuI2dldFN0YW5kVGV4dChzdGFuZCwgMjcwKX1cXG5gK3N0YW5kSGVhZGVyO1xuXHRcdFx0c3RhbmRGb290ZXIgPSBgJHtCb2QuI2dldFN0YW5kVGV4dChzdGFuZCwgOTApfVxcbmArc3RhbmRGb290ZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdHN0YW5kSGVhZGVyK1xuXHRcdFx0aGVhZGVyK1xuXHRcdFx0ZmllbGQubWFwKChyb3csIGkpPT5cblx0XHRcdFx0cGFuZWxPdXRlcitcblx0XHRcdFx0cm93Lm1hcChwYW5lbD0+XG5cdFx0XHRcdFx0Qm9kLiNnZXRQaWVjZVRleHQocGFuZWwucGllY2UpXG5cdFx0XHRcdCkuam9pbihwYW5lbFNlcCkrXG5cdFx0XHRcdHBhbmVsT3V0ZXIrXG5cdFx0XHRcdEJvZC4jbnVtMkthbihpKzEpXG5cdFx0XHQpLmpvaW4ocm93U2VwKStcblx0XHRcdGZvb3RlcitcIlxcblwiK1xuXHRcdFx0c3RhbmRGb290ZXJcblx0XHQpO1xuXHR9XG59XG4iLCJpbXBvcnQge1BpZWNlfSBmcm9tIFwiLi9waWVjZS5qc1wiO1xuaW1wb3J0IHtCb2R9IGZyb20gXCIuL2JvZC5qc1wiO1xuXG4vKiog55uk44Gu566h55CG44Kv44Op44K5ICovXG5leHBvcnQgY2xhc3MgU3RhbmR7XG5cdC8qKiDpp5Llj7Djgbjjga7op5LluqbjgZTjgajjga7ooajnpLrpoIZcblx0ICogQHR5cGUge251bWJlcltdfVxuXHQgKi9cblx0c3RhdGljICNkZWdPcmRlciA9IFsxODAsIDkwLCAyNzAsIDBdO1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0JvYXJkfSDjg5zjg7zjg4lcblx0ICovXG5cdGNvbnN0cnVjdG9yKGJvYXJkKXtcblx0XHR0aGlzLmJvYXJkID0gYm9hcmQ7XG5cdFx0Y29uc3Qge3RvcCwgcmlnaHQsIGJvdHRvbSwgd2lkdGgsIGhlaWdodCwgcGFuZWxXaWR0aCwgcGFuZWxIZWlnaHQsIHhMZW4sIHlMZW59ID0gYm9hcmQ7XG5cblx0XHR0aGlzLmNsZWFyKCk7XG5cdFx0dGhpcy5sZWZ0ID0gcmlnaHQqMS4wMjtcblx0XHR0aGlzLnRvcCA9IHRvcDtcblx0XHR0aGlzLndpZHRoID0gd2lkdGgvMjtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHR0aGlzLnJpZ2h0ID0gdGhpcy5sZWZ0K3RoaXMud2lkdGg7XG5cdFx0dGhpcy5ib3R0b20gPSBib3R0b207XG5cdFx0dGhpcy5waXRjaFdpZHRoID0gcGFuZWxXaWR0aC8yO1xuXHRcdHRoaXMucGl0Y2hIZWlnaHQgPSBwYW5lbEhlaWdodDtcblx0XHR0aGlzLnhMZW4gPSB4TGVuO1xuXHRcdHRoaXMueUxlbiA9IHlMZW47XG5cdH1cblxuXHQvKiog6aeS5Y+w44KS5Yid5pyf5YyW44Gr44GZ44KLICovXG5cdGNsZWFyKCl7XG5cdFx0dGhpcy5zdG9ja3MgPSBuZXcgTWFwKFN0YW5kLiNkZWdPcmRlci5tYXAoaT0+W2ksW11dKSk7XG5cdH1cblxuXHQvKiog5oyB44Gh6aeS44GL44KJ44Oc44O844OJ5LiK44Gr6YWN572u44GZ44KLXG5cdCAqIEBwYXJhbSB7UGFuYWx9IHRvUGFuZWxsIC0g6YWN572u5YWI44Gu44OR44ON44OrXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb24gLSDjgqrjg5fjgrfjg6fjg7Ncblx0ICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbi5kZWcgLSDop5LluqZcblx0ICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbi5pIC0g6YWN572u44GZ44KL5oyB44Gh6aeS44Gu44Kk44Oz44OH44OD44Kv44K5XG5cdCAqL1xuXHRyZWxlYXNlUGllY2UodG9QYW5lbCwgb3B0aW9uPXt9KXtcblx0XHRjb25zdCB7ZGVnLCBpfSA9IG9wdGlvblxuXHRcdGNvbnN0IHtib2FyZH0gPSB0aGlzO1xuXHRcdGNvbnN0IHN0b2NrID0gdGhpcy5zdG9ja3MuZ2V0KGRlZyk7XG5cdFx0dG9QYW5lbC5waWVjZSA9IHN0b2NrW2ldO1xuXHRcdHN0b2NrW2ldLmNlbnRlciA9IHRvUGFuZWwuY2VudGVyO1xuXHRcdHN0b2NrW2ldLm1pZGRsZSA9IHRvUGFuZWwubWlkZGxlO1xuXHRcdGJvYXJkLmFkZFJlY29yZCh0b1BhbmVsLCB7ZW5kOiBcIuaJk1wifSk7XG5cdFx0c3RvY2suc3BsaWNlKGksMSk7XG5cdH1cblxuXHQvKiog6aeS5Y+w44Gr6L+95Yqg44GZ44KLXG5cdCAqIEBwYXJhbSB7UGllY2V9IHBpZWNlIC0g6L+95Yqg44GZ44KL6aeSXG5cdCAqL1xuXHRhZGQocGllY2Upe1xuXHRcdGNvbnN0IHN0b2NrID0gdGhpcy5zdG9ja3MuZ2V0KHBpZWNlLmRlZyk7XG5cdFx0cGllY2UudHVybkZyb250KCk7XG5cdFx0c3RvY2sucHVzaChwaWVjZSk7XG5cdFx0c3RvY2suc29ydCgoYSxiKT0+TWF0aC5zaWduKGEuaWQtYi5pZCkpO1xuXHR9XG5cblx0LyoqIOmnkuOCkuaMgeOBoemnkuOBq+OBmeOCi1xuXHQgKiBAcGFyYW0ge1BpZWNlfG51bGx9IHdpbm5lclBpZWNlIC0g56e75YuV44GZ44KL6aeSXG5cdCAqIEBwYXJhbSB7UGllY2V9IGxvc2VyUGllY2UgLSDmjZXnuJvjgZXjgozjgovpp5Jcblx0ICogQHBhcmFtIHtib29sZWFufSBmb3JjZUNhcHR1cmUgLSDlsZ7mgKfjgpLnhKHoppbjgZfjgabmjZXnuJvjgZnjgotcblx0ICogQHBhcmFtIHtib29sZWFufSBmb3JjZUNhbnRDYXB0dXJlIC0g5bGe5oCn44KS54Sh6KaW44GX44Gm5o2V57ib44GX44Gq44GEXG5cdCAqL1xuXHRjYXB0dXJlUGllY2Uod2lubmVyUGllY2UsIGxvc2VyUGllY2UsIGZvcmNlQ2FwdHVyZT1mYWxzZSwgZm9yY2VDYW50Q2FwdHVyZT1mYWxzZSl7XG5cdFx0aWYoZm9yY2VDYW50Q2FwdHVyZVxuXHRcdFx0fHwgIWxvc2VyUGllY2Vcblx0XHRcdHx8ICEoZm9yY2VDYXB0dXJlIHx8IHdpbm5lclBpZWNlLmhhc0F0dHIoXCJjYXB0dXJlXCIpKVxuXHRcdFx0fHwgbG9zZXJQaWVjZS5oYXNBdHRyKFwia2luZ1wiKVxuXHRcdFx0fHwgbG9zZXJQaWVjZS5oYXNBdHRyKFwiY2FudENhcHR1cmVcIilcblx0XHQpIHJldHVybjtcblxuXHRcdGxvc2VyUGllY2UuZGVnID0gd2lubmVyUGllY2UuZGVnO1xuXHRcdGxvc2VyUGllY2UuaXNNb3ZlZCA9IHRydWU7XG5cdFx0dGhpcy5hZGQobG9zZXJQaWVjZSk7XG5cdH1cblxuXHQvKiog55uk44KS5o+P5YaZICovXG5cdGRyYXcoKXtcblx0XHRjb25zdCB7Ym9hcmQsIGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCwgcGl0Y2hXaWR0aCwgcGl0Y2hIZWlnaHR9ID0gdGhpcztcblx0XHRjb25zdCB7Y3R4LCB4TGVuLCB5TGVufSA9IGJvYXJkO1xuXG5cdFx0Ly8g5aSW5p6g44KS5o+P5YaZXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IGJvYXJkLmJhY2tncm91bmRDb2xvcjtcblx0XHRjdHguc3Ryb2tlU3R5bGUgPSBib2FyZC5ib3JkZXJDb2xvcjtcblx0XHRjdHgubGluZVdpZHRoID0gYm9hcmQuYm9yZGVyV2lkdGg7XG5cblx0XHRjdHguc2F2ZSgpO1xuXHRcdGN0eC50cmFuc2xhdGUobGVmdCwgdG9wKTtcblx0XHRjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5cdFx0Y3R4LnN0cm9rZVJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5cdFx0Y3R4LnJlc3RvcmUoKTtcblxuXHRcdC8vIOOBmeOBueOBpuOBrumnkuOCkuihqOekuuevhOWbsuWkluOBuOenu+WLlVxuXHRcdC8qdGhpcy5zdG9ja3MuZmxhdCgpLmZvckVhY2gocGllY2U9Pntcblx0XHRcdHBpZWNlLmNlbnRlciA9IC0xMDAwO1xuXHRcdFx0cGllY2UubWlkZGxlID0gLTEwMDA7XG5cdFx0fSk7Ki9cblx0XHRbLi4udGhpcy5zdG9ja3MudmFsdWVzKCldLmZvckVhY2goKHN0b2NrLCBwbGF5ZXIpPT57XG5cdFx0XHRsZXQgaSA9IDA7XG5cdFx0XHQvLyDmuqLjgozjgZ/loLTlkIjjga/lvozmlrnlhKrlhYjjgafooajnpLpcblx0XHRcdHN0b2NrID0gc3RvY2suc2xpY2UoLXlMZW4vNCp4TGVuKTtcblx0XHRcdGZvcihsZXQgcFk9MHx5TGVuLzQqcGxheWVyO3BZPHlMZW4vNCoocGxheWVyKzEpO3BZKyspe1xuXHRcdFx0XHRmb3IobGV0IHBYPTA7cFg8eExlbjtwWCsrKXtcblx0XHRcdFx0XHRjb25zdCBjZW50ZXIgPSBsZWZ0K3BpdGNoV2lkdGgqKHBYKzEpO1xuXHRcdFx0XHRcdGNvbnN0IG1pZGRsZSA9IHRvcCtwaXRjaEhlaWdodCoocFkrMSk7XG5cdFx0XHRcdFx0Y29uc3QgcGllY2UgPSBzdG9ja1tpKytdO1xuXHRcdFx0XHRcdGlmKHBpZWNlID09IG51bGwpIGJyZWFrO1xuXHRcdFx0XHRcdHBpZWNlLmNlbnRlciA9IGNlbnRlcjtcblx0XHRcdFx0XHRwaWVjZS5taWRkbGUgPSBtaWRkbGU7XG5cdFx0XHRcdFx0cGllY2UuZHJhdygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvKiog6aeS5Y+w44KS44OG44Kt44K544OI5b2i5byP44Gn5Y+W5b6XXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNDb21wYWN0IC0g44Kz44Oz44OR44Kv44OI6KGo56S6XG5cdCAqL1xuXHR0b1N0cmluZyhpc0NvbXBhY3Q9ZmFsc2Upe1xuXHRcdGNvbnN0IHt4TGVufSA9IHRoaXMuYm9hcmQ7XG5cdFx0Y29uc3Qgc3RvY2sgPSBbLi4udGhpcy5zdG9ja3MudmFsdWVzKCldLmZsYXQoKS5maWx0ZXIodj0+dik7XG5cblx0XHRsZXQgaGVhZCA9IDAgPCBzdG9jay5sZW5ndGg/IFwiXFxuXCIrXCLigJVcIi5yZXBlYXQoeExlbioyKStcIlxcblwiOiBcIlwiO1xuXHRcdGxldCB0ZXh0ID0gc3RvY2subWFwKG89PlwiXCIrbykuam9pbihcIlwiKTtcblx0XHRpZighaXNDb21wYWN0KXtcblx0XHRcdGhlYWQgPSBcIlwiO1xuXHRcdFx0Zm9yKGNvbnN0IGNoYXIgb2YgT2JqZWN0LnZhbHVlcyhQaWVjZS5kZWdDaGFycykpe1xuXHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKGNoYXIsIFwiXFxuXCIrYCR7Y2hhcn3mjIHpp5LvvJoke2NoYXJ9YCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBoZWFkK3RleHQ7XG5cdH1cbn1cbiIsImltcG9ydCB7UGFuZWx9IGZyb20gXCIuL3BhbmVsLmpzXCI7XG5pbXBvcnQge1BpZWNlfSBmcm9tIFwiLi9waWVjZS5qc1wiO1xuXG5jb25zdCBkZWdzID0gT2JqZWN0LmtleXMoUGllY2UuZGVnQ2hhcnMpO1xuY29uc3QgZ2V0SW5pdCA9ICgpPT4oe1xuXHRwYW5lbDogbnVsbCxcblx0cGllY2U6IG51bGxcbn0pO1xuXG4vKiog44Ki44Oz44OR44OD44K144Oz5oOF5aCx44Gu566h55CGICovXG5leHBvcnQgY2xhc3MgRW5QYXNzYW50e1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHRoaXMuZGVncyA9IHt9O1xuXHRcdGRlZ3MuZm9yRWFjaChkZWc9PnRoaXMuZGVnc1tkZWddID0gZ2V0SW5pdCgpKTtcblx0fVxuXG5cdC8qKiDjgqLjg7Pjg5Hjg4PjgrXjg7Pmg4XloLHjgpLjgq/jg6rjgqJcblx0ICogQHBhcmFtIHtudW1iZXJ9IGRlZyAtIOOCouODs+ODkeODg+OCteODs+OBleOCjOOBhuOCi+mZo+WWtuOBruinkuW6plxuXHQgKi9cblx0Y2xlYXIoZGVnKXtcblx0XHR0aGlzLmRlZ3NbZGVnXSA9IGdldEluaXQoKTtcblx0fVxuXG5cdC8qKiDjgqLjg7Pjg5Hjg4PjgrXjg7Plr77osaHjgajmiJDjgorjgYbjgovjg57jgrnmg4XloLHjgpLoqJjpjLJcblx0ICogQHBhcmFtIHtQYW5lbH0gcGFuZWwgLSDjgqLjg7Pjg5Hjg4PjgrXjg7Plr77osaHjgajmiJDjgorjgYbjgovjg57jgrnnm65cblx0ICogQHBhcmFtIHtQaWVjZX0gcGllY2UgLSDjgqLjg7Pjg5Hjg4PjgrXjg7Plr77osaHjgajmiJDjgorjgYbjgovpp5Jcblx0ICovXG5cdHNldFRhcmdldChwYW5lbCwgcGllY2Upe1xuXHRcdGlmKHBhbmVsLmhhc1RhcmdldChcInN0YXJ0XCIpICYmIHBpZWNlLmhhc0F0dHIoXCJlblBhc3NhbnRcIikpXG5cdFx0XHR0aGlzLmRlZ3NbcGllY2UuZGVnXS5wYW5lbCA9IHBhbmVsO1xuXHR9XG5cblx0LyoqIOOCouODs+ODkeODg+OCteODs+WvvuixoeOBqOaIkOOCiuOBhuOCi+mnkuaDheWgseOCkuiomOmMslxuXHQgKiBAcGFyYW0ge1BhbmVsfSB0b1BhbmVsIC0g44Ki44Oz44OR44OD44K144Oz5a++6LGh44GL56K66KqN44GZ44KL44Oe44K555uuXG5cdCAqL1xuXHRzZXRNb3ZlZCh0b1BhbmVsKXtcblx0XHRjb25zdCB7cGllY2V9ID0gdG9QYW5lbDtcblx0XHRjb25zdCBlcCA9IHRoaXMuZGVnc1twaWVjZS5kZWddO1xuXHRcdGlmKHBpZWNlICYmIHRvUGFuZWwgPT09IGVwLnBhbmVsKSBlcC5waWVjZSA9IHBpZWNlO1xuXHRcdGVsc2UgdGhpcy5jbGVhcihwaWVjZS5kZWcpO1xuXHR9XG5cblx0LyoqIOOCouODs+ODkeODg+OCteODs+WvvuixoeOBruODnuOCueOBi+eiuuiqjeOBmeOCi1xuXHQgKiBAcGFyYW0ge1BhbmVsfSBwYW5lbCAtIOOCouODs+ODkeODg+OCteODs+WvvuixoeOBqOaIkOOCiuOBhuOCi+ODnuOCueebrlxuXHQgKiBAcGFyYW0ge1BpZWNlfSBwaWVjZSAtIOOCouODs+ODkeODg+OCteODs+WvvuixoeOBqOaIkOOCiuOBhuOCi+mnklxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdGlzVGFyZ2V0KHBhbmVsLCBwaWVjZSl7XG5cdFx0aWYoIXBhbmVsIHx8ICFwYW5lbC5waWVjZSkgcmV0dXJuIHRydWU7XG5cdFx0aWYoIXBhbmVsLnBpZWNlLmhhc0F0dHIoXCJlblBhc3NhbnRcIikpIHJldHVybiBmYWxzZTtcblx0XHRyZXR1cm4gcGFuZWwucGllY2UgPT09IHRoaXMuZGVnc1twYW5lbC5waWVjZS5kZWddLnBpZWNlO1xuXHR9XG59XG4iLCIvKiogQHR5cGVkZWYge2ltcG9ydCgnLi9qc29uJykuQm9hcmRJbml0T3B0aW9ufSBCb2FyZEluaXRPcHRpb24gKi9cbmltcG9ydCB7Y2FudmFzRm9udH0gZnJvbSBcIi4vY2FudmFzRm9udExvYWRlci5qc1wiO1xuaW1wb3J0IHtjYW52YXNJbWFnZX0gZnJvbSBcIi4vY2FudmFzSW1hZ2VMb2FkZXIuanNcIjtcbmltcG9ydCB7ZG93bmxvYWRJbWFnZX0gZnJvbSBcIi4vZG93bmxvYWRJbWFnZS5qc1wiO1xuaW1wb3J0IHt1SUNvbnRyb2x9IGZyb20gXCIuL3VpQ29udHJvbC5qc1wiO1xuaW1wb3J0IHtTdGFuZH0gZnJvbSBcIi4vc3RhbmQuanNcIjtcbmltcG9ydCB7UGFuZWx9IGZyb20gXCIuL3BhbmVsLmpzXCI7XG5pbXBvcnQge1BpZWNlfSBmcm9tIFwiLi9waWVjZS5qc1wiO1xuaW1wb3J0IHtFblBhc3NhbnR9IGZyb20gXCIuL2VuUGFzc2FudC5qc1wiO1xuaW1wb3J0IHtCb2R9IGZyb20gXCIuL2JvZC5qc1wiO1xuaW1wb3J0IHtib2FyZHMsIGdhbWVzfSBmcm9tIFwiLi9qc29uLmpzXCI7XG5cbi8qKiDnm6Tjga7nrqHnkIbjgq/jg6njgrkgKi9cbmV4cG9ydCBjbGFzcyBCb2FyZHtcblx0LyoqIOOCsuODvOODoOOCkuWun+ihjOOBmeOCi1xuXHQgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fX0gY2FudmFzIC0gQ2FudmFz6KaB57SgXG5cdCAqIEBwYXJhbSB7Qm9hcmRJbml0T3B0aW9ufSBvcHRpb24gLSDjg5zjg7zjg4njga7liJ3mnJ/ljJbjgqrjg5fjgrfjg6fjg7Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbi5wbGF5Qm9hcmQgLSDjg5zjg7zjg4njgr/jgqTjg5dcblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbi5wbGF5UGllY2VzIC0g6aeS44K744OD44OIXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb24ucGxheVBpZWNlcy5nYW1lTmFtZSAtIOOCsuODvOODoOWQjSjln7rmupbjgajjgarjgovpp5Ljga7phY3nva7jgrvjg4Pjg4gpXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb24ucGxheVBpZWNlcy5waWVjZVNldCAtIOmnkuOBrumFjee9ruODkeOCv+ODvOODs1xuXHQgKiBAcmV0dXJucyBCb2FyZFxuXHQgKi9cblx0c3RhdGljIHJ1bihjYW52YXMsIG9wdGlvbil7XG5cdFx0Y29uc3Qge3BsYXlCb2FyZCwgcGxheVBpZWNlcywgb25EcmF3ZWR9ID0gb3B0aW9uO1xuXHRcdGNvbnN0IHBsYXllcnMgPSBwbGF5UGllY2VzLnNvbWUoKHtnYW1lTmFtZX0sIGkpPT4xIDwgaSAmJiBnYW1lTmFtZSk/IDQ6IDI7XG5cdFx0Ly8g44Oc44O844OJ44KS55Sf5oiQXG5cdFx0Y29uc3QgYm9hcmQgPSBuZXcgQm9hcmQoY2FudmFzLCBwbGF5Qm9hcmQsIHtcblx0XHRcdC4uLm9wdGlvbixcblx0XHRcdHBsYXllcnMsXG5cdFx0XHRvbkRyYXdlZFxuXHRcdH0pO1xuXHRcdC8vIOmnkuOCkumFjee9rlxuXHRcdHBsYXlQaWVjZXMuZm9yRWFjaCgoe2dhbWVOYW1lLCBwaWVjZVNldH0sIGkpPT57XG5cdFx0XHRpZighZ2FtZU5hbWUpIHJldHVybjtcblx0XHRcdHBpZWNlU2V0ID8/PSBcImRlZmF1bHRcIjtcblx0XHRcdHRyeXtcblx0XHRcdFx0Ym9hcmQucHV0U3RhcnRQaWVjZXMoaSwgZ2FtZU5hbWUsIHBpZWNlU2V0KTtcblx0XHRcdH1cblx0XHRcdGNhdGNoe31cblx0XHR9KTtcblx0XHQvLyDmj4/lhpnjgqTjg5njg7Pjg4jjgpLoqK3lrppcblx0XHRib2FyZC5vbkRyYXdlZCA9IG9uRHJhd2VkO1xuXHRcdHJldHVybiBib2FyZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAdHlwZWRlZiB7XCJvdmVyZmxvd1wifFwiaG9yaXpvbnRhbFwifFwidmVydGljYWxcInxcInBhcmVudE92ZXJmbG93XCJ8XCJwYXJlbnRIb3Jpem9udGFsXCJ8XCJwYXJlbnRWZXJ0aWNhbFwifG51bGx9IGNhbnZhc0ZpdFxuXHQgKi9cblx0LyoqXG5cdCAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhcyAtIENhbnZhc+imgee0oFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGxheUJvYXJkIC0g44Oc44O844OJ44K/44Kk44OXXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwbGF5ZXJzIC0g44OX44Os44Kk44Ok44O85Lq65pWwKDIgb3IgNClcblx0ICogQHBhcmFtIHtCb2FyZEluaXRPcHRpb259IG9wdGlvbiAtIOODnOODvOODieOBruWIneacn+WMluOCquODl+OCt+ODp+ODs1xuXHQgKi9cblx0Y29uc3RydWN0b3IoY2FudmFzLCBwbGF5Qm9hcmQsIG9wdGlvbil7XG5cdFx0Y29uc3Qge1xuXHRcdFx0cGxheWVycz0yLFxuXHRcdFx0Y2FudmFzV2lkdGg9dW5kZWZpbmVkLFxuXHRcdFx0Y2FudmFzSGVpZ2h0PXVuZGVmaW5lZCxcblx0XHRcdGNhbnZhc0ZpdD1cIm92ZXJmbG93XCIsXG5cdFx0XHRib2FyZExlZnQ9NSxcblx0XHRcdGJvYXJkVG9wPTUsXG5cdFx0XHRwYW5lbFdpZHRoPTUwLFxuXHRcdFx0cGFuZWxIZWlnaHQ9MHxwYW5lbFdpZHRoKjEuMSxcblx0XHRcdHBpZWNlU2l6ZT0wfHBhbmVsV2lkdGgqMC45LFxuXHRcdFx0dXNlUmFua1NpemUgPSB0cnVlLFxuXHRcdFx0aXNEcmF3U2hhZG93ID0gdHJ1ZSxcblx0XHRcdGJvcmRlcldpZHRoPU1hdGgubWluKHBhbmVsV2lkdGgsIHBhbmVsSGVpZ2h0KS8zMCxcblx0XHRcdHVzZVN0YW5kPWZhbHNlLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yPVwiIzAwMDAwMDAwXCIsXG5cdFx0XHRhdXRvRHJhd2luZz10cnVlLFxuXHRcdFx0b25EcmF3ZWQsXG5cdFx0XHRvbkdhbWVPdmVyPWk9PmFsZXJ0KGDjg5fjg6zjgqTjg6Tjg7wke2krMX3jga7mlZfljJfjgafjgZnjgIJgKSxcblx0XHRcdGZyZWVNb2RlPWZhbHNlXG5cdFx0fSA9IG9wdGlvbjtcblx0XHQvLyDliJ3mnJ/ljJZcblx0XHRjb25zdCBjYW52YXNGb250QXN5bmMgPSBjYW52YXNGb250LmltcG9ydEFzeW5jKCk7XG5cdFx0Y29uc3QgY2FudmFzSW1hZ2VBc3luYyA9IGNhbnZhc0ltYWdlLmltcG9ydEFzeW5jKCk7XG5cdFx0dGhpcy5jYW52YXMgPSBjYW52YXM7XG5cdFx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblx0XHRjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cdFx0dGhpcy5jdHggPSBjdHg7XG5cblx0XHR0aGlzLnBpZWNlcyA9IFBpZWNlLmdldFBpZWNlcyhjdHgsIHtcblx0XHRcdHNpemU6IHBpZWNlU2l6ZSxcblx0XHRcdHVzZVJhbmtTaXplLFxuXHRcdFx0aXNEcmF3U2hhZG93XG5cdFx0fSk7XG5cblx0XHQvLyDjg5zjg7zjg4nmg4XloLFcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIGJvYXJkc1twbGF5Qm9hcmRdKTtcblx0XHRpZighWzIsIDRdLmluY2x1ZGVzKHBsYXllcnMpKSB0aHJvdyBFcnJvcihgcGxheWVycz0ke3BsYXllcnN9LCBwbGF5ZXJzIG5lZWQgMiBvciA0LmApO1xuXHRcdHRoaXMucGxheWVycyA9IHBsYXllcnM7XG5cdFx0dGhpcy5sZWZ0ID0gYm9hcmRMZWZ0O1xuXHRcdHRoaXMudG9wID0gYm9hcmRUb3A7XG5cdFx0dGhpcy5wYW5lbFdpZHRoID0gcGFuZWxXaWR0aDtcblx0XHR0aGlzLnBhbmVsSGVpZ2h0ID0gcGFuZWxIZWlnaHQ7XG5cdFx0dGhpcy5ib3JkZXJXaWR0aCA9IGJvcmRlcldpZHRoO1xuXHRcdHRoaXMucGllY2VTaXplID0gcGllY2VTaXplO1xuXHRcdHRoaXMuY2FudmFzQmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yO1xuXG5cdFx0Ly8g44Oe44K555uu44OH44O844K/44KS5qeL56+JXG5cdFx0dGhpcy5maWVsZCA9IHRoaXMuZmllbGQubWFwKChyb3csIHBZKT0+XG5cdFx0XHRbLi4ucm93XS5tYXAoKGNoYXIsIHBYKT0+e1xuXHRcdFx0XHRjb25zdCBjZW50ZXIgPSBib2FyZExlZnQrcGFuZWxXaWR0aCoocFgrMSk7XG5cdFx0XHRcdGNvbnN0IG1pZGRsZSA9IGJvYXJkVG9wK3BhbmVsSGVpZ2h0KihwWSsxKVxuXHRcdFx0XHRyZXR1cm4gbmV3IFBhbmVsKGN0eCwgY2hhciwgY2VudGVyLCBtaWRkbGUsIHBhbmVsV2lkdGgsIHBhbmVsSGVpZ2h0LCBib3JkZXJXaWR0aCwgcFgsIHBZKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0XHR0aGlzLnhMZW4gPSB0aGlzLmZpZWxkWzBdLmxlbmd0aDtcblx0XHR0aGlzLnlMZW4gPSB0aGlzLmZpZWxkLmxlbmd0aDtcblx0XHR0aGlzLndpZHRoID0gdGhpcy5wYW5lbFdpZHRoKih0aGlzLnhMZW4rMSk7XG5cdFx0dGhpcy5oZWlnaHQgPSB0aGlzLnBhbmVsSGVpZ2h0Kih0aGlzLnlMZW4rMSk7XG5cdFx0dGhpcy5yaWdodCA9IGJvYXJkTGVmdCt0aGlzLndpZHRoO1xuXHRcdHRoaXMuYm90dG9tID0gYm9hcmRUb3ArdGhpcy5oZWlnaHQ7XG5cdFx0dGhpcy5zdGFuZCA9IG5ldyBTdGFuZCh0aGlzKTtcblx0XHRjYW52YXMud2lkdGggPSBjYW52YXNXaWR0aCA/PyAodXNlU3RhbmQ/IHRoaXMuc3RhbmQucmlnaHQ6IHRoaXMucmlnaHQpKzU7XG5cdFx0Y2FudmFzLmhlaWdodCA9IGNhbnZhc0hlaWdodCA/PyB0aGlzLmJvdHRvbSs1O1xuXHRcdC8vIOOCreODo+ODs+ODkOOCueOCteOCpOOCuuiqv+aVtFxuXHRcdGNvbnN0IHtzdHlsZX0gPSBjYW52YXM7XG5cdFx0aWYoY2FudmFzRml0ID09PSBcIm92ZXJmbG93XCIpe1xuXHRcdFx0aWYoc3R5bGUubWF4V2lkdGggPT09IFwiXCIpIHN0eWxlLm1heFdpZHRoID0gXCI5N3Z3XCI7XG5cdFx0XHRpZihzdHlsZS5tYXhIZWlnaHQgPT09IFwiXCIpIHN0eWxlLm1heEhlaWdodCA9IFwiOTd2aFwiO1xuXHRcdH1cblx0XHRlbHNlIGlmKGNhbnZhc0ZpdCA9PT0gXCJob3Jpem9udGFsXCIpe1xuXHRcdFx0aWYoc3R5bGUud2lkdGggPT09IFwiXCIpIHN0eWxlLndpZHRoID0gXCI5N3Z3XCI7XG5cdFx0fVxuXHRcdGVsc2UgaWYoY2FudmFzRml0ID09PSBcInZlcnRpY2FsXCIpe1xuXHRcdFx0aWYoc3R5bGUuaGVpZ2h0ID09PSBcIlwiKSBzdHlsZS5oZWlnaHQgPSBcIjk3dmhcIjtcblx0XHR9XG5cdFx0ZWxzZSBpZihjYW52YXNGaXQgPT09IFwicGFyZW50T3ZlcmZsb3dcIil7XG5cdFx0XHRpZihzdHlsZS5tYXhXaWR0aCA9PT0gXCJcIikgc3R5bGUubWF4V2lkdGggPSBcIjEwMCVcIjtcblx0XHRcdGlmKHN0eWxlLm1heEhlaWdodCA9PT0gXCJcIikgc3R5bGUubWF4SGVpZ2h0ID0gXCIxMDAlXCI7XG5cdFx0fVxuXHRcdGVsc2UgaWYoY2FudmFzRml0ID09PSBcInBhcmVudEhvcml6b250YWxcIil7XG5cdFx0XHRpZihzdHlsZS53aWR0aCA9PT0gXCJcIikgc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcblx0XHR9XG5cdFx0ZWxzZSBpZihjYW52YXNGaXQgPT09IFwicGFyZW50VmVydGljYWxcIil7XG5cdFx0XHRpZihzdHlsZS5oZWlnaHQgPT09IFwiXCIpIHN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuXHRcdH1cblxuXHRcdC8vIOaPj+WGmeabtOaWsOioreWumlxuXHRcdHRoaXMuYXV0b0RyYXdpbmcgPSBhdXRvRHJhd2luZztcblx0XHRpZihhdXRvRHJhd2luZyl7XG5cdFx0XHRjYW52YXNGb250QXN5bmMudGhlbigoKT0+dGhpcy5kcmF3KCkpO1xuXHRcdFx0Y2FudmFzSW1hZ2VBc3luYy50aGVuKCgpPT50aGlzLmRyYXcoKSk7XG5cdFx0XHR0aGlzLmRyYXcoKTtcblx0XHR9XG5cdFx0dGhpcy5vbkRyYXdlZCA9IG9uRHJhd2VkO1xuXHRcdHRoaXMub25HYW1lT3ZlciA9IG9uR2FtZU92ZXI7XG5cdFx0LyoqICAqL1xuXHRcdHRoaXMuZ2FtZUFsaXZlcyA9IG5ldyBNYXAoXG5cdFx0XHRbLi4uQXJyYXkodGhpcy5wbGF5ZXJzKS5rZXlzKCldXG5cdFx0XHQubWFwKGk9Plt0aGlzLiNkZWdOb3JtYWwoaSksIHRydWVdKVxuXHRcdCk7XG5cdFx0dGhpcy5mcmVlTW9kZSA9IGZyZWVNb2RlO1xuXG5cdFx0dGhpcy5yZWNvcmQgPSBbXTtcblx0XHR0aGlzLnVpQ29udHJvbCA9IHVJQ29udHJvbCh0aGlzKTtcblx0XHR0aGlzLmVuUGFzc2FudCA9IG5ldyBFblBhc3NhbnQoKTtcblx0fVxuXG5cdC8qKiDjg5zjg7zjg4njgpLplonjgZjjgosgKi9cblx0Y2xvc2UoKXtcblx0XHR0aGlzLnVpQ29udHJvbC5yZW1vdmVFdmVudCgpO1xuXHR9XG5cblx0LyoqIOinkuW6puOCkuato+imj+WMllxuXHQgKiBAcGFyYW0ge251bWJlcn0gcGxheWVhSWRPckRlZyAtIOODl+ODrOOCpOODpOODvOeVquWPt+OBvuOBn+OBr+inkuW6plxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cblx0I2RlZ05vcm1hbChwbGF5ZWFJZE9yRGVnKXtcblx0XHRsZXQgZGVnID0gcGxheWVhSWRPckRlZztcblx0XHRpZigwIDwgZGVnICYmIGRlZyA8IDQpIGRlZyA9IDB8ZGVnKjM2MC90aGlzLnBsYXllcnM7XG5cdFx0ZG97ZGVnID0gKGRlZyszNjApJTM2MH0gd2hpbGUoZGVnPDApO1xuXHRcdHJldHVybiBkZWc7XG5cdH1cblxuXHQvKiog6aeS6YWN572u44KS5Zue6LuiXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBkZWcgLSDlm57ou6Lop5IgKDkw44Gu5YCN5pWwKVxuXHQgKi9cblx0cm90YXRlRmllbGQoZGVnKXtcblx0XHRjb25zdCB7eExlbiwgeUxlbn0gPSB0aGlzO1xuXG5cdFx0ZGVnID0gdGhpcy4jZGVnTm9ybWFsKGRlZyk7XG5cdFx0aWYoZGVnID09PSAwKSByZXR1cm47XG5cdFx0aWYoIVs5MCwgMTgwLCAyNzBdLmluY2x1ZGVzKGRlZykpIHRocm93IEVycm9yKGBkZWc9JHtkZWd9LCBkZWcgbmVlZCBtdWx0aXBsZSBvZiA5MC5gKTtcblx0XHRpZihbOTAsIDI3MF0uaW5jbHVkZXMoZGVnKSl7XG5cdFx0XHQvLyAy5qyh6YWN5YiX44KS6Lui572uXG5cdFx0XHRjb25zdCB0cmFuc3Bvc2UgPSBhID0+IGFbMF0ubWFwKChfLCBjKSA9PiBhLm1hcChyID0+IHJbY10pKTtcblx0XHRcdGlmKHhMZW4gIT09IHlMZW4pIHRocm93IEVycm9yKGBjb2xzPSR7eExlbn0gIT0gcm93cz0ke3lMZW59LCBOb3Qgcm93cyA9IGNvbHMuYCk7XG5cdFx0XHR0aGlzLmZpZWxkID0gdHJhbnNwb3NlKHRoaXMuZmllbGQpO1xuXHRcdH1cblx0XHRpZihbMTgwLCAyNzBdLmluY2x1ZGVzKGRlZykpe1xuXHRcdFx0dGhpcy5maWVsZC5yZXZlcnNlKCk7XG5cdFx0fVxuXHRcdHRoaXMuZmllbGQuZm9yRWFjaChyb3c9Pntcblx0XHRcdHJvdy5mb3JFYWNoKHBhbmVsPT57XG5cdFx0XHRcdGlmKCFwYW5lbC5waWVjZSkgcmV0dXJuO1xuXHRcdFx0XHRwYW5lbC5waWVjZS5kZWcgKz0gZGVnO1xuXHRcdFx0fSk7XG5cdFx0XHRpZihbOTAsIDE4MF0uaW5jbHVkZXMoZGVnKSkgcm93LnJldmVyc2UoKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKiDpp5Ljga7liJ3mnJ/phY3nva5cblx0ICogQHBhcmFtIHtudW1iZXJ9IHBsYXllcklkIC0g44OX44Os44Kk44Ok44O855Wq5Y+3XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBnYW1lTmFtZSAtIOOCsuODvOODoOWQjSjln7rmupbjgajjgarjgovpp5Ljga7phY3nva7jgrvjg4Pjg4gpXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwaWVjZVNldCAtIOmnkuOBrumFjee9ruODkeOCv+ODvOODs1xuXHQgKi9cblx0cHV0U3RhcnRQaWVjZXMocGxheWVySWQsIGdhbWVOYW1lLCBwaWVjZVNldD1cImRlZmF1bHRcIil7XG5cdFx0Y29uc3Qge3BpZWNlc30gPSB0aGlzO1xuXG5cdFx0Y29uc3QgZGVnID0gdGhpcy4jZGVnTm9ybWFsKHBsYXllcklkKTtcblx0XHR0aGlzLnJvdGF0ZUZpZWxkKGRlZyk7XG5cdFx0Y29uc3QgcG9zID0gZ2FtZXNbZ2FtZU5hbWVdLnBvc2l0aW9uW3RoaXMueExlbl1bcGllY2VTZXRdO1xuXHRcdGlmKCFwb3MpIHRocm93IEVycm9yKGBnYW1lc1tcIiR7Z2FtZU5hbWV9XCJdLnBvc2l0aW9uW1wiJHt0aGlzLnhMZW59XCJdW1wiJHtwaWVjZVNldH1cIl1pcyBudWxsLmApO1xuXHRcdHBvcy5mb3JFYWNoKChyb3csIGkpPT57XG5cdFx0XHRpZihyb3cubGVuZ3RoIDwgdGhpcy54TGVuKSB0aHJvdyBFcnJvcihyb3cuam9pbihcIlwiKSk7XG5cdFx0XHRjb25zdCBwWSA9IGkrdGhpcy55TGVuIC0gcG9zLmxlbmd0aDtcblx0XHRcdFsuLi5yb3ddLmZvckVhY2goKGNoYXIsIHBYKT0+e1xuXHRcdFx0XHRpZighcGllY2VzW2NoYXJdKSByZXR1cm47XG5cdFx0XHRcdGNvbnN0IHBpZWNlID0gcGllY2VzW2NoYXJdLmNsb25lKCk7XG5cdFx0XHRcdGNvbnN0IHBhbmVsID0gdGhpcy5maWVsZFtwWV1bcFhdO1xuXHRcdFx0XHRwaWVjZS5jZW50ZXIgPSBwYW5lbC5jZW50ZXI7XG5cdFx0XHRcdHBpZWNlLm1pZGRsZSA9IHBhbmVsLm1pZGRsZTtcblx0XHRcdFx0cGFuZWwucGllY2UgPSBwaWVjZTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHRoaXMucm90YXRlRmllbGQoLWRlZyk7XG5cdFx0aWYodGhpcy5hdXRvRHJhd2luZykgdGhpcy5kcmF3KCk7XG5cdH1cblxuXHQvKiog6aeS44Gu6YWN572uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwaWVjZSAtIOmnkuOBruihqOePvuaWh+Wtl1xuXHQgKiBAcGFyYW0ge251bWJlcn0gcFggLSBY5pa55ZCR6YWN572u5L2N572uKOODnuOCueebruWfuua6lilcblx0ICogQHBhcmFtIHtudW1iZXJ9IHBZIC0gWeaWueWQkemFjee9ruS9jee9rijjg57jgrnnm67ln7rmupYpXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwbGF5ZWFJZE9yRGVnIC0g44OX44Os44Kk44Ok44O855Wq5Y+344G+44Gf44Gv6aeS44Gu6YWN572u6KeSXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb24gLSDjgqrjg5fjgrfjg6fjg7Ncblx0ICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbi5kaXNwbGF5UHRuIC0g6KGo56S65paH5a2X5YiX44KS5aSJ5pu0KDHjgJwpXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9uLmlzTW92ZWQgLSDliJ3lm57np7vli5XmuIjjgb/jgYvlkKbjgYtcblx0ICovXG5cdHB1dE5ld1BpZWNlKHBpZWNlLCBwWCwgcFksIHBsYXllYUlkT3JEZWcsIG9wdGlvbj17fSl7XG5cdFx0Y29uc3Qge2Rpc3BsYXlQdG49MCwgaXNNb3ZlZD1mYWxzZX0gPSBvcHRpb247XG5cdFx0Y29uc3Qge3BpZWNlc30gPSB0aGlzO1xuXG5cdFx0Y29uc3QgZGVnID0gdGhpcy4jZGVnTm9ybWFsKHBsYXllYUlkT3JEZWcpO1xuXHRcdGlmKHR5cGVvZiBwaWVjZSA9PT0gXCJzdHJpbmdcIil7XG5cdFx0XHRwaWVjZSA9IG5ldyBQaWVjZSh0aGlzLmN0eCwgcGllY2VzW3BpZWNlXSwge2Rpc3BsYXlQdG4sIGRlZywgaXNNb3ZlZH0pO1xuXHRcdH1cblx0XHRjb25zdCBwYW5lbCA9IHRoaXMuZmllbGRbcFldW3BYXTtcblx0XHRwaWVjZS5jZW50ZXIgPSBwYW5lbC5jZW50ZXI7XG5cdFx0cGllY2UubWlkZGxlID0gcGFuZWwubWlkZGxlO1xuXHRcdHBhbmVsLnBpZWNlID0gcGllY2U7XG5cdFx0aWYodGhpcy5hdXRvRHJhd2luZykgdGhpcy5kcmF3KCk7XG5cdH1cblxuXHQvKiog5paH5a2X5YiX44GL44KJ6aeS44KS6YWN572uXG5cdCAqIHtzdHJpbmd9IHRleHQgLSDpp5LphY3nva7jgpLooajjgZnmloflrZfliJdcblx0ICovXG5cdHNldFRleHRQaWVjZXModGV4dCl7XG5cdFx0Y29uc3Qge2ZpZWxkLCBwaWVjZXMsIHhMZW4sIHlMZW59ID0gdGhpcztcblxuXHRcdGNvbnN0IHN0YW5kVGl0bGUgPSBcIuaMgemnku+8mlwiO1xuXHRcdC8vIEJPROW9ouW8j1xuXHRcdGlmKDA8dGV4dC5pbmRleE9mKHN0YW5kVGl0bGUpKSB0ZXh0ID0gQm9kLmNvbnZTZXRUZXh0KHRleHQpO1xuXG5cdFx0Ly8g5o6S6Zmk44GZ44KL6KiY5Y+3XG5cdFx0Y29uc3Qgbm9pc2VzID0gXCLilI/ilIHilK/ilJPilJfilLfilJvilIPilILilKDilIDilLzilKjigJVcIjtcblxuXHRcdC8vIOmFjeWIl+WkieaPm1xuXHRcdGNvbnN0IHRleHRzID0gW3RleHRdLmNvbmNhdChcblx0XHRcdFx0Wy4uLm5vaXNlc10sXG5cdFx0XHRcdE9iamVjdC52YWx1ZXMoUGllY2UuZGVnQ2hhcnMpLm1hcChjPT5cIlxcblwiK2Mrc3RhbmRUaXRsZSlcblx0XHRcdCkucmVkdWNlKFxuXHRcdFx0XHQodGV4dCxjaGFyKT0+XG5cdFx0XHRcdFx0dGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAoY2hhcixcImdcIiksIFwiXCIpXG5cdFx0XHQpLnJlcGxhY2UoL1xcblxcbi9nLCBcIlxcblwiKVxuXHRcdFx0LnJlcGxhY2UoL+OAgC9nLCBcIuODu1wiKVxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnNwbGl0KC9cXG4vKVxuXHRcdFx0Lm1hcChcblx0XHRcdFx0cm93PT5yb3cubWF0Y2goLy57Mn0vZykpO1xuXG5cdFx0Ly8g44Oc44O844OJ44Gr6aeS44KS6YWN572uXG5cdFx0Zm9yKGxldCBwWT0wO3BZPHlMZW47cFkrKyl7XG5cdFx0XHRmb3IobGV0IHBYPTA7cFg8eExlbjtwWCsrKXtcblx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdGNvbnN0IHRleHQgPSB0ZXh0c1twWV1bcFhdO1xuXHRcdFx0XHRcdGNvbnN0IHBpZWNlID0gUGllY2Uuc3RyaW5nVG9QaWVjZShwaWVjZXMsIHRleHQpO1xuXHRcdFx0XHRcdHBpZWNlLmNlbnRlciA9IGZpZWxkW3BZXVtwWF0uY2VudGVyO1xuXHRcdFx0XHRcdHBpZWNlLm1pZGRsZSA9IGZpZWxkW3BZXVtwWF0ubWlkZGxlO1xuXHRcdFx0XHRcdGZpZWxkW3BZXVtwWF0ucGllY2UgPSBwaWVjZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXRjaChleCl7XG5cdFx0XHRcdFx0ZmllbGRbcFldW3BYXS5waWVjZSA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyDmjIHjgaHpp5LjgpLphY3nva5cblx0XHR0aGlzLnN0YW5kLmNsZWFyKCk7XG5cdFx0Y29uc3Qgc3RhbmRUZXh0cyA9IHRleHRzW3lMZW5dO1xuXHRcdGlmKHN0YW5kVGV4dHMpe1xuXHRcdFx0c3RhbmRUZXh0cy5mb3JFYWNoKHRleHQ9Pntcblx0XHRcdFx0Y29uc3QgcGllY2UgPSBQaWVjZS5zdHJpbmdUb1BpZWNlKHBpZWNlcywgdGV4dCk7XG5cdFx0XHRcdGlmKCFwaWVjZSkgcmV0dXJuO1xuXHRcdFx0XHR0aGlzLnN0YW5kLmFkZChwaWVjZSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYodGhpcy5hdXRvRHJhd2luZykgdGhpcy5kcmF3KCk7XG5cdH1cblxuXHQvKiog6KeS5bqm5Z+65rqW44Gu44Oe44K555uu44Gu6KGM44KS5Y+W5b6X44GZ44KLXG5cdCAqIEBwYXJhbSB7UGFuZWx9IHBhbmVsIC0g44Oe44K555uuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBkZWcgLSDop5LluqZcblx0ICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldERlZyAtIOijnOato+inkuW6plxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cblx0Z2V0Um93KHBYLCBwWSwgZGVnLCBvZmZzZXREZWc9MCl7XG5cdFx0Y29uc3Qge3hMZW4sIHlMZW59ID0gdGhpcztcblxuXHRcdGRlZyA9IHRoaXMuI2RlZ05vcm1hbChkZWcrb2Zmc2V0RGVnKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0ZGVnID09PSAwPyB5TGVuLTEtcFk6XG5cdFx0XHRkZWcgPT09IDkwPyBwWDpcblx0XHRcdGRlZyA9PT0gMTgwPyBwWTpcblx0XHRcdGRlZyA9PT0gMjcwPyB4TGVuLTEtcFg6XG5cdFx0XHQtMVxuXHRcdCk7XG5cdH1cblxuXHQvKiog6KeS5bqm5Z+65rqW44Gu44Oe44K555uu44Gu5YiX44KS5Y+W5b6X44GZ44KLXG5cdCAqIEBwYXJhbSB7UGFuZWx9IHBhbmVsIC0g44Oe44K555uuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBkZWcgLSDop5LluqZcblx0ICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldERlZyAtIOijnOato+inkuW6plxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cblx0Z2V0Q29sKHBYLCBwWSwgZGVnLCBvZmZzZXREZWc9MCl7XG5cdFx0Y29uc3Qge3hMZW4sIHlMZW59ID0gdGhpcztcblxuXHRcdGRlZyA9IHRoaXMuI2RlZ05vcm1hbChkZWcrb2Zmc2V0RGVnKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0ZGVnID09PSAwPyBwWDpcblx0XHRcdGRlZyA9PT0gOTA/IHlMZW4tMS1wWTpcblx0XHRcdGRlZyA9PT0gMTgwPyB4TGVuLTEtcFg6XG5cdFx0XHRkZWcgPT09IDI3MD8gcFk6XG5cdFx0XHQtMVxuXHRcdCk7XG5cdH1cblxuXHQvKiog44OX44Ot44Oi44O844K344On44Oz44Ko44Oq44Ki5YaF44Gn44GC44KL44GL5Yik5YilXG5cdCAqIEBwYXJhbSB7UGFuZWx9IHBhbmVsIC0g44Oe44K555uuXG5cdCAqL1xuXHRjaGVja0NhblByb21vKHBhbmVsKXtcblx0XHRjb25zdCB7eUxlbn0gPSB0aGlzO1xuXHRcdGNvbnN0IHtwaWVjZSwgcFgsIHBZfSA9IHBhbmVsO1xuXHRcdGNvbnN0IHtkZWd9ID0gcGllY2U7XG5cblx0XHRjb25zdCBbcHJvbW9MaW5lLCBmb3JjZVByb21vTGluZV0gPSBbXG5cdFx0XHRwaWVjZS5nYW1lLnByb21vTGluZSxcblx0XHRcdHBpZWNlLmZvcmNlUHJvbW9MaW5lXG5cdFx0XS5tYXAobGluZT0+eUxlbi1saW5lLSgwfHRoaXMucHJvbW9MaW5lT2Zmc2V0KSk7XG5cblx0XHRsZXQgcm93O1xuXHRcdGlmKCF0aGlzLnNpZGVQcm9tbyl7XG5cdFx0XHRyb3cgPSB0aGlzLmdldFJvdyhwWCwgcFksIGRlZyk7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHRyb3cgPSBNYXRoLm1heChcblx0XHRcdFx0Li4uT2JqZWN0LmtleXMoUGllY2UuZGVnQ2hhcnMpXG5cdFx0XHRcdC5tYXAoZD0+MHxkKVxuXHRcdFx0XHQuZmlsdGVyKGQ9PmQhPT1kZWcpXG5cdFx0XHRcdC5tYXAoXG5cdFx0XHRcdFx0ZD0+dGhpcy5nZXRSb3cocFgsIHBZLCBkLCAxODApXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRjYW5Qcm9tbzogcHJvbW9MaW5lIDw9IHJvdyxcblx0XHRcdGZvcmNlUHJvbW86IGZvcmNlUHJvbW9MaW5lIDw9IHJvd1xuXHRcdH07XG5cdH1cblxuXHQvKiog5pWX5YyX44GX44Gf44OX44Os44Kk44Ok44O844GM5a2Y5Zyo44GZ44KL44GL56K66KqN44GX44CB44Kk44OZ44Oz44OI44KS55m655Sf44GV44Gb44KLICovXG5cdCNlbWl0R2FtZU92ZXIoKXtcblx0XHRbLi4udGhpcy5nYW1lQWxpdmVzXS5mb3JFYWNoKChbZGVnLCBnYW1lQWxpdmVdLCBpKT0+e1xuXHRcdFx0aWYoIWdhbWVBbGl2ZSkgcmV0dXJuO1xuXHRcdFx0aWYodGhpcy5maWVsZC5zb21lKHJvdz0+XG5cdFx0XHRcdHJvdy5zb21lKCh7cGllY2V9KT0+XG5cdFx0XHRcdFx0cGllY2Vcblx0XHRcdFx0XHQmJiBwaWVjZS5kZWcgPT09IGRlZ1xuXHRcdFx0XHRcdCYmIHBpZWNlLmhhc0F0dHIoXCJraW5nXCIpXG5cdFx0XHRcdClcblx0XHRcdCkpIHJldHVybjtcblx0XHRcdHRoaXMuZ2FtZUFsaXZlcy5zZXQoZGVnLCBmYWxzZSk7XG5cdFx0XHR0aGlzLm9uR2FtZU92ZXIoaSk7XG5cdFx0fSlcblx0fVxuXG5cdC8qKiDjg5fjg63jg6Ljg7zjgrfjg6fjg7Plh6bnkIZcblx0ICogQHBhcmFtIHtQYW5lbH0gZnJvbVBhbmVsIC0g56e75YuV5YWD44Gu44Oe44K555uuXG5cdCAqIEBwYXJhbSB7UGFuZWx9IHRvUGFuZWwgLSDpgbjmip7kuK3jga7jg57jgrnnm65cblx0ICogQHBhcmFtIHtib29sZWFufSBjYW5Qcm9tbyAtIOaIkOOCi+OBk+OBqOOBjOOBp+OBjeOCi1xuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGZvcmNlUHJvbW8gLSDmiJDjgorjgpLlvLfliLbjgZnjgotcblx0ICovXG5cdCNwcm9tb0RpYWxvZyhmcm9tUGFuZWwsIHRvUGFuZWwsIGNhblByb21vLCBmb3JjZVByb21vKXtcblx0XHRjb25zdCB7ZnJlZU1vZGV9ID0gdGhpcztcblx0XHRjb25zdCB7cGllY2V9ID0gdG9QYW5lbDtcblxuXHRcdC8vIOODl+ODreODouODvOOCt+ODp+ODs+WHpueQhlxuXHRcdGlmKCFwaWVjZS5wcm9tbyB8fCBwaWVjZS5oYXNBdHRyKFwicHJvbW90ZWRcIikgfHwgIWNhblByb21vKXtcblx0XHRcdHRoaXMuYWRkUmVjb3JkKHRvUGFuZWwsIHtmcm9tUGFuZWx9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0ZG97XG5cdFx0XHRmb3IoY29uc3QgW2NoYXIsIHtuYW1lfV0gb2YgT2JqZWN0LmVudHJpZXMocGllY2UucHJvbW8pKXtcblx0XHRcdFx0aWYoY29uZmlybShg5oiQ44KK44G+44GZ44GLP1xuXHQke3BpZWNlLmNoYXJ9OiR7cGllY2UubmFtZX1cblx044CA4oaTXG5cdCR7Y2hhcn06JHtuYW1lfWApKXtcblx0XHRcdFx0XHR0aGlzLmFkZFJlY29yZCh0b1BhbmVsLCB7ZnJvbVBhbmVsLCBlbmQ6XCLmiJBcIn0pO1xuXHRcdFx0XHRcdHBpZWNlLnByb21vdGlvbihjaGFyKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IHdoaWxlKCFmcmVlTW9kZSAmJiBmb3JjZVByb21vKTtcblx0XHR0aGlzLmFkZFJlY29yZCh0b1BhbmVsLCB7ZnJvbVBhbmVsLCBlbmQ6XCLkuI3miJBcIn0pO1xuXHR9XG5cblx0LyoqIOmnkuOCkuenu+WLlVxuXHQgKiBAcGFyYW0ge1BhbmVsfSBmcm9tUGFuZWwgLSDnp7vli5XlhYPjga7jg57jgrnnm65cblx0ICogQHBhcmFtIHtQYW5lbH0gdG9QYW5lbCAtIOmBuOaKnuS4reOBruODnuOCueebrlxuXHQgKi9cblx0bW92ZVBpZWNlKGZyb21QYW5lbCwgdG9QYW5lbCl7XG5cdFx0Y29uc3Qge3N0YW5kLCBmcmVlTW9kZSwgZW5QYXNzYW50fSA9IHRoaXM7XG5cblx0XHRpZighZnJvbVBhbmVsXG5cdFx0XHR8fCB0b1BhbmVsLmhhc0F0dHIoXCJrZWVwT3V0XCIpXG5cdFx0XHR8fCB0b1BhbmVsLnBpZWNlID09PSBmcm9tUGFuZWwucGllY2Vcblx0XHRcdHx8IHRvUGFuZWwucGllY2U/LmRlZyA9PT0gZnJvbVBhbmVsLnBpZWNlLmRlZ1xuXHRcdFx0fHwgIXRoaXMuZnJlZU1vZGUgJiYgIXRvUGFuZWwuaXNUYXJnZXRcblx0XHQpIHJldHVybjtcblxuXHRcdGxldCB7Y2FuUHJvbW8sIGZvcmNlUHJvbW99ID0gdGhpcy5jaGVja0NhblByb21vKGZyb21QYW5lbCk7XG5cblx0XHRzdGFuZC5jYXB0dXJlUGllY2UoXG5cdFx0XHRmcm9tUGFuZWwucGllY2UsXG5cdFx0XHR0b1BhbmVsLnBpZWNlLFxuXHRcdFx0dG9QYW5lbC5oYXNBdHRyKFwiY2FwdHVyZVwiKSxcblx0XHRcdHRvUGFuZWwuaGFzQXR0cihcImNhbnRDYXB0dXJlXCIpXG5cdFx0KTtcblxuXHRcdHRvUGFuZWwucGllY2UgPSBmcm9tUGFuZWwucGllY2U7XG5cdFx0ZnJvbVBhbmVsLnBpZWNlID0gbnVsbDtcblxuXHRcdGNvbnN0IHtwaWVjZX0gPSB0b1BhbmVsO1xuXHRcdHBpZWNlLmNlbnRlciA9IHRvUGFuZWwuY2VudGVyO1xuXHRcdHBpZWNlLm1pZGRsZSA9IHRvUGFuZWwubWlkZGxlO1xuXHRcdHBpZWNlLmlzTW92ZWQgPSB0cnVlO1xuXG5cdFx0Y29uc3QgYWZ0ZXJQcm9tbyA9IHRoaXMuY2hlY2tDYW5Qcm9tbyh0b1BhbmVsKTtcblx0XHRjYW5Qcm9tbyB8fD0gYWZ0ZXJQcm9tby5jYW5Qcm9tbztcblx0XHRmb3JjZVByb21vIHx8PSBhZnRlclByb21vLmZvcmNlUHJvbW87XG5cblx0XHQvLyDjgqLjg7Pjg5Hjg4PjgrXjg7Ncblx0XHRlblBhc3NhbnQuc2V0TW92ZWQodG9QYW5lbCk7XG5cblx0XHQvLyDjg5fjg63jg6Ljg7zjgrfjg6fjg7Plh6bnkIZcblx0XHR0aGlzLiNwcm9tb0RpYWxvZyhmcm9tUGFuZWwsIHRvUGFuZWwsIGNhblByb21vLCBmb3JjZVByb21vKTtcblxuXHRcdC8vIOODl+ODrOOCpOODpOODvOOBruOCsuODvOODoOOCquODvOODkOODvOWIpOWumlxuXHRcdHRoaXMuI2VtaXRHYW1lT3ZlcigpO1xuXHR9XG5cblx0LyoqIOaji+itnOOCkui/veiomFxuXHQgKiBAcGFyYW0ge1BhbmVsfSB0b1BhbmVsIC0g56e75YuV5YWI44Gu44Oe44K555uuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb24gLSDjgqrjg5fjgrfjg6fjg7Ncblx0ICogQHBhcmFtIHtQYW5lbH0gb3B0aW9uLmZyb21QYW5lbCAtIOenu+WLleWFg+OBruODnuOCueebrlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uLmVuZCAtIOOCquODl+OCt+ODp+ODsz3miJB85LiN5oiQfOaJk1xuXHQgKi9cblx0YWRkUmVjb3JkKHRvUGFuZWwsIG9wdGlvbj17fSl7XG5cdFx0Y29uc3Qge2Zyb21QYW5lbCwgZW5kPVwiXCJ9ID0gb3B0aW9uO1xuXHRcdGNvbnN0IHtwaWVjZX0gPSB0b1BhbmVsO1xuXG5cdFx0dGhpcy5yZWNvcmQucHVzaCh7XG5cdFx0XHR0bzoge1xuXHRcdFx0XHRwWDogdG9QYW5lbC5wWCxcblx0XHRcdFx0cFk6IHRvUGFuZWwucFksXG5cdFx0XHR9LFxuXHRcdFx0ZnJvbToge1xuXHRcdFx0XHRwWDogZnJvbVBhbmVsPy5wWCxcblx0XHRcdFx0cFk6IGZyb21QYW5lbD8ucFlcblx0XHRcdH0sXG5cdFx0XHRkZWc6IHBpZWNlLmRlZyxcblx0XHRcdHBpZWNlQ2hhcjogcGllY2UuY2hhcixcblx0XHRcdGVuZFxuXHRcdH0pO1xuXHR9XG5cblx0LyoqIOaji+itnOOCkuODhuOCreOCueODiOOBp+WPluW+l1xuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0Z2V0VGV4dFJlY29yZCgpe1xuXHRcdGNvbnN0IGdldFBYID0gKHtwWH0pPT4gcFg9PW51bGw/IFwiKlwiOiAodGhpcy54TGVuLXBYKS50b1N0cmluZygzNik7XG5cdFx0Y29uc3QgZ2V0UFkgPSAoe3BZfSk9PiBwWT09bnVsbD8gXCIqXCI6IChwWSsxKS50b1N0cmluZygzNik7XG5cdFx0cmV0dXJuIHRoaXMucmVjb3JkLm1hcChcblx0XHRcdCh7dG8sIGZyb20sIGRlZywgcGllY2VDaGFyLCBlbmR9KT0+YCR7XG5cdFx0XHRcdFBpZWNlLmRlZ0NoYXJzW2RlZ119JHtcblx0XHRcdFx0Z2V0UFgodG8pfSR7XG5cdFx0XHRcdGdldFBZKHRvKX0ke1xuXHRcdFx0XHRwaWVjZUNoYXJ9JHtcblx0XHRcdFx0ZW5kfSAoJHtcblx0XHRcdFx0Z2V0UFgoZnJvbSl9JHtcblx0XHRcdFx0Z2V0UFkoZnJvbSl9KWBcblx0XHQpLmpvaW4oXCJcXG5cIik7XG5cdH1cblxuXHQvKiog55uk44KS5o+P5YaZICovXG5cdGRyYXcoKXtcblx0XHRjb25zdCB7Y3R4LCBjYW52YXMsIGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCwgcGFuZWxXaWR0aCwgcGFuZWxIZWlnaHR9ID0gdGhpcztcblxuXHRcdC8vIOaPj+WGmeOCkuWIneacn+WMllxuXHRcdGN0eC5yZXN0b3JlKCk7XG5cdFx0Y3R4LnNhdmUoKTtcblx0XHRjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cdFx0Y3R4LmZpbGxTdHlsZSA9IHRoaXMuY2FudmFzQmFja2dyb3VuZENvbG9yO1xuXHRcdGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG5cdFx0Ly8g5aSW5p6g44KS5o+P5YaZXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IHRoaXMuYmFja2dyb3VuZENvbG9yO1xuXHRcdGN0eC5saW5lV2lkdGggPSB0aGlzLmJvcmRlcldpZHRoO1xuXHRcdGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuYm9yZGVyQ29sb3I7XG5cblx0XHRjdHguc2F2ZSgpO1xuXHRcdGN0eC50cmFuc2xhdGUobGVmdCwgdG9wKTtcblx0XHRjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5cdFx0Y3R4LnN0cm9rZVJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5cdFx0Y3R4LnRyYW5zbGF0ZShwYW5lbFdpZHRoLzIsIHBhbmVsSGVpZ2h0LzIpO1xuXHRcdGN0eC5zdHJva2VSZWN0KDAsIDAsIHdpZHRoLXBhbmVsV2lkdGgsIGhlaWdodC1wYW5lbEhlaWdodCk7XG5cdFx0Y3R4LnJlc3RvcmUoKTtcblx0XHR0aGlzLnN0YW5kLmRyYXcoKTtcblxuXHRcdC8vIOODnuOCueebruOCkuaPj+WGmVxuXHRcdHRoaXMuZmllbGQuZm9yRWFjaChyb3c9Pntcblx0XHRcdHJvdy5mb3JFYWNoKHBhbmVsPT57XG5cdFx0XHRcdHBhbmVsLmRyYXcoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdGlmKHRoaXMub25EcmF3ZWQpIHRoaXMub25EcmF3ZWQodGhpcyk7XG5cdH1cblxuXHQvKiog6aeS6YWN572u44KS44OG44Kt44K544OI44Gn5Y+W5b6XXG5cdCAqIEBwYXJhbSB7XCJkZWZhdWx0XCJ8XCJjb21wYWN0XCJ8XCJib2RcIn0gaXNDb21wYWN0IC0g44OG44Kt44K544OI5b2i5byPXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRnZXRUZXh0KG1vZGU9XCJkZWZhdWx0XCIpe1xuXHRcdHJldHVybiBtb2RlID09PSBcImJvZFwiP1xuXHRcdFx0Qm9kLmdldFRleHQodGhpcyk6XG5cdFx0XHR0aGlzLnRvU3RyaW5nKG1vZGUgPT09IFwiY29tcGFjdFwiKTtcblx0fVxuXG5cdC8qKiDpp5LphY3nva7jgpLjg4bjgq3jgrnjg4jjgaflj5blvpdcblx0ICogQHBhcmFtIHtib29sZWFufSBpc0NvbXBhY3QgLSDjgrPjg7Pjg5Hjgq/jg4jooajnpLpcblx0ICovXG5cdHRvU3RyaW5nKGlzQ29tcGFjdD1mYWxzZSl7XG5cdFx0Y29uc3Qge3hMZW59ID0gdGhpcztcblxuXHRcdGxldCBoZWFkZXIgPSBcIlwiO1xuXHRcdGxldCBmb290ZXIgPSBcIlwiO1xuXHRcdGxldCBwYW5lbE91dGVyID0gXCJcIjtcblx0XHRsZXQgcGFuZWxTZXAgPSBcIlwiO1xuXHRcdGxldCByb3dTZXAgPSBcIlxcblwiO1xuXG5cdFx0aWYoIWlzQ29tcGFjdCl7XG5cdFx0XHRoZWFkZXIgPSBg4pSPJHtBcnJheSh4TGVuKS5maWxsKFwi4pSB4pSBXCIpLmpvaW4oXCLilK9cIil94pSTXFxuYDtcblx0XHRcdGZvb3RlciA9IGBcXG7ilJcke0FycmF5KHhMZW4pLmZpbGwoXCLilIHilIFcIikuam9pbihcIuKUt1wiKX3ilJtgO1xuXHRcdFx0cGFuZWxPdXRlciA9IFwi4pSDXCI7XG5cdFx0XHRwYW5lbFNlcCA9IFwi4pSCXCI7XG5cdFx0XHRyb3dTZXAgPSBgXFxu4pSgJHtBcnJheSh4TGVuKS5maWxsKFwi4pSA4pSAXCIpLmpvaW4oXCLilLxcIil94pSoXFxuYDtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0aGVhZGVyK1xuXHRcdFx0dGhpcy5maWVsZC5tYXAocm93PT5cblx0XHRcdFx0cGFuZWxPdXRlcitcblx0XHRcdFx0cm93Lm1hcChwYW5lbD0+XG5cdFx0XHRcdFx0XCJcIisocGFuZWwucGllY2UgPz8gcGFuZWwudG9TdHJpbmcoaXNDb21wYWN0KSlcblx0XHRcdFx0KS5qb2luKHBhbmVsU2VwKStcblx0XHRcdFx0cGFuZWxPdXRlclxuXHRcdFx0KS5qb2luKHJvd1NlcCkrXG5cdFx0XHRmb290ZXIrXG5cdFx0XHR0aGlzLnN0YW5kLnRvU3RyaW5nKGlzQ29tcGFjdClcblx0XHQpO1xuXHR9XG5cblx0LyoqIOeUu+WDj+OCkuWPluW+l1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgLSDjg5XjgqHjgqTjg6vlkI1cblx0ICogQHBhcmFtIHtzdHJpbmd9IGV4dCAtIOaLoeW8teWtkFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cblx0ICovXG5cdGFzeW5jIGRvd25sb2FkSW1hZ2UoZmlsZU5hbWUsIGV4dCl7XG5cdFx0YXdhaXQgZG93bmxvYWRJbWFnZSh0aGlzLmNhbnZhcywgZmlsZU5hbWUsIGV4dCk7XG5cdH1cbn1cbiJdLCJuYW1lcyI6WyJiYXNlIiwiaW1wb3J0SnNvbiIsIm5hbWUiLCJ4aHIiLCJjYW52YXNGb250IiwiZ2FtZVNvZnQiLCJnYW1lcyIsImJvYXJkcyIsInBhbmVscyIsInBpZWNlcyIsInBpZWNlUmFuZ2UiLCJwaWVjZUNvc3QiLCJnZXRDaGFycyIsImRpc3BsYXlUZXh0IiwiZGlzcGxheSIsImdvb2dsZVVybCIsImNoYXJzIiwidW5pcXVlIiwibyIsImZvbnROYW1lIiwiZm9udFdlaWdodCIsImZvbnROYW1lUGx1cyIsImZvbnRVcmwiLCJyZXMiLCJtYXRjaFVybHMiLCJ1cmwiLCJmb250RmFjZSIsIl8iLCJsb2FkSW1hZ2UiLCJzcmMiLCJyZXNvbHZlIiwiaW1hZ2UiLCJpbWdTcmNzIiwiaW1nU3JjIiwiY2FudmFzSW1hZ2UiLCJnZXRNaW1lIiwiZXh0IiwiZG93bmxvYWRJbWFnZSIsImNhbnZhcyIsImZpbGVOYW1lIiwidXJsVHlwZSIsIm1pbWUiLCJhIiwiUGFuZWwiLCIjaXNTZWxlY3RlZCIsIiN0YXJnZXRSYW5nZXMiLCJjdHgiLCJjaGFyIiwiY2VudGVyIiwibWlkZGxlIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJXaWR0aCIsInBYIiwicFkiLCJ2YWx1ZSIsInJhbmdlTmFtZSIsImF0dHJOYW1lIiwieCIsInkiLCJzZWxlY3RDb2xvciIsInRhcmdldENvbG9yIiwibGVmdCIsInRvcCIsInRleHRSb3RhdGUiLCJyYWQiLCJmb250U2l6ZSIsImNvbG9yIiwiaXNDb21wYWN0IiwiUGllY2UiLCJvcHRpb24iLCJleFBpZWNlcyIsInBpZWNlIiwicHJvbW9LZXlzIiwia2V5IiwicHJvbW8iLCJpIiwiZXhQaWVjZXNPYmoiLCJhbGlhc0tleSIsImFsaWFzIiwidGV4dCIsImRlZ0NoYXIiLCJwaWVjZUNoYXIiLCJkZWciLCJfXyIsImIiLCJ6b29tIiwiZGlzcGxheVB0biIsInNpemUiLCJ1c2VSYW5rU2l6ZSIsImlzRHJhd1NoYWRvdyIsImlzTW92ZWQiLCJybmciLCJyb3ciLCJlIiwicmFuZ2UiLCJ0cmFuc3Bvc2UiLCJjIiwiciIsImltZ1dpZHRoIiwiaW1nSGVpZ2h0IiwiZ2FtZSIsImZvbnRDb2xvciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwidiIsInJhbmdlT3B0aW9ucyIsImNlbnRlckNoYXJzIiwicG9pbnRDaGFycyIsImxpbmVyQ2hhcnMiLCJnZXRPcmlnaW4iLCJvTGlzdCIsIm93blgiLCJvd25ZIiwiclkiLCJyWCIsInJDaGFyIiwiaXNPd24iLCJjaGVja1RhcmdldCIsImJvYXJkIiwiZmllbGQiLCJ5TGVuIiwiZW5QYXNzYW50IiwiaW5GaWVsZCIsImlzVnNQbyIsInBhbmVsIiwiaXNBdHRhY2tGcm9tUGFvIiwiY2FuTW92ZSIsImlzQXR0YWNrIiwiY2hlY2tSaXZhbERlZyIsImV4aXN0c0NoaWxkIiwiY2hpbGQiLCJvWCIsIm9ZIiwic2V0VGFyZ2V0IiwibW92ZVBvaW50IiwicGFyZW50IiwibW92ZUxpbmVyIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJqbXBzIiwibW92ZXMiLCJpc01vdmVJbmYiLCJqbXBDbnQiLCJtb3ZlQ250IiwiaW5jWCIsImluY1kiLCJfeCIsIl95IiwiaXNKdW1wZWQiLCJyYW5nZU1hcCIsInJhbmdlT3B0aW9uIiwib3JpZ2luIiwidUlDb250cm9sIiwiaXNDbGljayIsImxhc3RYWSIsInNlbGVjdFBhbmVsIiwic2VsZWN0U3RhbmQiLCJmaWVsZFByb2MiLCJmblBhbmVsIiwiZm5BZnRlciIsInZpZXdTdHlsZSIsInJlY3QiLCJkcmFnU3RhcnQiLCJzdG9jayIsImRyYWdNb3ZlIiwiZHJhZ0VuZCIsIkJvZCIsIiNkZWcyUGllY2VDaGFycyIsIiNkZWcyUGllY2VSZWdleGVzIiwiI3BpZWNlQ2hhcjJEZWdzIiwiI2RlZzJTdGFuZFRpdGxlcyIsIiNzdGFuZFRpdGxlMkRlZ3MiLCIja2FuSSIsIiNrYW5YIiwiI251bTJLYW4iLCJudW0iLCJ2aWV3T25lIiwiI2thbjJOdW0iLCJrYW4iLCJlbXB0eU9uZSIsIiNudW0yWmVuIiwiemVuIiwiI3BhbmVsVGV4dCIsIiNnZXRQaWVjZVRleHQiLCIjZ2V0U3RhbmRUZXh0Iiwic3RhbmQiLCJjb3VudGVyIiwiY250IiwiYm9hcmRMaW5lcyIsInN0YW5kTGluZXMiLCJsaW5lIiwidGl0bGUiLCJib2FyZFN0ciIsImJvZENoYXIiLCJzdGFuZFN0ciIsInBhcmFtU3RyIiwicGFyYW0iLCJ4TGVuIiwicGxheWVycyIsImhlYWRlciIsImZvb3RlciIsInBhbmVsT3V0ZXIiLCJwYW5lbFNlcCIsInJvd1NlcCIsInN0YW5kSGVhZGVyIiwic3RhbmRGb290ZXIiLCJTdGFuZCIsIiNkZWdPcmRlciIsInJpZ2h0IiwiYm90dG9tIiwicGFuZWxXaWR0aCIsInBhbmVsSGVpZ2h0IiwidG9QYW5lbCIsIndpbm5lclBpZWNlIiwibG9zZXJQaWVjZSIsImZvcmNlQ2FwdHVyZSIsImZvcmNlQ2FudENhcHR1cmUiLCJwaXRjaFdpZHRoIiwicGl0Y2hIZWlnaHQiLCJwbGF5ZXIiLCJoZWFkIiwiZGVncyIsImdldEluaXQiLCJFblBhc3NhbnQiLCJlcCIsIkJvYXJkIiwicGxheUJvYXJkIiwicGxheVBpZWNlcyIsIm9uRHJhd2VkIiwiZ2FtZU5hbWUiLCJwaWVjZVNldCIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiY2FudmFzRml0IiwiYm9hcmRMZWZ0IiwiYm9hcmRUb3AiLCJwaWVjZVNpemUiLCJ1c2VTdGFuZCIsImF1dG9EcmF3aW5nIiwib25HYW1lT3ZlciIsImZyZWVNb2RlIiwiY2FudmFzRm9udEFzeW5jIiwiY2FudmFzSW1hZ2VBc3luYyIsInN0eWxlIiwiI2RlZ05vcm1hbCIsInBsYXllYUlkT3JEZWciLCJwbGF5ZXJJZCIsInBvcyIsInN0YW5kVGl0bGUiLCJ0ZXh0cyIsInN0YW5kVGV4dHMiLCJvZmZzZXREZWciLCJwcm9tb0xpbmUiLCJmb3JjZVByb21vTGluZSIsImQiLCIjZW1pdEdhbWVPdmVyIiwiZ2FtZUFsaXZlIiwiI3Byb21vRGlhbG9nIiwiZnJvbVBhbmVsIiwiY2FuUHJvbW8iLCJmb3JjZVByb21vIiwiYWZ0ZXJQcm9tbyIsImVuZCIsImdldFBYIiwiZ2V0UFkiLCJ0byIsImZyb20iLCJtb2RlIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxJQUFPO0FBQ2IsU0FBU0MsRUFBV0MsR0FBTTtBQUN6QixRQUFNQyxJQUFNLElBQUk7QUFHaEIsTUFGQUEsRUFBSSxLQUFLLE9BQU8sR0FBR0gsQ0FBSSxHQUFHRSxDQUFJLFNBQVMsRUFBSyxHQUM1Q0MsRUFBSSxLQUFJLEdBQ0xBLEVBQUksV0FBVztBQUNqQixXQUFP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
