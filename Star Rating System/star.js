window.onload = function ()
{
	var oStar = document.getElementById("star");
	var aLi = oStar.getElementsByTagName("li");
	var oUl = oStar.getElementsByTagName("ul")[0];
	var oSpan = oStar.getElementsByTagName("span")[1];
	var oP = oStar.getElementsByTagName("p")[0];
	var i = iScore = iStar = 0;
	var aMsg = [
				"Very Dissatisfied|The quality if the product is too bad",
				"Unsatisfactory|The product is partially damaged",
				"General|General quality, the color is terrible",
				"Satisfied|Good quality, the service is good",
				"Very Satisfied|The logistics is very fast and the quality is very good"
				]
	
	for (i = 1; i <= aLi.length; i++)
	{
		aLi[i - 1].index = i;
		//Mouseover display the score
		aLi[i - 1].onmouseover = function ()
		{
			fnPoint(this.index);
			//Floating layer display
			oP.style.display = "block";
			//Calculate floating layer position
			oP.style.left = oUl.offsetLeft + this.index * this.offsetWidth - 104 + "px";
			//Match floating layer text content
			oP.innerHTML = "<em><b>" + this.index + "</b> stars " + 
			aMsg[this.index - 1].match(/(.+)\|/)[1] + "</em>" + 
			aMsg[this.index - 1].match(/\|(.+)/)[1]
		};
		//Restore to last score after mouseleave
		aLi[i - 1].onmouseout = function ()
		{
			fnPoint();
			//Close the floating layer
			oP.style.display = "none"
		};
		//Click to score
		aLi[i - 1].onclick = function ()
		{
			iStar = this.index;
			oP.style.display = "none";
			oSpan.innerHTML = "<strong>" + (this.index) + 
			" stars</strong> (" + aMsg[this.index - 1].match(/\|(.+)/)[1] + ")"
		}
	}
	//Rating processing
	function fnPoint(iArg)
	{
		//Assign scores 
		iScore = iArg || iStar;
		for (i = 0; i < aLi.length; i++) aLi[i].className = i < iScore ? "on" : "";	
	}
};