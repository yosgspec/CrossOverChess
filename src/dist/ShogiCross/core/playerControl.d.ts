/** 操作パネル */
export class PlayerControl {
    /** @typedef {Object} PlayerControl */
    static buttonTexts: string;
    /**
     * @param {Board} board ボード
     * @param {string[]} compList 表示するコントロールの一覧
     */
    constructor(board: Board, compList: string[]);
    board: Board;
    /** 操作パネル要素
     * @type {HTMLDivElement}
     */
    component: HTMLDivElement;
    /** 操作パネルを追加 */
    add(): void;
    /** 操作パネルを破棄 */
    remove(): void;
    #private;
}
import { Board } from "./board.js";
