var my_choice = -2;
var comp_choice = -2;
var elem_opacity =0;
var result = 0;
var setInterval_id = setInterval(function(){ fade_in("story_div") },25);
var my_choice2;
var comp_choice2;
var my_score =0;
var comp_score = 0;
var animate_counter = 0;
var animate_mover = 0;
var setAnimate_id;
var animate_counter2 = 0;
var animate_mover2 = 0;
var setAnimate_id2;
var event_toggle=0;

function begin()
{
	event_toggle = 1;
	setInterval_id = setInterval(function(){ fade_out("story_div") },25);

}

function chose_rock()
{
	my_choice = 0;
	my_choice2 = "rock";
	
	document.getElementById("show_my_choice").style.display = 'block';
	setInterval_id = setInterval(function(){ fade_out("choices") },25);
	setTimeout(function() {displayResult();}, 550);
	

}
function chose_paper()
{
	my_choice = 1;	
	my_choice2 = "paper";
	
	document.getElementById("show_my_choice").style.display = 'block';
	setInterval_id = setInterval(function(){ fade_out("choices") },25);
	setTimeout(function() {displayResult();}, 550);	

}
function chose_sci()
{
	my_choice = 2;
	my_choice2 = "scissors";
	
	document.getElementById("show_my_choice").style.display = 'block';
	setInterval_id = setInterval(function(){ fade_out("choices") },25);
	setTimeout(function() {displayResult();}, 550);
}
function chose_liz()
{
	my_choice = 3;
	my_choice2 = "lizard";
	
	document.getElementById("show_my_choice").style.display = 'block';
	setInterval_id = setInterval(function(){ fade_out("choices") },25);
	setTimeout(function() {displayResult();}, 550);
}
function chose_spock()
{
	my_choice = 4;
	my_choice2 = "spock";
	
	document.getElementById("show_my_choice").style.display = 'block';
	setInterval_id = setInterval(function(){ fade_out("choices") },25);
	setTimeout(function() {displayResult();}, 550);
}

function fade_in(elem)
{
    if(elem_opacity<1)
    {
        var object = document.getElementById(elem);
        elem_opacity+=0.05;
        object.style.opacity=elem_opacity;
        
    }
    else
    {
        clearInterval(setInterval_id); 

     } 
}
function fade_out(elem)
{
    if(elem_opacity>0)
    {
        var object = document.getElementById(elem);
        elem_opacity-=0.05;
        object.style.opacity=elem_opacity;
        
    }
    else
    {
    	clearInterval(setInterval_id);
    	if(event_toggle==1)
    	{	event_toggle = 2;
    		document.getElementById("choices").style.display = 'block';
    		document.getElementById("end").style.display = 'block';
    		document.getElementById("story_div").style.display = 'none';
    		setInterval_id = setInterval(function(){ fade_in("choices") },25);
    	}
    }
}
 function displayResult()
 { 
	setInterval_id = setInterval(function(){ fade_in("show_my_choice") },25);
	setTimeout(function() {begin_animation();}, 550);
 	document.getElementById("choices").style.display = 'none';
 	if(my_choice==0)
	{
		my_choice2 = "rock1";
	}
	else if(my_choice==1)
	{
		my_choice2 = "paper1";
	}
	else if(my_choice==2)
	{
		my_choice2 = "sci1";
	}
	else if(my_choice==3)
	{
		my_choice2 = "liz1";
	}
	else if(my_choice==4)
	{
		my_choice2 = "spock1";
	}

	var list = [[-1,0,1,1,0],[1,-1,0,0,1],[0,1,-1,1,0],[0,1,0,-1,1],[1,0,1,0,-1]];
	comp_choice = Math.floor(Math.random() * 5);
	

	if(comp_choice==0)
	{
		comp_choice2 = "rock2";
	}

	else if(comp_choice==1)
	{
		comp_choice2 = "paper2";
	}
	else if(comp_choice==2)
	{
		comp_choice2 = "sci2";
	}
	else if(comp_choice==3)
	{
		comp_choice2 = "liz2";
	}
	else if(comp_choice==4)
	{
		comp_choice2 = "spock2";
	}
	result = list[my_choice][comp_choice];
	if(result==-1)
	{
		document.getElementById("end0").innerHTML = "D R A W"

	}
	else if(result==0)
	{	
		document.getElementById("end0").innerHTML = "GALACTUS WON "
		comp_score++;
		document.getElementById("end2").innerHTML ="Galactus " + comp_score;
		document.getElementById("end1").innerHTML = "You " + my_score;
	}
	else if(result==1)
	{	my_score++;
		document.getElementById("end0").innerHTML = "YOU WON "
		document.getElementById("end2").innerHTML ="Galactus " + comp_score;
		document.getElementById("end1").innerHTML = "You " + my_score;
	}
 }

function begin_animation()
{
	setAnimate_id= setInterval(function(){ move_weird("rock1") },100);
	setAnimate_id2= setInterval(function(){ move_weird2("rock2") },100);
}
function move_weird(elem)
{	
	if(animate_counter<10)
	{	

		animate_counter++;
		if(animate_mover==0)
		{
			
			animate_mover = 1;
			var object = document.getElementById(elem);
			object.style.top = '34%'; 
			object.style.left = '16%'; 

		}
		else
		{
			animate_mover =0;
			var object = document.getElementById(elem);
			object.style.top = '36%'; 
			object.style.left = '14%'; 
		}
	}

	else
	{
		var object = document.getElementById(elem);
		object.style.top = '35%'; 
		object.style.left = '15%';
		clearInterval(setAnimate_id);
		document.getElementById("rock1").src = document.getElementById(my_choice2).src;
	}

}

function move_weird2(elem)
{	
	if(animate_counter2<10)
	{	

		animate_counter2++;
		if(animate_mover2==0)
		{
			
			animate_mover2 = 1;
			var object = document.getElementById(elem);
			object.style.top = '34%'; 
			object.style.left = '76%'; 

		}
		else
		{
			animate_mover2 =0;
			var object = document.getElementById(elem);
			object.style.top = '36%'; 
			object.style.left = '74%'; 

		}
	}

	else
	{
		var object = document.getElementById(elem);
		object.style.top = '35%'; 
		object.style.left = '75%';
		clearInterval(setAnimate_id2);
		document.getElementById("rock2").src = document.getElementById(comp_choice2).src;
		elem_opacity = 0;
		setInterval_id = setInterval(function(){fade_in("end")},25);
		
	}

}
function restart()
{
	setInterval_id = setInterval(function(){fade_out("game")},25);
	setTimeout(function() {starter();}, 550);
}
function starter()
{	
	my_choice = -2;
	comp_choice = -2;
	elem_opacity =0;
	result = 0;
	my_choice2;
	comp_choice2;
	animate_counter = 0;
	animate_mover = 0;
	setAnimate_id;
	animate_counter2 = 0;
	animate_mover2 = 0;
	setAnimate_id2;
	document.getElementById("rock1").src = document.getElementById("rock").src
	document.getElementById("rock2").src = document.getElementById("rock").src
	document.getElementById("choices").style.display = 'block';
	document.getElementById("show_my_choice").style.opacity = 0;
	document.getElementById("end").style.opacity = 0;
	document.getElementById("game").style.opacity = 1;
	setInterval_id = setInterval(function(){ fade_in("choices") },25);

}

