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

function pickOutcome() {
	var geekPts =  0;
	var nerdPts = 0;

	//QUESTION 1
	if(chosenOption('firstOption') === 'extrovert') {
		geekPts = geekPts + 1;
		// alert(geekPts + ' GEEK PTS');
	} 
	if(chosenOption('firstOption') === 'introvert') {
		nerdPts = nerdPts + 1;
		// alert(nerdPts + ' NERD PTS');
	} 


	// QUESTION 2
	if(chosenOption('secondOption') === 'yes') {
		geekPts = geekPts + 1;
		// alert(geekPts + ' GEEK PTS');
	} 
	if(chosenOption('secondOption') === 'no') {
		nerdPts = nerdPts + 1;
		// alert(nerdPts + ' NERD PTS');
	}


	//QUESTION 3
	if(chosenOption('thirdOption') === 'animator') {
		geekPts = geekPts + 1;
	} 
	if(chosenOption('thirdOption') === 'scientist') {
		nerdPts = nerdPts + 1;
	}


	//QUESTION 4
	if(chosenOption('fourthOption') === 'html') {
		geekPts = geekPts + 1;
	} 
	if(chosenOption('fourthOption') === 'binary') {
		nerdPts = nerdPts + 1;
	}


	//QUESTION 5
	if(chosenOption('fifthOption') === 'starwars') {
		geekPts = geekPts + 1;
	} 
	if(chosenOption('fifthOption') === 'startrek') {
		nerdPts = nerdPts + 1;
	}


	//QUESTION 6
	if(chosenOption('sixthOption') === 'consolepc') {
		geekPts = geekPts + 1;
	} 
	if(chosenOption('sixthOption') === 'boardgames') {
		nerdPts = nerdPts + 1;
	}


	//QUESTION 8
	if(chosenOption('eighthOption') === 'female' && geekPts > nerdPts) {
		// alert(geekPts + ' GEEK PTS');
		return 1;
	} 
	if(chosenOption('eighthOption') === 'female' && geekPts < nerdPts) {
		// alert(nerdPts + ' NERD PTS');
		return 3;
	} 

	if(chosenOption('eighthOption') === 'male' && geekPts > nerdPts) {
		// alert(geekPts + ' GEEK PTS');
		return 2;
	}
	if(chosenOption('eighthOption') === 'male' && geekPts < nerdPts) {
		// alert(nerdPts + ' NERD PTS');
		return 4;
	}

	// alert(geekPts + ' GEEK PTS');
	// alert(nerdPts + ' NERD PTS');

}

function chosenOption(groupName) {
	var groupOptions = document.getElementsByName(groupName);
	
	for(var i = 0; i < groupOptions.length; i++)
	{
	   if(groupOptions[i].checked == true)
	   {
		   return groupOptions[i].value;
	   }
	}
	
 }
  