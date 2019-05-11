define(["At","text!moving.html","jquery","loadData"],function(at,text,$,loadData){
		function initView(){
	loadData.getData("https://www.easy-mock.com/mock/5cb68e18e3926e3006389012/example/movie").then(function(res){
		let render =at.render(text,res.data);
		console.log(render);
			$("#movie_detail").html(render);
		})
	}

return {initView:initView}
});

	