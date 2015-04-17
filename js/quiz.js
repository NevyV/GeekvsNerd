function outcome()
{
	var outcome = pickOutcome();

	if(outcome == 1)
	{
		var contentDiv = document.getElementById('geek_result');
	    var img = document.createElement('img');
	    var textarea = document.createElement('textarea');
	    var btn = document.getElementById('result-btn');
	    
	    var fb_btn = document.createElement('button');
		var fb_i = document.createElement('i');
	    var twit_btn = document.createElement('button');
	    var twit_i = document.createElement('i');
	    var google_btn = document.createElement('button');
	    var google_i = document.createElement('i');
	    var br = document.createElement('br');
	    
	    
	    img.src = './img/geekfemale_badge.png';
	    img.style.margin = '0px';
	    textarea.textContent = 'www.google.com';
	    btn.style.display = 'none';
	    
	    fb_btn.setAttribute('class', 'fb-btn');
	    fb_i.setAttribute('class', 'fa fa-facebook');
	    twit_btn.setAttribute('class', 'twit-btn');
	    twit_i.setAttribute('class', 'fa fa-twitter');
	    google_btn.setAttribute('class', 'google-btn');
	    google_i.setAttribute('class', 'fa fa-google');

	    
	    contentDiv.appendChild(img);
	    contentDiv.appendChild(textarea);
	   	contentDiv.appendChild(br);

	    contentDiv.appendChild(fb_btn);
	    contentDiv.appendChild(twit_btn);
	    contentDiv.appendChild(google_btn);
	    fb_btn.appendChild(fb_i);
	    fb_i.textContent = ' Facebook';
	    twit_btn.appendChild(twit_i);
	    twit_i.textContent = ' Twitter';
	    google_btn.appendChild(google_i);
	    google_i.textContent = ' Google Plus';
	}
	else if(outcome == 2)
	{
		var contentDiv = document.getElementById('geek_result');
	    var text = document.createElement('h4');
	    var img = document.createElement('img');
	    var textarea = document.createElement('textarea');
	    var btn = document.getElementById('result-btn');

	    var fb_btn = document.createElement('button');
		var fb_i = document.createElement('i');
	    var twit_btn = document.createElement('button');
	    var twit_i = document.createElement('i');
	    var google_btn = document.createElement('button');
	    var google_i = document.createElement('i');
	    var br = document.createElement('br');
	    
	    img.src = './img/geekmale_badge.png';
	    img.style.margin = '0px';
	    textarea.textContent = 'www.google.com';
	    btn.style.display = 'none';

	    fb_btn.setAttribute('class', 'fb-btn');
	    fb_i.setAttribute('class', 'fa fa-facebook');
	    twit_btn.setAttribute('class', 'twit-btn');
	    twit_i.setAttribute('class', 'fa fa-twitter');
	    google_btn.setAttribute('class', 'google-btn');
	    google_i.setAttribute('class', 'fa fa-google');

	    contentDiv.appendChild(img);
	    contentDiv.appendChild(textarea);
	    contentDiv.appendChild(br);

	    contentDiv.appendChild(fb_btn);
	    contentDiv.appendChild(twit_btn);
	    contentDiv.appendChild(google_btn);
	    fb_btn.appendChild(fb_i);
	    fb_i.textContent = ' Facebook';
	    twit_btn.appendChild(twit_i);
	    twit_i.textContent = ' Twitter';
	    google_btn.appendChild(google_i);
	    google_i.textContent = ' Google Plus';
	}
		else if(outcome == 3)
	{
		var contentDiv = document.getElementById('nerd_result');
	    var text = document.createElement('h4');
	    var img = document.createElement('img');
	    var textarea = document.createElement('textarea');
	    var btn = document.getElementById('result-btn');

	    var fb_btn = document.createElement('button');
		var fb_i = document.createElement('i');
	    var twit_btn = document.createElement('button');
	    var twit_i = document.createElement('i');
	    var google_btn = document.createElement('button');
	    var google_i = document.createElement('i');
	    var br = document.createElement('br');
	    
	    img.src = './img/nerdfemale_badge.png';
	    img.style.margin = '0px';
	    textarea.textContent = 'www.google.com';
	    btn.style.display = 'none';

	    fb_btn.setAttribute('class', 'fb-btn');
	    fb_i.setAttribute('class', 'fa fa-facebook');
	    twit_btn.setAttribute('class', 'twit-btn');
	    twit_i.setAttribute('class', 'fa fa-twitter');
	    google_btn.setAttribute('class', 'google-btn');
	    google_i.setAttribute('class', 'fa fa-google');

	    contentDiv.appendChild(img);
	    contentDiv.appendChild(textarea);
	    contentDiv.appendChild(br);

	    contentDiv.appendChild(fb_btn);
	    contentDiv.appendChild(twit_btn);
	    contentDiv.appendChild(google_btn);
	    fb_btn.appendChild(fb_i);
	    fb_i.textContent = ' Facebook';
	    twit_btn.appendChild(twit_i);
	    twit_i.textContent = ' Twitter';
	    google_btn.appendChild(google_i);
	    google_i.textContent = ' Google Plus';

	}
	else if(outcome == 4)
	{
		var contentDiv = document.getElementById('nerd_result');
	    var text = document.createElement('h4');
	    var img = document.createElement('img');
	    var textarea = document.createElement('textarea');
	    var btn = document.getElementById('result-btn');

	    var fb_btn = document.createElement('button');
		var fb_i = document.createElement('i');
	    var twit_btn = document.createElement('button');
	    var twit_i = document.createElement('i');
	    var google_btn = document.createElement('button');
	    var google_i = document.createElement('i');
	    var br = document.createElement('br');
	    
	    img.src = './img/nerdmale_badge.png';
	    img.style.margin = '0px';
	    textarea.textContent = 'www.google.com';
	    btn.style.display = 'none';

	    fb_btn.setAttribute('class', 'fb-btn');
	    fb_i.setAttribute('class', 'fa fa-facebook');
	    twit_btn.setAttribute('class', 'twit-btn');
	    twit_i.setAttribute('class', 'fa fa-twitter');
	    google_btn.setAttribute('class', 'google-btn');
	    google_i.setAttribute('class', 'fa fa-google');

	    contentDiv.appendChild(img);
	    contentDiv.appendChild(textarea);
	    contentDiv.appendChild(br);

	    contentDiv.appendChild(fb_btn);
	    contentDiv.appendChild(twit_btn);
	    contentDiv.appendChild(google_btn);
	    fb_btn.appendChild(fb_i);
	    fb_i.textContent = ' Facebook';
	    twit_btn.appendChild(twit_i);
	    twit_i.textContent = ' Twitter';
	    google_btn.appendChild(google_i);
	    google_i.textContent = ' Google Plus';
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
  