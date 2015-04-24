function outcome()
{
	var outcome = pickOutcome();

	if(outcome == 1)
	{
		var contentDiv = document.getElementById('geek_result');
	    var img = document.createElement('img');
	    var btn = document.getElementById('result-btn');
	   	var br = document.createElement('br');

	    var fb_btn = document.createElement('button');
		var fb_icon = document.createElement('i');
		var fb_link = document.createElement('a');

	    var twit_btn = document.createElement('button');
	    var twit_icon = document.createElement('i');
	    var twit_link = document.createElement('a');
	    
	    var tum_btn = document.createElement('button');
	    var tum_icon = document.createElement('i');
	    var tum_link = document.createElement('a');	    
	    

	    img.src = './img/geekfemale_badge.png';
	    img.style.margin = '0px';
	    btn.style.display = 'none';
	    

	    fb_link.setAttribute('href', 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgoogle.com');
	    fb_link.setAttribute('target', '_blank');
	    fb_btn.setAttribute('class', 'fb-btn');
	    fb_icon.setAttribute('class', 'fa fa-facebook');


	    twit_link.setAttribute('href', 'https://twitter.com/intent/tweet?url=https://www.google.com/&text=Take%20the%20Geeks%20vs%20Nerds%20quiz!');
	    twit_link.setAttribute('target', '_blank');
	    twit_btn.setAttribute('class', 'twit-btn');
	    twit_icon.setAttribute('class', 'fa fa-twitter');


	    tum_link.setAttribute('href', 'http://www.tumblr.com/share?v=3&u=https://www.google.com/&t=Geeks%20vs%20Nerds%20Quiz!&s=');
	    tum_link.setAttribute('target', '_blank');
	    tum_btn.setAttribute('class', 'tum-btn');
	    tum_icon.setAttribute('class', 'fa fa-tumblr');


	    fb_icon.textContent = ' Facebook';
	    fb_btn.appendChild(fb_icon);
	    twit_icon.textContent = ' Twitter';
	    twit_btn.appendChild(twit_icon);
	    tum_icon.textContent = ' Tumblr';
	    tum_btn.appendChild(tum_icon);


	    fb_link.appendChild(fb_btn);
	    twit_link.appendChild(twit_btn);
	    tum_link.appendChild(tum_btn);


	    contentDiv.appendChild(img);
	    contentDiv.appendChild(br);
	    contentDiv.appendChild(fb_link);
	    contentDiv.appendChild(twit_link);
	    contentDiv.appendChild(tum_link);
	}
	else if(outcome == 2)
	{
		var contentDiv = document.getElementById('geek_result');
	    var img = document.createElement('img');
	    var btn = document.getElementById('result-btn');
	   	var br = document.createElement('br');

	    var fb_btn = document.createElement('button');
		var fb_icon = document.createElement('i');
		var fb_link = document.createElement('a');

	    var twit_btn = document.createElement('button');
	    var twit_icon = document.createElement('i');
	    var twit_link = document.createElement('a');
	    
	    var tum_btn = document.createElement('button');
	    var tum_icon = document.createElement('i');
	    var tum_link = document.createElement('a');
	    

	    img.src = './img/geekmale_badge.png';
	    img.style.margin = '0px';
	    btn.style.display = 'none';


	    fb_link.setAttribute('href', 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgoogle.com');
	    fb_link.setAttribute('target', '_blank');
	    fb_btn.setAttribute('class', 'fb-btn');
	    fb_icon.setAttribute('class', 'fa fa-facebook');


	    twit_link.setAttribute('href', 'https://twitter.com/intent/tweet?url=https://www.google.com/&text=Take%20the%20Geeks%20vs%20Nerds%20quiz!');
	    twit_link.setAttribute('target', '_blank');
	    twit_btn.setAttribute('class', 'twit-btn');
	    twit_icon.setAttribute('class', 'fa fa-twitter');


	    tum_link.setAttribute('href', 'http://www.tumblr.com/share?v=3&u=https://www.google.com/&t=Geeks%20vs%20Nerds%20Quiz!&s=');
	    tum_link.setAttribute('target', '_blank');
	    tum_btn.setAttribute('class', 'tum-btn');
	    tum_icon.setAttribute('class', 'fa fa-tumblr');


	    fb_icon.textContent = ' Facebook';
	    fb_btn.appendChild(fb_icon);
	    twit_icon.textContent = ' Twitter';
	    twit_btn.appendChild(twit_icon);
	    tum_icon.textContent = ' Tumblr';
	    tum_btn.appendChild(tum_icon);


	    fb_link.appendChild(fb_btn);
	    twit_link.appendChild(twit_btn);
	    tum_link.appendChild(tum_btn);


	    contentDiv.appendChild(img);
	    contentDiv.appendChild(br);
	    contentDiv.appendChild(fb_link);
	    contentDiv.appendChild(twit_link);
	    contentDiv.appendChild(tum_link);
	}
		else if(outcome == 3)
	{
		var contentDiv = document.getElementById('nerd_result');
	    var img = document.createElement('img');
	    var btn = document.getElementById('result-btn');
	   	var br = document.createElement('br');

	    var fb_btn = document.createElement('button');
		var fb_icon = document.createElement('i');
		var fb_link = document.createElement('a');

	    var twit_btn = document.createElement('button');
	    var twit_icon = document.createElement('i');
	    var twit_link = document.createElement('a');
	    
	    var tum_btn = document.createElement('button');
	    var tum_icon = document.createElement('i');
	    var tum_link = document.createElement('a');

	    
	    img.src = './img/nerdfemale_badge.png';
	    img.style.margin = '0px';
	    btn.style.display = 'none';


	    fb_link.setAttribute('href', 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgoogle.com');
	    fb_link.setAttribute('target', '_blank');
	    fb_btn.setAttribute('class', 'fb-btn');
	    fb_icon.setAttribute('class', 'fa fa-facebook');


	    twit_link.setAttribute('href', 'https://twitter.com/intent/tweet?url=https://www.google.com/&text=Take%20the%20Geeks%20vs%20Nerds%20quiz!');
	    twit_link.setAttribute('target', '_blank');
	    twit_btn.setAttribute('class', 'twit-btn');
	    twit_icon.setAttribute('class', 'fa fa-twitter');


	    tum_link.setAttribute('href', 'http://www.tumblr.com/share?v=3&u=https://www.google.com/&t=Geeks%20vs%20Nerds%20Quiz!&s=');
	    tum_link.setAttribute('target', '_blank');
	    tum_btn.setAttribute('class', 'tum-btn');
	    tum_icon.setAttribute('class', 'fa fa-tumblr');


	    fb_icon.textContent = ' Facebook';
	    fb_btn.appendChild(fb_icon);
	    twit_icon.textContent = ' Twitter';
	    twit_btn.appendChild(twit_icon);
	    tum_icon.textContent = ' Tumblr';
	    tum_btn.appendChild(tum_icon);


	    fb_link.appendChild(fb_btn);
	    twit_link.appendChild(twit_btn);
	    tum_link.appendChild(tum_btn);


	    contentDiv.appendChild(img);
	    contentDiv.appendChild(br);
	    contentDiv.appendChild(fb_link);
	    contentDiv.appendChild(twit_link);
	    contentDiv.appendChild(tum_link);

	}
	else if(outcome == 4)
	{
		var contentDiv = document.getElementById('nerd_result');
	    var img = document.createElement('img');
	    var btn = document.getElementById('result-btn');
	   	var br = document.createElement('br');

	    var fb_btn = document.createElement('button');
		var fb_icon = document.createElement('i');
		var fb_link = document.createElement('a');

	    var twit_btn = document.createElement('button');
	    var twit_icon = document.createElement('i');
	    var twit_link = document.createElement('a');
	    
	    var tum_btn = document.createElement('button');
	    var tum_icon = document.createElement('i');
	    var tum_link = document.createElement('a');
	    

	    img.src = './img/nerdmale_badge.png';
	    img.style.margin = '0px';
	    btn.style.display = 'none';


	    fb_link.setAttribute('href', 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgoogle.com');
	    fb_link.setAttribute('target', '_blank');
	    fb_btn.setAttribute('class', 'fb-btn');
	    fb_icon.setAttribute('class', 'fa fa-facebook');


	    twit_link.setAttribute('href', 'https://twitter.com/intent/tweet?url=https://www.google.com/&text=Take%20the%20Geeks%20vs%20Nerds%20quiz!');
	    twit_link.setAttribute('target', '_blank');
	    twit_btn.setAttribute('class', 'twit-btn');
	    twit_icon.setAttribute('class', 'fa fa-twitter');


	    tum_link.setAttribute('href', 'http://www.tumblr.com/share?v=3&u=https://www.google.com/&t=Geeks%20vs%20Nerds%20Quiz!&s=');
	    tum_link.setAttribute('target', '_blank');
	    tum_btn.setAttribute('class', 'tum-btn');
	    tum_icon.setAttribute('class', 'fa fa-tumblr');


	    fb_icon.textContent = ' Facebook';
	    fb_btn.appendChild(fb_icon);
	    twit_icon.textContent = ' Twitter';
	    twit_btn.appendChild(twit_icon);
	    tum_icon.textContent = ' Tumblr';
	    tum_btn.appendChild(tum_icon);


	    fb_link.appendChild(fb_btn);
	    twit_link.appendChild(twit_btn);
	    tum_link.appendChild(tum_btn);


	    contentDiv.appendChild(img);
	    contentDiv.appendChild(br);
	    contentDiv.appendChild(fb_link);
	    contentDiv.appendChild(twit_link);
	    contentDiv.appendChild(tum_link);
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
				if(chosenOption("fourthOption") == "female")
				{
					return 1;
				}
				else if(chosenOption("fourthOption") == "male")
				{
					return 2;
				}
			}

			else if(chosenOption("thirdOption") == "startrek")
			{
				if(chosenOption("fourthOption") == "female")
				{
					return 1;
				}
				else if(chosenOption("fourthOption") == "male")
				{
					return 2;
				}
			} 
		}

		else if(chosenOption("secondOption") == "no")
		{
			if(chosenOption("thirdOption") == "startrek")
			{
				if(chosenOption("fourthOption") == "female")
				{
					return 3;
				}
				else if(chosenOption("fourthOption") == "male")
				{
					return 4;
				}
			}
			else if(chosenOption("thirdOption") == "starwars")
			{
				if(chosenOption("fourthOption") == "female")
				{
					return 1;
				}
				else if(chosenOption("fourthOption") == "male")
				{
					return 2;
				}
			}
		}  
	}
	else if(chosenOption("firstOption") == "introvert")
	{
		if(chosenOption("secondOption") == "yes")
		{
			if(chosenOption("thirdOption") == "starwars")
			{
				if(chosenOption("fourthOption") == "female")
				{
					return 1;
				}
				else if(chosenOption("fourthOption") == "male")
				{
					return 2;
				}
			}
			else if(chosenOption("thirdOption") == "startrek")
			{
				if(chosenOption("fourthOption") == "female")
				{
					return 3;
				}
				else if(chosenOption("fourthOption") == "male")
				{
					return 4;
				}
			}	
		}
		else if(chosenOption("secondOption") == "no")
		{
			if(chosenOption("thirdOption") == "startrek")
			{
				if(chosenOption("fourthOption") == "female")
				{
					return 3;
				}
				else if(chosenOption("fourthOption") == "male")
				{
					return 4;
				}
			}
			else if(chosenOption("thirdOption") == "starwars")
			{
				if(chosenOption("fourthOption") == "female")
				{
					return 3;
				}
				else if(chosenOption("fourthOption") == "male")
				{
					return 4;
				}
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
  