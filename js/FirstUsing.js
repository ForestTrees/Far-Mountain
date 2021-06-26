if (!localStorage.getItem("Link")) {
	// alert("none");
	var data = [{
			"id": 1,
			"name": "bilbili",
			"url": "https://www.bilibili.com/",
			"favicon": "https://www.bilibili.com/favicon.ico",
		},
		{
			"id": 2,
			"name": "QQ邮箱",
			"url": "https://mail.qq.com/",
			"favicon": "https://mail.qq.com/favicon.ico",
		},
		{
			"id": 3,
			"name": "Google翻译",
			"url": "https://translate.google.cn/",
			"favicon": "https://translate.google.cn/favicon.ico",
		}
	];
	var se_data = JSON.stringify(data);
	localStorage.setItem("Link", se_data);

	// location.reload();
}
// $(document).ready(function() {
if (!localStorage.getItem("SE")) {
	// alert("1");

	var data = {
		"id": 1,
		"sename": "百度",
		"url": "https://www.baidu.com/s",
		"name": "wd"
	};
	var se_data = JSON.stringify(data);
	localStorage.setItem("SE", se_data);
}


if (!localStorage.getItem("config_fluency")) {
	// alert("1");
	var ConfigDataFluency = {
		"fluency": 0 //0为关闭，1为开启
	};
	var config_data_fluency = JSON.stringify(ConfigDataFluency);
	localStorage.setItem("config_fluency", config_data_fluency);
}

if (!localStorage.getItem("config")) {
	// alert("1");
	var ConfigData = {
		"history": "on"
	};
	var config_data = JSON.stringify(ConfigData);
	localStorage.setItem("config", config_data);
}




//判断用户在更新后是否第一次使用新版本
//暂时不启用
// if (!localStorage.getItem("Update")) {
// 	var ConfigData = {
// 		"UpdateCheck": "1"//1为是，0为否
// 	};
// 	var config_data = JSON.stringify(ConfigData);
// 	localStorage.setItem("config", config_data);
// }
$(document).ready(function() {
	if (!localStorage.getItem("Announcement")) {
		// console.log("无");
		// announcement();
		$(".announcement").css({"opacity":"1","display":"block"});
	}
	else {
		var json_se = localStorage.getItem("Announcement");
		var json_se_Obj = JSON.parse(json_se);
		// console.log(json_se_Obj[0].id);
		if (json_se_Obj[0].id != notice_id) {
			// announcement();
			console.log("Not newest");
			$(".announcement").css({"opacity":"1","display":"block"});
		}

	}
});