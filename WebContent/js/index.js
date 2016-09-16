$(document).ready( function() {
		
		var winHeight=300;
		if (window.innerHeight){
		winHeight = window.innerHeight;
		}else if((document.body) && (document.body.clientHeight)){
		winHeight = document.body.clientHeight;
		}

		$(".leftDiv").height(winHeight);


}
)