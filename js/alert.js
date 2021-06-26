function limit() {
	var div = $(".max_limit");
	if (div.is(":animated")) { //判断元素是否正处于动画状态
	} else {
		//这里写新的动画
		div.animate({
			top: '10px',
			opacity: 1
		}, 300);
		div.animate({
			top: '10px',
			opacity: 1
		}, 2000);
		div.animate({
			top: '-50px',
			opacity: 0
		}, 300);
	}
}


function webChack() {
	var div = $(".webchack");
	if (div.is(":animated")) { //判断元素是否正处于动画状态
	} else {
		//这里写新的动画
		div.animate({
			top: '10px',
			opacity: 1
		}, 300);
		div.animate({
			top: '10px',
			opacity: 1
		}, 2000);
		div.animate({
			top: '-50px',
			opacity: 0
		}, 300);
	}
}

function announcement() {
	// $(".announcement").css("right","20px");
	// $(".announcement").css({"opacity":"1","display":"block"});

	var data = [{
		"id": notice_id,
	}];
	var se_data = JSON.stringify(data);
	localStorage.setItem("Announcement", se_data);
}