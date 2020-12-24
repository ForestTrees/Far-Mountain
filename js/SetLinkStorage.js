var json_se = localStorage.getItem("Link");
var json_se_Obj = JSON.parse(json_se);
// console.log(json_se_Obj);

function getFrom() {
	// var name_arr = new Array();
	// var url_arr = new Array();
	var name_arr = [link_webs.web_name0, link_webs.web_name1, link_webs.web_name2, link_webs.web_name3, link_webs.web_name4, link_webs.web_name5,
		link_webs.web_name6, link_webs.web_name7, link_webs.web_name8, link_webs.web_name9,
	];
	var url_arr = [link_webs.url0, link_webs.url1, link_webs.url2, link_webs.url3, link_webs.url4, link_webs.url5,
		link_webs.url6, link_webs.url7, link_webs.url8, link_webs.url9,
	];
	// console.warn(name_arr[9]);
	var i = 0;
	var ii = 0;
	var data = new Array();
	while (i < 10) {
		if (name_arr[i]) {//判断是否存在
			// console.log(link_webs.web_name0.value);
			if (name_arr[i].value != "" || url_arr[i].value != "") {//判断值是否为空
				var name = name_arr[i].value;
				var url = url_arr[i].value;
				var favicon = url.split("/");
				// if (favicon[0] + favicon[1] + "//" == "https://"||favicon[0] + favicon[1] + "//" == "http://") {
				//判断网址格式是否合法
				if (favicon[0] + favicon[1] + "//" == "https://" || favicon[0] + favicon[1] + "//" == "http://") {
					favicon = favicon[0] + favicon[1] + "//" + favicon[2] + "/favicon.ico";
					data[ii] = {
						"id": ii,
						"name": name,
						"url": url,
						"favicon": favicon,
					};
					// alert(name_arr[i].value);
					// console.log(name_arr[i]);

					i++;
					ii++;
					
					console.log("第"+ii+"个");
				} else {
					// favicon = favicon[0]+"/favicon.ico";
					// alert(favicon[0] + favicon[1]);
					webChack();
					i++;
					console.log("格式不正确");
					return false;
					// break;
				}

			} else {
				console.log("空值");
				i++;
			}
		} else {
			// console.warn(name_arr[9]);
			console.log("不存在");
			i++;
		}
	}

	localStorage.removeItem('Link'); //删掉旧存储
	var se_data = JSON.stringify(data);
	localStorage.setItem("Link", se_data);


	// var json_se = localStorage.getItem("Link");
	// var json_se_Obj = JSON.parse(json_se);
	// console.log(json_se_Obj);
	// alert(json_se_Obj);


	location.reload();
};

var json_se = localStorage.getItem("Link");
var json_se_Obj = JSON.parse(json_se);
var json_se_Obj_length = json_se_Obj.length; //获取目前存在的数量；
var exit_links_number = json_se_Obj_length;

function addLink() {
	
	if (exit_links_number < 10) {

		console.log(exit_links_number);

		var li = document.createElement("li");
		var img = document.createElement("img");
		var input1 = document.createElement("input");
		var input2 = document.createElement("input");
		var button = document.createElement("div");
		var img2 = document.createElement("img");
		// var svg = document.createElement("svg");
		// var path = document.createElement("path");

		li.className = "link_li2";
		img.src = "./img/new.png";
		input1.className = "link_title";
		input1.type = "text";
		var input1_name = "web_name" + exit_links_number;
		input1.name = input1_name;
		input1.placeholder = "填写网址标题";
		var input2_name = "url" + exit_links_number;

		input2.className = "link_url";
		input2.type = "text";
		input2.name = input2_name;
		input2.placeholder = "填写主网址";


		button.className = "link_delete";
		// button.click(test);
		img2.className = "set_link_img";
		img2.src = "./img/delete.png";

		input1.autocomplete = "off";
		input2.autocomplete = "off";
		// svg.className= "c011521";
		button.setAttribute('onclick', 'test(this)');
		// input1.setAttribute('value','');
		// input2.setAttribute('value','');
		// svg.setAttribute('xmlns','http://www.w3.org/2000/svg');
		// svg.setAttribute('width','12');
		// svg.setAttribute('height','12');

		// svg.viewBox = "0 0 2048 2048";
		// svg.xmlns = "http://www.w3.org/2000/svg";
		// svg.width = "12";
		// svg.height = "12";
		// path.setAttribute('d','M1115 1024l690 691-90 90-691-690-691 690-90-90 690-691-690-691 90-90 691 690 691-690 90 90-690 691z');
		// path.setAttribute('fill','#8a8a8a');
		// path.setAttribute ('p-id', '3041');

		// svg.appendChild(path);
		button.appendChild(img2);
		li.appendChild(img);
		li.appendChild(input1);
		li.appendChild(input2);
		li.appendChild(button);

		document.getElementById("dom_add").appendChild(li);

		$('.link_li2').animate({
			height: '40px'
		}, 30, 'linear');

		// test().stop();
		// test();
	} else {
		exit_links_number--;
		// alert("超出最大限度");
		limit();
	}
	exit_links_number++;
}
$(document).ready(function() {
	$('.link_delete').click(function() {
		exit_links_number--;
		console.log("存在" + exit_links_number);
		$(this).siblings("input").attr("value", "");
		$(this).siblings().attr("name", "none");
		$(this).parent().css({
			"height": "0",
			"margin": "0",
		});
	});
});

// $(document).ready(function() {
function test(obj) {
	// console.log("重构？？");
	// $('.link_delete2').click(function() {
	$(obj).siblings().val("");
	$(obj).parent().attr("class", "link_li");
	$(obj).siblings().attr("name", "none");
	$(obj).parent().css({
		"height": "0",
		"margin": "0",
		// "display": "none",
	});
	// $(this).parent().remove();
	exit_links_number--;
	console.log("新增" + exit_links_number);
	// });
}
// });
