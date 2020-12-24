$(document).ready(function() {
	//搜索引擎存储
	var json_se = localStorage.getItem("SE");
	var json_se_Obj = JSON.parse(json_se);
	// console.log(json_se_Obj);

	var se_id = json_se_Obj["id"];
	var se_sename = json_se_Obj["sename"];
	var se_url = json_se_Obj["url"];
	var se_name = json_se_Obj["name"];
	// console.log(se_id);

	// 历史记录存储
	var json_config = localStorage.getItem("config");
	var json_config_Obj = JSON.parse(json_config);
	// console.log(json_config_Obj);
	var config_history = json_config_Obj["history"];
	// console.log(config_history);

	// 流畅模式
	var json_fluency = localStorage.getItem("config_fluency");
	var json_fluency_Obj = JSON.parse(json_fluency);
	// console.log(json_fluency_Obj);	
	var config_fluency = json_fluency_Obj["fluency"];
	// console.log(config_fluency);

	$("#search").focus(function() {
		var json_fluency = localStorage.getItem("config_fluency");
		var json_fluency_Obj = JSON.parse(json_fluency);
		// console.log(json_fluency_Obj);	
		var config_fluency = json_fluency_Obj["fluency"];
		// console.log(config_fluency);
		
		if (config_fluency == 0) {
			$(".background_img").css({
				"transform": "scale(1.2)",
				"filter": "blur(5px)"
			});
		} else {
			$(".background_img").css({
				"transform": "scale(1.2)",
			});
		}
		
		$(".weather").css({
			"display": "none"
		});
		$(".webs").css({
			"display": "none"
		});
		$(".word").css({
			"opacity": "1"
		});
	});
	$("#search").blur(function() {
		$(".background_img").css({
			"transform": "scale(1)",
			"filter": "blur(0px)"
		});
		$(".weather").css({
			"display": "block"
		});
		$(".webs").css({
			"display": "block"
		});
		$(".word").css({
			"opacity": "0"
		});
	});

	switch (se_id) {
		case 1:
			// console.log("this is baidu");
			$(".search_logo_list_mov").css({
				"bottom": "0px"
			});


			$('form[id=search_form]').attr('action', 'https://www.baidu.com/s');
			$('#search').attr('name', 'wd');
			$('#search').attr('placeholder', '百度搜索网页');
			break;
		case 2:
			$(".search_logo_list_mov").css({
				"bottom": "45px"
			});


			$('form[id=search_form]').attr('action', 'https://cn.bing.com/search');
			$('#search').attr('name', 'q');
			$('#search').attr('placeholder', 'bing搜索网页');
			break;
		case 3:
			$(".search_logo_list_mov").css({
				"bottom": "90px"
			});


			$('form[id=search_form]').attr('action', 'https://www.google.com/search');
			$('#search').attr('name', 'q');
			$('#search').attr('placeholder', '谷歌搜索网页');

		default:
			// 与 case 1 和 case 2 不同时执行的代码
	}

	if (config_history == "on") {
		$('#search').attr('autocomplete', 'on');

		$('#config_history').find(".config_box span").css({
			"left": "20px",
			"background-color": "white",
		});
		$('#config_history').find(".config_box").css({
			"background-color": "rgb(0, 120, 212)",
			"border-color": "rgb(0, 120, 212)"
		});
	} else {
		$('#search').attr('autocomplete', 'off');

		$('#config_history').find(".config_box span").css({
			"left": "0px",
			"background-color": "black",
		});
		$('#config_history').find(".config_box").css({
			"background-color": "white",
			"border-color": "rgb(141, 141, 141)"
		});
	}

	if (config_fluency == 1) {
		$('#config_fluency').find(".config_box span").css({
			"left": "20px",
			"background-color": "white",
		});
		$('#config_fluency').find(".config_box").css({
			"background-color": "rgb(0, 120, 212)",
			"border-color": "rgb(0, 120, 212)"
		});
	} else {
		$('#config_fluency').find(".config_box span").css({
			"left": "0px",
			"background-color": "black",
		});
		$('#config_fluency').find(".config_box").css({
			"background-color": "white",
			"border-color": "rgb(141, 141, 141)"
		});
	}

});
