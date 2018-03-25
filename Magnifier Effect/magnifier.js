window.onload = function(){

	var normal = document.getElementById("normal");
	var lay = document.getElementById("lay");
	var bigImg = document.getElementById("bigImg");
	var img = bigImg.getElementsByTagName("img")[0];

	//Show the magnifier and bigImg when the mouse moves in
	normal.onmouseover = function(){
		lay.style.display = "block";
		bigImg.style.display = "block";
	}
	//Hide the magnifier and bigImg when the mouse moves out
	normal.onmouseout = function(){
		lay.style.display = "none";
		bigImg.style.display = "none";
	}

	normal.onmousemove = function( ev ){
		var ev = ev || event;
		var scale = 4; //Scale of picture 
		//Place the mouse in the middle of the magnifier 
		var x = ev.clientX - lay.offsetWidth/2 - normal.offsetLeft;
		var y = ev.clientY - lay.offsetHeight/2 - normal.offsetTop;
		// Combining the width and height of the magnifier with the box, 
		// scaling up and down 
		lay.style.width = parseInt( normal.offsetWidth / scale ) + "px";
		lay.style.height = parseInt( normal.offsetHeight / scale ) + "px";
		//Set the width and height of the enlarged image 
		img.style.width = normal.offsetWidth * scale + "px";
		img.style.height = normal.offsetHeight * scale + "px";
		
		//Setting out of bound problem
		if( x<0 ){
			x = 0; //Judgment of the left boundary, setting x to 0 when exceeded 
		}
		if( x>=normal.offsetWidth - lay.offsetWidth ){
			x = normal.offsetWidth - lay.offsetWidth; 
			//Judgment of the right boundary, when it exceeds, 
			//x is set to the width of the box minus the width of the magnifier 
		}
		if( y<0 ){
			y = 0; //Judgment on the upper boundary, set y to 0 when exceeded
		}
		if( y>= normal.offsetHeight - lay.offsetHeight ){
			y = normal.offsetHeight - lay.offsetHeight;  
			//The judgment of the lower boundary, when it exceeds, 
			//set y to the height of Box minus the height of the magnifier
		}
		//Magnifier moves with the mouse
		lay.style.left = x + "px";
		lay.style.top = y + "px";
		//When the small box moves to the right, the big box moves to the left
		//by the same proportion of width and height, and the direction is opposite.
		var left = scale * lay.offsetLeft;
		var top = scale * lay.offsetTop;
		img.style.left = -left + "px";
		img.style.top = -top + "px";
	}

}