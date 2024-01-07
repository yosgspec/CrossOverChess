(async function(){
	await canvasFont.import();
	const canvas = document.getElementById("crossChess");
	const textareaMini = document.getElementById("crossChessTextMini");
	const textarea = document.getElementById("crossChessText");

	function sample(){
		canvas.width = 720;
		canvas.height = 800;
		const ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "#DDEEFF";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	
		boards["sample"] = {...boards["チェス"]}
		boards["sample"].field = [
			"WBW<#>SS",
			"BWB#*#SS",
			"WBW>#<SS",
			"MMMM==]=",
			"=[==MMMM",
			"SS<#>BWB",
			"SS#*#WBW",
			"SS>#<BWB"
		];
		const pieceMap = [
			[
				"・貝・君種根瑪船",
				"包卆・楚士象馭車",
				"炮卒・帥仕相馮俥",
				"・兵・王后聖騎塔",
				"飛歩角玉金銀桂香"
			],
			[
				"貴・率妃と僧騏城",
				"・馬・・・・竜・",
				"公漢將帝皇全圭杏"
			]
		];
		games["sample"] = {};
		games["sample"].position ={};
		for(const i of [8, 9]){
			games["sample"].position[i] = {...pieceMap}
		}

		const size = 70;
		const x0 = 0;
		const y0 = 0;
		const dx = 80;
		const dy = 90;
		Piece.init(ctx, size);

		const board = new Board(canvas, ctx, "sample", x0, y0, dx, dy);
		board.putStartPieces(0, "sample", "0");
		board.putStartPieces(1, "sample", "1");
		board.draw();

		textareaMini.value = board.outputText(true);
		textarea.value = board.outputText();
	}

	function main(){
		canvas.width = 540;
		canvas.height = 620;
		const ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "#DDEEFF";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	
		const size = 55;
		const x0 = 0;
		const y0 = 0;
		const dx = 60;
		const dy = 70;
		Piece.init(ctx, size);
		console.log(pieces);

		const board = new Board(canvas, ctx, "チェス", x0, y0, dx, dy);
		board.putStartPieces(0,"将棋");
		board.putStartPieces(1, "チャンギ", "left");
		board.draw();

		textareaMini.value = board.outputText(true);
		textarea.value = board.outputText();
	}

	function player4(){
		canvas.width = 1050;
		canvas.height = 1050;
		const ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "#DDEEFF";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	
		const size = 55;
		const x0 = 0;
		const y0 = 0;
		const dx = 70;
		const dy = 70;
		Piece.init(ctx, size);
		console.log(Object.values(pieces).sort(v=>v.id));

		const board = new Board(canvas, ctx, "4人用", x0, y0, dx, dy, 4);
		board.putStartPieces(0, "将棋");
		board.putStartPieces(1, "シャンチー");
		board.putStartPieces(2, "チェス");
		board.putStartPieces(3, "マークルック");
		board.putNewPiece("士", 6, 6, 0);
		board.putNewPiece("車", 6, 5, 0);
		board.putNewPiece("卆", 7, 5, 0);
		board.putNewPiece("象", 7, 6, 1);
		board.putNewPiece("包", 8, 6, 1);
		board.putNewPiece("卆", 8, 7, 1);
		board.putNewPiece("馭", 8, 8, 1);
		board.putNewPiece("楚", 7, 7, 2);
		board.putNewPiece("車", 7, 8, 2);
		board.putNewPiece("卆", 6, 8, 2);
		board.putNewPiece("象", 6, 7, 3);
		board.putNewPiece("包", 5, 7, 3);
		board.putNewPiece("卆", 5, 6, 3);
		board.putNewPiece("馭", 5, 5, 3);
		board.draw();
		textareaMini.value = board.outputText(true);
		textarea.value = board.outputText();
	}

	/* メイン処理 */
	(function(){
		//sample();
		//main();
		player4();
	})();
})();
