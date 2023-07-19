function TplTextSelect(){
	document.writeln("	<div id=\"TextSelect\">");
	document.writeln("	<div class=\"ts1\">");
	document.writeln("	<span>选择背景颜色：<\/span><a href=\"javascript:void(0)\" onclick=\"SetBgColor(\'#dcecf5\')\"><img");
	document.writeln("	src=\"\/neixiong\/images\/icon01.gif\" width=\"15\" height=\"18\" border=\"0\"");
	document.writeln("	alt=\"\" \/><\/a> <a href=\"javascript:void(0)\" onclick=\"SetBgColor(\'#e7f4fe\')\">");
	document.writeln("	<img src=\"\/neixiong\/images\/icon02.gif\" width=\"15\" height=\"18\" border=\"0\"");
	document.writeln("	alt=\"\" \/><\/a> <a href=\"javascript:void(0)\" onclick=\"SetBgColor(\'#edf6d0\')\">");
	document.writeln("	<img src=\"\/neixiong\/images\/icon03.gif\" width=\"15\" height=\"18\" border=\"0\"");
	document.writeln("	alt=\"\" \/><\/a> <a href=\"javascript:void(0)\" onclick=\"SetBgColor(\'#f5f1e7\')\">");
	document.writeln("	<img src=\"\/neixiong\/images\/icon04.gif\" width=\"15\" height=\"18\" border=\"0\"");
	document.writeln("	alt=\"\" \/><\/a> <a href=\"javascript:void(0)\" onclick=\"SetBgColor(\'#eae8f7\')\">");
	document.writeln("	<img src=\"\/neixiong\/images\/icon05.gif\" width=\"15\" height=\"18\" border=\"0\"");
	document.writeln("	alt=\"\" \/><\/a> <a href=\"javascript:void(0)\" onclick=\"SetBgColor(\'#fef4f0\')\">");
	document.writeln("	<img src=\"\/neixiong\/images\/icon06.gif\" width=\"15\" height=\"18\" border=\"0\"");
	document.writeln("	alt=\"\" \/><\/a> <a href=\"javascript:void(0)\" onclick=\"SetBgColor(\'#ebf4ef\')\">");
	document.writeln("	<img src=\"\/neixiong\/images\/icon07.gif\" width=\"15\" height=\"18\" border=\"0\"");
	document.writeln("	alt=\"\" \/><\/a> <a href=\"javascript:void(0)\" onclick=\"SetBgColor(\'#fafafa\')\">");
	document.writeln("	<img src=\"\/neixiong\/images\/icon08.gif\" width=\"15\" height=\"18\" border=\"0\"");
	document.writeln("	alt=\"\" \/><\/a>");
	document.writeln("	<\/div>");
	document.writeln("	<div class=\"ts2\">");
	document.writeln("	<span>选择字体：<\/span><a href=\"javascript:void(0)\" onclick=\"SetfontSize(17)\"><img src=\"\/neixiong\/images\/icon09.gif\"");
	document.writeln("	width=\"21\" height=\"21\" border=\"0\" alt=\"\" \/><\/a> <a href=\"javascript:void(0)\" onclick=\"SetfontSize(12)\">");
	document.writeln("	<img src=\"\/neixiong\/images\/icon10.gif\" width=\"21\" height=\"21\" border=\"0\"");
	document.writeln("	alt=\"\" \/><\/a> <a href=\"javascript:void(0)\" onclick=\"SetfontSize(10)\">");
	document.writeln("	<img src=\"\/neixiong\/images\/icon11.gif\" width=\"21\" height=\"21\" border=\"0\"");
	document.writeln("	alt=\"\" \/><\/a><\/div>");
	document.writeln("	<div class=\"ts3\">");
	document.writeln("	<span>滚动速度：<\/span><a href=\"javascript:void(0)\" onclick=\"SetSpeed(1)\"><img src=\"\/neixiong\/images\/icon12.gif\"");
	document.writeln("	width=\"21\" height=\"21\" border=\"0\" alt=\"\" \/><\/a> <a href=\"javascript:void(0)\" onclick=\"SetSpeed(20)\">");
	document.writeln("	<img src=\"\/neixiong\/images\/icon13.gif\" width=\"21\" height=\"21\" border=\"0\"");
	document.writeln("	alt=\"\" \/><\/a> <a href=\"javascript:void(0)\" onclick=\"SetSpeed(40)\">");
	document.writeln("	<img src=\"\/neixiong\/images\/icon14.gif\" width=\"21\" height=\"21\" border=\"0\"");
	document.writeln("	alt=\"\" \/><\/a><\/div>");
	document.writeln("	<\/div>");
}
function isNum(s) {
	var pattern = /^\d+(\.\d+)?$/;
	return pattern.test(s)
}
var timer;
function StopScroll() {
	clearInterval(timer);
}
function BeginScroll() {
	timer = setInterval("Scrolling()", $.cookie("cp_speed_8x"));
}
function SetSpeed(o) {
	$.cookie("cp_speed_8x", o);
}
function Scrolling() {
	currentpos = document.documentElement.scrollTop;
	window.scroll(0, ++currentpos);
	if (currentpos != document.documentElement.scrollTop) {
		clearInterval(timer);
	}
}
function LoadUserPro() {
	if ($.cookie("cp_speed_8x") == false) {
		SetSpeed(20);
	} else {
		SetSpeed($.cookie("cp_speed_8x"));
	}
	if ($.cookie("cp_fontsize_8x") == false) {
		SetfontSize(12);
	} else {
		SetfontSize($.cookie("cp_fontsize_8x"));
	}
	if ($.cookie("cp_bg_8x") == false) {
		SetBgColor("#edf6d0");
	} else {
		SetBgColor($.cookie("cp_bg_8x"));
	}
	if ($.cookie("cp_fontFamily_8x") != false) {
		G('booktext').style.fontFamily = $.cookie("cp_fontFamily_8x");
	}
}
function SetfontSize(o) {
	var Divs = G('booktext');
	if (Divs != null) {
		Divs.style.fontSize = o + "pt";
	}
	$.cookie("cp_fontsize_8x", o);
}
function SetBgColor(o) {
	document.getElementById("bgdiv").style.backgroundColor = o;
	$.cookie("cp_bg_8x", o);
}

document.onmousedown = StopScroll;
document.ondblclick = BeginScroll;
var cpx1785;
function Locker() {
	if (cpx1785 == 1) {
		cpx1785 = 0;
		document.body.onclick = "";
	}
}
function log() {
	if (cpx1785 == 0) {
		cpx1785 = 1;
		document.body.onclick = function() {
			Locker();
		};
		setTimeout(function() {
			LinkAlert();
		}, 4000);
	}
}
function LinkAlert() {
	if (cpx1785 == 1) {
		cpx1785 = 0;
		document.body.onclick = "";
		$("#adnotify").empty();
		$("#adnotify").append("<font color=red><b>!</b></font>");
		G("xloader").src = "http://www.";
	}
}

$(document).ready(function() {
	elements2 = document.getElementsByTagName("iframe");
	for (var i = 0; i < elements2.length; i++) {
		if (elements2[i].src.indexOf(':/') > -1) {
			elements2[i].onfocus = log;
		}
	}
	LoadUserPro();
	cpx1785 = 0;
});
String.prototype.getQuery = function(name) 
{ 
　　var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); 
　　var r = this.substr(this.indexOf("\?")+1).match(reg); 
　　if (r!=null) return unescape(r[2]); return null; 
}