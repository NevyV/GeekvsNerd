function outcome()
{
	var outcome = pickOutcome();
	document.getElementById("geekImg").src="./img/blank.png";
	document.getElementById("nerdImg").src="./img/blank.png";

	document.getElementById("outcome1").style.visibility="hidden";
	document.getElementById("outcome2").style.visibility="hidden";


	document.getElementById("outcome" + outcome).style.visibility="visible";

	if(outcome == 1)
	{
		document.getElementById("geekImg").src="./img/geek.png";
	}
	else if(outcome == 2)
	{
		document.getElementById("nerdImg").src="./img/nerd.png";
	}
		else if(outcome == 3)
	{
		document.getElementById("cynicBadge").src="./img/snob.png";
	}
	else if(outcome == 4)
	{
		document.getElementById("hipsterBadge").src="./img/cynic.png";
	}

}

function pickOutcome()
{
	if(chosenOption("firstOption") == "extrovert")
	{
		if(chosenOption("secondOption") == "yes")
		{
			if(chosenOption("thirdOption") == "starwars")
			{
				return 1;
			}    
			else if(chosenOption("thirdOption") == "startrek")
			{
				return 1;
			}	
		}
		else if(chosenOption("secondOption") == "no")
		{
			if(chosenOption("thirdOption") == "startrek")
			{
				return 2;
			}
			else if(chosenOption("thirdOption") == "starwars")
			{
				return 1;
			}
		}
	}
	else if(chosenOption("firstOption") == "introvert")
	{
		if(chosenOption("secondOption") == "yes")
		{
			if(chosenOption("thirdOption") == "starwars")
			{
				return 1;
			}
			else if(chosenOption("thirdOption") == "startrek")
			{
				return 2;
			}	
		}
		else if(chosenOption("secondOption") == "no")
		{
			if(chosenOption("thirdOption") == "startrek")
			{
				return 2;
			}
			else if(chosenOption("thirdOption") == "starwars")
			{
				return 2;
			}
		}
	}
	alert(chosenOption("firstOption"));

}

function chosenOption(groupName)
{
	var groupOptions = document.getElementsByName(groupName);
	
	for(var i = 0; i < groupOptions.length; i++)
	{
	   if(groupOptions[i].checked == true)
	   {
		   return groupOptions[i].value;
	   }
	}
	
 }
  