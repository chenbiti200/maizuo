define(["At","text!cinema.html","jquery"],function(at,text,$){
	var initView =function(){
		let render = at.render("text");
		$(".Content").html(render);
	}

	return {initView:initView};
})