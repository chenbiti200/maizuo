require.config({
	paths :{
		tabbar : "../modules/tabbar/tabbar",
		films:"../modules/films/films",
		cinema:"../modules/cinema/cinema",
		pretty:"../modules/pretty/pretty",
		me:"../modules/me/me",

	}
})

// 这里引进那些没有的东西 引进来了那么就可以直接使用了


// 然后这个就是有个tabbar的下面的一场条 引用了他 然后在这里管理他
require(["tabbar"],function(tabbar){
	// 这里的tabbar 形参 也就是返回出来的那个函数






})