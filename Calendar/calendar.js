window.onload = function ()
{
	var oLi = document.getElementById("calendar").getElementsByTagName("li");
	var oMsg = document.getElementById("msg");
	var oP = oMsg.getElementsByTagName("p")[0];
	var oStrong = oMsg.getElementsByTagName("strong")[0];
	var oArray = [
		"A word to the wise is enough",
		"Actions speak louder than words",
		"After a storm comes a calm",
		"All roads lead to Rome",
		"Let the dead bury the dead",
		"The Devil looks after his own",
		"Every man for himself, and the Devil take the hindmost",
		"It's never too late",
		"Everything comes to him who waits",
		"Blood is thicker than water",
		"First impressions are the most lasting",
		"All the world loves a lover"
	];
	
	for(var i = 0; i < oLi.length; i++)
	{
		oLi[i].index = i;
		oLi[i].onmouseover = function ()
		{
			for(var n = 0; n < oLi.length; n++) 
				oLi[n].className = "";
			this.className = "current";
			oP.innerHTML = oArray[this.index];
			oStrong.innerHTML = this.index + 1;
		}	
	}	
}