define(["At","text!lunbo.html","jquery","loadData","swiper"],function(At,text,$,loadData,Swiper){
	let initView =function(){

	loadData.getData("https://www.easy-mock.com/mock/5cb68e18e3926e3006389012/example/banner").then(function(data){
		let render = At.render(text,data);
		$(".Content .nav").html(render);
		var mySwiper = new Swiper ('.lunbo-container', {
			    loop: true, // 循环模式选项
			    
			    // 如果需要分页器

			    speed:1000,
			    pagination: {
			      el: '.swiper-pagination',
			      clickable:true

			    },
			    autoplay:{
			    	delay:3000
			    },

  			})     

		})
	}
	
	return {initView : initView}
// $(".Content")

})