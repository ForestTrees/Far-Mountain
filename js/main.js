$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip();

	$(".search_logo_list").click(function() {
		// console.log($(".search_select li").height());
		if ($(".search_select li").height() == 0) {
			$(".search_select li").css({
				"height": "30px"
			});
		}
		if ($(".search_select li").height() == 30) {
			$(".search_select li").css({
				"height": "0px"
			});
		}
	});

	$(document).mousedown(function() {
		e = window.event || e;
		var obj = e.srcElement || e.target;
		if ($(obj).is("#search_logo,#search_baidu,#search_bing,#search_google")) {
			console.log("没有点击");
		} else {
			$(".search_select li").css({
				"height": "0px"
			});
		}


	});

	$("#search_baidu").click(function() {
		console.log("baidu");
		$(".search_logo_list_mov").css({
			"bottom": "0px"
		});
		$(".search_select li").css({
			"height": "0px"
		});

		$('form[id=search_form]').attr('action', 'https://www.baidu.com/s');
		$('#search').attr('name', 'wd');
		$('#search').attr('placeholder', '百度搜索网页');
	});

	$("#search_bing").click(function() {
		$(".search_logo_list_mov").css({
			"bottom": "45px"
		});
		$(".search_select li").css({
			"height": "0px"
		});

		$('form[id=search_form]').attr('action', 'https://cn.bing.com/search');
		$('#search').attr('name', 'q');
		$('#search').attr('placeholder', 'bing搜索网页');
	});

	$("#search_google").click(function() {
		console.log("google");
		$(".search_logo_list_mov").css({
			"bottom": "90px"
		});
		$(".search_select li").css({
			"height": "0px"
		});

		$('form[id=search_form]').attr('action', 'https://www.google.com/search');
		$('#search').attr('name', 'q');
		$('#search').attr('placeholder', '谷歌搜索网页');
	});

	$(".config_out").click(function() {

		// console.log($(".config_box span").css("left"));
		if ($(this).find(".config_box span").css("left") == "0px") {
			// console.log("success");
			$(this).find(".config_box span").css({
				"left": "20px",
				"background-color": "white",
			});
			$(this).find(".config_box").css({
				"background-color": "rgb(0, 120, 212)",
				"border-color": "rgb(0, 120, 212)"
			});
		} else {
			$(this).find(".config_box span").css({
				"left": "0px",
				"background-color": "black",
			});
			$(this).find(".config_box").css({
				"background-color": "white",
				"border-color": "rgb(141, 141, 141)"
			});
		}
		// console.log("google");


	});

	// console.log($('.close_announcement').height());
	$(".close_announcement").css("line-height", $('.close_announcement').height() + "px");
	// $(".announcement").css("height",$('.close_announcement').height()+"px");

	$(".close_announcement").click(function() {

		var div = $(".announcement");
		div.animate({
			opacity: '0'
		}, 300);
		div.animate({
			display: 'none'
		}, 300);

		announcement();


	});
});