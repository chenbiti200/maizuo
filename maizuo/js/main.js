require.config({
	baseUrl : "./libs",
	// 这里就是设置一个baseUrl 就好了 其他都是按照这个来走的
	paths :{
		At:"artTemplate",
		domReady :"domReady",
		jquery :"jquery",
		text :"text",
		home :"../modules/home",
		loadData:"../modules/loadData/loadData"
	}
})

// 这里已经是拿到了就是全部js都是拿到了
require(["At","domReady","text","home"],function(At,domReady,text,home){

})