const games = {
	"将棋": {
		"english": "Shogi",
		"fontColor": "#000000",
		"backgroundColor": "#FFCC77",
		"promoLine": -3,
		"position": {
			"9": {
				"default": [
					"歩歩歩歩歩歩歩歩歩",
					"・角・・・・・飛・",
					"香桂銀金玉金銀桂香"
				],
				"2p": [
					"歩歩歩歩歩歩歩歩歩",
					"・角・・・・・飛・",
					"香桂銀金皇金銀桂香"
				],
				"p4": [
					"・・・・歩・・・・",
					"・・・歩飛歩・・・",
					"・・銀金玉金銀・・"
				]
			},
			"8": {
				"default": [
					"歩歩歩歩歩歩歩歩",
					"・角・・・・飛・",
					"香桂銀玉金銀桂香"
				],
				"2p": [
					"歩歩歩歩歩歩歩歩",
					"・角・・・・飛・",
					"香桂銀皇金銀桂香"
				]
			},
			"14": {
				"default": [
					"・・・歩歩歩歩歩歩歩歩・・・",
					"・・・・角・・・・飛・・・・",
					"・・・香桂銀玉金銀桂香・・・"
				]
			},
			"15": {
				"default": [
					"・・・歩歩歩歩歩歩歩歩歩・・・",
					"・・・・角・・・・・飛・・・・",
					"・・・香桂銀金玉金銀桂香・・・"
				]
			}
		}
	},
	"チェス": {
		"english": "Chess",
		"fontColor": "#FFFFFF",
		"backgroundColor": "#000000",
		"promoLine": -1,
		"position": {
			"9": {
				"default": [
					"兵兵兵兵兵兵兵兵兵",
					"塔騎聖后・王聖騎塔"
				],
				"2p": [
					"兵兵兵兵兵兵兵兵兵",
					"塔騎聖后・帝聖騎塔"
				]
			},
			"8": {
				"default": [
					"兵兵兵兵兵兵兵兵",
					"塔騎聖后王聖騎塔"
				],
				"2p": [
					"兵兵兵兵兵兵兵兵",
					"塔騎聖后帝聖騎塔"
				]
			},
			"14": {
				"default": [
					"・・・兵兵兵兵兵兵兵兵・・・",
					"・・・塔騎聖后王聖騎塔・・・"
				]
			},
			"15": {
				"default": [
					"・・・兵兵兵兵兵兵兵兵兵・・・",
					"・・・塔騎聖后・王聖騎塔・・・"
				]
			}
		}
	},
	"シャンチー": {
		"english": "Xiangqi",
		"fontColor": "#CC1100",
		"backgroundColor": "#FFDDAA",
		"promoLine": -4,
		"position": {
			"9": {
				"default": [
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
			"8": {
				"default": [
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
			"14": {
				"default": [
					"・・・卒・卒卒・卒・卒・・・",
					"・・・・炮・・・・炮・・・・",
					"・・・俥馮相帥仕相馮俥・・・"
				]
			},
			"15": {
				"default": [
					"・・・卒・卒・卒・卒・卒・・・",
					"・・・・炮・・・・・炮・・・・",
					"・・・俥馮相仕帥仕相馮俥・・・"
				]
			}
		}
	},
	"チャンギ": {
		"english": "Janggi",
		"fontColor": "#008800",
		"backgroundColor": "#FFFFFF",
		"position": {
			"9": {
				"default": [
					"卆・卆・卆・卆・卆",
					"・包・・・・・包・",
					"・・・・楚・・・・",
					"車馭象士・士象馭車"
				],
				"left": [
					"卆・卆・卆・卆・卆",
					"・包・・・・・包・",
					"・・・・楚・・・・",
					"車象馭士・士象馭車"
				],
				"right": [
					"卆・卆・卆・卆・卆",
					"・包・・・・・包・",
					"・・・・楚・・・・",
					"車馭象士・士馭象車"
				],
				"reverse": [
					"卆・卆・卆・卆・卆",
					"・包・・・・・包・",
					"・・・・楚・・・・",
					"車象馭士・士馭象車"
				],
				"2p": [
					"卆・卆・卆・卆・卆",
					"・包・・・・・包・",
					"・・・・漢・・・・",
					"車馭象士・士象馭車"
				],
				"2pleft": [
					"卆・卆・卆・卆・卆",
					"・包・・・・・包・",
					"・・・・漢・・・・",
					"車象馭士・士象馭車"
				],
				"2pright": [
					"卆・卆・卆・卆・卆",
					"・包・・・・・包・",
					"・・・・漢・・・・",
					"車馭象士・士馭象車"
				],
				"2preverse": [
					"卆・卆・卆・卆・卆",
					"・包・・・・・包・",
					"・・・・漢・・・・",
					"車象馭士・士馭象車"
				]
			},
			"8": {
				"default": [
					"卆・卆卆・卆・卆",
					"・包・・・・包・",
					"・・・楚・・・・",
					"車馭象・士象馭車"
				],
				"left": [
					"卆・卆卆・卆・卆",
					"・包・・・・包・",
					"・・・楚・・・・",
					"車象馭・士象馭車"
				],
				"right": [
					"卆・卆卆・卆・卆",
					"・包・・・・包・",
					"・・・楚・・・・",
					"車馭象・士馭象車"
				],
				"reverse": [
					"卆・卆卆・卆・卆",
					"・包・・・・包・",
					"・・・楚・・・・",
					"車象馭・士馭象車"
				],
				"2p": [
					"卆・卆・卆卆・卆",
					"・包・・・・包・",
					"・・・・漢・・・",
					"車馭象士・象馭車"
				],
				"2pleft": [
					"卆・卆・卆卆・卆",
					"・包・・・・包・",
					"・・・・漢・・・",
					"車象馭士・象馭車"
				],
				"2pright": [
					"卆・卆・卆卆・卆",
					"・包・・・・包・",
					"・・・・漢・・・",
					"車馭象士・馭象車"
				],
				"2preverse": [
					"卆・卆・卆卆・卆",
					"・包・・・・包・",
					"・・・・漢・・・",
					"車象馭士・馭象車"
				]
			},
			"14": {
				"default": [
					"・・・卆・卆卆・卆・卆・・・",
					"・・・・包・楚・・包・・・・",
					"・・・車馭象・士象馭車・・・"
				]
			},
			"15": {
				"default": [
					"・・・卆・卆・卆・卆・卆・・・",
					"・・・・包・・楚・包・・・・・",
					"・・・車馭象士・士象馭車・・・"
				]
			}
		}
	},
	"マークルック": {
		"english": "Makruk",
		"fontColor": "#FFFFFF",
		"backgroundColor": "#CC2222",
		"promoLine": -3,
		"position": {
			"9": {
				"default": [
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
			"8": {
				"default": [
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
			"14": {
				"default": [
					"・・・貝貝貝貝貝貝貝貝・・・",
					"・・・・・・・・・・・・・・",
					"・・・船瑪根君種根瑪船・・・"
				]
			},
			"15": {
				"default": [
					"・・・貝貝貝貝貝貝貝貝貝・・・",
					"・・・・・・・・・・・・・・・",
					"・・・船瑪根種君種根瑪船・・・"
				]
			}
		}
	},
	"どうぶつしょうぎ": {
		"english": "DobutsuShogi",
		"fontColor": "#666666",
		"backgroundColor": "#DDCCFF",
		"promoLine": -1,
		"position": {
			"3": {
				"default": [
					"・ひ・",
					"きラぞ"
				]
			}
		}
	}
}
