require.config({
	// 之前都是引进的都是可以用的 ,这里只需要引进films所需的东西就好了,
	paths:{
		lunbo:"../modules/films/lunbo/lunbo",
		show:"../modules/films/show/show",
	}	
})



// 在define 当中就是类似于声明的是var 只是互不冲突罢了

define(["lunbo","show","text!films.html"],function(lunbo,show,text){
// 这里执行 fimls 的东西 然后将其返回给tabbar 调用 
let initView =function(){
	$(".Content").html(text);
	lunbo.initView();
	show.initView();
	// 这个就是包装的好处 就是能够把一个模块是否调用的好处
}
return {
	initView :initView
}
})