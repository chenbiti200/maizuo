define(["At","jquery","text!me.html"],function(at,$,text){
		function initView(){

			var data ={
			 order:[
			 	["./img/order1.png","电影订单"],
				["./img/order2.png","商品订单"]
			 ],
			 content:{
			 	img :[
			 		"./img/con1.png","./img/con2.png","./img/con3.png","./img/con4.png"
			 	],
			 	con:["卖座网","组合红包","余额","设置"]
			 }

				
			};


			var render = at.render(text,data);
			$(".Content").html(render);



		}

		return {initView : initView}
})