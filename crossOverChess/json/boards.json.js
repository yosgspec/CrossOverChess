const boards = {
	"将棋": {
		"backgroundColor": "#EECC88",
		"borderColor": "#333333",
		"borderWidth": 2,
		"field": [
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
	"チェス": {
		"backgroundColor": "#333333",
		"borderColor": "#000000",
		"borderWidth": 2,
		"field": [
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
	"シャンチー": {
		"backgroundColor": "#EECC88",
		"borderColor": "#333333",
		"borderWidth": 2,
		"promoLineOffset": 1,
		"field": [
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
	"チャンギ": {
		"backgroundColor": "#EECC88",
		"borderColor": "#333333",
		"borderWidth": 2,
		"promoLineOffset": 1,
		"field": [
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
	"マークルック": {
		"backgroundColor": "#775544",
		"borderColor": "#000000",
		"borderWidth": 2,
		"field": [
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
	"どうぶつしょうぎ": {
		"backgroundColor": "#FFFFDD",
		"borderColor": "#FFDD99",
		"borderWidth": 2,
		"field": [
			"DDD",
			"$$$",
			"$$$",
			"ddd"
		]
	},
	"4人チェス": {
		"backgroundColor": "#333333",
		"borderColor": "#000000",
		"borderWidth": 2,
		"promoLineOffset": 6,
		"field": [
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
	"四神将棋": {
		"backgroundColor": "#EECC88",
		"borderColor": "#333333",
		"borderWidth": 2,
		"sidePromo": true,
		"field": [
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
	"クロス8列": {
		"backgroundColor": "#EECC88",
		"borderColor": "#333333",
		"borderWidth": 2,
		"field": [
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
	"クロス9列": {
		"backgroundColor": "#EECC88",
		"borderColor": "#333333",
		"borderWidth": 2,
		"field": [
			"CSC<#>CSC",
			"SCS#*#SCS",
			"CSC>#<CSC",
			"SSSSSSSSS",
			"=[=====]=",
			"SSSSSSSSS",
			"CSC<#>CSC",
			"SCS#*#SCS",
			"CSC>#<CSC"
		]
	},
	"4人用クロス8列": {
		"backgroundColor": "#333333",
		"borderColor": "#000000",
		"borderWidth": 2,
		"promoLineOffset": 6,
		"field": [
			"...CSC<#>CS...",
			"...SCS#*#SC...",
			"...CSC>#<CS...",
			"CSCWBWBWBWBSCS",
			"SCSBWBWBWBWCSC",
			"<#>WB===]WBSCS",
			"#*#BW====BW<#>",
			">#<WB====WB#*#",
			"SCSBW[===BW>#<",
			"CSCWBWBWBWBSCS",
			"SCSBWBWBWBWCSC",
			"...SC<#>CSC...",
			"...CS#*#SCS...",
			"...SC>#<CSC..."
		]
	},
	"4人用クロス9列": {
		"backgroundColor": "#EECC88",
		"borderColor": "#333333",
		"borderWidth": 2,
		"promoLineOffset": 6,
		"field": [
			"...CSC<#>CSC...",
			"...SCS#*#SCS...",
			"...CSC>#<CSC...",
			"CSCBWBWBWBWBCSC",
			"SCSWBWBWBWBWSCS",
			"CSCBWB==]BWBCSC",
			"<#>WB=====BW<#>",
			"#*#BW=====WB#*#",
			">#<WB=====BW>#<",
			"CSCBWB[==BWBCSC",
			"SCSWBWBWBWBWSCS",
			"CSCBWBWBWBWBCSC",
			"...CSC<#>CSC...",
			"...SCS#*#SCS...",
			"...CSC>#<CSC..."
		]
	}
}
