define(["At","jquery","text!me.html"],function(at,$,text){
		function initView(){

			var data =[
				["./img/order1.png","电影订单"],
				["./img/order2.png","商品订单"]
			];

			var render = at.render(text,{data:data});
			$(".Content").html(render);



		}

		return {initView : initView}
})