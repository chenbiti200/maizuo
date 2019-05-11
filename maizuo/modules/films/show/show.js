require.config({
	paths:{
		moving : "../modules/films/show/moving/moving",
		movingSoon : "../modules/films/show/movingSoon/movingSoon"
	}
})

define(["At","jquery","text!show.html","moving","movingSoon"],function(at,$,text,moving,movingSoon){
	let data ={
		data :["正在热映","即将上映"]
	}

var initView =function(){
	let render = at.render(text,data);
	$(".my_show").html(render);
	moving.initView();
	$(".mz_movie a").eq(0).addClass("active");
	$(".mz_movie a").click(function(){
		$(".mz_movie a").removeClass("active");
		$(this).addClass("active");
		switch($(this).index()){
			case 0 :
			moving.initView();
			break;
			case 1:
			movingSoon.initView();
			break;
		}
	});
}
	
	return {initView:initView}	

})