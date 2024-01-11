const pieces = {
	"歩": {
		"name": "歩兵",
		"display": ["歩兵"],
		"gameName": "将棋",
		"group": "兵",
		"attr": ["capture"],
		"range": {
			"default": [
				".......",
				".......",
				"...A...",
				"...0...",
				".......",
				".......",
				"......."
			]
		},
		"promo": {
			"と": {
				"name": "と金",
				"display": ["と", "个"],
				"alias": ["个"],
				"range": {
					"default": [
						".......",
						".......",
						"..AAA..",
						"..A0A..",
						"...A...",
						".......",
						"......."
					]
				}
			}
		}
	},
	"香": {
		"name": "香車",
		"display": ["香車"],
		"gameName": "将棋",
		"group": "車",
		"attr": ["capture"],
		"range": {
			"default": [
				".......",
				".......",
				"...8...",
				"...0...",
				".......",
				".......",
				"......."
			]
		},
		"promo": {
			"杏": {
				"name": "成香",
				"display": ["仝", "仝", "杏"],
				"alias": ["仝"],
				"range": {
					"default": [
						".......",
						".......",
						"..AAA..",
						"..A0A..",
						"...A...",
						".......",
						"......."
					]
				}
			}
		}
	},
	"桂": {
		"name": "桂馬",
		"display": ["桂馬"],
		"gameName": "将棋",
		"group": "馬",
		"attr": ["capture"],
		"range": {
			"default": [
				".......",
				"..A.A..",
				".......",
				"...0...",
				".......",
				".......",
				"......."
			]
		},
		"promo": {
			"圭": {
				"name": "成桂",
				"display": ["今", "今", "圭"],
				"alias": ["今"],
				"range": {
					"default": [
						".......",
						".......",
						"..AAA..",
						"..A0A..",
						"...A...",
						".......",
						"......."
					]
				}
			}
		}
	},
	"銀": {
		"name": "銀将",
		"display": ["銀将", "銀將"],
		"gameName": "将棋",
		"group": "象",
		"attr": ["capture"],
		"range": {
			"default": [
				".......",
				".......",
				"..AAA..",
				"...0...",
				"..A.A..",
				".......",
				"......."
			]
		},
		"promo": {
			"全": {
				"name": "成銀",
				"display": ["全"],
				"range": {
					"default": [
						".......",
						".......",
						"..AAA..",
						"..A0A..",
						"...A...",
						".......",
						"......."
					]
				}
			}
		}
	},
	"金": {
		"name": "金将",
		"display": ["金将", "金將"],
		"gameName": "将棋",
		"group": "将",
		"attr": ["capture"],
		"range": {
			"default": [
				".......",
				".......",
				"..AAA..",
				"..A0A..",
				"...A...",
				".......",
				"......."
			]
		}
	},
	"角": {
		"name": "角行",
		"display": ["角行"],
		"gameName": "将棋",
		"group": "象",
		"attr": ["capture"],
		"range": {
			"default": [
				".......",
				".......",
				"..7.9..",
				"...0...",
				"..1.3..",
				".......",
				"......."
			]
		},
		"promo": {
			"馬": {
				"name": "龍馬",
				"display": ["龍馬", "竜馬"],
				"range": {
					"default": [
						".......",
						".......",
						"..7A9..",
						"..A0A..",
						"..1A3..",
						".......",
						"......."
					]
				}
			}
		}
	},
	"飛": {
		"name": "飛車",
		"display": ["飛車"],
		"gameName": "将棋",
		"group": "車",
		"attr": ["capture"],
		"range": {
			"default": [
				".......",
				".......",
				"...8...",
				"..406..",
				"...2...",
				".......",
				"......."
			]
		},
		"promo": {
			"竜": {
				"name": "龍王",
				"display": ["龍王", "龍王", "竜王"],
				"alias": ["龍"],
				"range": {
					"default": [
						".......",
						".......",
						"..A8A..",
						"..406..",
						"..A2A..",
						".......",
						"......."
					]
				}
			}
		}
	},
	"玉": {
		"name": "玉将",
		"display": ["玉將", "王將", "玉将", "王将"],
		"alias": ["皇"],
		"gameName": "将棋",
		"group": "王",
		"attr": ["capture"],
		"range": {
			"default": [
				".......",
				".......",
				"..AAA..",
				"..A0A..",
				"..AAA..",
				".......",
				"......."
			]
		}
	},
	"兵": {
		"name": "ポーン",
		"display": ["♟兵", "♙兵"],
		"gameName": "チェス",
		"group": "兵",
		"attr": ["enPassant"],
		"range": {
			"default": [
				".......",
				".......",
				"...A...",
				"...0...",
				".......",
				".......",
				"......."
			],
			"start": [
				".......",
				"...A...",
				"...a...",
				"...0...",
				".......",
				".......",
				"......."
			],
			"attack": [
				".......",
				".......",
				"..A.A..",
				"...0...",
				".......",
				".......",
				"......."
			]
		},
		"promo": {
			"妃": {
				"name": "Pクイーン",
				"display": ["♕妃", "♛妃"],
				"range": {
					"default": [
						".......",
						".......",
						"..789..",
						"..406..",
						"..123..",
						".......",
						"......."
					]
				}
			},
			"騏": {
				"name": "Pナイト",
				"display": ["♘騏", "♞騏"],
				"range": {
					"default": [
						".......",
						"..A.A..",
						".A...A.",
						"...0...",
						".A...A.",
						"..A.A..",
						"......."
					]
				}
			},
			"城": {
				"name": "Pルーク",
				"display": ["♖城", "♜城"],
				"range": {
					"default": [
						".......",
						".......",
						"...8...",
						"..406..",
						"...2...",
						".......",
						"......."
					]
				}
			},
			"僧": {
				"name": "Pビショップ",
				"display": ["♗僧", "♝僧"],
				"range": {
					"default": [
						".......",
						".......",
						"..7.9..",
						"...0...",
						"..1.3..",
						".......",
						"......."
					]
				}
			}
		}
	},
	"騎": {
		"name": "ナイト",
		"display": ["♞騎", "♘騎"],
		"gameName": "チェス",
		"group": "馬",
		"range": {
			"default": [
				".......",
				"..A.A..",
				".A...A.",
				"...0...",
				".A...A.",
				"..A.A..",
				"......."
			]
		}
	},
	"聖": {
		"name": "ビショップ",
		"display": ["♝聖", "♗聖"],
		"gameName": "チェス",
		"group": "象",
		"range": {
			"default": [
				".......",
				".......",
				"..7.9..",
				"...0...",
				"..1.3..",
				".......",
				"......."
			]
		}
	},
	"塔": {
		"name": "ルーク",
		"display": ["♜塔", "♖塔"],
		"gameName": "チェス",
		"group": "車",
		"attr": ["castlingRook"],
		"range": {
			"default": [
				".......",
				".......",
				"...8...",
				"..406..",
				"...2...",
				".......",
				"......."
			]
		}
	},
	"后": {
		"name": "クイーン",
		"display": ["♛后", "♕后"],
		"gameName": "チェス",
		"group": "将",
		"range": {
			"default": [
				".......",
				".......",
				"..789..",
				"..406..",
				"..123..",
				".......",
				"......."
			]
		}
	},
	"王": {
		"name": "キング",
		"display": ["♚王", "♔王"],
		"alias": ["帝"],
		"gameName": "チェス",
		"group": "王",
		"attr": ["castlingKing"],
		"range": {
			"default": [
				".......",
				".......",
				"..AAA..",
				"..A0A..",
				"..AAA..",
				".......",
				"......."
			]
		}
	},
	"卒": {
		"name": "卒【象棋】",
		"display": ["○卒", "○兵", "卒", "兵"],
		"gameName": "シャンチー",
		"group": "兵",
		"range": {
			"default": [
				".......",
				".......",
				"...A...",
				"...0...",
				".......",
				".......",
				"......."
			]
		},
		"promo": {
			"率": {
				"name": "成卒",
				"display": ["⊖率", "⊖卒", "⊖兵", "率", "卒", "兵"],
				"range": {
					"default": [
						".......",
						".......",
						"...A...",
						"..A0A..",
						".......",
						".......",
						"......."
					]
				}
			}
		}
	},
	"炮": {
		"name": "炮",
		"display": ["○炮", "○砲", "炮", "砲"],
		"alias": ["砲"],
		"gameName": "シャンチー",
		"group": "車",
		"range": {
			"default": [
				".......",
				".......",
				"...8...",
				"..406..",
				"...2...",
				".......",
				"......."
			],
			"attack": [
				".......",
				".......",
				"...W...",
				"..Z0X..",
				"...Y...",
				"......",
				"......."
			]
		}
	},
	"馮": {
		"name": "傌",
		"display": ["○傌", "○傌", "○馬", "傌", "馬"],
		"alias": ["傌"],
		"gameName": "シャンチー",
		"group": "馬",
		"range": {
			"default": [
				".......",
				"..A.A..",
				".D.a.B.",
				"..d0b.",
				".D.c.B.",
				"..C.C..",
				"......."
			]
		}
	},
	"相": {
		"name": "相",
		"display": ["○相", "○象", "相", "象"],
		"gameName": "シャンチー",
		"group": "象",
		"range": {
			"default": [
				".......",
				".A...B.",
				"..a.b..",
				"...0...",
				"..d.c..",
				".D...C.",
				"......."
			]
		}
	},
	"俥": {
		"name": "俥",
		"display": ["○俥", "○車", "俥", "車"],
		"gameName": "シャンチー",
		"group": "車",
		"range": {
			"default": [
				".......",
				".......",
				"...8...",
				"..406..",
				"...2...",
				".......",
				"......."
			]
		}
	},
	"仕": {
		"name": "仕",
		"display": ["○仕", "○士", "仕", "士"],
		"gameName": "シャンチー",
		"group": "将",
		"attr": ["inPalace"],
		"range": {
			"default": [
				".......",
				".......",
				".......",
				"...0...",
				".......",
				".......",
				"......."
			],
			"palaceRight": [
				".......",
				".......",
				"....A..",
				"...0...",
				"..A....",
				".......",
				"......."
			],
			"palaceLeft": [
				".......",
				".......",
				"..A....",
				"...0...",
				"....A..",
				".......",
				"......."
			]
		}
	},
	"帥": {
		"name": "帥",
		"display": ["⊕帥", "⊕將", "帥", "將"],
		"alias": ["將"],
		"gameName": "シャンチー",
		"group": "王",
		"attr": ["inPalace"],
		"range": {
			"default": [
				".......",
				".......",
				"...A...",
				"..A0A..",
				"...A...",
				".......",
				"......."
			]
		}
	},
	"卆": {
		"name": "卒【將棋】",
		"display": ["⬡卆", "⬡卒", "卆", "卒"],
		"gameName": "チャンギ",
		"group": "兵",
		"range": {
			"default": [
				".......",
				".......",
				"...A...",
				"..A0A..",
				".......",
				".......",
				"......."
			]
		}
	},
	"包": {
		"name": "包",
		"display": ["⬡包", "包"],
		"gameName": "チャンギ",
		"group": "車",
		"range": {
			"default": [
				".......",
				".......",
				"...W...",
				"..Z0X..",
				"...Y...",
				"......",
				"......."
			]
		}
	},
	"馭": {
		"name": "馬",
		"display": ["⬡马", "⬡马", "⬡馭", "⬡馬", "马", "馭", "馬"], 
		"alias": ["马"],
		"gameName": "チャンギ",
		"group": "馬",
		"range": {
			"default": [
				".......",
				"..A.A..",
				".D.a.B.",
				"..d0b.",
				".D.c.B.",
				"..C.C..",
				"......."
			]
		}
	},
	"象": {
		"name": "象",
		"display": ["⬡象", "象"],
		"gameName": "チャンギ",
		"group": "象",
		"range": {
			"default": [
				".E...F.",
				"L.e.f.G",
				".l.a.g.",
				"..d0b..",
				".k.c.h.",
				"K.j.i.H",
				".J...I."
			]
		}
	},
	"車": {
		"name": "車",
		"display": ["⬡车", "⬡车", "⬡車", "车", "車"],
		"alias": ["车"],
		"gameName": "チャンギ",
		"group": "車",
		"range": {
			"default": [
				".......",
				".......",
				"...8...",
				"..406..",
				"...2...",
				".......",
				"......."
			],
			"palaceRight": [
				".......",
				".......",
				"....9..",
				"...0...",
				"..1....",
				".......",
				"......."
			],
			"palaceLeft": [
				".......",
				".......",
				"..7....",
				"...0...",
				"....3..",
				".......",
				"......."
			]
		}
	},
	"士": {
		"name": "士",
		"display": ["⬡士", "士"],
		"gameName": "チャンギ",
		"group": "将",
		"attr": ["inPalace"],
		"range": {
			"default": [
				".......",
				".......",
				"...A...",
				"..A0A..",
				"...A...",
				".......",
				"......."
			],
			"palaceRight": [
				".......",
				".......",
				"....A..",
				"...0...",
				"..A....",
				".......",
				"......."
			],
			"palaceLeft": [
				".......",
				".......",
				"..A....",
				"...0...",
				"....A..",
				".......",
				"......."
			]
		}
	},
	"楚": {
		"name": "楚",
		"display": ["⏣楚", "⏣漢", "楚", "漢"],
		"alias": ["漢"],
		"gameName": "チャンギ",
		"group": "王",
		"attr": ["inPalace"],
		"range": {
			"default": [
				".......",
				".......",
				"...A...",
				"..A0A..",
				"...A...",
				".......",
				"......."
			],
			"palaceRight": [
				".......",
				".......",
				"....A..",
				"...0...",
				"..A....",
				".......",
				"......."
			],
			"palaceLeft": [
				".......",
				".......",
				"..A....",
				"...0...",
				"....A..",
				".......",
				"......."
			]
		}
	},
	"貝": {
		"name": "ビア",
		"display": ["⛀貝", "◎貝"],
		"gameName": "マークルック",
		"group": "兵",
		"range": {
			"default": [
				".......",
				".......",
				"...A...",
				"...0...",
				".......",
				".......",
				"......."
			],
			"attack": [
				".......",
				".......",
				"..A.A..",
				"...0...",
				".......",
				".......",
				"......."
			]
		},
		"promo": {
			"貴": {
				"name": "ビアガーイ",
				"display": ["⛂貴", "⛂珠", "◉貴", "◉珠"],
				"alias": ["珠"],
				"range": {
					"default": [
						".......",
						".......",
						"..A.A..",
						"...0...",
						"..A.A..",
						".......",
						"......."
					],
					"start": [
						".......",
						".A...A.",
						"..A.A..",
						"...0...",
						"..A.A..",
						".A...A.",
						"......."
					]
				}
			}
		}
	},
	"瑪": {
		"name": "マー",
		"display": ["🐴瑪"],
		"gameName": "マークルック",
		"group": "馬",
		"range": {
			"default": [
				".......",
				"..A.A..",
				".A...A.",
				"...0...",
				".A...A.",
				"..A.A..",
				"......."
			]
		}
	},
	"根": {
		"name": "コーン",
		"display": ["Δ根"],
		"gameName": "マークルック",
		"group": "象",
		"range": {
			"default": [
				".......",
				".......",
				"..7.9..",
				"...0...",
				"..1.3..",
				".......",
				"......."
			]
		}
	},
	"船": {
		"name": "ルアー",
		"display": ["⌓船"],
		"gameName": "マークルック",
		"group": "車",
		"range": {
			"default": [
				".......",
				".......",
				"...8...",
				"..406..",
				"...2...",
				".......",
				"......."
			]
		}
	},
	"種": {
		"name": "メット",
		"display": ["▵種"],
		"gameName": "マークルック",
		"group": "将",
		"attr": ["sutMet"],
		"range": {
			"default": [
				".......",
				".......",
				"..A.A..",
				"...0...",
				"..A.A..",
				".......",
				"......."
			],
			"start": [
				".......",
				"...A...",
				".......",
				"...0...",
				".......",
				".......",
				"......."
			]
		}
	},
	"君": {
		"name": "クン",
		"gameName": "マークルック",
		"display": ["△君", "▲君", "△公", "▲公"],
		"alias": ["公"],
		"group": "王",
		"range": {
			"default": [
				".......",
				".......",
				"..AAA..",
				"..A0A..",
				"..AAA..",
				".......",
				"......."
			]
		}
	}
}
