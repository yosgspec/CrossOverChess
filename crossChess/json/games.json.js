const games = {
	"将棋": {
		"fontColor": "#000000",
		"backgroundColor": "#FFCC77",
		"promoLine": -3,
		"position": {
			9: {
				"default": [
					"歩歩歩歩歩歩歩歩歩",
					"・角・・・・・飛・",
					"香桂銀金玉金銀桂香"
				],
				"p4": [
					"・・・・歩・・・・",
					"・・・歩飛歩・・・",
					"・・銀金玉金銀・・"
				]
			},
			8: {
				"default": [
					"歩歩歩歩歩歩歩歩",
					"・角・・・・飛・",
					"香桂銀玉金銀桂香"
				]
			},
			14: {
				"default": [
					"・・・歩歩歩歩歩歩歩歩・・・",
					"・・・・角・・・・飛・・・・",
					"・・・香桂銀玉金銀桂香・・・"
				]
			},
			15: {
				"default": [
					"・・・歩歩歩歩歩歩歩歩歩・・・",
					"・・・・角・・・・・飛・・・・",
					"・・・香桂銀金玉金銀桂香・・・"
				]
			}
		}
	},
	"チェス": {
		"fontColor": "#FFFFFF",
		"backgroundColor": "#000000",
		"promoLine": -1,
		"position": {
			9: {
				"default": [
					"兵兵兵兵兵兵兵兵兵",
					"塔騎聖后・王聖騎塔"
				],
				"black": [
					"兵兵兵兵兵兵兵兵兵",
					"塔騎聖后・王聖騎塔"
				]
			},
			8: {
				"default": [
					"兵兵兵兵兵兵兵兵",
					"塔騎聖后王聖騎塔"
				],
				"black": [
					"兵兵兵兵兵兵兵兵",
					"塔騎聖后王聖騎塔"
				]
			},
			14: {
				"default": [
					"・・・兵兵兵兵兵兵兵兵・・・",
					"・・・塔騎聖后王聖騎塔・・・"
				]
			},
			15: {
				"default": [
					"・・・兵兵兵兵兵兵兵兵兵・・・",
					"・・・塔騎聖后・王聖騎塔・・・"
				]
			}
		}
	},
	"シャンチー": {
		"fontColor": "#CC1100",
		"backgroundColor": "#FFDDAA",
		"promoLine": -4,
		"position": {
			9: {
				"default": [
					"卒・卒・卒・卒・卒",
					"・炮・・・・・炮・",
					"俥馮相仕帥仕相馮俥"
				]
			},
			8: {
				"default": [
					"卒・卒卒・卒・卒",
					"・炮・・・・炮・",
					"俥馮相帥仕相馮俥"
				]
			},
			14: {
				"default": [
					"・・・卒・卒卒・卒・卒・・・",
					"・・・・炮・・・・炮・・・・",
					"・・・俥馮相帥仕相馮俥・・・"
				]
			},
			15: {
				"default": [
					"・・・卒・卒・卒・卒・卒・・・",
					"・・・・炮・・・・・炮・・・・",
					"・・・俥馮相仕帥仕相馮俥・・・"
				]
			}
		}
	},
	"チャンギ": {
		"fontColor": "#008800",
		"backgroundColor": "#FFEEDD",
		"position": {
			9: {
				"default": [
					"卆・卆・卆・卆・卆",
					"・包・・楚・・包・",
					"車馭象士・士象馭車"
				],
				"left": [
					"卆・卆・卆・卆・卆",
					"・包・・楚・・包・",
					"車象馭士・士象馭車"
				],
				"right": [
					"卆・卆・卆・卆・卆",
					"・包・・楚・・包・",
					"車馭象士・士馭象車"
				],
				"reverse": [
					"卆・卆・卆・卆・卆",
					"・包・・楚・・包・",
					"車象馭士・士馭象車"
				]
			},
			8:	{
				"default": [
					"卆・卆卆・卆・卆",
					"・包・楚・・包・",
					"車馭象・士象馭車"
				],
				"left": [
					"卆・卆卆・卆・卆",
					"・包・楚・・包・",
					"車象馭・士象馭車"
				],
				"right": [
					"卆・卆卆・卆・卆",
					"・包・楚・・包・",
					"車馭象・士馭象車"
				],
				"reverse": [
					"卆・卆卆・卆・卆",
					"・包・楚・・包・",
					"車象馭・士馭象車"
				]
			},
			14:	{
				"default": [
					"・・・卆・卆卆・卆・卆・・・",
					"・・・・包・楚・・包・・・・",
					"・・・車馭象・士象馭車・・・"
				]
			},
			15:	{
				"default": [
					"・・・卆・卆・卆・卆・卆・・・",
					"・・・・包・・楚・・包・・・・",
					"・・・車馭象士・士象馭車・・・"
				]
			}
		}
	},
	"マークルック": {
		"fontColor": "#777777",
		"backgroundColor": "#FFFFDD",
		"promoLine": -3,
		"position": {
			9: {
				"default": [
					"貝貝貝貝貝貝貝貝貝",
					"・・・・・・・・・",
					"船瑪根種君種根瑪船"
				]
			},
			8: {
				"default": [
					"貝貝貝貝貝貝貝貝",
					"・・・・・・・・",
					"船瑪根君種根瑪船"
				]
			},
			14: {
				"default": [
					"・・・貝貝貝貝貝貝貝貝・・・",
					"・・・・・・・・・・・・・・",
					"・・・船瑪根君種根瑪船・・・"
				]
			},
			15: {
				"default": [
					"・・・貝貝貝貝貝貝貝貝貝・・・",
					"・・・・・・・・・・・・・・・",
					"・・・船瑪根種君種根瑪船・・・"
				]
			}
		}
	},
	"どうぶつしょうぎ": {
		"fontColor": "#666666",
		"backgroundColor": "#DDCCFF",
		"promoLine": -1,
		"position": {
			3: {
				"default": [
					"・ひ・",
					"きラぞ"
				]
			}
		}
	}
}
