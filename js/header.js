$(function(){

//小屏导航菜单显示和隐藏效果

var flag=true;
$(".wx-smheader .menu").click(function(){
	if(flag){
		$(".wx-smheader .sm-nav").show();
	}else{
		$(".wx-smheader .sm-nav").hide();
	}
	flag=!flag;	
})

//鼠标滚动到一定位置导航栏消失效果

$(document).scroll(function(){
	var obj=document.body.scrollTop?document.body:document.documentElement;
	if(obj.scrollTop>=200){
		$(".wx-header").css({top:"-101px"});
	}else if(obj.scrollTop<200){
		$(".wx-header").css({top:"0"},300)
	}
})






})