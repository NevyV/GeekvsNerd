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
	    
	    var fbPopUp = function() {
	    	window.open('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgoogle.com', '_blank', 'toolbar=yes, scrollbars=yes, resizable=yes, top=0, left=0, width=700, height=500');
	    }

	    var twitPopUp = function() {
	    	window.open('https://twitter.com/intent/tweet?url=https://www.google.com/&text=Take%20the%20Geeks%20vs%20Nerds%20quiz!', '_blank', 'toolbar=yes, scrollbars=yes, resizable=yes, top=0, left=0, width=700, height=500');
	    }

	    var tumPopUp = function() {
	    	window.open('http://www.tumblr.com/share?v=3&u=https://www.google.com/&t=Geeks%20vs%20Nerds%20Quiz!&s=', '_blank', 'toolbar=yes, scrollbars=yes, resizable=yes, top=0, left=0, width=700, height=500');
	    }


	    img.src = './img/geekfemale_badge.png';
	    img.style.margin = '0px';
	    btn.style.display = 'none';
	    

	    fb_link.addEventListener('click', fbPopUp);
	    fb_btn.setAttribute('class', 'fb-btn');
	    fb_icon.setAttribute('class', 'fa fa-facebook');


	    twit_link.addEventListener('click', twitPopUp);
	    twit_btn.setAttribute('class', 'twit-btn');
	    twit_icon.setAttribute('class', 'fa fa-twitter');


	    tum_link.addEventListener('click', tumPopUp);
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
	    
	    var fbPopUp = function() {
	    	window.open('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgoogle.com', '_blank', 'toolbar=yes, scrollbars=yes, resizable=yes, top=0, left=0, width=700, height=500');
	    }

	    var twitPopUp = function() {
	    	window.open('https://twitter.com/intent/tweet?url=https://www.google.com/&text=Take%20the%20Geeks%20vs%20Nerds%20quiz!', '_blank', 'toolbar=yes, scrollbars=yes, resizable=yes, top=0, left=0, width=700, height=500');
	    }

	    var tumPopUp = function() {
	    	window.open('http://www.tumblr.com/share?v=3&u=https://www.google.com/&t=Geeks%20vs%20Nerds%20Quiz!&s=', '_blank', 'toolbar=yes, scrollbars=yes, resizable=yes, top=0, left=0, width=700, height=500');
	    }


	    img.src = './img/geekmale_badge.png';
	    img.style.margin = '0px';
	    btn.style.display = 'none';


	    fb_link.addEventListener('click', fbPopUp);
	    fb_btn.setAttribute('class', 'fb-btn');
	    fb_icon.setAttribute('class', 'fa fa-facebook');


	    twit_link.addEventListener('click', twitPopUp);
	    twit_btn.setAttribute('class', 'twit-btn');
	    twit_icon.setAttribute('class', 'fa fa-twitter');


	    tum_link.addEventListener('click', tumPopUp);
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

	    var fbPopUp = function() {
	    	window.open('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgoogle.com', '_blank', 'toolbar=yes, scrollbars=yes, resizable=yes, top=0, left=0, width=700, height=500');
	    }

	    var twitPopUp = function() {
	    	window.open('https://twitter.com/intent/tweet?url=https://www.google.com/&text=Take%20the%20Geeks%20vs%20Nerds%20quiz!', '_blank', 'toolbar=yes, scrollbars=yes, resizable=yes, top=0, left=0, width=700, height=500');
	    }

	    var tumPopUp = function() {
	    	window.open('http://www.tumblr.com/share?v=3&u=https://www.google.com/&t=Geeks%20vs%20Nerds%20Quiz!&s=', '_blank', 'toolbar=yes, scrollbars=yes, resizable=yes, top=0, left=0, width=700, height=500');
	    }


	    img.src = './img/nerdfemale_badge.png';
	    img.style.margin = '0px';
	    btn.style.display = 'none';


	    fb_link.addEventListener('click', fbPopUp);
	    fb_btn.setAttribute('class', 'fb-btn');
	    fb_icon.setAttribute('class', 'fa fa-facebook');


	    twit_link.addEventListener('click', twitPopUp);
	    twit_btn.setAttribute('class', 'twit-btn');
	    twit_icon.setAttribute('class', 'fa fa-twitter');


	    tum_link.addEventListener('click', tumPopUp);
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
	    
	    var fbPopUp = function() {
	    	window.open('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgoogle.com', '_blank', 'toolbar=yes, scrollbars=yes, resizable=yes, top=0, left=0, width=700, height=500');
	    }

	    var twitPopUp = function() {
	    	window.open('https://twitter.com/intent/tweet?url=https://www.google.com/&text=Take%20the%20Geeks%20vs%20Nerds%20quiz!', '_blank', 'toolbar=yes, scrollbars=yes, resizable=yes, top=0, left=0, width=700, height=500');
	    }

	    var tumPopUp = function() {
	    	window.open('http://www.tumblr.com/share?v=3&u=https://www.google.com/&t=Geeks%20vs%20Nerds%20Quiz!&s=', '_blank', 'toolbar=yes, scrollbars=yes, resizable=yes, top=0, left=0, width=700, height=500');
	    }

	    
	    img.src = './img/nerdmale_badge.png';
	    img.style.margin = '0px';
	    btn.style.display = 'none';


	    fb_link.addEventListener('click', fbPopUp);
	    fb_btn.setAttribute('class', 'fb-btn');
	    fb_icon.setAttribute('class', 'fa fa-facebook');


	    twit_link.addEventListener('click', twitPopUp);
	    twit_btn.setAttribute('class', 'twit-btn');
	    twit_icon.setAttribute('class', 'fa fa-twitter');


	    tum_link.addEventListener('click', tumPopUp);
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

			if(chosenOption("thirdOption") == "desdev")
			{

				if(chosenOption("fourthOption") == "html")
				{

					if(chosenOption("fifthOption") == "starwars")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}
							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
					} 
					else if(chosenOption("fifthOption") == "startrek")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
					}
				}
				else if(chosenOption("fourthOption") == "binary")
				{

					if(chosenOption("fifthOption") == "starwars")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
					}
					else if(chosenOption("fifthOption") == "startrek")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 4;
								}
							} 
						}
					}
				}
			}
			else if(chosenOption("thirdOption") == "cop")
			{

				if(chosenOption("fourthOption") == "html")
				{

					if(chosenOption("fifthOption") == "starwars")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}
							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
					} 
					else if(chosenOption("fifthOption") == "startrek")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
					}
				}
				else if(chosenOption("fourthOption") == "binary")
				{

					if(chosenOption("fifthOption") == "starwars")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}
							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
					} 
					else if(chosenOption("fifthOption") == "startrek")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 4;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 4;
								}
							} 
						}
					}
				}
			}
		}
		else if(chosenOption("secondOption") == "no")
		{

			if(chosenOption("thirdOption") == "desdev")
			{

				if(chosenOption("fourthOption") == "html")
				{

					if(chosenOption("fifthOption") == "starwars")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}
							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
					} 
					else if(chosenOption("fifthOption") == "startrek")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
					}
				}
				else if(chosenOption("fourthOption") == "binary")
				{

					if(chosenOption("fifthOption") == "starwars")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
					}
				}
			}
			else if(chosenOption("thirdOption") == "cop")
			{
				if(chosenOption("fourthOption") == "html")
				{

					if(chosenOption("fifthOption") == "starwars")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
					}
				}
			}
		}
		else if(chosenOption("secondOption") == "no")
		{

			if(chosenOption("thirdOption") == "desdev")
			{

				if(chosenOption("fourthOption") == "html")
				{

					if(chosenOption("fifthOption") == "starwars")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}
							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
					} 
					else if(chosenOption("fifthOption") == "startrek")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 4;
								}
							} 
						}
					}
				}
				else if(chosenOption("fourthOption") == "binary")
				{

					if(chosenOption("fifthOption") == "starwars")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
					}
					else if(chosenOption("fifthOption") == "startrek")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 4;
								}
							} 
						}
					}
				}
			}
			else if(chosenOption("thirdOption") == "cop")
			{

				if(chosenOption("fourthOption") == "html")
				{

					if(chosenOption("fifthOption") == "starwars")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}
							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
					} 
					else if(chosenOption("fifthOption") == "startrek")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
					}
				}
				else if(chosenOption("fourthOption") == "binary")
				{

					if(chosenOption("fifthOption") == "starwars")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}
							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
					} 
					else if(chosenOption("fifthOption") == "startrek")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 4;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 4;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 4;
								}
							} 
						}
					}
				}
			}
		}
	}
	else if(chosenOption("firstOption") == "introvert")
	{
		if(chosenOption("secondOption") == "yes")
		{

			if(chosenOption("thirdOption") == "desdev")
			{

				if(chosenOption("fourthOption") == "html")
				{

					if(chosenOption("fifthOption") == "starwars")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}
							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
					} 
					else if(chosenOption("fifthOption") == "startrek")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 4;
								}
							} 
						}
					}
				}
				else if(chosenOption("fourthOption") == "binary")
				{

					if(chosenOption("fifthOption") == "starwars")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 4;
								}
							} 
						}
					}
					else if(chosenOption("fifthOption") == "startrek")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 4;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 4;
								}
							} 
						}
					}
				}
			}
			else if(chosenOption("thirdOption") == "cop")
			{

				if(chosenOption("fourthOption") == "html")
				{

					if(chosenOption("fifthOption") == "starwars")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}
							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 4;
								}
							} 
						}
					} 
					else if(chosenOption("fifthOption") == "startrek")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 4;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 4;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 4;
								}
							} 
						}
					}
				}
				else if(chosenOption("fourthOption") == "binary")
				{

					if(chosenOption("fifthOption") == "starwars")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}
							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
					} 
					else if(chosenOption("fifthOption") == "startrek")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 4;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 4;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 4;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 4;
								}
							} 
						}
					}
				}
			}
		}
		else if(chosenOption("secondOption") == "no")
		{

			if(chosenOption("thirdOption") == "desdev")
			{

				if(chosenOption("fourthOption") == "html")
				{

					if(chosenOption("fifthOption") == "starwars")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}
							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
					} 
					else if(chosenOption("fifthOption") == "startrek")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
					}
				}
				else if(chosenOption("fourthOption") == "binary")
				{

					if(chosenOption("fifthOption") == "starwars")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 2;
								}
							} 
						}
					}
				}
			}
			else if(chosenOption("thirdOption") == "cop")
			{
				if(chosenOption("fourthOption") == "html")
				{

					if(chosenOption("fifthOption") == "starwars")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 1;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 2;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 4;
								}
							} 
						}
					}
				}
				else if(chosenOption("fourthOption") == "binary")
				{

					if(chosenOption("fifthOption") == "starwars")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 4;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 4;
								}
							} 
						}
						if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 4;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 4;
								}
							} 
						}
					}
					else if(chosenOption("fifthOption") == "startrek")
					{

						if(chosenOption("sixthOption") == "consolepc")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 4;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 4;
								}
							} 
						}
						else if(chosenOption("sixthOption") == "board")
						{

							if(chosenOption("seventhOption") == "first2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eigthOption") == "male")
								{
									return 4;
								}
							}

							else if(chosenOption("seventhOption") == "second2")
							{
								if(chosenOption("eightOption") == "female")
								{
									return 3;
								}
								else if(chosenOption("eightOption") == "male")
								{
									return 4;
								}
							} 
						}
					}
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
  