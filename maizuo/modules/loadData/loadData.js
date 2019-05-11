define(["jquery"],function($){
	var getData	=function(url){
		var p =new Promise(function(resolve,reject){
		$.get(url,function(data){
			resolve(data);
			})
		});
		return p;

	};

	return {getData :getData}
	
})