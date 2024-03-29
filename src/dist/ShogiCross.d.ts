declare class ee {
    /**
     * @typedef {Object} Record - 盤面の記録
     * @prop {Object} from
     * @prop {number} from.pX - 移動元の列
     * @prop {number} from.pY - 移動元の行
     * @prop {Object} to
     * @prop {number} to.pX - 移動先の列
     * @prop {number} to.pY - 移動先の行
     * @prop {number} deg - 駒の角度
     * @prop {string} pieceChar - 駒の一文字表記
     * @prop {string} end - 棋譜表示の末尾に記載する文字
     * @prop {string} fieldText - 駒配置のテキスト
     * @prop {number[][]} fieldMoved - 駒の移動済み判定
     */
    /** ゲームを実行する
     * @param {HTMLCanvasElement}} canvas - Canvas要素
     * @param {BoardInitOption} option - ボードの初期化オプション
     * @returns Board
     */
    static run(e: any, t: any): ee;
    /**
     * @param {HTMLCanvasElement} canvas - Canvas要素
     * @param {BoardInitOption} option - ボードの初期化オプション
     */
    constructor(e: any, t: any);
    name: any;
    variant: any;
    url: any;
    desc: any;
    canvas: any;
    ctx: any;
    pieces: {
        [k: string]: any;
    };
    players: any;
    left: any;
    top: any;
    panelWidth: any;
    panelHeight: any;
    borderWidth: any;
    pieceSize: any;
    canvasBackgroundColor: any;
    field: any;
    xLen: any;
    yLen: any;
    width: number;
    height: number;
    right: any;
    bottom: any;
    stand: Y;
    autoDrawing: any;
    onDrawed: any;
    onGameOver: any;
    gameAlives: Map<number, boolean>;
    freeMode: any;
    record: any[];
    turn: number;
    mouseControl: {
        removeEvent(): void;
    };
    playerControl: any;
    enPassant: fe;
    /** 操作パネルを構築
     * @param {string[]} compList - 表示するコントロールの一覧
     */
    makePlayerControl(e: any): any;
    /** ボードを閉じる */
    close(): void;
    /** 角度を正規化
     * @param {number} playeaIdOrDeg - プレイヤー番号または角度
     * @returns {number}
     */
    degNormal(e: any): number;
    /** 盤面を回転
     * @param {boolean} isRight - 回転方向
     */
    rotate(e?: boolean): void;
    /** 駒の初期配置
     * @param {number} playerId - プレイヤー番号
     * @param {string} gameName - ゲーム名(基準となる駒の配置セット)
     * @param {string} pieceSet - 駒の配置パターン
     */
    putStartPieces(e: any, t: any, a?: string): void;
    /** 駒の配置
     * @param {string} piece - 駒の表現文字
     * @param {number} pX - X方向配置位置(マス目基準)
     * @param {number} pY - Y方向配置位置(マス目基準)
     * @param {number} playeaIdOrDeg - プレイヤー番号または駒の配置角
     * @param {Object} option - オプション
     * @param {number} option.displayPtn - 表示文字列を変更(1〜)
     * @param {boolean} option.isMoved - 初回移動済みか否か
     */
    putNewPiece(e: any, t: any, a: any, s: any, r?: {}): void;
    /** 文字列から駒を配置
     * {string} text - 駒配置を表す文字列
     */
    setTextPieces(e: any): void;
    /** 角度基準のマス目の行を取得する
     * @param {Panel} panel - マス目
     * @param {number} deg - 角度
     * @param {number} offsetDeg - 補正角度
     * @returns {number}
     */
    getRow(e: any, t: any, a: any, s?: number): number;
    /** 角度基準のマス目の列を取得する
     * @param {Panel} panel - マス目
     * @param {number} deg - 角度
     * @param {number} offsetDeg - 補正角度
     * @returns {number}
     */
    getCol(e: any, t: any, a: any, s?: number): number;
    /** プロモーションエリア内であるか判別
     * @param {Panel} panel - マス目
     */
    checkCanPromo(e: any): {
        canPromo: boolean;
        forcePromo: boolean;
    };
    /** 駒を移動
     * @param {Panel} fromPanel - 移動元のマス目
     * @param {Panel} toPanel - 選択中のマス目
     */
    movePiece(e: any, t: any): void;
    /** 棋譜を追記
     * @param {Panel} toPanel - 移動先のマス目
     * @param {Object} option - オプション
     * @param {Panel} option.fromPanel - 移動元のマス目
     * @param {string} option.end - オプション=成|不成|打
     */
    addRecord(e?: {}): void;
    /** 記録の手を戻す */
    undoRecord(): void;
    /** 記録の手を進める */
    redoRecord(): void;
    /** 棋譜をテキストで取得
     * @param {boolean} isNumOnly - 座標を数字で表現
     * @returns {string}
     */
    getTextRecord(e?: boolean): string;
    /** 棋譜データを取得
     * @param {boolean} isEncode - エンコード有無
     * @returns {string}
     */
    getJsonRecord(e?: boolean): string;
    /** 棋譜データを入力
     * @param {string} record - 棋譜データ
     * @param {number} turn - 手数
     */
    setJsonRecord(e: any, t: any): void;
    /** 盤を描写 */
    draw(): void;
    /** 駒配置をテキストで取得
     * @param {"default"|"compact"|"bod"} mode - テキスト形式
     * @param {boolean} isAlias - エイリアス表示
     * @returns {string}
     */
    getTextPieces(e?: string, t?: boolean): string;
    /** 駒配置をテキストで取得
     * @param {boolean} isCompact - コンパクト表示
     * @param {boolean} isAlias - エイリアス表示
     */
    toString(e?: boolean, t?: boolean): string;
    /** 画像を取得
     * @param {string} fileName - ファイル名
     * @param {string} ext - 拡張子
     * @returns {Promise<void>}
     */
    downloadImage(e: any, t: any, a: any): Promise<void>;
    #private;
}
declare class A {
    /** 描写サイズ
     * @type {number}
     */
    static size: number;
    /** 格の違いによって駒の大きさを変更するか
     * @type {boolean}
     */
    static useRankSize: boolean;
    /** 影の描写有無
     * @type {boolean}
     */
    static isDrawShadow: boolean;
    /** テキスト出力時のプレイヤー表示
     * @type {Object<string, string>}
     */
    static degChars: {
        [x: string]: string;
    };
    /** プレイヤー表示から角度を取得
    * @type {Object<string, number>}
     */
    static charDegs: {
        [x: string]: number;
    };
    /** サイズ変更設定値
     * @type {Object<string, number>}
     */
    static rankRatio: {
        [x: string]: number;
    };
    /** 駒データを初期化
     * @param {any} ctx - Canvas描画コンテキスト
     * @param {Piece|PieceInitOption} option - 駒の初期化オプション
     */
    static getPieces(e: any, t?: {}): {
        [k: string]: any;
    };
    /** 文字列から駒を取得
     * @param {Piece|PieceInitOption} piece - 駒
     * @param {string} text - 駒文字列
     */
    static stringToPiece(e: any, t: any): any;
    /** 駒の一覧をリストで取得 */
    static piecesToList(e: any): [string, any][];
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
    constructor(e: any, t: any, a?: {});
    /** 駒の段階別価値を取得 */
    get rank(): "KR" | "SR" | "R" | "UC" | "C";
    /** 駒の角度(deg/rad)
     * @param {number} value
     */
    set deg(e: number);
    get deg(): number;
    rad: any;
    /** 左側の座標 */
    get left(): number;
    /** 上側の座標 */
    get top(): number;
    /** 右側の座標 */
    get right(): number;
    /** 下側の座標 */
    get bottom(): number;
    /** 拡大率を取得
     * @returns {number}
     */
    get zoom(): number;
    ctx: any;
    alias: string[];
    game: any;
    cost: any;
    center: number;
    middle: number;
    isMoved: any;
    isSelected: boolean;
    /** 駒をクローン
     * @returns Piece
     */
    clone(): A;
    /** 駒を表返す */
    turnFront(): void;
    /** プロモーション
     * @param {string} char - 成り先の文字
     */
    promotion(e: any): void;
    char: any;
    /** 属性の存在を確認
     * @param {string} attrName - 属性名
     * @returns {boolean}
     */
    hasAttr(e: any): boolean;
    /** 座標が駒に含まれるか判定
     * @param {number} x - X座標
     * @param {number} y - Y座標
     */
    checkRangeMouse(e: any, t: any): boolean;
    /** 移動範囲を回転して取得 */
    getRange(): any;
    /** 駒/マスクを描写 */
    draw(): Promise<void>;
    /** 駒画像を描写 */
    drawImage(): void;
    /** 駒画像にマスクを描写
     * @param {string} color - カラーエフェクトの色
     */
    drawMaskImage(e: any): void;
    /** 将棋駒の外形パスを作成
     * @param {number} zoom - 駒の拡大率
     */
    makePath(e: any): void;
    /** 駒の影を描写
    * @param {number} zoom - 駒の拡大率
    */
    drawPieceShadow(e: any): void;
    /** 駒を描写 */
    drawPiece(): void;
    /** 駒にマスクを描写
     * @param {string} color - カラーエフェクトの色
     */
    drawMask(e: any): void;
    /** 文字列形式で取得
     * @param {boolean} isAlias - エイリアス表示
     */
    toString(e?: boolean): string;
}
declare const U: {
    将棋: {
        backgroundColor: string;
        borderColor: string;
        field: string[];
    };
    チェス: {
        backgroundColor: string;
        borderColor: string;
        field: string[];
    };
    シャンチー: {
        backgroundColor: string;
        borderColor: string;
        promoLineOffset: number;
        field: string[];
    };
    チャンギ: {
        backgroundColor: string;
        borderColor: string;
        promoLineOffset: number;
        field: string[];
    };
    マークルック: {
        backgroundColor: string;
        borderColor: string;
        field: string[];
    };
    どうぶつしょうぎ: {
        backgroundColor: string;
        borderColor: string;
        promoLineOffset: number;
        field: string[];
    };
    将棋5x5: {
        backgroundColor: string;
        borderColor: string;
        promoLineOffset: number;
        field: string[];
    };
    将棋7x7: {
        backgroundColor: string;
        borderColor: string;
        promoLineOffset: number;
        field: string[];
    };
    将棋10x10: {
        backgroundColor: string;
        borderColor: string;
        field: string[];
    };
    チェス6x6: {
        backgroundColor: string;
        borderColor: string;
        field: string[];
    };
    チェス10x8: {
        backgroundColor: string;
        borderColor: string;
        field: string[];
    };
    チェス10x10: {
        backgroundColor: string;
        borderColor: string;
        promoLineOffset: number;
        field: string[];
    };
    チェス12x8: {
        backgroundColor: string;
        borderColor: string;
        field: string[];
    };
    チェス12x12: {
        backgroundColor: string;
        borderColor: string;
        field: string[];
    };
    ごろごろどうぶつしょうぎ: {
        backgroundColor: string;
        borderColor: string;
        promoLineOffset: number;
        field: string[];
    };
    古将棋8x8: {
        backgroundColor: string;
        borderColor: string;
        field: string[];
    };
    古将棋9x8: {
        backgroundColor: string;
        borderColor: string;
        field: string[];
    };
    古将棋9x9: {
        backgroundColor: string;
        borderColor: string;
        field: string[];
    };
    古将棋10x10: {
        backgroundColor: string;
        borderColor: string;
        promoLineOffset: number;
        field: string[];
    };
    古将棋12x12: {
        backgroundColor: string;
        borderColor: string;
        promoLineOffset: number;
        field: string[];
    };
    古将棋15x15: {
        backgroundColor: string;
        borderColor: string;
        promoLineOffset: number;
        field: string[];
    };
    クレージーハウス: {
        backgroundColor: string;
        borderColor: string;
        field: string[];
    };
    "4\u4EBA\u30C1\u30A7\u30B9": {
        backgroundColor: string;
        borderColor: string;
        promoLineOffset: number;
        field: string[];
    };
    四神将棋: {
        backgroundColor: string;
        borderColor: string;
        sidePromo: boolean;
        field: string[];
    };
    クロス8x8: {
        backgroundColor: string;
        borderColor: string;
        field: string[];
    };
    クロス9x9: {
        backgroundColor: string;
        borderColor: string;
        field: string[];
    };
    クロス11x11: {
        backgroundColor: string;
        borderColor: string;
        field: string[];
    };
    クロス12x12: {
        backgroundColor: string;
        borderColor: string;
        field: string[];
    };
    クロス13x13: {
        backgroundColor: string;
        borderColor: string;
        field: string[];
    };
    "4\u4EBA\u7528\u30AF\u30ED\u30B98\u5217": {
        backgroundColor: string;
        borderColor: string;
        promoLineOffset: number;
        field: string[];
    };
    "4\u4EBA\u7528\u30AF\u30ED\u30B99\u5217": {
        backgroundColor: string;
        borderColor: string;
        promoLineOffset: number;
        field: string[];
    };
    "4\u4EBA\u7528\u30AF\u30ED\u30B99\u52174\u884C": {
        backgroundColor: string;
        borderColor: string;
        promoLineOffset: number;
        field: string[];
    };
};
declare namespace $ {
    let fonts: (string | number)[][];
}
declare namespace G {
    let imported: boolean;
    let images: {
        [x: string]: new (width?: number, height?: number) => HTMLImageElement;
    };
    /** 画像の読み込み
     * @returns {Promise<void>}
     */
    function importAsync(): Promise<void>;
}
declare namespace te {
    namespace shogi {
        let name: string;
        let variant: string;
        let url: string;
        let desc: string;
        let playBoard: string;
        let useStand: boolean;
        let playPieces: {
            gameName: string;
            pieceSet: string;
        }[];
    }
    namespace chess {
        let name_1: string;
        export { name_1 as name };
        let variant_1: string;
        export { variant_1 as variant };
        let url_1: string;
        export { url_1 as url };
        let desc_1: string;
        export { desc_1 as desc };
        let playBoard_1: string;
        export { playBoard_1 as playBoard };
        let useStand_1: boolean;
        export { useStand_1 as useStand };
        let playPieces_1: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_1 as playPieces };
    }
    namespace xiangq {
        let name_2: string;
        export { name_2 as name };
        let variant_2: string;
        export { variant_2 as variant };
        let url_2: string;
        export { url_2 as url };
        let desc_2: string;
        export { desc_2 as desc };
        let playBoard_2: string;
        export { playBoard_2 as playBoard };
        let useStand_2: boolean;
        export { useStand_2 as useStand };
        let playPieces_2: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_2 as playPieces };
    }
    namespace janggi {
        let name_3: string;
        export { name_3 as name };
        let variant_3: string;
        export { variant_3 as variant };
        let url_3: string;
        export { url_3 as url };
        let desc_3: string;
        export { desc_3 as desc };
        let playBoard_3: string;
        export { playBoard_3 as playBoard };
        let useStand_3: boolean;
        export { useStand_3 as useStand };
        let playPieces_3: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_3 as playPieces };
    }
    namespace makruk {
        let name_4: string;
        export { name_4 as name };
        let variant_4: string;
        export { variant_4 as variant };
        let url_4: string;
        export { url_4 as url };
        let desc_4: string;
        export { desc_4 as desc };
        let playBoard_4: string;
        export { playBoard_4 as playBoard };
        let useStand_4: boolean;
        export { useStand_4 as useStand };
        let playPieces_4: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_4 as playPieces };
    }
    namespace chaturanga {
        let name_5: string;
        export { name_5 as name };
        let variant_5: string;
        export { variant_5 as variant };
        let url_5: string;
        export { url_5 as url };
        let desc_5: string;
        export { desc_5 as desc };
        let playBoard_5: string;
        export { playBoard_5 as playBoard };
        let useStand_5: boolean;
        export { useStand_5 as useStand };
        let playPieces_5: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_5 as playPieces };
    }
    namespace dobutsuShogi {
        let name_6: string;
        export { name_6 as name };
        let variant_6: string;
        export { variant_6 as variant };
        let url_6: string;
        export { url_6 as url };
        let desc_6: string;
        export { desc_6 as desc };
        let playBoard_6: string;
        export { playBoard_6 as playBoard };
        let useStand_6: boolean;
        export { useStand_6 as useStand };
        let playPieces_6: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_6 as playPieces };
    }
    namespace toriShogi {
        let name_7: string;
        export { name_7 as name };
        let variant_7: string;
        export { variant_7 as variant };
        let url_7: string;
        export { url_7 as url };
        let desc_7: string;
        export { desc_7 as desc };
        let playBoard_7: string;
        export { playBoard_7 as playBoard };
        let useStand_7: boolean;
        export { useStand_7 as useStand };
        let playPieces_7: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_7 as playPieces };
    }
    namespace chuShogi {
        let name_8: string;
        export { name_8 as name };
        let variant_8: string;
        export { variant_8 as variant };
        let url_8: string;
        export { url_8 as url };
        let desc_8: string;
        export { desc_8 as desc };
        let playBoard_8: string;
        export { playBoard_8 as playBoard };
        let useStand_8: boolean;
        export { useStand_8 as useStand };
        let playPieces_8: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_8 as playPieces };
    }
    namespace grantAcedrex {
        let name_9: string;
        export { name_9 as name };
        let variant_9: string;
        export { variant_9 as variant };
        let url_9: string;
        export { url_9 as url };
        let desc_9: string;
        export { desc_9 as desc };
        let playBoard_9: string;
        export { playBoard_9 as playBoard };
        let useStand_9: boolean;
        export { useStand_9 as useStand };
        let playPieces_9: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_9 as playPieces };
    }
    namespace courierChessAdvanced {
        let name_10: string;
        export { name_10 as name };
        let variant_10: string;
        export { variant_10 as variant };
        let url_10: string;
        export { url_10 as url };
        let desc_10: string;
        export { desc_10 as desc };
        let playBoard_10: string;
        export { playBoard_10 as playBoard };
        let useStand_10: boolean;
        export { useStand_10 as useStand };
        let playPieces_10: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_10 as playPieces };
    }
    namespace gogoShogi {
        let name_11: string;
        export { name_11 as name };
        let variant_11: string;
        export { variant_11 as variant };
        let url_11: string;
        export { url_11 as url };
        let desc_11: string;
        export { desc_11 as desc };
        let playBoard_11: string;
        export { playBoard_11 as playBoard };
        let useStand_11: boolean;
        export { useStand_11 as useStand };
        let playPieces_11: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_11 as playPieces };
    }
    namespace asakuraShogi {
        let name_12: string;
        export { name_12 as name };
        let variant_12: string;
        export { variant_12 as variant };
        let url_12: string;
        export { url_12 as url };
        let desc_12: string;
        export { desc_12 as desc };
        let playBoard_12: string;
        export { playBoard_12 as playBoard };
        let useStand_12: boolean;
        export { useStand_12 as useStand };
        let playPieces_12: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_12 as playPieces };
    }
    namespace shoShogi {
        let name_13: string;
        export { name_13 as name };
        let variant_13: string;
        export { variant_13 as variant };
        let url_13: string;
        export { url_13 as url };
        let desc_13: string;
        export { desc_13 as desc };
        let playBoard_13: string;
        export { playBoard_13 as playBoard };
        let useStand_13: boolean;
        export { useStand_13 as useStand };
        let playPieces_13: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_13 as playPieces };
    }
    namespace heianShogi8x8 {
        let name_14: string;
        export { name_14 as name };
        let variant_14: string;
        export { variant_14 as variant };
        let url_14: string;
        export { url_14 as url };
        let desc_14: string;
        export { desc_14 as desc };
        let playBoard_14: string;
        export { playBoard_14 as playBoard };
        let useStand_14: boolean;
        export { useStand_14 as useStand };
        let playPieces_14: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_14 as playPieces };
    }
    namespace heianShogi9x8 {
        let name_15: string;
        export { name_15 as name };
        let variant_15: string;
        export { variant_15 as variant };
        let url_15: string;
        export { url_15 as url };
        let desc_15: string;
        export { desc_15 as desc };
        let playBoard_15: string;
        export { playBoard_15 as playBoard };
        let useStand_15: boolean;
        export { useStand_15 as useStand };
        let playPieces_15: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_15 as playPieces };
    }
    namespace heianShogi9x9 {
        let name_16: string;
        export { name_16 as name };
        let variant_16: string;
        export { variant_16 as variant };
        let url_16: string;
        export { url_16 as url };
        let desc_16: string;
        export { desc_16 as desc };
        let playBoard_16: string;
        export { playBoard_16 as playBoard };
        let useStand_16: boolean;
        export { useStand_16 as useStand };
        let playPieces_16: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_16 as playPieces };
    }
    namespace kyoShogiLeft {
        let name_17: string;
        export { name_17 as name };
        let variant_17: string;
        export { variant_17 as variant };
        let url_17: string;
        export { url_17 as url };
        let desc_17: string;
        export { desc_17 as desc };
        let playBoard_17: string;
        export { playBoard_17 as playBoard };
        let useStand_17: boolean;
        export { useStand_17 as useStand };
        let playPieces_17: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_17 as playPieces };
    }
    namespace kyoShogiRight {
        let name_18: string;
        export { name_18 as name };
        let variant_18: string;
        export { variant_18 as variant };
        let url_18: string;
        export { url_18 as url };
        let desc_18: string;
        export { desc_18 as desc };
        let playBoard_18: string;
        export { playBoard_18 as playBoard };
        let useStand_18: boolean;
        export { useStand_18 as useStand };
        let playPieces_18: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_18 as playPieces };
    }
    namespace shoKyoShogiLeft {
        let name_19: string;
        export { name_19 as name };
        let variant_19: string;
        export { variant_19 as variant };
        let url_19: string;
        export { url_19 as url };
        let desc_19: string;
        export { desc_19 as desc };
        let playBoard_19: string;
        export { playBoard_19 as playBoard };
        let useStand_19: boolean;
        export { useStand_19 as useStand };
        let playPieces_19: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_19 as playPieces };
    }
    namespace shoKyoShogiRight {
        let name_20: string;
        export { name_20 as name };
        let variant_20: string;
        export { variant_20 as variant };
        let url_20: string;
        export { url_20 as url };
        let desc_20: string;
        export { desc_20 as desc };
        let playBoard_20: string;
        export { playBoard_20 as playBoard };
        let useStand_20: boolean;
        export { useStand_20 as useStand };
        let playPieces_20: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_20 as playPieces };
    }
    namespace sanshaShogiLeft {
        let name_21: string;
        export { name_21 as name };
        let variant_21: string;
        export { variant_21 as variant };
        let url_21: string;
        export { url_21 as url };
        let desc_21: string;
        export { desc_21 as desc };
        let playBoard_21: string;
        export { playBoard_21 as playBoard };
        let useStand_21: boolean;
        export { useStand_21 as useStand };
        let playPieces_21: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_21 as playPieces };
    }
    namespace sanshaShogiRight {
        let name_22: string;
        export { name_22 as name };
        let variant_22: string;
        export { variant_22 as variant };
        let url_22: string;
        export { url_22 as url };
        let desc_22: string;
        export { desc_22 as desc };
        let playBoard_22: string;
        export { playBoard_22 as playBoard };
        let useStand_22: boolean;
        export { useStand_22 as useStand };
        let playPieces_22: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_22 as playPieces };
    }
    namespace doShogiLeft {
        let name_23: string;
        export { name_23 as name };
        let variant_23: string;
        export { variant_23 as variant };
        let url_23: string;
        export { url_23 as url };
        let desc_23: string;
        export { desc_23 as desc };
        let playBoard_23: string;
        export { playBoard_23 as playBoard };
        let useStand_23: boolean;
        export { useStand_23 as useStand };
        let playPieces_23: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_23 as playPieces };
    }
    namespace doShogiRight {
        let name_24: string;
        export { name_24 as name };
        let variant_24: string;
        export { variant_24 as variant };
        let url_24: string;
        export { url_24 as url };
        let desc_24: string;
        export { desc_24 as desc };
        let playBoard_24: string;
        export { playBoard_24 as playBoard };
        let useStand_24: boolean;
        export { useStand_24 as useStand };
        let playPieces_24: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_24 as playPieces };
    }
    namespace kinshiShogiLeft {
        let name_25: string;
        export { name_25 as name };
        let variant_25: string;
        export { variant_25 as variant };
        let url_25: string;
        export { url_25 as url };
        let desc_25: string;
        export { desc_25 as desc };
        let playBoard_25: string;
        export { playBoard_25 as playBoard };
        let useStand_25: boolean;
        export { useStand_25 as useStand };
        let playPieces_25: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_25 as playPieces };
    }
    namespace kinshiShogiRight {
        let name_26: string;
        export { name_26 as name };
        let variant_26: string;
        export { variant_26 as variant };
        let url_26: string;
        export { url_26 as url };
        let desc_26: string;
        export { desc_26 as desc };
        let playBoard_26: string;
        export { playBoard_26 as playBoard };
        let useStand_26: boolean;
        export { useStand_26 as useStand };
        let playPieces_26: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_26 as playPieces };
    }
    namespace kintoShogiLeft {
        let name_27: string;
        export { name_27 as name };
        let variant_27: string;
        export { variant_27 as variant };
        let url_27: string;
        export { url_27 as url };
        let desc_27: string;
        export { desc_27 as desc };
        let playBoard_27: string;
        export { playBoard_27 as playBoard };
        let useStand_27: boolean;
        export { useStand_27 as useStand };
        let playPieces_27: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_27 as playPieces };
    }
    namespace kintoShogiRight {
        let name_28: string;
        export { name_28 as name };
        let variant_28: string;
        export { variant_28 as variant };
        let url_28: string;
        export { url_28 as url };
        let desc_28: string;
        export { desc_28 as desc };
        let playBoard_28: string;
        export { playBoard_28 as playBoard };
        let useStand_28: boolean;
        export { useStand_28 as useStand };
        let playPieces_28: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_28 as playPieces };
    }
    namespace shogi30AllLeft {
        let name_29: string;
        export { name_29 as name };
        let variant_29: string;
        export { variant_29 as variant };
        let url_29: string;
        export { url_29 as url };
        let desc_29: string;
        export { desc_29 as desc };
        let playBoard_29: string;
        export { playBoard_29 as playBoard };
        let useStand_29: boolean;
        export { useStand_29 as useStand };
        let playPieces_29: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_29 as playPieces };
    }
    namespace shogi30AllRight {
        let name_30: string;
        export { name_30 as name };
        let variant_30: string;
        export { variant_30 as variant };
        let url_30: string;
        export { url_30 as url };
        let desc_30: string;
        export { desc_30 as desc };
        let playBoard_30: string;
        export { playBoard_30 as playBoard };
        let useStand_30: boolean;
        export { useStand_30 as useStand };
        let playPieces_30: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_30 as playPieces };
    }
    namespace okisakiShogi {
        let name_31: string;
        export { name_31 as name };
        let variant_31: string;
        export { variant_31 as variant };
        let url_31: string;
        export { url_31 as url };
        let desc_31: string;
        export { desc_31 as desc };
        let playBoard_31: string;
        export { playBoard_31 as playBoard };
        let useStand_31: boolean;
        export { useStand_31 as useStand };
        let playPieces_31: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_31 as playPieces };
    }
    namespace crazyHouse {
        let name_32: string;
        export { name_32 as name };
        let variant_32: string;
        export { variant_32 as variant };
        let url_32: string;
        export { url_32 as url };
        let desc_32: string;
        export { desc_32 as desc };
        let playBoard_32: string;
        export { playBoard_32 as playBoard };
        let useStand_32: boolean;
        export { useStand_32 as useStand };
        let playPieces_32: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_32 as playPieces };
    }
    namespace losAlamosChess {
        let name_33: string;
        export { name_33 as name };
        let variant_33: string;
        export { variant_33 as variant };
        let url_33: string;
        export { url_33 as url };
        let desc_33: string;
        export { desc_33 as desc };
        let playBoard_33: string;
        export { playBoard_33 as playBoard };
        let useStand_33: boolean;
        export { useStand_33 as useStand };
        let playPieces_33: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_33 as playPieces };
    }
    namespace capablancaChess {
        let name_34: string;
        export { name_34 as name };
        let variant_34: string;
        export { variant_34 as variant };
        let url_34: string;
        export { url_34 as url };
        let desc_34: string;
        export { desc_34 as desc };
        let playBoard_34: string;
        export { playBoard_34 as playBoard };
        let useStand_34: boolean;
        export { useStand_34 as useStand };
        let playPieces_34: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_34 as playPieces };
    }
    namespace grandChess {
        let name_35: string;
        export { name_35 as name };
        let variant_35: string;
        export { variant_35 as variant };
        let url_35: string;
        export { url_35 as url };
        let desc_35: string;
        export { desc_35 as desc };
        let playBoard_35: string;
        export { playBoard_35 as playBoard };
        let useStand_35: boolean;
        export { useStand_35 as useStand };
        let playPieces_35: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_35 as playPieces };
    }
    namespace gorogoroDobutsuShogi {
        let name_36: string;
        export { name_36 as name };
        let variant_36: string;
        export { variant_36 as variant };
        let url_36: string;
        export { url_36 as url };
        let desc_36: string;
        export { desc_36 as desc };
        let playBoard_36: string;
        export { playBoard_36 as playBoard };
        let useStand_36: boolean;
        export { useStand_36 as useStand };
        let playPieces_36: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_36 as playPieces };
    }
    namespace shishiShogi {
        let name_37: string;
        export { name_37 as name };
        let variant_37: string;
        export { variant_37 as variant };
        let url_37: string;
        export { url_37 as url };
        let desc_37: string;
        export { desc_37 as desc };
        let playBoard_37: string;
        export { playBoard_37 as playBoard };
        let useStand_37: boolean;
        export { useStand_37 as useStand };
        let playPieces_37: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_37 as playPieces };
    }
    namespace heiseiShogi {
        let name_38: string;
        export { name_38 as name };
        let variant_38: string;
        export { variant_38 as variant };
        let url_38: string;
        export { url_38 as url };
        let desc_38: string;
        export { desc_38 as desc };
        let playBoard_38: string;
        export { playBoard_38 as playBoard };
        let useStand_38: boolean;
        export { useStand_38 as useStand };
        let playPieces_38: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_38 as playPieces };
    }
    namespace daiShogi {
        let name_39: string;
        export { name_39 as name };
        let variant_39: string;
        export { variant_39 as variant };
        let url_39: string;
        export { url_39 as url };
        let desc_39: string;
        export { desc_39 as desc };
        let playBoard_39: string;
        export { playBoard_39 as playBoard };
        let useStand_39: boolean;
        export { useStand_39 as useStand };
        let playPieces_39: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_39 as playPieces };
    }
    namespace courierChess {
        let name_40: string;
        export { name_40 as name };
        let variant_40: string;
        export { variant_40 as variant };
        let url_40: string;
        export { url_40 as url };
        let desc_40: string;
        export { desc_40 as desc };
        let playBoard_40: string;
        export { playBoard_40 as playBoard };
        let useStand_40: boolean;
        export { useStand_40 as useStand };
        let playPieces_40: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_40 as playPieces };
    }
    namespace p4Shogi {
        let name_41: string;
        export { name_41 as name };
        let variant_41: string;
        export { variant_41 as variant };
        let url_41: string;
        export { url_41 as url };
        let desc_41: string;
        export { desc_41 as desc };
        let playBoard_41: string;
        export { playBoard_41 as playBoard };
        let useStand_41: boolean;
        export { useStand_41 as useStand };
        let playPieces_41: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_41 as playPieces };
    }
    namespace p4Chess {
        let name_42: string;
        export { name_42 as name };
        let variant_42: string;
        export { variant_42 as variant };
        let url_42: string;
        export { url_42 as url };
        let desc_42: string;
        export { desc_42 as desc };
        let playBoard_42: string;
        export { playBoard_42 as playBoard };
        let useStand_42: boolean;
        export { useStand_42 as useStand };
        let playPieces_42: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_42 as playPieces };
    }
    namespace g4Shogi {
        let name_43: string;
        export { name_43 as name };
        let variant_43: string;
        export { variant_43 as variant };
        let url_43: string;
        export { url_43 as url };
        let desc_43: string;
        export { desc_43 as desc };
        let playBoard_43: string;
        export { playBoard_43 as playBoard };
        let useStand_43: boolean;
        export { useStand_43 as useStand };
        let playPieces_43: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_43 as playPieces };
    }
    namespace chaturaji {
        let name_44: string;
        export { name_44 as name };
        let variant_44: string;
        export { variant_44 as variant };
        let url_44: string;
        export { url_44 as url };
        let desc_44: string;
        export { desc_44 as desc };
        let playBoard_44: string;
        export { playBoard_44 as playBoard };
        let useStand_44: boolean;
        export { useStand_44 as useStand };
        let playPieces_44: {
            gameName: string;
            pieceSet: string;
        }[];
        export { playPieces_44 as playPieces };
    }
}
declare namespace K {
    namespace 将棋 {
        let english: string;
        let fontColor: string;
        let backgroundColor: string;
        let promoLine: number;
        let position: {
            5: {
                default: string[];
                "2p": string[];
            };
            7: {
                禽将棋: string[];
            };
            8: {
                default: string[];
                "2p": string[];
                平安将棋: string[];
            };
            9: {
                default: string[];
                "2p": string[];
                "\u5C0F\u4EAC\u5C06\u68CB(\u5DE6\u7F6E\u63DB)": string[];
                "\u5C0F\u4EAC\u5C06\u68CB(\u5DE6\u7F6E\u63DB)2p": string[];
                "\u5C0F\u4EAC\u5C06\u68CB(\u53F3\u7F6E\u63DB)": string[];
                "\u5C0F\u4EAC\u5C06\u68CB(\u53F3\u7F6E\u63DB)2p": string[];
                "\u5C71\u8ECA\u5C06\u68CB(\u5DE6\u7F6E\u63DB)": string[];
                "\u5C71\u8ECA\u5C06\u68CB(\u5DE6\u7F6E\u63DB)2p": string[];
                "\u5C71\u8ECA\u5C06\u68CB(\u53F3\u7F6E\u63DB)": string[];
                "\u5C71\u8ECA\u5C06\u68CB(\u53F3\u7F6E\u63DB)2p": string[];
                "\u9285\u5C06\u68CB(\u5DE6\u7F6E\u63DB)": string[];
                "\u9285\u5C06\u68CB(\u5DE6\u7F6E\u63DB)2p": string[];
                "\u9285\u5C06\u68CB(\u53F3\u7F6E\u63DB)": string[];
                "\u9285\u5C06\u68CB(\u53F3\u7F6E\u63DB)2p": string[];
                "\u91D1\u7FC5\u5C06\u68CB(\u5DE6\u7F6E\u63DB)": string[];
                "\u91D1\u7FC5\u5C06\u68CB(\u5DE6\u7F6E\u63DB)2p": string[];
                "\u91D1\u7FC5\u5C06\u68CB(\u53F3\u7F6E\u63DB)": string[];
                "\u91D1\u7FC5\u5C06\u68CB(\u53F3\u7F6E\u63DB)2p": string[];
                "\u91D1\u6597\u5C06\u68CB(\u5DE6\u7F6E\u63DB)": string[];
                "\u91D1\u6597\u5C06\u68CB(\u5DE6\u7F6E\u63DB)2p": string[];
                "\u91D1\u6597\u5C06\u68CB(\u53F3\u7F6E\u63DB)": string[];
                "\u91D1\u6597\u5C06\u68CB(\u53F3\u7F6E\u63DB)2p": string[];
                "\u5C06\u68CB30++(\u5DE6\u7CFB\u30D5\u30EB\u7F6E\u63DB)": string[];
                "\u5C06\u68CB30++(\u5DE6\u7CFB\u30D5\u30EB\u7F6E\u63DB)2p": string[];
                "\u5C06\u68CB30++(\u53F3\u7CFB\u30D5\u30EB\u7F6E\u63DB)": string[];
                "\u5C06\u68CB30++(\u53F3\u7CFB\u30D5\u30EB\u7F6E\u63DB)2p": string[];
                小将棋: string[];
                小将棋2p: string[];
                獅子将棋: string[];
                獅子将棋2p: string[];
                禽将棋: string[];
                p4: string[];
                平安将棋: string[];
            };
            10: {
                "\u4EAC\u5C06\u68CB(\u5DE6\u4EAC\u914D\u7F6E)": string[];
                "\u4EAC\u5C06\u68CB(\u5DE6\u4EAC\u914D\u7F6E)2p": string[];
                "\u4EAC\u5C06\u68CB(\u53F3\u4EAC\u914D\u7F6E)": string[];
                "\u4EAC\u5C06\u68CB(\u53F3\u4EAC\u914D\u7F6E)2p": string[];
                平成将棋: string[];
                平成将棋2p: string[];
                御妃将棋: string[];
                御妃将棋2p: string[];
            };
            12: {
                中将棋: string[];
                中将棋2p: string[];
            };
            14: {
                p4: string[];
            };
            15: {
                p4: string[];
                大将棋: string[];
                大将棋2p: string[];
            };
            17: {
                p4: string[];
            };
        };
    }
    namespace チェス {
        let english_1: string;
        export { english_1 as english };
        let fontColor_1: string;
        export { fontColor_1 as fontColor };
        let backgroundColor_1: string;
        export { backgroundColor_1 as backgroundColor };
        let promoLine_1: number;
        export { promoLine_1 as promoLine };
        let position_1: {
            6: {
                default: string[];
                "2p": string[];
            };
            8: {
                default: string[];
                "2p": string[];
            };
            9: {
                default: string[];
                "2p": string[];
            };
            10: {
                カパブランカチェス: string[];
                カパブランカチェス2p: string[];
                グランドチェス: string[];
                グランドチェス2p: string[];
            };
            12: {
                GrantAcedrex: string[];
                GrantAcedrex2p: string[];
                "\u30AF\u30FC\u30EA\u30A8\u30C1\u30A7\u30B9(\u521D\u671F\u914D\u7F6E)": string[];
                "\u30AF\u30FC\u30EA\u30A8\u30C1\u30A7\u30B9(\u521D\u671F\u914D\u7F6E)2p": string[];
                "\u30AF\u30FC\u30EA\u30A8\u30C1\u30A7\u30B9(\u5B9A\u5F62\u914D\u7F6E)": string[];
                "\u30AF\u30FC\u30EA\u30A8\u30C1\u30A7\u30B9(\u5B9A\u5F62\u914D\u7F6E)2p": string[];
            };
            14: {
                p4: string[];
            };
            15: {
                p4: string[];
            };
            17: {
                p4: string[];
            };
        };
        export { position_1 as position };
    }
    namespace シャンチー {
        let english_2: string;
        export { english_2 as english };
        let fontColor_2: string;
        export { fontColor_2 as fontColor };
        let backgroundColor_2: string;
        export { backgroundColor_2 as backgroundColor };
        let promoLine_2: number;
        export { promoLine_2 as promoLine };
        let position_2: {
            8: {
                default: string[];
                "2p": string[];
            };
            9: {
                default: string[];
                "2p": string[];
            };
            14: {
                p4: string[];
            };
            15: {
                p4: string[];
            };
            17: {
                p4: string[];
            };
        };
        export { position_2 as position };
    }
    namespace チャンギ {
        let english_3: string;
        export { english_3 as english };
        let fontColor_3: string;
        export { fontColor_3 as fontColor };
        let backgroundColor_3: string;
        export { backgroundColor_3 as backgroundColor };
        let position_3: {
            8: {
                default: string[];
                "2p": string[];
                左象配置: string[];
                左象配置2p: string[];
                右象配置: string[];
                右象配置2p: string[];
                外象配置: string[];
                外象配置2p: string[];
            };
            9: {
                default: string[];
                "2p": string[];
                左象配置: string[];
                左象配置2p: string[];
                右象配置: string[];
                右象配置2p: string[];
                外象配置: string[];
                外象配置2p: string[];
            };
            14: {
                p4: string[];
            };
            15: {
                p4: string[];
            };
            17: {
                p4: string[];
            };
        };
        export { position_3 as position };
    }
    namespace マークルック {
        let english_4: string;
        export { english_4 as english };
        let fontColor_4: string;
        export { fontColor_4 as fontColor };
        let backgroundColor_4: string;
        export { backgroundColor_4 as backgroundColor };
        let promoLine_3: number;
        export { promoLine_3 as promoLine };
        let position_4: {
            8: {
                default: string[];
                "2p": string[];
            };
            9: {
                default: string[];
                "2p": string[];
            };
            14: {
                p4: string[];
            };
            15: {
                p4: string[];
            };
            17: {
                p4: string[];
            };
        };
        export { position_4 as position };
    }
    namespace チャトランガ {
        let english_5: string;
        export { english_5 as english };
        let fontColor_5: string;
        export { fontColor_5 as fontColor };
        let backgroundColor_5: string;
        export { backgroundColor_5 as backgroundColor };
        let promoLine_4: number;
        export { promoLine_4 as promoLine };
        let position_5: {
            8: {
                default: string[];
                "2p": string[];
                p4: string[];
            };
            9: {
                default: string[];
                "2p": string[];
            };
            14: {
                p4: string[];
            };
            15: {
                p4: string[];
            };
            17: {
                p4: string[];
            };
        };
        export { position_5 as position };
    }
    namespace どうぶつしょうぎ {
        let english_6: string;
        export { english_6 as english };
        let fontColor_6: string;
        export { fontColor_6 as fontColor };
        let backgroundColor_6: string;
        export { backgroundColor_6 as backgroundColor };
        let promoLine_5: number;
        export { promoLine_5 as promoLine };
        let position_6: {
            3: {
                default: string[];
            };
            5: {
                default: string[];
            };
        };
        export { position_6 as position };
    }
}
declare class Y {
    /** 駒台への角度ごとの表示順
     * @type {number[]}
     */
    static "__#7@#e": number[];
    /**
     * @param {Board} ボード
     */
    constructor(e: any);
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
    releasePiece(e: any, t?: {}): void;
    /** 駒台に追加する
     * @param {Piece} piece - 追加する駒
     */
    add(e: any): void;
    /** 駒を持ち駒にする
     * @param {Piece|null} winnerPiece - 移動する駒
     * @param {Piece} loserPiece - 捕縛される駒
     * @param {boolean} forceCapture - 属性を無視して捕縛する
     * @param {boolean} forceCantCapture - 属性を無視して捕縛しない
     */
    capturePiece(e: any, t: any, a?: boolean, s?: boolean): void;
    /** 持ち駒の所有権を回転
     * @param {number} deg - 回転角 (90の倍数)
     */
    rotate(e: any): void;
    /** 盤を描写 */
    draw(): void;
    /** 駒台をテキスト形式で取得
     * @param {boolean} isCompact - コンパクト表示
     * @param {boolean} isAlias - エイリアス表示
     */
    toString(e?: boolean, t?: boolean): string;
}
declare class fe {
    degs: {};
    /** アンパッサン情報をクリア
     * @param {number} deg - アンパッサンされうる陣営の角度
     */
    clear(e: any): void;
    /** アンパッサン対象と成りうるマス情報を記録
     * @param {Panel} panel - アンパッサン対象と成りうるマス目
     * @param {Piece} piece - アンパッサン対象と成りうる駒
     */
    setTarget(e: any, t: any): void;
    /** アンパッサン対象と成りうる駒情報を記録
     * @param {Panel} toPanel - アンパッサン対象か確認するマス目
     */
    setMoved(e: any): void;
    /** アンパッサン対象のマスか確認する
     * @param {Panel} panel - アンパッサン対象と成りうるマス目
     * @param {Piece} piece - アンパッサン対象と成りうる駒
     * @returns {boolean}
     */
    isTarget(e: any, t: any): boolean;
}
export { ee as Board, A as Piece, U as boards, $ as canvasFont, G as canvasImage, te as gameSoft, K as games };
