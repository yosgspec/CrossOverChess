/** 盤の管理クラス */
export class Stand {
    /** 駒台への角度ごとの表示順
     * @type {number[]}
     */
    static "__#11@#degOrder": number[];
    /**
     * @param {Board} ボード
     */
    constructor(board: any);
    board: any;
    left: number;
    top: any;
    width: number;
    height: any;
    right: number;
    bottom: any;
    pitchWidth: number;
    pitchHeight: any;
    xLen: any;
    yLen: any;
    /** 駒台を初期化にする */
    clear(): void;
    stocks: Map<number, any[]>;
    /** 持ち駒からボード上に配置する
     * @param {Panal} toPanell - 配置先のパネル
     * @param {Object} option - オプション
     * @param {number} option.deg - 角度
     * @param {number} option.i - 配置する持ち駒のインデックス
     */
    releasePiece(toPanel: any, option?: {
        deg: number;
        i: number;
    }): void;
    /** 駒台に追加する
     * @param {Piece} piece - 追加する駒
     */
    add(piece: Piece): void;
    /** 駒を持ち駒にする
     * @param {Piece|null} winnerPiece - 移動する駒
     * @param {Piece} loserPiece - 捕縛される駒
     * @param {boolean} forceCapture - 属性を無視して捕縛する
     * @param {boolean} forceCantCapture - 属性を無視して捕縛しない
     */
    capturePiece(winnerPiece: Piece | null, loserPiece: Piece, forceCapture?: boolean, forceCantCapture?: boolean): void;
    /** 盤を描写 */
    draw(): void;
    /** 文字列形式で取得
     * @param {boolean} isMinimam - 簡易表示
     */
    toString(isMinimam?: boolean): string;
}
import { Piece } from "./piece.js";