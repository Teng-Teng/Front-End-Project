window.onload = function(){
	// var link = document.getElementsByTagName("link")[0];
	var link = document.getElementById("toggle");
	var skin = document.getElementById("skin").getElementsByTagName("li");

	for( var i =0; i<skin.length; i++ ){
		skin[i].onclick = function(){
				for( var a in skin ){
					skin[a].className = "";
				}
				this.className = "current";
				link['href'] = "./css/"+this.id+".css";
			}
		}

}