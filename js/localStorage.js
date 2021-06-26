// 使用Window localStorage存储
$(document).ready(function() {
	$("#search_baidu").click(function() {
		// console.log($.cookie('config')['SE']);
		var data = {
			"id":1,
			"sename": "百度",
			"url": "https://www.baidu.com/s",
			"name": "wd"
		};
		var se_data = JSON.stringify(data);

		localStorage.setItem("SE", se_data);
		// 读取数据
		// var json=localStorage.getItem("SE");
		// var jsonObj=JSON.parse(json);
		// console.log(jsonObj);
	});

	$("#search_bing").click(function() {
		// console.log($.cookie('config')['SE']);
		var data = {
			"id":2,
			"sename": "bing",
			"url": "https://cn.bing.com/search",
			"name": "q"
		};
		var se_data = JSON.stringify(data);

		localStorage.setItem("SE", se_data);
	});

	$("#search_google").click(function() {
		// console.log($.cookie('config')['SE']);
		var data = {
			"id":3,
			"sename": "Google",
			"url": "https://www.google.com/search",
			"name": "q"
		};
		var se_data = JSON.stringify(data);

		localStorage.setItem("SE", se_data);
	});
	
	

	$("#config_history").click(function() {
		if($(this).find(".config_box span").css("left")=="0px"){
			$('#search').attr('autocomplete', 'on');
					
			var ConfigData = {
				"history":"on"
			};
			var config_data = JSON.stringify(ConfigData);	
			localStorage.setItem("config", config_data);
			
		}
		else{
			$('#search').attr('autocomplete', 'off');
			
			var ConfigData = {
				"history":"off"
			};
			var config_data = JSON.stringify(ConfigData);	
			localStorage.setItem("config", config_data);
		}
		
	});
	
	$("#config_fluency").click(function() {
		if($(this).find(".config_box span").css("left")=="0px"){
			
			var ConfigDataFluency = {
				"fluency": 1//0为关闭，1为开启
			};
			var config_data_fluency = JSON.stringify(ConfigDataFluency);	
			localStorage.setItem("config_fluency", config_data_fluency);
			
		}
		else{
			var ConfigDataFluency = {
				"fluency": 0//0为关闭，1为开启
			};
			var config_data_fluency = JSON.stringify(ConfigDataFluency);	
			localStorage.setItem("config_fluency", config_data_fluency);
		}
		
	});






	// $(document).ready(function() {
	// 	$("#search_google").click(function() {
	// 		var json = localStorage.getItem("SE");
	// 		var jsonObj = JSON.parse(json);
	// 		console.log(jsonObj);
	// 	});
	// });

	// $(document).ready(function() {
	// 	$("#search_bing").click(function() {
	// 		var json = localStorage.getItem("SE");
	// 		var jsonObj = JSON.parse(json);
	// 		console.log(jsonObj);
	// 	});
	// });

	// $(document).ready(function() {
	// 	$("#search_baidu").click(function() {
	// 		var json = localStorage.getItem("SE");
	// 		var jsonObj = JSON.parse(json);
	// 		console.log(jsonObj);
	// 	});
	// });
});